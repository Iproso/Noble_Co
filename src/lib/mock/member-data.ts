import { PublicArtifactCardDTO } from '@/dto';
import { mockArtifactCards } from './explore-data';

export interface SalonRoom {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  isPrivate: boolean;
  memberCount: number;
  recentActivity: string;
}

export const mockSalonRooms: SalonRoom[] = [
  { id: 'room-1', slug: 'independent-watchmaking', nameEn: 'Independent Watchmaking', nameAr: 'صناعة الساعات المستقلة', descriptionEn: 'A salon dedicated to independent watchmakers — FP Journe, Kari Voutilainen, Roger Smith, and emerging talents.', descriptionAr: 'صالون مخصص لصنّاع الساعات المستقلين — إف بي جورن، كاري فوتيلاينن، روجر سميث، والمواهب الناشئة.', isPrivate: false, memberCount: 48, recentActivity: 'New discussion: Philippe Dufour Simplicity' },
  { id: 'room-2', slug: 'hermes-birkin-enthusiasts', nameEn: 'Hermès Birkin Enthusiasts', nameAr: 'عشاق هرميس بيركين', descriptionEn: 'Rare Birkin and Kelly references, leather discussions, and market intelligence.', descriptionAr: 'مراجع بيركين وكيلي النادرة، نقاشات الجلود، وذكاء السوق.', isPrivate: false, memberCount: 36, recentActivity: 'New addition: Himalaya Birkin 25' },
  { id: 'room-3', slug: 'art-deco-jewelry', nameEn: 'Art Deco Jewelry', nameAr: 'مجوهرات آرت ديكو', descriptionEn: 'Exploring the masterpieces of the Art Deco period — Cartier, Van Cleef & Arpels, Boucheron.', descriptionAr: 'استكشاف روائع فترة آرت ديكو — كارتييه، فان كليف آند آربيلز، بوشيرون.', isPrivate: false, memberCount: 29, recentActivity: 'Featured object: Cartier Tutti Frutti bracelet' },
  { id: 'room-4', slug: 'post-war-design', nameEn: 'Post-War Design', nameAr: 'التصميم ما بعد الحرب', descriptionEn: 'Collectible furniture and objects from 1945–1975: Prouvé, Gray, Noguchi, and more.', descriptionAr: 'أثاث وقطع قابلة للجمع من 1945–1975: بروفيه، غراي، نوغوتشي، والمزيد.', isPrivate: true, memberCount: 22, recentActivity: 'New thread: Identifying authentic Prouvé standards' },
  { id: 'room-5', slug: 'cultural-provenance', nameEn: 'Cultural Provenance Research', nameAr: 'بحث المصدر الثقافي', descriptionEn: 'Dedicated to provenance research, cultural heritage, and legal sourcing of important objects.', descriptionAr: 'مكرس لبحث المصدر والتراث الثقافي والتوريد القانوني للقطع المهمة.', isPrivate: true, memberCount: 15, recentActivity: 'New resource: Export due diligence checklist' },
];

export const mockMemberArtifacts: PublicArtifactCardDTO[] = mockArtifactCards.slice(0, 4);

export const mockWatchlistItems: PublicArtifactCardDTO[] = mockArtifactCards.slice(2, 6);

export const mockMessages = [
  { id: 'msg-1', fromConcierge: true, subjectEn: 'Heritage Passport — Patek Philippe 1518', subjectAr: 'جواز التراث — باتيك فيليب 1518', previewEn: 'Your Heritage Passport request has been received. Our team is compiling the dossier...', previewAr: 'تم استلام طلب جواز التراث الخاص بك. فريقنا يقوم بتجميع الملف...', date: '2026-05-23', unread: true },
  { id: 'msg-2', fromConcierge: true, subjectEn: 'Viewing Request — Cartier Tortue', subjectAr: 'طلب معاينة — كارتييه تورتيه', previewEn: 'A private viewing can be arranged at our Geneva salon next week. Please confirm your availability.', previewAr: 'يمكن ترتيب معاينة خاصة في صالوننا في جنيف الأسبوع القادم. يرجى تأكيد أوقاتك المتاحة.', date: '2026-05-22', unread: false },
  { id: 'msg-3', fromConcierge: false, subjectEn: 'Inquiry about Rolex Daytona', subjectAr: 'استفسار حول رولكس دايتونا', previewEn: 'I would like to know more about the Paul Newman Daytona reference 6239...', previewAr: 'أود معرفة المزيد عن دايتونا بول نيومان مرجع 6239...', date: '2026-05-20', unread: false },
];

export const mockCollectionStats = {
  totalObjects: 12,
  watchlistCount: 4,
  acquisitionCount: 3,
  pendingReview: 2,
};

export interface AuctionItem {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  maison: string;
  estimateEn: string;
  estimateAr: string;
  date: string;
  status: 'upcoming' | 'live' | 'passed';
  bidCount: number;
}

export const mockAuctionItems: AuctionItem[] = [
  { id: 'auc-1', slug: 'patek-1518', titleEn: 'Patek Philippe 1518', titleAr: 'باتيك فيليب 1518', maison: 'Patek Philippe', estimateEn: 'CHF 800,000 – 1,200,000', estimateAr: '٨٠٠,٠٠٠ – ١,٢٠٠,٠٠٠ فرنك سويسري', date: '2026-06-15', status: 'upcoming', bidCount: 0 },
  { id: 'auc-2', slug: 'fpee-journe-tourbillon', titleEn: 'FP Journe Tourbillon Souverain', titleAr: 'إف بي جورن توربيون سوفيرين', maison: 'FP Journe', estimateEn: 'CHF 250,000 – 350,000', estimateAr: '٢٥٠,٠٠٠ – ٣٥٠,٠٠٠ فرنك سويسري', date: '2026-06-15', status: 'upcoming', bidCount: 3 },
  { id: 'auc-3', slug: 'hermes-himalaya', titleEn: 'Hermès Himalaya Birkin 25', titleAr: 'هرميس هيمالايا بيركين ٢٥', maison: 'Hermès', estimateEn: 'USD 400,000 – 600,000', estimateAr: '٤٠٠,٠٠٠ – ٦٠٠,٠٠٠ دولار أمريكي', date: '2026-06-20', status: 'upcoming', bidCount: 7 },
  { id: 'auc-4', slug: 'cartier-tutti-frutti', titleEn: 'Cartier Tutti Frutti Bracelet', titleAr: 'سوار كارتييه توتي فروتي', maison: 'Cartier', estimateEn: 'USD 150,000 – 250,000', estimateAr: '١٥٠,٠٠٠ – ٢٥٠,٠٠٠ دولار أمريكي', date: '2026-05-10', status: 'passed', bidCount: 12 },
];

export interface ConditionRequest {
  id: string;
  artifactSlug: string;
  artifactTitleEn: string;
  artifactTitleAr: string;
  status: 'pending' | 'in_progress' | 'completed';
  requestedDate: string;
  completedDate?: string;
}

export const mockConditionRequests: ConditionRequest[] = [
  { id: 'cr-1', artifactSlug: 'patek-1518', artifactTitleEn: 'Patek Philippe 1518', artifactTitleAr: 'باتيك فيليب 1518', status: 'completed', requestedDate: '2026-04-10', completedDate: '2026-04-18' },
  { id: 'cr-2', artifactSlug: 'rolex-daytona', artifactTitleEn: 'Rolex Daytona Paul Newman', artifactTitleAr: 'رولكس دايتونا بول نيومان', status: 'in_progress', requestedDate: '2026-05-01' },
  { id: 'cr-3', artifactSlug: 'vacheron-57260', artifactTitleEn: 'Vacheron Constantin 57260', artifactTitleAr: 'فاشرون كونستانتين 57260', status: 'pending', requestedDate: '2026-05-20' },
];

export interface SourcingRequest {
  id: string;
  queryEn: string;
  queryAr: string;
  category: string;
  status: 'open' | 'in_progress' | 'fulfilled' | 'closed';
  createdDate: string;
  matchCount: number;
}

export const mockSourcingRequests: SourcingRequest[] = [
  { id: 'sr-1', queryEn: 'Patek Philippe perpetual calendar in yellow gold', queryAr: 'باتيك فيليب تقويم أبدي بالذهب الأصفر', category: 'Watches', status: 'in_progress', createdDate: '2026-05-15', matchCount: 2 },
  { id: 'sr-2', queryEn: 'Hermès Kelly 28 in matte alligator', queryAr: 'هرميس كيلي ٢٨ من جلد التمساح المات', category: 'Handbags', status: 'open', createdDate: '2026-05-18', matchCount: 0 },
  { id: 'sr-3', queryEn: 'Cartier Art Deco desk clock', queryAr: 'ساعة مكتب كارتييه آرت ديكو', category: 'Watches', status: 'fulfilled', createdDate: '2026-04-20', matchCount: 1 },
];

export interface MemberDocument {
  id: string;
  titleEn: string;
  titleAr: string;
  type: 'passport' | 'provenance' | 'condition' | 'certificate' | 'invoice';
  date: string;
  artifactNameEn: string;
  artifactNameAr: string;
}

export const mockDocuments: MemberDocument[] = [
  { id: 'doc-1', titleEn: 'Heritage Passport — Patek Philippe 1518', titleAr: 'جواز التراث — باتيك فيليب 1518', type: 'passport', date: '2026-05-01', artifactNameEn: 'Patek Philippe 1518', artifactNameAr: 'باتيك فيليب 1518' },
  { id: 'doc-2', titleEn: 'Condition Report — Rolex Daytona', titleAr: 'تقرير الحالة — رولكس دايتونا', type: 'condition', date: '2026-04-20', artifactNameEn: 'Rolex Daytona 6239', artifactNameAr: 'رولكس دايتونا 6239' },
  { id: 'doc-3', titleEn: 'Provenance Packet — Cartier Tortue', titleAr: 'حزمة المصدر — كارتييه تورتيه', type: 'provenance', date: '2026-04-15', artifactNameEn: 'Cartier Tortue Monopoussoir', artifactNameAr: 'كارتييه تورتيه مونوبوسوار' },
  { id: 'doc-4', titleEn: 'Certificate of Authenticity — Van Cleef Necklace', titleAr: 'شهادة أصالة — عقد فان كليف', type: 'certificate', date: '2026-03-10', artifactNameEn: 'Van Cleef & Arpels Ruby Necklace', artifactNameAr: 'عقد فان كليف آند آربيلز الياقوتي' },
  { id: 'doc-5', titleEn: 'Invoice — FP Journe Tourbillon', titleAr: 'فاتورة — إف بي جورن توربيون', type: 'invoice', date: '2026-02-28', artifactNameEn: 'FP Journe Tourbillon Souverain', artifactNameAr: 'إف بي جورن توربيون سوفيرين' },
];
