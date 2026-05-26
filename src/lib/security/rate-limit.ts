const rateMap = new Map<string, { count: number; resetAt: number }>();

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const DEFAULTS: RateLimitConfig = {
  windowMs: 60 * 1000,
  maxRequests: 30,
};

export function checkRateLimit(
  key: string,
  config: Partial<RateLimitConfig> = {},
): { allowed: boolean; remaining: number; resetAt: number } {
  const { windowMs, maxRequests } = { ...DEFAULTS, ...config };
  const now = Date.now();
  const entry = rateMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  entry.count++;
  if (entry.count > maxRequests) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  return { allowed: true, remaining: maxRequests - entry.count, resetAt: entry.resetAt };
}
