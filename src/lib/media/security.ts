// EXIF/GPS stripping is performed server-side via Supabase Storage
// image transformation parameters.
// The `?strip=all` parameter removes all metadata from public variants.

export function getPublicImageUrl(baseUrl: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set('strip', 'all');
  return url.toString();
}

export function getThumbnailUrl(baseUrl: string, size = 400): string {
  const url = new URL(baseUrl);
  url.searchParams.set('strip', 'all');
  url.searchParams.set('width', String(size));
  url.searchParams.set('quality', '80');
  return url.toString();
}

// Path validation to prevent directory traversal
export function isPathSafe(path: string): boolean {
  if (path.includes('..')) return false;
  if (path.startsWith('/')) return false;
  if (path.includes('\\')) return false;
  return true;
}

// Allowed MIME types for media uploads
export const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/tiff',
  'application/pdf',
  'application/xml',
  'text/plain',
];

export const ALLOWED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/tiff',
];

export function isAllowedMimeType(mimeType: string): boolean {
  return ALLOWED_MIME_TYPES.includes(mimeType);
}

export function isImageMimeType(mimeType: string): boolean {
  return ALLOWED_IMAGE_MIME_TYPES.includes(mimeType);
}
