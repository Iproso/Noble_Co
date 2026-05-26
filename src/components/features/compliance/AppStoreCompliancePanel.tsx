'use client';

import { useState, useEffect } from 'react';
import type { ComplianceCheckItem } from '@/native-bridge/appStoreComplianceAdapter';

interface AppStoreCompliancePanelProps {
  locale: string;
}

export function AppStoreCompliancePanel({ locale }: AppStoreCompliancePanelProps) {
  const [checklist, setChecklist] = useState<ComplianceCheckItem[]>([]);
  const isRtl = locale === 'ar';

  useEffect(() => {
    import('@/native-bridge/appStoreComplianceAdapter').then((m) => {
      setChecklist(m.appStoreComplianceAdapter.getComplianceChecklist());
    });
  }, []);

  const passed = checklist.filter((i) => i.status === 'passed').length;
  const total = checklist.filter((i) => i.required).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-bg-card rounded-xl border border-border-light p-4 card-metallic text-center">
          <div className="text-2xl font-bold text-evidence-strong">{passed}</div>
          <div className="text-xs text-text-muted mt-1">{isRtl ? 'تم' : 'Passed'}</div>
        </div>
        <div className="bg-bg-card rounded-xl border border-border-light p-4 card-metallic text-center">
          <div className="text-2xl font-bold text-evidence-moderate">{total - passed}</div>
          <div className="text-xs text-text-muted mt-1">{isRtl ? 'معلق' : 'Pending'}</div>
        </div>
        <div className="bg-bg-card rounded-xl border border-border-light p-4 card-metallic text-center">
          <div className="text-2xl font-bold text-deep-ink">{total}</div>
          <div className="text-xs text-text-muted mt-1">{isRtl ? 'الإجمالي المطلوب' : 'Total Required'}</div>
        </div>
      </div>

      <div className="bg-bg-card border border-border-light rounded-xl card-metallic">
        {checklist.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-5 py-3 border-b border-border-light last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full shrink-0 ${
                item.status === 'passed' ? 'bg-evidence-strong' :
                item.status === 'failed' ? 'bg-risk-internal' : 'bg-evidence-moderate'
              }`} />
              <span className="text-sm text-deep-ink">{item.title}</span>
              {!item.required && (
                <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full bg-warm-gray/30 text-text-muted">
                  {isRtl ? 'اختياري' : 'Optional'}
                </span>
              )}
            </div>
            <span className={`text-xs font-medium ${
              item.status === 'passed' ? 'text-evidence-strong' :
              item.status === 'failed' ? 'text-risk-internal' : 'text-evidence-moderate'
            }`}>
              {item.status === 'passed' ? (isRtl ? 'تم' : 'Passed') :
               item.status === 'failed' ? (isRtl ? 'فشل' : 'Failed') :
               (isRtl ? 'معلق' : 'Pending')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
