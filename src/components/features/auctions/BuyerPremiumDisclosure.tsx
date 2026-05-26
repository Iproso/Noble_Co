interface BuyerPremiumDisclosureProps { locale: string; }

export function BuyerPremiumDisclosure({ locale }: BuyerPremiumDisclosureProps) {
  const isRtl = locale === 'ar';
  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-5 card-metallic">
      <h3 className="text-sm font-semibold text-deep-ink mb-2">{isRtl ? 'رسوم المشتري الإضافية' : "Buyer's Premium"}</h3>
      <div className="space-y-1 text-xs text-text-secondary">
        <p>{isRtl ? '15% على أول 50,000 من سعر المطرقة' : "15% on the first 50,000 of the hammer price"}</p>
        <p>{isRtl ? '12% على المبلغ الذي يتجاوز 50,000' : '12% on the excess over 50,000'}</p>
        <p className="text-text-muted mt-2">{isRtl ? 'تنطبق ضريبة القيمة المضافة حسب المعدل السائد. يتم تأكيد الرسوم النهائية عند نقطة البيع.' : 'VAT applies at the prevailing rate. Final costs confirmed at point of sale.'}</p>
      </div>
    </div>
  );
}
