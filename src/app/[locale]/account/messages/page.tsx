import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { MessageThread } from '@/components/features/member';
import { mockMessages } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'messages' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function MessagesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'messages' });

  return (
    <MemberShell locale={locale} title={t('title')}>
      <p className="text-sm text-text-secondary mb-8">{t('subtitle')}</p>

      {mockMessages.length > 0 ? (
        <div className="space-y-3">
          {mockMessages.map((msg) => (
            <MessageThread key={msg.id} locale={locale} message={msg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-sm text-text-secondary">{t('noMessages')}</p>
        </div>
      )}
    </MemberShell>
  );
}
