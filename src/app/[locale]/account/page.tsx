import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { CollectionStats } from '@/components/features/member';
import { mockCollectionStats, mockMessages } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'account' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function AccountDashboardPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'account' });
  const actionT = await getTranslations({ locale, namespace: 'actions' });
  const isRtl = locale === 'ar';

  const unreadMessages = mockMessages.filter((m) => m.unread);

  return (
    <MemberShell locale={locale} title={t('title')}>
      <p className="text-sm text-text-secondary mb-8">{t('subtitle')}</p>

      <div className="space-y-8">
        <section>
          <CollectionStats locale={locale} stats={mockCollectionStats} />
        </section>

        <section>
          <h2 className="heading-4 text-deep-ink mb-4">{t('quickActions')}</h2>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`/${locale}/account/collection-desk`}
              className="bg-bg-card rounded-xl border border-border-light p-4 text-sm text-deep-ink hover:border-antique-gold/30 transition-colors text-center card-metallic shimmer-hover"
            >
              {t('viewCollection')}
            </a>
            <a
              href={`/${locale}/account/messages`}
              className="bg-bg-card rounded-xl border border-border-light p-4 text-sm text-deep-ink hover:border-antique-gold/30 transition-colors text-center card-metallic shimmer-hover"
            >
              {t('newMessages')}
              {unreadMessages.length > 0 && (
                <span className="ml-1.5 text-xs text-antique-gold">({unreadMessages.length})</span>
              )}
            </a>
            <a
              href={`/${locale}/account/auctions`}
              className="bg-bg-card rounded-xl border border-border-light p-4 text-sm text-deep-ink hover:border-antique-gold/30 transition-colors text-center card-metallic shimmer-hover"
            >
              {t('upcomingAuctions')}
            </a>
            <a
              href={`/${locale}/account/settings`}
              className="bg-bg-card rounded-xl border border-border-light p-4 text-sm text-deep-ink hover:border-antique-gold/30 transition-colors text-center card-metallic shimmer-hover"
            >
              {t('manageSettings')}
            </a>
          </div>
        </section>

        {unreadMessages.length > 0 && (
          <section>
            <h2 className="heading-4 text-deep-ink mb-4">{t('latestActivity')}</h2>
            <div className="space-y-2">
              {unreadMessages.slice(0, 2).map((msg) => (
                <a
                  key={msg.id}
                  href={`/${locale}/account/messages`}
                  className="block bg-bg-card rounded-xl border border-antique-gold/20 p-4 hover:border-antique-gold/40 transition-colors card-metallic shimmer-hover"
                >
                  <p className="text-sm font-medium text-deep-ink">
                    {isRtl ? msg.subjectAr : msg.subjectEn}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    {isRtl ? msg.previewAr : msg.previewEn}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </MemberShell>
  );
}
