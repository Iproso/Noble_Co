export interface AppUpdateAdapter {
  checkForUpdate(): Promise<{ available: boolean }>;
  applyUpdate(): void;
}

export const appUpdateAdapter: AppUpdateAdapter = {
  async checkForUpdate() {
    return { available: false };
  },
  applyUpdate() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '0';
    document.head.appendChild(meta);
  },
};
