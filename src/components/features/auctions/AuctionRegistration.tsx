'use client';
import { useState } from 'react';

interface AuctionRegistrationProps { locale: string; auctionId: string; }

export function AuctionRegistration({ locale, auctionId }: AuctionRegistrationProps) {
  const isRtl = locale === 'ar';
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!termsAccepted) { setError(isRtl ? 'يرجى قبول الشروط' : 'Please accept the terms'); return; }
    setSubmitting(true); setError('');
    try {
      const res = await fetch('/api/v1/auctions/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ auctionId, termsAccepted, termsVersion: '1.0' }) });
      if (!res.ok) throw new Error('Registration failed');
      setSubmitted(true);
    } catch { setError(isRtl ? 'حدث خطأ' : 'Something went wrong'); }
    finally { setSubmitting(false); }
  };

  if (submitted) return (<div className="bg-bg-card rounded-xl border border-border-light p-6 text-center card-metallic"><p className="text-sm text-deep-ink font-medium">{isRtl ? 'تم تسجيلك!' : "You're registered!"}</p><p className="text-xs text-text-secondary mt-1">{isRtl ? 'سيتم تأكيد طلبك قريباً.' : 'Your request will be confirmed shortly.'}</p></div>);

  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-6 card-metallic">
      <h3 className="text-sm font-semibold text-deep-ink mb-3">{isRtl ? 'التسجيل للمزايدة' : 'Register to Bid'}</h3>
      <label className="flex items-start gap-2 cursor-pointer mb-4">
        <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="mt-0.5" />
        <span className="text-xs text-text-secondary">{isRtl ? 'أوافق على شروط وأحكام المزاد.' : 'I accept the auction terms and conditions.'}</span>
      </label>
      {error && <p className="text-xs text-error mb-3">{error}</p>}
      <button onClick={handleRegister} disabled={submitting} className="w-full px-4 py-2.5 bg-antique-gold text-warm-white rounded-lg text-sm font-medium hover:bg-muted-brass transition-colors disabled:opacity-50">
        {submitting ? (isRtl ? 'جاري...' : 'Submitting...') : (isRtl ? 'تسجيل' : 'Register')}
      </button>
    </div>
  );
}
