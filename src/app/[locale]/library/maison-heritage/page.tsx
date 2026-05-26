import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockMaisonHeritageProfiles } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  return { title: `Noble Collectors — ${t('maisonHeritage')}`, description: t('maisonHeritageDesc') };
}

export default async function MaisonHeritagePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('maisonHeritage')}
        subtitle={t('maisonHeritageDesc')}
        imageUrl={HERO_IMAGE}
        imageAlt="Luxury craftsmanship atelier"
      />
      <section className="container-noble py-12">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="grid gap-4 sm:grid-cols-2">
          {mockMaisonHeritageProfiles.map((maison) => {
            const name = isRtl ? maison.nameAr : maison.nameEn;
            const specialty = isRtl ? maison.specialtyAr : maison.specialtyEn;
            const description = isRtl ? maison.descriptionAr : maison.descriptionEn;
            return (
              <Link key={maison.id} href={`/${locale}/library/maison-heritage/${maison.slug}`} className="group bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
                <span className="text-xs text-text-muted uppercase tracking-wider">{maison.originCountry} · {maison.foundedYear}</span>
                <h3 className="text-sm font-semibold text-deep-ink mt-1 group-hover:text-antique-gold transition-colors">{name}</h3>
                <p className="text-xs text-antique-gold mt-0.5">{specialty}</p>
                <p className="text-xs text-text-secondary mt-2 line-clamp-2">{description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </PublicShell>
  );
}
