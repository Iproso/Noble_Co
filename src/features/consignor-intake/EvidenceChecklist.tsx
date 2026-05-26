'use client';

interface EvidenceChecklistProps {
  locale: string;
  items: Array<{
    key: string;
    label: string;
    labelAr: string;
    required: boolean;
    completed: boolean;
  }>;
}

export function EvidenceChecklist({ locale, items }: EvidenceChecklistProps) {
  const isRtl = locale === 'ar';
  const completed = items.filter((i) => i.completed).length;
  const total = items.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-deep-ink">
          {isRtl ? 'قائمة الأدلة' : 'Evidence Checklist'}
        </h3>
        <span className="text-xs text-text-muted">
          {completed}/{total} ({percent}%)
        </span>
      </div>

      <div className="h-1.5 bg-warm-gray rounded-full overflow-hidden">
        <div
          className="h-full bg-antique-gold rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.key}
            className={`flex items-center gap-3 p-3 rounded-lg text-sm ${
              item.completed
                ? 'bg-evidence-strong/5 text-evidence-strong'
                : item.required
                ? 'bg-soft-parchment text-text-secondary'
                : 'bg-soft-parchment/50 text-text-muted'
            }`}
          >
            <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[0.5rem] ${
              item.completed
                ? 'bg-evidence-strong border-evidence-strong text-white'
                : 'border-warm-gray'
            }`}>
              {item.completed ? '✓' : ''}
            </span>
            <span className="flex-1">
              {isRtl ? item.labelAr : item.label}
            </span>
            {item.required && (
              <span className="text-[0.6rem] uppercase text-risk-internal">
                {isRtl ? 'مطلوب' : 'Required'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
