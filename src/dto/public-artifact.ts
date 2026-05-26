import { z } from 'zod';
import { PublicPassportPreviewDTOSchema } from './public-passport';

// Public DTO — only whitelisted fields, no raw DB rows
export const PublicArtifactCardDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  titleEn: z.string(),
  titleAr: z.string().nullable(),
  categoryId: z.string(),
  categoryNameEn: z.string().nullable(),
  categoryNameAr: z.string().nullable(),
  yearPeriod: z.string().nullable(),
  maison: z.string().nullable(),
  evidenceLabel: z.string().nullable(),
  primaryImageUrl: z.string().nullable(),
  riskTier: z.number(),
});

export type PublicArtifactCardDTO = z.infer<typeof PublicArtifactCardDTOSchema>;

export const PublicArtifactDetailDTOSchema = z.object({
  id: z.string(),
  slug: z.string(),
  titleEn: z.string(),
  titleAr: z.string().nullable(),
  categoryId: z.string(),
  categoryNameEn: z.string().nullable(),
  categoryNameAr: z.string().nullable(),
  descriptionEn: z.string().nullable(),
  descriptionAr: z.string().nullable(),
  yearPeriod: z.string().nullable(),
  maison: z.string().nullable(),
  maker: z.string().nullable(),
  provenanceSummary: z.string().nullable(),
  conditionSummary: z.string().nullable(),
  evidenceLabel: z.string().nullable(),
  confidenceLabel: z.string().nullable(),
  passportAvailable: z.boolean(),
  passportPreview: PublicPassportPreviewDTOSchema.nullable(),
  mediaGallery: z.array(z.object({
    url: z.string(),
    alt: z.string().nullable(),
    type: z.string(),
  })),
  costClarity: z.any().nullable(),
  viewingAvailability: z.any().nullable(),
  riskTier: z.number(),
  createdAt: z.string(),
});

export type PublicArtifactDetailDTO = z.infer<typeof PublicArtifactDetailDTOSchema>;

// Strips private/internal fields from raw data
export function toPublicArtifactCard(raw: Record<string, unknown>): PublicArtifactCardDTO {
  return PublicArtifactCardDTOSchema.parse({
    id: raw.id,
    slug: raw.slug,
    titleEn: raw.title_en,
    titleAr: raw.title_ar ?? null,
    categoryId: raw.category_id,
    categoryNameEn: raw.category_name_en ?? null,
    categoryNameAr: raw.category_name_ar ?? null,
    yearPeriod: raw.year_period ?? null,
    maison: raw.maison ?? null,
    evidenceLabel: raw.evidence_label ?? null,
    primaryImageUrl: raw.primary_image_url ?? null,
    riskTier: raw.risk_tier ?? 1,
  });
}

export function toPublicArtifactDetail(raw: Record<string, unknown>): PublicArtifactDetailDTO {
  return PublicArtifactDetailDTOSchema.parse({
    id: raw.id,
    slug: raw.slug,
    titleEn: raw.title_en,
    titleAr: raw.title_ar ?? null,
    categoryId: raw.category_id,
    categoryNameEn: raw.category_name_en ?? null,
    categoryNameAr: raw.category_name_ar ?? null,
    descriptionEn: raw.description_en ?? null,
    descriptionAr: raw.description_ar ?? null,
    yearPeriod: raw.year_period ?? null,
    maison: raw.maison ?? null,
    maker: raw.maker ?? null,
    provenanceSummary: raw.provenance_summary ?? null,
    conditionSummary: raw.condition_summary ?? null,
    evidenceLabel: raw.evidence_label ?? null,
    confidenceLabel: raw.confidence_label ?? null,
    passportAvailable: raw.passport_available ?? false,
    passportPreview: raw.passport_preview ?? null,
    mediaGallery: raw.media_gallery ?? [],
    costClarity: raw.cost_clarity ?? null,
    viewingAvailability: raw.viewing_availability ?? null,
    riskTier: raw.risk_tier ?? 1,
    createdAt: raw.created_at as string,
  });
}
