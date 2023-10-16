import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer
  } from "drizzle-orm/pg-core"
  import type { AdapterAccount } from "@auth/core/adapters"


  export const users = pgTable("user", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image")
  })