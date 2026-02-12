import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  priority: text('priority', { enum: ['low', 'medium', 'high'] }).notNull().default('medium'),
  columnId: text('column_id', { enum: ['backlog', 'in-progress', 'review', 'done'] }).notNull().default('backlog'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  epicId: uuid('epic_id'),
  prUrl: text('pr_url'),
  images: text('images'),
});

export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;
