import { notFound } from 'next/navigation';
import { SellerShell } from '@/components/layouts/SellerShell';
import { mockSubmissions, mockReviewTimeline } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string; id: string }> };

const statusStyles: Record<string, string> = {
  draft: 'bg-warm-gray/30 text-text-muted',
  under_review: 'bg-needs-review/10 text-needs-review',
  evidence_requested: 'bg-evidence-moderate/10 text-evidence-moderate',
  approved: 'bg-evidence-strong/10 text-evidence-strong',
  rejected: 'bg-risk-internal/10 text-risk-internal',
};

const timelineDots: Record<string, string> = {
  completed: 'bg-evidence-strong',
  current: 'bg-antique-gold ring-2 ring-antique-gold/30',
  pending: 'bg-warm-gray',
};

export default async function SubmissionDetailPage({ params }: Props) {
  const { locale, id } = await params;
  const isRtl = locale === 'ar';

  const submission = mockSubmissions.find((s) => s.id === id);
  if (!submission) notFound();

  return (
    <SellerShell locale={locale} title={isRtl ? 'تفاصيل التقديم' : 'Submission Details'}>
      <div className="space-y-6">
        <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold text-deep-ink">{isRtl ? submission.titleAr : submission.titleEn}</h2>
              <p className="text-xs text-text-muted mt-1">{isRtl ? 'التصنيف: ' : 'Category: '}{isRtl ? submission.categoryAr : submission.categoryEn}</p>
            </div>
            <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium ${statusStyles[submission.status]}`}>
              {isRtl ? submission.statusAr : submission.statusEn}
            </span>
          </div>
          {submission.estimateEn && (
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border-light">
              <div>
                <p className="text-[0.6rem] text-text-muted uppercase tracking-wide">{isRtl ? 'التقدير' : 'Estimate'}</p>
                <p className="text-sm font-medium text-deep-ink mt-0.5">{isRtl ? submission.estimateAr : submission.estimateEn}</p>
              </div>
              <div>
                <p className="text-[0.6rem] text-text-muted uppercase tracking-wide">{isRtl ? 'تاريخ التقديم' : 'Submitted'}</p>
                <p className="text-sm font-medium text-deep-ink mt-0.5">{submission.submittedAt}</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-bg-card border border-border-light rounded-xl p-6 card-metallic">
          <h3 className="text-sm font-semibold text-deep-ink mb-4">{isRtl ? 'حالة المراجعة' : 'Review Timeline'}</h3>
          <div className="space-y-0">
            {mockReviewTimeline.map((step, i) => (
              <div key={step.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${timelineDots[step.status]}`} />
                  {i < mockReviewTimeline.length - 1 && <div className="w-px flex-1 bg-border-light" />}
                </div>
                <div className="pb-6 last:pb-0">
                  <p className={`text-xs font-medium ${step.status === 'current' ? 'text-antique-gold' : 'text-deep-ink'}`}>
                    {isRtl ? step.stepAr : step.stepEn}
                  </p>
                  {step.dateEn && (
                    <p className="text-[0.6rem] text-text-muted">{isRtl ? step.dateAr : step.dateEn}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SellerShell>
  );
}
