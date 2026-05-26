import { supabase } from '@/lib/db/client';
import { cache } from 'react';
import type { Session, User } from '@supabase/supabase-js';

export const getSession = cache(async (): Promise<Session | null> => {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session) return null;
  return session;
});

export const getUser = cache(async (): Promise<User | null> => {
  const session = await getSession();
  if (!session) return null;
  return session.user;
});

export const getUserId = cache(async (): Promise<string | null> => {
  const user = await getUser();
  return user?.id ?? null;
});

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}
