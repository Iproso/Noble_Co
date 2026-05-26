import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Fine Jewelry', titleAr: 'المجوهرات الفاخرة', descEn: 'High-end jewelry catalog and management.', descAr: 'كتالوج وإدارة المجوهرات الفاخرة.' },
  { icon: '◇', titleEn: 'Luxury Watches', titleAr: 'الساعات الفاخرة', descEn: 'Prestigious watch collection management.', descAr: 'إدارة مجموعة الساعات الفاخرة.' },
  { icon: '◆', titleEn: 'Designer Handbags', titleAr: 'حقائب المصممين', descEn: 'Luxury handbag inventory and authentication.', descAr: 'مخزون حقائب المصممين والتوثيق.' },
  { icon: '○', titleEn: 'Fine Wine & Spirits', titleAr: 'النبيذ والمشروبات الروحية', descEn: 'Rare wine and spirits collection management.', descAr: 'إدارة مجموعة النبيذ والمشروبات الروحية النادرة.' },
  { icon: '□', titleEn: 'Classic Cars', titleAr: 'السيارات الكلاسيكية', descEn: 'Vintage and classic automobile registry.', descAr: 'سجل السيارات الكلاسيكية والقديمة.' },
  { icon: '△', titleEn: 'Rare Collectibles', titleAr: 'المقتنيات النادرة', descEn: 'Miscellaneous rare and high-value collectibles.', descAr: 'مقتنيات نادرة متنوعة عالية القيمة.' },
];

export default async function LuxuryCollectiblesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'المقتنيات الفاخرة' : 'Luxury Collectibles'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة فئات المقتنيات الفاخرة والراقية.' : 'Manage luxury and high-end collectible categories.'}</p>
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
