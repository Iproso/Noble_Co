import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { PublicFooter } from '@/components/layouts';
import { CTAButton, TrustLabel } from '@/components/ui';
import {
  CostClarityPanel,
  ViewingInspectionPanel,
} from '@/components/features/discovery';
import {
  EvidenceScorePanel,
  AcquisitionPathCard,
} from '@/components/trust';
import {
  getMockArtifactDetail,
  mockArtifactCards,
} from '@/lib/mock/explore-data';
import type { PublicCostClarityDTO, PublicViewingAvailabilityDTO } from '@/dto';

export const revalidate = 300;

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return mockArtifactCards.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const artifact = getMockArtifactDetail(slug);
  const t = await getTranslations({ locale, namespace: 'artifact' });
  const title = locale === 'ar' && artifact?.titleAr
    ? artifact.titleAr
    : artifact?.titleEn ?? 'Artifact';
  return {
    title: `Noble Collectors — ${title}`,
    description: artifact?.descriptionEn ?? t('detail'),
  };
}

function riskTierToCategoryRequirement(riskTier: number): 1 | 2 | 3 | 4 {
  if (riskTier >= 4) return 4;
  if (riskTier >= 3) return 3;
  if (riskTier >= 2) return 2;
  return 1;
}

export default async function ArtifactDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const artifact = getMockArtifactDetail(slug);

  if (!artifact) notFound();

  const t = await getTranslations({ locale, namespace: 'artifact' });
  const navT = await getTranslations({ locale, namespace: 'nav' });
  const isRtl = locale === 'ar';

  const displayTitle = isRtl && artifact.titleAr ? artifact.titleAr : artifact.titleEn;
  const displayCategory = isRtl && artifact.categoryNameAr ? artifact.categoryNameAr : artifact.categoryNameEn;
  const displayDescription = isRtl && artifact.descriptionAr ? artifact.descriptionAr : artifact.descriptionEn;

  const costClarity = artifact.costClarity as PublicCostClarityDTO | null;
  const viewingAvailability = artifact.viewingAvailability as PublicViewingAvailabilityDTO | null;

  return (
    <PublicShell locale={locale} showFooter={false}>
      <div className="container-noble py-4">
        <nav className="flex items-center gap-2 text-sm text-text-muted">
          <a href={`/${locale}/explore`} className="hover:text-deep-ink transition-colors">
            {navT('explore')}
          </a>
          <span>/</span>
          <span className="text-text-secondary truncate max-w-[200px]">
            {displayTitle}
          </span>
        </nav>
      </div>

      <section className="container-noble pb-8">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-wider text-text-muted">
            {displayCategory}
          </span>
          <h1 className="heading-1 text-deep-ink mt-2 mb-4">{displayTitle}</h1>
          <div className="flex flex-wrap items-center gap-3">
            {artifact.evidenceLabel && (
              <TrustLabel
                locale={locale}
                level={
                  artifact.evidenceLabel === 'Evidence Strong' ? 'strong'
                  : artifact.evidenceLabel === 'Evidence Moderate' ? 'moderate'
                  : 'limited'
                }
              />
            )}
            <span className="text-sm text-text-secondary">
              {[artifact.yearPeriod, artifact.maison].filter(Boolean).join(' · ')}
            </span>
          </div>
        </div>
      </section>

      <div className="container-noble pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <div className="aspect-[4/3] bg-soft-parchment rounded-xl border border-border-light flex items-center justify-center">
              <span className="text-6xl text-warm-gray">◈</span>
            </div>

            {displayDescription && (
              <section>
                <p className="body-default text-text-secondary leading-relaxed">
                  {displayDescription}
                </p>
              </section>
            )}

            <section className="space-y-4">
              <h2 className="heading-3 text-deep-ink">{t('overview')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {artifact.yearPeriod && (
                  <div className="bg-bg-card rounded-lg p-4 border border-border-light card-metallic">
                    <span className="text-xs text-text-muted block">{isRtl ? 'السنة' : 'Year'}</span>
                    <span className="text-sm text-deep-ink font-medium">{artifact.yearPeriod}</span>
                  </div>
                )}
                {artifact.maison && (
                  <div className="bg-bg-card rounded-lg p-4 border border-border-light card-metallic">
                    <span className="text-xs text-text-muted block">{isRtl ? 'الدار' : 'Maison'}</span>
                    <span className="text-sm text-deep-ink font-medium">{artifact.maison}</span>
                  </div>
                )}
                {artifact.maker && (
                  <div className="bg-bg-card rounded-lg p-4 border border-border-light card-metallic">
                    <span className="text-xs text-text-muted block">{isRtl ? 'الصانع' : 'Maker'}</span>
                    <span className="text-sm text-deep-ink font-medium">{artifact.maker}</span>
                  </div>
                )}
                <div className="bg-bg-card rounded-lg p-4 border border-border-light card-metallic">
                  <span className="text-xs text-text-muted block">{isRtl ? 'مستوى الثقة' : 'Confidence'}</span>
                  <span className="text-sm text-deep-ink font-medium">{artifact.confidenceLabel ?? '-'}</span>
                </div>
              </div>
            </section>

            {artifact.provenanceSummary && (
              <section className="space-y-3">
                <h2 className="heading-3 text-deep-ink">{t('provenance')}</h2>
                <p className="body-default text-text-secondary leading-relaxed">
                  {artifact.provenanceSummary}
                </p>
              </section>
            )}

            {artifact.conditionSummary && (
              <section className="space-y-3">
                <h2 className="heading-3 text-deep-ink">{t('condition')}</h2>
                <p className="body-default text-text-secondary leading-relaxed">
                  {artifact.conditionSummary}
                </p>
              </section>
            )}

            {artifact.passportAvailable && (
              <section className="bg-soft-parchment rounded-xl p-6 border border-border-light card-metallic">
                <h3 className="heading-4 text-deep-ink mb-2">{t('passportAvailable')}</h3>
                <p className="text-sm text-text-secondary mb-4">
                  {t('passportDescription')}
                </p>
                <CTAButton locale={locale} href={`/${locale}/heritage-passport`} variant="gold">
                  {t('requestPassport')}
                </CTAButton>
              </section>
            )}

            <EvidenceScorePanel
              locale={locale}
              input={{
                hasPhotos: true,
                photoCount: 12,
                hasDocuments: true,
                documentCount: 4,
                hasProvenance: true,
                provenanceDetail: 'detailed',
                hasConditionReport: true,
                hasCertificate: true,
                hasPassport: artifact.passportAvailable,
                categoryRequirementLevel: riskTierToCategoryRequirement(artifact.riskTier),
              }}
            />

            <AcquisitionPathCard
              locale={locale}
              evidenceScore={85}
              riskTier={artifact.riskTier}
              reviewState="specialist_approved"
              hasPassport={artifact.passportAvailable}
            />

            <section className="space-y-4">
              <h2 className="heading-3 text-deep-ink">{t('similarObjects')}</h2>
              <div className="card-grid">
                {mockArtifactCards
                  .filter((a) => a.slug !== slug && a.categoryId === artifact.categoryId)
                  .slice(0, 3)
                  .map((a) => (
                    <a
                      key={a.id}
                      href={`/${locale}/artifacts/${a.slug}`}
                      className="block bg-bg-card rounded-xl p-4 border border-border-light hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover"
                    >
                      <span className="text-xs text-text-muted uppercase tracking-wider">
                        {isRtl && a.categoryNameAr ? a.categoryNameAr : a.categoryNameEn}
                      </span>
                      <p className="text-sm font-medium text-deep-ink mt-1 line-clamp-2">
                        {isRtl && a.titleAr ? a.titleAr : a.titleEn}
                      </p>
                      <span className="text-xs text-text-secondary mt-1 block">
                        {[a.yearPeriod, a.maison].filter(Boolean).join(' · ')}
                      </span>
                    </a>
                  ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            {costClarity && (
              <CostClarityPanel locale={locale} costClarity={costClarity} />
            )}
            {viewingAvailability && (
              <ViewingInspectionPanel
                locale={locale}
                viewing={viewingAvailability}
                artifactSlug={slug}
              />
            )}
            <div className="sticky top-24 space-y-3">
              <CTAButton
                locale={locale}
                href={`/${locale}/account/watchlist`}
                variant="ghost"
                className="w-full justify-center"
              >
                {isRtl ? 'حفظ في قائمة المتابعة' : 'Save to Watchlist'}
              </CTAButton>
              <CTAButton
                locale={locale}
                href={`/${locale}/account/messages`}
                variant="outline"
                className="w-full justify-center"
              >
                {isRtl ? 'اسأل الكونسيرج' : 'Ask Concierge'}
              </CTAButton>
            </div>
          </aside>
        </div>
      </div>

      <PublicFooter locale={locale} />
    </PublicShell>
  );
}
