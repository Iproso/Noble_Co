// Deterministic Evidence Readiness Score (0–100)
// Does NOT imply authenticity, legal clearance, or valuation

export interface EvidenceInput {
  hasPhotos: boolean;
  photoCount: number;
  hasDocuments: boolean;
  documentCount: number;
  hasProvenance: boolean;
  provenanceDetail: 'none' | 'basic' | 'detailed' | 'verified';
  hasConditionReport: boolean;
  hasCertificate: boolean;
  hasPassport: boolean;
  categoryRequirementLevel: 1 | 2 | 3 | 4;
}

export interface EvidenceScoreResult {
  score: number;
  label: EvidenceLabel;
  deductions: string[];
  hardBlockers: string[];
  missingItems: string[];
}

export type EvidenceLabel = 'evidence_strong' | 'evidence_moderate' | 'evidence_limited' | 'needs_review';

const LABEL_THRESHOLDS: Record<EvidenceLabel, number> = {
  evidence_strong: 80,
  evidence_moderate: 60,
  evidence_limited: 30,
  needs_review: 0,
};

const LABEL_DISPLAY: Record<EvidenceLabel, { en: string; ar: string }> = {
  evidence_strong: { en: 'Evidence Strong', ar: 'الأدلة قوية' },
  evidence_moderate: { en: 'Evidence Moderate', ar: 'الأدلة متوسطة' },
  evidence_limited: { en: 'Evidence Limited', ar: 'الأدلة محدودة' },
  needs_review: { en: 'Needs Review', ar: 'بحاجة لمراجعة' },
};

export function calculateEvidenceScore(input: EvidenceInput): EvidenceScoreResult {
  let score = 0;
  const deductions: string[] = [];
  const hardBlockers: string[] = [];
  const missingItems: string[] = [];

  // Base score from core evidence categories
  // Photos (max 25 points)
  if (input.hasPhotos) {
    score += 10;
    if (input.photoCount >= 3) score += 10;
    if (input.photoCount >= 5) score += 5;
  } else {
    deductions.push('No photos provided');
    missingItems.push('Photographs');
  }

  // Documents (max 15 points)
  if (input.hasDocuments) {
    score += 10;
    if (input.documentCount >= 2) score += 5;
  } else {
    deductions.push('No supporting documents');
    missingItems.push('Supporting documents');
  }

  // Provenance (max 25 points)
  switch (input.provenanceDetail) {
    case 'verified':
      score += 25;
      break;
    case 'detailed':
      score += 20;
      break;
    case 'basic':
      score += 10;
      break;
    case 'none':
      deductions.push('No provenance information');
      missingItems.push('Provenance history');
      break;
  }

  // Condition report (max 15 points)
  if (input.hasConditionReport) {
    score += 15;
  } else {
    deductions.push('No condition report');
    missingItems.push('Condition report');
  }

  // Certificate (max 10 points)
  if (input.hasCertificate) {
    score += 10;
  } else {
    deductions.push('No certificate');
    missingItems.push('Certificate / lab report');
  }

  // Passport (max 10 points)
  if (input.hasPassport) {
    score += 10;
  }

  // Category requirement level adjustments
  if (input.categoryRequirementLevel >= 3 && !input.hasProvenance) {
    hardBlockers.push('Provenance required for this category risk tier');
  }
  if (input.categoryRequirementLevel >= 3 && !input.hasCertificate && !input.hasPassport) {
    hardBlockers.push('Certificate or Heritage Passport required for this category');
  }

  // Hard blocker deduction
  if (hardBlockers.length > 0) {
    score = Math.max(0, score - 20);
  }

  // Clamp to 0–100
  score = Math.max(0, Math.min(100, score));

  // Determine label
  const label = getLabel(score);

  return {
    score,
    label,
    deductions,
    hardBlockers,
    missingItems,
  };
}

export function getLabel(score: number): EvidenceLabel {
  if (score >= LABEL_THRESHOLDS.evidence_strong) return 'evidence_strong';
  if (score >= LABEL_THRESHOLDS.evidence_moderate) return 'evidence_moderate';
  if (score >= LABEL_THRESHOLDS.evidence_limited) return 'evidence_limited';
  return 'needs_review';
}

export function getLabelDisplay(label: EvidenceLabel): { en: string; ar: string } {
  return LABEL_DISPLAY[label];
}

export function getLabelColor(label: EvidenceLabel): string {
  const colors: Record<EvidenceLabel, string> = {
    evidence_strong: 'bg-evidence-strong/10 text-evidence-strong border-evidence-strong/20',
    evidence_moderate: 'bg-evidence-moderate/10 text-evidence-moderate border-evidence-moderate/20',
    evidence_limited: 'bg-evidence-limited/10 text-evidence-limited border-evidence-limited/20',
    needs_review: 'bg-needs-review/10 text-needs-review border-needs-review/20',
  };
  return colors[label];
}
