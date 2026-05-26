'use client';

import { useState } from 'react';

interface TermsAcceptanceProps {
  locale: string;
  termsType: string;
  termsVersion: string;
  termsText: string;
  termsTextAr: string;
  onAccept: () => Promise<void>;
  isAccepted?: boolean;
}

export function TermsAcceptance({
  locale,
  termsType,
  termsVersion,
  termsText,
  termsTextAr,
  onAccept,
  isAccepted = false,
}: TermsAcceptanceProps) {
  const [accepting, setAccepting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isRtl = locale === 'ar';
  const displayText = isRtl ? termsTextAr : termsText;

  if (isAccepted) {
    return (
      <div className="bg-evidence-strong/5 border border-evidence-strong/20 rounded-xl p-4">
        <p className="text-sm text-evidence-strong font-medium">
          {isRtl ? 'تم قبول الشروط' : 'Terms Accepted'}
        </p>
        <p className="text-xs text-text-muted mt-1">
          {isRtl ? `الإصدار: ${termsVersion}` : `Version: ${termsVersion}`}
        </p>
      </div>
    );
  }

  async function handleAccept() {
    setAccepting(true);
    setError(null);
    try {
      await onAccept();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to accept terms');
    } finally {
      setAccepting(false);
    }
  }

  return (
    <div className="bg-soft-parchment border border-warm-gray rounded-xl p-6 space-y-4">
      <div className="max-h-48 overflow-y-auto text-sm text-text-secondary leading-relaxed bg-warm-white rounded-lg p-4">
        {displayText}
      </div>
      {error && (
        <p className="text-sm text-risk-internal">{error}</p>
      )}
      <button
        type="button"
        onClick={handleAccept}
        disabled={accepting}
        className="w-full inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-antique-gold text-warm-white hover:bg-muted-brass disabled:opacity-50 transition-all"
      >
        {accepting
          ? (isRtl ? 'جارٍ القبول...' : 'Accepting...')
          : (isRtl ? 'قبول الشروط' : 'Accept Terms')}
      </button>
    </div>
  );
}
