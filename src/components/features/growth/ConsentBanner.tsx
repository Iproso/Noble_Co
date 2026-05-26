'use client';

import { useState, useEffect } from 'react';
import { privacyConsentAdapter } from '@/native-bridge/privacyConsentAdapter';

interface ConsentBannerProps {
  locale: string;
  message?: string;
  acceptLabel?: string;
  declineLabel?: string;
  preferencesLabel?: string;
}

export function ConsentBanner({
  locale,
  message,
  acceptLabel,
  declineLabel,
  preferencesLabel,
}: ConsentBannerProps) {
  const isRtl = locale === 'ar';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = privacyConsentAdapter.getConsent();
    if (!hasConsent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    privacyConsentAdapter.setConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    privacyConsentAdapter.setConsent(false);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-surface-overlay/95 backdrop-blur-sm text-warm-white p-4 shadow-lg" role="alert" aria-live="polite">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-xs text-warm-white/80 flex-1 leading-relaxed">
          {message || (isRtl
            ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستمرارك فإنك توافق على سياسة ملفات تعريف الارتباط الخاصة بنا.'
            : 'We use cookies to enhance your experience. By continuing you agree to our Cookie Policy.')}
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={handleDecline} className="px-3 py-1.5 text-xs border border-warm-white/30 text-warm-white/70 rounded-lg hover:bg-warm-white/10 transition-colors">
            {declineLabel || (isRtl ? 'رفض' : 'Decline')}
          </button>
          <button onClick={handleAccept} className="px-4 py-1.5 text-xs bg-antique-gold text-warm-white rounded-lg hover:bg-muted-brass transition-colors font-medium">
            {acceptLabel || (isRtl ? 'قبول الكل' : 'Accept All')}
          </button>
        </div>
      </div>
    </div>
  );
}
