import { SellerShell } from '@/components/layouts/SellerShell';
import { mockSubmissions, mockEvidenceRequests, mockOffers, mockPayments } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function SellerDashboardPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  const activeSubmissions = mockSubmissions.filter(s => s.status === 'under_review').length;
  const pendingEvidence = mockEvidenceRequests.filter(e => e.statusEn === 'Pending').length;
  const pendingOffers = mockOffers.filter(o => o.statusEn === 'Pending').length;
  const recentPayments = mockPayments.filter(p => p.statusEn === 'Received' || p.statusEn === 'Processing').length;

  return (
    <SellerShell locale={locale} title={isRtl ? 'لوحة البائع' : 'Seller Dashboard'}>
      <div className="space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: activeSubmissions, labelEn: 'Active Submissions', labelAr: 'تقديمات نشطة', color: 'text-antique-gold' },
            { value: pendingEvidence, labelEn: 'Pending Evidence', labelAr: 'أدلة معلقة', color: 'text-needs-review' },
            { value: pendingOffers, labelEn: 'Pending Offers', labelAr: 'عروض معلقة', color: 'text-evidence-moderate' },
            { value: recentPayments, labelEn: 'Recent Payments', labelAr: 'مدفوعات حديثة', color: 'text-evidence-strong' },
          ].map((stat) => (
            <div key={stat.labelEn} className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{isRtl ? stat.labelAr : stat.labelEn}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
            <h2 className="text-sm font-semibold text-deep-ink mb-4">{isRtl ? 'آخر التقديمات' : 'Recent Submissions'}</h2>
            <div className="space-y-3">
              {mockSubmissions.slice(0, 3).map((s) => (
                <div key={s.id} className="flex items-center justify-between py-2 border-b border-border-light last:border-0">
                  <p className="text-xs text-deep-ink font-medium">{isRtl ? s.titleAr : s.titleEn}</p>
                  <span className={`text-[0.6rem] px-2 py-0.5 rounded-full font-medium ${
                    s.status === 'approved' ? 'bg-evidence-strong/10 text-evidence-strong' :
                    s.status === 'under_review' ? 'bg-needs-review/10 text-needs-review' :
                    s.status === 'evidence_requested' ? 'bg-evidence-moderate/10 text-evidence-moderate' :
                    'bg-warm-gray/30 text-text-muted'
                  }`}>{isRtl ? s.statusAr : s.statusEn}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border-light rounded-xl p-5 card-metallic">
            <h2 className="text-sm font-semibold text-deep-ink mb-4">{isRtl ? 'الإجراءات المطلوبة' : 'Actions Required'}</h2>
            {pendingEvidence === 0 ? (
              <p className="text-xs text-text-muted">{isRtl ? 'لا توجد إجراءات مطلوبة حالياً' : 'No actions required at this time'}</p>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-text-secondary">{isRtl ? `${pendingEvidence} طلب (طلبات) أدلة معلقة` : `${pendingEvidence} pending evidence request(s)`}</p>
                <p className="text-xs text-text-muted">{isRtl ? 'يرجى تقديم المستندات المطلوبة في أقرب وقت ممكن.' : 'Please submit the required documents at your earliest convenience.'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SellerShell>
  );
}
