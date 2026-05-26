import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { createAuditEvent } from '@/lib/audit';
import { uploadOriginal, createPublicVariant, createThumbnail } from '@/lib/media';
import { isAllowedMimeType, isPathSafe } from '@/lib/media';
import { supabaseAdmin } from '@/lib/db/client';
import { handleCors, corsHeaders } from '@/lib/security/cors';
import { checkRateLimit } from '@/lib/security/rate-limit';
import { logger } from '@/lib/logger';

export async function POST(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  const supabase = await createServerSupabaseClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: corsHeaders(request.headers.get('origin')) });
  }

  const rateCheck = checkRateLimit(`upload:${user.id}`, { windowMs: 60000, maxRequests: 10 });
  if (!rateCheck.allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429, headers: corsHeaders(request.headers.get('origin')) });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const assetId = formData.get('assetId') as string | null;

    if (!file || !assetId) {
      return NextResponse.json(
        { error: 'Missing file or assetId' },
        { status: 400, headers: corsHeaders(request.headers.get('origin')) },
      );
    }

    if (!isAllowedMimeType(file.type)) {
      return NextResponse.json(
        { error: `File type ${file.type} is not allowed` },
        { status: 400, headers: corsHeaders(request.headers.get('origin')) },
      );
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size exceeds 50MB limit' },
        { status: 400, headers: corsHeaders(request.headers.get('origin')) },
      );
    }

    const original = await uploadOriginal(file, assetId, user.id);
    if (original.error) {
      return NextResponse.json({ error: original.error }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
    }

    const publicVariant = await createPublicVariant(original.path, assetId);

    const thumbnail = await createThumbnail(original.path, assetId);

    const { error: dbError } = await supabaseAdmin.from('media_assets').insert({
      asset_id: assetId,
      original_filename: file.name,
      storage_path: original.path,
      mime_type: file.type,
      file_size: file.size,
      is_public: false,
      visibility_state: 'private',
      review_state: 'pending',
      exif_stripped: true,
      uploaded_by: user.id,
    });

    if (dbError) {
      logger.error('Media asset record error', { error: dbError });
    }

    await createAuditEvent({
      action: 'media.upload',
      actorId: user.id,
      resourceType: 'media_asset',
      resourceId: assetId,
      details: { filename: file.name, size: file.size, mime: file.type },
    });

    return NextResponse.json({
      originalPath: original.path,
      publicUrl: publicVariant.publicUrl,
      thumbnailUrl: thumbnail.publicUrl,
    }, { headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Upload error', { error });
    return NextResponse.json({ error: 'Upload failed' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
