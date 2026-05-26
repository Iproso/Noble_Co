export interface NetworkStatusAdapter {
  isOnline(): boolean;
  onStatusChange(callback: (online: boolean) => void): () => void;
}

export const networkStatusAdapter: NetworkStatusAdapter = {
  isOnline() {
    return navigator.onLine;
  },
  onStatusChange(callback: (online: boolean) => void) {
    const goOnline = () => callback(true);
    const goOffline = () => callback(false);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  },
};
