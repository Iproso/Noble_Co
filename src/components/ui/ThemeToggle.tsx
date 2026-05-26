'use client';

import { useState, useEffect } from 'react';

interface ThemeToggleProps {
  locale: string;
}

export function ThemeToggle({ locale }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label={locale === 'ar' ? 'تبديل السمة' : 'Toggle theme'}
      className="relative text-sm text-text-secondary hover:text-antique-gold transition-colors w-4 h-4"
    >
      <span
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: dark ? 1 : 0, transform: `rotate(${dark ? 0 : 90}deg)` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="8" cy="8" r="3.5" />
          <line x1="8" y1="1" x2="8" y2="2.5" />
          <line x1="8" y1="13.5" x2="8" y2="15" />
          <line x1="1" y1="8" x2="2.5" y2="8" />
          <line x1="13.5" y1="8" x2="15" y2="8" />
          <line x1="3.05" y1="3.05" x2="4.1" y2="4.1" />
          <line x1="11.9" y1="11.9" x2="12.95" y2="12.95" />
          <line x1="3.05" y1="12.95" x2="4.1" y2="11.9" />
          <line x1="11.9" y1="4.1" x2="12.95" y2="3.05" />
        </svg>
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: dark ? 0 : 1, transform: `rotate(${dark ? -90 : 0}deg)` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M13.5 8.5A6 6 0 0 1 7.5 2.5 6 6 0 1 0 13.5 8.5Z" />
        </svg>
      </span>
    </button>
  );
}
