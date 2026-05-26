'use client';

import { ReactNode } from 'react';
import { AdminNav } from './AdminNav';
import { AdminHeader } from './AdminHeader';
import { SkipLink } from '../ui/SkipLink';

interface AdminShellProps {
  locale: string;
  children: ReactNode;
  title?: string;
}

export function AdminShell({ locale, children, title }: AdminShellProps) {
  return (
    <div className="min-h-screen flex" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SkipLink />
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-soft-parchment border-e border-warm-gray overflow-y-auto edge-highlight">
        <div className="p-4 border-b border-warm-gray">
          <span className="text-sm font-semibold text-deep-ink">Noble Admin</span>
        </div>
        <AdminNav locale={locale} />
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader locale={locale} title={title} />
        <main id="main-content" role="main" className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
