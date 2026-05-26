import { z } from 'zod';

export const PublicLegalTrustPageDTOSchema = z.object({
  slug: z.string(),
  title: z.string(),
  body: z.any(),
  version: z.number(),
  publishedAt: z.string().nullable(),
  locale: z.string(),
});

export type PublicLegalTrustPageDTO = z.infer<typeof PublicLegalTrustPageDTOSchema>;

export function toPublicLegalTrustPage(raw: Record<string, unknown>): PublicLegalTrustPageDTO {
  return PublicLegalTrustPageDTOSchema.parse({
    slug: raw.slug,
    title: raw.title,
    body: raw.body,
    version: raw.version ?? 1,
    publishedAt: raw.published_at ?? null,
    locale: raw.locale,
  });
}
