import { PublicShell } from '@/components/layouts/PublicShell';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: `Noble Collectors — ${locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}`, description: locale === 'ar' ? 'كيف تحمي نوبل كوليكتورز بياناتك وخصوصيتك.' : 'How Noble Collectors protects your data and privacy.' };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const sections = [
    {
      icon: '📋', titleEn: 'Data We Collect', titleAr: 'البيانات التي نجمعها',
      itemsEn: ['Name, email, phone number', 'Billing and shipping addresses', 'Object documentation and provenance records', 'Usage data (page views, interactions, preferences)', 'Communication history with Concierge'],
      itemsAr: ['الاسم والبريد الإلكتروني ورقم الهاتف', 'عناوين الفوترة والشحن', 'توثيق القطع وسجلات المصدر', 'بيانات الاستخدام (مشاهدات الصفحات والتفاعلات والتفضيلات)', 'سجل التواصل مع الكونسيرج'],
    },
    {
      icon: '🔒', titleEn: 'How We Use Your Data', titleAr: 'كيف نستخدم بياناتك',
      itemsEn: ['Process transactions and manage your account', 'Facilitate object authentication and provenance research', 'Provide Concierge services and personalized recommendations', 'Comply with legal and regulatory obligations', 'Improve platform security and user experience'],
      itemsAr: ['معالجة المعاملات وإدارة حسابك', 'تسهيل التحقق من القطع والبحث في المصدر', 'تقديم خدمات الكونسيرج والتوصيات المخصصة', 'الامتثال للالتزامات القانونية والتنظيمية', 'تحسين أمن المنصة وتجربة المستخدم'],
    },
    {
      icon: '🤝', titleEn: 'Data Sharing', titleAr: 'مشاركة البيانات',
      itemsEn: ['We never sell your personal data', 'Shared with trusted service providers for payment processing, shipping, and platform operations', 'Disclosed when required by law or to protect rights'],
      itemsAr: ['نحن لا نبيع بياناتك الشخصية أبداً', 'تتم المشاركة مع مقدمي خدمات موثوقين لمعالجة المدفوعات والشحن وتشغيل المنصة', 'يُفصح عنها عندما يقتضي القانون ذلك أو لحماية الحقوق'],
    },
    {
      icon: '✅', titleEn: 'Your Rights', titleAr: 'حقوقك',
      itemsEn: ['Access your personal data', 'Correct inaccurate information', 'Delete your account and associated data', 'Export your data in portable format', 'Withdraw consent at any time'],
      itemsAr: ['الوصول إلى بياناتك الشخصية', 'تصحيح المعلومات غير الدقيقة', 'حذف حسابك والبيانات المرتبطة به', 'تصدير بياناتك بتنسيق قابل للنقل', 'سحب الموافقة في أي وقت'],
    },
    {
      icon: '🛡️', titleEn: 'Data Protection', titleAr: 'حماية البيانات',
      itemsEn: ['Encrypted in transit (TLS) and at rest', 'Access controlled by strict role-based permissions', 'Regular security audits and penetration testing', 'Incident response plan in place'],
      itemsAr: ['مشفرة أثناء النقل (TLS) وعند التخزين', 'الوصول محدود بأذونات صارمة قائمة على الأدوار', 'تدقيق أمني منتظم واختبار اختراق', 'خطة استجابة للحوادث'],
    },
    {
      icon: '🍪', titleEn: 'Cookies', titleAr: 'ملفات تعريف الارتباط',
      itemsEn: ['Essential cookies for platform operation', 'Analytics cookies to improve experience', 'Preference cookies to remember settings', 'You can manage preferences via our Consent Banner'],
      itemsAr: ['ملفات أساسية لتشغيل المنصة', 'ملفات تحليلات لتحسين التجربة', 'ملفات تفضيلات لتذكر الإعدادات', 'يمكنك إدارة التفضيلات عبر شريط الموافقة'],
    },
  ];

  return (
    <PublicShell locale={locale}>
      <section className="bg-soft-parchment border-b border-border-light brushed-metal">
        <div className="container-noble py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🛡️</span>
            <h1 className="heading-1 rose-gold-text">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
          </div>
          <p className="body-large text-text-secondary max-w-3xl">
            {isRtl
              ? 'نوبل كوليكتورز تحترم خصوصيتك. نوضح هنا كيفية جمع واستخدام وحماية بياناتك الشخصية عند استخدام منصتنا.'
              : 'Noble Collectors respects your privacy. This policy explains how we collect, use, and protect your personal data when you use our platform.'}
          </p>
          <p className="text-xs text-text-muted mt-3">{isRtl ? 'آخر تحديث: مايو 2026' : 'Last updated: May 2026'}</p>
        </div>
      </section>

      <section className="container-noble py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.titleEn} className="bg-bg-card rounded-xl border border-border-light p-6 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
              <span className="text-xl block mb-3">{section.icon}</span>
              <h2 className="text-sm font-semibold text-deep-ink mb-3">{isRtl ? section.titleAr : section.titleEn}</h2>
              <ul className="space-y-2">
                {(isRtl ? section.itemsAr : section.itemsEn).map((item, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="text-antique-gold shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-card border-y border-border-light">
        <div className="container-noble py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-3 text-deep-ink mb-4">{isRtl ? 'تواصل معنا' : 'Contact Us'}</h2>
            <p className="text-sm text-text-secondary mb-6">
              {isRtl
                ? 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات الخاصة بنا، يرجى التواصل مع فريق الخصوصية لدينا.'
                : 'If you have any questions about this Privacy Policy or our data practices, please contact our Privacy Team.'}
            </p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center px-5 py-2.5 bg-charcoal text-warm-white rounded-lg text-sm font-medium hover:bg-charcoal transition-colors">
              {isRtl ? 'اتصل بفريق الخصوصية' : 'Contact Privacy Team'}
            </Link>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
