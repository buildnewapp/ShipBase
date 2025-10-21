"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import type { AppDictionary } from "@/i18n";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: any;
  tags: string[];
  featured: boolean;
  visibility: string;
  createdAt: string;
  publishedAt: string | null;
  language: string;
}

interface BlogsPageProps {
  dictionary: AppDictionary;
}

export function BlogsPage({ dictionary }: BlogsPageProps) {
  const { blogs: blogDict } = dictionary.pages;
  const [activeFilter, setActiveFilter] = useState("all");
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs?status=published&visibility=public");
        const data = await response.json();
        if (data.success) {
          setBlogPosts(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const filters = [
    { id: "all", label: blogDict.filters.all },
    { id: "growthHacking", label: blogDict.filters.growthHacking },
    { id: "marketing", label: blogDict.filters.marketing },
    { id: "nextjsTechniques", label: blogDict.filters.nextjsTechniques },
  ];

  const getGradientClass = (index: number) => {
    const gradients = [
      "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
      "from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950",
      "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
      "from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950",
    ];
    return gradients[index % gradients.length];
  };

  const formatDate = (date: string | null) => {
    if (!date) return "";
    try {
      return format(new Date(date), "MMM dd, yyyy");
    } catch {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950">
      {/* Header Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl lg:text-7xl">
              {blogDict.title}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300">
              {blogDict.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 sm:px-10 lg:px-16 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-neutral-600 dark:text-neutral-400">加载中...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-600 dark:text-neutral-400">暂无博客文章</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-2 transition-all hover:shadow-xl dark:border-neutral-800"
                >
                  <div className={`h-48 bg-gradient-to-br ${getGradientClass(index)} relative`}>
                    {/* Featured Badge */}
                    {post.featured && (
                      <Badge
                        variant="secondary"
                        className="absolute right-4 top-4 bg-purple-600 text-white"
                      >
                        {post.visibility === "subscribers" ? "订阅者" : "公开"}
                      </Badge>
                    )}
                    
                    {/* Date */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-neutral-50">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-neutral-600 dark:text-neutral-400">
                      {post.description || "阅读完整文章以了解更多信息..."}
                    </p>
                    
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Button
                      variant="ghost"
                      className="group/btn mt-4 w-full justify-between"
                    >
                      <span>{blogDict.readMore}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* End of Posts Message */}
          {!loading && blogPosts.length > 0 && (
            <div className="mt-16 text-center">
              <p className="text-neutral-500 dark:text-neutral-400">
                {blogDict.endOfPosts}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

