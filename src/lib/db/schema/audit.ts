import { pgTable, uuid, text, varchar, jsonb, timestamp, integer } from 'drizzle-orm/pg-core';

export const auditEvents = pgTable('audit_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  action: varchar('action', { length: 128 }).notNull(),
  actorId: uuid('actor_id'),
  actorRole: varchar('actor_role', { length: 64 }),
  resourceType: varchar('resource_type', { length: 64 }),
  resourceId: uuid('resource_id'),
  details: jsonb('details').default({}),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const securityEvents = pgTable('security_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  eventType: varchar('event_type', { length: 64 }).notNull(),
  severity: varchar('severity', { length: 16 }).notNull().default('info'),
  actorId: uuid('actor_id'),
  details: jsonb('details').default({}),
  ipAddress: varchar('ip_address', { length: 45 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
