import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp } from 'drizzle-orm/pg-core';
import { users } from './identity';

export const cmsContent = pgTable('cms_content', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).notNull(),
  type: varchar('type', { length: 64 }).notNull(),
  locale: varchar('locale', { length: 10 }).notNull(),
  title: text('title'),
  body: jsonb('body').default({}),
  excerpt: text('excerpt'),
  status: varchar('status', { length: 32 }).notNull().default('draft'),
  version: integer('version').notNull().default(1),
  workflowState: varchar('workflow_state', { length: 64 }).default('draft'),
  seoFields: jsonb('seo_fields').default({}),
  smcFields: jsonb('smc_fields').default({}),
  legalReviewRequired: boolean('legal_review_required').default(false),
  legalReviewState: varchar('legal_review_state', { length: 32 }).default('not_required'),
  categoryId: uuid('category_id'),
  tags: jsonb('tags').default([]),
  createdBy: uuid('created_by').references(() => users.id),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const cmsVersions = pgTable('cms_versions', {
  id: uuid('id').primaryKey().defaultRandom(),
  contentId: uuid('content_id').notNull().references(() => cmsContent.id),
  versionNumber: integer('version_number').notNull(),
  snapshot: jsonb('snapshot').notNull(),
  changeSummary: text('change_summary'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const cmsWorkflowStates = pgTable('cms_workflow_states', {
  id: uuid('id').primaryKey().defaultRandom(),
  contentId: uuid('content_id').notNull().references(() => cmsContent.id),
  state: varchar('state', { length: 64 }).notNull(),
  reviewerId: uuid('reviewer_id').references(() => users.id),
  reason: text('reason'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
