'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { createDevSessionCookie } from '@/lib/auth/dev-bypass';

export default function LoginPage() {
  const params = useParams();
  const locale = (params.locale as string) || 'en';
  const isRtl = locale === 'ar';
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState('');

  const handleDevLogin = () => {
    setLoggingIn(true);
    setError('');
    try {
      document.cookie = createDevSessionCookie();
      window.location.href = `/${locale}/admin`;
    } catch {
      setError(isRtl ? 'فشل تسجيل الدخول. حاول مرة أخرى.' : 'Login failed. Please try again.');
      setLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="w-full max-w-sm mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="heading-1 rose-gold-text mb-2">
            {isRtl ? 'نوبل كوليكتورز' : 'Noble Collectors'}
          </h1>
          <p className="text-sm text-text-secondary">
            {isRtl ? 'لوحة الإدارة' : 'Admin Panel'}
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border-light p-8 card-metallic">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-soft-parchment flex items-center justify-center mb-4">
              <span className="text-2xl text-antique-gold">◈</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              {isRtl
                ? 'بيئة تطوير — تسجيل الدخول بنقرة واحدة للوحة الإدارة.'
                : 'Development environment — one-click access to the admin panel.'}
            </p>
          </div>

          {error && (
            <p className="text-xs text-error text-center mb-4 bg-error/5 rounded-lg px-3 py-2">{error}</p>
          )}

          <button
            onClick={handleDevLogin}
            disabled={loggingIn}
            className="w-full py-3 px-4 rounded-lg bg-charcoal text-warm-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loggingIn
              ? (isRtl ? 'جاري تسجيل الدخول...' : 'Logging in...')
              : (isRtl ? 'دخول المطور' : 'Dev Login')}
          </button>

          <p className="text-[0.55rem] text-text-muted text-center mt-4 leading-relaxed">
            {isRtl
              ? 'هذا الزر يمنح وصولاً إدارياً فورياً في بيئة التطوير المحلية. لا يتطلب أي بيانات اعتماد.'
              : 'This button grants instant admin access in the local development environment. No credentials required.'}
          </p>
        </div>
      </div>
    </div>
  );
}
