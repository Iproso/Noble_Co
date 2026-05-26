import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  {
    icon: '◈',
    titleEn: 'System Overview',
    titleAr: 'نظرة عامة على النظام',
    descEn: 'Key metrics and performance indicators across the entire platform.',
    descAr: 'المقاييس الرئيسية ومؤشرات الأداء عبر المنصة بأكملها.',
  },
  {
    icon: '◇',
    titleEn: 'Pending Reviews',
    titleAr: 'المراجعات المعلقة',
    descEn: 'Items awaiting moderation, verification, or approval.',
    descAr: 'العناصر التي تنتظر المراجعة أو التحقق أو الموافقة.',
  },
  {
    icon: '◆',
    titleEn: 'Recent Activity',
    titleAr: 'النشاط الأخير',
    descEn: 'Latest actions, updates, and changes made across the system.',
    descAr: 'أحدث الإجراءات والتحديثات والتغييرات التي تم إجراؤها عبر النظام.',
  },
  {
    icon: '○',
    titleEn: 'Quick Actions',
    titleAr: 'إجراءات سريعة',
    descEn: 'Common administrative tasks for rapid access and execution.',
    descAr: 'المهام الإدارية الشائعة للوصول السريع والتنفيذ.',
  },
  {
    icon: '□',
    titleEn: 'System Health',
    titleAr: 'صحة النظام',
    descEn: 'Status of services, APIs, storage, and background jobs.',
    descAr: 'حالة الخدمات وواجهات البرمجة والتخزين والمهام الخلفية.',
  },
  {
    icon: '△',
    titleEn: 'Notifications',
    titleAr: 'الإشعارات',
    descEn: 'Alerts and messages requiring administrative attention.',
    descAr: 'التنبيهات والرسائل التي تتطلب انتباهاً إدارياً.',
  },
];

export default async function AdminDashboardPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'لوحة التحكم' : 'Dashboard'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl
            ? 'نظرة عامة على النظام وإدارة المنصة.'
            : 'System overview and platform management.'}
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
