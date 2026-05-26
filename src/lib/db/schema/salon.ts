import { pgTable, uuid, text, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';
import { users } from './identity';

export const privateRooms = pgTable('private_rooms', {
  id: uuid('id').primaryKey().defaultRandom(),
  nameEn: text('name_en').notNull(),
  nameAr: text('name_ar'),
  descriptionEn: text('description_en'),
  descriptionAr: text('description_ar'),
  accessType: varchar('access_type', { length: 32 }).notNull().default('invite'),
  isActive: boolean('is_active').notNull().default(true),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const roomAccess = pgTable('room_access', {
  id: uuid('id').primaryKey().defaultRandom(),
  roomId: uuid('room_id').notNull().references(() => privateRooms.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  accessType: varchar('access_type', { length: 32 }).notNull().default('member'),
  grantedBy: uuid('granted_by').references(() => users.id),
  expiresAt: timestamp('expires_at'),
  revokedAt: timestamp('revoked_at'),
  reason: text('reason'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const roomMessages = pgTable('room_messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  roomId: uuid('room_id').notNull().references(() => privateRooms.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  isConfidential: boolean('is_confidential').default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const roomAccessLogs = pgTable('room_access_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  roomId: uuid('room_id').notNull().references(() => privateRooms.id),
  userId: uuid('user_id').notNull().references(() => users.id),
  action: varchar('action', { length: 32 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
