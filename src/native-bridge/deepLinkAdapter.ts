export interface DeepLinkAdapter {
  buildURL(path: string, params?: Record<string, string>): string;
}

export const deepLinkAdapter: DeepLinkAdapter = {
  buildURL(path: string, params?: Record<string, string>) {
    const base = `${window.location.protocol}//${window.location.host}`;
    const url = new URL(path, base);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
      }
    }
    return url.toString();
  },
};
