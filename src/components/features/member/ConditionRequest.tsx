import Link from 'next/link';
import type { ConditionRequest as ConditionRequestType } from '@/lib/mock/member-data';

interface ConditionRequestProps {
  locale: string;
  request: ConditionRequestType;
}

export function ConditionRequest({ locale, request }: ConditionRequestProps) {
  const isRtl = locale === 'ar';
  const title = isRtl ? request.artifactTitleAr : request.artifactTitleEn;

  const statusColors: Record<string, string> = {
    pending: 'bg-warm-gray/10 text-warm-gray',
    in_progress: 'bg-evidence-moderate/10 text-evidence-moderate',
    completed: 'bg-evidence-strong/10 text-evidence-strong',
  };

  const statusLabels: Record<string, string> = {
    pending: isRtl ? 'قيد الانتظار' : 'Pending',
    in_progress: isRtl ? 'قيد التنفيذ' : 'In Progress',
    completed: isRtl ? 'مكتمل' : 'Completed',
  };

  return (
    <Link
      href={`/${locale}/artifacts/${request.artifactSlug}`}
      className="flex items-center gap-4 bg-bg-card rounded-xl border border-border-light p-4 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover"
    >
      <div className="w-12 h-12 rounded-lg bg-soft-parchment flex items-center justify-center shrink-0">
        <span className="text-lg text-warm-gray">◆</span>
      </div>
      <div className="flex-1 min-w-0">
        <span className={`text-[0.6rem] px-1.5 py-0.5 rounded-full ${statusColors[request.status]}`}>
          {statusLabels[request.status]}
        </span>
        <h4 className="text-sm font-medium text-deep-ink mt-1 truncate">{title}</h4>
        <p className="text-xs text-text-secondary">
          {isRtl ? 'طلب في' : 'Requested'} {request.requestedDate}
          {request.completedDate && ` · ${isRtl ? 'اكتمل' : 'Completed'} ${request.completedDate}`}
        </p>
      </div>
    </Link>
  );
}
