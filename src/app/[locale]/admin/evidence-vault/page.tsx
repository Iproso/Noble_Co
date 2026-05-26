import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const vaultModules = [
  { icon: '◈', titleEn: 'Secure Upload', titleAr: 'تحميل آمن', descEn: 'Encrypted upload pipeline for original media files.', descAr: 'خط تحميل مشفر لملفات الوسائط الأصلية.' },
  { icon: '◇', titleEn: 'Signed URL Generator', titleAr: 'مولد الروابط الموقعة', descEn: 'Time-limited access URLs for external reviewers.', descAr: 'روابط وصول محدودة الوقت للمراجعين الخارجيين.' },
  { icon: '◆', titleEn: 'EXIF/GPS Stripping', titleAr: 'إزالة بيانات الموقع', descEn: 'Automatic metadata sanitization on upload.', descAr: 'تنظيف تلقائي للبيانات الوصفية عند التحميل.' },
  { icon: '○', titleEn: 'Thumbnail Generation', titleAr: 'إنشاء الصور المصغرة', descEn: 'Automated thumbnail and preview variant creation.', descAr: 'إنشاء تلقائي للصور المصغرة ونماذج المعاينة.' },
  { icon: '□', titleEn: 'Access Audit Trail', titleAr: 'سجل تدقيق الوصول', descEn: 'Complete logging of all media access events.', descAr: 'تسجيل كامل لجميع أحداث الوصول إلى الوسائط.' },
  { icon: '△', titleEn: 'Media Watermarking', titleAr: 'العلامات المائية', descEn: 'Optional watermark overlay for preview variants.', descAr: 'تراكب علامة مائية اختياري لنماذج المعاينة.' },
];

export default async function EvidenceVaultPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <AdminShell locale={locale} title={isRtl ? 'خزينة الأدلة' : 'Evidence Vault'}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vaultModules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">{isRtl ? m.titleAr : m.titleEn}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{isRtl ? m.descAr : m.descEn}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
          <h2 className="text-base font-medium text-deep-ink mb-2">
            {isRtl ? 'ملفات الوسائط الأصلية' : 'Original Media Files'}
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            {isRtl
              ? 'جميع ملفات الوسائط الأصلية مخزنة بشكل خاص. يتم إنشاء نوافذ الوصول عبر روابط موقعة منتهية الصلاحية.'
              : 'All original media files are stored privately. Access windows are created via expiring signed URLs.'}
          </p>
          <div className="bg-soft-parchment rounded-lg p-8 text-center">
            <span className="text-sm text-text-muted">
              {isRtl ? 'لم يتم تحميل أي وسائط بعد' : 'No media uploaded yet'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
            <h3 className="text-sm font-medium text-deep-ink mb-2">
              {isRtl ? 'المتغيرات العامة' : 'Public Variants'}
            </h3>
            <p className="text-xs text-text-secondary">
              {isRtl
                ? 'تم تجريد بيانات EXIF/GPS. يتم تخزين الصور المصغرة والمعاينات العامة بشكل منفصل.'
                : 'EXIF/GPS data stripped. Thumbnails and public previews stored separately.'}
            </p>
          </div>
          <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
            <h3 className="text-sm font-medium text-deep-ink mb-2">
              {isRtl ? 'سجلات الوصول' : 'Access Logs'}
            </h3>
            <p className="text-xs text-text-secondary">
              {isRtl
                ? 'جميع عمليات الوصول إلى ملفات الوسائط الأصلية مسجلة للتدقيق.'
                : 'All original media file access is logged for audit.'}
            </p>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
