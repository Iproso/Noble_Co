import {
  PublicCategoryDTO,
  PublicArtifactCardDTO,
  PublicArtifactDetailDTO,
  PublicCostClarityDTO,
  PublicViewingAvailabilityDTO,
  PublicWatchDTO,
  PublicJewelryDTO,
  PublicHandbagDTO,
  PublicDesignObjectDTO,
} from '@/dto';

const now = new Date().toISOString();

export const mockCategories: PublicCategoryDTO[] = [
  { id: 'cat-1', slug: 'watches', nameEn: 'Watches', nameAr: 'الساعات', summaryEn: 'Fine timepieces from independent makers and renowned maisons.', summaryAr: 'ساعات فاخرة من صنّاع مستقلين ودور مشهورة.', imageUrl: null, artifactCount: 24 },
  { id: 'cat-2', slug: 'jewelry', nameEn: 'Jewelry', nameAr: 'المجوهرات', summaryEn: 'Important jewels with full stone documentation and provenance.', summaryAr: 'مجوهرات مهمة مع توثيق كامل للأحجار والمصدر.', imageUrl: null, artifactCount: 18 },
  { id: 'cat-3', slug: 'handbags', nameEn: 'Handbags', nameAr: 'الحقائب اليدوية', summaryEn: 'Rare collectible handbags with verified provenance and condition reports.', summaryAr: 'حقائب نادرة قابلة للجمع مع مصدر موثق وتقارير حالة.', imageUrl: null, artifactCount: 15 },
  { id: 'cat-4', slug: 'design-objects', nameEn: 'Design Objects', nameAr: 'قطع التصميم', summaryEn: 'Collectible design from iconic 20th and 21st century creators.', summaryAr: 'تصميمات قابلة للجمع من مبدعي القرنين العشرين والحادي والعشرين.', imageUrl: null, artifactCount: 12 },
  { id: 'cat-5', slug: 'fine-art', nameEn: 'Fine Art', nameAr: 'الفنون الجميلة', summaryEn: 'Paintings, drawings, and sculpture from established artists.', summaryAr: 'لوحات ورسومات ومنحوتات من فنانين معروفين.', imageUrl: null, artifactCount: 9 },
  { id: 'cat-6', slug: 'cultural-heritage', nameEn: 'Cultural Heritage', nameAr: 'التراث الثقافي', summaryEn: 'Objects of cultural significance with full provenance documentation.', summaryAr: 'قطع ذات أهمية ثقافية مع توثيق كامل للمصدر.', imageUrl: null, artifactCount: 7 },
  { id: 'cat-7', slug: 'memorabilia', nameEn: 'Memorabilia', nameAr: 'المقتنيات التذكارية', summaryEn: 'Signed editions, historical documents, and cultural artifacts.', summaryAr: 'إصدارات موقعة ووثائق تاريخية وتحف ثقافية.', imageUrl: null, artifactCount: 11 },
];

export const mockArtifactCards: PublicArtifactCardDTO[] = [
  { id: 'art-1', slug: 'patek-1518', titleEn: 'Patek Philippe Ref. 1518 Perpetual Calendar Chronograph', titleAr: 'باتيك فيليب مرجع 1518 تقويم أبدي كرونوغراف', categoryId: 'cat-1', categoryNameEn: 'Watches', categoryNameAr: 'الساعات', yearPeriod: '1948', maison: 'Patek Philippe', evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-2', slug: 'cartier-tortue', titleEn: 'Cartier Tortue Monopoussoir', titleAr: 'كارتييه تورتيه أحادي الزر', categoryId: 'cat-1', categoryNameEn: 'Watches', categoryNameAr: 'الساعات', yearPeriod: '1928', maison: 'Cartier', evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-6', slug: 'rolex-daytona-paul-newman', titleEn: 'Rolex Daytona "Paul Newman" Ref. 6239', titleAr: 'رولكس دايتونا "بول نيومان" مرجع 6239', categoryId: 'cat-1', categoryNameEn: 'Watches', categoryNameAr: 'الساعات', yearPeriod: '1968', maison: 'Rolex', evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-3', slug: 'van-cleef-alhambra', titleEn: 'Van Cleef & Arpels Alhambra Necklace', titleAr: 'عقد فان كليف آند آربيلز الحمراء', categoryId: 'cat-2', categoryNameEn: 'Jewelry', categoryNameAr: 'المجوهرات', yearPeriod: '1970', maison: 'Van Cleef & Arpels', evidenceLabel: 'Evidence Moderate', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-7', slug: 'bulgari-serpenti', titleEn: 'Bulgari Serpenti Secret Watch', titleAr: 'ساعة بولغاري سيربنتي السرية', categoryId: 'cat-2', categoryNameEn: 'Jewelry', categoryNameAr: 'المجوهرات', yearPeriod: '1965', maison: 'Bulgari', evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-4', slug: 'hermes-birkin-faubourg', titleEn: 'Hermès Birkin Faubourg 30cm', titleAr: 'هرميس بيركين فوبورغ 30 سم', categoryId: 'cat-3', categoryNameEn: 'Handbags', categoryNameAr: 'الحقائب اليدوية', yearPeriod: '2020', maison: 'Hermès', evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-8', slug: 'chanel-classic-flap', titleEn: 'Chanel Classic Flap Bag 11.12', titleAr: 'حقيبة شانيل الكلاسيكية 11.12', categoryId: 'cat-3', categoryNameEn: 'Handbags', categoryNameAr: 'الحقائب اليدوية', yearPeriod: '1995', maison: 'Chanel', evidenceLabel: 'Evidence Moderate', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-5', slug: 'jean-prouve-standard', titleEn: 'Jean Prouvé Standard Chair', titleAr: 'كرسي جان بروفيه القياسي', categoryId: 'cat-4', categoryNameEn: 'Design Objects', categoryNameAr: 'قطع التصميم', yearPeriod: '1950', maison: 'Jean Prouvé', evidenceLabel: 'Evidence Moderate', primaryImageUrl: null, riskTier: 1 },
  { id: 'art-9', slug: 'eileen-gray-bibendum', titleEn: 'Eileen Gray Bibendum Chair', titleAr: 'كرسي إيلين غراي بيبندوم', categoryId: 'cat-4', categoryNameEn: 'Design Objects', categoryNameAr: 'قطع التصميم', yearPeriod: '1929', maison: 'Eileen Gray', evidenceLabel: 'Evidence Moderate', primaryImageUrl: null, riskTier: 1 },
  { id: 'art-10', slug: 'monet-water-lilies', titleEn: 'Claude Monet — Water Lilies Study', titleAr: 'كلود مونيه — دراسة زنابق الماء', categoryId: 'cat-5', categoryNameEn: 'Fine Art', categoryNameAr: 'الفنون الجميلة', yearPeriod: '1916', maison: 'Claude Monet', evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 2 },
  { id: 'art-11', slug: 'icelandic-saga-manuscript', titleEn: 'Icelandic Saga Manuscript, 13th Century', titleAr: 'مخطوطة ملحمة آيسلندية، القرن الثالث عشر', categoryId: 'cat-6', categoryNameEn: 'Cultural Heritage', categoryNameAr: 'التراث الثقافي', yearPeriod: 'c. 1250', maison: null, evidenceLabel: 'Evidence Strong', primaryImageUrl: null, riskTier: 3 },
  { id: 'art-12', slug: 'first-edition-joyce', titleEn: 'James Joyce — Ulysses, First Edition 1922', titleAr: 'جيمس جويس — يوليسيس، الطبعة الأولى 1922', categoryId: 'cat-7', categoryNameEn: 'Memorabilia', categoryNameAr: 'المقتنيات التذكارية', yearPeriod: '1922', maison: 'Shakespeare and Company', evidenceLabel: 'Evidence Moderate', primaryImageUrl: null, riskTier: 1 },
];

const detailMap: Record<string, {
  descriptionEn: string;
  descriptionAr: string;
  provenanceEn: string;
  provenanceAr: string;
  conditionEn: string;
  conditionAr: string;
  passportAvailable: boolean;
  priceState: string;
  viewingAvailable: boolean;
}> = {
  'patek-1518': {
    descriptionEn: 'An exceptional Patek Philippe Ref. 1518 in 18K rose gold. The first serially produced perpetual calendar chronograph wristwatch, introduced in 1941 and produced until 1954.',
    descriptionAr: 'ساعة باتيك فيليب استثنائية مرجع 1518 من الذهب الوردي عيار 18 قيراط. أول كرونوغراف تقويم أبدي يتم إنتاجه بكميات كبيرة، تم تقديمه في عام 1941.',
    provenanceEn: 'Acquired new in 1948 by the original owner\'s family in Geneva. Held in a single-owner collection for three generations before consignment.',
    provenanceAr: 'تم شراؤها جديدة في عام 1948 من قبل عائلة المالك الأول في جنيف. بقيت في مجموعة مالك واحد لثلاثة أجيال.',
    conditionEn: 'Exceptional original condition. Original dial and hands with light patina. Full movement service completed in 2023.',
    conditionAr: 'حالة أصلية استثنائية. المينا والعقارب الأصلية مع زنجار خفيف. تمت صيانة الحركة بالكامل في 2023.',
    passportAvailable: true,
    priceState: 'Price on Request',
    viewingAvailable: true,
  },
  'cartier-tortue': {
    descriptionEn: 'A rare Cartier Tortue Monopoussoir chronograph from 1928, one of approximately 30 known examples.',
    descriptionAr: 'ساعة كارتييه تورتيه النادرة أحادية الزر كرونوغراف من عام 1928، واحدة من حوالي 30 نموذجاً معروفاً.',
    provenanceEn: 'From the estate of a European noble family. Original purchase receipt from Cartier Paris, 1928.',
    provenanceAr: 'من مجموعة عائلة نبيلة أوروبية. فاتورة الشراء الأصلية من كارتييه باريس، 1928.',
    conditionEn: 'Very good original condition. Dial has been expertly restored. Movement runs well.',
    conditionAr: 'حالة أصلية جيدة جداً. تم ترميم المينا بخبرة. الحركة تعمل بشكل جيد.',
    passportAvailable: true,
    priceState: 'Estimate: £250,000 – £350,000',
    viewingAvailable: true,
  },
  'rolex-daytona-paul-newman': {
    descriptionEn: 'A highly collectible Rolex Daytona "Paul Newman" reference 6239 with exotic dial.',
    descriptionAr: 'ساعة رولكس دايتونا "بول نيومان" مرجع 6239 المرغوبة جداً مع المينا الغريبة.',
    provenanceEn: 'Acquired by the current owner in 1972. Worn regularly until 2000, then preserved in a safety deposit box.',
    provenanceAr: 'اشتراها المالك الحالي في عام 1972. كان يرتديها بانتظام حتى عام 2000، ثم حفظت في صندوق أمانات.',
    conditionEn: 'Good condition with honest wear. Original dial shows light patina. Service history available from 2015.',
    conditionAr: 'حالة جيدة مع تآكل صادق. المينا الأصلي يظهر زنجاراً خفيفاً. سجل الصيانة متاح من 2015.',
    passportAvailable: true,
    priceState: 'Estimate: £150,000 – £200,000',
    viewingAvailable: true,
  },
  'van-cleef-alhambra': {
    descriptionEn: 'A Van Cleef & Arpels Alhambra long necklace in 18K gold with carved carnelian motifs.',
    descriptionAr: 'عقد طويل من فان كليف آند آربيلز ألمبرا من الذهب عيار 18 قيراط مع نقوش العقيق.',
    provenanceEn: 'Purchased directly from Van Cleef & Arpels, Place Vendôme, Paris in 1970.',
    provenanceAr: 'تم شراؤه مباشرة من فان كليف آند آربيلز، بلاس فاندوم، باريس في عام 1970.',
    conditionEn: 'Excellent condition. All carnelian motifs original. Clasp mechanism serviced.',
    conditionAr: 'حالة ممتازة. جميع نقوش العقيق أصلية. تم صيانة آلية المشبك.',
    passportAvailable: false,
    priceState: 'Price on Request',
    viewingAvailable: true,
  },
  'bulgari-serpenti': {
    descriptionEn: 'A Bulgari Serpenti secret watch in yellow gold with gem-set head and coiled body.',
    descriptionAr: 'ساعة بولغاري سيربنتي السرية من الذهب الأصفر مع رأس مرصع بالأحجار الكريمة وجسم حلزوني.',
    provenanceEn: 'From a prominent Italian collector. Original Bulgari box and certificate of authenticity.',
    provenanceAr: 'من جامع إيطالي بارز. علبة بولغاري الأصلية وشهادة الأصالة.',
    conditionEn: 'Very good condition. Gold shows light surface wear consistent with occasional use.',
    conditionAr: 'حالة جيدة جداً. الذهب يظهر تآكل سطحي خفيف يتناسب مع الاستخدام العرضي.',
    passportAvailable: true,
    priceState: 'Price on Request',
    viewingAvailable: true,
  },
  'hermes-birkin-faubourg': {
    descriptionEn: 'A Hermès Birkin 30 Faubourg in Epsom leather with palladium hardware, a limited edition celebrating the Faubourg Saint-Honoré flagship.',
    descriptionAr: 'حقيبة هرميس بيركين 30 فوبورغ من جلد إبسوم مع إكسسوارات من البلاديوم، إصدار محدود.',
    provenanceEn: 'Purchased new at Hermès Faubourg Saint-Honoré, Paris. Full set with all original accessories.',
    provenanceAr: 'تم شراؤها جديدة من هرميس فوبورغ سان-أونوريه، باريس. مجموعة كاملة مع جميع الملحقات الأصلية.',
    conditionEn: 'Excellent, light use. Hardware still protected with original plastic on one clasp.',
    conditionAr: 'ممتازة، استخدام خفيف. الإكسسوارات المعدنية لا تزال محمية بالبلاستيك الأصلي على مشبك واحد.',
    passportAvailable: true,
    priceState: 'Price on Request',
    viewingAvailable: false,
  },
  'chanel-classic-flap': {
    descriptionEn: 'A Chanel Classic Flap Bag 11.12 in black lambskin with gold hardware, from the 1995 collection.',
    descriptionAr: 'حقيبة شانيل الكلاسيكية 11.12 من جلد الخروف الأسود مع إكسسوارات ذهبية، من مجموعة 1995.',
    provenanceEn: 'Originally purchased by a Chanel VIP client in Paris. Accompanied by authenticity card and dust bag.',
    provenanceAr: 'اشترتها في الأصل عميلة VIP من شانيل في باريس. مرفقة ببطاقة الأصالة وكيس الغبار.',
    conditionEn: 'Very good condition. Lambskin is supple with light corner wear. Hardware shows minor patina.',
    conditionAr: 'حالة جيدة جداً. جلد الخروف ناعم مع تآكل طفيف في الزوايا. الإكسسوارات تظهر زنجاراً خفيفاً.',
    passportAvailable: false,
    priceState: 'Price on Request',
    viewingAvailable: true,
  },
  'jean-prouve-standard': {
    descriptionEn: 'A Jean Prouvé Standard chair in oak and steel, an icon of 20th century French design.',
    descriptionAr: 'كرسي جان بروفيه القياسي من خشب البلوط والفولاذ، أيقونة التصميم الفرنسي في القرن العشرين.',
    provenanceEn: 'From a private French collection. Original stamped example with maker\'s mark.',
    provenanceAr: 'من مجموعة فرنسية خاصة. نموذج أصلي مختوم بعلامة الصانع.',
    conditionEn: 'Good restored condition. Steel frame repainted in original grey. Oak seat shows warm patina.',
    conditionAr: 'حالة جيدة بعد الترميم. تم إعادة طلاء الهيكل الفولاذي بالرمادي الأصلي. مقعد البلوط يظهر زنجاراً دافئاً.',
    passportAvailable: false,
    priceState: 'Price on Request',
    viewingAvailable: true,
  },
  'eileen-gray-bibendum': {
    descriptionEn: 'An Eileen Gray Bibendum chair, circa 1929, in its original deep brown leather.',
    descriptionAr: 'كرسي إيلين غراي بيبندوم، حوالي 1929، من الجلد البني الغامق الأصلي.',
    provenanceEn: 'From the estate of a Parisian decorator. Acquired directly from Eileen Gray\'s studio in 1930.',
    provenanceAr: 'من مجموعة مصمم ديكور باريسي. تم الحصول عليه مباشرة من استوديو إيلين غراي في عام 1930.',
    conditionEn: 'Original leather with beautiful age-related patina and cracking. Frame structurally sound.',
    conditionAr: 'جلد أصلي مع زنجار جميل مرتبط بالعمر وتشققات. الهيكل سليم من الناحية الهيكلية.',
    passportAvailable: false,
    priceState: 'Estimate: £80,000 – £120,000',
    viewingAvailable: true,
  },
  'monet-water-lilies': {
    descriptionEn: 'A study in oil on canvas for Claude Monet\'s monumental Water Lilies series, painted at Giverny circa 1916.',
    descriptionAr: 'دراسة زيتية على قماش لسلسلة زنابق الماء الضخمة لكلود مونيه، رسمت في جيفرني حوالي 1916.',
    provenanceEn: 'Remained in Monet\'s studio until his death. Subsequently in private European collections. Published in the Wildenstein catalogue raisonné.',
    provenanceAr: 'بقيت في استوديو مونيه حتى وفاته. ثم في مجموعات أوروبية خاصة. منشورة في كتالوج وايلدنشتاين.',
    conditionEn: 'Canvas has been professionally cleaned and stabilized. Minor inpainting in upper left quadrant. Ready for display.',
    conditionAr: 'تم تنظيف القماش وتثبيته بشكل احترافي. ترميم طفيف في الربع العلوي الأيسر. جاهز للعرض.',
    passportAvailable: true,
    priceState: 'Estimate: £800,000 – £1,200,000',
    viewingAvailable: true,
  },
  'icelandic-saga-manuscript': {
    descriptionEn: 'A fragment of an Icelandic saga manuscript on vellum, dating to circa 1250. Contains text from one of the Sagas of Icelanders.',
    descriptionAr: 'جزء من مخطوطة ملحمة آيسلندية على الرق، يعود إلى حوالي 1250. يحتوي على نص من إحدى ملاحم الآيسلنديين.',
    provenanceEn: 'Private Scandinavian collection since 18th century. Accompanied by full scholarly authentication and export license.',
    provenanceAr: 'مجموعة اسكندنافية خاصة منذ القرن الثامن عشر. مرفقة بتوثيق أكاديمي كامل ورخصة تصدير.',
    conditionEn: 'Vellum in stable condition. Text clearly legible. Preserved in custom archival mount.',
    conditionAr: 'الرق في حالة مستقرة. النص مقروء بوضوح. محفوظ في حامل أرشيفي مخصص.',
    passportAvailable: true,
    priceState: 'Price on Request',
    viewingAvailable: true,
  },
  'first-edition-joyce': {
    descriptionEn: 'James Joyce\'s Ulysses, first edition published by Shakespeare and Company, Paris, 1922. Number 523 of 1000 copies.',
    descriptionAr: 'يوليسيس لجيمس جويس، الطبعة الأولى التي نشرتها شكسبير آند كومباني، باريس، 1922. رقم 523 من 1000 نسخة.',
    provenanceEn: 'From the library of a noted literary collector. Original blue wrappers preserved. Accompanied by original dust jacket.',
    provenanceAr: 'من مكتبة جامع أدبي معروف. الأغلفة الزرقاء الأصلية محفوظة. مرفقة بغلاف الغبار الأصلي.',
    conditionEn: 'Very good. Original wrappers intact with minor spine chipping. Interior clean with no markings.',
    conditionAr: 'جيد جداً. الأغلفة الأصلية سليمة مع تآكل طفيف في العمود الفقري. الداخل نظيف بدون علامات.',
    passportAvailable: false,
    priceState: 'Estimate: £30,000 – £45,000',
    viewingAvailable: true,
  },
};

function getDetail(slug: string) {
  return detailMap[slug] ?? detailMap['patek-1518'];
}

export function getMockArtifactCard(slug: string): PublicArtifactCardDTO | undefined {
  return mockArtifactCards.find((a) => a.slug === slug);
}

export function getMockArtifactsByCategory(categorySlug: string): PublicArtifactCardDTO[] {
  const cat = mockCategories.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return mockArtifactCards.filter((a) => a.categoryId === cat.id);
}

export function getMockArtifactDetail(slug: string): PublicArtifactDetailDTO | undefined {
  const card = getMockArtifactCard(slug);
  if (!card) return undefined;

  const detail = getDetail(slug);

  return {
    id: card.id,
    slug: card.slug,
    titleEn: card.titleEn,
    titleAr: card.titleAr,
    categoryId: card.categoryId,
    categoryNameEn: card.categoryNameEn,
    categoryNameAr: card.categoryNameAr,
    descriptionEn: detail.descriptionEn,
    descriptionAr: detail.descriptionAr,
    yearPeriod: card.yearPeriod,
    maison: card.maison,
    maker: card.maison,
    provenanceSummary: detail.provenanceEn,
    conditionSummary: detail.conditionEn,
    evidenceLabel: card.evidenceLabel,
    confidenceLabel: 'High Confidence',
    passportAvailable: detail.passportAvailable,
    passportPreview: null,
    mediaGallery: [],
    costClarity: getMockCostClarity(slug),
    viewingAvailability: getMockViewingAvailability(slug),
    riskTier: card.riskTier,
    createdAt: now,
  };
}

export function getMockCostClarity(slug: string): PublicCostClarityDTO {
  const detail = getDetail(slug);
  return {
    priceState: detail.priceState,
    buyerPremium: 'Buyer\'s Premium: 15% on first £50,000, 12% thereafter',
    vatNote: 'VAT applies at the prevailing rate for EU buyers',
    serviceFeeNote: 'Concierge service fees included in the purchase price',
    shippingNote: 'White-glove shipping and insurance quoted individually',
    estimatedTotal: null,
    disclaimer: 'All figures are indicative. Final costs confirmed at point of sale.',
  };
}

export function getMockViewingAvailability(slug: string): PublicViewingAvailabilityDTO {
  const detail = getDetail(slug);
  return {
    available: detail.viewingAvailable,
    method: 'Private Appointment',
    locationType: 'Private Salon',
    appointmentRequired: true,
    custodyState: detail.viewingAvailable ? 'Available in secure custody, Geneva' : 'Held in private collection',
  };
}

export function getMockWatchProfile(slug: string): PublicWatchDTO {
  const profiles: Record<string, PublicWatchDTO> = {
    'patek-1518': {
      reference: 'Ref. 1518', year: '1948', material: '18K Rose Gold',
      movementType: 'Manual Winding', caliber: 'Cal. 13\u2033',
      condition: 'Excellent, original dial and hands', boxPapers: true,
      serviceNotes: 'Full service history available from 2023', specialistReviewState: 'approved',
    },
    'cartier-tortue': {
      reference: 'Tortue Monopoussoir', year: '1928', material: '18K Yellow Gold',
      movementType: 'Manual Winding', caliber: 'Cal. 12\u2032\u2032\u2032',
      condition: 'Very good, dial expertly restored', boxPapers: true,
      serviceNotes: 'Service history available from 2018', specialistReviewState: 'approved',
    },
    'rolex-daytona-paul-newman': {
      reference: 'Ref. 6239', year: '1968', material: 'Stainless Steel',
      movementType: 'Manual Winding', caliber: 'Valjoux 722',
      condition: 'Good, honest wear', boxPapers: false,
      serviceNotes: 'Service history available from 2015', specialistReviewState: 'approved',
    },
  };
  return profiles[slug] ?? profiles['patek-1518'];
}

export function getMockJewelryProfile(slug: string): PublicJewelryDTO {
  const profiles: Record<string, PublicJewelryDTO> = {
    'van-cleef-alhambra': {
      material: '18K Gold, Carnelian',
      stones: [{ type: 'Carnelian', carat: 45.5, origin: 'India' }],
      certificates: [{ type: 'Van Cleef & Arpels', number: 'VCA-1970-ALH', date: '1970-03-15' }],
      maison: 'Van Cleef & Arpels', period: '1970s',
      condition: 'Excellent', specialistReviewState: 'approved',
    },
    'bulgari-serpenti': {
      material: '18K Yellow Gold, Diamonds, Emeralds',
      stones: [
        { type: 'Diamond', carat: 2.8, cut: 'Brilliant', color: 'E', clarity: 'VS1' },
        { type: 'Emerald', carat: 1.2, origin: 'Colombia' },
      ],
      certificates: [{ type: 'GIA', number: 'GIA-7654321', date: '2023-06-20' }],
      maison: 'Bulgari', period: '1965',
      condition: 'Very good', specialistReviewState: 'approved',
    },
  };
  return profiles[slug] ?? profiles['van-cleef-alhambra'];
}

export function getMockHandbagProfile(slug: string): PublicHandbagDTO {
  const profiles: Record<string, PublicHandbagDTO> = {
    'hermes-birkin-faubourg': {
      maison: 'Hermès', model: 'Birkin 30 Faubourg', material: 'Epsom Leather',
      hardware: 'Palladium', condition: 'Excellent, light use',
      accessories: ['Dust bag', 'Box', 'Rain cover', 'Clochette', 'Padlock', 'Keys'],
      specialistReviewState: 'approved',
    },
    'chanel-classic-flap': {
      maison: 'Chanel', model: 'Classic Flap 11.12', material: 'Black Lambskin',
      hardware: 'Gold', condition: 'Very good, light corner wear',
      accessories: ['Authenticity card', 'Dust bag'],
      specialistReviewState: 'approved',
    },
  };
  return profiles[slug] ?? profiles['hermes-birkin-faubourg'];
}

export function getMockDesignObjectProfile(_slug: string): PublicDesignObjectDTO {
  return {
    designer: 'Jean Prouvé', period: '1950', material: 'Oak, Steel',
    dimensions: '85 cm × 45 cm × 50 cm', condition: 'Good restored',
    specialistReviewState: 'approved',
  };
}

export interface LuxuryCategoryDisplay {
  slug: string;
  nameEn: string;
  nameAr: string;
  summaryEn: string;
  summaryAr: string;
  imageUrl: string | null;
}

export const mockLuxuryCategories: LuxuryCategoryDisplay[] = [
  { slug: 'watches', nameEn: 'Watches', nameAr: 'الساعات', summaryEn: 'Independent makers, rare references, and important complications.', summaryAr: 'صنّاع مستقلون، مراجع نادرة، وتعقيدات مهمة.', imageUrl: null },
  { slug: 'jewelry', nameEn: 'Jewelry', nameAr: 'المجوهرات', summaryEn: 'Important jewels with full stone documentation and provenance.', summaryAr: 'مجوهرات مهمة مع توثيق كامل للأحجار والمصدر.', imageUrl: null },
  { slug: 'handbags', nameEn: 'Handbags', nameAr: 'الحقائب اليدوية', summaryEn: 'Rare and collectible handbags with verified provenance.', summaryAr: 'حقائب نادرة وقابلة للجمع مع مصدر موثق.', imageUrl: null },
  { slug: 'design-objects', nameEn: 'Design Objects', nameAr: 'قطع التصميم', summaryEn: 'Collectible design from iconic 20th and 21st century creators.', summaryAr: 'تصميمات قابلة للجمع من مبدعي القرنين العشرين والحادي والعشرين.', imageUrl: null },
  { slug: 'cultural-heritage', nameEn: 'Cultural Heritage', nameAr: 'التراث الثقافي', summaryEn: 'Objects of cultural significance with full provenance documentation.', summaryAr: 'قطع ذات أهمية ثقافية مع توثيق كامل للمصدر.', imageUrl: null },
];
