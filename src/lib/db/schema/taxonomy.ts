import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp } from 'drizzle-orm/pg-core';

export const collectorAssetCategories = pgTable('collector_asset_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 128 }).notNull().unique(),
  nameEn: text('name_en').notNull(),
  nameAr: text('name_ar').notNull(),
  descriptionEn: text('description_en'),
  descriptionAr: text('description_ar'),
  riskTier: integer('risk_tier').notNull().default(1),
  parentId: uuid('parent_id'),
  displayOrder: integer('display_order').default(0),
  isActive: boolean('is_active').notNull().default(true),
  metadata: jsonb('metadata').default({}),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const categoryRiskProfiles = pgTable('category_risk_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoryId: uuid('category_id').notNull().unique().references(() => collectorAssetCategories.id),
  riskTier: integer('risk_tier').notNull().default(1),
  requiresSpecialistReview: boolean('requires_specialist_review').notNull().default(false),
  requiresLegalReview: boolean('requires_legal_review').notNull().default(false),
  requiresProvenanceDocs: boolean('requires_provenance_docs').notNull().default(false),
  requiresExportLicense: boolean('requires_export_license').notNull().default(false),
  restrictedVisibility: boolean('restricted_visibility').notNull().default(false),
  notesEn: text('notes_en'),
  notesAr: text('notes_ar'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const categoryRequirementSets = pgTable('category_requirement_sets', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoryId: uuid('category_id').notNull().references(() => collectorAssetCategories.id),
  requiredFields: jsonb('required_fields').notNull().default([]),
  optionalFields: jsonb('optional_fields').default([]),
  evidenceRequired: jsonb('evidence_required').default([]),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const categoryMetadataSchemas = pgTable('category_metadata_schemas', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoryId: uuid('category_id').notNull().references(() => collectorAssetCategories.id),
  schema: jsonb('schema').notNull().default({}),
  version: varchar('version', { length: 16 }).notNull().default('1.0'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
