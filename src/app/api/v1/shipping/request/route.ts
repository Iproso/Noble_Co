import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

const shippingSchema = z.object({
  assetId: z.string().uuid(),
  pickupAddress: z.string().min(1).max(500),
  deliveryAddress: z.string().min(1).max(500),
  preferredDate: z.string().optional(),
  specialInstructions: z.string().max(2000).optional(),
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
    const parsed = shippingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request', details: parsed.error.flatten() }, { status: 422, headers: corsHeaders(request.headers.get('origin')) });
    }

    const { error } = await supabaseAdmin.from('shipping_requests').insert({
      ...parsed.data,
      user_id: user.id,
      status: 'pending',
    });
    if (error) throw error;

    return NextResponse.json({ success: true, status: 'pending' }, { status: 201, headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Shipping request error', { error });
    return NextResponse.json({ error: 'Failed to submit shipping request' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
