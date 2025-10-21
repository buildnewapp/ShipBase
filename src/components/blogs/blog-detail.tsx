"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";

// 安全地将 tags 转换为字符串数组
function getTags(tags: unknown): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return tags.filter((tag): tag is string => typeof tag === "string");
  }
  return [];
}

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: unknown;
  tags: unknown;
  language: string;
  createdAt: Date;
  publishedAt: Date | null;
}

interface BlogDetailProps {
  blog: Blog;
}

export function BlogDetail({ blog }: BlogDetailProps) {
  const router = useRouter();

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    try {
      return format(date, "MMMM dd, yyyy");
    } catch {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950">
      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <Button
            variant="ghost"
            onClick={() => router.push("/blogs")}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog List
          </Button>

          <div className="mb-6">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
              {blog.title}
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {blog.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
            </div>
            {getTags(blog.tags).length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  {getTags(blog.tags).map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <Card>
            <CardContent className="p-8">
              {blog.content ? (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown>
                    {typeof blog.content === "string" ? blog.content : ""}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-neutral-600 dark:text-neutral-400">
                  No content available
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

