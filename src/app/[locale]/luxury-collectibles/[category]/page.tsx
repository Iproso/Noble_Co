import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { ArtifactGrid, LuxuryProfileCard } from '@/components/features/discovery';
import {
  getMockArtifactsByCategory,
  getMockWatchProfile,
  getMockJewelryProfile,
  getMockHandbagProfile,
  getMockDesignObjectProfile,
  mockLuxuryCategories,
} from '@/lib/mock/explore-data';
import type { PublicDesignObjectDTO } from '@/dto';

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export function generateStaticParams() {
  return mockLuxuryCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, category } = await params;
  const cat = mockLuxuryCategories.find((c) => c.slug === category);
  const t = await getTranslations({ locale, namespace: 'luxury' });
  const name = locale === 'ar' ? cat?.nameAr : cat?.nameEn;
  return {
    title: `Noble Collectors — ${name ?? t('hubTitle')}`,
    description: cat?.summaryEn ?? t('hubSubtitle'),
  };
}

const profileTypeMap: Record<string, 'watch' | 'jewelry' | 'handbag' | 'design-object' | 'cultural-heritage'> = {
  watches: 'watch',
  jewelry: 'jewelry',
  handbags: 'handbag',
  'design-objects': 'design-object',
  'cultural-heritage': 'cultural-heritage',
};

export default async function LuxuryCategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const cat = mockLuxuryCategories.find((c) => c.slug === category);

  if (!cat) notFound();

  const t = await getTranslations({ locale, namespace: 'luxury' });
  const isRtl = locale === 'ar';
  const displayName = isRtl ? cat.nameAr : cat.nameEn;
  const displaySummary = isRtl ? cat.summaryAr : cat.summaryEn;

  const artifacts = getMockArtifactsByCategory(category);

  const profileType = profileTypeMap[category];

  return (
    <PublicShell locale={locale}>
      <section className="bg-soft-parchment border-b border-border-light brushed-metal">
        <div className="container-noble py-12">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <a href={`/${locale}/luxury-collectibles`} className="hover:text-deep-ink transition-colors">
              {t('hubTitle')}
            </a>
            <span>/</span>
            <span className="text-text-secondary">{displayName}</span>
          </nav>

          <h1 className="heading-1 rose-gold-text mb-3">{displayName}</h1>
          {displaySummary && (
            <p className="body-default text-text-secondary max-w-2xl">
              {displaySummary}
            </p>
          )}
        </div>
      </section>

      <section className="container-noble py-12 space-y-8">
        {profileType && artifacts.length > 0 && (
          <LuxuryProfileCard
            locale={locale}
            type={profileType}
            profile={
              profileType === 'watch'
                ? getMockWatchProfile(artifacts[0].slug)
                : profileType === 'jewelry'
                ? getMockJewelryProfile(artifacts[0].slug)
                : profileType === 'handbag'
                ? getMockHandbagProfile(artifacts[0].slug)
                : getMockDesignObjectProfile(artifacts[0].slug) as PublicDesignObjectDTO
            }
          />
        )}

        <ArtifactGrid
          locale={locale}
          artifacts={artifacts}
          emptyMessage={isRtl ? 'لم يتم العثور على قطع في هذه الفئة بعد.' : 'No objects found in this category yet.'}
        />
      </section>
    </PublicShell>
  );
}
