import type { SourcingRequest as SourcingRequestType } from '@/lib/mock/member-data';

interface SourcingRequestProps {
  locale: string;
  request: SourcingRequestType;
}

export function SourcingRequest({ locale, request }: SourcingRequestProps) {
  const isRtl = locale === 'ar';
  const query = isRtl ? request.queryAr : request.queryEn;

  const statusColors: Record<string, string> = {
    open: 'bg-warm-gray/10 text-warm-gray',
    in_progress: 'bg-evidence-moderate/10 text-evidence-moderate',
    fulfilled: 'bg-evidence-strong/10 text-evidence-strong',
    closed: 'bg-risk-internal/10 text-risk-internal',
  };

  const statusLabels: Record<string, string> = {
    open: isRtl ? 'مفتوح' : 'Open',
    in_progress: isRtl ? 'قيد التنفيذ' : 'In Progress',
    fulfilled: isRtl ? 'مكتمل' : 'Fulfilled',
    closed: isRtl ? 'مغلق' : 'Closed',
  };

  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-4 space-y-2 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
      <div className="flex items-center gap-2">
        <span className={`text-[0.6rem] px-1.5 py-0.5 rounded-full ${statusColors[request.status]}`}>
          {statusLabels[request.status]}
        </span>
        <span className="text-[0.6rem] text-text-muted">{request.category}</span>
      </div>
      <p className="text-sm text-deep-ink leading-relaxed">{query}</p>
      <div className="flex items-center gap-4 text-xs text-text-secondary">
        <span>{request.createdDate}</span>
        {request.matchCount > 0 && (
          <span className="text-antique-gold">
            {request.matchCount} {isRtl ? 'نتيجة' : 'match'}{request.matchCount !== 1 ? 'es' : ''}
          </span>
        )}
      </div>
    </div>
  );
}
