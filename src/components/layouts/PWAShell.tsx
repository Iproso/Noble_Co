'use client';

import { ReactNode } from 'react';
import { PublicShell } from './PublicShell';
import { NetworkStatus, InstallPrompt, UpdateNotification } from '@/components/pwa';

interface PWAShellProps {
  locale: string;
  children: ReactNode;
  showFooter?: boolean;
}

export function PWAShell({ locale, children, showFooter = true }: PWAShellProps) {
  return (
    <>
      <NetworkStatus locale={locale} />
      <InstallPrompt locale={locale} />
      <UpdateNotification locale={locale} />
      <PublicShell locale={locale} showFooter={showFooter}>
        {children}
      </PublicShell>
    </>
  );
}
