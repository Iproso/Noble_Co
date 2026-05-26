import { describe, it, expect } from 'vitest';
import { isRtlLocale, flipIfRtl } from './utils';

describe('RTL Utils', () => {
  describe('isRtlLocale', () => {
    it('returns true for known RTL locales', () => {
      expect(isRtlLocale('ar')).toBe(true);
      expect(isRtlLocale('he')).toBe(true);
      expect(isRtlLocale('fa')).toBe(true);
      expect(isRtlLocale('ur')).toBe(true);
    });

    it('returns true for RTL locales with region codes', () => {
      expect(isRtlLocale('ar-EG')).toBe(true);
      expect(isRtlLocale('he-IL')).toBe(true);
      expect(isRtlLocale('fa-IR')).toBe(true);
      expect(isRtlLocale('ur-PK')).toBe(true);
    });

    it('returns false for known LTR locales', () => {
      expect(isRtlLocale('en')).toBe(false);
      expect(isRtlLocale('fr')).toBe(false);
      expect(isRtlLocale('es')).toBe(false);
      expect(isRtlLocale('de')).toBe(false);
    });

    it('returns false for LTR locales with region codes', () => {
      expect(isRtlLocale('en-US')).toBe(false);
      expect(isRtlLocale('fr-CA')).toBe(false);
      expect(isRtlLocale('es-ES')).toBe(false);
    });

    it('returns false for empty or invalid locales', () => {
      expect(isRtlLocale('')).toBe(false);
      expect(isRtlLocale('invalid-locale')).toBe(false);
    });
  });

  describe('flipIfRtl (locale overload)', () => {
    it('returns rtlValue when given an RTL locale', () => {
      expect(flipIfRtl('ar', 'ltr-value', 'rtl-value')).toBe('rtl-value');
      expect(flipIfRtl('he', 'left', 'right')).toBe('right');
    });

    it('returns ltrValue when given an LTR locale', () => {
      expect(flipIfRtl('en', 'ltr-value', 'rtl-value')).toBe('ltr-value');
      expect(flipIfRtl('fr', 'left', 'right')).toBe('left');
    });

    it('returns rtlValue when given an RTL locale with region code', () => {
      expect(flipIfRtl('ar-EG', 'ltr-value', 'rtl-value')).toBe('rtl-value');
    });

    it('returns ltrValue when given an LTR locale with region code', () => {
      expect(flipIfRtl('en-US', 'ltr-value', 'rtl-value')).toBe('ltr-value');
    });
  });

  describe('flipIfRtl (boolean overload)', () => {
    it('returns rtlValue when isRtl is true', () => {
      expect(flipIfRtl('ltr-value', 'rtl-value', true)).toBe('rtl-value');
      expect(flipIfRtl('left', 'right', true)).toBe('right');
    });

    it('returns ltrValue when isRtl is false', () => {
      expect(flipIfRtl('ltr-value', 'rtl-value', false)).toBe('ltr-value');
      expect(flipIfRtl('left', 'right', false)).toBe('left');
    });
  });
});
