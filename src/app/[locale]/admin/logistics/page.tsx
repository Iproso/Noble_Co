import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Shipping Management', titleAr: 'إدارة الشحن', descEn: 'Create and manage shipments, labels, and carrier bookings.', descAr: 'إنشاء وإدارة الشحنات وملصقات الشحن وحجوزات الناقل.' },
  { icon: '◇', titleEn: 'Carrier Integration', titleAr: 'دمج الناقلين', descEn: 'Connect with major carriers for rate quotes and tracking.', descAr: 'الاتصال بالناقلين الرئيسيين للحصول على عروض الأسعار والتتبع.' },
  { icon: '◆', titleEn: 'Customs Documentation', titleAr: 'الوثائق الجمركية', descEn: 'Generate customs forms, commercial invoices, and export docs.', descAr: 'إنشاء النماذج الجمركية والفواتير التجارية ووثائق التصدير.' },
  { icon: '○', titleEn: 'Tracking Dashboard', titleAr: 'لوحة التتبع', descEn: 'Real-time tracking view for all active outbound shipments.', descAr: 'عرض تتبع فوري لجميع الشحنات الصادرة النشطة.' },
  { icon: '□', titleEn: 'Storage Management', titleAr: 'إدارة التخزين', descEn: 'Track warehouse inventory, location bins, and storage fees.', descAr: 'تتبع مخزون المستودعات ومواقع التخزين ورسوم التخزين.' },
  { icon: '△', titleEn: 'Insurance Processing', titleAr: 'معالجة التأمين', descEn: 'Manage shipping insurance policies, claims, and coverage.', descAr: 'إدارة وثائق تأمين الشحن والمطالبات والتغطية.' },
];

export default async function LogisticsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'الخدمات اللوجستية' : 'Logistics'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة الخدمات اللوجستية.' : 'Manage logistics operations.'}</p>
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
