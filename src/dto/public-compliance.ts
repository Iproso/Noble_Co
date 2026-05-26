import { z } from 'zod';

export const PublicAppVersionDTOSchema = z.object({
  id: z.string(),
  platform: z.enum(['ios', 'android', 'web']),
  version: z.string(),
  buildNumber: z.string(),
  minSupportedVersion: z.string(),
  releaseNotes: z.string().nullable(),
  isCritical: z.boolean(),
  releaseDate: z.string(),
  status: z.enum(['development', 'review', 'released', 'deprecated']),
});

export type PublicAppVersionDTO = z.infer<typeof PublicAppVersionDTOSchema>;

export const PublicComplianceChecklistDTOSchema = z.object({
  id: z.string(),
  platform: z.enum(['ios', 'android']),
  lastReviewedAt: z.string(),
  itemCount: z.number(),
  passedItems: z.number(),
  failedItems: z.number(),
  pendingItems: z.number(),
});

export type PublicComplianceChecklistDTO = z.infer<typeof PublicComplianceChecklistDTOSchema>;
