export interface ShareAdapter {
  canShare(): boolean;
  share(data: { title?: string; text?: string; url?: string }): Promise<void>;
}

export const shareAdapter: ShareAdapter = {
  canShare() {
    return 'share' in navigator;
  },
  async share(data) {
    if (!this.canShare()) throw new Error('Web Share API not available');
    await navigator.share(data);
  },
};
