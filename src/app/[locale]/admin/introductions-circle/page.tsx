import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Introduction Requests', titleAr: 'طلبات التعارف', descEn: 'Review and approve member introduction requests and preferences.', descAr: 'مراجعة والموافقة على طلبات التعارف للأعضاء وتفضيلاتهم.' },
  { icon: '◇', titleEn: 'Match Management', titleAr: 'إدارة المطابقات', descEn: 'Manage introductions, pairings, and connection outcomes.', descAr: 'إدارة التعارف والاقترانات ونتائج التواصل.' },
  { icon: '◆', titleEn: 'VIP Profiles', titleAr: 'ملفات الشخصيات المهمة', descEn: 'Detailed profiles, interests, and introduction preferences for VIPs.', descAr: 'ملفات مفصلة واهتمامات وتفضيلات التعارف للشخصيات المهمة.' },
  { icon: '○', titleEn: 'Introductions History', titleAr: 'سجل التعارف', descEn: 'Complete log of all past introductions and member feedback.', descAr: 'سجل كامل لجميع التعارف السابقة وملاحظات الأعضاء.' },
  { icon: '□', titleEn: 'Meeting Scheduling', titleAr: 'جدولة الاجتماعات', descEn: 'Coordinate and schedule introductory meetings and follow-ups.', descAr: 'تنسيق وجدولة اجتماعات التعارف والمتابعات.' },
  { icon: '△', titleEn: 'Feedback & Reviews', titleAr: 'الملاحظات والمراجعات', descEn: 'Collect post-introduction feedback and satisfaction ratings.', descAr: 'جمع الملاحظات بعد التعارف وتقييمات الرضا.' },
];

export default async function IntroductionsCirclePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'دائرة التعارف' : 'Introductions Circle'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة دائرة التعارف.' : 'Manage introductions circle.'}</p>
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
