import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { DEV_SESSION_COOKIE, isDevSession } from './dev-bypass';

export async function checkAuth(request: NextRequest) {
  // Dev bypass: check for mock session cookie
  const devSession = request.cookies.get(DEV_SESSION_COOKIE)?.value;
  if (isDevSession(devSession)) {
    const supabaseResponse = NextResponse.next({ request });
    return {
      user: {
        id: 'dev-admin-user',
        email: 'dev@noble.dev',
        app_metadata: {},
        user_metadata: { role: 'admin' },
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      },
      supabaseResponse,
    };
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }
          supabaseResponse = NextResponse.next({ request });
          for (const { name, value, options } of cookiesToSet) {
            supabaseResponse.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  const { data: { user } } = await supabase.auth.getUser();
  return { user, supabaseResponse };
}

export function isAdminPath(pathname: string): boolean {
  return pathname.startsWith('/admin') || pathname.match(/\/[a-z]{2}\/admin/) !== null;
}

export function isMemberPath(pathname: string): boolean {
  return pathname.startsWith('/account') || pathname.match(/\/[a-z]{2}\/account/) !== null;
}

export function isProtectedApiPath(pathname: string): boolean {
  return pathname.startsWith('/api/v1/media') || pathname.startsWith('/api/v1/submissions');
}

const PROTECTED_PREFIXES = ['/admin', '/account', '/seller', '/api/v1/media', '/api/v1/submissions'];

export function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(p => pathname.startsWith(p) || pathname.match(new RegExp(`^/[a-z]{2}${p}`)) !== null);
}
