import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  {
    icon: '◈',
    titleEn: 'Membership Applications',
    titleAr: 'طلبات العضوية',
    descEn: 'New member submissions requiring review and processing.',
    descAr: 'طلبات الأعضاء الجدد التي تتطلب المراجعة والمعالجة.',
  },
  {
    icon: '◇',
    titleEn: 'Application Review',
    titleAr: 'مراجعة الطلبات',
    descEn: 'Detailed assessment of applicant credentials and documentation.',
    descAr: 'تقييم مفصل لبيانات مقدم الطلب والوثائق.',
  },
  {
    icon: '◆',
    titleEn: 'Approval Workflow',
    titleAr: 'سير عمل الموافقة',
    descEn: 'Multi-step approval process with role-based routing.',
    descAr: 'عملية موافقة متعددة الخطوات مع توجيه قائم على الأدوار.',
  },
  {
    icon: '○',
    titleEn: 'Rejection Handling',
    titleAr: 'معالجة الرفض',
    descEn: 'Tools to manage rejections and provide applicant feedback.',
    descAr: 'أدوات لإدارة الرفض وتقديم ملاحظات لمقدم الطلب.',
  },
  {
    icon: '□',
    titleEn: 'Application History',
    titleAr: 'سجل الطلبات',
    descEn: 'Complete audit trail for every application submitted.',
    descAr: 'سجل تدقيق كامل لكل طلب تم تقديمه.',
  },
  {
    icon: '☆',
    titleEn: 'Communication Log',
    titleAr: 'سجل الاتصالات',
    descEn: 'All correspondence with applicants organised by application.',
    descAr: 'جميع المراسلات مع المتقدمين منظمة حسب الطلب.',
  },
];

export default async function ApplicationsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'الطلبات' : 'Applications'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl
            ? 'إدارة طلبات العضوية والتقديم.'
            : 'Manage membership and application submissions.'}
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
