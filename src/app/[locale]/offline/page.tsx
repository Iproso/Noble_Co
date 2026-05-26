import { PublicShell } from '@/components/layouts/PublicShell';

type Props = { params: Promise<{ locale: string }> };

export default async function OfflinePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <PublicShell locale={locale}>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-soft-parchment flex items-center justify-center">
            <span className="text-2xl">🔗</span>
          </div>
          <h1 className="heading-1 text-deep-ink mb-3">
            {isRtl ? 'غير متصل بالإنترنت' : 'You\'re Offline'}
          </h1>
          <p className="text-text-secondary mb-8">
            {isRtl
              ? 'يبدو أنك غير متصل بالإنترنت. بعض المحتوى قد لا يكون متاحاً. حاول الاتصال مرة أخرى.'
              : 'It looks like you\'re offline. Some content may not be available. Please check your connection and try again.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-charcoal text-warm-white rounded-lg text-sm font-medium hover:bg-charcoal transition-colors"
          >
            {isRtl ? 'إعادة المحاولة' : 'Try Again'}
          </button>
        </div>
      </div>
    </PublicShell>
  );
}
