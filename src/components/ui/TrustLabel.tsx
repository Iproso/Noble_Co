'use client';

type TrustLevel = 'strong' | 'moderate' | 'limited' | 'review' | 'pending';

const levelConfig: Record<TrustLevel, { label: string; labelAr: string; className: string }> = {
  strong: {
    label: 'Evidence Strong',
    labelAr: 'الأدلة قوية',
    className: 'bg-evidence-strong/10 text-evidence-strong',
  },
  moderate: {
    label: 'Evidence Moderate',
    labelAr: 'الأدلة متوسطة',
    className: 'bg-evidence-moderate/10 text-evidence-moderate',
  },
  limited: {
    label: 'Evidence Limited',
    labelAr: 'الأدلة محدودة',
    className: 'bg-evidence-limited/10 text-evidence-limited',
  },
  review: {
    label: 'Needs Review',
    labelAr: 'بحاجة لمراجعة',
    className: 'bg-needs-review/10 text-needs-review',
  },
  pending: {
    label: 'Review Pending',
    labelAr: 'المراجعة معلقة',
    className: 'bg-warm-gray/30 text-text-secondary',
  },
};

interface TrustLabelProps {
  locale: string;
  level: TrustLevel;
}

export function TrustLabel({ locale, level }: TrustLabelProps) {
  const config = levelConfig[level];
  const label = locale === 'ar' ? config.labelAr : config.label;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.65rem] px-2.5 py-1 rounded-full font-medium ${config.className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
