import { PublicViewingAvailabilityDTO } from '@/dto';
import { CTAButton } from '@/components/ui';

interface ViewingInspectionPanelProps {
  locale: string;
  viewing: PublicViewingAvailabilityDTO;
  artifactSlug: string;
}

export function ViewingInspectionPanel({ locale, viewing, artifactSlug }: ViewingInspectionPanelProps) {
  const isRtl = locale === 'ar';

  const statusLabel = !viewing.available
    ? (isRtl ? 'غير متاح' : 'Not Available')
    : viewing.appointmentRequired
    ? (isRtl ? 'بموعد فقط' : 'By Appointment Only')
    : (isRtl ? 'متاح الآن' : 'Available Now');

  const statusColor = !viewing.available
    ? 'text-text-muted'
    : 'text-evidence-strong';

  return (
    <div className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
      <h3 className="text-sm font-semibold text-deep-ink uppercase tracking-wider">
        {isRtl ? 'المعاينة والفحص' : 'Viewing & Inspection'}
      </h3>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${viewing.available ? 'bg-evidence-strong' : 'bg-warm-gray'}`} />
          <span className={`text-sm font-medium ${statusColor}`}>
            {statusLabel}
          </span>
        </div>

        {viewing.method && (
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm text-text-secondary">
              {isRtl ? 'الطريقة' : 'Method'}
            </span>
            <span className="text-sm text-deep-ink">{viewing.method}</span>
          </div>
        )}

        {viewing.locationType && (
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm text-text-secondary">
              {isRtl ? 'الموقع' : 'Location'}
            </span>
            <span className="text-sm text-deep-ink">{viewing.locationType}</span>
          </div>
        )}

        {viewing.custodyState && (
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm text-text-secondary">
              {isRtl ? 'حالة الحيازة' : 'Custody'}
            </span>
            <span className="text-sm text-deep-ink">{viewing.custodyState}</span>
          </div>
        )}
      </div>

      {viewing.available && (
        <CTAButton
          locale={locale}
          href={`/${locale}/account/messages?ref=viewing&artifact=${encodeURIComponent(artifactSlug)}`}
          variant="outline"
          className="w-full"
        >
          {isRtl ? 'طلب معاينة خاصة' : 'Request Private Viewing'}
        </CTAButton>
      )}
    </div>
  );
}
