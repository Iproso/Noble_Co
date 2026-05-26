import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { WatchlistItem } from '@/components/features/member';
import { mockWatchlistItems } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'watchlist' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function WatchlistPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'watchlist' });

  return (
    <MemberShell locale={locale} title={t('title')}>
      <p className="text-sm text-text-secondary mb-8">{t('subtitle')}</p>

      {mockWatchlistItems.length > 0 ? (
        <div className="space-y-3">
          {mockWatchlistItems.map((item) => (
            <WatchlistItem key={item.id} locale={locale} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-sm text-text-secondary mb-4">{t('noItems')}</p>
          <a
            href={`/${locale}/explore`}
            className="text-sm text-antique-gold hover:text-muted-brass transition-colors"
          >
            {t('browseLink')} →
          </a>
        </div>
      )}
    </MemberShell>
  );
}
