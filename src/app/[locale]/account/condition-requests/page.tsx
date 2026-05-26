import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { CTAButton } from '@/components/ui';
import { ConditionRequest } from '@/components/features/member';
import { mockConditionRequests } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'conditionRequests' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function ConditionRequestsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'conditionRequests' });

  return (
    <MemberShell locale={locale} title={t('title')}>
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm text-text-secondary">{t('subtitle')}</p>
        <CTAButton locale={locale} variant="ghost">{t('newRequest')}</CTAButton>
      </div>

      {mockConditionRequests.length > 0 ? (
        <div className="space-y-3">
          {mockConditionRequests.map((req) => (
            <ConditionRequest key={req.id} locale={locale} request={req} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-sm text-text-secondary mb-4">{t('noRequests')}</p>
          <CTAButton locale={locale} variant="outline">{t('requestNew')}</CTAButton>
        </div>
      )}
    </MemberShell>
  );
}
