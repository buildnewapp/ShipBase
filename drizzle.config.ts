import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "drizzle-kit 需要 DATABASE_URL 环境变量，请在执行命令前确保已配置。",
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/db/schema/index.ts",
  out: "./drizzle",
  strict: true,
  migrations: {
    prefix: "timestamp",
  },
  dbCredentials: {
    url: connectionString,
  },
});
