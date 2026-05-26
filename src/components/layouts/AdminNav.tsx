'use client';

import Link from 'next/link';

interface AdminNavProps {
  locale: string;
}

const links = [
  { label: 'Dashboard', labelAr: 'لوحة التحكم', href: '/admin/dashboard' },
  { label: 'Applications', labelAr: 'الطلبات', href: '/admin/applications' },
  { label: 'Inquiries', labelAr: 'الاستفسارات', href: '/admin/inquiries' },
  { label: 'CMS', labelAr: 'نظام المحتوى', href: '/admin/cms' },
  { label: 'Artifact Intake', labelAr: 'استلام القطع', href: '/admin/artifact-intake' },
  { label: 'Artifacts', labelAr: 'القطع', href: '/admin/artifacts' },
  { label: 'Artifact Genomes', labelAr: 'جينوم القطع', href: '/admin/artifact-genomes' },
  { label: 'Asset Taxonomy', labelAr: 'تصنيف الأصول', href: '/admin/collector-asset-taxonomy' },
  { label: 'Condition Reports', labelAr: 'تقارير الحالة', href: '/admin/condition-reports' },
  { label: 'Auctions', labelAr: 'المزادات', href: '/admin/auctions' },
  { label: 'Private Sales', labelAr: 'المبيعات الخاصة', href: '/admin/private-sales' },
  { label: 'Heritage Passports', labelAr: 'جوازات التراث', href: '/admin/heritage-passports' },
  { label: 'Luxury Collectibles', labelAr: 'المقتنيات الفاخرة', href: '/admin/luxury-collectibles' },
  { label: 'Market Archive', labelAr: 'أرشيف السوق', href: '/admin/market-archive' },
  { label: 'Evidence Vault', labelAr: 'خزينة الأدلة', href: '/admin/evidence-vault' },
  { label: 'Orders & Finance', labelAr: 'الطلبات والمالية', href: '/admin/orders-finance' },
  { label: 'Logistics', labelAr: 'الخدمات اللوجستية', href: '/admin/logistics' },
  { label: 'Noble Library', labelAr: 'مكتبة نوبل', href: '/admin/noble-library' },
  { label: 'Growth', labelAr: 'النمو', href: '/admin/growth-intelligence' },
  { label: 'Introductions', labelAr: 'التقديمات', href: '/admin/introductions-circle' },
  { label: 'Legal & Trust', labelAr: 'القانون والثقة', href: '/admin/legal-trust-center' },
  { label: 'Mobile Readiness', labelAr: 'جاهزية الجوال', href: '/admin/mobile-readiness' },
  { label: 'Settings', labelAr: 'الإعدادات', href: '/admin/settings-governance' },
  { label: 'Audit Logs', labelAr: 'سجلات التدقيق', href: '/admin/audit-logs' },
];

export function AdminNav({ locale }: AdminNavProps) {
  const isRtl = locale === 'ar';
  const t = (item: { label: string; labelAr: string }) =>
    isRtl ? item.labelAr : item.label;

  return (
    <nav role="navigation" className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={`/${locale}${link.href}`}
          className="block px-3 py-1.5 text-sm text-text-secondary hover:text-deep-ink hover:bg-surface-raised rounded-md transition-colors"
        >
          {t(link)}
        </Link>
      ))}
    </nav>
  );
}
