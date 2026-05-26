export interface AppVersionRecord {
  id: string;
  platform: 'ios' | 'android' | 'web';
  version: string;
  buildNumber: string;
  minSupportedVersion: string;
  releaseNotes?: string;
  storeUrl?: string;
  isCritical: boolean;
  releaseDate: string;
  status: 'development' | 'review' | 'released' | 'deprecated';
  createdAt: string;
}

export interface AppStoreComplianceChecklist {
  id: string;
  platform: 'ios' | 'android';
  itemStatus: 'passed' | 'failed' | 'pending' | 'not_applicable';
  items: ComplianceChecklistItem[];
  lastReviewedAt: string;
  reviewedBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ComplianceChecklistItem {
  id: string;
  category: 'privacy' | 'data_handling' | 'user_management' | 'content' | 'security' | 'legal' | 'accessibility';
  itemId: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  status: 'passed' | 'failed' | 'pending' | 'not_applicable';
  notes?: string;
  evidenceRef?: string;
}

export const STORE_COMPLIANCE_CATEGORIES = [
  { value: 'privacy' as const, labelEn: 'Privacy', labelAr: 'الخصوصية' },
  { value: 'data_handling' as const, labelEn: 'Data Handling', labelAr: 'معالجة البيانات' },
  { value: 'user_management' as const, labelEn: 'User Management', labelAr: 'إدارة المستخدمين' },
  { value: 'content' as const, labelEn: 'Content', labelAr: 'المحتوى' },
  { value: 'security' as const, labelEn: 'Security', labelAr: 'الأمان' },
  { value: 'legal' as const, labelEn: 'Legal', labelAr: 'القانوني' },
  { value: 'accessibility' as const, labelEn: 'Accessibility', labelAr: 'إمكانية الوصول' },
] as const;
