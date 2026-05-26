import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'introductions' });
  return { title: `Noble Collectors — ${t('title')}`, description: t('subtitle') };
}

export default async function IntroductionsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'introductions' });
  const isRtl = locale === 'ar';

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), icon: '01' },
    { title: t('step2Title'), desc: t('step2Desc'), icon: '02' },
    { title: t('step3Title'), desc: t('step3Desc'), icon: '03' },
  ];

  const benefits = [
    t('benefitAccess'),
    t('benefitNetwork'),
    t('benefitTrust'),
    t('benefitEvents'),
  ];

  return (
    <PublicShell locale={locale}>
      <section className="bg-soft-parchment border-b border-border-light brushed-metal">
        <div className="container-noble py-16">
          <h1 className="heading-1 rose-gold-text mb-4">{t('title')}</h1>
          <p className="body-large text-text-secondary max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="container-noble py-16">
        <h2 className="heading-2 text-deep-ink mb-10 text-center">{t('howItWorks')}</h2>
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.icon} className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-antique-gold text-warm-white flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-deep-ink mb-2">{step.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-card border-y border-border-light">
        <div className="container-noble py-16">
          <h2 className="heading-2 text-deep-ink mb-8 text-center">{t('benefitsTitle')}</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-bg-primary rounded-xl border border-border-light">
                <span className="text-antique-gold shrink-0 mt-0.5">✦</span>
                <span className="text-sm text-text-secondary">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-noble py-16 text-center">
        <p className="text-xs text-text-muted max-w-lg mx-auto mb-6">{t('privacy')}</p>
        <a
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-antique-gold text-warm-white rounded-lg text-sm font-medium hover:bg-muted-brass transition-colors"
        >
          {t('cta')}
        </a>
      </section>
    </PublicShell>
  );
}
