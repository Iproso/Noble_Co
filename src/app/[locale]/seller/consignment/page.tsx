import { SellerShell } from '@/components/layouts/SellerShell';
import { mockConsignments } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function ConsignmentPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <SellerShell locale={locale} title={isRtl ? 'الإيداع' : 'Consignment'}>
      {mockConsignments.length === 0 ? (
        <div className="bg-soft-parchment rounded-xl p-12 text-center">
          <p className="text-sm text-text-muted">{isRtl ? 'لا توجد اتفاقيات إيداع نشطة' : 'No active consignment agreements'}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockConsignments.map((c) => (
            <div key={c.id} className="bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 transition-all card-metallic shimmer-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-deep-ink">{isRtl ? c.titleAr : c.titleEn}</h3>
                  <p className="text-xs text-text-muted mt-1">{isRtl ? 'نوع البيع: ' : 'Sale Type: '}{isRtl ? c.saleTypeAr : c.saleTypeEn}</p>
                </div>
                <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium ${
                  c.statusEn === 'Active' ? 'bg-evidence-strong/10 text-evidence-strong' : 'bg-evidence-moderate/10 text-evidence-moderate'
                }`}>
                  {isRtl ? c.statusAr : c.statusEn}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border-light">
                <div>
                  <p className="text-[0.6rem] text-text-muted uppercase tracking-wide">{isRtl ? 'العمولة' : 'Commission'}</p>
                  <p className="text-xs font-medium text-deep-ink mt-0.5">{isRtl ? c.commissionAr : c.commissionEn}</p>
                </div>
                <div>
                  <p className="text-[0.6rem] text-text-muted uppercase tracking-wide">{isRtl ? 'الاحتياطي' : 'Reserve'}</p>
                  <p className="text-xs font-medium text-deep-ink mt-0.5">{isRtl ? c.reserveAr : c.reserveEn}</p>
                </div>
                <div>
                  <p className="text-[0.6rem] text-text-muted uppercase tracking-wide">{isRtl ? 'اتفاقية' : 'Agreement'}</p>
                  <p className="text-xs font-medium text-deep-ink mt-0.5">{c.agreementDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </SellerShell>
  );
}
