'use client';

import { useState, useEffect } from 'react';

interface UpdateNotificationProps {
  locale: string;
}

export function UpdateNotification({ locale }: UpdateNotificationProps) {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        reg.addEventListener('updatefound', () => {
          const installing = reg.installing;
          if (installing) {
            installing.addEventListener('statechange', () => {
              if (installing.state === 'installed' && navigator.serviceWorker.controller) {
                setWaitingWorker(installing);
              }
            });
          }
        });
      });
    }
  }, []);

  if (!waitingWorker) return null;

  return (
    <div className="fixed bottom-20 inset-x-4 z-50 bg-charcoal text-warm-white rounded-xl p-4 shadow-lg">
      <p className="text-sm mb-2">{locale === 'ar' ? 'تحديث متاح' : 'Update available'}</p>
      <p className="text-xs text-warm-white/70 mb-3">
        {locale === 'ar' ? 'تحديث جديد متاح. الرجاء التحديث للحصول على أفضل تجربة.' : 'A new version is available. Please update for the best experience.'}
      </p>
      <button
        onClick={() => {
          waitingWorker.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }}
        className="px-4 py-1.5 bg-antique-gold text-warm-white rounded-lg text-xs font-medium"
      >
        {locale === 'ar' ? 'تحديث' : 'Update'}
      </button>
    </div>
  );
}
