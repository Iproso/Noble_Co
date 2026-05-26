import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'settings' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function SettingsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'settings' });
  const isRtl = locale === 'ar';

  return (
    <MemberShell locale={locale} title={t('title')}>
      <p className="text-sm text-text-secondary mb-8">{t('subtitle')}</p>

      <div className="max-w-2xl space-y-8">
        <section className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
          <h2 className="heading-4 text-deep-ink">{t('profile')}</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-text-muted block mb-1">{t('displayName')}</label>
              <div className="text-sm text-deep-ink bg-soft-parchment rounded-lg px-4 py-2.5">
                {isRtl ? 'جامع نوبل' : 'Noble Collector'}
              </div>
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1">{t('bio')}</label>
              <div className="text-sm text-deep-ink bg-soft-parchment rounded-lg px-4 py-2.5">
                {isRtl ? 'جامع شغوف بالساعات والمجوهرات الكلاسيكية.' : 'Passionate collector of classic watches and jewelry.'}
              </div>
            </div>
            <div>
              <label className="text-xs text-text-muted block mb-1">{t('locale')}</label>
              <div className="text-sm text-deep-ink bg-soft-parchment rounded-lg px-4 py-2.5">
                {isRtl ? 'العربية' : 'English'}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
          <h2 className="heading-4 text-deep-ink">{t('notifications')}</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">{t('emailNotifications')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-evidence-strong/10 text-evidence-strong">
                {isRtl ? 'مفعل' : 'Enabled'}
              </span>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">{t('pushNotifications')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-evidence-moderate/10 text-evidence-moderate">
                {isRtl ? 'مفعل' : 'Enabled'}
              </span>
            </label>
          </div>
        </section>

        <section className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
          <h2 className="heading-4 text-deep-ink">{t('privacy')}</h2>
          <div className="space-y-3">
            <a
              href={`/${locale}/legal-trust/privacy`}
              className="block text-sm text-antique-gold hover:text-muted-brass transition-colors"
            >
              {isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'} →
            </a>
            <a
              href={`/${locale}/legal-trust/data-deletion`}
              className="block text-sm text-antique-gold hover:text-muted-brass transition-colors"
            >
              {isRtl ? 'حذف البيانات' : 'Data Deletion'} →
            </a>
          </div>
          <div className="pt-4 border-t border-border-light">
            <p className="text-xs text-risk-internal mb-2">{t('deleteWarning')}</p>
            <a
              href={`/${locale}/legal-trust/data-deletion`}
              className="inline-block text-xs px-3 py-1.5 rounded-lg border border-risk-internal text-risk-internal hover:bg-risk-internal/5 transition-colors"
            >
              {t('deleteAccount')}
            </a>
          </div>
        </section>
      </div>
    </MemberShell>
  );
}
