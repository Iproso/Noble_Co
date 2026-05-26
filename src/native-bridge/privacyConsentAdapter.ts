export interface PrivacyConsentAdapter {
  getConsent(): boolean;
  setConsent(granted: boolean): void;
  resetConsent(): void;
}

const CONSENT_KEY = 'privacy_consent';

export const privacyConsentAdapter: PrivacyConsentAdapter = {
  getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY) === 'granted';
    } catch {
      return false;
    }
  },
  setConsent(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
    } catch {
      // storage unavailable
    }
  },
  resetConsent() {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      // storage unavailable
    }
  },
};
