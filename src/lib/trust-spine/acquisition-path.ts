// Acquisition Path Recommender

export type AcquisitionPath =
  | 'public_listing'
  | 'private_salon'
  | 'private_sale'
  | 'auction_preview'
  | 'concierge_only'
  | 'restricted';

export interface AcquisitionPathInfo {
  path: AcquisitionPath;
  labelEn: string;
  labelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  requiresAccess: boolean;
  requiresApproval: boolean;
}

export const ACQUISITION_PATHS: Record<AcquisitionPath, AcquisitionPathInfo> = {
  public_listing: {
    path: 'public_listing',
    labelEn: 'Public Listing',
    labelAr: 'إدراج عام',
    descriptionEn: 'Available for public discovery and inquiry.',
    descriptionAr: 'متاح للاكتشاف العام والاستفسار.',
    requiresAccess: false,
    requiresApproval: false,
  },
  private_salon: {
    path: 'private_salon',
    labelEn: 'Collectors\u2019 Salon',
    labelAr: 'صالون الجامعين',
    descriptionEn: 'Available through Collectors\u2019 Salon access.',
    descriptionAr: 'متاح من خلال صالون الجامعين.',
    requiresAccess: true,
    requiresApproval: false,
  },
  private_sale: {
    path: 'private_sale',
    labelEn: 'Private Sale',
    labelAr: 'بيع خاص',
    descriptionEn: 'Available through private sale inquiry.',
    descriptionAr: 'متاح من خلال استفسار البيع الخاص.',
    requiresAccess: true,
    requiresApproval: true,
  },
  auction_preview: {
    path: 'auction_preview',
    labelEn: 'Auction Preview',
    labelAr: 'معاينة المزاد',
    descriptionEn: 'Available through auction preview and registration.',
    descriptionAr: 'متاح من خلال معاينة المزاد والتسجيل.',
    requiresAccess: true,
    requiresApproval: true,
  },
  concierge_only: {
    path: 'concierge_only',
    labelEn: 'Concierge Access Only',
    labelAr: 'الوصول عبر الكونسيرج فقط',
    descriptionEn: 'Available exclusively through concierge inquiry.',
    descriptionAr: 'متاح حصريًا من خلال استفسار الكونسيرج.',
    requiresAccess: true,
    requiresApproval: true,
  },
  restricted: {
    path: 'restricted',
    labelEn: 'Restricted',
    labelAr: 'مقيد',
    descriptionEn: 'Not currently available for acquisition.',
    descriptionAr: 'غير متاح حاليًا للاقتناء.',
    requiresAccess: true,
    requiresApproval: true,
  },
};

export interface AcquisitionRecommendation {
  path: AcquisitionPath;
  confidence: 'high' | 'medium' | 'low';
  reasons: string[];
}

export function recommendAcquisitionPath(
  evidenceScore: number,
  riskTier: number,
  reviewState: string,
  hasPassport: boolean,
): AcquisitionRecommendation {
  const reasons: string[] = [];
  let path: AcquisitionPath;
  let confidence: 'high' | 'medium' | 'low';

  if (riskTier >= 4) {
    path = 'restricted';
    confidence = 'high';
    reasons.push('Restricted risk tier');
  } else if (reviewState === 'legal_review_required' || riskTier >= 3) {
    path = 'concierge_only';
    confidence = 'medium';
    reasons.push('Legal review or high risk tier requires concierge handling');
  } else if (evidenceScore < 40) {
    path = 'concierge_only';
    confidence = 'medium';
    reasons.push('Insufficient evidence score for public or salon listing');
  } else if (evidenceScore >= 80 && hasPassport) {
    path = 'public_listing';
    confidence = 'high';
    reasons.push('Strong evidence with Heritage Passport');
  } else if (evidenceScore >= 60) {
    path = 'private_salon';
    confidence = 'high';
    reasons.push('Moderate-to-strong evidence suitable for salon access');
  } else {
    path = 'private_sale';
    confidence = 'low';
    reasons.push('Limited evidence, best handled through private sale');
  }

  return { path, confidence, reasons };
}
