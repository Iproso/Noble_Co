import { SellerShell } from '@/components/layouts/SellerShell';
import { mockSalePaths } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function SalePathPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <SellerShell locale={locale} title={isRtl ? 'مسار البيع' : 'Sale Path'}>
      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          {isRtl ? 'بناءً على تقييمنا، إليك مسارات البيع الموصى بها لقطعك:' : 'Based on our evaluation, here are recommended sale paths for your items:'}
        </p>
        <div className="grid gap-4">
          {mockSalePaths.map((path) => (
            <div key={path.id} className="bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 transition-all card-metallic shimmer-hover">
              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0">{path.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-deep-ink">{isRtl ? path.titleAr : path.titleEn}</h3>
                    <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-antique-gold/10 text-antique-gold font-medium">
                      {isRtl ? `${path.matchScore}% توافق` : `${path.matchScore}% match`}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-2">{isRtl ? path.descriptionAr : path.descriptionEn}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border-light">
                <button className="text-[0.65rem] px-3 py-1.5 bg-soft-parchment text-deep-ink rounded-lg font-medium hover:bg-warm-gray/30 transition-colors">
                  {isRtl ? 'عرض التفاصيل' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SellerShell>
  );
}
