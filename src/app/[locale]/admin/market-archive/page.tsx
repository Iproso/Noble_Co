import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Historical Sales', titleAr: 'المبيعات التاريخية', descEn: 'Comprehensive historical sales data archive.', descAr: 'أرشيف شامل لبيانات المبيعات التاريخية.' },
  { icon: '◇', titleEn: 'Price Database', titleAr: 'قاعدة بيانات الأسعار', descEn: 'Searchable price database across markets.', descAr: 'قاعدة بيانات أسعار قابلة للبحث عبر الأسواق.' },
  { icon: '◆', titleEn: 'Market Trends', titleAr: 'اتجاهات السوق', descEn: 'Market trend analysis and forecasting.', descAr: 'تحليل اتجاهات السوق والتنبؤات.' },
  { icon: '○', titleEn: 'Comparative Analysis', titleAr: 'تحليل مقارن', descEn: 'Side-by-side market comparison tools.', descAr: 'أدوات مقارنة الأسواق جنباً إلى جنب.' },
  { icon: '□', titleEn: 'Auction Results', titleAr: 'نتائج المزادات', descEn: 'Global auction result aggregation and search.', descAr: 'تجميع نتائج المزادات العالمية والبحث.' },
  { icon: '△', titleEn: 'Report Generation', titleAr: 'توليد التقارير', descEn: 'Custom market analysis report generation.', descAr: 'توليد تقارير تحليل السوق المخصصة.' },
];

export default async function MarketArchivePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'أرشيف السوق' : 'Market Archive'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'أرشيف شامل لبيانات السوق التاريخية وتحليلات الأسعار.' : 'Comprehensive market data archive and price analysis.'}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">{isRtl ? m.titleAr : m.titleEn}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? m.descAr : m.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
