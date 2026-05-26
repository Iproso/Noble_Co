import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { generateCsrfToken, validateCsrfToken } from '../csrf';

describe('CSRF Security Module', () => {
  const mockSessionId = 'test-session-123';
  const mockSessionId2 = 'another-session-456';

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('generateCsrfToken', () => {
    it('generates a string token', () => {
      const token = generateCsrfToken(mockSessionId);
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(0);
    });

    it('generates the same token within the same minute', () => {
      const token1 = generateCsrfToken(mockSessionId);

      // Advance by 30 seconds
      vi.advanceTimersByTime(30 * 1000);
      const token2 = generateCsrfToken(mockSessionId);

      expect(token1).toBe(token2);
    });

    it('generates different tokens for different sessions', () => {
      const token1 = generateCsrfToken(mockSessionId);
      const token2 = generateCsrfToken(mockSessionId2);

      expect(token1).not.toBe(token2);
    });

    it('generates different tokens across different minutes', () => {
      const token1 = generateCsrfToken(mockSessionId);

      // Advance by 61 seconds (next minute)
      vi.advanceTimersByTime(61 * 1000);
      const token2 = generateCsrfToken(mockSessionId);

      expect(token1).not.toBe(token2);
    });
  });

  describe('validateCsrfToken', () => {
    it('accepts a valid token for the same session', () => {
      const token = generateCsrfToken(mockSessionId);
      expect(validateCsrfToken(token, mockSessionId)).toBe(true);
    });

    it('rejects a valid token for a different session', () => {
      const token = generateCsrfToken(mockSessionId);
      expect(validateCsrfToken(token, mockSessionId2)).toBe(false);
    });

    it('accepts a token from the previous minute (1 minute offset)', () => {
      const token = generateCsrfToken(mockSessionId);

      // Advance by 1 minute
      vi.advanceTimersByTime(60 * 1000);

      // Should still validate
      expect(validateCsrfToken(token, mockSessionId)).toBe(true);
    });

    it('rejects a token from 2 minutes ago (beyond 1 minute offset)', () => {
      const token = generateCsrfToken(mockSessionId);

      // Advance by 2 minutes
      vi.advanceTimersByTime(2 * 60 * 1000);

      // Should fail validation
      expect(validateCsrfToken(token, mockSessionId)).toBe(false);
    });

    it('rejects invalid or malformed tokens', () => {
      expect(validateCsrfToken('', mockSessionId)).toBe(false);
      expect(validateCsrfToken('invalid-token', mockSessionId)).toBe(false);
      expect(validateCsrfToken('1234567890abcdef', mockSessionId)).toBe(false);
    });
  });
});
