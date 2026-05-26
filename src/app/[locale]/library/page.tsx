import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockHeritageAtlas, mockMuseumProfiles, mockMaisonHeritageProfiles, mockCollectorGuides, mockArchiveRecords, mockGlossaryTerms } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function LibraryPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  const sections = [
    { slug: 'heritage-atlas', label: t('heritageAtlas'), desc: t('heritageAtlasDesc'), icon: '◈', count: mockHeritageAtlas.length },
    { slug: 'museums', label: t('museums'), desc: t('museumsDesc'), icon: '◇', count: mockMuseumProfiles.length },
    { slug: 'maison-heritage', label: t('maisonHeritage'), desc: t('maisonHeritageDesc'), icon: '◆', count: mockMaisonHeritageProfiles.length },
    { slug: 'guides', label: t('guides'), desc: t('guidesDesc'), icon: '○', count: mockCollectorGuides.length },
    { slug: 'glossary', label: t('glossary'), desc: t('glossaryDesc'), icon: '□', count: mockGlossaryTerms.length },
    { slug: 'archive', label: t('archive'), desc: t('archiveDesc'), icon: '△', count: mockArchiveRecords.length },
  ];

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={t('title')}
        subtitle={t('subtitle')}
        imageUrl={HERO_IMAGE}
        imageAlt="Grand library interior"
      />

      <section className="container-noble py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/${locale}/library/${s.slug === 'archive' ? '../archive' : s.slug}`}
              className="group bg-bg-card rounded-xl border border-border-light p-6 hover:border-antique-gold/30 transition-all duration-300 card-metallic shimmer-hover"
            >
              <div className="flex items-start gap-4">
                <span className="text-xl text-antique-gold mt-1 shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-deep-ink group-hover:text-antique-gold transition-colors">{s.label}</h3>
                  <p className="text-xs text-text-secondary mt-1">{s.desc}</p>
                  <span className="text-[0.6rem] text-text-muted mt-2 inline-block">{s.count} {isRtl ? 'مدخلاً' : 'entries'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
