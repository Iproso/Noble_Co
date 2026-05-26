import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp } from 'drizzle-orm/pg-core';
import { users } from './identity';
import { collectorAssetCategories } from './taxonomy';

export const collectorAssets = pgTable('collector_assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  categoryId: uuid('category_id').notNull().references(() => collectorAssetCategories.id),
  riskTier: integer('risk_tier').notNull().default(1),
  titleEn: text('title_en').notNull(),
  titleAr: text('title_ar'),
  descriptionEn: text('description_en'),
  descriptionAr: text('description_ar'),
  yearPeriod: varchar('year_period', { length: 64 }),
  maison: varchar('maison', { length: 255 }),
  maker: varchar('maker', { length: 255 }),
  provenanceSummary: text('provenance_summary'),
  conditionSummary: text('condition_summary'),
  reviewState: varchar('review_state', { length: 64 }).default('pending'),
  evidenceScore: integer('evidence_score').default(0),
  confidenceLabel: varchar('confidence_label', { length: 64 }),
  passportAvailable: boolean('passport_available').default(false),
  publicVisibility: boolean('public_visibility').default(false),
  categoryMetadata: jsonb('category_metadata').default({}),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const artifactSubmissions = pgTable('artifact_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  assetId: uuid('asset_id').references(() => collectorAssets.id),
  categoryId: uuid('category_id').notNull().references(() => collectorAssetCategories.id),
  purpose: varchar('purpose', { length: 64 }).notNull(),
  status: varchar('status', { length: 64 }).notNull().default('draft'),
  riskTier: integer('risk_tier').default(1),
  reviewerId: uuid('reviewer_id').references(() => users.id),
  submittedAt: timestamp('submitted_at'),
  reviewedAt: timestamp('reviewed_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const submissionDrafts = pgTable('submission_drafts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  categoryId: uuid('category_id').references(() => collectorAssetCategories.id),
  data: jsonb('data').notNull().default({}),
  currentStep: integer('current_step').default(0),
  completedSteps: jsonb('completed_steps').default([]),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const evidenceRequests = pgTable('evidence_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  submissionId: uuid('submission_id').notNull().references(() => artifactSubmissions.id),
  requestType: varchar('request_type', { length: 64 }).notNull(),
  descriptionEn: text('description_en'),
  descriptionAr: text('description_ar'),
  status: varchar('status', { length: 32 }).notNull().default('pending'),
  respondedAt: timestamp('responded_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const submissionStatusHistory = pgTable('submission_status_history', {
  id: uuid('id').primaryKey().defaultRandom(),
  submissionId: uuid('submission_id').notNull().references(() => artifactSubmissions.id),
  previousStatus: varchar('previous_status', { length: 64 }),
  newStatus: varchar('new_status', { length: 64 }).notNull(),
  changedBy: uuid('changed_by').references(() => users.id),
  reason: text('reason'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const ownerDeclarations = pgTable('owner_declarations', {
  id: uuid('id').primaryKey().defaultRandom(),
  submissionId: uuid('submission_id').notNull().references(() => artifactSubmissions.id),
  declarationType: varchar('declaration_type', { length: 64 }).notNull(),
  accepted: boolean('accepted').notNull(),
  acceptedAt: timestamp('accepted_at').notNull().defaultNow(),
  ipContext: jsonb('ip_context'),
});
