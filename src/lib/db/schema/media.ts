import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp } from 'drizzle-orm/pg-core';
import { users } from './identity';
import { collectorAssets } from './artifact';

export const mediaAssets = pgTable('media_assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').references(() => collectorAssets.id),
  originalFilename: text('original_filename'),
  storagePath: text('storage_path').notNull(),
  mimeType: varchar('mime_type', { length: 64 }),
  fileSize: integer('file_size'),
  width: integer('width'),
  height: integer('height'),
  isPublic: boolean('is_public').notNull().default(false),
  visibilityState: varchar('visibility_state', { length: 32 }).default('private'),
  reviewState: varchar('review_state', { length: 32 }).default('pending'),
  exifStripped: boolean('exif_stripped').default(false),
  uploadedBy: uuid('uploaded_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const mediaVariants = pgTable('media_variants', {
  id: uuid('id').primaryKey().defaultRandom(),
  mediaId: uuid('media_id').notNull().references(() => mediaAssets.id),
  variantType: varchar('variant_type', { length: 32 }).notNull(), // thumbnail, public, watermark
  storagePath: text('storage_path').notNull(),
  width: integer('width'),
  height: integer('height'),
  fileSize: integer('file_size'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const documentAssets = pgTable('document_assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').references(() => collectorAssets.id),
  originalFilename: text('original_filename'),
  storagePath: text('storage_path').notNull(),
  mimeType: varchar('mime_type', { length: 64 }),
  fileSize: integer('file_size'),
  isPublic: boolean('is_public').notNull().default(false),
  uploadedBy: uuid('uploaded_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const evidenceItems = pgTable('evidence_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  type: varchar('type', { length: 64 }).notNull(),
  titleEn: text('title_en'),
  titleAr: text('title_ar'),
  descriptionEn: text('description_en'),
  descriptionAr: text('description_ar'),
  strengthScore: integer('strength_score').default(0),
  source: varchar('source', { length: 128 }),
  status: varchar('status', { length: 32 }).notNull().default('pending'),
  supersededById: uuid('superseded_by_id'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const mediaAccessLogs = pgTable('media_access_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  mediaId: uuid('media_id').notNull().references(() => mediaAssets.id),
  userId: uuid('user_id').references(() => users.id),
  accessType: varchar('access_type', { length: 32 }).notNull(),
  ipAddress: varchar('ip_address', { length: 45 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
