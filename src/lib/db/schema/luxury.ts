import { pgTable, uuid, text, varchar, jsonb, boolean, timestamp } from 'drizzle-orm/pg-core';
import { collectorAssets } from './artifact';

export const watchProfiles = pgTable('watch_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().unique().references(() => collectorAssets.id),
  reference: varchar('reference', { length: 128 }),
  year: varchar('year', { length: 16 }),
  material: text('material'),
  movementType: varchar('movement_type', { length: 64 }),
  caliber: varchar('caliber', { length: 64 }),
  condition: text('condition'),
  boxPapers: boolean('box_papers').default(false),
  serviceHistory: text('service_history'),
  provenanceNotes: text('provenance_notes'),
  specialistReviewState: varchar('specialist_review_state', { length: 32 }).default('pending'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const jewelryProfiles = pgTable('jewelry_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().unique().references(() => collectorAssets.id),
  material: text('material'),
  stones: jsonb('stones').default([]),
  certificates: jsonb('certificates').default([]),
  maison: varchar('maison', { length: 255 }),
  period: varchar('period', { length: 64 }),
  condition: text('condition'),
  provenance: text('provenance'),
  specialistReviewState: varchar('specialist_review_state', { length: 32 }).default('pending'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const handbagProfiles = pgTable('handbag_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().unique().references(() => collectorAssets.id),
  maison: varchar('maison', { length: 255 }),
  model: varchar('model', { length: 255 }),
  material: text('material'),
  hardware: text('hardware'),
  condition: text('condition'),
  accessories: jsonb('accessories').default([]),
  receiptProvenance: text('receipt_provenance'),
  specialistReviewState: varchar('specialist_review_state', { length: 32 }).default('pending'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const designObjectProfiles = pgTable('design_object_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().unique().references(() => collectorAssets.id),
  designer: varchar('designer', { length: 255 }),
  period: varchar('period', { length: 64 }),
  material: text('material'),
  dimensions: text('dimensions'),
  condition: text('condition'),
  restoration: text('restoration'),
  provenance: text('provenance'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
