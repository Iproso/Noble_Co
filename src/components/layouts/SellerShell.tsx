'use client';

import { ReactNode } from 'react';
import { PublicHeader } from './PublicHeader';
import { SellerNav } from './SellerNav';
import { MobileBottomNav } from './MobileBottomNav';
import { SkipLink } from '../ui/SkipLink';

interface SellerShellProps {
  locale: string;
  children: ReactNode;
  title?: string;
}

export function SellerShell({ locale, children, title }: SellerShellProps) {
  return (
    <div className="min-h-screen flex flex-col" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SkipLink />
      <PublicHeader locale={locale} />
      <div className="container-noble flex-1 flex gap-8 py-8">
        <aside className="hidden lg:block w-64 shrink-0">
          <SellerNav locale={locale} />
        </aside>
        <main id="main-content" role="main" className="flex-1 min-w-0">
          {title && <h1 className="heading-2 mb-8">{title}</h1>}
          {children}
        </main>
      </div>
      <MobileBottomNav locale={locale} />
    </div>
  );
}
