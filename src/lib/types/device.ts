export type DevicePlatform = 'web' | 'ios' | 'android' | 'pwa';

export interface DeviceSession {
  id: string;
  userId: string;
  deviceId?: string;
  platform: DevicePlatform;
  userAgent?: string;
  ipAddress?: string;
  locale: string;
  isActive: boolean;
  lastActiveAt: string;
  expiresAt: string;
  createdAt: string;
  revokedAt?: string;
  revocationReason?: string;
}
