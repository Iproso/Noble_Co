export interface ModernCollectibleProfile {
  id: string;
  assetId: string;
  category: 'sneakers' | 'streetwear' | 'action_figures' | 'trading_cards' | 'vinyl_records' | 'video_games' | 'comics' | 'memorabilia' | 'other';
  brand?: string;
  model?: string;
  edition?: string;
  serialNumber?: string;
  year?: string;
  condition: string;
  authenticationStatus: 'unverified' | 'verified_authentic' | 'suspected_counterfeit' | 'needs_expert_review';
  packagingIncluded: boolean;
  certificateOfAuthenticity: boolean;
  provenance?: string;
  specialistReviewState: 'pending' | 'approved' | 'needs_review' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export const MODERN_COLLECTIBLE_CATEGORIES = [
  { value: 'sneakers' as const, labelEn: 'Sneakers', labelAr: 'أحذية رياضية' },
  { value: 'streetwear' as const, labelEn: 'Streetwear', labelAr: 'ملابس الشارع' },
  { value: 'action_figures' as const, labelEn: 'Action Figures', labelAr: 'مجسمات حركة' },
  { value: 'trading_cards' as const, labelEn: 'Trading Cards', labelAr: 'بطاقات تداول' },
  { value: 'vinyl_records' as const, labelEn: 'Vinyl Records', labelAr: 'أسطوانات فينيل' },
  { value: 'video_games' as const, labelEn: 'Video Games', labelAr: 'ألعاب فيديو' },
  { value: 'comics' as const, labelEn: 'Comics', labelAr: 'قصص مصورة' },
  { value: 'memorabilia' as const, labelEn: 'Memorabilia', labelAr: 'تذكارات' },
  { value: 'other' as const, labelEn: 'Other', labelAr: 'أخرى' },
] as const;
