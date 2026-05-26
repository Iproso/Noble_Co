import { createServerSupabaseClient } from '@/lib/auth/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import { DEV_SESSION_COOKIE, isDevSession } from '@/lib/auth/dev-bypass';

type Props = { params: Promise<{ locale: string }>; children: ReactNode };

const ADMIN_ROLE_IDS = ['admin', 'reviewer', 'specialist', 'platform_owner'];

export default async function AdminLayout({ params, children }: Props) {
  const { locale } = await params;

  // Dev bypass: check for mock session cookie
  const cookieStore = await cookies();
  const devSession = cookieStore.get(DEV_SESSION_COOKIE)?.value;
  if (isDevSession(devSession)) {
    return <>{children}</>;
  }

  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${locale}/login?redirect=/${locale}/admin`);
  }

  const { data: profile } = await supabase
    .from('users')
    .select('role_id')
    .eq('id', user.id)
    .single();

  if (!profile?.role_id) {
    redirect(`/${locale}`);
  }

  const { data: role } = await supabase
    .from('roles')
    .select('name')
    .eq('id', profile.role_id)
    .single();

  if (!role || !ADMIN_ROLE_IDS.includes(role.name)) {
    redirect(`/${locale}`);
  }

  return <>{children}</>;
}
