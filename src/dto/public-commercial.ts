import { z } from 'zod';

export const PublicInvoiceDTOSchema = z.object({
  id: z.string(),
  amount: z.string(),
  currency: z.string(),
  status: z.string(),
  description: z.string().nullable(),
  dueDate: z.string().nullable(),
  paidAt: z.string().nullable(),
  createdAt: z.string(),
});

export type PublicInvoiceDTO = z.infer<typeof PublicInvoiceDTOSchema>;

export const PublicViewingAppointmentDTOSchema = z.object({
  id: z.string(),
  assetId: z.string(),
  preferredDate: z.string(),
  preferredTime: z.string().nullable(),
  locationNotes: z.string().nullable(),
  status: z.string(),
  confirmedDate: z.string().nullable(),
});

export type PublicViewingAppointmentDTO = z.infer<typeof PublicViewingAppointmentDTOSchema>;

export const PublicShippingRequestDTOSchema = z.object({
  id: z.string(),
  assetId: z.string(),
  pickupAddress: z.string(),
  deliveryAddress: z.string(),
  preferredDate: z.string().nullable(),
  status: z.string(),
  trackingNumber: z.string().nullable(),
});

export type PublicShippingRequestDTO = z.infer<typeof PublicShippingRequestDTOSchema>;

export const PublicPaymentDTOSchema = z.object({
  id: z.string(),
  invoiceId: z.string(),
  amount: z.string(),
  currency: z.string(),
  method: z.string(),
  status: z.string(),
  reference: z.string().nullable(),
  confirmedAt: z.string().nullable(),
});

export type PublicPaymentDTO = z.infer<typeof PublicPaymentDTOSchema>;
