'use client';
import type { PublicLot } from '@/lib/mock/auction-data';

interface LotCardProps { locale: string; lot: PublicLot; }

export function LotCard({ locale, lot }: LotCardProps) {
  const isRtl = locale === 'ar';
  const estimateText = `${lot.currency} ${Number(lot.estimateLow).toLocaleString()} – ${Number(lot.estimateHigh).toLocaleString()}`;
  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-[0.6rem] text-text-muted uppercase tracking-wider">{isRtl ? `قطعة رقم ${lot.lotNumber}` : `Lot ${lot.lotNumber}`}</span>
          <h3 className="text-sm font-semibold text-deep-ink mt-1">{lot.maison}</h3>
          <p className="text-xs text-text-secondary mt-0.5">{lot.yearPeriod}</p>
        </div>
        <p className="text-xs text-text-muted shrink-0">{estimateText}</p>
      </div>
      <div className="flex gap-3 mt-3 text-[0.6rem]">
        {lot.viewingAvailable && <span className="px-2 py-0.5 rounded-full bg-soft-parchment text-text-muted">{isRtl ? 'متاح للمعاينة' : 'Viewing Available'}</span>}
        {lot.conditionReportAvailable && <span className="px-2 py-0.5 rounded-full bg-soft-parchment text-text-muted">{isRtl ? 'تقرير حالة متاح' : 'Condition Report'}</span>}
      </div>
    </div>
  );
}
