import { z } from 'zod';

export const PublicMediaVariantDTOSchema = z.object({
  id: z.string(),
  mediaId: z.string(),
  variantType: z.enum(['thumbnail', 'public', 'watermark', 'original']),
  url: z.string(),
  width: z.number().nullable(),
  height: z.number().nullable(),
  fileSize: z.number().nullable(),
  mimeType: z.string().nullable(),
  createdAt: z.string(),
});

export type PublicMediaVariantDTO = z.infer<typeof PublicMediaVariantDTOSchema>;

export function toPublicMediaVariant(raw: Record<string, unknown>): PublicMediaVariantDTO {
  return PublicMediaVariantDTOSchema.parse({
    id: raw.id,
    mediaId: raw.media_id,
    variantType: raw.variant_type,
    url: raw.storage_path,
    width: raw.width ?? null,
    height: raw.height ?? null,
    fileSize: raw.file_size ?? null,
    mimeType: raw.mime_type ?? null,
    createdAt: raw.created_at as string,
  });
}
