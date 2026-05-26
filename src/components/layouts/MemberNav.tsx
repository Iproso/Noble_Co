'use client';

import Link from 'next/link';

interface MemberNavProps {
  locale: string;
}

const links = [
  { label: 'Collection Desk', labelAr: 'طاولة المجموعة', href: '/account/collection-desk' },
  { label: 'Watchlist', labelAr: 'قائمة المتابعة', href: '/account/watchlist' },
  { label: 'Collectors\u2019 Salon', labelAr: 'صالون الجامعين', href: '/account/collectors-salon' },
  { label: 'Auctions', labelAr: 'المزادات', href: '/account/auctions' },
  { label: 'Condition Requests', labelAr: 'طلبات الحالة', href: '/account/condition-requests' },
  { label: 'Sourcing', labelAr: 'التوريد', href: '/account/sourcing' },
  { label: 'Documents', labelAr: 'الوثائق', href: '/account/documents' },
  { label: 'Messages', labelAr: 'الرسائل', href: '/account/messages' },
  { label: 'Settings', labelAr: 'الإعدادات', href: '/account/settings' },
];

export function MemberNav({ locale }: MemberNavProps) {
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
