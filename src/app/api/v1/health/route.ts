import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rate-limit';
import { getRequestId } from '@/lib/logger';

const startTime = Date.now();

export async function GET(request: Request) {
  const requestId = getRequestId();
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const rl = checkRateLimit(`health:${ip}`, { windowMs: 1000, maxRequests: 5 });

  if (!rl.allowed) {
    return NextResponse.json({ status: 'error', message: 'Too many requests', requestId }, { status: 429 });
  }

  const memory = process.memoryUsage();

  return NextResponse.json({
    status: 'ok',
    version: process.env.npm_package_version || '0.1.0',
    uptime: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
    requestId,
    checks: {
      memory: {
        heapUsed: `${Math.round(memory.heapUsed / 1024 / 1024)}MB`,
        heapTotal: `${Math.round(memory.heapTotal / 1024 / 1024)}MB`,
        rss: `${Math.round(memory.rss / 1024 / 1024)}MB`,
      },
      node: process.version,
      environment: process.env.NODE_ENV || 'development',
    },
  });
}
