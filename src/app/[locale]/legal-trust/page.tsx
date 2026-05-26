import { getTranslations } from 'next-intl/server';
import { PublicShell } from '@/components/layouts/PublicShell';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

const trustPages = [
  { slug: 'auction-rules', key: 'Auction Rules' },
  { slug: 'buyer-terms', key: 'Buyer Terms' },
  { slug: 'seller-terms', key: 'Seller Terms' },
  { slug: 'private-sale-terms', key: 'Private Sale Terms' },
  { slug: 'payment-instructions', key: 'Payment & Bank Transfer Instructions' },
  { slug: 'buyer-premium-fees', key: 'Buyer Premium & Fees' },
  { slug: 'viewing-collection-policy', key: 'Viewing & Collection Policy' },
  { slug: 'shipping-custody-policy', key: 'Shipping / Custody Policy' },
  { slug: 'refund-returns-policy', key: 'Refund & Returns Policy' },
  { slug: 'privacy-policy', key: 'Privacy Policy' },
  { slug: 'data-protection', key: 'Personal Data Protection' },
  { slug: 'cookie-policy', key: 'Cookie Policy' },
  { slug: 'kyc-sanctions-explanation', key: 'KYC / Sanctions Review Explanation' },
  { slug: 'brand-affiliation-disclaimer', key: 'Brand / Maison Affiliation Disclaimer' },
  { slug: 'museum-affiliation-disclaimer', key: 'Museum / Institution Affiliation Disclaimer' },
  { slug: 'mobile-app-privacy', key: 'Mobile App Privacy / Data Use' },
  { slug: 'account-data-deletion', key: 'Account / Data Deletion' },
];

const trustPagesAr = [
  { slug: 'auction-rules', key: 'قواعد المزاد' },
  { slug: 'buyer-terms', key: 'شروط المشتري' },
  { slug: 'seller-terms', key: 'شروط البائع' },
  { slug: 'private-sale-terms', key: 'شروط البيع الخاص' },
  { slug: 'payment-instructions', key: 'تعليمات الدفع والتحويل البنكي' },
  { slug: 'buyer-premium-fees', key: 'رسوم المشتري الإضافية' },
  { slug: 'viewing-collection-policy', key: 'سياسة المعاينة والاستلام' },
  { slug: 'shipping-custody-policy', key: 'سياسة الشحن والحفظ' },
  { slug: 'refund-returns-policy', key: 'سياسة الاسترجاع والاسترداد' },
  { slug: 'privacy-policy', key: 'سياسة الخصوصية' },
  { slug: 'data-protection', key: 'حماية البيانات الشخصية' },
  { slug: 'cookie-policy', key: 'سياسة ملفات تعريف الارتباط' },
  { slug: 'kyc-sanctions-explanation', key: 'شرح التحقق من الهوية والعقوبات' },
  { slug: 'brand-affiliation-disclaimer', key: 'إخلاء مسؤولية انتماء العلامات التجارية' },
  { slug: 'museum-affiliation-disclaimer', key: 'إخلاء مسؤولية انتماء المتاحف والمؤسسات' },
  { slug: 'mobile-app-privacy', key: 'خصوصية التطبيق واستخدام البيانات' },
  { slug: 'account-data-deletion', key: 'حذف الحساب والبيانات' },
];

export default async function LegalTrustHubPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  const pages = isRtl ? trustPagesAr : trustPages;

  return (
    <PublicShell locale={locale}>
      <div className="container-noble py-16">
        <h1 className="heading-1 rose-gold-text mb-4">
          {isRtl ? 'مركز القانون والثقة' : 'Legal & Trust Center'}
        </h1>
        <p className="body-large text-text-secondary max-w-2xl mb-12">
          {isRtl
            ? 'سياساتنا وشروطنا وإفصاحاتنا لضمان الشفافية والثقة.'
            : 'Our policies, terms, and disclosures for transparency and trust.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/${locale}/legal-trust/${page.slug}`}
              className="block bg-bg-card rounded-xl p-5 border border-border-light hover:border-antique-gold/30 hover:shadow-md transition-all card-metallic shimmer-hover"
            >
              <span className="text-sm text-deep-ink font-medium">{page.key}</span>
            </Link>
          ))}
        </div>
      </div>
    </PublicShell>
  );
}
