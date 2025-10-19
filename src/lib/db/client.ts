import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool, type PoolConfig } from "pg";

import { schema } from "./schema";

type DrizzleClient = NodePgDatabase<typeof schema>;

declare global {
  var __drizzleDb: DrizzleClient | undefined;
  var __pgPool: Pool | undefined;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "缺少 DATABASE_URL 环境变量，请在 .env.local 中配置 PostgreSQL 连接字符串。",
  );
}

const poolConfig: PoolConfig = {
  connectionString,
};

if (
  process.env.DATABASE_SSL === "true" ||
  (process.env.NODE_ENV === "production" && poolConfig.ssl === undefined)
) {
  poolConfig.ssl = { rejectUnauthorized: false };
}

const pgPool = globalThis.__pgPool ?? new Pool(poolConfig);

if (process.env.NODE_ENV !== "production") {
  globalThis.__pgPool = pgPool;
}

const db = globalThis.__drizzleDb ?? drizzle(pgPool, { schema });

if (process.env.NODE_ENV !== "production") {
  globalThis.__drizzleDb = db;
}

export { db, pgPool };
export type { DrizzleClient };
