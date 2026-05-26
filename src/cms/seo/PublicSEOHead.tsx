import { getPublicSEOMeta, type SEOFields } from './index';

interface PublicSEOHeadProps {
  locale: string;
  seo: SEOFields | null;
  defaultTitle: string;
  defaultDescription: string;
  slug: string;
  contentType?: string;
}

export function PublicSEOHead({
  locale,
  seo,
  defaultTitle,
  defaultDescription,
  slug,
  contentType,
}: PublicSEOHeadProps) {
  const meta = getPublicSEOMeta(locale, seo, defaultTitle, defaultDescription);
  const isRtl = locale === 'ar';

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': contentType === 'journal_article' ? 'Article' : 'WebPage',
    name: meta.title,
    description: meta.description,
    inLanguage: locale,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/${slug}`,
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.robots} />
      {meta.canonicalUrl && <link rel="canonical" href={meta.canonicalUrl} />}
      <link rel="alternate" hrefLang={locale} href={`${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/${slug}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:locale" content={isRtl ? 'ar_AE' : 'en_US'} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.ogImage && <meta name="twitter:image" content={meta.ogImage} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
