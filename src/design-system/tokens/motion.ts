export const motion = {
  duration: {
    instant: '50ms',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    deliberate: '600ms',
  },
  ease: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
    luxury: 'cubic-bezier(0.45, 0, 0.15, 1)',
  },
  reduceMotion: {
    duration: {
      fast: '0ms',
      normal: '0ms',
      slow: '100ms',
    },
  },
} as const;
