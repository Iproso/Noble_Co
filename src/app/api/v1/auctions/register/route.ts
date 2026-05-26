import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const registerSchema = z.object({
  auctionId: z.string().uuid(),
  termsAccepted: z.boolean(),
  termsVersion: z.string().min(1),
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
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    if (!parsed.data.termsAccepted) {
      return NextResponse.json({ error: 'Terms must be accepted' }, { status: 400, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { error } = await supabaseAdmin.from('auction_registrations').insert({
      auction_id: parsed.data.auctionId,
      user_id: user.id,
      terms_version: parsed.data.termsVersion,
      status: 'pending_approval',
    });
    if (error) throw error;

    return NextResponse.json({ success: true, status: 'pending_approval' }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Auction registration error', { error });
    return NextResponse.json({ error: 'Registration failed' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
