import { z } from 'zod';

export const PublicLibraryPageDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string().nullable(),
  type: z.string(),
  imageUrl: z.string().nullable(),
  category: z.string().nullable(),
  publishedAt: z.string().nullable(),
});

export type PublicLibraryPageDTO = z.infer<typeof PublicLibraryPageDTOSchema>;

export const PublicGlossaryTermDTOSchema = z.object({
  term: z.string(),
  definition: z.string(),
  category: z.string().nullable(),
  relatedTerms: z.array(z.string()),
});

export type PublicGlossaryTermDTO = z.infer<typeof PublicGlossaryTermDTOSchema>;

export function toPublicLibraryPage(raw: Record<string, unknown>): PublicLibraryPageDTO {
  return PublicLibraryPageDTOSchema.parse({
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt ?? null,
    type: raw.type,
    imageUrl: raw.image_url ?? null,
    category: raw.category ?? null,
    publishedAt: raw.published_at ?? null,
  });
}
