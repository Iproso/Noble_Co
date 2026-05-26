import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp } from 'drizzle-orm/pg-core';
import { users } from './identity';

export const legalTrustPages = pgTable('legal_trust_pages', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).notNull(),
  locale: varchar('locale', { length: 10 }).notNull(),
  title: text('title').notNull(),
  body: jsonb('body').notNull().default({}),
  version: integer('version').notNull().default(1),
  reviewState: varchar('review_state', { length: 64 }).default('draft'),
  legalReviewed: boolean('legal_reviewed').default(false),
  legalReviewerId: uuid('legal_reviewer_id').references(() => users.id),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const legalTrustVersions = pgTable('legal_trust_versions', {
  id: uuid('id').primaryKey().defaultRandom(),
  pageId: uuid('page_id').notNull().references(() => legalTrustPages.id),
  version: integer('version').notNull(),
  snapshot: jsonb('snapshot').notNull(),
  changeSummary: text('change_summary'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const termsAcceptanceRecords = pgTable('terms_acceptance_records', {
  id: uuid('id').primaryKey().defaultRandom(),
  termsType: varchar('terms_type', { length: 64 }).notNull(),
  termsVersion: varchar('terms_version', { length: 16 }).notNull(),
  userId: uuid('user_id').notNull().references(() => users.id),
  acceptedAt: timestamp('accepted_at').notNull().defaultNow(),
  locale: varchar('locale', { length: 10 }).notNull(),
  actionContext: varchar('action_context', { length: 128 }),
  relatedObjectId: uuid('related_object_id'),
  ipContext: jsonb('ip_context'),
});
