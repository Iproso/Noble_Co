import { AdminShell } from '@/components/layouts/AdminShell';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

const contentTypes = [
  { type: 'page', label: 'Pages', labelAr: 'الصفحات' },
  { type: 'category_page', label: 'Category Pages', labelAr: 'صفحات الفئات' },
  { type: 'journal_article', label: 'Journal', labelAr: 'المجلة' },
  { type: 'legal_policy', label: 'Legal & Trust Pages', labelAr: 'صفحات القانون والثقة' },
  { type: 'heritage_atlas_entry', label: 'Heritage Atlas', labelAr: 'أطلس التراث' },
  { type: 'museum_profile', label: 'Museum Profiles', labelAr: 'ملفات المتاحف' },
  { type: 'maison_heritage_profile', label: 'Maison Heritage', labelAr: 'تاريخ الدور العريقة' },
  { type: 'collector_guide', label: 'Collector Guides', labelAr: 'أدلة الجامعين' },
  { type: 'glossary_term', label: 'Glossary', labelAr: 'المسرد' },
  { type: 'email_template', label: 'Email Templates', labelAr: 'قوالب البريد الإلكتروني' },
];

export default async function CMSPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'نظام إدارة المحتوى' : 'CMS'}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contentTypes.map((ct) => (
          <Link
            key={ct.type}
            href={`/${locale}/admin/cms/${ct.type}`}
            className="block bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 hover:shadow-md transition-all card-metallic shimmer-hover"
          >
            <h3 className="text-sm font-medium text-deep-ink">
              {isRtl ? ct.labelAr : ct.label}
            </h3>
            <p className="text-xs text-text-muted mt-1">{ct.type}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
