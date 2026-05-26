'use client';

import Link from 'next/link';

interface ArtifactCardProps {
  locale: string;
  slug: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  yearPeriod?: string;
  maison?: string;
  evidenceLabel?: string;
  evidenceLabelAr?: string;
  imageUrl?: string;
  riskTier?: number;
}

export function ArtifactCard({
  locale,
  slug,
  title,
  titleAr,
  category,
  categoryAr,
  yearPeriod,
  maison,
  evidenceLabel,
  evidenceLabelAr,
  imageUrl,
  riskTier,
}: ArtifactCardProps) {
  const isRtl = locale === 'ar';
  const displayTitle = isRtl && titleAr ? titleAr : title;
  const displayCategory = isRtl && categoryAr ? categoryAr : category;
  const displayEvidence = isRtl && evidenceLabelAr ? evidenceLabelAr : evidenceLabel;

  return (
    <Link
      href={`/${locale}/artifacts/${slug}`}
      className="group block bg-bg-card rounded-xl overflow-hidden border border-border-light hover:border-antique-gold/30 transition-all duration-300 hover:shadow-lg card-metallic shimmer-hover"
    >
      <div className="aspect-[4/3] bg-soft-parchment overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={displayTitle}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-warm-gray">
            <span className="text-4xl">◈</span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <span className="text-xs text-text-muted uppercase tracking-wider">
          {displayCategory}
        </span>
        <h3 className="text-sm font-medium text-deep-ink group-hover:text-antique-gold transition-colors line-clamp-2">
          {displayTitle}
        </h3>
        {(yearPeriod || maison) && (
          <p className="text-xs text-text-secondary">
            {yearPeriod && maison ? `${yearPeriod} · ${maison}` : (yearPeriod || maison || '')}
          </p>
        )}
        {displayEvidence && (
          <span className="inline-block text-[0.65rem] px-2 py-0.5 rounded-full bg-evidence-moderate/10 text-evidence-moderate">
            {displayEvidence}
          </span>
        )}
      </div>
    </Link>
  );
}
