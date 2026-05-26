import Link from 'next/link';
import type { LuxuryCategoryDisplay } from '@/lib/mock/explore-data';

interface LuxuryHubGridProps {
  locale: string;
  categories: LuxuryCategoryDisplay[];
}

const categoryIcons: Record<string, string> = {
  watches: '◈',
  jewelry: '◇',
  handbags: '▣',
  'design-objects': '◎',
  'cultural-heritage': '✦',
};

export function LuxuryHubGrid({ locale, categories }: LuxuryHubGridProps) {
  const isRtl = locale === 'ar';

  return (
    <section className="container-noble py-16">
      <div className="card-grid">
        {categories.map((cat) => {
          const displayName = isRtl ? cat.nameAr : cat.nameEn;
          const displaySummary = isRtl ? cat.summaryAr : cat.summaryEn;
          return (
            <Link
              key={cat.slug}
              href={`/${locale}/luxury-collectibles/${cat.slug}`}
              className="group block bg-bg-card rounded-xl overflow-hidden border border-border-light hover:border-antique-gold/30 transition-all duration-300 card-metallic shimmer-hover"
            >
              <div className="aspect-[16/9] bg-soft-parchment flex items-center justify-center">
                <span className="text-6xl text-warm-gray group-hover:text-antique-gold transition-colors duration-300">
                  {categoryIcons[cat.slug] || '◈'}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="heading-3 text-deep-ink">{displayName}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {displaySummary}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
