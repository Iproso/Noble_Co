import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Term Management', titleAr: 'إدارة المصطلحات', descEn: 'Add, edit, and organize glossary terms with definitions and examples.', descAr: 'إضافة وتحرير وتنظيم مصطلحات المسرد مع التعريفات والأمثلة.' },
  { icon: '◇', titleEn: 'Category Organization', titleAr: 'تنظيم الفئات', descEn: 'Group terms into categories and subcategories for easy browsing.', descAr: 'تجميع المصطلحات في فئات وفئات فرعية للتصفح السهل.' },
  { icon: '◆', titleEn: 'Cross-References', titleAr: 'المراجع المتقاطعة', descEn: 'Link related terms with bidirectional cross-reference mappings.', descAr: 'ربط المصطلحات ذات الصلة بخرائط مراجع متقاطعة ثنائية الاتجاه.' },
  { icon: '○', titleEn: 'Multi-language Support', titleAr: 'دعم متعدد اللغات', descEn: 'Manage translations and localized content for all supported languages.', descAr: 'إدارة الترجمات والمحتوى المترجم لجميع اللغات المدعومة.' },
  { icon: '□', titleEn: 'Import / Export', titleAr: 'استيراد / تصدير', descEn: 'Bulk import terms via CSV/JSON and export glossary for external use.', descAr: 'استيراد المصطلحات بالجملة عبر CSV/JSON وتصدير المسرد للاستخدام الخارجي.' },
  { icon: '△', titleEn: 'Usage Analytics', titleAr: 'تحليلات الاستخدام', descEn: 'Track which terms are viewed most and identify gaps in coverage.', descAr: 'تتبع المصطلحات الأكثر مشاهدة وتحديد الفجوات في التغطية.' },
];

export default async function CmsGlossaryPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'مسرد CMS' : 'CMS Glossary'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'إدارة مصطلحات المسرد والتعريفات عبر اللغات.' : 'Manage glossary terms and definitions across languages.'}
        </p>
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
