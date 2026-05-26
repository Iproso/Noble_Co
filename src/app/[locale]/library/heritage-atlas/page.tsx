import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockHeritageAtlas } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1586725939645-6d7f5e50f8b9?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  return { title: `Noble Collectors — ${t('heritageAtlas')}`, description: t('heritageAtlasDesc') };
}

export default async function HeritageAtlasPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('heritageAtlas')}
        subtitle={t('heritageAtlasDesc')}
        imageUrl={HERO_IMAGE}
        imageAlt="Historical archive collection"
      />
      <section className="container-noble py-12">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockHeritageAtlas.map((entry) => {
            const title = isRtl ? entry.titleAr : entry.titleEn;
            const region = isRtl ? entry.regionAr : entry.regionEn;
            const summary = isRtl ? entry.summaryAr : entry.summaryEn;
            return (
              <Link key={entry.id} href={`/${locale}/library/heritage-atlas/${entry.slug}`} className="group bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
                <span className="text-xs text-text-muted uppercase tracking-wider">{region} · {entry.period}</span>
                <h3 className="text-sm font-semibold text-deep-ink mt-1 group-hover:text-antique-gold transition-colors">{title}</h3>
                <p className="text-xs text-text-secondary mt-2 line-clamp-2">{summary}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </PublicShell>
  );
}
