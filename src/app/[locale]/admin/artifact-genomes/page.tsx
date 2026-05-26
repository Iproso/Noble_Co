import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'DNA Analysis', titleAr: 'تحليل الحمض النووي', descEn: 'Scientific material analysis and composition profiling.', descAr: 'تحليل علمي للمواد وملف التركيب.' },
  { icon: '◇', titleEn: 'Provenance Mapping', titleAr: 'رسم خريطة المصدر', descEn: 'Complete ownership history chain.', descAr: 'سلسلة تاريخ الملكية الكاملة.' },
  { icon: '◆', titleEn: 'Material Spectroscopy', titleAr: 'التحليل الطيفي للمواد', descEn: 'Spectral analysis for authentication.', descAr: 'تحليل طيفي للتوثيق.' },
  { icon: '○', titleEn: 'Age Dating', titleAr: 'تأريخ العمر', descEn: 'Carbon dating and age verification reports.', descAr: 'تقارير التأريخ بالكربون والتحقق من العمر.' },
  { icon: '□', titleEn: 'Restoration History', titleAr: 'تاريخ الترميم', descEn: 'Documented conservation and restoration records.', descAr: 'سجلات موثقة للصيانة والترميم.' },
  { icon: '△', titleEn: 'Comparative Analysis', titleAr: 'تحليل مقارن', descEn: 'Cross-reference with known authentic pieces.', descAr: 'مرجعية متبادلة مع القطع الأصلية المعروفة.' },
];

export default async function ArtifactGenomesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'جينوم القطع' : 'Artifact Genomes'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة البيانات الجينية للقطع الأثرية وتحليلاتها العلمية.' : 'Manage artifact genetic data and scientific analyses.'}</p>
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
