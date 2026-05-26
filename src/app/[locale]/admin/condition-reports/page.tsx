import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Report Templates', titleAr: 'قوالب التقارير', descEn: 'Customizable condition report templates.', descAr: 'قوالب تقارير حالة قابلة للتخصيص.' },
  { icon: '◇', titleEn: 'Assessment Workflow', titleAr: 'سير عمل التقييم', descEn: 'Structured condition assessment process.', descAr: 'عملية تقييم حالة منظمة.' },
  { icon: '◆', titleEn: 'Photo Documentation', titleAr: 'التوثيق الفوتوغرافي', descEn: 'High-resolution image capture and annotation.', descAr: 'التقاط صور عالية الدقة مع التعليقات.' },
  { icon: '○', titleEn: 'Grading Scale', titleAr: 'مقياس التصنيف', descEn: 'Standardized condition grading system.', descAr: 'نظام تصنيف حالة موحد.' },
  { icon: '□', titleEn: 'Restoration Notes', titleAr: 'ملاحظات الترميم', descEn: 'Detailed restoration and conservation notes.', descAr: 'ملاحظات تفصيلية للترميم والصيانة.' },
  { icon: '△', titleEn: 'Expert Sign-off', titleAr: 'موافقة الخبير', descEn: 'Digital sign-off and approval workflow.', descAr: 'سير عمل الموافقة والتوقيع الرقمي.' },
];

export default async function ConditionReportsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'تقارير الحالة' : 'Condition Reports'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إنشاء وإدارة تقارير حالة القطع الأثرية والمقتنيات.' : 'Create and manage condition reports for artifacts and collectibles.'}</p>
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
