import { PublicShell } from '@/components/layouts/PublicShell';
import { DELETION_REASONS } from '@/lib/types/privacy';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: `Noble Collectors — ${locale === 'ar' ? 'حذف الحساب' : 'Account Deletion'}`,
    description: locale === 'ar' ? 'طلب حذف حسابك وبياناتك من نوبل كوليكتورز.' : 'Request deletion of your Noble Collectors account and associated data.',
  };
}

export default async function DataDeletionPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <section className="container-noble py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="heading-1 rose-gold-text mb-4">
            {isRtl ? 'حذف الحساب' : 'Account Deletion'}
          </h1>
          <p className="body-large text-text-secondary mb-8">
            {isRtl
              ? 'يمكنك طلب حذف حسابك وبياناتك الشخصية من نوبل كوليكتورز. يرجى مراجعة المعلومات أدناه قبل الشروع في ذلك.'
              : 'You can request deletion of your Noble Collectors account and personal data. Please review the information below before proceeding.'}
          </p>

          <div className="bg-warning/5 border border-warning/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-deep-ink mb-3">
              {isRtl ? 'ما يتم حذفه:' : 'What will be deleted:'}
            </h2>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>{isRtl ? '• ملفك الشخصي وبيانات حسابك' : '• Your profile and account data'}</li>
              <li>{isRtl ? '• تفضيلاتك وسجل التصفح' : '• Your preferences and browsing history'}</li>
              <li>{isRtl ? '• سجل التواصل مع الكونسيرج' : '• Concierge communication history'}</li>
            </ul>
          </div>

          <div className="bg-info/5 border border-info/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-deep-ink mb-3">
              {isRtl ? 'ما يتم الاحتفاظ به (للامتثال القانوني):' : 'What will be retained (for legal compliance):'}
            </h2>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>{isRtl ? '• سجلات المعاملات المالية (مطلوبة قانونياً)' : '• Financial transaction records (legally required)'}</li>
              <li>{isRtl ? '• سجلات المصدر والتوثيق للقطع' : '• Provenance and documentation records for objects'}</li>
              <li>{isRtl ? '• سجلات الموافقة على الشروط (مطلوبة للامتثال)' : '• Terms acceptance records (required for compliance)'}</li>
            </ul>
          </div>

          <div className="bg-bg-card rounded-xl border border-border-light p-6 card-metallic space-y-4">
            <h2 className="heading-4 text-deep-ink">
              {isRtl ? 'طلب حذف الحساب' : 'Request Account Deletion'}
            </h2>
            <p className="text-sm text-text-secondary">
              {isRtl
                ? 'لحذف حسابك، يرجى إرسال بريد إلكتروني من البريد المسجل في حسابك إلى:'
                : 'To delete your account, please send an email from your registered email address to:'}
            </p>
            <a
              href="mailto:privacy@noblecollectors.com?subject=Account%20Deletion%20Request"
              className="inline-flex items-center px-5 py-2.5 bg-risk-internal text-warm-white rounded-lg text-sm font-medium hover:bg-risk-internal transition-colors"
            >
              {isRtl ? 'إرسال طلب الحذف' : 'Send Deletion Request'}
            </a>
            <p className="text-xs text-text-muted">
              {isRtl
                ? 'سيتم معالجة طلبك خلال 30 يوم. لديك فترة 7 أيام لإلغاء الطلب بعد تقديمه.'
                : 'Your request will be processed within 30 days. You have a 7-day window to cancel the request after submission.'}
            </p>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
