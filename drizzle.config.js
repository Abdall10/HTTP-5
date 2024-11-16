export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",

    dbCredentials: {
        url: "postgresql://neondb_owner:WjTPAYdrZ9F5@ep-calm-fog-a5js65tj.us-east-2.aws.neon.tech/neondb?sslmode=require",
        connectionString:
         "postgresql://neondb_owner:WjTPAYdrZ9F5@ep-calm-fog-a5js65tj.us-east-2.aws.neon.tech/neondb?sslmode=require",
    },
}