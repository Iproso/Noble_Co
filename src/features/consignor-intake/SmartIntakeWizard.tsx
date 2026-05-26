'use client';

import { useState, useCallback } from 'react';
import { WizardLayout } from '@/components/patterns/WizardLayout';
import { EvidenceChecklist } from './EvidenceChecklist';
import { MediaUploader } from '@/components/media/MediaUploader';
import { IntakeSteps, IntakeStepLabels } from './schemas';
import type { IntakeStep } from './schemas';

interface SmartIntakeWizardProps {
  locale: string;
}

const categories = [
  { id: 'cultural-assets', en: 'Cultural Assets', ar: 'الأصول الثقافية' },
  { id: 'fine-art', en: 'Fine Art & Visual Culture', ar: 'الفنون الجميلة والثقافة البصرية' },
  { id: 'decorative-arts', en: 'Decorative Arts & Design', ar: 'الفنون الزخرفية والتصميم' },
  { id: 'watches', en: 'Watches', ar: 'الساعات' },
  { id: 'jewelry-gemstones', en: 'Jewelry & Gemstones', ar: 'المجوهرات والأحجار الكريمة' },
  { id: 'handbags-trunks', en: 'Handbags & Trunks', ar: 'حقائب اليد والصناديق' },
  { id: 'design-objects', en: 'Design Objects', ar: 'قطع التصميم' },
  { id: 'modern-collectibles', en: 'Modern Collectibles', ar: 'المقتنيات الحديثة' },
  { id: 'memorabilia', en: 'Collector Memorabilia', ar: 'تذكارات الجامعين' },
  { id: 'science-natural-history', en: 'Science & Natural History', ar: 'العلوم والتاريخ الطبيعي' },
  { id: 'numismatics-philately', en: 'Numismatics & Philately', ar: 'المسكوكات والطوابع' },
  { id: 'mobility-ultra-assets', en: 'Mobility & Ultra-Assets', ar: 'السيارات الفائقة والأصول الفاخرة' },
];

export function SmartIntakeWizard({ locale }: SmartIntakeWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [draftId, setDraftId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const isRtl = locale === 'ar';

  const steps = IntakeSteps.map((id) => ({
    id,
    title: IntakeStepLabels[id].en,
    titleAr: IntakeStepLabels[id].ar,
  }));

  const saveDraft = useCallback(async () => {
    const response = await fetch('/api/v1/submissions/draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        draftId,
        data: formData,
        currentStep,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      setDraftId(result.id);
    }
  }, [draftId, formData, currentStep]);

  const renderStep = () => {
    const stepId = IntakeSteps[currentStep] as IntakeStep;

    switch (stepId) {
      case 'purpose':
        return (
          <div className="space-y-4">
            <h2 className="heading-3 text-deep-ink">
              {isRtl ? 'ما هو غرضك؟' : 'What is your purpose?'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { value: 'sell', en: 'Sell', ar: 'بيع' },
                { value: 'consign', en: 'Consign', ar: 'إيداع' },
                { value: 'appraise', en: 'Appraisal Request', ar: 'طلب تقييم' },
                { value: 'research', en: 'Research / Information', ar: 'بحث / معلومات' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, purpose: option.value }))}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.purpose === option.value
                      ? 'border-antique-gold bg-antique-gold/5'
                      : 'border-border-light bg-bg-card hover:border-antique-gold/30'
                  }`}
                >
                  <span className="text-sm font-medium text-deep-ink">
                    {isRtl ? option.ar : option.en}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'category':
        return (
          <div className="space-y-4">
            <h2 className="heading-3 text-deep-ink">
              {isRtl ? 'اختر الفئة' : 'Select Category'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, categoryId: cat.id }))}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.categoryId === cat.id
                      ? 'border-antique-gold bg-antique-gold/5'
                      : 'border-border-light bg-bg-card hover:border-antique-gold/30'
                  }`}
                >
                  <span className="text-sm font-medium text-deep-ink">
                    {isRtl ? cat.ar : cat.en}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'media':
        return (
          <div className="space-y-4">
            <h2 className="heading-3 text-deep-ink">
              {isRtl ? 'الصور والوسائط' : 'Photos & Media'}
            </h2>
            <p className="text-sm text-text-secondary">
              {isRtl
                ? 'قم بتحميل صور واضحة للقطعة من زوايا متعددة.'
                : 'Upload clear photos of the object from multiple angles.'}
            </p>
            <MediaUploader
              locale={locale}
              assetId={draftId || 'temp'}
              multiple
            />
          </div>
        );

      case 'object_facts':
        return (
          <div className="space-y-4">
            <h2 className="heading-3 text-deep-ink">
              {isRtl ? 'بيانات القطعة' : 'Object Facts'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-deep-ink mb-1">
                  {isRtl ? 'العنوان' : 'Title'} *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-warm-white border border-border-light rounded-lg text-sm focus:outline-none focus:border-antique-gold"
                  placeholder={isRtl ? 'أدخل عنوان القطعة' : 'Enter object title'}
                  value={(formData.titleEn as string) || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, titleEn: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm text-deep-ink mb-1">
                  {isRtl ? 'العنوان (عربي)' : 'Title (Arabic)'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-warm-white border border-border-light rounded-lg text-sm focus:outline-none focus:border-antique-gold"
                  dir="rtl"
                  value={(formData.titleAr as string) || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, titleAr: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-deep-ink mb-1">
                    {isRtl ? 'السنة/الفترة' : 'Year/Period'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 bg-warm-white border border-border-light rounded-lg text-sm focus:outline-none focus:border-antique-gold"
                    value={(formData.yearPeriod as string) || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, yearPeriod: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm text-deep-ink mb-1">
                    {isRtl ? 'الدار/الصانع' : 'Maison/Maker'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 bg-warm-white border border-border-light rounded-lg text-sm focus:outline-none focus:border-antique-gold"
                    value={(formData.maison as string) || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, maison: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'declaration':
        return (
          <div className="space-y-4">
            <h2 className="heading-3 text-deep-ink">
              {isRtl ? 'الإقرار' : 'Declaration'}
            </h2>
            <div className="space-y-3">
              {[
                {
                  key: 'ownership',
                  en: 'I confirm that I am the lawful owner of this object or authorized to submit it.',
                  ar: 'أؤكد أنني المالك القانوني لهذه القطعة أو مخول بتقديمها.',
                },
                {
                  key: 'accuracy',
                  en: 'I confirm that all information provided is accurate to the best of my knowledge.',
                  ar: 'أؤكد أن جميع المعلومات المقدمة دقيقة حسب معرفتي.',
                },
                {
                  key: 'provenance',
                  en: 'I confirm the provenance information provided is truthful.',
                  ar: 'أؤكد أن معلومات المصدر المقدمة صادقة.',
                },
              ].map((declaration) => (
                <label
                  key={declaration.key}
                  className="flex items-start gap-3 p-4 bg-soft-parchment rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-antique-gold"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        declarations: [
                          ...((prev.declarations as Array<Record<string, unknown>>) || []),
                          { type: declaration.key, accepted: e.target.checked },
                        ],
                      }));
                    }}
                  />
                  <span className="text-sm text-text-secondary">
                    {isRtl ? declaration.ar : declaration.en}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'review':
        return (
          <div className="space-y-6">
            <h2 className="heading-3 text-deep-ink">
              {isRtl ? 'مراجعة وتقديم' : 'Review & Submit'}
            </h2>
            <EvidenceChecklist
              locale={locale}
              items={[
                { key: 'purpose', label: 'Purpose selected', labelAr: 'الغرض محدد', required: true, completed: !!formData.purpose },
                { key: 'category', label: 'Category selected', labelAr: 'الفئة محددة', required: true, completed: !!formData.categoryId },
                { key: 'title', label: 'Title provided', labelAr: 'العنوان مزود', required: true, completed: !!formData.titleEn },
                { key: 'photos', label: 'Photos uploaded', labelAr: 'الصور مرفوعة', required: true, completed: true },
                { key: 'declarations', label: 'Declarations accepted', labelAr: 'الإقرارات مقبولة', required: true, completed: true },
              ]}
            />
          </div>
        );

      default:
        return (
          <div className="text-sm text-text-muted">
            {isRtl ? 'يرجى إكمال الخطوات السابقة' : 'Please complete previous steps'}
          </div>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <WizardLayout
        locale={locale}
        steps={steps}
        currentStep={currentStep}
      >
        {renderStep()}

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-light">
          <button
            type="button"
            onClick={() => {
              if (currentStep > 0) setCurrentStep((prev) => prev - 1);
            }}
            disabled={currentStep === 0}
            className="px-4 py-2 text-sm text-text-secondary hover:text-deep-ink disabled:opacity-30 transition-colors"
          >
            {isRtl ? 'السابق' : 'Previous'}
          </button>

          <button
            type="button"
            onClick={saveDraft}
            className="px-4 py-2 text-sm text-text-muted hover:text-deep-ink transition-colors"
          >
            {isRtl ? 'حفظ كمسودة' : 'Save Draft'}
          </button>

          <button
            type="button"
            onClick={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep((prev) => prev + 1);
                saveDraft();
              }
            }}
            className="px-6 py-2.5 text-sm font-medium rounded-lg bg-charcoal text-warm-white hover:bg-surface-hover transition-colors"
          >
            {currentStep === steps.length - 1
              ? (isRtl ? 'تقديم' : 'Submit')
              : (isRtl ? 'التالي' : 'Next')}
          </button>
        </div>
      </WizardLayout>
    </div>
  );
}
