export interface HapticsAdapter {
  supportsHaptics(): boolean;
  vibrate(pattern: number | number[]): void;
}

export const hapticsAdapter: HapticsAdapter = {
  supportsHaptics() {
    return 'vibrate' in navigator;
  },
  vibrate(pattern: number | number[]) {
    if (this.supportsHaptics()) {
      navigator.vibrate(pattern);
    }
  },
};
