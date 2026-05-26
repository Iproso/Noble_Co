'use client';

import { getLabelDisplay, getLabelColor } from '@/lib/trust-spine';
import type { EvidenceLabel } from '@/lib/trust-spine';

interface EvidenceScoreBadgeProps {
  locale: string;
  label: EvidenceLabel;
  score?: number;
  showScore?: boolean;
}

export function EvidenceScoreBadge({
  locale,
  label,
  score,
  showScore = false,
}: EvidenceScoreBadgeProps) {
  const display = getLabelDisplay(label);
  const colorClass = getLabelColor(label);
  const text = locale === 'ar' ? display.ar : display.en;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.65rem] px-2.5 py-1 rounded-full font-medium border ${colorClass}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {text}
      {showScore && score !== undefined && (
        <span className="ml-1 opacity-70">({score})</span>
      )}
    </span>
  );
}
