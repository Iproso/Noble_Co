'use client';

import { ReactNode } from 'react';

interface SalonLayoutProps {
  locale: string;
  header: ReactNode;
  featured: ReactNode;
  grid: ReactNode;
  sidebar?: ReactNode;
}

export function SalonLayout({
  locale,
  header,
  featured,
  grid,
  sidebar,
}: SalonLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="border-b border-warm-gray">{header}</div>
      <div className="container-noble py-8 space-y-12">
        <section className="editorial-section">{featured}</section>
        <section>
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="card-grid">{grid}</div>
            </div>
            {sidebar && (
              <aside className="hidden xl:block w-80 shrink-0">
                <div className="sticky top-24 space-y-6">{sidebar}</div>
              </aside>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
