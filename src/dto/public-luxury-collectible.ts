import { z } from 'zod';

export const PublicLuxuryCollectibleDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  titleEn: z.string(),
  titleAr: z.string().nullable(),
  categorySlug: z.string(),
  maison: z.string().nullable(),
  period: z.string().nullable(),
  priceState: z.string().nullable(),
  primaryImageUrl: z.string().nullable(),
  evidenceLabel: z.string().nullable(),
  riskTier: z.number().int().default(1),
});

export type PublicLuxuryCollectibleDTO = z.infer<typeof PublicLuxuryCollectibleDTOSchema>;
