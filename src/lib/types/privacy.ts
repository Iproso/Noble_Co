export interface AccountDeletionRequest {
  id: string;
  userId: string;
  reason?: string;
  confirmationMethod: 'email' | 'form';
  status: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled';
  scheduledDeletionDate?: string;
  cancellationDeadline?: string;
  requestedAt: string;
  confirmedAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DataExportRequest {
  id: string;
  userId: string;
  exportType: 'full' | 'profile' | 'documents' | 'transactions';
  format: 'json' | 'csv' | 'pdf';
  status: 'pending' | 'processing' | 'ready' | 'expired';
  downloadUrl?: string;
  expiresAt?: string;
  requestedAt: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const DELETION_REASONS = [
  { value: 'unused' as const, labelEn: 'No longer using the platform', labelAr: 'لم أعد أستخدم المنصة' },
  { value: 'privacy' as const, labelEn: 'Privacy concerns', labelAr: 'مخاوف تتعلق بالخصوصية' },
  { value: 'duplicate' as const, labelEn: 'Duplicate account', labelAr: 'حساب مكرر' },
  { value: 'other' as const, labelEn: 'Other reason', labelAr: 'سبب آخر' },
] as const;
