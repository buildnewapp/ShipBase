import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { blogs } from "@/lib/db/schema/blogs";
import { auth } from "@/lib/auth/server";
import { eq, desc, and } from "drizzle-orm";
import { nanoid } from "nanoid";

// GET /api/blogs - 获取博客列表
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status");
    const visibility = searchParams.get("visibility");
    const language = searchParams.get("language");
    const featured = searchParams.get("featured");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");

    // 构建查询条件
    const conditions = [];
    
    // 前台访问时，只显示已发布且公开的文章
    if (status) {
      if (status !== "all") {
        conditions.push(eq(blogs.status, status));
      }
    } else {
      // 如果没有指定状态，默认只显示已发布的
      conditions.push(eq(blogs.status, "published"));
    }
    
    if (visibility) {
      if (visibility !== "all") {
        conditions.push(eq(blogs.visibility, visibility));
      }
    } else {
      // 默认只显示公开的
      conditions.push(eq(blogs.visibility, "public"));
    }
    
    if (language) {
      conditions.push(eq(blogs.language, language));
    }
    
    if (featured !== null) {
      conditions.push(eq(blogs.featured, featured === "true"));
    }

    // 查询博客列表
    const result = await db
      .select()
      .from(blogs)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(desc(blogs.featured), desc(blogs.publishedAt), desc(blogs.createdAt))
      .limit(limit)
      .offset(offset);

    // 获取总数
    const countResult = await db
      .select({ count: blogs.id })
      .from(blogs)
      .where(conditions.length > 0 ? and(...conditions) : undefined);

    return NextResponse.json({
      success: true,
      data: result,
      pagination: {
        total: countResult.length,
        limit,
        offset,
      },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST /api/blogs - 创建新博客
export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      language,
      title,
      slug,
      description,
      content,
      tags,
      status,
      visibility,
      featured,
    } = body;

    // 验证必填字段
    if (!title || !slug) {
      return NextResponse.json(
        { success: false, error: "Title and slug are required" },
        { status: 400 }
      );
    }

    // 检查 slug 是否已存在
    const existingBlog = await db
      .select()
      .from(blogs)
      .where(eq(blogs.slug, slug))
      .limit(1);

    if (existingBlog.length > 0) {
      return NextResponse.json(
        { success: false, error: "Slug already exists" },
        { status: 400 }
      );
    }

    // 创建新博客
    const newBlog = await db
      .insert(blogs)
      .values({
        id: nanoid(),
        authorId: session.user.id,
        language: language || "en",
        title,
        slug,
        description,
        content,
        tags: tags || [],
        status: status || "draft",
        visibility: visibility || "public",
        featured: featured || false,
        publishedAt: status === "published" ? new Date() : null,
      })
      .returning();

    return NextResponse.json({
      success: true,
      data: newBlog[0],
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

