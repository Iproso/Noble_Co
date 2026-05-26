'use client';

import { ReactNode } from 'react';
import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { MobileBottomNav } from './MobileBottomNav';
import { SkipLink } from '../ui/SkipLink';
import { ConsentBanner } from '../features/growth/ConsentBanner';

interface PublicShellProps {
  locale: string;
  children: ReactNode;
  showFooter?: boolean;
}

export function PublicShell({ locale, children, showFooter = true }: PublicShellProps) {
  return (
    <div className="min-h-screen flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SkipLink />
      <PublicHeader locale={locale} />
      <main id="main-content" role="main" className="flex-1">
        {children}
      </main>
      {showFooter && <PublicFooter locale={locale} />}
      <MobileBottomNav locale={locale} />
      <ConsentBanner locale={locale} />
    </div>
  );
}
