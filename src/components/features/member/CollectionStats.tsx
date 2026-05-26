interface CollectionStatsProps {
  locale: string;
  stats: {
    totalObjects: number;
    watchlistCount: number;
    acquisitionCount: number;
    pendingReview: number;
  };
}

export function CollectionStats({ locale, stats }: CollectionStatsProps) {
  const isRtl = locale === 'ar';

  const items = [
    { label: isRtl ? 'إجمالي القطع' : 'Total Objects', value: stats.totalObjects, color: 'text-deep-ink' },
    { label: isRtl ? 'قائمة المتابعة' : 'Watchlist', value: stats.watchlistCount, color: 'text-antique-gold' },
    { label: isRtl ? 'المقتناة' : 'Acquired', value: stats.acquisitionCount, color: 'text-evidence-strong' },
    { label: isRtl ? 'قيد المراجعة' : 'Pending Review', value: stats.pendingReview, color: 'text-evidence-moderate' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.label} className="bg-bg-card rounded-xl border border-border-light p-4 text-center card-metallic">
          <span className={`text-2xl font-display block ${item.color}`}>{item.value}</span>
          <span className="text-xs text-text-secondary mt-1 block">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
