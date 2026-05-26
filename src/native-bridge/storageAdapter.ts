export interface StorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

export const storageAdapter: StorageAdapter = {
  getItem(key: string) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // storage full or unavailable
    }
  },
  removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch {
      // unavailable
    }
  },
  clear() {
    try {
      localStorage.clear();
    } catch {
      // unavailable
    }
  },
};
