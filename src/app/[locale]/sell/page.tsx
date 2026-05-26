import { PublicShell } from '@/components/layouts/PublicShell';
import { CTAButton } from '@/components/ui';

type Props = { params: Promise<{ locale: string }> };

export default async function SellPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <div className="container-noble py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="heading-1 rose-gold-text">
            {isRtl ? 'بيع أو تقديم قطعة' : 'Sell or Submit an Object'}
          </h1>
          <p className="body-large text-text-secondary max-w-xl mx-auto">
            {isRtl
              ? 'نحن نرحب بتقديم القطع الاستثنائية القابلة للجمع. ابدأ بإخبارنا عن القطعة التي تملكها.'
              : 'We welcome submissions of exceptional collector assets. Start by telling us about your object.'}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <CTAButton
              locale={locale}
              href={`/${locale}/submit-artifact`}
              variant="primary"
            >
              {isRtl ? 'تقديم قطعة' : 'Submit an Artifact'}
            </CTAButton>
            <CTAButton
              locale={locale}
              href={`/${locale}/estate-collections`}
              variant="outline"
            >
              {isRtl ? 'مجموعة عقارية' : 'Estate Collection'}
            </CTAButton>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              step: '01',
              title: isRtl ? 'أخبرنا عن القطعة' : 'Tell Us About the Object',
              desc: isRtl ? 'اختر الفئة وقدم التفاصيل والصور.' : 'Select a category and provide details and photos.',
            },
            {
              step: '02',
              title: isRtl ? 'المراجعة والتقييم' : 'Review & Evaluation',
              desc: isRtl ? 'يقوم فريق الخبراء لدينا بمراجعة تقديمك.' : 'Our expert team reviews your submission.',
            },
            {
              step: '03',
              title: isRtl ? 'مسار البيع' : 'Sale Path',
              desc: isRtl ? 'نتلقى توصية مخصصة لمسار البيع.' : 'Receive a personalized sale path recommendation.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center p-6">
              <span className="text-antique-gold text-3xl font-display">{item.step}</span>
              <h3 className="heading-4 text-deep-ink mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PublicShell>
  );
}
