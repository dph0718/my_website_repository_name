import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const isDev = process.env.NODE_ENV === "dev";

const pool = isDev ? new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
}) : new Pool({
  connectionString: process.env.DATABASE_URL
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: parseInt(process.env.DB_PORT || "5432"),
});

export default pool;
