import { z } from 'zod';

export const PublicJournalArticleDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  titleEn: z.string(),
  titleAr: z.string().nullable(),
  excerptEn: z.string().nullable(),
  excerptAr: z.string().nullable(),
  author: z.string().nullable(),
  category: z.string(),
  imageUrl: z.string().nullable(),
  publishedAt: z.string(),
});

export type PublicJournalArticleDTO = z.infer<typeof PublicJournalArticleDTOSchema>;
