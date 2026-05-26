import { AdminShell } from '@/components/layouts/AdminShell';
import { AppStoreCompliancePanel } from '@/components/features/compliance/AppStoreCompliancePanel';

type Props = { params: Promise<{ locale: string }> };

const additionalModules = [
  { icon: '◈', titleEn: 'Push Notifications', titleAr: 'الإشعارات الفورية', descEn: 'Configure push notification campaigns and triggers.', descAr: 'تكوين حملات الإشعارات الفورية والمحفزات.' },
  { icon: '◇', titleEn: 'App Version Management', titleAr: 'إدارة إصدارات التطبيق', descEn: 'Manage app version releases and changelog.', descAr: 'إدارة إصدارات التطبيق وسجل التغييرات.' },
  { icon: '◆', titleEn: 'Crash & Error Reporting', titleAr: 'تقارير الأعطال والأخطاء', descEn: 'Monitor app stability and error rates.', descAr: 'مراقبة استقرار التطبيق ومعدلات الأخطاء.' },
  { icon: '○', titleEn: 'Performance Metrics', titleAr: 'مقاييس الأداء', descEn: 'App startup time, memory usage, response times.', descAr: 'وقت بدء التطبيق واستخدام الذاكرة وأوقات الاستجابة.' },
  { icon: '□', titleEn: 'Feature Flags', titleAr: 'أعلام الميزات', descEn: 'Remotely toggle features per app version.', descAr: 'تبديل الميزات عن بعد حسب إصدار التطبيق.' },
  { icon: '△', titleEn: 'Beta Distribution', titleAr: 'التوزيع التجريبي', descEn: 'Manage TestFlight and internal test flight groups.', descAr: 'إدارة TestFlight ومجموعات الاختبار الداخلي.' },
];

const existingSections = [
  { titleEn: 'Native Bridge Adapters', titleAr: 'محولات الجسر الأصلي', descEn: '18 adapters ready: auth, camera, payments, storage, haptics, etc.', descAr: '18 محولاً جاهزاً: المصادقة والكاميرا والمدفوعات والتخزين والاهتزاز وغيرها.' },
  { titleEn: 'Account Deletion Flow', titleAr: 'تدفق حذف الحساب', descEn: 'Deletion request page live at /legal-trust/data-deletion', descAr: 'صفحة طلب الحذف متاحة في /legal-trust/data-deletion' },
  { titleEn: 'PWA Support', titleAr: 'دعم PWA', descEn: 'Service worker, manifest, offline page, install prompt', descAr: 'عامل الخدمة والملف التعريفي وصفحة عدم الاتصال وطلب التثبيت' },
  { titleEn: 'Deep Links', titleAr: 'الروابط العميقة', descEn: 'Deep link adapter ready for auction reminders and registration', descAr: 'محول الروابط العميقة جاهز لتذكيرات المزادات والتسجيل' },
  { titleEn: 'App Store Compliance', titleAr: 'الامتثال لمتجر التطبيقات', descEn: '12-point compliance checklist below', descAr: 'قائمة امتثال من 12 نقطة أدناه' },
  { titleEn: 'Store Listing Assets', titleAr: 'أصول قائمة المتجر', descEn: 'Descriptions, screenshots, and metadata pending', descAr: 'الوصف ولقطات الشاشة والبيانات الوصفية معلقة' },
];

export default async function MobileReadinessPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'جاهزية الجوال' : 'Mobile Readiness'}>
      <div className="space-y-8">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'لوحة جاهزية متجر التطبيقات والجوال.' : 'Mobile and app store readiness dashboard.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalModules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">{isRtl ? m.titleAr : m.titleEn}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? m.descAr : m.descEn}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {existingSections.map((s) => (
            <div key={s.titleEn} className="bg-bg-card rounded-xl border border-border-light p-5 card-metallic">
              <h3 className="text-sm font-semibold text-deep-ink mb-1">
                {isRtl ? s.titleAr : s.titleEn}
              </h3>
              <p className="text-xs text-text-secondary">{isRtl ? s.descAr : s.descEn}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="heading-4 text-deep-ink mb-4">
            {isRtl ? 'قائمة الامتثال لمتجر التطبيقات' : 'App Store Compliance Checklist'}
          </h2>
          <AppStoreCompliancePanel locale={locale} />
        </div>
      </div>
    </AdminShell>
  );
}
