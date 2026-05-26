'use client';

import Link from 'next/link';

interface MobileBottomNavProps {
  locale: string;
}

const items = [
  { label: 'Explore', labelAr: 'استكشف', href: '/explore', icon: '◈' },
  { label: 'Salon', labelAr: 'الصالون', href: '/collectors-salon', icon: '◇' },
  { label: 'Submit', labelAr: 'تقديم', href: '/submit-artifact', icon: '○' },
  { label: 'Library', labelAr: 'المكتبة', href: '/library', icon: '□' },
  { label: 'Account', labelAr: 'الحساب', href: '/account', icon: '○' },
];

export function MobileBottomNav({ locale }: MobileBottomNavProps) {
  const isRtl = locale === 'ar';
  const t = (item: { label: string; labelAr: string }) =>
    isRtl ? item.labelAr : item.label;

  return (
    <nav role="navigation" aria-label={isRtl ? 'التنقل الرئيسي' : 'Main navigation'} className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-bg-primary/95 backdrop-blur-md border-t border-border-light bottom-nav-safe">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => (
          <Link
            key={item.href}
            href={`/${locale}${item.href}`}
            className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-16"
          >
            <span className="text-lg text-text-secondary" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-[0.65rem] text-text-secondary truncate max-w-full">
              {t(item)}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
