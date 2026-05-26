import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockMuseumProfiles } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1566127444979-b3d2b6542bb0?w=1600&q=85';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return mockMuseumProfiles.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const museum = mockMuseumProfiles.find((m) => m.slug === slug);
  if (!museum) return { title: 'Not Found' };
  return { title: `Noble Collectors — ${locale === 'ar' ? museum.nameAr : museum.nameEn}` };
}

export default async function MuseumDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  const museum = mockMuseumProfiles.find((m) => m.slug === slug);
  if (!museum) notFound();

  const name = isRtl ? museum.nameAr : museum.nameEn;
  const location = isRtl ? museum.locationAr : museum.locationEn;
  const description = isRtl ? museum.descriptionAr : museum.descriptionEn;

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={name}
        subtitle={`${location} · ${museum.foundedYear}`}
        imageUrl={HERO_IMAGE}
        imageAlt={name}
      />
      <article className="container-noble py-12 max-w-4xl">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="space-y-6">
          <p className="text-sm text-text-muted">{isRtl ? `تأسس في ${museum.foundedYear}` : `Founded in ${museum.foundedYear}`}</p>
          <p className="body-large text-text-secondary leading-relaxed">{description}</p>
        </div>
      </article>
    </PublicShell>
  );
}
