import { describe, it, expect } from 'vitest';
import {
  getPublicImageUrl,
  getThumbnailUrl,
  isPathSafe,
  isAllowedMimeType,
  isImageMimeType,
} from './security';

describe('Media Security Utilities', () => {
  describe('getPublicImageUrl', () => {
    it('appends strip=all to a standard URL', () => {
      const result = getPublicImageUrl('https://example.com/image.jpg');
      expect(result).toBe('https://example.com/image.jpg?strip=all');
    });

    it('correctly appends to a URL with existing query parameters', () => {
      const result = getPublicImageUrl('https://example.com/image.jpg?v=1');
      expect(result).toBe('https://example.com/image.jpg?v=1&strip=all');
    });

    it('overwrites strip parameter if it already exists', () => {
      const result = getPublicImageUrl('https://example.com/image.jpg?strip=none');
      expect(result).toBe('https://example.com/image.jpg?strip=all');
    });

    it('throws TypeError on invalid URL', () => {
      expect(() => getPublicImageUrl('not-a-url')).toThrow(TypeError);
    });
  });

  describe('getThumbnailUrl', () => {
    it('appends strip=all, width=400, quality=80 by default', () => {
      const result = getThumbnailUrl('https://example.com/image.jpg');
      expect(result).toBe('https://example.com/image.jpg?strip=all&width=400&quality=80');
    });

    it('appends correct width when size is specified', () => {
      const result = getThumbnailUrl('https://example.com/image.jpg', 800);
      expect(result).toBe('https://example.com/image.jpg?strip=all&width=800&quality=80');
    });

    it('handles URLs with existing query parameters', () => {
      const result = getThumbnailUrl('https://example.com/image.jpg?v=2', 200);
      expect(result).toBe('https://example.com/image.jpg?v=2&strip=all&width=200&quality=80');
    });

    it('throws TypeError on invalid URL', () => {
      expect(() => getThumbnailUrl('not-a-url')).toThrow(TypeError);
    });
  });

  describe('isPathSafe', () => {
    it('returns true for safe relative paths', () => {
      expect(isPathSafe('images/photo.jpg')).toBe(true);
      expect(isPathSafe('file.png')).toBe(true);
      expect(isPathSafe('folder/subfolder/file.webp')).toBe(true);
    });

    it('returns false for paths containing ..', () => {
      expect(isPathSafe('../images/photo.jpg')).toBe(false);
      expect(isPathSafe('images/../../photo.jpg')).toBe(false);
      expect(isPathSafe('..')).toBe(false);
    });

    it('returns false for absolute paths starting with /', () => {
      expect(isPathSafe('/etc/passwd')).toBe(false);
      expect(isPathSafe('/images/photo.jpg')).toBe(false);
      expect(isPathSafe('/')).toBe(false);
    });

    it('returns false for paths containing backslashes', () => {
      expect(isPathSafe('images\\photo.jpg')).toBe(false);
      expect(isPathSafe('C:\\Windows\\System32')).toBe(false);
    });
  });

  describe('isAllowedMimeType', () => {
    it('returns true for allowed media MIME types', () => {
      expect(isAllowedMimeType('image/jpeg')).toBe(true);
      expect(isAllowedMimeType('image/png')).toBe(true);
      expect(isAllowedMimeType('application/pdf')).toBe(true);
      expect(isAllowedMimeType('text/plain')).toBe(true);
    });

    it('returns false for denied or unknown MIME types', () => {
      expect(isAllowedMimeType('application/json')).toBe(false);
      expect(isAllowedMimeType('text/html')).toBe(false);
      expect(isAllowedMimeType('image/bmp')).toBe(false);
      expect(isAllowedMimeType('application/x-sh')).toBe(false);
    });
  });

  describe('isImageMimeType', () => {
    it('returns true for allowed image MIME types', () => {
      expect(isImageMimeType('image/jpeg')).toBe(true);
      expect(isImageMimeType('image/png')).toBe(true);
      expect(isImageMimeType('image/webp')).toBe(true);
      expect(isImageMimeType('image/avif')).toBe(true);
      expect(isImageMimeType('image/tiff')).toBe(true);
    });

    it('returns false for allowed non-image MIME types', () => {
      expect(isImageMimeType('application/pdf')).toBe(false);
      expect(isImageMimeType('application/xml')).toBe(false);
      expect(isImageMimeType('text/plain')).toBe(false);
    });

    it('returns false for denied MIME types', () => {
      expect(isImageMimeType('image/bmp')).toBe(false);
      expect(isImageMimeType('image/svg+xml')).toBe(false);
      expect(isImageMimeType('application/json')).toBe(false);
    });
  });
});
