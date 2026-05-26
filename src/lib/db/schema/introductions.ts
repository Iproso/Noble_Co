import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp, numeric } from 'drizzle-orm/pg-core';
import { users } from './identity';

export const introducerProfiles = pgTable('introducer_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().unique().references(() => users.id),
  introducerType: varchar('introducer_type', { length: 64 }),
  isEligible: boolean('is_eligible').default(false),
  agreementAccepted: boolean('agreement_accepted').default(false),
  agreementVersion: varchar('agreement_version', { length: 16 }),
  qualityScore: integer('quality_score').default(0),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const referralLeads = pgTable('referral_leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  introducerId: uuid('introducer_id').notNull().references(() => introducerProfiles.id),
  referralLinkId: uuid('referral_link_id'),
  leadEmail: varchar('lead_email', { length: 255 }),
  leadName: varchar('lead_name', { length: 255 }),
  status: varchar('status', { length: 32 }).notNull().default('pending'),
  doubleOptinStatus: varchar('double_optin_status', { length: 32 }).default('pending'),
  consentRecordId: uuid('consent_record_id'),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const referralConsentRecords = pgTable('referral_consent_records', {
  id: uuid('id').primaryKey().defaultRandom(),
  introducerId: uuid('introducer_id').notNull().references(() => introducerProfiles.id),
  type: varchar('type', { length: 64 }).notNull(),
  granted: boolean('granted').notNull(),
  version: varchar('version', { length: 16 }).notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});

export const referralAuditEvents = pgTable('referral_audit_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  referralLeadId: uuid('referral_lead_id'),
  action: varchar('action', { length: 128 }).notNull(),
  actorId: uuid('actor_id'),
  details: jsonb('details').default({}),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
