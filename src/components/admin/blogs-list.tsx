"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { AppDictionary } from "@/i18n";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: string;
  visibility: string;
  featured: boolean;
  language: string;
  tags: string[] | null;
  createdAt: string;
  publishedAt: string | null;
  authorId: string;
}

interface BlogsListProps {
  dictionary: AppDictionary;
}

export function BlogsList({ dictionary }: BlogsListProps) {
  const { adminBlogs } = dictionary.pages;
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const response = await fetch("/api/blogs?status=all");
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    setDeletingId(id);
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        fetchBlogs();
      } else {
        alert("Failed to delete: " + data.error);
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
      alert("Failed to delete");
    } finally {
      setDeletingId(null);
    }
  }

  const getStatusBadge = (status: string) => {
    const statusDict = adminBlogs.edit.status;
    const isPublished = status === "published";
    return (
      <Badge variant={isPublished ? "default" : "secondary"}>
        {isPublished ? statusDict.published : statusDict.draft}
      </Badge>
    );
  };

  const getVisibilityBadge = (visibility: string) => {
    const visibilityDict = adminBlogs.edit.visibility;
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      public: "default",
      private: "secondary",
      subscribers: "outline",
    };
    return (
      <Badge variant={variants[visibility] || "secondary"}>
        {visibilityDict[visibility as keyof typeof visibilityDict] || visibility}
      </Badge>
    );
  };

  const formatDate = (date: string | null) => {
    if (!date) return "-";
    try {
      return format(new Date(date), "yyyy-MM-dd HH:mm");
    } catch {
      return "-";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{adminBlogs.list.title}</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            {adminBlogs.list.subtitle}
          </p>
        </div>
        <Button
          onClick={() => router.push("/admin/blogs/new")}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          {adminBlogs.list.createNew}
        </Button>
      </div>

      {/* Blogs Table */}
      {blogs.length === 0 ? (
        <Card>
          <CardContent className="py-20 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              {adminBlogs.list.noBlogs}
            </p>
            <Button
              onClick={() => router.push("/admin/blogs/new")}
              className="mt-4"
            >
              <Plus className="h-4 w-4 mr-2" />
              {adminBlogs.list.createNew}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="p-4 text-left font-semibold">
                      {adminBlogs.table.title}
                    </th>
                    <th className="p-4 text-left font-semibold">
                      {adminBlogs.table.status}
                    </th>
                    <th className="p-4 text-left font-semibold">
                      {adminBlogs.table.visibility}
                    </th>
                    <th className="p-4 text-left font-semibold">
                      {adminBlogs.table.featured}
                    </th>
                    <th className="p-4 text-left font-semibold">
                      {adminBlogs.table.createdAt}
                    </th>
                    <th className="p-4 text-left font-semibold">
                      {adminBlogs.table.actions}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{blog.title}</p>
                          <p className="text-sm text-neutral-500 mt-1">
                            {blog.slug}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">{getStatusBadge(blog.status)}</td>
                      <td className="p-4">
                        {getVisibilityBadge(blog.visibility)}
                      </td>
                      <td className="p-4">
                        {blog.featured ? (
                          <Badge variant="default">✓</Badge>
                        ) : (
                          <span className="text-neutral-400">-</span>
                        )}
                      </td>
                      <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                        {formatDate(blog.createdAt)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              router.push(`/admin/blogs/${blog.id}/edit`)
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(blog.id)}
                            disabled={deletingId === blog.id}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

