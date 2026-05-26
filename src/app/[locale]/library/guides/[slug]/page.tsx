import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockCollectorGuides } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=85';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return mockCollectorGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const guide = mockCollectorGuides.find((g) => g.slug === slug);
  if (!guide) return { title: 'Not Found' };
  return { title: `Noble Collectors — ${locale === 'ar' ? guide.titleAr : guide.titleEn}` };
}

export default async function GuideDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  const guide = mockCollectorGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const title = isRtl ? guide.titleAr : guide.titleEn;
  const body = isRtl ? guide.bodyAr : guide.bodyEn;
  const summary = isRtl ? guide.summaryAr : guide.summaryEn;

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={title}
        subtitle={guide.category}
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
