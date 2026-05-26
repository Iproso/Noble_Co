'use client';

import { ReactNode } from 'react';
import { MobileBottomNav } from './MobileBottomNav';
import { SkipLink } from '../ui/SkipLink';
import { ThemeToggle } from '../ui/ThemeToggle';

interface MobileShellProps {
  locale: string;
  children: ReactNode;
  title?: string;
}

export function MobileShell({ locale, children, title }: MobileShellProps) {
  const isRtl = locale === 'ar';
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary" dir={isRtl ? 'rtl' : 'ltr'}>
      <SkipLink />
      <header className="lg:hidden sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm border-b border-border-light">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm font-medium text-deep-ink">Noble</span>
          <div className="flex items-center gap-3">
            {title && <span className="text-xs text-text-muted truncate max-w-[200px]">{title}</span>}
            <ThemeToggle locale={locale} />
          </div>
        </div>
      </header>
      <main id="main-content" role="main" className="flex-1 pb-20">
        {children}
      </main>
      <MobileBottomNav locale={locale} />
    </div>
  );
}
