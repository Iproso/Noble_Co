import { SellerShell } from '@/components/layouts/SellerShell';
import { mockSubmissions } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

const statusStyles: Record<string, string> = {
  draft: 'bg-warm-gray/30 text-text-muted',
  under_review: 'bg-needs-review/10 text-needs-review',
  evidence_requested: 'bg-evidence-moderate/10 text-evidence-moderate',
  approved: 'bg-evidence-strong/10 text-evidence-strong',
  rejected: 'bg-risk-internal/10 text-risk-internal',
};

export default async function ReviewStatusPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <SellerShell locale={locale} title={isRtl ? 'حالة المراجعة' : 'Review Status'}>
      {mockSubmissions.length === 0 ? (
        <div className="bg-soft-parchment rounded-xl p-12 text-center">
          <p className="text-sm text-text-muted">{isRtl ? 'لا توجد تقديمات للمراجعة' : 'No submissions in review'}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockSubmissions.map((sub) => (
            <div key={sub.id} className="bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 transition-all card-metallic shimmer-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-deep-ink">{isRtl ? sub.titleAr : sub.titleEn}</h3>
                  <p className="text-xs text-text-muted mt-1">{isRtl ? 'التصنيف: ' : 'Category: '}{isRtl ? sub.categoryAr : sub.categoryEn}</p>
                </div>
                <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium ${statusStyles[sub.status]}`}>
                  {isRtl ? sub.statusAr : sub.statusEn}
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-border-light">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-soft-parchment rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      sub.status === 'approved' ? 'w-full bg-evidence-strong' :
                      sub.status === 'rejected' ? 'w-full bg-risk-internal' :
                      sub.status === 'evidence_requested' ? 'w-3/4 bg-evidence-moderate' :
                      sub.status === 'under_review' ? 'w-1/2 bg-needs-review' :
                      'w-1/4 bg-warm-gray'
                    }`} />
                  </div>
                  <span className={`text-[0.6rem] font-medium ${
                    sub.status === 'approved' ? 'text-evidence-strong' :
                    sub.status === 'rejected' ? 'text-risk-internal' :
                    'text-text-muted'
                  }`}>
                    {sub.status === 'approved' ? (isRtl ? 'مكتمل' : 'Complete') :
                     sub.status === 'rejected' ? (isRtl ? 'مرفوض' : 'Rejected') :
                     isRtl ? 'قيد التقدم' : 'In Progress'}
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
