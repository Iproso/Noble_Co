import { z } from 'zod';

export const IntakeSteps = [
  'purpose',
  'category',
  'media',
  'object_facts',
  'history_provenance',
  'condition_restoration',
  'documents',
  'declaration',
  'review',
] as const;

export type IntakeStep = typeof IntakeSteps[number];

export const IntakeStepLabels: Record<IntakeStep, { en: string; ar: string }> = {
  purpose: { en: 'Purpose', ar: 'الغرض' },
  category: { en: 'Category', ar: 'الفئة' },
  media: { en: 'Photos & Media', ar: 'الصور والوسائط' },
  object_facts: { en: 'Object Facts', ar: 'بيانات القطعة' },
  history_provenance: { en: 'History & Provenance', ar: 'التاريخ والمصدر' },
  condition_restoration: { en: 'Condition & Restoration', ar: 'الحالة والترميم' },
  documents: { en: 'Documents', ar: 'المستندات' },
  declaration: { en: 'Declaration', ar: 'الإقرار' },
  review: { en: 'Review & Submit', ar: 'المراجعة والتقديم' },
};

// Category-specific metadata schemas
export const WatchMetadataSchema = z.object({
  reference: z.string().optional(),
  year: z.string().optional(),
  material: z.string().optional(),
  movementType: z.string().optional(),
  caliber: z.string().optional(),
  condition: z.string().optional(),
  boxPapers: z.boolean().optional(),
  serviceHistory: z.string().optional(),
});

export const JewelryMetadataSchema = z.object({
  material: z.string().optional(),
  stones: z.array(z.object({
    type: z.string().optional(),
    carat: z.string().optional(),
    quantity: z.number().optional(),
  })).optional(),
  certificates: z.array(z.string()).optional(),
  maison: z.string().optional(),
  period: z.string().optional(),
  condition: z.string().optional(),
});

export const HandbagMetadataSchema = z.object({
  maison: z.string().optional(),
  model: z.string().optional(),
  material: z.string().optional(),
  hardware: z.string().optional(),
  condition: z.string().optional(),
  accessories: z.array(z.string()).optional(),
  receiptProvenance: z.string().optional(),
});

export const DesignObjectMetadataSchema = z.object({
  designer: z.string().optional(),
  period: z.string().optional(),
  material: z.string().optional(),
  dimensions: z.string().optional(),
  condition: z.string().optional(),
  restoration: z.string().optional(),
});

export const CulturalAssetMetadataSchema = z.object({
  culture: z.string().optional(),
  period: z.string().optional(),
  material: z.string().optional(),
  dimensions: z.string().optional(),
  provenance: z.string().optional(),
  legalStatus: z.string().optional(),
});

// Main intake form schema
export const IntakeFormSchema = z.object({
  purpose: z.enum(['sell', 'consign', 'appraise', 'donate', 'research']),
  categoryId: z.string().min(1, 'Category is required'),
  subcategoryId: z.string().optional(),
  titleEn: z.string().min(1, 'Title is required'),
  titleAr: z.string().optional(),
  descriptionEn: z.string().optional(),
  descriptionAr: z.string().optional(),
  yearPeriod: z.string().optional(),
  maison: z.string().optional(),
  maker: z.string().optional(),
  provenanceSummary: z.string().optional(),
  conditionSummary: z.string().optional(),
  categoryMetadata: z.record(z.string(), z.any()).optional(),
  declarations: z.array(z.object({
    type: z.string(),
    accepted: z.boolean(),
  })).optional(),
});

export type IntakeFormData = z.infer<typeof IntakeFormSchema>;

export function getCategoryMetadataSchema(categorySlug: string) {
  const schemas: Record<string, z.ZodTypeAny> = {
    watches: WatchMetadataSchema,
    jewelry: JewelryMetadataSchema,
    'jewelry-gemstones': JewelryMetadataSchema,
    handbags: HandbagMetadataSchema,
    'handbags-trunks': HandbagMetadataSchema,
    'design-objects': DesignObjectMetadataSchema,
    'cultural-assets': CulturalAssetMetadataSchema,
  };
  return schemas[categorySlug] ?? z.record(z.string(), z.any()).optional();
}
