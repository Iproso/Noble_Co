import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Offer Management', titleAr: 'إدارة العروض', descEn: 'Create and manage private sale offers.', descAr: 'إنشاء وإدارة عروض البيع الخاصة.' },
  { icon: '◇', titleEn: 'Buyer Matching', titleAr: 'مطابقة المشترين', descEn: 'AI-assisted buyer and seller matching.', descAr: 'مطابقة المشترين والبائعين بمساعدة الذكاء الاصطناعي.' },
  { icon: '◆', titleEn: 'Confidential Documents', titleAr: 'المستندات السرية', descEn: 'Secure document vault for sensitive materials.', descAr: 'خزينة آمنة للمستندات الحساسة.' },
  { icon: '○', titleEn: 'Negotiation Tracker', titleAr: 'متابعة التفاوض', descEn: 'Track negotiation stages and communications.', descAr: 'تتبع مراحل التفاوض والاتصالات.' },
  { icon: '□', titleEn: 'Closing & Settlement', titleAr: 'الإغلاق والتسوية', descEn: 'End-to-end sale closing and settlement.', descAr: 'إغلاق البيع والتسوية من البداية إلى النهاية.' },
  { icon: '△', titleEn: 'Commission Management', titleAr: 'إدارة العمولات', descEn: 'Commission structure and payout management.', descAr: 'إدارة هيكل العمولات والمدفوعات.' },
];

export default async function PrivateSalesPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'المبيعات الخاصة' : 'Private Sales'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة عمليات البيع الخاصة والسرية بكل أمان.' : 'Manage confidential private sale transactions securely.'}</p>
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
