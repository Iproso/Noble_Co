import { z } from 'zod';

export const PublicAuctionDTOSchema = z.object({
  id: z.string(),
  titleEn: z.string(),
  titleAr: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  lotCount: z.number(),
  previewAvailable: z.boolean(),
});

export type PublicAuctionDTO = z.infer<typeof PublicAuctionDTOSchema>;

export const PublicAuctionLotDTOSchema = z.object({
  id: z.string(),
  lotNumber: z.number(),
  estimateLow: z.string().nullable(),
  estimateHigh: z.string().nullable(),
  viewingAvailable: z.boolean(),
  conditionReportAvailable: z.boolean(),
  asset: z.any(),
});

export type PublicAuctionLotDTO = z.infer<typeof PublicAuctionLotDTOSchema>;

export function toPublicAuction(raw: Record<string, unknown>): PublicAuctionDTO {
  return PublicAuctionDTOSchema.parse({
    id: raw.id,
    titleEn: raw.title_en,
    titleAr: raw.title_ar ?? null,
    startDate: raw.start_date,
    endDate: raw.end_date,
    status: raw.status,
    lotCount: raw.lot_count ?? 0,
    previewAvailable: raw.status === 'preview' || raw.status === 'upcoming',
  });
}
