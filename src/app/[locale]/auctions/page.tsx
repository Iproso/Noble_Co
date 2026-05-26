import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockPublicAuctions } from '@/lib/mock/auction-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'auctions' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function AuctionsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'auctions' });
  const isRtl = locale === 'ar';

  const statusLabels: Record<string, string> = {
    upcoming: t('upcoming'),
    live: t('live'),
    passed: t('past'),
  };

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('title')}
        subtitle={t('subtitle')}
        imageUrl={HERO_IMAGE}
        imageAlt={isRtl ? 'قاعة مزادات فاخرة' : 'Luxury auction house'}
      />

      <section className="container-noble py-12">
        {mockPublicAuctions.length > 0 ? (
          <div className="space-y-4">
            {mockPublicAuctions.map((auction) => {
              const title = isRtl ? auction.titleAr : auction.titleEn;
              const location = isRtl ? auction.locationAr : auction.locationEn;
              const description = isRtl ? auction.descriptionAr : auction.descriptionEn;
              return (
                <Link
                  key={auction.id}
                  href={`/${locale}/auctions/${auction.slug}`}
                  className="block bg-bg-card rounded-xl border border-border-light p-6 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block text-[0.6rem] px-2 py-0.5 rounded-full uppercase font-medium ${auction.status === 'live' ? 'badge-live' : auction.status === 'upcoming' ? 'badge-upcoming' : 'badge-passed'}`}>
                        {statusLabels[auction.status]}
                      </span>
                      <h3 className="text-sm font-semibold text-deep-ink mt-2">{title}</h3>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">{description}</p>
                    </div>
                    <div className="text-right shrink-0 space-y-1">
                      <p className="text-xs text-text-muted">{location}</p>
                      <p className="text-xs text-text-muted">{auction.date}</p>
                      <p className="text-xs text-text-muted">{auction.lotCount} {t('lotCount')}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-text-secondary text-center py-12">{t('noAuctions')}</p>
        )}
      </section>
    </PublicShell>
  );
}
