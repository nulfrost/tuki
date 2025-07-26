import { pgTable, text, integer, timestamp, bigserial } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: text().primaryKey(),
  did: text().notNull().unique(),
  createdAt: timestamp().defaultNow(),
})

export const listings = pgTable('listings', {
  id: integer().primaryKey(),
  rkey: text().notNull(),
  collection: text().notNull(),
  title: text().notNull().unique(),
  description: text().notNull(),
  price: integer(),
  category: text(), // categories should be a separate table
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow()
})

export const categories = pgTable('categories', {
  id: bigserial({ mode: 'number' }).primaryKey(),
  name: text().notNull().unique()
})
