import { z } from 'zod';

export const PublicCollectorAssetCategoryDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  nameEn: z.string(),
  nameAr: z.string().nullable(),
  summaryEn: z.string().nullable(),
  summaryAr: z.string().nullable(),
  imageUrl: z.string().nullable(),
  artifactCount: z.number().int().default(0),
});

export type PublicCollectorAssetCategoryDTO = z.infer<typeof PublicCollectorAssetCategoryDTOSchema>;
export type PublicCategoryDTO = PublicCollectorAssetCategoryDTO;
