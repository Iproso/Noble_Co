import { z } from 'zod';

export const PublicIntroducerProfileDTOSchema = z.object({
  id: z.string(),
  userId: z.string(),
  introducerType: z.string(),
  isEligible: z.boolean(),
  qualityScore: z.number().min(0).max(100).nullable(),
  createdAt: z.string(),
});

export type PublicIntroducerProfileDTO = z.infer<typeof PublicIntroducerProfileDTOSchema>;

export const PublicReferralLeadDTOSchema = z.object({
  id: z.string(),
  introducerName: z.string(),
  introducerEmail: z.string().email(),
  inviteeName: z.string(),
  inviteeEmail: z.string().email(),
  status: z.string(),
  doubleOptinStatus: z.string().nullable(),
  createdAt: z.string(),
});

export type PublicReferralLeadDTO = z.infer<typeof PublicReferralLeadDTOSchema>;
