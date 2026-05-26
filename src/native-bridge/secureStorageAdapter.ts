export interface SecureStorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const store = new Map<string, string>();

export const secureStorageAdapter: SecureStorageAdapter = {
  getItem(key: string) {
    return store.get(key) ?? null;
  },
  setItem(key: string, value: string) {
    store.set(key, value);
  },
  removeItem(key: string) {
    store.delete(key);
  },
};
