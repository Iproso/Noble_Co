'use client';

import Link from 'next/link';

interface PublicFooterProps {
  locale: string;
}

const footerSections = [
  {
    key: 'discover',
    label: 'Discover',
    labelAr: 'اكتشف',
    links: [
      { label: 'Explore', labelAr: 'استكشف', href: '/explore' },
      { label: 'Auctions', labelAr: 'المزادات', href: '/auctions' },
      { label: 'Collectors\u2019 Salon', labelAr: 'صالون الجامعين', href: '/collectors-salon' },
      { label: 'Heritage Passport', labelAr: 'جواز التراث', href: '/heritage-passport' },
    ],
  },
  {
    key: 'library',
    label: 'Noble Library',
    labelAr: 'مكتبة نوبل',
    links: [
      { label: 'Heritage Atlas', labelAr: 'أطلس التراث', href: '/library/heritage-atlas' },
      { label: 'Museum Index', labelAr: 'فهرس المتاحف', href: '/library/museums' },
      { label: 'Maison Heritage', labelAr: 'تاريخ الدور العريقة', href: '/library/maison-heritage' },
      { label: 'Collector Guides', labelAr: 'أدلة الجامعين', href: '/library/guides' },
    ],
  },
  {
    key: 'trust',
    label: 'Legal & Trust',
    labelAr: 'القانون والثقة',
    links: [
      { label: 'Legal & Trust Center', labelAr: 'مركز القانون والثقة', href: '/legal-trust' },
      { label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', href: '/legal-trust/privacy' },
      { label: 'Terms of Sale', labelAr: 'شروط البيع', href: '/legal-trust/buyer-terms' },
    ],
  },
];

export function PublicFooter({ locale }: PublicFooterProps) {
  const isRtl = locale === 'ar';
  const t = (item: { label: string; labelAr: string }) =>
    isRtl ? item.labelAr : item.label;

  return (
    <footer role="contentinfo" className="border-t border-warm-gray bg-soft-parchment mt-auto edge-highlight">
      <div className="container-noble py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-deep-ink mb-4">
              Noble<span className="text-antique-gold">·</span>Collectors
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {isRtl
                ? 'منصة خاصة وذكية مدعومة بالأدلة للقطع الاستثنائية القابلة للجمع'
                : 'Private access and evidence-backed intelligence for exceptional collector assets.'}
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.key}>
              <h4 className="text-sm font-semibold text-deep-ink mb-4">
                {t(section)}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm text-text-secondary hover:text-deep-ink transition-colors"
                    >
                      {t(link)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-warm-gray">
          <p className="text-xs text-text-muted text-center">
            &copy; {new Date().getFullYear()} Noble Collectors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
