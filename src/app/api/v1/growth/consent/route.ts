import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const consentSchema = z.object({
  userId: z.string().uuid(),
  consentType: z.string().min(1).max(64),
  version: z.string().min(1).max(16),
  granted: z.boolean(),
});

export async function POST(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  try {
    const body = await request.json();
    const parsed = consentSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { error } = await supabaseAdmin.from('consent_records').insert(parsed.data);
    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Consent record error', { error });
    return NextResponse.json({ error: 'Failed to record consent' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
