import { PublicArtifactCardDTO } from '@/dto';
import { ArtifactCard } from '@/components/ui';

interface FeaturedArtifactsProps {
  locale: string;
  title: string;
  artifacts: PublicArtifactCardDTO[];
  viewAllHref: string;
  viewAllLabel: string;
}

export function FeaturedArtifacts({
  locale,
  title,
  artifacts,
  viewAllHref,
  viewAllLabel,
}: FeaturedArtifactsProps) {
  if (artifacts.length === 0) return null;

  return (
    <section className="container-noble py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="heading-2 text-deep-ink">{title}</h2>
        <a
          href={`/${locale}${viewAllHref}`}
          className="text-sm text-antique-gold hover:text-muted-brass transition-colors font-medium"
        >
          {viewAllLabel} →
        </a>
      </div>
      <div className="card-grid">
        {artifacts.map((artifact) => (
          <ArtifactCard
            key={artifact.id}
            locale={locale}
            slug={artifact.slug}
            title={artifact.titleEn}
            titleAr={artifact.titleAr ?? undefined}
            category={artifact.categoryNameEn ?? ''}
            categoryAr={artifact.categoryNameAr ?? undefined}
            yearPeriod={artifact.yearPeriod ?? undefined}
            maison={artifact.maison ?? undefined}
            evidenceLabel={artifact.evidenceLabel ?? undefined}
            imageUrl={artifact.primaryImageUrl ?? undefined}
            riskTier={artifact.riskTier}
          />
        ))}
      </div>
    </section>
  );
}
