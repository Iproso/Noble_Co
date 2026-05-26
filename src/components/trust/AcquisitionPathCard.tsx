'use client';

import { ACQUISITION_PATHS, recommendAcquisitionPath } from '@/lib/trust-spine';
import type { AcquisitionPath } from '@/lib/trust-spine';

interface AcquisitionPathCardProps {
  locale: string;
  evidenceScore: number;
  riskTier: number;
  reviewState: string;
  hasPassport: boolean;
}

const confidenceStyles: Record<string, string> = {
  high: 'bg-evidence-strong/10 text-evidence-strong border-evidence-strong/20',
  medium: 'bg-evidence-moderate/10 text-evidence-moderate border-evidence-moderate/20',
  low: 'bg-evidence-limited/10 text-evidence-limited border-evidence-limited/20',
};

export function AcquisitionPathCard({
  locale,
  evidenceScore,
  riskTier,
  reviewState,
  hasPassport,
}: AcquisitionPathCardProps) {
  const recommendation = recommendAcquisitionPath(
    evidenceScore,
    riskTier,
    reviewState,
    hasPassport,
  );

  const pathInfo = ACQUISITION_PATHS[recommendation.path];
  const isRtl = locale === 'ar';
  const pathLabel = isRtl ? pathInfo.labelAr : pathInfo.labelEn;
  const pathDesc = isRtl ? pathInfo.descriptionAr : pathInfo.descriptionEn;
  const confidenceStyle = confidenceStyles[recommendation.confidence];

  return (
    <div className="bg-bg-card border border-border-light rounded-xl p-5 space-y-3 card-metallic shimmer-hover">
      <h3 className="text-sm font-medium text-deep-ink">
        {isRtl ? 'مسار الاقتناء الموصى به' : 'Recommended Acquisition Path'}
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-base font-display text-antique-gold">
          {pathLabel}
        </span>
        <span className={`text-[0.6rem] px-2 py-0.5 rounded-full font-medium border uppercase ${confidenceStyle}`}>
          {recommendation.confidence}
        </span>
      </div>

      <p className="text-xs text-text-secondary">{pathDesc}</p>

      {recommendation.reasons.length > 0 && (
        <div className="space-y-1">
          <p className="text-[0.65rem] text-text-muted uppercase tracking-wider">
            {isRtl ? 'الأسباب' : 'Reasons'}
          </p>
          <ul className="space-y-0.5">
            {recommendation.reasons.map((reason, i) => (
              <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                <span className="text-antique-gold mt-0.5">·</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
