import { describe, it, expect } from 'vitest';
import { isPathSafe } from './security';

describe('isPathSafe', () => {
  it('returns true for safe file names', () => {
    expect(isPathSafe('image.jpg')).toBe(true);
    expect(isPathSafe('my-photo_123.png')).toBe(true);
  });

  it('returns true for safe relative paths', () => {
    expect(isPathSafe('folder/image.png')).toBe(true);
    expect(isPathSafe('users/123/photos/img.webp')).toBe(true);
    expect(isPathSafe('./image.jpg')).toBe(true); // Technically starts with . but not .. or /
  });

  it('returns false for paths containing directory traversal (..)', () => {
    expect(isPathSafe('../image.jpg')).toBe(false);
    expect(isPathSafe('folder/../image.jpg')).toBe(false);
    expect(isPathSafe('..')).toBe(false);
    expect(isPathSafe('foo/bar/../../baz')).toBe(false);
  });

  it('returns false for absolute paths starting with /', () => {
    expect(isPathSafe('/image.jpg')).toBe(false);
    expect(isPathSafe('/etc/passwd')).toBe(false);
    expect(isPathSafe('/')).toBe(false);
  });

  it('returns false for paths containing Windows-style backslashes', () => {
    expect(isPathSafe('folder\\image.jpg')).toBe(false);
    expect(isPathSafe('C:\\Windows\\System32')).toBe(false);
    expect(isPathSafe('\\')).toBe(false);
  });
});
