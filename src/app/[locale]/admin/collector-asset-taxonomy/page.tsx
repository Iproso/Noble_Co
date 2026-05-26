import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Category Tree', titleAr: 'شجرة التصنيف', descEn: 'Hierarchical asset category management.', descAr: 'إدارة تصنيف الأصول الهرمي.' },
  { icon: '◇', titleEn: 'Attribute Definitions', titleAr: 'تعريفات الخصائص', descEn: 'Custom attribute and metadata definitions.', descAr: 'تعريفات مخصصة للخصائص والبيانات الوصفية.' },
  { icon: '◆', titleEn: 'Classification Rules', titleAr: 'قواعد التصنيف', descEn: 'Automated classification logic and rules.', descAr: 'منطق وقواعد التصنيف الآلي.' },
  { icon: '○', titleEn: 'Brand/Maison Registry', titleAr: 'سجل العلامات التجارية', descEn: 'Brand and maison registration and verification.', descAr: 'تسجيل العلامات التجارية والتحقق منها.' },
  { icon: '□', titleEn: 'Period & Era Mapping', titleAr: 'خريطة الفترات والعصور', descEn: 'Historical period and era classification.', descAr: 'تصنيف الفترات التاريخية والعصور.' },
  { icon: '△', titleEn: 'Material Taxonomy', titleAr: 'تصنيف المواد', descEn: 'Standardized material classification system.', descAr: 'نظام موحد لتصنيف المواد.' },
];

export default async function CollectorAssetTaxonomyPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'تصنيف الأصول' : 'Asset Taxonomy'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة تصنيف الأصول الخاص بجامعي التحف والمقتنيات.' : 'Manage collector asset classification and taxonomy.'}</p>
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
