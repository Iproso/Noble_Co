import { PublicCostClarityDTO } from '@/dto';

interface CostClarityPanelProps {
  locale: string;
  costClarity: PublicCostClarityDTO;
}

export function CostClarityPanel({ locale, costClarity }: CostClarityPanelProps) {
  const isRtl = locale === 'ar';

  const rows = [
    { label: 'Price', labelAr: 'السعر', value: costClarity.priceState },
    { label: 'Buyer\'s Premium', labelAr: 'عمولة المشتري', value: costClarity.buyerPremium },
    { label: 'VAT', labelAr: 'ضريبة القيمة المضافة', value: costClarity.vatNote },
    { label: 'Service Fee', labelAr: 'رسوم الخدمة', value: costClarity.serviceFeeNote },
    { label: 'Shipping', labelAr: 'الشحن', value: costClarity.shippingNote },
    { label: 'Estimated Total', labelAr: 'المجموع التقديري', value: costClarity.estimatedTotal },
  ].filter((r) => r.value);

  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
      <h3 className="text-sm font-semibold text-deep-ink uppercase tracking-wider">
        {isRtl ? 'وضوح التكلفة' : 'Cost Clarity'}
      </h3>
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4">
            <span className="text-sm text-text-secondary shrink-0">
              {isRtl ? row.labelAr : row.label}
            </span>
            <span className="text-sm text-deep-ink text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>
      {costClarity.disclaimer && (
        <p className="text-xs text-text-muted pt-2 border-t border-border-light">
          {costClarity.disclaimer}
        </p>
      )}
    </div>
  );
}
