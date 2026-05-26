'use client';

import { createContext, useContext } from 'react';
import { isRtlLocale } from './utils';

type Direction = 'ltr' | 'rtl';

interface RTLContextValue {
  direction: Direction;
  locale: string;
  isRtl: boolean;
}

const RTLContext = createContext<RTLContextValue>({
  direction: 'ltr',
  locale: 'en',
  isRtl: false,
});

export function RTLProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const isRtl = isRtlLocale(locale);
  const direction: Direction = isRtl ? 'rtl' : 'ltr';

  return (
    <RTLContext.Provider value={{ direction, locale, isRtl }}>
      {children}
    </RTLContext.Provider>
  );
}

export function useDirection() {
  return useContext(RTLContext);
}
