import { z } from 'zod';

export const PublicLeadCaptureDTOSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  source: z.string(),
  intentScore: z.number().min(0).max(100).nullable(),
  createdAt: z.string(),
});

export type PublicLeadCaptureDTO = z.infer<typeof PublicLeadCaptureDTOSchema>;

export const PublicConsentRecordDTOSchema = z.object({
  id: z.string(),
  userId: z.string().nullable(),
  consentType: z.string(),
  version: z.string(),
  granted: z.boolean(),
  createdAt: z.string(),
});

export type PublicConsentRecordDTO = z.infer<typeof PublicConsentRecordDTOSchema>;
