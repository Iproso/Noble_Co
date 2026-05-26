import { pgTable, uuid, text, timestamp, jsonb, boolean, varchar } from 'drizzle-orm/pg-core';

export const roles = pgTable('roles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 64 }).notNull().unique(),
  permissions: jsonb('permissions').notNull().default([]),
  isSystem: boolean('is_system').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  roleId: uuid('role_id').references(() => roles.id),
  locale: varchar('locale', { length: 10 }).notNull().default('en'),
  isActive: boolean('is_active').notNull().default(true),
  lastLoginAt: timestamp('last_login_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const userProfiles = pgTable('user_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().unique().references(() => users.id),
  displayName: varchar('display_name', { length: 128 }),
  bio: text('bio'),
  avatarUrl: text('avatar_url'),
  phone: varchar('phone', { length: 32 }),
  nationality: varchar('nationality', { length: 64 }),
  metadata: jsonb('metadata').default({}),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const permissions = pgTable('permissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  resource: varchar('resource', { length: 128 }).notNull(),
  action: varchar('action', { length: 64 }).notNull(),
  conditions: jsonb('conditions').default({}),
  description: text('description'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const consentRecords = pgTable('consent_records', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  consentType: varchar('consent_type', { length: 64 }).notNull(),
  version: varchar('version', { length: 16 }).notNull(),
  granted: boolean('granted').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
  ipContext: jsonb('ip_context').default({}),
});

export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
