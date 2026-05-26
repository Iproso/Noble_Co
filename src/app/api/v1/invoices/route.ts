import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const invoiceSchema = z.object({
  lotId: z.string().uuid(),
  buyerId: z.string().uuid(),
  amount: z.number().positive(),
  currency: z.string().length(3).default('USD'),
  description: z.string().max(2000),
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
    const parsed = invoiceSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { data, error } = await supabaseAdmin.from('invoices').insert({
      ...parsed.data,
      status: 'draft',
      created_by: user.id,
    }).select('id').single();

    if (error) throw error;

    return NextResponse.json({ id: data.id, status: 'draft' }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Invoice creation error', { error });
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
