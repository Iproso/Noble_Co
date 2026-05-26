import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'System Configuration', titleAr: 'تكوين النظام', descEn: 'Manage global system settings and application preferences.', descAr: 'إدارة إعدادات النظام العامة وتفضيلات التطبيق.' },
  { icon: '◇', titleEn: 'Role Management', titleAr: 'إدارة الأدوار', descEn: 'Define and assign user roles with granular permissions.', descAr: 'تحديد وتعيين أدوار المستخدمين مع صلاحيات دقيقة.' },
  { icon: '◆', titleEn: 'Permission Sets', titleAr: 'مجموعات الصلاحيات', descEn: 'Create and manage permission groups for access control.', descAr: 'إنشاء وإدارة مجموعات الصلاحيات للتحكم في الوصول.' },
  { icon: '○', titleEn: 'Audit Configuration', titleAr: 'تكوين التدقيق', descEn: 'Configure audit logging scope, retention, and alerting rules.', descAr: 'تكوين نطاق تسجيل التدقيق والاحتفاظ وقواعد التنبيه.' },
  { icon: '□', titleEn: 'Security Settings', titleAr: 'إعدادات الأمان', descEn: 'Password policies, MFA, session timeout, and IP whitelisting.', descAr: 'سياسات كلمة المرور والمصادقة متعددة العوامل ومهلة الجلسة وقائمة IP المسموح بها.' },
  { icon: '△', titleEn: 'Notification Preferences', titleAr: 'تفضيلات الإشعارات', descEn: 'Configure system-wide notification channels and templates.', descAr: 'تكوين قنوات الإشعارات على مستوى النظام والقوالب.' },
];

export default async function SettingsGovernancePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'الإعدادات والحوكمة' : 'Settings & Governance'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'إدارة إعدادات النظام وأدوار المستخدمين والصلاحيات.' : 'Manage system settings, user roles, and permissions.'}
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
