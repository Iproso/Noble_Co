export interface ComplianceCheckItem {
  id: string;
  category: string;
  title: string;
  required: boolean;
  status: 'passed' | 'failed' | 'pending';
}

export interface AppStoreComplianceAdapter {
  getComplianceData(): { platform: string; version: string; rating: string; };
  getComplianceChecklist(): ComplianceCheckItem[];
  getPrivacyPolicyUrl(): string;
  getDataDeletionUrl(): string;
  getTermsOfServiceUrl(): string;
  supportsAccountDeletion(): boolean;
  supportsDataExport(): boolean;
}

const CHECKLIST: ComplianceCheckItem[] = [
  { id: 'privacy-1', category: 'privacy', title: 'Privacy policy URL configured', required: true, status: 'passed' },
  { id: 'privacy-2', category: 'privacy', title: 'Data collection disclosure', required: true, status: 'passed' },
  { id: 'data-1', category: 'data_handling', title: 'Account deletion flow', required: true, status: 'passed' },
  { id: 'data-2', category: 'data_handling', title: 'Data export request flow', required: true, status: 'pending' },
  { id: 'user-1', category: 'user_management', title: 'Sign-in with Apple/Google', required: false, status: 'pending' },
  { id: 'content-1', category: 'content', title: 'Age-restricted content rating', required: true, status: 'passed' },
  { id: 'security-1', category: 'security', title: 'HTTPS enforced', required: true, status: 'passed' },
  { id: 'security-2', category: 'security', title: 'Secure authentication', required: true, status: 'passed' },
  { id: 'legal-1', category: 'legal', title: 'Terms of service accessible', required: true, status: 'passed' },
  { id: 'legal-2', category: 'legal', title: 'GDPR compliance', required: true, status: 'passed' },
  { id: 'access-1', category: 'accessibility', title: 'Dynamic type support', required: false, status: 'pending' },
  { id: 'access-2', category: 'accessibility', title: 'VoiceOver/TalkBack support', required: false, status: 'pending' },
];

export const appStoreComplianceAdapter: AppStoreComplianceAdapter = {
  getComplianceData() {
    return {
      platform: navigator.platform,
      version: '1.0.0',
      rating: '4+',
    };
  },
  getComplianceChecklist() {
    return CHECKLIST;
  },
  getPrivacyPolicyUrl() {
    return `${window.location.origin}/${navigator.language?.startsWith('ar') ? 'ar' : 'en'}/legal-trust/privacy-policy`;
  },
  getDataDeletionUrl() {
    return `${window.location.origin}/${navigator.language?.startsWith('ar') ? 'ar' : 'en'}/legal-trust/data-deletion`;
  },
  getTermsOfServiceUrl() {
    return `${window.location.origin}/${navigator.language?.startsWith('ar') ? 'ar' : 'en'}/legal-trust/terms`;
  },
  supportsAccountDeletion() {
    return true;
  },
  supportsDataExport() {
    return true;
  },
};
