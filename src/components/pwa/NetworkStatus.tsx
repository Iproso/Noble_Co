'use client';

import { useState, useEffect } from 'react';

interface NetworkStatusProps {
  locale: string;
}

export function NetworkStatus({ locale }: NetworkStatusProps) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-warning/10 border-b border-warning/30 px-4 py-2 text-center text-xs text-warning">
      {locale === 'ar' ? 'أنت حالياً غير متصل بالإنترنت' : 'You are currently offline'}
    </div>
  );
}
