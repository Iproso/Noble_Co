'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LocaleNotFound() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const isRtl = locale === 'ar';

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="text-center p-8">
        <h1 className="heading-1 text-deep-ink mb-4">{isRtl ? '٤٠٤' : '404'}</h1>
        <p className="text-text-secondary mb-2 text-lg">
          {isRtl ? 'الصفحة غير موجودة' : 'Page not found'}
        </p>
        <p className="text-text-muted mb-8 text-sm">
          {isRtl ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.' : 'The page you\'re looking for doesn\'t exist or has been moved.'}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex px-5 py-2.5 bg-charcoal text-warm-white rounded-lg text-sm font-medium hover:bg-charcoal transition-colors"
        >
          {isRtl ? 'العودة إلى الرئيسية' : 'Back to Home'}
        </Link>
      </div>
    </div>
  );
}
