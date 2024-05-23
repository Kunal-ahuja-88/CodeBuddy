import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema'

const queryClient = postgres(process.env.DATABSE_URL!);
const db = drizzle(queryClient,{schema});
export {db};
