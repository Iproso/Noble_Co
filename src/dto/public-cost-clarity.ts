import { z } from 'zod';

export const PublicCostClarityDTOSchema = z.object({
  priceState: z.string().nullable(),
  buyerPremium: z.string().nullable(),
  vatNote: z.string().nullable(),
  serviceFeeNote: z.string().nullable(),
  shippingNote: z.string().nullable(),
  estimatedTotal: z.string().nullable(),
  disclaimer: z.string().nullable(),
});

export type PublicCostClarityDTO = z.infer<typeof PublicCostClarityDTOSchema>;

export const PublicViewingAvailabilityDTOSchema = z.object({
  available: z.boolean(),
  method: z.string().nullable(),
  locationType: z.string().nullable(),
  appointmentRequired: z.boolean(),
  custodyState: z.string().nullable(),
});

export type PublicViewingAvailabilityDTO = z.infer<typeof PublicViewingAvailabilityDTOSchema>;

export function toPublicCostClarity(raw: Record<string, unknown>): PublicCostClarityDTO {
  return PublicCostClarityDTOSchema.parse({
    priceState: raw.price_state ?? null,
    buyerPremium: raw.buyer_premium ?? null,
    vatNote: raw.vat_note ?? null,
    serviceFeeNote: raw.service_fee_note ?? null,
    shippingNote: raw.shipping_note ?? null,
    estimatedTotal: raw.estimated_total ?? null,
    disclaimer: raw.disclaimer ?? null,
  });
}
