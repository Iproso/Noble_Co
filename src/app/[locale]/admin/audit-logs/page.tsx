import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Activity Timeline', titleAr: 'الجدول الزمني للنشاط', descEn: 'Chronological view of all system activities and events.', descAr: 'عرض زمني لجميع أنشطة النظام والأحداث.' },
  { icon: '◇', titleEn: 'User Action Log', titleAr: 'سجل إجراءات المستخدم', descEn: 'Detailed records of user actions across the platform.', descAr: 'سجلات مفصلة لإجراءات المستخدمين عبر المنصة.' },
  { icon: '◆', titleEn: 'Filter & Search', titleAr: 'التصفية والبحث', descEn: 'Advanced filtering by date range, user, action type, and resource.', descAr: 'تصفية متقدمة حسب النطاق الزمني والمستخدم ونوع الإجراء والمورد.' },
  { icon: '○', titleEn: 'Export Reports', titleAr: 'تصدير التقارير', descEn: 'Export audit logs as CSV, PDF, or JSON for external analysis.', descAr: 'تصدير سجلات التدقيق كـ CSV أو PDF أو JSON للتحليل الخارجي.' },
  { icon: '□', titleEn: 'Retention Policy', titleAr: 'سياسة الاحتفاظ', descEn: 'Configure log retention periods and automated archiving rules.', descAr: 'تكوين فترات الاحتفاظ بالسجلات وقواعد الأرشفة التلقائية.' },
  { icon: '△', titleEn: 'Anomaly Detection', titleAr: 'كشف الحالات الشاذة', descEn: 'Automated detection of unusual access patterns and suspicious activity.', descAr: 'كشف تلقائي لأنماط الوصول غير العادية والنشاط المشبوه.' },
];

export default async function AuditLogsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'سجلات التدقيق' : 'Audit Logs'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'مراقبة وتتبع جميع الأنشطة والتغييرات في النظام.' : 'Monitor and track all system activities and changes.'}
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
