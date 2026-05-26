import { z } from 'zod';

const SpecialistReviewState = z.enum(['pending', 'approved', 'needs_review', 'rejected']);

export const PublicWatchDTOSchema = z.object({
  reference: z.string().nullable(),
  year: z.string().nullable(),
  material: z.string().nullable(),
  movementType: z.string().nullable(),
  caliber: z.string().nullable(),
  condition: z.string().nullable(),
  boxPapers: z.boolean().default(false),
  serviceNotes: z.string().nullable(),
  specialistReviewState: SpecialistReviewState,
});

export type PublicWatchDTO = z.infer<typeof PublicWatchDTOSchema>;

export const PublicJewelryDTOSchema = z.object({
  material: z.string().nullable(),
  stones: z.array(z.object({
    type: z.string(),
    carat: z.number().optional(),
    cut: z.string().optional(),
    color: z.string().optional(),
    clarity: z.string().optional(),
    origin: z.string().optional(),
  })),
  certificates: z.array(z.object({
    type: z.string(),
    number: z.string().optional(),
    date: z.string().optional(),
  })),
  maison: z.string().nullable(),
  period: z.string().nullable(),
  condition: z.string().nullable(),
  specialistReviewState: SpecialistReviewState,
});

export type PublicJewelryDTO = z.infer<typeof PublicJewelryDTOSchema>;

export const PublicHandbagDTOSchema = z.object({
  maison: z.string().nullable(),
  model: z.string().nullable(),
  material: z.string().nullable(),
  hardware: z.string().nullable(),
  condition: z.string().nullable(),
  accessories: z.array(z.string()),
  specialistReviewState: SpecialistReviewState,
});

export type PublicHandbagDTO = z.infer<typeof PublicHandbagDTOSchema>;

export function toPublicWatchProfile(raw: Record<string, unknown>): PublicWatchDTO {
  return PublicWatchDTOSchema.parse({
    reference: raw.reference ?? null,
    year: raw.year ?? null,
    material: raw.material ?? null,
    movementType: raw.movement_type ?? null,
    caliber: raw.caliber ?? null,
    condition: raw.condition ?? null,
    boxPapers: raw.box_papers ?? false,
    serviceNotes: raw.service_history ?? null,
    specialistReviewState: raw.specialist_review_state ?? 'pending',
  });
}

export function toPublicJewelryProfile(raw: Record<string, unknown>): PublicJewelryDTO {
  return PublicJewelryDTOSchema.parse({
    material: raw.material ?? null,
    stones: raw.stones ?? [],
    certificates: raw.certificates ?? [],
    maison: raw.maison ?? null,
    period: raw.period ?? null,
    condition: raw.condition ?? null,
    specialistReviewState: raw.specialist_review_state ?? 'pending',
  });
}

export function toPublicHandbagProfile(raw: Record<string, unknown>): PublicHandbagDTO {
  return PublicHandbagDTOSchema.parse({
    maison: raw.maison ?? null,
    model: raw.model ?? null,
    material: raw.material ?? null,
    hardware: raw.hardware ?? null,
    condition: raw.condition ?? null,
    accessories: raw.accessories ?? [],
    specialistReviewState: raw.specialist_review_state ?? 'pending',
  });
}
