import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { mockArchiveRecords } from '@/lib/mock/library-data';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return mockArchiveRecords.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const record = mockArchiveRecords.find((r) => r.slug === slug);
  if (!record) return { title: 'Not Found' };
  return { title: `Noble Collectors — ${locale === 'ar' ? record.titleAr : record.titleEn}` };
}

export default async function ArchiveDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'archive' });
  const isRtl = locale === 'ar';

  const record = mockArchiveRecords.find((r) => r.slug === slug);
  if (!record) notFound();

  const title = isRtl ? record.titleAr : record.titleEn;
  const body = isRtl ? record.bodyAr : record.bodyEn;
  const summary = isRtl ? record.summaryAr : record.summaryEn;

  return (
    <PublicShell locale={locale}>
      <article className="container-noble py-12 max-w-4xl">
        <Link href={`/${locale}/archive`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToArchive')}
        </Link>
        <div className="space-y-6">
          <header>
            <span className="text-xs text-text-muted uppercase tracking-wider">{record.category} · {record.period}</span>
            <h1 className="heading-1 text-deep-ink mt-2">{title}</h1>
            <p className="text-xs text-text-muted mt-2">{t('publishedAt')}: {record.publishedAt}</p>
          </header>
          <p className="body-large text-text-secondary leading-relaxed">{summary}</p>
          <div className="prose max-w-none text-text-secondary leading-relaxed whitespace-pre-line">
            {body}
          </div>
        </div>
      </article>
    </PublicShell>
  );
}
