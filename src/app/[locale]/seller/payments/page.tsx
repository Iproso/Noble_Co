import { SellerShell } from '@/components/layouts/SellerShell';
import { mockPayments } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function PaymentsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const totalReceived = mockPayments.reduce((sum, p) => {
    if (p.statusEn === 'Received') {
      return sum + parseFloat(p.amountEn.replace(/[$,]/g, ''));
    }
    return sum;
  }, 0);

  return (
    <SellerShell locale={locale} title={isRtl ? 'المدفوعات' : 'Payments'}>
      <div className="bg-antique-gold/5 border border-antique-gold/20 rounded-xl p-5 mb-6">
        <p className="text-[0.6rem] text-text-muted uppercase tracking-wide">{isRtl ? 'إجمالي المستلم' : 'Total Received'}</p>
        <p className="text-xl font-bold text-antique-gold mt-1">${totalReceived.toLocaleString()}</p>
      </div>

      {mockPayments.length === 0 ? (
        <div className="bg-soft-parchment rounded-xl p-12 text-center">
          <p className="text-sm text-text-muted">{isRtl ? 'لا توجد مدفوعات مسجلة' : 'No payment records'}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockPayments.map((p) => (
            <div key={p.id} className="bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 transition-all card-metallic shimmer-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-deep-ink">{isRtl ? p.titleAr : p.titleEn}</h3>
                  <p className="text-xs text-text-muted mt-1">{isRtl ? p.typeAr : p.typeEn}</p>
                  <p className="text-xs text-text-muted">{p.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-deep-ink">{isRtl ? p.amountAr : p.amountEn}</p>
                  <span className={`text-[0.6rem] px-2 py-0.5 rounded-full font-medium inline-block mt-1 ${
                    p.statusEn === 'Received' ? 'bg-evidence-strong/10 text-evidence-strong' :
                    p.statusEn === 'Processing' ? 'bg-evidence-moderate/10 text-evidence-moderate' :
                    'bg-risk-internal/10 text-risk-internal'
                  }`}>
                    {isRtl ? p.statusAr : p.statusEn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </SellerShell>
  );
}
