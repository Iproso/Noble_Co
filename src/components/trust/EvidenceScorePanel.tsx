'use client';

import { calculateEvidenceScore, getLabelDisplay, getLabelColor } from '@/lib/trust-spine';
import type { EvidenceInput, EvidenceLabel } from '@/lib/trust-spine';

interface EvidenceScorePanelProps {
  locale: string;
  input: EvidenceInput;
}

export function EvidenceScorePanel({ locale, input }: EvidenceScorePanelProps) {
  const result = calculateEvidenceScore(input);
  const display = getLabelDisplay(result.label);
  const colorClass = getLabelColor(result.label);
  const isRtl = locale === 'ar';
  const labelText = isRtl ? display.ar : display.en;

  const scoreColor = result.score >= 80
    ? 'bg-evidence-strong'
    : result.score >= 60
    ? 'bg-evidence-moderate'
    : result.score >= 30
    ? 'bg-evidence-limited'
    : 'bg-needs-review';

  return (
    <div className="bg-bg-card border border-border-light rounded-xl p-5 space-y-4 card-metallic">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-deep-ink">
          {isRtl ? 'درجة جاهزية الأدلة' : 'Evidence Readiness Score'}
        </h3>
        <span className={`text-[0.65rem] px-2 py-0.5 rounded-full font-medium border ${colorClass}`}>
          {labelText} ({result.score})
        </span>
      </div>

      <div className="h-2 bg-warm-gray rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${scoreColor}`}
          style={{ width: `${result.score}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-text-muted">
        <span>{isRtl ? '0 — بحاجة لمراجعة' : '0 — Needs Review'}</span>
        <span>{isRtl ? '100 — أدلة قوية' : '100 — Evidence Strong'}</span>
      </div>

      {result.missingItems.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-medium text-text-secondary">
            {isRtl ? 'العناصر المفقودة' : 'Missing Items'}:
          </p>
          <ul className="space-y-1">
            {result.missingItems.map((item) => (
              <li key={item} className="text-xs text-evidence-moderate flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-evidence-moderate" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.hardBlockers.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-medium text-risk-internal">
            {isRtl ? 'العوائق الرئيسية' : 'Hard Blockers'}:
          </p>
          <ul className="space-y-1">
            {result.hardBlockers.map((blocker) => (
              <li key={blocker} className="text-xs text-risk-internal flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-risk-internal" />
                {blocker}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-[0.6rem] text-text-muted italic">
        {isRtl
          ? 'هذا التقييم لا يشير إلى الأصالة أو التقييم القانوني أو التثمين.'
          : 'This score does not indicate authenticity, legal clearance, or valuation.'}
      </div>
    </div>
  );
}
