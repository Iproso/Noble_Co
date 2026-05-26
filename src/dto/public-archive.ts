import { z } from 'zod';

export const PublicArchiveRecordDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  titleEn: z.string(),
  titleAr: z.string().nullable(),
  summaryEn: z.string().nullable(),
  summaryAr: z.string().nullable(),
  category: z.string(),
  year: z.string().nullable(),
  imageUrl: z.string().nullable(),
  publishedAt: z.string(),
});

export type PublicArchiveRecordDTO = z.infer<typeof PublicArchiveRecordDTOSchema>;
