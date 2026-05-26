import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const viewingSchema = z.object({
  assetId: z.string().uuid(),
  preferredDate: z.string(),
  preferredTime: z.string().optional(),
  locationNotes: z.string().max(1000).optional(),
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
    const parsed = viewingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { error } = await supabaseAdmin.from('viewing_appointments').insert({
      ...parsed.data,
      user_id: user.id,
      status: 'pending',
    });
    if (error) throw error;

    return NextResponse.json({ success: true, status: 'pending' }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Viewing request error', { error });
    return NextResponse.json({ error: 'Failed to submit viewing request' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
