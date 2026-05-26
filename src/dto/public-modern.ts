import { z } from 'zod';

export const PublicModernCollectibleDTOSchema = z.object({
  category: z.enum(['sneakers', 'streetwear', 'action_figures', 'trading_cards', 'vinyl_records', 'video_games', 'comics', 'memorabilia', 'other']),
  brand: z.string().nullable(),
  model: z.string().nullable(),
  edition: z.string().nullable(),
  year: z.string().nullable(),
  condition: z.string().nullable(),
  authenticationStatus: z.enum(['unverified', 'verified_authentic', 'suspected_counterfeit', 'needs_expert_review']),
  packagingIncluded: z.boolean(),
  certificateOfAuthenticity: z.boolean(),
  specialistReviewState: z.enum(['pending', 'approved', 'needs_review', 'rejected']),
});

export type PublicModernCollectibleDTO = z.infer<typeof PublicModernCollectibleDTOSchema>;

export function toPublicModernCollectible(raw: Record<string, unknown>): PublicModernCollectibleDTO {
  return PublicModernCollectibleDTOSchema.parse({
    category: raw.category ?? 'other',
    brand: raw.brand ?? null,
    model: raw.model ?? null,
    edition: raw.edition ?? null,
    year: raw.year ?? null,
    condition: raw.condition ?? null,
    authenticationStatus: raw.authentication_status ?? 'unverified',
    packagingIncluded: raw.packaging_included ?? false,
    certificateOfAuthenticity: raw.certificate_of_authenticity ?? false,
    specialistReviewState: raw.specialist_review_state ?? 'pending',
  });
}
