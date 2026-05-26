'use client';

import { useState, useEffect } from 'react';

interface InstallPromptProps {
  locale: string;
}

export function InstallPrompt({ locale }: InstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!deferredPrompt) return null;

  return (
    <div className="fixed bottom-20 inset-x-4 z-50 bg-charcoal text-warm-white rounded-xl p-4 shadow-lg">
      <p className="text-sm mb-2">{locale === 'ar' ? 'ثبّت تطبيق نوبل' : 'Install Noble Collectors'}</p>
      <div className="flex gap-2">
        <button
          onClick={async () => {
            (deferredPrompt as any).prompt();
            const result = await (deferredPrompt as any).userChoice;
            if (result.outcome === 'accepted') setDeferredPrompt(null);
          }}
          className="px-4 py-1.5 bg-antique-gold text-warm-white rounded-lg text-xs font-medium"
        >
          {locale === 'ar' ? 'تثبيت' : 'Install'}
        </button>
        <button
          onClick={() => setDeferredPrompt(null)}
          className="px-4 py-1.5 text-warm-white/70 rounded-lg text-xs"
        >
          {locale === 'ar' ? 'لاحقاً' : 'Later'}
        </button>
      </div>
    </div>
  );
}
