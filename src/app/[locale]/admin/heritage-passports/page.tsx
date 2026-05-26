import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  {
    icon: '◈',
    titleEn: 'Passport Generator',
    titleAr: 'مولد جواز السفر',
    descEn: 'Create digital heritage passport documents for artifacts.',
    descAr: 'إنشاء وثائق جواز سفر تراثي رقمي للقطع الأثرية.',
  },
  {
    icon: '◇',
    titleEn: 'Provenance Chain',
    titleAr: 'سلسلة المالكية',
    descEn: 'Visualise and verify the complete ownership timeline.',
    descAr: 'تصور والتحقق من الجدول الزمني الكامل للملكية.',
  },
  {
    icon: '◆',
    titleEn: 'Document Management',
    titleAr: 'إدارة المستندات',
    descEn: 'Upload, organise, and link supporting documents and certificates.',
    descAr: 'رفع وتنظيم وربط المستندات والشهادات الداعمة.',
  },
  {
    icon: '○',
    titleEn: 'Legal Review',
    titleAr: 'المراجعة القانونية',
    descEn: 'Compliance checks, export licences, and legal sign-off.',
    descAr: 'فحوصات الامتثال وتراخيص التصدير والموافقة القانونية.',
  },
  {
    icon: '□',
    titleEn: 'Market Context Reports',
    titleAr: 'تقارير سياق السوق',
    descEn: 'Comparative market analysis and valuation insights.',
    descAr: 'تحليل السوق المقارن ورؤى التقييم.',
  },
  {
    icon: '△',
    titleEn: 'QR / Access Control',
    titleAr: 'رمز الاستجابة السريعة / التحكم في الوصول',
    descEn: 'Generate QR codes and manage passport access permissions.',
    descAr: 'إنشاء رموز QR وإدارة أذونات الوصول لجواز السفر.',
  },
];

export default async function HeritagePassportsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'جوازات السفر التراثية' : 'Heritage Passports'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl
            ? 'إدارة جوازات السفر التراثية الرقمية للقطع الأثرية.'
            : 'Manage digital heritage passports for artifacts.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div key={m.titleEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <span className="text-xl text-antique-gold block mb-3">{m.icon}</span>
              <h3 className="text-sm font-semibold text-deep-ink mb-1">
                {isRtl ? m.titleAr : m.titleEn}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {isRtl ? m.descAr : m.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
