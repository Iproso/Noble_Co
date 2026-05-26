export interface AuthSessionAdapter {
  startWebAuthn(): Promise<Credential | null>;
  getCookie(name: string): string | undefined;
  setCookie(name: string, value: string, days?: number): void;
  deleteCookie(name: string): void;
}

export const authSessionAdapter: AuthSessionAdapter = {
  async startWebAuthn() {
    if (!navigator.credentials) return null;
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          rpId: window.location.hostname,
          allowCredentials: [],
          userVerification: 'preferred',
        },
      });
      return credential;
    } catch {
      return null;
    }
  },
  getCookie(name: string) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : undefined;
  },
  setCookie(name: string, value: string, days = 30) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  },
  deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  },
};
