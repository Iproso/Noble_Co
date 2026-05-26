import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { CTAButton } from '@/components/ui';
import { DocumentCard } from '@/components/features/member';
import { mockDocuments } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'documents' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function DocumentsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'documents' });

  return (
    <MemberShell locale={locale} title={t('title')}>
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm text-text-secondary">{t('subtitle')}</p>
        <CTAButton locale={locale} variant="ghost">{t('requestDocument')}</CTAButton>
      </div>

      {mockDocuments.length > 0 ? (
        <div className="space-y-3">
          {mockDocuments.map((doc) => (
            <DocumentCard key={doc.id} locale={locale} document={doc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-sm text-text-secondary">{t('noDocuments')}</p>
        </div>
      )}
    </MemberShell>
  );
}
