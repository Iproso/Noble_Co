'use client';

import { CTAButton } from '@/components/ui/CTAButton';

interface SmartCtaProps {
  locale: string;
  variant?: 'explore' | 'auctions' | 'library' | 'concierge' | 'introductions';
  href?: string;
  label?: string;
  labelAr?: string;
  onClick?: () => void;
}

export function SmartCta({ locale, variant = 'explore', href, label, labelAr, onClick }: SmartCtaProps) {
  const isRtl = locale === 'ar';

  const defaults: Record<string, { labelEn: string; href: string }> = {
    explore: { labelEn: 'Explore the Collection', href: '/explore' },
    auctions: { labelEn: 'View Auctions', href: '/auctions' },
    library: { labelEn: 'Visit Noble Library', href: '/library' },
    concierge: { labelEn: 'Ask Concierge', href: '/concierge' },
    introductions: { labelEn: 'Join Introductions Circle', href: '/introductions' },
  };

  const resolvedLabel = isRtl ? (labelAr ?? defaults[variant].labelEn) : (label ?? defaults[variant].labelEn);
  const resolvedHref = href ?? defaults[variant].href;

  return (
    <CTAButton locale={locale} href={resolvedHref} onClick={onClick} variant="gold">
      {resolvedLabel}
    </CTAButton>
  );
}
