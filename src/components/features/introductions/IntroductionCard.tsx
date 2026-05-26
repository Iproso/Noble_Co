'use client';

import { CTAButton } from '@/components/ui/CTAButton';

interface IntroductionCardProps {
  locale: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category?: string;
  href?: string;
}

export function IntroductionCard({ locale, title, titleAr, description, descriptionAr, category, href }: IntroductionCardProps) {
  const isRtl = locale === 'ar';
  const displayTitle = isRtl ? titleAr : title;
  const displayDesc = isRtl ? descriptionAr : description;

  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-5 hover:border-antique-gold/30 transition-colors card-metallic shimmer-hover">
      {category && (
        <span className="text-[0.6rem] px-2 py-0.5 rounded-full bg-soft-parchment text-text-muted uppercase mb-3 inline-block">
          {category}
        </span>
      )}
      <h3 className="text-sm font-semibold text-deep-ink mb-2">{displayTitle}</h3>
      <p className="text-xs text-text-secondary leading-relaxed mb-4">{displayDesc}</p>
      {href && (
        <CTAButton locale={locale} href={href} variant="outline">
          {isRtl ? 'طلب تقديم' : 'Request Introduction'}
        </CTAButton>
      )}
    </div>
  );
}
