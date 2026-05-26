import { PublicShell } from '@/components/layouts/PublicShell';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'public' });
  return { title: t('journalTitle'), description: t('journalDesc') };
}

export default async function JournalPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <PublicShell locale={locale}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="heading-1 rose-gold-text mb-4">{isRtl ? 'المجلة' : 'Journal'}</h1>
        <p className="text-text-secondary">{isRtl ? 'رؤى وقصص وذكاء سوقي من نوبل كوليكتورز.' : 'Insights, stories, and market intelligence from Noble Collectors.'}</p>
      </div>
    </PublicShell>
  );
}
