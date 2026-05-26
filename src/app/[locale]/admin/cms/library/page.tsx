import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Media Assets', titleAr: 'أصول الوسائط', descEn: 'Upload, organize, and manage images, videos, and audio files.', descAr: 'رفع وتنظيم وإدارة الصور ومقاطع الفيديو والملفات الصوتية.' },
  { icon: '◇', titleEn: 'Document Library', titleAr: 'مكتبة المستندات', descEn: 'Store and manage PDFs, spreadsheets, and other document types.', descAr: 'تخزين وإدارة ملفات PDF وجداول البيانات وأنواع المستندات الأخرى.' },
  { icon: '◆', titleEn: 'Asset Organization', titleAr: 'تنظيم الأصول', descEn: 'Folder structures, tags, and metadata for easy content discovery.', descAr: 'هياكل المجلدات والعلامات والبيانات الوصفية لسهولة اكتشاف المحتوى.' },
  { icon: '○', titleEn: 'Usage Tracking', titleAr: 'تتبع الاستخدام', descEn: 'See where each asset is referenced across pages and content.', descAr: 'معرفة أين يتم استخدام كل أصل عبر الصفحات والمحتوى.' },
  { icon: '□', titleEn: 'CDN Management', titleAr: 'إدارة CDN', descEn: 'Configure content delivery network settings and cache invalidation.', descAr: 'تكوين إعدادات شبكة توصيل المحتوى وإبطال التخزين المؤقت.' },
  { icon: '△', titleEn: 'Access Controls', titleAr: 'ضوابط الوصول', descEn: 'Set permissions for who can view, upload, or delete library assets.', descAr: 'تعيين صلاحيات من يمكنه عرض أو رفع أو حذف أصول المكتبة.' },
];

export default async function CmsLibraryPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'مكتبة CMS' : 'CMS Library'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'إدارة ملفات الوسائط والمستندات في مكتبة المحتوى.' : 'Manage media files and documents in the content library.'}
        </p>
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
