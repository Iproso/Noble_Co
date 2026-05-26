import { pgTable, uuid, text, timestamp, numeric, boolean, jsonb, pgEnum } from 'drizzle-orm/pg-core';
import { users } from './identity';
import { collectorAssets } from './artifact';

export const invoiceStatusEnum = pgEnum('invoice_status', ['draft', 'sent', 'paid', 'overdue', 'cancelled']);

export const invoices = pgTable('invoices', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  lotId: uuid('lot_id'),
  amount: numeric('amount', { precision: 14, scale: 2 }).notNull(),
  currency: text('currency').notNull().default('USD'),
  status: invoiceStatusEnum('status').notNull().default('draft'),
  description: text('description'),
  dueDate: timestamp('due_date'),
  paidAt: timestamp('paid_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const paymentStatusEnum = pgEnum('payment_status', ['pending', 'confirmed', 'failed', 'refunded']);

export const payments = pgTable('payments', {
  id: uuid('id').primaryKey().defaultRandom(),
  invoiceId: uuid('invoice_id').notNull().references(() => invoices.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  amount: numeric('amount', { precision: 14, scale: 2 }).notNull(),
  currency: text('currency').notNull().default('USD'),
  method: text('method').notNull(),
  status: paymentStatusEnum('status').notNull().default('pending'),
  reference: text('reference'),
  confirmedAt: timestamp('confirmed_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const bankTransferInstructions = pgTable('bank_transfer_instructions', {
  id: uuid('id').primaryKey().defaultRandom(),
  invoiceId: uuid('invoice_id').notNull().references(() => invoices.id),
  bankName: text('bank_name').notNull(),
  accountName: text('account_name').notNull(),
  accountNumber: text('account_number').notNull(),
  iban: text('iban'),
  swift: text('swift'),
  reference: text('reference'),
  issuedAt: timestamp('issued_at').notNull().defaultNow(),
  expiresAt: timestamp('expires_at'),
});

export const viewingAppointments = pgTable('viewing_appointments', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  preferredDate: timestamp('preferred_date').notNull(),
  preferredTime: text('preferred_time'),
  locationNotes: text('location_notes'),
  status: text('status').notNull().default('pending'),
  confirmedDate: timestamp('confirmed_date'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const shippingRequests = pgTable('shipping_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  assetId: uuid('asset_id').notNull().references(() => collectorAssets.id),
  pickupAddress: text('pickup_address').notNull(),
  deliveryAddress: text('delivery_address').notNull(),
  preferredDate: timestamp('preferred_date'),
  specialInstructions: text('special_instructions'),
  status: text('status').notNull().default('pending'),
  trackingNumber: text('tracking_number'),
  shippedAt: timestamp('shipped_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const financeAuditLog = pgTable('finance_audit_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  action: text('action').notNull(),
  entityType: text('entity_type').notNull(),
  entityId: uuid('entity_id'),
  details: jsonb('details'),
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
