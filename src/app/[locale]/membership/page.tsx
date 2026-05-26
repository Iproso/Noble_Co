import { PublicShell } from '@/components/layouts/PublicShell';
import { MEMBERSHIP_TIERS } from '@/lib/types/membership';

type Props = { params: Promise<{ locale: string }> };

export default async function MembershipPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <section className="container-noble py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h1 className="heading-1 rose-gold-text">
            {isRtl ? 'العضوية' : 'Membership'}
          </h1>
          <p className="body-large text-text-secondary">
            {isRtl ? 'اختر برنامج العضوية الذي يناسب رحلة اقتنائك.' : 'Choose the membership tier that fits your collecting journey.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.value}
              className="bg-bg-card rounded-xl p-6 border border-border-light card-metallic shimmer-hover"
            >
              <h3 className="heading-4 text-deep-ink mb-2">
                {isRtl ? tier.labelAr : tier.labelEn}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {isRtl ? tier.descriptionAr : tier.descriptionEn}
              </p>
              <a
                href={`/${locale}/submit-artifact`}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-charcoal text-warm-white hover:bg-charcoal transition-colors"
              >
                {isRtl ? 'تقديم طلب' : 'Apply'}
              </a>
            </div>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
