import { PublicShell } from '@/components/layouts/PublicShell';
import { PageHero } from '@/components/features/global/PageHero';
import { CTAButton } from '@/components/ui';
import { mockDocuments } from '@/lib/mock/member-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=85';

const passportSections = [
  { icon: '◈', titleEn: 'Provenance Chain', titleAr: 'سلسلة المصدر', descEn: 'Complete ownership history with verified transfers, auction records, and private sale documentation.', descAr: 'تاريخ الملكية الكامل مع التحويلات الموثقة وسجلات المزادات ووثائق البيع الخاص.' },
  { icon: '◇', titleEn: 'Condition Reports', titleAr: 'تقارير الحالة', descEn: 'Professional condition assessments with high-resolution imagery, noting any restorations or wear.', descAr: 'تقييمات الحالة المهنية مع صور عالية الدقة، مع ملاحظة أي ترميمات أو تآكل.' },
  { icon: '◆', titleEn: 'Expert Analysis', titleAr: 'التحليل الخبير', descEn: 'Authentication opinions, material analysis, and specialist commentary from leading authorities.', descAr: 'آراء التوثيق وتحليل المواد وتعليقات المتخصصين من سلطات رائدة.' },
  { icon: '○', titleEn: 'Legal Review', titleAr: 'المراجعة القانونية', descEn: 'Export/import compliance, cultural heritage status, and any encumbrances or legal considerations.', descAr: 'الامتثال للتصدير/الاستيراد وحالة التراث الثقافي وأي أعباء أو اعتبارات قانونية.' },
  { icon: '□', titleEn: 'Market Context', titleAr: 'السياق السوقي', descEn: 'Comparative market analysis, auction history, and valuation trends for similar collector assets.', descAr: 'تحليل السوق المقارن وتاريخ المزادات واتجاهات التقييم للأصول المماثلة.' },
];

const samplePassports = mockDocuments.filter((d) => d.type === 'passport' || d.type === 'provenance').slice(0, 3);

type Props = { params: Promise<{ locale: string }> };

export default async function HeritagePassportPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <PageHero
        locale={locale}
        title={isRtl ? 'جواز التراث' : 'Heritage Passport'}
        subtitle={isRtl
          ? 'ملف رقمي شامل يوثق رحلة القطعة — من المنشأ إلى الملكية الحالية.'
          : 'A comprehensive digital dossier documenting the object\'s journey — from origin to current ownership.'}
        imageUrl={HERO_IMAGE}
        imageAlt={isRtl ? 'وثائق التراث' : 'Heritage documentation'}
      >
        <CTAButton locale={locale} href={`/${locale}/explore`} variant="primary">
          {isRtl ? 'تصفح القطع' : 'Browse Objects'}
        </CTAButton>
      </PageHero>

      <section className="container-noble py-16 md:py-20">
        <h2 className="heading-2 rose-gold-text mb-3">{isRtl ? 'ما هو جواز التراث؟' : 'What is a Heritage Passport?'}</h2>
        <p className="body-large text-text-secondary max-w-3xl leading-relaxed mb-10">
          {isRtl
            ? 'جواز التراث هو سجل رقمي شامل ومعتمد يجمع سلسلة المصدر وتقارير الحالة والتحليل الخبير والمراجعة القانونية والسياق السوقي — كل ذلك في وثيقة واحدة قابلة للمشاركة. كل جواز موقّع رقمياً ومرتبط بمعرف فريد للقطعة على منصة نوبل كوليكتورز.'
            : 'A Heritage Passport is a comprehensive, verified digital record combining provenance chain, condition reports, expert analysis, legal review, and market context — all in a single, shareable document. Each passport is digitally signed and linked to the object\'s unique identifier on the Noble Collectors platform.'}
        </p>

        <h3 className="heading-3 text-deep-ink mb-6">{isRtl ? 'مكونات الجواز' : 'Passport Components'}</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {passportSections.map((s) => (
            <div key={s.titleEn} className="bg-bg-card rounded-xl border border-border-light p-6 card-metallic shimmer-hover hover:border-antique-gold/30 transition-all duration-300">
              <span className="text-xl text-antique-gold block mb-3">{s.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-2">{isRtl ? s.titleAr : s.titleEn}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? s.descAr : s.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {samplePassports.length > 0 && (
        <section className="bg-bg-secondary border-y border-border-light">
          <div className="container-noble py-16 md:py-20">
            <h2 className="heading-2 rose-gold-text mb-3">{isRtl ? 'جوازات سفر نموذجية' : 'Sample Passports'}</h2>
            <p className="body-large text-text-secondary max-w-2xl mb-10">
              {isRtl ? 'أمثلة من جوازات التراث المتاحة في منصتنا.' : 'Examples of Heritage Passports available on our platform.'}
            </p>
            <div className="space-y-4">
              {samplePassports.map((doc) => (
                <div key={doc.id} className="bg-bg-card rounded-xl border border-border-light p-5 card-metallic hover:border-antique-gold/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[0.6rem] text-text-muted uppercase tracking-wider">
                        {isRtl ? (doc.type === 'passport' ? 'جواز تراث' : 'مصدر') : doc.type === 'passport' ? 'Heritage Passport' : 'Provenance'}
                      </span>
                      <h3 className="text-sm font-semibold text-deep-ink mt-1">{isRtl ? doc.titleAr : doc.titleEn}</h3>
                      <p className="text-xs text-text-secondary mt-0.5">{doc.date}</p>
                    </div>
                    <span className="text-[0.55rem] px-2 py-0.5 rounded-full bg-antique-gold/10 text-antique-gold uppercase tracking-wider shrink-0">
                      {isRtl ? 'متاح' : 'Available'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-noble py-16 md:py-20 text-center">
        <h2 className="heading-2 rose-gold-text mb-3">{isRtl ? 'طلب جواز تراث' : 'Request a Heritage Passport'}</h2>
        <p className="body-large text-text-secondary max-w-xl mx-auto mb-8">
          {isRtl
            ? 'كل قطعة في منصتنا مؤهلة للحصول على جواز تراث. تواصل مع فريقنا لبدء العملية.'
            : 'Every object on our platform is eligible for a Heritage Passport. Contact our team to initiate the process.'}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <CTAButton locale={locale} href={`/${locale}/explore`} variant="primary">
            {isRtl ? 'تصفح القطع' : 'Browse Objects'}
          </CTAButton>
          <CTAButton locale={locale} href={`/${locale}/concierge`} variant="outline">
            {isRtl ? 'تواصل مع الكونسيرج' : 'Contact Concierge'}
          </CTAButton>
        </div>
      </section>
    </PublicShell>
  );
}
