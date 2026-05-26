import { SellerShell } from '@/components/layouts/SellerShell';
import { mockEvidenceRequests } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function EvidenceRequestsPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <SellerShell locale={locale} title={isRtl ? 'طلبات الأدلة' : 'Evidence Requests'}>
      {mockEvidenceRequests.length === 0 ? (
        <div className="bg-soft-parchment rounded-xl p-12 text-center">
          <p className="text-sm text-text-muted">{isRtl ? 'لا توجد طلبات أدلة معلقة' : 'No pending evidence requests'}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockEvidenceRequests.map((req) => (
            <div key={req.id} className="bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 transition-all card-metallic shimmer-hover">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-text-muted">{isRtl ? req.titleAr : req.titleEn}</p>
                  <h3 className="text-sm font-medium text-deep-ink mt-0.5">{isRtl ? req.requestedItemAr : req.requestedItemEn}</h3>
                  <div className="flex gap-4 mt-2">
                    <p className="text-[0.6rem] text-text-muted">{isRtl ? 'طلب في: ' : 'Requested: '}{req.requestedAt}</p>
                    <p className="text-[0.6rem] text-text-muted">{isRtl ? 'تاريخ الاستحقاق: ' : 'Due: '}{req.dueDate}</p>
                  </div>
                </div>
                <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium ${
                  req.statusEn === 'Pending' ? 'bg-evidence-moderate/10 text-evidence-moderate' : 'bg-evidence-strong/10 text-evidence-strong'
                }`}>
                  {isRtl ? req.statusAr : req.statusEn}
                </span>
              </div>
              {req.statusEn === 'Pending' && (
                <div className="mt-3 pt-3 border-t border-border-light">
                  <button className="text-[0.65rem] px-3 py-1.5 bg-charcoal text-warm-white rounded-lg font-medium hover:bg-charcoal transition-colors">
                    {isRtl ? 'تحميل المستند' : 'Upload Document'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </SellerShell>
  );
}
