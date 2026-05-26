import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { LuxuryHubGrid } from '@/components/features/discovery';
import { mockLuxuryCategories } from '@/lib/mock/explore-data';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'luxury' });
  return {
    title: `Noble Collectors — ${t('hubTitle')}`,
    description: t('hubSubtitle'),
  };
}

export default async function LuxuryCollectiblesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'luxury' });

  return (
    <PublicShell locale={locale}>
      <section className="bg-soft-parchment border-b border-border-light brushed-metal">
        <div className="container-noble py-16">
          <h1 className="heading-1 rose-gold-text mb-3">{t('hubTitle')}</h1>
          <p className="body-large text-text-secondary max-w-2xl">
            {t('hubSubtitle')}
          </p>
        </div>
      </section>

      <LuxuryHubGrid locale={locale} categories={mockLuxuryCategories} />
    </PublicShell>
  );
}
