import { SellerShell } from '@/components/layouts/SellerShell';
import { mockOffers } from '@/lib/mock/seller-data';

type Props = { params: Promise<{ locale: string }> };

export default async function OffersPage({ params }: Props) {
  const { locale } = await params;
  const isRtl = locale === 'ar';

  return (
    <SellerShell locale={locale} title={isRtl ? 'العروض' : 'Offers'}>
      {mockOffers.length === 0 ? (
        <div className="bg-soft-parchment rounded-xl p-12 text-center">
          <p className="text-sm text-text-muted">{isRtl ? 'لا توجد عروض حالياً' : 'No offers at this time'}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOffers.map((offer) => (
            <div key={offer.id} className="bg-bg-card border border-border-light rounded-xl p-5 hover:border-antique-gold/30 transition-all card-metallic shimmer-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-deep-ink">{isRtl ? offer.titleAr : offer.titleEn}</h3>
                  <p className="text-lg font-bold text-antique-gold mt-1">{isRtl ? offer.amountAr : offer.amountEn}</p>
                  <div className="flex gap-4 mt-2">
                    <p className="text-[0.6rem] text-text-muted">{isRtl ? 'النوع: ' : 'Type: '}{isRtl ? offer.typeAr : offer.typeEn}</p>
                    <p className="text-[0.6rem] text-text-muted">{isRtl ? 'تاريخ الاستلام: ' : 'Received: '}{offer.receivedAt}</p>
                  </div>
                  <p className="text-[0.6rem] text-text-muted">{isRtl ? 'ينتهي في: ' : 'Expires: '}{offer.expiresAt}</p>
                </div>
                <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium ${
                  offer.statusEn === 'Pending' ? 'bg-evidence-moderate/10 text-evidence-moderate' : 'bg-evidence-strong/10 text-evidence-strong'
                }`}>
                  {isRtl ? offer.statusAr : offer.statusEn}
                </span>
              </div>
              {offer.statusEn === 'Pending' && (
                <div className="flex gap-2 mt-3 pt-3 border-t border-border-light">
                  <button className="text-[0.65rem] px-3 py-1.5 bg-charcoal text-warm-white rounded-lg font-medium hover:bg-charcoal transition-colors">
                    {isRtl ? 'قبول' : 'Accept'}
                  </button>
                  <button className="text-[0.65rem] px-3 py-1.5 border border-border-light text-text-secondary rounded-lg font-medium hover:bg-soft-parchment transition-colors">
                    {isRtl ? 'رفض' : 'Decline'}
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
