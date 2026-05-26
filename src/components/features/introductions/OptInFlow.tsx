'use client';

import { useState, FormEvent } from 'react';

interface OptInFlowProps {
  locale: string;
  onComplete?: () => void;
}

export function OptInFlow({ locale, onComplete }: OptInFlowProps) {
  const isRtl = locale === 'ar';
  const [step, setStep] = useState<'intro' | 'form' | 'confirm'>('intro');
  const [introducerName, setIntroducerName] = useState('');
  const [introducerEmail, setIntroducerEmail] = useState('');
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeEmail, setInviteeEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!introducerName || !introducerEmail || !inviteeName || !inviteeEmail) {
      setError(isRtl ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields');
      return;
    }

    if (!agreed) {
      setError(isRtl ? 'يرجى الموافقة على الشروط' : 'Please agree to the terms');
      return;
    }

    try {
      const res = await fetch('/api/v1/introductions/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          introducerName,
          introducerEmail,
          inviteeName,
          inviteeEmail,
          relationship: 'collector',
          notes: '',
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setStep('confirm');
      onComplete?.();
    } catch {
      setError(isRtl ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Something went wrong. Please try again.');
    }
  };

  if (step === 'confirm') {
    return (
      <div className="text-center p-8 bg-bg-card rounded-xl border border-border-light card-metallic">
        <div className="w-12 h-12 rounded-full bg-soft-parchment flex items-center justify-center mx-auto mb-4">
          <span className="text-antique-gold text-lg">✓</span>
        </div>
        <p className="text-sm font-medium text-deep-ink">
          {isRtl ? 'تم إرسال طلب التقديم!' : 'Introduction request submitted!'}
        </p>
        <p className="text-xs text-text-secondary mt-2">
          {isRtl ? 'سيتواصل معك فريق الكونسيرج لدينا قريباً.' : 'Our concierge team will be in touch shortly.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-bg-card rounded-xl border border-border-light card-metallic p-6">
      {step === 'intro' && (
        <div className="text-center space-y-4">
          <p className="text-sm text-text-secondary">
            {isRtl
              ? 'قم بتقديم جامع أو عقار إلى شبكة نوبل. سنقوم بالتحقق من كلا الطرفين وبدء عملية التقديم.'
              : 'Introduce a collector or estate to the Noble network. We will verify both parties and initiate the introduction process.'}
          </p>
          <button onClick={() => setStep('form')} className="px-5 py-2.5 bg-antique-gold text-warm-white rounded-lg text-sm font-medium hover:bg-muted-brass transition-colors">
            {isRtl ? 'بدء التقديم' : 'Start Introduction'}
          </button>
        </div>
      )}
      {step === 'form' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-sm font-semibold text-deep-ink">{isRtl ? 'تفاصيل التقديم' : 'Introduction Details'}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <input value={introducerName} onChange={(e) => setIntroducerName(e.target.value)} placeholder={isRtl ? 'اسم المقدّم' : 'Introducer Name'} className="w-full text-sm border rounded-lg p-2.5 bg-bg-primary text-deep-ink" dir={isRtl ? 'rtl' : 'ltr'} />
            <input value={introducerEmail} onChange={(e) => setIntroducerEmail(e.target.value)} placeholder={isRtl ? 'البريد الإلكتروني للمقدّم' : 'Introducer Email'} type="email" className="w-full text-sm border rounded-lg p-2.5 bg-bg-primary text-deep-ink" dir={isRtl ? 'rtl' : 'ltr'} />
            <input value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} placeholder={isRtl ? 'اسم المقدّم إليه' : 'Invitee Name'} className="w-full text-sm border rounded-lg p-2.5 bg-bg-primary text-deep-ink" dir={isRtl ? 'rtl' : 'ltr'} />
            <input value={inviteeEmail} onChange={(e) => setInviteeEmail(e.target.value)} placeholder={isRtl ? 'البريد الإلكتروني للمقدّم إليه' : 'Invitee Email'} type="email" className="w-full text-sm border rounded-lg p-2.5 bg-bg-primary text-deep-ink" dir={isRtl ? 'rtl' : 'ltr'} />
          </div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5" />
            <span className="text-xs text-text-secondary">{isRtl ? 'أوافق على أن كلا الطرفين موافق على التواصل وأن بياناتهما ستُستخدم فقط لغرض التقديم.' : 'I confirm both parties consent to be connected and their data will only be used for this introduction.'}</span>
          </label>
          {error && <p className="text-xs text-error">{error}</p>}
          <div className="flex gap-2">
            <button type="button" onClick={() => setStep('intro')} className="px-4 py-2 text-sm border border-border-light rounded-lg hover:bg-surface-raised transition-colors">{isRtl ? 'رجوع' : 'Back'}</button>
            <button type="submit" className="px-4 py-2 text-sm bg-charcoal text-warm-white rounded-lg hover:bg-surface-hover transition-colors">{isRtl ? 'إرسال الطلب' : 'Submit Request'}</button>
          </div>
        </form>
      )}
    </div>
  );
}
