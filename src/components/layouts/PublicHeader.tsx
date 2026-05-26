'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';

interface PublicHeaderProps {
  locale: string;
}

interface NavItem {
  label: string;
  labelAr: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Explore', labelAr: 'استكشف', href: '/explore' },
  { label: 'Auctions', labelAr: 'المزادات', href: '/auctions' },
  { label: 'Collectors\u2019 Salon', labelAr: 'صالون الجامعين', href: '/collectors-salon' },
  { label: 'Heritage Passport', labelAr: 'جواز التراث', href: '/heritage-passport' },
  { label: 'Sell / Submit', labelAr: 'بيع / تقديم', href: '/sell' },
  { label: 'Noble Library', labelAr: 'مكتبة نوبل', href: '/library' },
  { label: 'Concierge', labelAr: 'الكونسيرج', href: '/concierge' },
];

export function PublicHeader({ locale }: PublicHeaderProps) {
  const isRtl = locale === 'ar';
  const t = (item: { label: string; labelAr: string }) =>
    isRtl ? item.labelAr : item.label;

  return (
    <header role="banner" className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border-light edge-highlight">
      <div className="container-noble flex items-center justify-between h-16">
        <Link
          href={`/${locale}`}
          className="text-xl font-display tracking-tight text-deep-ink"
        >
          Noble<span className="text-antique-gold">·</span>Collectors
        </Link>

        <nav role="navigation" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm text-text-secondary hover:text-deep-ink transition-colors duration-200"
            >
              {t(item)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle locale={locale} />
          <Link
            href={`/${locale === 'ar' ? 'en' : 'ar'}`}
            className="text-sm text-text-secondary hover:text-deep-ink transition-colors"
          >
            {locale === 'ar' ? 'English' : 'العربية'}
          </Link>
          <Link
            href={`/${locale}/membership`}
            className="hidden sm:inline-flex text-sm px-4 py-1.5 rounded-lg border border-antique-gold/50 text-antique-gold hover:bg-antique-gold hover:text-warm-white transition-colors duration-200"
          >
            {isRtl ? 'عضوية' : 'Membership'}
          </Link>
        </div>
      </div>
    </header>
  );
}
