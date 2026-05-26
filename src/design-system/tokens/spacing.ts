export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(26, 26, 26, 0.04)',
  DEFAULT: '0 1px 3px rgba(26, 26, 26, 0.06), 0 1px 2px rgba(26, 26, 26, 0.04)',
  md: '0 4px 6px rgba(26, 26, 26, 0.06), 0 2px 4px rgba(26, 26, 26, 0.04)',
  lg: '0 10px 15px rgba(26, 26, 26, 0.06), 0 4px 6px rgba(26, 26, 26, 0.04)',
  xl: '0 20px 25px rgba(26, 26, 26, 0.08), 0 8px 10px rgba(26, 26, 26, 0.04)',
  '2xl': '0 25px 50px rgba(26, 26, 26, 0.10)',
  gold: '0 2px 8px rgba(196, 164, 90, 0.15)',
  none: '0 0 transparent',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
