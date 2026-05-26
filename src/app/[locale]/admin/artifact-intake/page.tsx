import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  {
    icon: '◈',
    titleEn: 'Submission Queue',
    titleAr: 'قائمة الانتظار',
    descEn: 'Incoming artifact submissions sorted by priority and date.',
    descAr: 'القطع الأثرية الواردة مرتبة حسب الأولوية والتاريخ.',
  },
  {
    icon: '◇',
    titleEn: 'Intake Forms',
    titleAr: 'نماذج الاستلام',
    descEn: 'Digital forms for capturing artifact metadata and condition.',
    descAr: 'نماذج رقمية لتسجيل بيانات القطعة الأثرية وحالتها.',
  },
  {
    icon: '◆',
    titleEn: 'Photography & Media',
    titleAr: 'التصوير والوسائط',
    descEn: 'Media capture workflows and image management tools.',
    descAr: 'سير عمل التقاط الوسائط وأدوات إدارة الصور.',
  },
  {
    icon: '○',
    titleEn: 'Initial Assessment',
    titleAr: 'التقييم الأولي',
    descEn: 'Preliminary evaluation of authenticity and significance.',
    descAr: 'تقييم أولي للأصالة والأهمية.',
  },
  {
    icon: '□',
    titleEn: 'Expert Assignment',
    titleAr: 'تعيين الخبير',
    descEn: 'Route artifacts to subject-matter experts for review.',
    descAr: 'توجيه القطع الأثرية إلى خبراء متخصصين للمراجعة.',
  },
  {
    icon: '△',
    titleEn: 'Intake Decisions',
    titleAr: 'قرارات الاستلام',
    descEn: 'Final determination to accept, return, or escalate intake.',
    descAr: 'القرار النهائي بقبول أو إعادة أو تصعيد عملية الاستلام.',
  },
];

export default async function ArtifactIntakePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'استلام القطع الأثرية' : 'Artifact Intake'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl
            ? 'إدارة عملية استلام وتسجيل القطع الأثرية الجديدة.'
            : 'Manage the intake and registration of new artifacts.'}
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
