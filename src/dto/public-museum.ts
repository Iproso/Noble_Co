import { z } from 'zod';

export const PublicMuseumProfileDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  nameEn: z.string(),
  nameAr: z.string().nullable(),
  location: z.string().nullable(),
  summaryEn: z.string().nullable(),
  summaryAr: z.string().nullable(),
  imageUrl: z.string().nullable(),
});

export type PublicMuseumProfileDTO = z.infer<typeof PublicMuseumProfileDTOSchema>;
