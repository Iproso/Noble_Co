import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/db/client';
import { corsHeaders, handleCors } from '@/lib/security/cors';
import { logger } from '@/lib/logger';

export async function GET(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  try {
    const { data, error } = await supabaseAdmin
      .from('auctions')
      .select('*')
      .eq('is_active', true)
      .order('start_date', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ auctions: data || [] }, { headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Auction list error', { error });
    return NextResponse.json({ error: 'Failed to fetch auctions' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
