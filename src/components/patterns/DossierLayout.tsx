'use client';

import { ReactNode } from 'react';

interface DossierSection {
  id: string;
  title: string;
  titleAr: string;
}

interface DossierLayoutProps {
  locale: string;
  sections: DossierSection[];
  activeSection: string;
  onSectionChange: (id: string) => void;
  header: ReactNode;
  content: ReactNode;
  sidebar?: ReactNode;
}

export function DossierLayout({
  locale,
  sections,
  activeSection,
  onSectionChange,
  header,
  content,
  sidebar,
}: DossierLayoutProps) {
  const isRtl = locale === 'ar';
  const t = (item: { title: string; titleAr: string }) =>
    isRtl ? item.titleAr : item.title;

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="border-b border-warm-gray">{header}</div>
      <div className="container-noble flex gap-8 py-8">
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="space-y-1 sticky top-24">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-soft-parchment text-deep-ink font-medium'
                    : 'text-text-secondary hover:text-deep-ink'
                }`}
              >
                {t(section)}
              </button>
            ))}
          </nav>
        </aside>
        <div className="flex-1 min-w-0">
          <div className="max-w-3xl">{content}</div>
        </div>
        {sidebar && (
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24">{sidebar}</div>
          </aside>
        )}
      </div>
    </div>
  );
}
