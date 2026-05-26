import { z } from 'zod';

export const PublicMembershipApplicationDTOSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  membershipTier: z.enum(['collector', 'connoisseur', 'patron', 'institutional']),
  status: z.enum(['draft', 'submitted', 'under_review', 'approved', 'rejected']),
  nationality: z.string().nullable(),
  reason: z.string().nullable(),
  submittedAt: z.string().nullable(),
  createdAt: z.string(),
});

export type PublicMembershipApplicationDTO = z.infer<typeof PublicMembershipApplicationDTOSchema>;
