import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { ArtifactGrid } from '@/components/features/discovery';
import { mockCategories, getMockArtifactsByCategory } from '@/lib/mock/explore-data';

export const revalidate = 300;

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export function generateStaticParams() {
  return mockCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, category } = await params;
  const cat = mockCategories.find((c) => c.slug === category);
  const t = await getTranslations({ locale, namespace: 'explore' });
  const name = locale === 'ar' ? cat?.nameAr : cat?.nameEn;
  return {
    title: `Noble Collectors — ${name ?? t('title')}`,
    description: cat ? (locale === 'ar' ? cat.summaryAr : cat.summaryEn) : t('subtitle'),
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const cat = mockCategories.find((c) => c.slug === category);

  if (!cat) notFound();

  const t = await getTranslations({ locale, namespace: 'explore' });
  const artifacts = getMockArtifactsByCategory(category);
  const isRtl = locale === 'ar';
  const displayName = isRtl ? cat.nameAr : cat.nameEn;
  const displayDesc = isRtl ? cat.summaryAr : cat.summaryEn;

  return (
    <PublicShell locale={locale}>
      <section className="bg-soft-parchment border-b border-border-light brushed-metal">
        <div className="container-noble py-12">
          <h1 className="heading-1 rose-gold-text mb-3">{displayName}</h1>
          {displayDesc && (
            <p className="body-default text-text-secondary max-w-2xl">
              {displayDesc}
            </p>
          )}
          <p className="text-sm text-text-muted mt-3">
            {artifacts.length} {t('objectsCount')}
          </p>
        </div>
      </section>

      <section className="container-noble py-12">
        <ArtifactGrid
          locale={locale}
          artifacts={artifacts}
          emptyMessage={t('noResults')}
        />
      </section>
    </PublicShell>
  );
}
