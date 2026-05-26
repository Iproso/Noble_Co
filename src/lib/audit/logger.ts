import { supabaseAdmin } from '@/lib/db/client';
import { logger } from '@/lib/logger';

interface AuditEventInput {
  action: string;
  actorId?: string | null;
  actorRole?: string | null;
  resourceType?: string | null;
  resourceId?: string | null;
  details?: Record<string, unknown>;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export async function createAuditEvent(input: AuditEventInput) {
  const { error } = await supabaseAdmin.from('audit_events').insert({
    action: input.action,
    actor_id: input.actorId,
    actor_role: input.actorRole,
    resource_type: input.resourceType,
    resource_id: input.resourceId,
    details: input.details ?? {},
    ip_address: input.ipAddress,
    user_agent: input.userAgent,
  });

  if (error) {
    logger.error('Audit log error', { error });
  }
}

interface SecurityEventInput {
  eventType: string;
  severity: 'info' | 'warning' | 'critical';
  actorId?: string | null;
  details?: Record<string, unknown>;
  ipAddress?: string | null;
}

export async function createSecurityEvent(input: SecurityEventInput) {
  const { error } = await supabaseAdmin.from('security_events').insert({
    event_type: input.eventType,
    severity: input.severity,
    actor_id: input.actorId,
    details: input.details ?? {},
    ip_address: input.ipAddress,
  });

  if (error) {
    logger.error('Security event error', { error });
  }
}
