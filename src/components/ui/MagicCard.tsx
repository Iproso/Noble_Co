'use client';

import { useRef, useState, type ReactNode } from 'react';

interface MagicCardProps {
  children: ReactNode;
  className?: string;
}

export function MagicCard({ children, className = '' }: MagicCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const lightPos = `${mousePos.x * 100}% ${mousePos.y * 100}%`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl card-metallic transition-colors duration-500 ${className}`}
      style={{
        border: '1px solid',
        borderColor: isHovered ? 'color-mix(in srgb, var(--color-antique-gold) 35%, transparent)' : undefined,
      }}
    >
      <div className="absolute inset-0 rounded-xl brushed-metal pointer-events-none select-none" aria-hidden="true" />
      <div
        className="absolute inset-0 rounded-xl pointer-events-none select-none"
        aria-hidden="true"
        style={{
          opacity: isHovered ? 0.2 : 0,
          background: `radial-gradient(circle at ${lightPos}, color-mix(in srgb, var(--color-antique-gold) 35%, transparent) 0%, color-mix(in srgb, var(--color-muted-brass) 8%, transparent) 35%, transparent 70%)`,
          transition: 'opacity 0.45s ease',
        }}
      />
      <div
        className="absolute inset-0 rounded-xl pointer-events-none select-none z-20"
        aria-hidden="true"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `linear-gradient(135deg, color-mix(in srgb, var(--color-antique-gold) 30%, transparent) 0%, transparent 35%, color-mix(in srgb, var(--color-muted-brass) 15%, transparent) 50%, transparent 75%, color-mix(in srgb, var(--color-antique-gold) 20%, transparent) 100%)`,
          transition: 'opacity 0.6s ease',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
