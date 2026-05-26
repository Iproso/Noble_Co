'use client';

import { useState } from 'react';

interface MediaItem {
  url: string;
  thumbnailUrl?: string;
  alt: string;
  altAr?: string;
  type: string;
}

interface MediaGalleryProps {
  locale: string;
  items: MediaItem[];
}

export function MediaGallery({ locale, items }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isRtl = locale === 'ar';

  if (!items.length) return null;

  const selected = items[selectedIndex];
  const alt = isRtl && selected.altAr ? selected.altAr : selected.alt;

  return (
    <div className="space-y-3">
      <div
        className="aspect-[4/3] bg-soft-parchment rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={selected.url}
          alt={alt}
          className="w-full h-full object-contain hover:scale-[1.01] transition-transform"
        />
      </div>

      {items.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {items.map((item, i) => {
            const thumbAlt = isRtl && item.altAr ? item.altAr : item.alt;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  i === selectedIndex
                    ? 'border-antique-gold opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={item.thumbnailUrl || item.url}
                  alt={thumbAlt}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-overlay/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            onKeyDown={(e) => { if (e.key === 'Escape') setLightboxOpen(false); }}
            className="absolute top-4 end-4 text-warm-white text-2xl"
            aria-label={isRtl ? 'إغلاق' : 'Close'}
          >
            ✕
          </button>
          <img
            src={selected.url}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
