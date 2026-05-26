'use client';

import { getReviewStateInfo } from '@/lib/trust-spine';
import type { ReviewState } from '@/lib/trust-spine';

interface ReviewStateBadgeProps {
  locale: string;
  state: ReviewState;
  showTooltip?: boolean;
}

export function ReviewStateBadge({
  locale,
  state,
  showTooltip = false,
}: ReviewStateBadgeProps) {
  const info = getReviewStateInfo(state);
  const label = locale === 'ar' ? info.labelAr : info.labelEn;
  const description = locale === 'ar' ? info.descriptionAr : info.descriptionEn;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.65rem] px-2.5 py-1 rounded-full font-medium ${info.colorClass}`}
      title={showTooltip ? description : undefined}
    >
      {info.requiresAttention && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
      {!info.requiresAttention && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {label}
    </span>
  );
}
