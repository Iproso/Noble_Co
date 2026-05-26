import { pgTable, uuid, text, varchar, integer, jsonb, timestamp } from 'drizzle-orm/pg-core';
import { users } from './identity';

export const leads = pgTable('leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  email: varchar('email', { length: 255 }),
  name: varchar('name', { length: 255 }),
  source: varchar('source', { length: 64 }),
  intentScore: integer('intent_score').default(0),
  journeyState: varchar('journey_state', { length: 64 }),
  consents: jsonb('consents').default({}),
  metadata: jsonb('metadata').default({}),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const crmRecords = pgTable('crm_records', {
  id: uuid('id').primaryKey().defaultRandom(),
  leadId: uuid('lead_id').notNull().references(() => leads.id),
  assignedTo: uuid('assigned_to').references(() => users.id),
  status: varchar('status', { length: 32 }).default('new'),
  notes: text('notes'),
  lastContactedAt: timestamp('last_contacted_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const visitorScores = pgTable('visitor_scores', {
  id: uuid('id').primaryKey().defaultRandom(),
  visitorId: varchar('visitor_id', { length: 128 }),
  score: integer('score').default(0),
  signals: jsonb('signals').default({}),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
