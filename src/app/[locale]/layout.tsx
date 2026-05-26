import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: {
      default: 'Noble Collectors',
      template: '%s | Noble Collectors',
    },
    description: t('explore'),
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    openGraph: {
      title: 'Noble Collectors',
      description: t('explore'),
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website',
      siteName: 'Noble Collectors',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Noble Collectors',
      description: t('explore'),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: '/',
      languages: { en: '/en', ar: '/ar' },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="apple-touch-icon" href="/icons/icon-192.svg" />
        <script dangerouslySetInnerHTML={{ __html: 'try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.dataset.theme="dark"}else if(t==="light"){delete document.documentElement.dataset.theme}else if(window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.dataset.theme="dark";localStorage.setItem("theme","dark")}}catch(e){}' }} />
        <script dangerouslySetInnerHTML={{ __html: 'if("serviceWorker"in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").catch(function(){})})}' }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-deep-ink">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
