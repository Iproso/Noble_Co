import { CTAButton } from '@/components/ui';

interface ExploreHeroProps {
  locale: string;
  title: string;
  subtitle: string;
  submitLabel: string;
  salonLabel: string;
}

export function ExploreHero({ locale, title, subtitle, submitLabel, salonLabel }: ExploreHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-soft-parchment to-bg-primary py-20 brushed-metal">
      <div className="container-noble">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="heading-1 rose-gold-text">{title}</h1>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <CTAButton locale={locale} href={`/${locale}/sell`} variant="primary">
              {submitLabel}
            </CTAButton>
            <CTAButton locale={locale} href={`/${locale}/collectors-salon`} variant="outline">
              {salonLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
