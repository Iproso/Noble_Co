import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockHeritageAtlas } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1586725939645-6d7f5e50f8b9?w=1600&q=85';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return mockHeritageAtlas.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const entry = mockHeritageAtlas.find((e) => e.slug === slug);
  if (!entry) return { title: 'Not Found' };
  return { title: `Noble Collectors — ${locale === 'ar' ? entry.titleAr : entry.titleEn}` };
}

export default async function HeritageAtlasEntryPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  const entry = mockHeritageAtlas.find((e) => e.slug === slug);
  if (!entry) notFound();

  const title = isRtl ? entry.titleAr : entry.titleEn;
  const region = isRtl ? entry.regionAr : entry.regionEn;
  const body = isRtl ? entry.bodyAr : entry.bodyEn;
  const summary = isRtl ? entry.summaryAr : entry.summaryEn;

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={title}
        subtitle={`${region} · ${entry.period}`}
        imageUrl={HERO_IMAGE}
        imageAlt={title}
      />
      <article className="container-noble py-12 max-w-4xl">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="space-y-6">
          <p className="body-large text-text-secondary leading-relaxed">{summary}</p>
          <div className="prose max-w-none text-text-secondary leading-relaxed whitespace-pre-line">
            {body}
          </div>
        </div>
      </article>
    </PublicShell>
  );
}
