import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
];

const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];
const ALLOWED_HEADERS = ['Content-Type', 'Authorization', 'X-CSRF-Token'];

export function corsHeaders(origin: string | null): Record<string, string> {
  const allowOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': ALLOWED_METHODS.join(', '),
    'Access-Control-Allow-Headers': ALLOWED_HEADERS.join(', '),
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin',
  };
}

export function handleCors(request: NextRequest): NextResponse | null {
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders(request.headers.get('origin')),
    });
  }
  return null;
}
