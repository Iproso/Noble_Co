import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Inquiry Inbox', titleAr: 'صندوق الاستفسارات', descEn: 'Centralized inquiry management inbox.', descAr: 'صندوق مركزي لإدارة الاستفسارات.' },
  { icon: '◇', titleEn: 'Assignment Management', titleAr: 'إدارة التعيينات', descEn: 'Assign inquiries to team members.', descAr: 'تعيين الاستفسارات لأعضاء الفريق.' },
  { icon: '◆', titleEn: 'Response Templates', titleAr: 'قوالب الردود', descEn: 'Predefined response templates and drafts.', descAr: 'قوالب ردود ومسودات محددة مسبقاً.' },
  { icon: '○', titleEn: 'Escalation Workflow', titleAr: 'سير عمل التصعيد', descEn: 'Automated escalation and priority routing.', descAr: 'تصعيد آلي وتوجيه حسب الأولوية.' },
  { icon: '□', titleEn: 'Inquiry History', titleAr: 'سجل الاستفسارات', descEn: 'Complete inquiry interaction history.', descAr: 'سجل كامل لتفاعلات الاستفسارات.' },
  { icon: '△', titleEn: 'Analytics & Reporting', titleAr: 'التحليلات والتقارير', descEn: 'Performance metrics and reporting dashboards.', descAr: 'مقاييس الأداء ولوحات التقارير.' },
];

export default async function InquiriesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'الاستفسارات' : 'Inquiries'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة جميع استفسارات العملاء والردود عليها.' : 'Manage and respond to all client inquiries.'}</p>
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
