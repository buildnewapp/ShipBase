import { pgTable, text, timestamp, boolean, json } from "drizzle-orm/pg-core";
import { users } from "./users";

export const blogs = pgTable("blogs", {
  id: text("id").primaryKey().notNull(),
  authorId: text("author_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  
  // 博客基本信息
  language: text("language").notNull().default("en"), // en, zh, ja
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  
  // 内容 (存储为 JSON，支持富文本)
  content: json("content"),
  
  // 标签 (存储为 JSON 数组)
  tags: json("tags"),
  
  // 状态
  status: text("status").notNull().default("draft"), // draft, published
  visibility: text("visibility").notNull().default("public"), // public, private, subscribers
  featured: boolean("featured").notNull().default(false),
  
  // 元数据
  metadata: json("metadata"), // 存储额外的信息
  
  // 时间戳
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
});

// 博客状态枚举
export type BlogStatus = "draft" | "published";

// 博客可见性枚举
export type BlogVisibility = "public" | "private" | "subscribers";

// 博客类型定义
export type Blog = typeof blogs.$inferSelect;
export type NewBlog = typeof blogs.$inferInsert;

