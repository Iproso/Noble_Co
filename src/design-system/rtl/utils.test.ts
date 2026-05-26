import { describe, it, expect } from 'vitest';
import { isRtlLocale, flipIfRtl } from './utils';

describe('RTL Utils', () => {
  describe('isRtlLocale', () => {
    it('returns true for base RTL locales', () => {
      expect(isRtlLocale('ar')).toBe(true);
      expect(isRtlLocale('he')).toBe(true);
      expect(isRtlLocale('fa')).toBe(true);
      expect(isRtlLocale('ur')).toBe(true);
    });

    it('returns true for RTL locales with region codes', () => {
      expect(isRtlLocale('ar-EG')).toBe(true);
      expect(isRtlLocale('he-IL')).toBe(true);
    });

    it('returns false for base LTR locales', () => {
      expect(isRtlLocale('en')).toBe(false);
      expect(isRtlLocale('fr')).toBe(false);
      expect(isRtlLocale('es')).toBe(false);
    });

    it('returns false for LTR locales with region codes', () => {
      expect(isRtlLocale('en-US')).toBe(false);
      expect(isRtlLocale('fr-CA')).toBe(false);
    });

    it('returns false for empty or invalid strings', () => {
      expect(isRtlLocale('')).toBe(false);
      expect(isRtlLocale('invalid')).toBe(false);
    });

    it('returns false for locales that merely contain an RTL prefix', () => {
      expect(isRtlLocale('aro')).toBe(false);
      expect(isRtlLocale('en-ar')).toBe(false);
    });
  });

  describe('flipIfRtl', () => {
    it('returns rtlValue when locale is RTL', () => {
      expect(flipIfRtl('ar', 'left', 'right')).toBe('right');
      expect(flipIfRtl('he-IL', 'left', 'right')).toBe('right');
    });

    it('returns ltrValue when locale is LTR', () => {
      expect(flipIfRtl('en', 'left', 'right')).toBe('left');
      expect(flipIfRtl('en-US', 'left', 'right')).toBe('left');
    });
  });
});
