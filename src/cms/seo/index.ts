export interface SEOFields {
  title?: string;
  titleAr?: string;
  description?: string;
  descriptionAr?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface SMCFields {
  title?: string;
  titleAr?: string;
  description?: string;
  descriptionAr?: string;
  image?: string;
}

export function getPublicSEOMeta(
  locale: string,
  seo: SEOFields | null,
  defaultTitle: string,
  defaultDescription: string,
) {
  const isRtl = locale === 'ar';
  return {
    title: isRtl ? seo?.titleAr || seo?.title || defaultTitle : seo?.title || defaultTitle,
    description: isRtl ? seo?.descriptionAr || seo?.description || defaultDescription : seo?.description || defaultDescription,
    ogImage: seo?.ogImage,
    canonicalUrl: seo?.canonicalUrl,
    robots: seo?.noindex ? 'noindex, nofollow' : 'index, follow',
  };
}
