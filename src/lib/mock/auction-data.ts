export interface PublicAuction {
  id: string; slug: string; titleEn: string; titleAr: string; maison: string;
  locationEn: string; locationAr: string; date: string;
  status: 'upcoming' | 'live' | 'passed'; lotCount: number; previewAvailable: boolean;
  estimateEn: string; estimateAr: string; descriptionEn: string; descriptionAr: string;
}

export const mockPublicAuctions: PublicAuction[] = [
  { id: 'auc-1', slug: 'winter-haute-horlogerie', titleEn: 'Winter Haute Horlogerie Sale', titleAr: 'مزاد الشتاء لصناعة الساعات الفاخرة', maison: 'Noble Collectors', locationEn: 'Geneva, Switzerland', locationAr: 'جنيف، سويسرا', date: '2026-06-15', status: 'upcoming', lotCount: 48, previewAvailable: true, estimateEn: 'CHF 800,000 – 1,200,000', estimateAr: '٨٠٠,٠٠٠ – ١,٢٠٠,٠٠٠ فرنك سويسري', descriptionEn: 'An exceptional auction featuring rare Patek Philippe, FP Journe, and independent watchmakers.', descriptionAr: 'مزاد استثنائي يضم قطعاً نادرة من باتيك فيليب وإف بي جورن وصنّاع الساعات المستقلين.' },
  { id: 'auc-2', slug: 'iconic-jewelry-collection', titleEn: 'Iconic Jewelry Collection', titleAr: 'مجموعة المجوهرات الأيقونية', maison: 'Noble Collectors', locationEn: 'Paris, France', locationAr: 'باريس، فرنسا', date: '2026-06-20', status: 'upcoming', lotCount: 36, previewAvailable: true, estimateEn: 'USD 400,000 – 600,000', estimateAr: '٤٠٠,٠٠٠ – ٦٠٠,٠٠٠ دولار أمريكي', descriptionEn: 'Important jewels from Cartier, Van Cleef & Arpels, and Bulgari with full provenance.', descriptionAr: 'مجوهرات مهمة من كارتييه وفان كليف آند آربيلز وبولغاري مع توثيق كامل للمصدر.' },
  { id: 'auc-3', slug: 'rare-handbags-luxury-accessories', titleEn: 'Rare Handbags & Luxury Accessories', titleAr: 'الحقائب النادرة والإكسسوارات الفاخرة', maison: 'Noble Collectors', locationEn: 'Hong Kong', locationAr: 'هونغ كونغ', date: '2026-07-01', status: 'upcoming', lotCount: 52, previewAvailable: false, estimateEn: 'USD 200,000 – 400,000', estimateAr: '٢٠٠,٠٠٠ – ٤٠٠,٠٠٠ دولار أمريكي', descriptionEn: 'A curated selection of Hermès, Chanel, and limited-edition luxury handbags.', descriptionAr: 'مجموعة منتقاة من هرميس وشانيل وحقائب فاخرة محدودة الإصدار.' },
  { id: 'auc-4', slug: 'design-objects-moderne', titleEn: 'Design Objets Moderne', titleAr: 'قطع التصميم الحديث', maison: 'Noble Collectors', locationEn: 'London, UK', locationAr: 'لندن، المملكة المتحدة', date: '2026-07-10', status: 'upcoming', lotCount: 28, previewAvailable: true, estimateEn: 'GBP 150,000 – 250,000', estimateAr: '١٥٠,٠٠٠ – ٢٥٠,٠٠٠ جنيه إسترليني', descriptionEn: 'Collectible design from Prouvé, Gray, Noguchi, and other 20th century masters.', descriptionAr: 'تصميمات قابلة للجمع من بروفيه وغري ونوغوتشي وغيرهم من أساتذة القرن العشرين.' },
];

export interface PublicLot {
  id: string; lotNumber: number; titleEn: string; titleAr: string; maison: string;
  yearPeriod: string; estimateLow: string; estimateHigh: string; currency: string;
  imageUrl: string | null; viewingAvailable: boolean; conditionReportAvailable: boolean;
}

export function getMockLots(auctionSlug: string): PublicLot[] {
  const lots: Record<string, PublicLot[]> = {
    'winter-haute-horlogerie': [
      { id: 'lot-1', lotNumber: 1, titleEn: 'Patek Philippe Ref. 1518', titleAr: 'باتيك فيليب مرجع 1518', maison: 'Patek Philippe', yearPeriod: '1948', estimateLow: '800000', estimateHigh: '1200000', currency: 'CHF', imageUrl: null, viewingAvailable: true, conditionReportAvailable: true },
      { id: 'lot-2', lotNumber: 2, titleEn: 'FP Journe Tourbillon Souverain', titleAr: 'إف بي جورن توربيون سوفيرين', maison: 'FP Journe', yearPeriod: '2003', estimateLow: '250000', estimateHigh: '350000', currency: 'CHF', imageUrl: null, viewingAvailable: true, conditionReportAvailable: true },
      { id: 'lot-3', lotNumber: 3, titleEn: 'Rolex Daytona "Paul Newman" Ref. 6239', titleAr: 'رولكس دايتونا "بول نيومان" مرجع 6239', maison: 'Rolex', yearPeriod: '1968', estimateLow: '150000', estimateHigh: '200000', currency: 'CHF', imageUrl: null, viewingAvailable: false, conditionReportAvailable: true },
    ],
    'iconic-jewelry-collection': [
      { id: 'lot-4', lotNumber: 1, titleEn: 'Cartier Tutti Frutti Bracelet', titleAr: 'سوار كارتييه توتي فروتي', maison: 'Cartier', yearPeriod: '1928', estimateLow: '200000', estimateHigh: '350000', currency: 'USD', imageUrl: null, viewingAvailable: true, conditionReportAvailable: true },
      { id: 'lot-5', lotNumber: 2, titleEn: 'Van Cleef & Arpels Alhambra Necklace', titleAr: 'عقد فان كليف آند آربيلز ألمبرا', maison: 'Van Cleef & Arpels', yearPeriod: '1970', estimateLow: '80000', estimateHigh: '120000', currency: 'USD', imageUrl: null, viewingAvailable: true, conditionReportAvailable: false },
    ],
  };
  return lots[auctionSlug] || lots['winter-haute-horlogerie'];
}
