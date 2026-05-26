import { z } from 'zod';

export const PublicDesignObjectDTOSchema = z.object({
  designer: z.string().nullable(),
  period: z.string().nullable(),
  material: z.string().nullable(),
  dimensions: z.string().nullable(),
  condition: z.string().nullable(),
  specialistReviewState: z.enum(['pending', 'approved', 'needs_review', 'rejected']),
});

export type PublicDesignObjectDTO = z.infer<typeof PublicDesignObjectDTOSchema>;

export function toPublicDesignObject(raw: Record<string, unknown>): PublicDesignObjectDTO {
  return PublicDesignObjectDTOSchema.parse({
    designer: raw.designer ?? null,
    period: raw.period ?? null,
    material: raw.material ?? null,
    dimensions: raw.dimensions ?? null,
    condition: raw.condition ?? null,
    specialistReviewState: raw.specialist_review_state ?? 'pending',
  });
}
