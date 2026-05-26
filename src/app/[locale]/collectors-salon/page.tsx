import React from 'react';
import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { CTAButton } from '@/components/ui';
import { SalonRoomCard } from '@/components/features/salon';
import { mockSalonRooms } from '@/lib/mock/member-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1569636510877-2bc0c0e54b0d?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function CollectorsSalonPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'salon' });
  const actionT = await getTranslations({ locale, namespace: 'actions' });
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('title')}
        subtitle={t('subtitle')}
        imageUrl={HERO_IMAGE}
        imageAlt="Private gallery interior"
      >
        <CTAButton locale={locale} href={`/${locale}/account/collectors-salon`} variant="primary">
          {isRtl ? 'صالوني' : 'My Salon'}
        </CTAButton>
        <CTAButton locale={locale} href={`/${locale}/membership`} variant="outline">
          {actionT('applyMembership')}
        </CTAButton>
      </PageHero>

      <section className="container-noble py-12">
        <h2 className="heading-2 text-deep-ink mb-8">{t('featuredRooms')}</h2>
        <div className="card-grid">
          {mockSalonRooms.reduce<React.ReactNode[]>((acc, room) => {
            if (!room.isPrivate) {
              acc.push(<SalonRoomCard key={room.id} locale={locale} room={room} />);
            }
            return acc;
          }, [])}
        </div>
      </section>
    </PublicShell>
  );
}
