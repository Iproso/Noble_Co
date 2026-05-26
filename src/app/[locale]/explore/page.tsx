import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { ExploreHero, CategoryGrid, FeaturedArtifacts } from '@/components/features/discovery';
import { mockCategories, mockArtifactCards } from '@/lib/mock/explore-data';

export const revalidate = 300;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'explore' });
  return {
    title: `Noble Collectors — ${t('title')}`,
    description: t('subtitle'),
  };
}

export default async function ExplorePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'explore' });
  const actionT = await getTranslations({ locale, namespace: 'actions' });

  return (
    <PublicShell locale={locale}>
      <ExploreHero
        locale={locale}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        submitLabel={actionT('submitArtifact')}
        salonLabel={actionT('requestAccess')}
      />

      <CategoryGrid
        locale={locale}
        categories={mockCategories}
      />

      <FeaturedArtifacts
        locale={locale}
        title={t('featuredObjects')}
        artifacts={mockArtifactCards.slice(0, 6)}
        viewAllHref="/explore"
        viewAllLabel={t('viewAll')}
      />
    </PublicShell>
  );
}
