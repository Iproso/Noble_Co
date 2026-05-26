import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  {
    icon: '◈',
    titleEn: 'Artifact Catalog',
    titleAr: 'كتالوج القطع الأثرية',
    descEn: 'Master directory of all registered artifacts and collections.',
    descAr: 'الدليل الرئيسي لجميع القطع الأثرية والمجموعات المسجلة.',
  },
  {
    icon: '◇',
    titleEn: 'Search & Filters',
    titleAr: 'البحث والتصفية',
    descEn: 'Advanced search across metadata, period, origin, and tags.',
    descAr: 'بحث متقدم عبر البيانات الوصفية والفترة والأصل والعلامات.',
  },
  {
    icon: '◆',
    titleEn: 'Batch Operations',
    titleAr: 'العمليات المجمعة',
    descEn: 'Perform bulk updates, exports, and status changes.',
    descAr: 'إجراء تحديثات جماعية وتصدير وتغييرات في الحالة.',
  },
  {
    icon: '○',
    titleEn: 'Provenance Records',
    titleAr: 'سجلات المالكية',
    descEn: 'Chain of ownership history and documentation for each piece.',
    descAr: 'سلسلة تاريخ الملكية والوثائق لكل قطعة.',
  },
  {
    icon: '□',
    titleEn: 'Valuation Tools',
    titleAr: 'أدوات التقييم',
    descEn: 'Appraisal data, market comparables, and value tracking.',
    descAr: 'بيانات التقييم والمقارنات السوقية وتتبع القيمة.',
  },
  {
    icon: '☆',
    titleEn: 'Export Controls',
    titleAr: 'ضوابط التصدير',
    descEn: 'Regulatory compliance tools for international movement.',
    descAr: 'أدوات الامتثال التنظيمي للحركة الدولية.',
  },
];

export default async function ArtifactsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'القطع الأثرية' : 'Artifacts'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl
            ? 'إدارة كتالوج القطع الأثرية وسجلاتها.'
            : 'Manage the artifact catalog and records.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">
                {isRtl ? m.titleAr : m.titleEn}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {isRtl ? m.descAr : m.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
