import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { mockGlossaryTerms } from '@/lib/mock/library-data';
import type { GlossaryTerm } from '@/lib/mock/library-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=85';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'glossary' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

function groupByLetter(terms: GlossaryTerm[]) {
  const groups: Record<string, GlossaryTerm[]> = {};
  for (const term of terms) {
    const letter = term.term[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(term);
  }
  return groups;
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'glossary' });
  const libT = await getTranslations({ locale, namespace: 'library' });
  const isRtl = locale === 'ar';

  const grouped = groupByLetter(mockGlossaryTerms);
  const letters = Object.keys(grouped).sort();

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={libT('glossary')}
        subtitle={t('subtitle')}
        imageUrl={HERO_IMAGE}
        imageAlt="Dictionary and glossary"
      />
      <section className="container-noble py-12">
        <div className="max-w-4xl">

          <div className="flex flex-wrap gap-2 mb-10">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center text-sm font-medium text-antique-gold hover:text-deep-ink hover:bg-soft-parchment rounded-lg transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            {letters.map((letter) => (
              <section key={letter} id={`letter-${letter}`}>
                <h2 className="heading-3 text-deep-ink mb-4 pb-2 border-b border-border-light">{letter}</h2>
                <div className="space-y-4">
                  {grouped[letter].map((term, i) => {
                    const termText = isRtl ? term.termAr : term.term;
                    const definitionText = isRtl ? term.definitionAr : term.definition;
                    return (
                      <div key={i} className="bg-bg-card rounded-xl border border-border-light p-4 card-metallic">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-sm font-semibold text-deep-ink">{termText}</h3>
                          {term.category && (
                            <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-soft-parchment text-text-muted uppercase shrink-0">
                              {term.category}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary mt-2 leading-relaxed">{definitionText}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
