import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const inviteSchema = z.object({
  introducerName: z.string().min(1).max(128),
  introducerEmail: z.string().email(),
  inviteeName: z.string().min(1).max(128),
  inviteeEmail: z.string().email(),
  relationship: z.string().max(256).optional(),
  notes: z.string().max(2000).optional(),
});

export async function POST(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  try {
    const supabase = await createServerSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    const body = await request.json();
    const parsed = inviteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { error } = await supabaseAdmin.from('referral_leads').insert({
      ...parsed.data,
      introducerUserId: user?.id || null,
      status: 'pending',
    });
    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Introduction invitation submitted' }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Introduction invite error', { error });
    return NextResponse.json({ error: 'Failed to submit introduction' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
