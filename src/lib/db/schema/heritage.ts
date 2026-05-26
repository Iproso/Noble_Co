import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp, date } from 'drizzle-orm/pg-core';
import { users } from './identity';
import { collectorAssets } from './artifact';

export const heritagePassports = pgTable('heritage_passports', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().unique().references(() => collectorAssets.id),
  version: integer('version').notNull().default(1),
  status: varchar('status', { length: 32 }).notNull().default('draft'),
  publicPreview: jsonb('public_preview').default({}),
  privateDossier: jsonb('private_dossier').default({}),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const passportVersions = pgTable('passport_versions', {
  id: uuid('id').primaryKey().defaultRandom(),
  passportId: uuid('passport_id').notNull().references(() => heritagePassports.id),
  versionNumber: integer('version_number').notNull(),
  snapshot: jsonb('snapshot').notNull(),
  changeSummary: text('change_summary'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const custodyEvents = pgTable('custody_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  type: varchar('type', { length: 64 }).notNull(),
  eventDate: date('event_date'),
  location: text('location'),
  custodian: varchar('custodian', { length: 255 }),
  notes: text('notes'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const provenanceTimelineEvents = pgTable('provenance_timeline_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  dateFrom: varchar('date_from', { length: 32 }),
  dateTo: varchar('date_to', { length: 32 }),
  owner: text('owner'),
  location: text('location'),
  evidenceRef: text('evidence_ref'),
  notes: text('notes'),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const conditionRecords = pgTable('condition_records', {
  id: uuid('id').primaryKey().defaultRandom(),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  examiner: varchar('examiner', { length: 255 }),
  overall: varchar('overall', { length: 64 }),
  parts: jsonb('parts').default([]),
  notes: text('notes'),
  isRestoration: boolean('is_restoration').default(false),
  examinedAt: timestamp('examined_at').notNull().defaultNow(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
