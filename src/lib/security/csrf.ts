import { createHash, randomBytes } from 'crypto';

const CSRF_SECRET = process.env.CSRF_SECRET || randomBytes(32).toString('hex');

export function generateCsrfToken(sessionId: string): string {
  const timestamp = Math.floor(Date.now() / 60000).toString();
  const raw = `${sessionId}:${timestamp}:${CSRF_SECRET}`;
  return createHash('sha256').update(raw).digest('hex');
}

export function validateCsrfToken(token: string, sessionId: string): boolean {
  const current = Math.floor(Date.now() / 60000);
  for (let offset = 0; offset < 2; offset++) {
    const raw = `${sessionId}:${current - offset}:${CSRF_SECRET}`;
    const expected = createHash('sha256').update(raw).digest('hex');
    if (token === expected) return true;
  }
  return false;
}
