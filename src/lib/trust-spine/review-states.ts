// Review State System
// These are evidence/review labels, NOT authenticity or valuation claims

export type ReviewState =
  | 'pending'
  | 'research_ongoing'
  | 'review_pending'
  | 'specialist_review_required'
  | 'specialist_review_completed'
  | 'passport_available'
  | 'provenance_packet_available'
  | 'condition_notes_available';

export interface ReviewStateInfo {
  state: ReviewState;
  labelEn: string;
  labelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  colorClass: string;
  requiresAttention: boolean;
}

export const REVIEW_STATES: Record<ReviewState, ReviewStateInfo> = {
  pending: {
    state: 'pending',
    labelEn: 'Review Pending',
    labelAr: 'المراجعة معلقة',
    descriptionEn: 'This object is pending initial review.',
    descriptionAr: 'هذه القطعة في انتظار المراجعة الأولية.',
    colorClass: 'bg-warm-gray/30 text-text-muted',
    requiresAttention: false,
  },
  research_ongoing: {
    state: 'research_ongoing',
    labelEn: 'Research Ongoing',
    labelAr: 'البحث جارٍ',
    descriptionEn: 'Research and documentation is in progress.',
    descriptionAr: 'البحث والتوثيق قيد التقدم.',
    colorClass: 'bg-needs-review/10 text-needs-review',
    requiresAttention: false,
  },
  review_pending: {
    state: 'review_pending',
    labelEn: 'Review Pending',
    labelAr: 'المراجعة معلقة',
    descriptionEn: 'Awaiting specialist or internal review.',
    descriptionAr: 'في انتظار مراجعة الأخصائي أو المراجعة الداخلية.',
    colorClass: 'bg-evidence-moderate/10 text-evidence-moderate',
    requiresAttention: false,
  },
  specialist_review_required: {
    state: 'specialist_review_required',
    labelEn: 'Specialist Review Required',
    labelAr: 'مراجعة أخصائي مطلوبة',
    descriptionEn: 'This object requires specialist review before further processing.',
    descriptionAr: 'تتطلب هذه القطعة مراجعة أخصائي قبل المعالجة الإضافية.',
    colorClass: 'bg-evidence-limited/10 text-evidence-limited',
    requiresAttention: true,
  },
  specialist_review_completed: {
    state: 'specialist_review_completed',
    labelEn: 'Specialist Review Completed',
    labelAr: 'اكتملت مراجعة الأخصائي',
    descriptionEn: 'Specialist review has been completed.',
    descriptionAr: 'اكتملت مراجعة الأخصائي.',
    colorClass: 'bg-evidence-strong/10 text-evidence-strong',
    requiresAttention: false,
  },
  passport_available: {
    state: 'passport_available',
    labelEn: 'Passport Available on Request',
    labelAr: 'جواز السفر متاح عند الطلب',
    descriptionEn: 'A Heritage Passport dossier is available for qualified requesters.',
    descriptionAr: 'ملف جواز التراث متاح لمقدمي الطلبات المؤهلين.',
    colorClass: 'bg-evidence-strong/10 text-evidence-strong',
    requiresAttention: false,
  },
  provenance_packet_available: {
    state: 'provenance_packet_available',
    labelEn: 'Provenance Packet Available on Request',
    labelAr: 'حزمة المصدر متاحة عند الطلب',
    descriptionEn: 'Detailed provenance documentation is available on request.',
    descriptionAr: 'وثائق المصدر التفصيلية متاحة عند الطلب.',
    colorClass: 'bg-evidence-strong/10 text-evidence-strong',
    requiresAttention: false,
  },
  condition_notes_available: {
    state: 'condition_notes_available',
    labelEn: 'Condition Notes Available',
    labelAr: 'ملاحظات الحالة متاحة',
    descriptionEn: 'Professional condition assessment notes are available.',
    descriptionAr: 'ملاحظات تقييم الحالة المهنية متاحة.',
    colorClass: 'bg-evidence-moderate/10 text-evidence-moderate',
    requiresAttention: false,
  },
};

export function getReviewStateInfo(state: ReviewState): ReviewStateInfo {
  return REVIEW_STATES[state] || REVIEW_STATES.pending;
}

export function isValidReviewState(value: string): value is ReviewState {
  return Object.keys(REVIEW_STATES).includes(value);
}
