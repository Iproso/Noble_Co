'use client';

import { useState, FormEvent } from 'react';

interface LeadCaptureProps {
  locale: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  emailPlaceholder?: string;
  namePlaceholder?: string;
  thankYouMessage?: string;
  source?: string;
}

export function LeadCapture({
  locale,
  title,
  description,
  submitLabel,
  emailPlaceholder,
  namePlaceholder,
  thankYouMessage,
  source = 'lead-capture',
}: LeadCaptureProps) {
  const isRtl = locale === 'ar';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !name) {
      setError(isRtl ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields');
      return;
    }

    try {
      const res = await fetch('/api/v1/growth/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-bg-card rounded-xl border border-border-light card-metallic">
        <p className="text-sm text-deep-ink font-medium">{thankYouMessage || (isRtl ? 'شكراً لك! سنتواصل معك.' : "Thank you! We'll be in touch.")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {title && <h3 className="text-sm font-semibold text-deep-ink">{title}</h3>}
      {description && <p className="text-xs text-text-secondary">{description}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={namePlaceholder || (isRtl ? 'اسمك' : 'Your name')}
        className="w-full text-sm border border-border-light rounded-lg p-2.5 bg-bg-primary text-deep-ink placeholder:text-text-muted"
        dir={isRtl ? 'rtl' : 'ltr'}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={emailPlaceholder || (isRtl ? 'بريدك الإلكتروني' : 'Your email address')}
        className="w-full text-sm border border-border-light rounded-lg p-2.5 bg-bg-primary text-deep-ink placeholder:text-text-muted"
        dir={isRtl ? 'rtl' : 'ltr'}
        required
      />
      {error && <p className="text-xs text-error">{error}</p>}
      <button type="submit" className="w-full px-4 py-2.5 bg-charcoal text-warm-white rounded-lg text-sm font-medium hover:bg-surface-hover transition-colors">
        {submitLabel || (isRtl ? 'إرسال' : 'Submit')}
      </button>
    </form>
  );
}
