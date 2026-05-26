import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Analytics Dashboard', titleAr: 'لوحة التحليلات', descEn: 'Key metrics, trends, and performance indicators at a glance.', descAr: 'المقاييس الرئيسية والاتجاهات ومؤشرات الأداء في لمحة.' },
  { icon: '◇', titleEn: 'Market Trends', titleAr: 'اتجاهات السوق', descEn: 'Market analysis, price trends, and category performance data.', descAr: 'تحليل السوق واتجاهات الأسعار وبيانات أداء الفئات.' },
  { icon: '◆', titleEn: 'User Insights', titleAr: 'رؤى المستخدمين', descEn: 'User segmentation, behaviour patterns, and lifetime value analysis.', descAr: 'تقسيم المستخدمين وأنماط السلوك وتحليل القيمة الدائمة.' },
  { icon: '○', titleEn: 'Acquisition Funnel', titleAr: 'مسار الاكتساب', descEn: 'Conversion funnel analysis from visitor to registered buyer.', descAr: 'تحليل مسار التحويل من الزائر إلى المشتري المسجل.' },
  { icon: '□', titleEn: 'Engagement Metrics', titleAr: 'مقاييس التفاعل', descEn: 'Session tracking, feature adoption, and retention rates.', descAr: 'تتبع الجلسات وتبني الميزات ومعدلات الاحتفاظ.' },
  { icon: '△', titleEn: 'Report Builder', titleAr: 'منشئ التقارير', descEn: 'Create custom reports with drag-and-drop metrics and filters.', descAr: 'إنشاء تقارير مخصصة باستخدام السحب والإفلات للمقاييس والمرشحات.' },
];

export default async function GrowthIntelligencePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'ذكاء النمو' : 'Growth Intelligence'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'تحليلات ورؤى النمو.' : 'Growth analytics and insights.'}</p>
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
