export const DEV_SESSION_COOKIE = '__dev_session';
export const DEV_SESSION_VALUE = 'mock_admin';

export function isDevSession(cookieValue: string | undefined | null): boolean {
  return cookieValue === DEV_SESSION_VALUE;
}

export function createDevSessionCookie(maxAge = 86400): string {
  return `${DEV_SESSION_COOKIE}=${DEV_SESSION_VALUE}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function clearDevSessionCookie(): string {
  return `${DEV_SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}
