'use client';

import Link from 'next/link';

interface SellerNavProps {
  locale: string;
}

const links = [
  { label: 'My Submissions', labelAr: 'تقديماتي', href: '/seller/submissions' },
  { label: 'Review Status', labelAr: 'حالة المراجعة', href: '/seller/review-status' },
  { label: 'Evidence Requests', labelAr: 'طلبات الأدلة', href: '/seller/evidence-requests' },
  { label: 'Sale Path', labelAr: 'مسار البيع', href: '/seller/sale-path' },
  { label: 'Offers', labelAr: 'العروض', href: '/seller/offers' },
  { label: 'Consignment', labelAr: 'الإيداع', href: '/seller/consignment' },
  { label: 'Payments', labelAr: 'المدفوعات', href: '/seller/payments' },
  { label: 'Messages', labelAr: 'الرسائل', href: '/seller/messages' },
];

export function SellerNav({ locale }: SellerNavProps) {
  const isRtl = locale === 'ar';
  const t = (item: { label: string; labelAr: string }) =>
    isRtl ? item.labelAr : item.label;

  return (
    <nav role="navigation" className="space-y-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={`/${locale}${link.href}`}
          className="block px-4 py-2 text-sm text-text-secondary hover:text-deep-ink hover:bg-soft-parchment rounded-lg transition-colors"
        >
          {t(link)}
        </Link>
      ))}
    </nav>
  );
}
