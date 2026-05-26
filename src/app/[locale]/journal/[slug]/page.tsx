import { PublicShell } from '@/components/layouts/PublicShell';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'public' });
  return { title: t('journalEntryTitle'), description: t('journalEntryDesc') };
}

export default async function JournalEntryPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <PublicShell locale={locale}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="heading-1 text-deep-ink mb-4">{isRtl ? 'مقال المجلة' : 'Journal Entry'}</h1>
        <p className="text-text-secondary">{isRtl ? 'اقرأ المقال كاملاً.' : 'Read the full journal article.'}</p>
      </div>
    </PublicShell>
  );
}
