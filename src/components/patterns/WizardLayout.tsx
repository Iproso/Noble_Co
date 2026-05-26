'use client';

import { ReactNode } from 'react';

interface WizardStep {
  id: string;
  title: string;
  titleAr: string;
}

interface WizardLayoutProps {
  locale: string;
  steps: WizardStep[];
  currentStep: number;
  children: ReactNode;
}

export function WizardLayout({
  locale,
  steps,
  currentStep,
  children,
}: WizardLayoutProps) {
  const isRtl = locale === 'ar';
  const t = (item: { title: string; titleAr: string }) =>
    isRtl ? item.titleAr : item.title;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-2 shrink-0">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                index <= currentStep
                  ? 'bg-antique-gold text-warm-white'
                  : 'bg-warm-gray text-text-muted'
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`text-sm whitespace-nowrap ${
                index <= currentStep
                  ? 'text-deep-ink font-medium'
                  : 'text-text-muted'
              }`}
            >
              {t(step)}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-8 h-px ${
                  index < currentStep ? 'bg-antique-gold' : 'bg-warm-gray'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="animate-fade-in">{children}</div>
    </div>
  );
}
