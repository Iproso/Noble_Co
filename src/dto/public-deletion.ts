import { z } from 'zod';

export const PublicDeletionRequestDTOSchema = z.object({
  id: z.string(),
  status: z.enum(['pending', 'confirmed', 'processing', 'completed', 'cancelled']),
  reason: z.string().nullable(),
  scheduledDeletionDate: z.string().nullable(),
  cancellationDeadline: z.string().nullable(),
  requestedAt: z.string(),
});

export type PublicDeletionRequestDTO = z.infer<typeof PublicDeletionRequestDTOSchema>;

export const PublicDataExportRequestDTOSchema = z.object({
  id: z.string(),
  exportType: z.enum(['full', 'profile', 'documents', 'transactions']),
  format: z.enum(['json', 'csv', 'pdf']),
  status: z.enum(['pending', 'processing', 'ready', 'expired']),
  downloadUrl: z.string().nullable(),
  expiresAt: z.string().nullable(),
  requestedAt: z.string(),
  completedAt: z.string().nullable(),
});

export type PublicDataExportRequestDTO = z.infer<typeof PublicDataExportRequestDTOSchema>;
