'use client';

import dynamic from 'next/dynamic';
import { useRef, useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';

const GlobeCanvas = dynamic(() => import('./GlobeCanvas').then((m) => m.GlobeCanvas), {
  ssr: false,
  loading: () => null,
});

interface GlobeHeroProps {
  title: string;
  tagline: string;
  exploreLabel: string;
  salonLabel: string;
  exploreHref: string;
  salonHref: string;
}

export function GlobeHero({
  title,
  tagline,
  exploreLabel,
  salonLabel,
  exploreHref,
  salonHref,
}: GlobeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGlobeReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Globe canvas */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          globeReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <GlobeCanvas />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-bg-primary/40 pointer-events-none" />

      {/* Content overlay */}
      <div className="relative z-10 container-noble py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1
            className="heading-1 rose-gold-text"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
          />
          <p className="body-large text-text-secondary max-w-xl mx-auto">
            {tagline}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
            <a
              href={exploreHref}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-charcoal text-warm-white hover:bg-charcoal transition-colors"
            >
              {exploreLabel}
            </a>
            <a
              href={salonHref}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-warm-white transition-colors"
            >
              {salonLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
