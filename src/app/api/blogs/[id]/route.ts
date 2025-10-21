import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db/client";
import { blogs } from "@/lib/db/schema/blogs";
import { auth } from "@/lib/auth/server";
import { eq } from "drizzle-orm";

// GET /api/blogs/[id] - 获取单个博客
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await db
      .select()
      .from(blogs)
      .where(eq(blogs.id, id))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result[0],
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - 更新博客
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    // 检查博客是否存在
    const existingBlog = await db
      .select()
      .from(blogs)
      .where(eq(blogs.id, id))
      .limit(1);

    if (existingBlog.length === 0) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // 检查权限（只有作者可以编辑）
    if (existingBlog[0].authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

    // 如果 slug 有变化，检查新 slug 是否已存在
    if (slug && slug !== existingBlog[0].slug) {
      const slugExists = await db
        .select()
        .from(blogs)
        .where(eq(blogs.slug, slug))
        .limit(1);

      if (slugExists.length > 0) {
        return NextResponse.json(
          { success: false, error: "Slug already exists" },
          { status: 400 }
        );
      }
    }

    // 构建更新数据
    const updateData: Partial<{
      language: string;
      title: string;
      slug: string;
      description: string | null;
      content: unknown;
      tags: unknown;
      status: string;
      visibility: string;
      featured: boolean;
      publishedAt: Date;
      updatedAt: Date;
    }> = {
      updatedAt: new Date(),
    };

    if (language !== undefined) updateData.language = language;
    if (title !== undefined) updateData.title = title;
    if (slug !== undefined) updateData.slug = slug;
    if (description !== undefined) updateData.description = description;
    if (content !== undefined) updateData.content = content;
    if (tags !== undefined) updateData.tags = tags;
    if (status !== undefined) {
      updateData.status = status;
      // 如果状态变为已发布，更新 publishedAt
      if (status === "published" && !existingBlog[0].publishedAt) {
        updateData.publishedAt = new Date();
      }
    }
    if (visibility !== undefined) updateData.visibility = visibility;
    if (featured !== undefined) updateData.featured = featured;

    // 更新博客
    const updatedBlog = await db
      .update(blogs)
      .set(updateData)
      .where(eq(blogs.id, id))
      .returning();

    return NextResponse.json({
      success: true,
      data: updatedBlog[0],
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - 删除博客
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 检查博客是否存在
    const existingBlog = await db
      .select()
      .from(blogs)
      .where(eq(blogs.id, id))
      .limit(1);

    if (existingBlog.length === 0) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // 检查权限（只有作者可以删除）
    if (existingBlog[0].authorId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

    // 删除博客
    await db.delete(blogs).where(eq(blogs.id, id));

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}

