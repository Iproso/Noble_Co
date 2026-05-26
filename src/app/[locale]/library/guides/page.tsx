import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockCollectorGuides } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  return { title: `Noble Collectors — ${t('guides')}`, description: t('guidesDesc') };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('guides')}
        subtitle={t('guidesDesc')}
        imageUrl={HERO_IMAGE}
        imageAlt="Study desk with guide books"
      />
      <section className="container-noble py-12">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockCollectorGuides.map((guide) => {
            const title = isRtl ? guide.titleAr : guide.titleEn;
            const summary = isRtl ? guide.summaryAr : guide.summaryEn;
            return (
              <Link key={guide.id} href={`/${locale}/library/guides/${guide.slug}`} className="group bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
                <span className="text-xs text-text-muted uppercase tracking-wider">{guide.category}</span>
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
