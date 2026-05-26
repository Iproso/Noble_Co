// Risk flags — internal and public-safe variants

export type RiskFlagSeverity = 'info' | 'warning' | 'critical';

export interface RiskFlag {
  code: string;
  severity: RiskFlagSeverity;
  labelEn: string;
  labelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  isPublic: boolean;
}

export const RISK_FLAGS: RiskFlag[] = [
  {
    code: 'incomplete_provenance',
    severity: 'warning',
    labelEn: 'Incomplete Provenance',
    labelAr: 'مصدر غير مكتمل',
    descriptionEn: 'Provenance documentation is incomplete or missing key periods.',
    descriptionAr: 'وثائق المصدر غير مكتملة أو تفتقد فترات رئيسية.',
    isPublic: true,
  },
  {
    code: 'requires_specialist',
    severity: 'info',
    labelEn: 'Specialist Review Required',
    labelAr: 'مراجعة أخصائي مطلوبة',
    descriptionEn: 'This category requires specialist review.',
    descriptionAr: 'تتطلب هذه الفئة مراجعة أخصائي.',
    isPublic: true,
  },
  {
    code: 'high_risk_category',
    severity: 'warning',
    labelEn: 'High Risk Category',
    labelAr: 'فئة عالية المخاطر',
    descriptionEn: 'This category requires enhanced due diligence.',
    descriptionAr: 'تتطلب هذه الفئة العناية الواجبة المعززة.',
    isPublic: false,
  },
  {
    code: 'legal_review_required',
    severity: 'critical',
    labelEn: 'Legal Review Required',
    labelAr: 'مراجعة قانونية مطلوبة',
    descriptionEn: 'This object requires legal/compliance review before any transaction.',
    descriptionAr: 'تتطلب هذه القطعة مراجعة قانونية/امتثال قبل أي معاملة.',
    isPublic: false,
  },
  {
    code: 'cultural_property_concern',
    severity: 'critical',
    labelEn: 'Cultural Property Review Required',
    labelAr: 'مراجعة الممتلكات الثقافية مطلوبة',
    descriptionEn: 'Export/import restrictions or cultural property concerns flagged.',
    descriptionAr: 'تم وضع علامة على قيود التصدير/الاستيراد أو مخاوف تتعلق بالممتلكات الثقافية.',
    isPublic: false,
  },
  {
    code: 'missing_evidence',
    severity: 'warning',
    labelEn: 'Missing Key Evidence',
    labelAr: 'أدلة رئيسية مفقودة',
    descriptionEn: 'Essential evidence items are missing for this category.',
    descriptionAr: 'عناصر الأدلة الأساسية مفقودة لهذه الفئة.',
    isPublic: true,
  },
  {
    code: 'sanctions_review',
    severity: 'critical',
    labelEn: 'Sanctions Review Required',
    labelAr: 'مراجعة العقوبات مطلوبة',
    descriptionEn: 'This object or party requires sanctions screening.',
    descriptionAr: 'تتطلب هذه القطعة أو الطرف فحص العقوبات.',
    isPublic: false,
  },
  {
    code: 'condition_concern',
    severity: 'info',
    labelEn: 'Condition Note',
    labelAr: 'ملاحظة حالة',
    descriptionEn: 'Significant condition or restoration noted.',
    descriptionAr: 'تمت ملاحظة حالة أو ترميم مهم.',
    isPublic: true,
  },
];

export function getRiskFlagsBySeverity(severity: RiskFlagSeverity): RiskFlag[] {
  return RISK_FLAGS.filter((f) => f.severity === severity);
}

export function getPublicRiskFlags(): RiskFlag[] {
  return RISK_FLAGS.filter((f) => f.isPublic);
}

export function getRiskFlagColor(severity: RiskFlagSeverity): string {
  const colors: Record<RiskFlagSeverity, string> = {
    info: 'bg-needs-review/10 text-needs-review border-needs-review/20',
    warning: 'bg-evidence-moderate/10 text-evidence-moderate border-evidence-moderate/20',
    critical: 'bg-risk-internal/10 text-risk-internal border-risk-internal/20',
  };
  return colors[severity];
}
