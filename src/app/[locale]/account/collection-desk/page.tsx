import { getTranslations } from 'next-intl/server';
import { MemberShell } from '@/components/layouts/MemberShell';
import { ArtifactCard } from '@/components/ui';
import { CollectionStats } from '@/components/features/member';
import { mockMemberArtifacts, mockCollectionStats } from '@/lib/mock/member-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'collection' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function CollectionDeskPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'collection' });
  const isRtl = locale === 'ar';

  return (
    <MemberShell locale={locale} title={t('title')}>
      <p className="text-sm text-text-secondary mb-8">{t('subtitle')}</p>

      <div className="space-y-8">
        <section>
          <h2 className="heading-4 text-deep-ink mb-4">{t('stats')}</h2>
          <CollectionStats locale={locale} stats={mockCollectionStats} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-4 text-deep-ink">{t('totalObjects')}</h2>
            <a
              href={`/${locale}/explore`}
              className="text-sm text-antique-gold hover:text-muted-brass transition-colors"
            >
              {t('exploreLink')} →
            </a>
          </div>
          {mockMemberArtifacts.length > 0 ? (
            <div className="card-grid">
              {mockMemberArtifacts.map((artifact) => (
                <ArtifactCard
                  key={artifact.id}
                  locale={locale}
                  slug={artifact.slug}
                  title={artifact.titleEn}
                  titleAr={artifact.titleAr ?? undefined}
                  category={artifact.categoryNameEn ?? ''}
                  categoryAr={artifact.categoryNameAr ?? undefined}
                  yearPeriod={artifact.yearPeriod ?? undefined}
                  maison={artifact.maison ?? undefined}
                  evidenceLabel={artifact.evidenceLabel ?? undefined}
                  riskTier={artifact.riskTier}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-text-secondary text-center py-12">{t('noObjects')}</p>
          )}
        </section>
      </div>
    </MemberShell>
  );
}
