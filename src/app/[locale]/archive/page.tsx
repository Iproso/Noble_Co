import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { mockArchiveRecords } from '@/lib/mock/library-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'archive' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function ArchivePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'archive' });
  const isRtl = locale === 'ar';

  const categories = [...new Set(mockArchiveRecords.map((r) => r.category))];

  return (
    <PublicShell locale={locale}>
      <div className="container-noble py-12">
        <div className="max-w-4xl">
          <h1 className="heading-1 rose-gold-text mb-4">{t('title')}</h1>
          <p className="body-large text-text-secondary mb-8">{t('subtitle')}</p>

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <span key={cat} className="text-[0.6rem] px-2.5 py-1 rounded-full bg-soft-parchment text-text-muted uppercase">
                  {cat}
                </span>
              ))}
            </div>
          )}

          {mockArchiveRecords.length > 0 ? (
            <div className="space-y-4">
              {mockArchiveRecords.map((record) => {
                const title = isRtl ? record.titleAr : record.titleEn;
                const summary = isRtl ? record.summaryAr : record.summaryEn;
                return (
                  <Link
                    key={record.id}
                    href={`/${locale}/archive/${record.slug}`}
                    className="block bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full bg-soft-parchment text-text-muted uppercase">
                          {record.category}
                        </span>
                        <h3 className="text-sm font-semibold text-deep-ink mt-2">{title}</h3>
                        <p className="text-xs text-text-secondary mt-1 line-clamp-2">{summary}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[0.6rem] text-text-muted">{record.period}</span>
                        <br />
                        <span className="text-[0.6rem] text-text-muted">{record.publishedAt}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-text-secondary text-center py-12">{t('noRecords')}</p>
          )}
        </div>
      </div>
    </PublicShell>
  );
}
