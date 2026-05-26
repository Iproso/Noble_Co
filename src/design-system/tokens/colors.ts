export const colors = {
  base: {
    ivory: '#F8F6F4',
    warmWhite: '#FEFCFA',
    softParchment: '#F0EDE8',
    warmStone: '#E5E0D8',
    deepInk: '#1A1A1A',
    charcoal: '#333333',
  },
  accent: {
    antiqueGold: '#D9A58F',
    mutedBrass: '#B76E79',
    softChampagne: '#F6D7C3',
    agedBronze: '#8E4B55',
  },
  supporting: {
    deepOlive: '#8A9A7A',
    oxblood: '#A05050',
    burgundy: '#B86A6A',
    softSlate: '#8A8A8A',
    warmGray: '#D8D2CA',
  },
  status: {
    evidenceStrong: '#5A7A5A',
    evidenceModerate: '#B8985A',
    evidenceLimited: '#C4A060',
    needsReview: '#5A7A9A',
    riskInternal: '#8B3A3A',
    archived: '#9CA3AF',
  },
  ui: {
    background: '#FAF8F6',
    foreground: '#1A1A1A',
    muted: '#F5F2EE',
    mutedForeground: '#6B6B6B',
    border: '#E5E0D8',
    borderLight: '#F0EDE8',
    input: '#FFFFFF',
    ring: '#D9A58F',
    focus: '#D9A58F',
  },
  luxury: {
    goldDetail: '#D9A58F',
    goldLight: '#F6D7C3',
    goldDark: '#8E4B55',
    cream: '#F8F6F4',
    parchment: '#FAF8F6',
    ink: '#1A1A1A',
    charcoal: '#333333',
  },
} as const;

export type ColorToken = keyof typeof colors;
