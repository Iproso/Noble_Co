import Link from 'next/link';
import { PublicArtifactCardDTO } from '@/dto';

interface WatchlistItemProps {
  locale: string;
  item: PublicArtifactCardDTO;
  onRemove?: () => void;
}

export function WatchlistItem({ locale, item }: WatchlistItemProps) {
  const isRtl = locale === 'ar';
  const title = isRtl && item.titleAr ? item.titleAr : item.titleEn;
  const category = isRtl && item.categoryNameAr ? item.categoryNameAr : item.categoryNameEn;

  return (
    <div className="flex items-center gap-4 bg-bg-card rounded-xl border border-border-light p-4 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
      <div className="w-16 h-16 rounded-lg bg-soft-parchment flex items-center justify-center shrink-0">
        <span className="text-xl text-warm-gray">◈</span>
      </div>
      <div className="flex-1 min-w-0">
        <Link href={`/${locale}/artifacts/${item.slug}`} className="text-sm font-medium text-deep-ink hover:text-antique-gold transition-colors line-clamp-1">
          {title}
        </Link>
        <p className="text-xs text-text-secondary mt-0.5">
          {category}
          {item.yearPeriod && ` · ${item.yearPeriod}`}
          {item.maison && ` · ${item.maison}`}
        </p>
        {item.evidenceLabel && (
          <span className="inline-block text-[0.6rem] px-1.5 py-0.5 rounded-full bg-evidence-moderate/10 text-evidence-moderate mt-1">
            {item.evidenceLabel}
          </span>
        )}
      </div>
      <Link
        href={`/${locale}/artifacts/${item.slug}`}
        className="text-xs text-antique-gold hover:text-muted-brass transition-colors shrink-0"
      >
        {isRtl ? 'عرض' : 'View'} →
      </Link>
    </div>
  );
}
