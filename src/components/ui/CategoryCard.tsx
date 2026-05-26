'use client';

import Link from 'next/link';

interface CategoryCardProps {
  locale: string;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  count?: number;
  imageUrl?: string;
}

export function CategoryCard({
  locale,
  slug,
  title,
  titleAr,
  description,
  descriptionAr,
  count,
  imageUrl,
}: CategoryCardProps) {
  const isRtl = locale === 'ar';
  const displayTitle = isRtl ? titleAr : title;
  const displayDescription = isRtl ? descriptionAr : description;

  return (
    <Link
      href={`/${locale}/explore/${slug}`}
      className="group block bg-bg-card rounded-xl overflow-hidden border border-border-light hover:border-antique-gold/30 transition-all duration-300 card-metallic shimmer-hover"
    >
      <div className="aspect-[16/9] bg-soft-parchment overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={displayTitle}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-warm-gray">
            <span className="text-5xl">◇</span>
          </div>
        )}
      </div>
      <div className="p-5 space-y-2">
        <h3 className="heading-3 text-deep-ink">{displayTitle}</h3>
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
          {displayDescription}
        </p>
        {count !== undefined && (
          <p className="text-xs text-text-muted">
            {count} {isRtl ? 'قطعة' : 'objects'}
          </p>
        )}
      </div>
    </Link>
  );
}
