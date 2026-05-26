export interface PermissionAdapter {
  query(name: PermissionName): Promise<PermissionState>;
  requestCamera(): Promise<boolean>;
  requestMicrophone(): Promise<boolean>;
}

export const permissionAdapter: PermissionAdapter = {
  async query(name: PermissionName) {
    if (!navigator.permissions) return 'denied';
    try {
      const result = await navigator.permissions.query({ name });
      return result.state;
    } catch {
      return 'denied';
    }
  },
  async requestCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((t) => t.stop());
      return true;
    } catch {
      return false;
    }
  },
  async requestMicrophone() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      return true;
    } catch {
      return false;
    }
  },
};
