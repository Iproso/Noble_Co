'use client';

import Link from 'next/link';

interface CTAButtonProps {
  locale: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'gold';
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-charcoal text-warm-white hover:bg-surface-hover shadow-sm',
  outline:
    'border border-antique-gold/50 text-antique-gold hover:bg-antique-gold hover:text-warm-white hover:border-antique-gold',
  ghost:
    'text-text-secondary hover:text-deep-ink',
  gold:
    'bg-antique-gold text-warm-white hover:bg-muted-brass shadow-gold',
};

export function CTAButton({
  locale,
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
}: CTAButtonProps) {
  const baseStyles = `inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
