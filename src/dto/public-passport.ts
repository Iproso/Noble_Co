import { z } from 'zod';

export const PublicPassportPreviewDTOSchema = z.object({
  assetSlug: z.string(),
  objectTitle: z.string(),
  period: z.string().nullable(),
  category: z.string(),
  evidenceSummary: z.string().nullable(),
  confidenceLabel: z.string().nullable(),
  conditionNotes: z.string().nullable(),
  passportAvailable: z.boolean(),
});

export type PublicPassportPreviewDTO = z.infer<typeof PublicPassportPreviewDTOSchema>;

export function toPublicPassportPreview(raw: Record<string, unknown>): PublicPassportPreviewDTO {
  return PublicPassportPreviewDTOSchema.parse({
    assetSlug: raw.asset_slug,
    objectTitle: raw.object_title,
    period: raw.period ?? null,
    category: raw.category,
    evidenceSummary: raw.evidence_summary ?? null,
    confidenceLabel: raw.confidence_label ?? null,
    conditionNotes: raw.condition_notes ?? null,
    passportAvailable: raw.passport_available ?? false,
  });
}
