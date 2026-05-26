import { AdminShell } from '@/components/layouts/AdminShell';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Policy Versioning', titleAr: 'إصدارات السياسات', descEn: 'Version-controlled policy documents with draft and published states.', descAr: 'مستندات سياسات محكومة بالإصدارات مع حالات المسودة والمنشور.' },
  { icon: '◇', titleEn: 'Legal Review Workflow', titleAr: 'سير عمل المراجعة القانونية', descEn: 'Assign legal counsel for review before publication.', descAr: 'تعيين مستشار قانوني للمراجعة قبل النشر.' },
  { icon: '◆', titleEn: 'Consent Records', titleAr: 'سجلات الموافقة', descEn: 'User terms acceptance tracking per version.', descAr: 'تتبع قبول المستخدم للشروط لكل إصدار.' },
  { icon: '○', titleEn: 'Compliance Calendar', titleAr: 'تقويم الامتثال', descEn: 'Regulatory deadline tracking and renewal reminders.', descAr: 'تتبع المواعيد النهائية التنظيمية وتذكيرات التجديد.' },
  { icon: '□', titleEn: 'Policy Templates', titleAr: 'قوالب السياسات', descEn: 'Reusable templates for common policy types.', descAr: 'قوالب قابلة لإعادة الاستخدام لأنواع السياسات الشائعة.' },
  { icon: '△', titleEn: 'Audit History', titleAr: 'سجل التدقيق', descEn: 'Complete change history for all policy documents.', descAr: 'سجل تغييرات كامل لجميع مستندات السياسات.' },
];

export default async function LegalTrustAdminPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'مركز القانون والثقة' : 'Legal & Trust Center'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'لوحة إدارة السياسات القانونية وسجلات الموافقة.' : 'Legal policy management and consent records dashboard.'}
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

        <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
          <h2 className="text-base font-medium text-deep-ink mb-4">
            {isRtl ? 'صفحات السياسات' : 'Policy Pages'}
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            {isRtl
              ? 'إدارة صفحات السياسات القانونية وشروط الاستخدام. جميع الصفحات منظمة بالإصدارات وتتطلب مراجعة قانونية قبل النشر.'
              : 'Manage legal policy pages and terms of use. All pages are versioned and require legal review before publishing.'}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'auction-rules', 'buyer-terms', 'seller-terms', 'private-sale-terms',
              'payment-instructions', 'buyer-premium-fees', 'viewing-collection-policy',
              'shipping-custody-policy', 'refund-returns-policy', 'privacy-policy',
              'data-protection', 'cookie-policy', 'kyc-sanctions-explanation',
              'brand-affiliation-disclaimer', 'museum-affiliation-disclaimer',
              'mobile-app-privacy', 'account-data-deletion',
            ].map((slug) => (
              <div
                key={slug}
                className="flex items-center justify-between p-3 bg-soft-parchment rounded-lg"
              >
                <span className="text-sm text-text-secondary">{slug.replace(/-/g, ' ')}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-warm-gray/30 text-text-muted">
                  {isRtl ? 'مسودة' : 'Draft'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
          <h2 className="text-base font-medium text-deep-ink mb-4">
            {isRtl ? 'سجلات قبول الشروط' : 'Terms Acceptance Records'}
          </h2>
          <p className="text-sm text-text-muted">
            {isRtl
              ? 'سجلات قبول المستخدمين للشروط، مرتبطة بالإصدارات.'
              : 'Records of user terms acceptance, linked to versions.'}
          </p>
        </div>
      </div>
    </AdminShell>
  );
}
