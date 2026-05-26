export interface MembershipApplication {
  id: string;
  userId?: string;
  email: string;
  name: string;
  nationality?: string;
  membershipTier: 'collector' | 'connoisseur' | 'patron' | 'institutional';
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  reason?: string;
  references?: string[];
  notes?: string;
  reviewerId?: string;
  submittedAt?: string;
  reviewedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const MEMBERSHIP_TIERS = [
  { value: 'collector' as const, labelEn: 'Collector', labelAr: 'جامع', descriptionEn: 'Access to public discovery, auctions, and salon previews.', descriptionAr: 'الوصول إلى الاكتشاف العام والمزادات ومعاينات الصالون.' },
  { value: 'connoisseur' as const, labelEn: 'Connoisseur', labelAr: 'خبير', descriptionEn: 'Enhanced access including private sales and heritage passport requests.', descriptionAr: 'وصول موسع يشمل المبيعات الخاصة وطلبات جواز التراث.' },
  { value: 'patron' as const, labelEn: 'Patron', labelAr: 'راعي', descriptionEn: 'Full platform access with concierge service and exclusive salon rooms.', descriptionAr: 'وصول كامل للمنصة مع خدمة كونسيرج وغرف صالون حصرية.' },
  { value: 'institutional' as const, labelEn: 'Institutional', labelAr: 'مؤسسي', descriptionEn: 'For museums, galleries, and heritage institutions.', descriptionAr: 'للمتاحف والصالات والمؤسسات التراثية.' },
] as const;
