import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const leadSchema = z.object({
  name: z.string().min(1).max(128),
  email: z.string().email(),
  message: z.string().max(2000).optional(),
  source: z.string().max(64).optional(),
});

export async function POST(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { error } = await supabaseAdmin.from('leads').insert(parsed.data);
    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Lead capture error', { error });
    return NextResponse.json({ error: 'Failed to capture lead' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
