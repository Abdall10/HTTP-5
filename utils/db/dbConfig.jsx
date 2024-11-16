
import { neon } from"@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon ("postgresql://neondb_owner:WjTPAYdrZ9F5@ep-calm-fog-a5js65tj.us-east-2.aws.neon.tech/neondb?sslmode=require");

export const db = drizzle(sql, {schema});