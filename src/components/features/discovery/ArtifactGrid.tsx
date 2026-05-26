import { PublicArtifactCardDTO } from '@/dto';
import { ArtifactCard } from '@/components/ui';

interface ArtifactGridProps {
  locale: string;
  artifacts: PublicArtifactCardDTO[];
  emptyMessage: string;
}

export function ArtifactGrid({ locale, artifacts, emptyMessage }: ArtifactGridProps) {
  if (artifacts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary">{emptyMessage}</p>
      </div>
    );
  }

  return (
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
  );
}
