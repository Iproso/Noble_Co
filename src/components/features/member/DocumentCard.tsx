import type { MemberDocument } from '@/lib/mock/member-data';

interface DocumentCardProps {
  locale: string;
  document: MemberDocument;
}

const typeIcons: Record<string, string> = {
  passport: '◈',
  provenance: '◇',
  condition: '◆',
  certificate: '○',
  invoice: '□',
};

export function DocumentCard({ locale, document }: DocumentCardProps) {
  const isRtl = locale === 'ar';
  const title = isRtl ? document.titleAr : document.titleEn;
  const artifact = isRtl ? document.artifactNameAr : document.artifactNameEn;

  const typeLabels: Record<string, string> = {
    passport: isRtl ? 'جواز تراث' : 'Heritage Passport',
    provenance: isRtl ? 'مصدر' : 'Provenance',
    condition: isRtl ? 'حالة' : 'Condition',
    certificate: isRtl ? 'شهادة' : 'Certificate',
    invoice: isRtl ? 'فاتورة' : 'Invoice',
  };

  return (
    <div className="flex items-start gap-4 bg-bg-card rounded-xl border border-border-light p-4 hover:border-antique-gold/30 transition-colors cursor-pointer card-metallic shimmer-hover">
      <div className="w-10 h-10 rounded-lg bg-soft-parchment flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-base text-antique-gold" aria-hidden="true">{typeIcons[document.type]}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-deep-ink truncate">{title}</h4>
        <p className="text-xs text-text-secondary mt-0.5">{artifact}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full bg-soft-parchment text-text-muted">
            {typeLabels[document.type]}
          </span>
          <span className="text-[0.6rem] text-text-muted">{document.date}</span>
        </div>
      </div>
    </div>
  );
}
