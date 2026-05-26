export {
  calculateEvidenceScore,
  getLabel,
  getLabelDisplay,
  getLabelColor,
} from './evidence-score';
export type { EvidenceInput, EvidenceScoreResult, EvidenceLabel } from './evidence-score';

export {
  REVIEW_STATES,
  getReviewStateInfo,
  isValidReviewState,
} from './review-states';
export type { ReviewState, ReviewStateInfo } from './review-states';

export {
  RISK_FLAGS,
  getRiskFlagsBySeverity,
  getPublicRiskFlags,
  getRiskFlagColor,
} from './risk-flags';
export type { RiskFlag, RiskFlagSeverity } from './risk-flags';

export {
  ACQUISITION_PATHS,
  recommendAcquisitionPath,
} from './acquisition-path';
export type { AcquisitionPath, AcquisitionPathInfo, AcquisitionRecommendation } from './acquisition-path';
