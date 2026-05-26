import { pgTable, uuid, text, varchar, integer, jsonb, boolean, timestamp, numeric } from 'drizzle-orm/pg-core';
import { users } from './identity';
import { collectorAssets } from './artifact';

export const auctions = pgTable('auctions', {
  id: uuid('id').primaryKey().defaultRandom(),
  titleEn: text('title_en').notNull(),
  titleAr: text('title_ar'),
  description: text('description'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  status: varchar('status', { length: 32 }).notNull().default('preview'),
  buyerPremiumPolicyId: uuid('buyer_premium_policy_id'),
  termsVersionId: uuid('terms_version_id'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const auctionLots = pgTable('auction_lots', {
  id: uuid('id').primaryKey().defaultRandom(),
  auctionId: uuid('auction_id').notNull().references(() => auctions.id),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  lotNumber: integer('lot_number').notNull(),
  estimateLow: numeric('estimate_low'),
  estimateHigh: numeric('estimate_high'),
  reservePrice: text('reserve_price'),
  startPrice: numeric('start_price'),
  displayOrder: integer('display_order'),
  viewingAvailable: boolean('viewing_available').default(false),
  conditionReportAvailable: boolean('condition_report_available').default(false),
  status: varchar('status', { length: 32 }).notNull().default('preview'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const auctionRegistrations = pgTable('auction_registrations', {
  id: uuid('id').primaryKey().defaultRandom(),
  auctionId: uuid('auction_id').notNull().references(() => auctions.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  status: varchar('status', { length: 32 }).notNull().default('pending'),
  termsAccepted: boolean('terms_accepted').default(false),
  termsVersionId: uuid('terms_version_id'),
  bidderApproved: boolean('bidder_approved').default(false),
  approvedBy: uuid('approved_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
