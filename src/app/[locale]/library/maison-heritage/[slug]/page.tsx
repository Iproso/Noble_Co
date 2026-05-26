import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockMaisonHeritageProfiles } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1600&q=85';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return mockMaisonHeritageProfiles.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const maison = mockMaisonHeritageProfiles.find((m) => m.slug === slug);
  if (!maison) return { title: 'Not Found' };
  return { title: `Noble Collectors — ${locale === 'ar' ? maison.nameAr : maison.nameEn}` };
}

export default async function MaisonHeritageDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  const maison = mockMaisonHeritageProfiles.find((m) => m.slug === slug);
  if (!maison) notFound();

  const name = isRtl ? maison.nameAr : maison.nameEn;
  const specialty = isRtl ? maison.specialtyAr : maison.specialtyEn;
  const description = isRtl ? maison.descriptionAr : maison.descriptionEn;

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={name}
        subtitle={`${maison.originCountry} · ${maison.foundedYear}`}
        imageUrl={HERO_IMAGE}
        imageAlt={name}
      />
      <article className="container-noble py-12 max-w-4xl">
        <Link href={`/${locale}/library`} className="text-sm text-antique-gold hover:text-muted-brass transition-colors mb-6 inline-block">
          ← {t('backToLibrary')}
        </Link>
        <div className="space-y-6">
          <p className="text-sm text-antique-gold font-medium">{specialty}</p>
          <p className="body-large text-text-secondary leading-relaxed whitespace-pre-line">{description}</p>
        </div>
      </article>
    </PublicShell>
  );
}
