export interface BiometricAdapter {
  isAvailable(): boolean;
  authenticate(reason?: string): Promise<boolean>;
}

export const biometricAdapter: BiometricAdapter = {
  isAvailable() {
    return !!navigator.credentials && !!window.PublicKeyCredential;
  },
  async authenticate(reason?: string) {
    if (!this.isAvailable()) return false;
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          rpId: window.location.hostname,
          allowCredentials: [],
          userVerification: 'required',
        },
      });
      return credential !== null;
    } catch {
      return false;
    }
  },
};
