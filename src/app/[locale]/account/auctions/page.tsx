import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { CTAButton } from '@/components/ui';
import { AuctionItem } from '@/components/features/member';
import { mockAuctionItems } from '@/lib/mock/member-data';

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

  const upcoming = mockAuctionItems.filter((a) => a.status === 'upcoming');
  const live = mockAuctionItems.filter((a) => a.status === 'live');
  const past = mockAuctionItems.filter((a) => a.status === 'passed');

  return (
    <MemberShell locale={locale} title={t('title')}>
      <p className="text-sm text-text-secondary mb-8">{t('subtitle')}</p>

      <div className="space-y-10">
        {live.length > 0 && (
          <section>
            <h2 className="heading-4 text-deep-ink mb-4">{t('live')}</h2>
            <div className="space-y-3">
              {live.map((item) => <AuctionItem key={item.id} locale={locale} item={item} />)}
            </div>
          </section>
        )}

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-4 text-deep-ink">{t('upcoming')}</h2>
            <CTAButton locale={locale} variant="ghost">{t('register')}</CTAButton>
          </div>
          {upcoming.length > 0 ? (
            <div className="space-y-3">
              {upcoming.map((item) => <AuctionItem key={item.id} locale={locale} item={item} />)}
            </div>
          ) : (
            <p className="text-sm text-text-secondary text-center py-12">{t('noAuctions')}</p>
          )}
        </section>

        {past.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="heading-4 text-deep-ink">{t('past')}</h2>
              <a href={`/${locale}/explore`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors">
                {t('browseCatalog')} →
              </a>
            </div>
            <div className="space-y-3">
              {past.map((item) => <AuctionItem key={item.id} locale={locale} item={item} />)}
            </div>
          </section>
        )}
      </div>
    </MemberShell>
  );
}
