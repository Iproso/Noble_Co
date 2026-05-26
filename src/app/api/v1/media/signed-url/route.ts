import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { createSignedUrl, isPathSafe } from '@/lib/media';
import { handleCors, corsHeaders } from '@/lib/security/cors';
import { logger } from '@/lib/logger';
import { z } from 'zod';

const requestSchema = z.object({
  path: z.string().min(1),
  expiresInSeconds: z.number().int().min(60).max(3600).default(3600),
});

export async function POST(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: corsHeaders(request.headers.get('origin')) });
    }

    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 422, headers: corsHeaders(request.headers.get('origin')) },
      );
    }

    const { path, expiresInSeconds } = parsed.data;

    if (!isPathSafe(path)) {
      return NextResponse.json(
        { error: 'Invalid path' },
        { status: 400, headers: corsHeaders(request.headers.get('origin')) }
      );
    }

    const signedUrl = await createSignedUrl(path, Math.min(expiresInSeconds, 3600));

    if (!signedUrl) {
      return NextResponse.json({ error: 'Failed to generate signed URL' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
    }

    return NextResponse.json({ signedUrl, expiresIn: Math.min(expiresInSeconds, 3600) }, { headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Signed URL error', { error });
    return NextResponse.json({ error: 'Failed to generate signed URL' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
