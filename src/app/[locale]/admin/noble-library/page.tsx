import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Digital Archive', titleAr: 'الأرشيف الرقمي', descEn: 'Browse, search, and manage the full digital collection archive.', descAr: 'تصفح وبحث وإدارة أرشيف المجموعة الرقمية الكامل.' },
  { icon: '◇', titleEn: 'Category Management', titleAr: 'إدارة التصنيفات', descEn: 'Create and organize categories, tags, and taxonomies.', descAr: 'إنشاء وتنظيم التصنيفات والوسوم والتصنيفات الهرمية.' },
  { icon: '◆', titleEn: 'Search & Discovery', titleAr: 'البحث والاكتشاف', descEn: 'Configure search indexing, filters, and recommendation logic.', descAr: 'تكوين فهرسة البحث والفلاتر ومنطق التوصيات.' },
  { icon: '○', titleEn: 'Content Curation', titleAr: 'تنظيم المحتوى', descEn: 'Curate featured collections, highlights, and editorial picks.', descAr: 'تنظيم المجموعات المميزة والإختيارات التحريرية.' },
  { icon: '□', titleEn: 'Access Permissions', titleAr: 'صلاحيات الوصول', descEn: 'Set user and role-based access for library content tiers.', descAr: 'تحديد وصول المستخدمين والأدوار لمستويات محتوى المكتبة.' },
  { icon: '△', titleEn: 'Export Tools', titleAr: 'أدوات التصدير', descEn: 'Export catalog data, metadata, and digital assets in bulk.', descAr: 'تصدير بيانات الكتالوج والبيانات الوصفية والأصول الرقمية بشكل مجمع.' },
];

export default async function NobleLibraryPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'مكتبة نوبل' : 'Noble Library'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة مكتبة نوبل.' : 'Manage Noble Library.'}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">{isRtl ? m.titleAr : m.titleEn}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? m.descAr : m.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
