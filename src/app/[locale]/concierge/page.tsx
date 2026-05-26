import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { CTAButton } from '@/components/ui';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1600&q=85';

const services = [
  { icon: '◈', titleEn: 'Private Viewings', titleAr: 'معاينات خاصة', descEn: 'Arrange confidential viewings of exceptional objects before they reach the open market.', descAr: 'ترتيب معاينات سرية للقطع الاستثنائية قبل وصولها إلى السوق المفتوح.' },
  { icon: '◇', titleEn: 'Sourcing & Acquisition', titleAr: 'التوريد والاقتناء', descEn: 'Locate specific collector assets through our global network of estates, maisons, and private collections.', descAr: 'تحديد موقع القطع المطلوبة من خلال شبكتنا العالمية من العقارات والبيوت والمجموعات الخاصة.' },
  { icon: '◆', titleEn: 'Collection Management', titleAr: 'إدارة المجموعات', descEn: 'Comprehensive portfolio oversight including cataloguing, valuation, insurance, and storage logistics.', descAr: 'إشراف شامل على المحفظة يشمل الفهرسة والتقييم والتأمين ولوجستيات التخزين.' },
  { icon: '○', titleEn: 'Travel & Logistics', titleAr: 'السفر والخدمات اللوجستية', descEn: 'White-glove shipping, customs clearance, and travel arrangements for private sales and auctions.', descAr: 'شحن من الدرجة الأولى، تخليص جمركي، وترتيبات سفر للمبيعات الخاصة والمزادات.' },
  { icon: '□', titleEn: 'Due Diligence & Provenance', titleAr: 'العناية الواجبة والمصدر', descEn: 'Independent research, provenance verification, and legal review conducted by our specialist team.', descAr: 'بحث مستقل والتحقق من المصدر ومراجعة قانونية يجريها فريقنا المتخصص.' },
  { icon: '△', titleEn: 'Estate & Succession', titleAr: 'العقارات والخلافة', descEn: 'Discreet estate planning, valuation, and disposition services for multi-generational collections.', descAr: 'تخطيط عقاري سري وخدمات التقييم والتصرف في المجموعات متعددة الأجيال.' },
];

const steps = [
  { num: '01', titleEn: 'Submit Your Request', titleAr: 'تقديم طلبك', descEn: 'Describe your needs through our secure concierge portal or direct communication.', descAr: 'صف احتياجاتك من خلال بوابة الكونسيرج الآمنة أو التواصل المباشر.' },
  { num: '02', titleEn: 'Personal Consultation', titleAr: 'استشارة شخصية', descEn: 'A dedicated concierge reviews your requirements and proposes a tailored strategy.', descAr: 'يقوم الكونسيرج المخصص بمراجعة متطلباتك واقتراح استراتيجية مخصصة.' },
  { num: '03', titleEn: 'Execution & Follow-Through', titleAr: 'التنفيذ والمتابعة', descEn: 'Our team activates our network, coordinates logistics, and keeps you informed at every step.', descAr: 'يفعل فريقنا شبكتنا وينسق الخدمات اللوجستية ويبقيك على اطلاع في كل خطوة.' },
];

type Props = { params: Promise<{ locale: string }> };

export default async function ConciergePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={isRtl ? 'الكونسيرج' : 'Concierge'}
        subtitle={isRtl ? 'خدمات حصرية ومخصصة لهواة الجمع المميزين.' : 'Exclusive, tailored services for discerning collectors.'}
        imageUrl={HERO_IMAGE}
        imageAlt={isRtl ? 'خدمة الكونسيرج الفاخرة' : 'Luxury concierge service'}
      >
        <CTAButton locale={locale} href={`/${locale}/messages`} variant="primary">
          {isRtl ? 'تواصل مع الكونسيرج' : 'Contact Concierge'}
        </CTAButton>
      </PageHero>

      <section className="container-noble py-16 md:py-20">
        <h2 className="heading-2 rose-gold-text mb-3">{isRtl ? 'خدماتنا' : 'Our Services'}</h2>
        <p className="body-large text-text-secondary max-w-2xl mb-10">
          {isRtl ? 'مجموعة شاملة من الخدمات المصممة لدعم كل جانب من جوانب رحلة الجمع الخاصة بك.' : 'A comprehensive suite of services designed to support every aspect of your collecting journey.'}
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.titleEn} className="bg-bg-card rounded-xl border border-border-light p-6 card-metallic shimmer-hover hover:border-antique-gold/30 transition-all duration-300">
              <span className="text-xl text-antique-gold block mb-3">{s.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-2">{isRtl ? s.titleAr : s.titleEn}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? s.descAr : s.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border-light">
        <div className="container-noble py-16 md:py-20">
          <h2 className="heading-2 rose-gold-text mb-3">{isRtl ? 'كيف يعمل' : 'How It Works'}</h2>
          <p className="body-large text-text-secondary max-w-2xl mb-10">
            {isRtl ? 'عملية بسيطة وشفافة من البداية إلى التنفيذ.' : 'A straightforward, transparent process from request to delivery.'}
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="relative pl-8 sm:pl-0 sm:text-center">
                <span className="absolute sm:static left-0 top-0 text-3xl font-display text-antique-gold/30 leading-none">{s.num}</span>
                <h3 className="text-sm font-semibold text-deep-ink mt-1 mb-2">{isRtl ? s.titleAr : s.titleEn}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? s.descAr : s.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-noble py-16 md:py-20 text-center">
        <h2 className="heading-2 rose-gold-text mb-3">{isRtl ? 'ابدأ اليوم' : 'Get Started Today'}</h2>
        <p className="body-large text-text-secondary max-w-xl mx-auto mb-8">
          {isRtl ? 'تواصل مع فريق الكونسيرج لدينا لبدء محادثة خاصة حول احتياجاتك في الجمع.' : 'Reach out to our concierge team to begin a confidential conversation about your collecting needs.'}
        </p>
        <CTAButton locale={locale} href={`/${locale}/messages`} variant="primary">
          {isRtl ? 'تواصل مع الكونسيرج' : 'Contact Concierge'}
        </CTAButton>
      </section>
    </PublicShell>
  );
}
