export interface AnalyticsConsentAdapter {
  hasOptedIn(): boolean;
  optIn(): void;
  optOut(): void;
}

const ANALYTICS_KEY = 'analytics_consent';

export const analyticsConsentAdapter: AnalyticsConsentAdapter = {
  hasOptedIn() {
    try {
      return localStorage.getItem(ANALYTICS_KEY) === 'opted_in';
    } catch {
      return false;
    }
  },
  optIn() {
    try {
      localStorage.setItem(ANALYTICS_KEY, 'opted_in');
    } catch {
      // storage unavailable
    }
  },
  optOut() {
    try {
      localStorage.setItem(ANALYTICS_KEY, 'opted_out');
    } catch {
      // storage unavailable
    }
  },
};
