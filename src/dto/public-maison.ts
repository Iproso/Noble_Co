import { z } from 'zod';

export const PublicMaisonHeritageDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  nameEn: z.string(),
  nameAr: z.string().nullable(),
  foundedYear: z.string().nullable(),
  specialtyEn: z.string().nullable(),
  specialtyAr: z.string().nullable(),
  imageUrl: z.string().nullable(),
});

export type PublicMaisonHeritageDTO = z.infer<typeof PublicMaisonHeritageDTOSchema>;
