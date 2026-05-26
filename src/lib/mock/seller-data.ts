export const mockSubmissions = [
  { id: '1', titleEn: 'Patek Philippe Calatrava 1927', titleAr: 'باتيك فيليب كالاترافا 1927', status: 'under_review', statusEn: 'Under Review', statusAr: 'قيد المراجعة', submittedAt: '2026-05-20', categoryEn: 'Watches', categoryAr: 'ساعات', estimateEn: '$12,000 – $18,000', estimateAr: '١٢٬٠٠٠ – ١٨٬٠٠٠ دولار', image: null },
  { id: '2', titleEn: 'Cartier Tank Louis Cartier', titleAr: 'كارتييه تانك لويس كارتييه', status: 'evidence_requested', statusEn: 'Evidence Requested', statusAr: 'طلب أدلة', submittedAt: '2026-05-18', categoryEn: 'Watches', categoryAr: 'ساعات', estimateEn: '$8,000 – $12,000', estimateAr: '٨٬٠٠٠ – ١٢٬٠٠٠ دولار', image: null },
  { id: '3', titleEn: 'Hermès Himalaya Birkin 30', titleAr: 'هيرميس هيمالايا بيركين 30', status: 'approved', statusEn: 'Approved', statusAr: 'تمت الموافقة', submittedAt: '2026-05-10', categoryEn: 'Handbags', categoryAr: 'حقائب', estimateEn: '$25,000 – $35,000', estimateAr: '٢٥٬٠٠٠ – ٣٥٬٠٠٠ دولار', image: null },
  { id: '4', titleEn: 'Rolex Daytona Paul Newman', titleAr: 'رولكس دايتونا بول نيومان', status: 'draft', statusEn: 'Draft', statusAr: 'مسودة', submittedAt: '2026-05-22', categoryEn: 'Watches', categoryAr: 'ساعات', estimateEn: '$40,000 – $60,000', estimateAr: '٤٠٬٠٠٠ – ٦٠٬٠٠٠ دولار', image: null },
  { id: '5', titleEn: 'Bulgari Serpenti High Jewelry', titleAr: 'بولغاري سيربنتي للمجوهرات الراقية', status: 'rejected', statusEn: 'Rejected', statusAr: 'مرفوض', submittedAt: '2026-05-05', categoryEn: 'Jewelry', categoryAr: 'مجوهرات', estimateEn: null, estimateAr: null, image: null },
];

export const mockEvidenceRequests = [
  { id: 'er1', submissionId: '2', titleEn: 'Cartier Tank Louis Cartier', titleAr: 'كارتييه تانك لويس كارتييه', requestedItemEn: 'Certificate of Authenticity', requestedItemAr: 'شهادة أصالة', requestedAt: '2026-05-21', dueDate: '2026-06-04', statusEn: 'Pending', statusAr: 'معلق' },
  { id: 'er2', submissionId: '2', titleEn: 'Cartier Tank Louis Cartier', titleAr: 'كارتييه تانك لويس كارتييه', requestedItemEn: 'Original box & papers', requestedItemAr: 'العلبة والأوراق الأصلية', requestedAt: '2026-05-21', dueDate: '2026-06-04', statusEn: 'Pending', statusAr: 'معلق' },
  { id: 'er3', submissionId: '3', titleEn: 'Hermès Himalaya Birkin 30', titleAr: 'هيرميس هيمالايا بيركين 30', requestedItemEn: 'Proof of purchase receipt', requestedItemAr: 'إثبات فاتورة الشراء', requestedAt: '2026-05-12', dueDate: '2026-05-26', statusEn: 'Submitted', statusAr: 'تم التقديم' },
];

export const mockReviewTimeline = [
  { id: '1', stepEn: 'Submission Received', stepAr: 'تم استلام التقديم', dateEn: 'May 20, 2026', dateAr: '٢٠ مايو ٢٠٢٦', status: 'completed' },
  { id: '2', stepEn: 'Category Assignment', stepAr: 'تحديد الفئة', dateEn: 'May 21, 2026', dateAr: '٢١ مايو ٢٠٢٦', status: 'completed' },
  { id: '3', stepEn: 'Preliminary Review', stepAr: 'المراجعة الأولية', dateEn: 'May 23, 2026', dateAr: '٢٣ مايو ٢٠٢٦', status: 'completed' },
  { id: '4', stepEn: 'Expert Evaluation', stepAr: 'تقييم الخبراء', dateEn: 'Pending', dateAr: 'معلق', status: 'current' },
  { id: '5', stepEn: 'Final Decision', stepAr: 'القرار النهائي', dateEn: null, dateAr: null, status: 'pending' },
];

export const mockSalePaths = [
  { id: '1', type: 'auction', titleEn: 'Auction Sale', titleAr: 'بيع بالمزاد', descriptionEn: 'Best for high-demand items with comparable market data. 60–90 day timeline.', descriptionAr: 'الأفضل للقطع عالية الطلب مع بيانات سوقية مماثلة. مدة ٦٠–٩٠ يوماً.', matchScore: 92, icon: '🔨' },
  { id: '2', type: 'private_sale', titleEn: 'Private Sale', titleAr: 'بيع خاص', descriptionEn: 'Ideal for unique items or when discretion is preferred. 30–60 day timeline.', descriptionAr: 'مثالي للقطع الفريدة أو عند تفضيل السرية. مدة ٣٠–٦٠ يوماً.', matchScore: 78, icon: '🤝' },
  { id: '3', type: 'direct_offer', titleEn: 'Direct Offer', titleAr: 'عرض مباشر', descriptionEn: 'Immediate purchase by Noble Collectors. Fastest option, 7–14 day timeline.', descriptionAr: 'شراء فوري من نوبل كوليكتورز. الخيار الأسرع، مدة ٧–١٤ يوماً.', matchScore: 65, icon: '⚡' },
];

export const mockOffers = [
  { id: 'o1', titleEn: 'Patek Philippe Calatrava 1927', titleAr: 'باتيك فيليب كالاترافا 1927', amountEn: '$14,500', amountAr: '١٤٬٥٠٠ دولار', typeEn: 'Private Sale', typeAr: 'بيع خاص', receivedAt: '2026-05-24', expiresAt: '2026-06-07', statusEn: 'Pending', statusAr: 'معلق' },
  { id: 'o2', titleEn: 'Cartier Tank Louis Cartier', titleAr: 'كارتييه تانك لويس كارتييه', amountEn: '$9,200', amountAr: '٩٬٢٠٠ دولار', typeEn: 'Direct Purchase', typeAr: 'شراء مباشر', receivedAt: '2026-05-22', expiresAt: '2026-06-05', statusEn: 'Pending', statusAr: 'معلق' },
  { id: 'o3', titleEn: 'Hermès Himalaya Birkin 30', titleAr: 'هيرميس هيمالايا بيركين 30', amountEn: '$32,000', amountAr: '٣٢٬٠٠٠ دولار', typeEn: 'Auction Reserve', typeAr: 'احتياطي مزاد', receivedAt: '2026-05-15', expiresAt: '2026-06-01', statusEn: 'Accepted', statusAr: 'مقبول' },
];

export const mockConsignments = [
  { id: 'c1', titleEn: 'Hermès Himalaya Birkin 30', titleAr: 'هيرميس هيمالايا بيركين 30', agreementDate: '2026-05-25', commissionEn: '12%', commissionAr: '١٢٪', reserveEn: '$25,000', reserveAr: '٢٥٬٠٠٠ دولار', statusEn: 'Active', statusAr: 'نشط', saleTypeEn: 'Auction', saleTypeAr: 'مزاد' },
  { id: 'c2', titleEn: 'Rolex Daytona Paul Newman', titleAr: 'رولكس دايتونا بول نيومان', agreementDate: '2026-05-15', commissionEn: '10%', commissionAr: '١٠٪', reserveEn: '$40,000', reserveAr: '٤٠٬٠٠٠ دولار', statusEn: 'Pending Approval', statusAr: 'بانتظار الموافقة', saleTypeEn: 'Auction', saleTypeAr: 'مزاد' },
];

export const mockPayments = [
  { id: 'p1', titleEn: 'Hermès Himalaya Birkin 30', titleAr: 'هيرميس هيمالايا بيركين 30', amountEn: '$28,160', amountAr: '٢٨٬١٦٠ دولار', typeEn: 'Sale Proceeds', typeAr: 'عائدات البيع', date: '2026-05-28', statusEn: 'Received', statusAr: 'تم الاستلام' },
  { id: 'p2', titleEn: 'Cartier Tank Louis Cartier', titleAr: 'كارتييه تانك لويس كارتييه', amountEn: '$200', amountAr: '٢٠٠ دولار', typeEn: 'Storage Fee Refund', typeAr: 'استرداد رسوم التخزين', date: '2026-05-20', statusEn: 'Processing', statusAr: 'قيد المعالجة' },
  { id: 'p3', titleEn: 'Patek Philippe Calatrava 1927', titleAr: 'باتيك فيليب كالاترافا 1927', amountEn: '$1,200', amountAr: '١٬٢٠٠ دولار', typeEn: 'Appraisal Fee', typeAr: 'رسوم التقييم', date: '2026-05-10', statusEn: 'Withheld', statusAr: 'محتجز' },
];

export const mockMessages = [
  { id: 'm1', fromEn: 'Concierge Team', fromAr: 'فريق الكونسيرج', subjectEn: 'Patek Philippe submission update', subjectAr: 'تحديث تقديم باتيك فيليب', previewEn: 'Your Calatrava has passed preliminary review and is now with our expert evaluation team...', previewAr: 'اجتازت كالاترافا الخاصة بك المراجعة الأولية وهي الآن مع فريق التقييم الخبير...', date: '2026-05-23', unread: true },
  { id: 'm2', fromEn: 'Noble Collectors', fromAr: 'نوبل كوليكتورز', subjectEn: 'Evidence request — Cartier Tank', subjectAr: 'طلب أدلة — كارتييه تانك', previewEn: 'We need the original Certificate of Authenticity and box for your Cartier Tank submission...', previewAr: 'نحتاج إلى شهادة الأصالة الأصلية والعلبة لتقديم كارتييه تانك الخاص بك...', date: '2026-05-21', unread: true },
  { id: 'm3', fromEn: 'Client Services', fromAr: 'خدمة العملاء', subjectEn: 'Sale path recommendations available', subjectAr: 'توصيات مسار البيع متاحة', previewEn: 'Based on our evaluation, we have prepared sale path recommendations for your items...', previewAr: 'بناءً على تقييمنا، قمنا بإعداد توصيات مسار البيع لقطعك...', date: '2026-05-19', unread: false },
  { id: 'm4', fromEn: 'Concierge Team', fromAr: 'فريق الكونسيرج', subjectEn: 'Welcome to Noble Collectors', subjectAr: 'مرحباً بك في نوبل كوليكتورز', previewEn: 'Welcome! We are excited to help you sell your collectibles...', previewAr: 'مرحباً! نحن متحمسون لمساعدتك في بيع مقتنياتك...', date: '2026-05-15', unread: false },
];
