
import { pgTable,varchar } from "drizzle-orm/pg-core";

export const Testing=pgTable('testing',{
    id:varchar('id').primaryKey(),
    name:varchar('name').notNull(),
    
})