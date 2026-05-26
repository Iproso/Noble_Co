import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/auth/server';
import { handleCors, corsHeaders } from '@/lib/security/cors';
import { logger } from '@/lib/logger';
import { z } from 'zod';

const draftSchema = z.object({
  draftId: z.string().uuid().optional(),
  data: z.record(z.string(), z.unknown()).default({}),
  currentStep: z.number().int().min(0).default(0),
});

export async function POST(request: NextRequest) {
  const corsPreflight = handleCors(request);
  if (corsPreflight) return corsPreflight;

  const supabase = await createServerSupabaseClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: corsHeaders(request.headers.get('origin')) });
  }

  try {
    const body = await request.json();
    const parsed = draftSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.flatten() },
        { status: 422, headers: corsHeaders(request.headers.get('origin')) },
      );
    }

    const { draftId, data, currentStep } = parsed.data;

    if (draftId) {
      const { error } = await supabase
        .from('submission_drafts')
        .update({
          data,
          current_step: currentStep,
          completed_steps: data.completedSteps || [],
          updated_at: new Date().toISOString(),
        })
        .eq('id', draftId)
        .eq('user_id', user.id);

      if (error) throw error;

      return NextResponse.json({ id: draftId, saved: true }, { headers: corsHeaders(request.headers.get('origin')) });
    }

    const { data: newDraft, error } = await supabase
      .from('submission_drafts')
      .insert({
        user_id: user.id,
        data,
        current_step: currentStep,
        completed_steps: data.completedSteps || [],
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      })
      .select('id')
      .single();

    if (error) throw error;

    return NextResponse.json({ id: newDraft.id, saved: true }, { headers: corsHeaders(request.headers.get('origin')) });
  } catch (error) {
    logger.error('Draft save error', { error });
    return NextResponse.json({ error: 'Failed to save draft' }, { status: 500, headers: corsHeaders(request.headers.get('origin')) });
  }
}
