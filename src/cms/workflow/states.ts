export const CMS_WORKFLOW_STATES = [
  'draft',
  'source_review_needed',
  'native_language_review_needed',
  'legal_ip_review_needed',
  'security_public_safe_review_needed',
  'approved_for_public_preview',
  'scheduled',
  'published',
  'archived',
  'superseded',
] as const;

export type CMSWorkflowState = typeof CMS_WORKFLOW_STATES[number];

export const VALID_TRANSITIONS: Record<CMSWorkflowState, CMSWorkflowState[]> = {
  draft: ['source_review_needed', 'archived'],
  source_review_needed: ['draft', 'native_language_review_needed', 'legal_ip_review_needed', 'archived'],
  native_language_review_needed: ['draft', 'source_review_needed', 'legal_ip_review_needed', 'approved_for_public_preview', 'archived'],
  legal_ip_review_needed: ['draft', 'source_review_needed', 'security_public_safe_review_needed', 'archived'],
  security_public_safe_review_needed: ['draft', 'source_review_needed', 'approved_for_public_preview', 'archived'],
  approved_for_public_preview: ['draft', 'scheduled', 'published', 'archived'],
  scheduled: ['draft', 'approved_for_public_preview', 'published', 'archived'],
  published: ['draft', 'superseded', 'archived'],
  archived: ['draft', 'published'],
  superseded: ['published', 'archived'],
};

export function canTransition(from: CMSWorkflowState, to: CMSWorkflowState): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false;
}

export function requiresLegalReview(type: string): boolean {
  return ['legal_policy', 'terms', 'privacy_policy'].includes(type);
}

export function requiresSecurityReview(content: Record<string, unknown>): boolean {
  if (content.type === 'legal_policy') return true;
  if (content.type === 'page' && content.slug === 'mobile-app-privacy') return true;
  return false;
}

export function getRequiredReviews(contentType: string, content: Record<string, unknown>): string[] {
  const required: string[] = [];

  if (contentType === 'legal_policy') {
    required.push('legal_ip_review_needed');
  }

  if (contentType === 'page' && (content.slug === 'mobile-app-privacy' || content.slug === 'account-data-deletion')) {
    required.push('legal_ip_review_needed', 'security_public_safe_review_needed');
  }

  if (contentType === 'museum_profile' || contentType === 'maison_heritage_profile') {
    required.push('source_review_needed');
  }

  return required;
}
