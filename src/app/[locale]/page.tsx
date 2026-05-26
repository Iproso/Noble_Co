import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import { GlobeHero } from '@/components/features/global/GlobeHero';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  const footerT = await getTranslations({ locale, namespace: 'footer' });
  return {
    title: 'Noble Collectors',
    description: footerT('tagline'),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  const footerT = await getTranslations({ locale, namespace: 'footer' });
  const isRtl = locale === 'ar';

  const tagline = footerT('tagline');

  const sections = [
    { label: t('explore'), href: `/explore`, desc: isRtl ? 'اكتشف القطع الاستثنائية القابلة للجمع والمختارة بعين الخبير.' : 'Discover exceptional collector assets curated for the discerning eye.' },
    { label: t('auctions'), href: `/auctions`, desc: isRtl ? 'تصفح المزادات القادمة وسجل للحصول على وصول حصري.' : 'Browse upcoming auctions and register for exclusive access.' },
    { label: t('heritagePassport'), href: `/heritage-passport`, desc: isRtl ? 'ملف رقمي شامل يوثق رحلة كل قطعة فريدة.' : 'A comprehensive digital dossier documenting every unique object\'s journey.' },
    { label: t('nobleLibrary'), href: `/library`, desc: isRtl ? 'أطلس التراث وفهرس المتاحف وأدلة الجامعين.' : 'Heritage Atlas, Museum Index, and Collector Guides.' },
  ];

  const titleHtml = isRtl
    ? 'نوبل<span class="text-antique-gold">·</span>كوليكتورز'
    : 'Noble<span class="text-antique-gold">·</span>Collectors';

  return (
    <PublicShell locale={locale}>
      <GlobeHero
        title={titleHtml}
        tagline={tagline}
        exploreLabel={t('explore')}
        salonLabel={t('collectorsSalon')}
        exploreHref={`/${locale}/explore`}
        salonHref={`/${locale}/collectors-salon`}
      />

      <section className="container-noble py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((item) => (
            <a
              key={item.label}
              href={`/${locale}${item.href}`}
              className="block bg-bg-card rounded-xl p-6 border border-border-light hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover"
            >
              <h3 className="heading-4 text-deep-ink mb-2">{item.label}</h3>
              <p className="text-sm text-text-secondary">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
