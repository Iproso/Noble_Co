import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Article Editor', titleAr: 'محرر المقالات', descEn: 'Write and format journal articles with rich media and layout blocks.', descAr: 'كتابة وتنسيق مقالات المجلة مع الوسائط الغنية وكتل التخطيط.' },
  { icon: '◇', titleEn: 'Editorial Calendar', titleAr: 'التقويم التحريري', descEn: 'Plan, schedule, and track article deadlines and publication dates.', descAr: 'تخطيط وجدولة وتتبع مواعيد المقالات وتواريخ النشر.' },
  { icon: '◆', titleEn: 'Author Management', titleAr: 'إدارة المؤلفين', descEn: 'Manage author profiles, bios, and article attribution.', descAr: 'إدارة ملفات المؤلفين والسير الذاتية ونسبة المقالات.' },
  { icon: '○', titleEn: 'Category Taxonomy', titleAr: 'تصنيف الفئات', descEn: 'Organize articles into categories, tags, and custom hierarchies.', descAr: 'تنظيم المقالات في فئات وعلامات وتسلسلات هرمية مخصصة.' },
  { icon: '□', titleEn: 'Review Workflow', titleAr: 'سير عمل المراجعة', descEn: 'Peer review and editorial approval process before publication.', descAr: 'عملية مراجعة الأقران والموافقة التحريرية قبل النشر.' },
  { icon: '△', titleEn: 'Publication Scheduling', titleAr: 'جدولة النشر', descEn: 'Set future publish dates and auto-archive for time-sensitive content.', descAr: 'تعيين تواريخ النشر المستقبلية والأرشفة التلقائية للمحتوى الحساس زمنياً.' },
];

export default async function CmsJournalPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'مقالات CMS' : 'CMS Journal'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'إدارة مقالات المجلة والتقويم التحريري.' : 'Manage journal articles and editorial calendar.'}
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
