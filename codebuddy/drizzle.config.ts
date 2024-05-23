

export default {
  dialect:'postgresql',
  schema: "./src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    url:process.env.DATABASE_URL,
  }
};