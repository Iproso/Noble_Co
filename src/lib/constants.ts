export const SITE_NAME = 'Noble Collectors';
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/tiff', 'application/pdf', 'application/xml', 'text/plain'];
export const SIGNED_URL_TTL = 3600; // 1 hour in seconds
export const DRAFT_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
export const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'] as const;
export const DEFAULT_LOCALE = 'en';
export const API_VERSION = 'v1';
