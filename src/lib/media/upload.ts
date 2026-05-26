import { supabaseAdmin } from '@/lib/db/client';

const STORAGE_BUCKET = 'media';
const ORIGINALS_PREFIX = 'originals';
const PUBLIC_PREFIX = 'public';
const THUMBNAILS_PREFIX = 'thumbnails';

export interface UploadResult {
  path: string;
  publicUrl: string;
  signedUrl: string;
  error?: string;
}

export async function uploadOriginal(
  file: File,
  assetId: string,
  userId: string,
): Promise<UploadResult> {
  const extension = file.name.split('.').pop() || 'jpg';
  const filename = `${crypto.randomUUID()}.${extension}`;
  const storagePath = `${ORIGINALS_PREFIX}/${assetId}/${filename}`;

  const { error: uploadError } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .upload(storagePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type,
    });

  if (uploadError) {
    return { path: '', publicUrl: '', signedUrl: '', error: uploadError.message };
  }

  // Generate signed URL (short TTL for private originals)
  const { data: signedData } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .createSignedUrl(storagePath, 3600);

  return {
    path: storagePath,
    publicUrl: '',
    signedUrl: signedData?.signedUrl || '',
  };
}

export async function createPublicVariant(
  originalPath: string,
  assetId: string,
): Promise<UploadResult> {
  const filename = originalPath.split('/').pop() || 'variant.jpg';
  const publicPath = `${PUBLIC_PREFIX}/${assetId}/${filename}`;

  const { data: existing } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .list(`${PUBLIC_PREFIX}/${assetId}`);

  if (existing?.some((f) => f.name === filename)) {
    const { data: publicUrl } = supabaseAdmin.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(publicPath);

    return {
      path: publicPath,
      publicUrl: publicUrl.publicUrl,
      signedUrl: '',
    };
  }

  // Copy original to public path (EXIF stripping happens at transform level)
  const { data: copyData, error: copyError } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .copy(originalPath, publicPath);

  if (copyError) {
    return { path: '', publicUrl: '', signedUrl: '', error: copyError.message };
  }

  const { data: publicUrl } = supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(publicPath);

  return {
    path: publicPath,
    publicUrl: publicUrl.publicUrl,
    signedUrl: '',
  };
}

export async function createThumbnail(
  originalPath: string,
  assetId: string,
): Promise<UploadResult> {
  const filename = originalPath.split('/').pop() || 'thumb.jpg';
  const thumbPath = `${THUMBNAILS_PREFIX}/${assetId}/${filename}`;

  const { data: existing } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .list(`${THUMBNAILS_PREFIX}/${assetId}`);

  if (existing?.some((f) => f.name === filename)) {
    const { data: publicUrl } = supabaseAdmin.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(thumbPath);

    return {
      path: thumbPath,
      publicUrl: publicUrl.publicUrl,
      signedUrl: '',
    };
  }

  // Copy to thumbnail path (transforms applied via URL)
  const { error: copyError } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .copy(originalPath, thumbPath);

  if (copyError) {
    return { path: '', publicUrl: '', signedUrl: '', error: copyError.message };
  }

  const { data: publicUrl } = supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(thumbPath);

  return {
    path: thumbPath,
    publicUrl: publicUrl.publicUrl,
    signedUrl: '',
  };
}

export async function createSignedUrl(
  path: string,
  expiresInSeconds = 3600,
): Promise<string | null> {
  const { data } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .createSignedUrl(path, expiresInSeconds);

  return data?.signedUrl ?? null;
}

export async function deleteMedia(path: string): Promise<boolean> {
  const { error } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .remove([path]);

  return !error;
}

export function getPublicUrl(path: string): string {
  const { data } = supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(path);

  return data.publicUrl;
}

export function getOptimizedImageUrl(
  path: string,
  options?: { width?: number; height?: number; quality?: number },
): string {
  const baseUrl = getPublicUrl(path);
  if (!options) return baseUrl;

  const params = new URLSearchParams();
  if (options.width) params.set('width', String(options.width));
  if (options.height) params.set('height', String(options.height));
  if (options.quality) params.set('quality', String(options.quality));

  return `${baseUrl}?${params.toString()}`;
}
