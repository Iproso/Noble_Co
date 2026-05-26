import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { checkRateLimit } from './rate-limit';

describe('checkRateLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should allow the first request with default config', () => {
    const key = 'default-config-test';
    const now = Date.now();

    const result = checkRateLimit(key);

    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(29); // 30 - 1
    expect(result.resetAt).toBe(now + 60 * 1000); // default window is 60s
  });

  it('should allow requests up to the maxRequests limit', () => {
    const key = 'max-requests-test';

    for (let i = 0; i < 30; i++) {
      const result = checkRateLimit(key);
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(29 - i);
    }

    // 31st request should fail
    const result = checkRateLimit(key);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it('should use custom configuration', () => {
    const key = 'custom-config-test';
    const config = { windowMs: 10000, maxRequests: 5 };
    const now = Date.now();

    const result = checkRateLimit(key, config);

    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4);
    expect(result.resetAt).toBe(now + 10000);

    // Exhaust the limit
    for (let i = 0; i < 4; i++) {
      checkRateLimit(key, config);
    }

    const failedResult = checkRateLimit(key, config);
    expect(failedResult.allowed).toBe(false);
  });

  it('should reset after the window expires', () => {
    const key = 'reset-window-test';
    const config = { windowMs: 1000, maxRequests: 2 };

    checkRateLimit(key, config); // 1 remaining
    checkRateLimit(key, config); // 0 remaining

    const failedResult = checkRateLimit(key, config); // Not allowed
    expect(failedResult.allowed).toBe(false);

    // Advance time past the window
    vi.advanceTimersByTime(1001);

    // Should be allowed again
    const newResult = checkRateLimit(key, config);
    expect(newResult.allowed).toBe(true);
    expect(newResult.remaining).toBe(1);
    // Reset time should be now + windowMs
    expect(newResult.resetAt).toBe(Date.now() + 1000);
  });

  it('should track different keys independently', () => {
    const key1 = 'independent-key-1';
    const key2 = 'independent-key-2';
    const config = { windowMs: 1000, maxRequests: 1 };

    const result1 = checkRateLimit(key1, config);
    expect(result1.allowed).toBe(true);

    const result2 = checkRateLimit(key2, config);
    expect(result2.allowed).toBe(true);

    const fail1 = checkRateLimit(key1, config);
    expect(fail1.allowed).toBe(false);

    const fail2 = checkRateLimit(key2, config);
    expect(fail2.allowed).toBe(false);
  });
});
