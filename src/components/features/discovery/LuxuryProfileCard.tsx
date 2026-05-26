import type { PublicWatchDTO, PublicJewelryDTO, PublicHandbagDTO, PublicDesignObjectDTO } from '@/dto';

type LuxuryProfile = PublicWatchDTO | PublicJewelryDTO | PublicHandbagDTO | PublicDesignObjectDTO;

interface LuxuryProfileCardProps {
  locale: string;
  type: 'watch' | 'jewelry' | 'handbag' | 'design-object' | 'cultural-heritage';
  profile: LuxuryProfile;
}

function isWatch(p: LuxuryProfile, type: string): p is PublicWatchDTO {
  return type === 'watch';
}

function isJewelry(p: LuxuryProfile, type: string): p is PublicJewelryDTO {
  return type === 'jewelry';
}

function isHandbag(p: LuxuryProfile, type: string): p is PublicHandbagDTO {
  return type === 'handbag';
}

function isDesignObject(p: LuxuryProfile, type: string): p is PublicDesignObjectDTO {
  return type === 'design-object' || type === 'cultural-heritage';
}

export function LuxuryProfileCard({ locale, type, profile }: LuxuryProfileCardProps) {
  const isRtl = locale === 'ar';

  const fieldLabel = (en: string, ar: string) => (isRtl ? ar : en);

  if (isWatch(profile, type)) {
    const fields = [
      { label: fieldLabel('Reference', 'المرجع'), value: profile.reference },
      { label: fieldLabel('Year', 'السنة'), value: profile.year },
      { label: fieldLabel('Material', 'المادة'), value: profile.material },
      { label: fieldLabel('Movement', 'الحركة'), value: profile.movementType },
      { label: fieldLabel('Caliber', 'القطر'), value: profile.caliber },
      { label: fieldLabel('Condition', 'الحالة'), value: profile.condition },
    ].filter((f) => f.value);
    return (
      <div className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
        <h4 className="text-sm font-semibold text-deep-ink uppercase tracking-wider">
          {isRtl ? 'مواصفات الساعة' : 'Watch Specifications'}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {fields.map((f) => (
            <div key={f.label}>
              <span className="text-xs text-text-muted block">{f.label}</span>
              <span className="text-sm text-deep-ink">{f.value}</span>
            </div>
          ))}
        </div>
        {profile.boxPapers && (
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-evidence-strong/10 text-evidence-strong">
            {isRtl ? 'العلبة والأوراق متوفرة' : 'Box & Papers Available'}
          </span>
        )}
        {profile.specialistReviewState === 'approved' && (
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-evidence-moderate/10 text-evidence-moderate ml-2">
            {isRtl ? 'تمت مراجعة الأخصائي' : 'Specialist Reviewed'}
          </span>
        )}
      </div>
    );
  }

  if (isJewelry(profile, type)) {
    return (
      <div className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
        <h4 className="text-sm font-semibold text-deep-ink uppercase tracking-wider">
          {isRtl ? 'مواصفات المجوهرات' : 'Jewelry Specifications'}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-text-muted block">{fieldLabel('Material', 'المادة')}</span>
            <span className="text-sm text-deep-ink">{profile.material}</span>
          </div>
          <div>
            <span className="text-xs text-text-muted block">{fieldLabel('Maison', 'الدار')}</span>
            <span className="text-sm text-deep-ink">{profile.maison}</span>
          </div>
          <div>
            <span className="text-xs text-text-muted block">{fieldLabel('Period', 'الفترة')}</span>
            <span className="text-sm text-deep-ink">{profile.period}</span>
          </div>
          <div>
            <span className="text-xs text-text-muted block">{fieldLabel('Condition', 'الحالة')}</span>
            <span className="text-sm text-deep-ink">{profile.condition}</span>
          </div>
        </div>
        {profile.certificates.length > 0 && (
          <p className="text-xs text-text-secondary">
            {isRtl ? `${profile.certificates.length} شهادة متوفرة` : `${profile.certificates.length} certificate(s) available`}
          </p>
        )}
        {profile.stones.length > 0 && (
          <p className="text-xs text-text-secondary">
            {isRtl ? `${profile.stones.length} حجر كريم موثق` : `${profile.stones.length} stone(s) documented`}
          </p>
        )}
      </div>
    );
  }

  if (isHandbag(profile, type)) {
    const fields = [
      { label: fieldLabel('Maison', 'الدار'), value: profile.maison },
      { label: fieldLabel('Model', 'الموديل'), value: profile.model },
      { label: fieldLabel('Material', 'المادة'), value: profile.material },
      { label: fieldLabel('Hardware', 'الإكسسوارات المعدنية'), value: profile.hardware },
      { label: fieldLabel('Condition', 'الحالة'), value: profile.condition },
    ].filter((f) => f.value);
    return (
      <div className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
        <h4 className="text-sm font-semibold text-deep-ink uppercase tracking-wider">
          {isRtl ? 'مواصفات الحقيبة' : 'Handbag Specifications'}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {fields.map((f) => (
            <div key={f.label}>
              <span className="text-xs text-text-muted block">{f.label}</span>
              <span className="text-sm text-deep-ink">{f.value}</span>
            </div>
          ))}
        </div>
        {profile.accessories.length > 0 && (
          <div>
            <span className="text-xs text-text-muted block mb-1">
              {isRtl ? 'الملحقات' : 'Accessories'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {profile.accessories.map((acc: string, i: number) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-soft-parchment text-text-secondary">
                  {acc}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (isDesignObject(profile, type)) {
    const fields = [
      { label: fieldLabel('Designer', 'المصمم'), value: profile.designer },
      { label: fieldLabel('Period', 'الفترة'), value: profile.period },
      { label: fieldLabel('Material', 'المادة'), value: profile.material },
      { label: fieldLabel('Dimensions', 'الأبعاد'), value: profile.dimensions },
      { label: fieldLabel('Condition', 'الحالة'), value: profile.condition },
    ].filter((f) => f.value);
    return (
      <div className="bg-bg-card rounded-xl border border-border-light p-6 space-y-4 card-metallic">
        <h4 className="text-sm font-semibold text-deep-ink uppercase tracking-wider">
          {isRtl ? 'مواصفات القطعة' : 'Object Specifications'}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {fields.map((f) => (
            <div key={f.label}>
              <span className="text-xs text-text-muted block">{f.label}</span>
              <span className="text-sm text-deep-ink">{f.value}</span>
            </div>
          ))}
        </div>
        {profile.specialistReviewState === 'approved' && (
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-evidence-moderate/10 text-evidence-moderate">
            {isRtl ? 'تمت مراجعة الأخصائي' : 'Specialist Reviewed'}
          </span>
        )}
      </div>
    );
  }

  return null;
}
