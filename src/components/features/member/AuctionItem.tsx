import Link from 'next/link';
import type { AuctionItem as AuctionItemType } from '@/lib/mock/member-data';

interface AuctionItemProps {
  locale: string;
  item: AuctionItemType;
}

export function AuctionItem({ locale, item }: AuctionItemProps) {
  const isRtl = locale === 'ar';
  const title = isRtl ? item.titleAr : item.titleEn;
  const estimate = isRtl ? item.estimateAr : item.estimateEn;

  const statusColors: Record<string, string> = {
    upcoming: 'bg-evidence-moderate/10 text-evidence-moderate',
    live: 'bg-evidence-strong/10 text-evidence-strong',
    passed: 'bg-warm-gray/10 text-warm-gray',
  };

  const statusLabels: Record<string, string> = {
    upcoming: isRtl ? 'قادم' : 'Upcoming',
    live: isRtl ? 'مباشر' : 'Live',
    passed: isRtl ? 'منتهي' : 'Passed',
  };

  return (
    <Link
      href={`/${locale}/artifacts/${item.slug}`}
      className="flex items-center gap-4 bg-bg-card rounded-xl border border-border-light p-4 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover"
    >
      <div className="w-12 h-12 rounded-lg bg-soft-parchment flex items-center justify-center shrink-0">
        <span className="text-lg text-warm-gray">◈</span>
      </div>
      <div className="flex-1 min-w-0">
        <span className={`text-[0.6rem] px-1.5 py-0.5 rounded-full ${statusColors[item.status]}`}>
          {statusLabels[item.status]}
        </span>
        <h4 className="text-sm font-medium text-deep-ink mt-1 truncate">{title}</h4>
        <p className="text-xs text-text-secondary">{item.maison} · {estimate}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-xs text-text-muted">{item.date}</p>
        <p className="text-[0.6rem] text-text-muted">{item.bidCount} {isRtl ? 'عرض' : 'bids'}</p>
      </div>
    </Link>
  );
}
