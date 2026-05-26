import { AdminShell } from '@/components/layouts/AdminShell';

type Props = { params: Promise<{ locale: string }> };

const modules = [
  { icon: '◈', titleEn: 'Order Management', titleAr: 'إدارة الطلبات', descEn: 'View, create, and manage all buyer orders and order statuses.', descAr: 'عرض وإنشاء وإدارة جميع طلبات المشترين وحالات الطلبات.' },
  { icon: '◇', titleEn: 'Invoices & Receipts', titleAr: 'الفواتير والإيصالات', descEn: 'Generate and send invoices, receipts, and credit notes.', descAr: 'إنشاء وإرسال الفواتير والإيصالات وإشعارات الائتمان.' },
  { icon: '◆', titleEn: 'Payment Processing', titleAr: 'معالجة المدفوعات', descEn: 'Manage payment gateways, transactions, and refunds.', descAr: 'إدارة بوابات الدفع والمعاملات والمبالغ المستردة.' },
  { icon: '○', titleEn: 'Financial Reports', titleAr: 'التقارير المالية', descEn: 'Revenue summaries, P&L statements, and exportable reports.', descAr: 'ملخصات الإيرادات وبيانات الأرباح والخسائر وتقارير قابلة للتصدير.' },
  { icon: '□', titleEn: 'Buyer Premium Calc', titleAr: 'حساب علاوة المشتري', descEn: 'Configure and calculate buyer premium and applicable fees.', descAr: 'تكوين وحساب علاوة المشتري والرسوم المطبقة.' },
  { icon: '△', titleEn: 'Payout Management', titleAr: 'إدارة المدفوعات', descEn: 'Schedule and process seller payouts and commission settlements.', descAr: 'جدولة ومعالجة مدفوعات البائعين وتسويات العمولات.' },
];

export default async function OrdersFinancePage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';
  return (
    <AdminShell locale={locale} title={isRtl ? 'الطلبات والمالية' : 'Orders & Finance'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">{isRtl ? 'إدارة الطلبات والمالية.' : 'Manage orders and finance.'}</p>
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
