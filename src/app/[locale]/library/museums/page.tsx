import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockMuseumProfiles } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1566127444979-b3d2b6542bb0?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  return { title: `Noble Collectors — ${t('museums')}`, description: t('museumsDesc') };
}

export default async function MuseumsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('museums')}
        subtitle={t('museumsDesc')}
        imageUrl={HERO_IMAGE}
        imageAlt="Museum gallery interior"
      />
      <section className="container-noble py-12">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockMuseumProfiles.map((museum) => {
            const name = isRtl ? museum.nameAr : museum.nameEn;
            const location = isRtl ? museum.locationAr : museum.locationEn;
            const description = isRtl ? museum.descriptionAr : museum.descriptionEn;
            return (
              <Link key={museum.id} href={`/${locale}/library/museums/${museum.slug}`} className="group bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
                <span className="text-xs text-text-muted uppercase tracking-wider">{location}</span>
                <h3 className="text-sm font-semibold text-deep-ink mt-1 group-hover:text-antique-gold transition-colors">{name}</h3>
                <p className="text-xs text-text-secondary mt-2 line-clamp-2">{description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </PublicShell>
  );
}
