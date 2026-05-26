import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Page Editor', titleAr: 'محرر الصفحات', descEn: 'Rich text editor with blocks, media embeds, and custom layout options.', descAr: 'محرر نصوص غني بالكتل وتضمين الوسائط وخيارات التخطيط المخصص.' },
  { icon: '◇', titleEn: 'Template Library', titleAr: 'مكتبة القوالب', descEn: 'Pre-built page templates for quick content creation and consistent layout.', descAr: 'قوالب صفحات جاهزة لإنشاء المحتوى السريع وتخطيط متسق.' },
  { icon: '◆', titleEn: 'Version History', titleAr: 'سجل الإصدارات', descEn: 'Track changes, compare revisions, and restore previous page versions.', descAr: 'تتبع التغييرات ومقارنة المراجعات واستعادة إصدارات الصفحات السابقة.' },
  { icon: '○', titleEn: 'SEO Management', titleAr: 'إدارة تحسين محركات البحث', descEn: 'Meta tags, Open Graph, structured data, and sitemap generation.', descAr: 'العلامات الوصفية و Open Graph والبيانات المنظمة وإنشاء خريطة الموقع.' },
  { icon: '□', titleEn: 'Publishing Workflow', titleAr: 'سير عمل النشر', descEn: 'Multi-stage review and approval workflow before content goes live.', descAr: 'سير عمل مراجعة وموافقة متعدد المراحل قبل نشر المحتوى.' },
  { icon: '△', titleEn: 'Scheduled Publishing', titleAr: 'النشر المجدول', descEn: 'Schedule pages to publish or unpublish at specific dates and times.', descAr: 'جدولة الصفحات للنشر أو إلغاء النشر في تواريخ وأوقات محددة.' },
];

export default async function CmsPagesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'صفحات CMS' : 'CMS Pages'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'إنشاء وإدارة صفحات المحتوى الثابتة في الموقع.' : 'Create and manage static content pages on the site.'}
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
