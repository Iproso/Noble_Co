import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const locales = ['en', 'ar'];

  const staticPages = [
    '', '/explore', '/salon', '/library', '/membership',
    '/auctions', '/concierge', '/estate-collections',
    '/heritage-passport', '/legal-trust',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.filter((l) => l !== locale).map((l) => [l, `${siteUrl}/${l}${page}`]),
          ),
        },
      });
    }
  }

  return entries;
}
