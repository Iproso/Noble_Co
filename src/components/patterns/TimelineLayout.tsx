'use client';

import { ReactNode } from 'react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
}

interface TimelineLayoutProps {
  locale: string;
  events: TimelineEvent[];
  renderEvent?: (event: TimelineEvent) => ReactNode;
}

export function TimelineLayout({
  locale,
  events,
  renderEvent,
}: TimelineLayoutProps) {
  const isRtl = locale === 'ar';
  const t = (item: { title: string; titleAr: string; description?: string; descriptionAr?: string }) =>
    isRtl
      ? { title: item.titleAr, description: item.descriptionAr }
      : { title: item.title, description: item.description };

  return (
    <div className="relative">
      <div
        className={`absolute top-0 bottom-0 w-px bg-warm-gray ${
          isRtl ? 'right-4' : 'left-4'
        }`}
      />
      <div className="space-y-8">
        {events.map((event) => {
          const translated = t(event);
          return (
            <div
              key={event.id}
              className={`relative pl-10 ${isRtl ? 'pr-10 pl-0' : 'pl-10'}`}
            >
              <div
                className={`absolute top-1 w-2.5 h-2.5 rounded-full bg-antique-gold border-2 border-warm-white ${
                  isRtl ? 'right-2.5' : 'left-2.5'
                }`}
              />
              <time className="text-xs text-text-muted">{event.date}</time>
              <h4 className="text-sm font-medium text-deep-ink mt-1">
                {translated.title}
              </h4>
              {translated.description && (
                <p className="text-sm text-text-secondary mt-1">
                  {translated.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
