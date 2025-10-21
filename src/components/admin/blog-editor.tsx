"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { ArrowLeft, Save } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { AppDictionary } from "@/i18n";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: unknown;
  language: string;
  tags: string[] | null;
  status: string;
  visibility: string;
  featured: boolean;
}

interface BlogEditorProps {
  dictionary: AppDictionary;
  blogId?: string;
}

export function BlogEditor({ dictionary, blogId }: BlogEditorProps) {
  const { adminBlogs } = dictionary.pages;
  const router = useRouter();
  const isNew = !blogId;

  const [formData, setFormData] = useState<Blog>({
    id: "",
    title: "",
    slug: "",
    description: "",
    content: null,
    language: "zh",
    tags: [],
    status: "draft",
    visibility: "public",
    featured: false,
  });

  const [saving, setSaving] = useState(false);

  const fetchBlog = useCallback(async () => {
    if (!blogId) return;
    try {
      const response = await fetch(`/api/blogs/${blogId}`);
      const data = await response.json();
      if (data.success) {
        setFormData(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  }, [blogId]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  function handleInputChange(
    field: keyof Blog,
    value: string | boolean | string[]
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const url = isNew ? "/api/blogs" : `/api/blogs/${blogId}`;
      const method = isNew ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        router.push("/admin/blogs");
      } else {
        alert("Failed to save: " + data.error);
      }
    } catch (error) {
      console.error("Failed to save blog:", error);
      alert("Failed to save");
    } finally {
      setSaving(false);
    }
  }

  const handleTagsChange = (value: string) => {
    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    handleInputChange("tags", tags);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/admin/blogs")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold">
              {isNew ? adminBlogs.edit.actions.create : adminBlogs.edit.title}
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              {adminBlogs.edit.subtitle}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Language */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.language}</CardTitle>
              </CardHeader>
              <CardContent>
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange("language", e.target.value)}
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option value="zh">Chinese</option>
                  <option value="en">English</option>
                  <option value="ja">Japanese</option>
                </select>
              </CardContent>
            </Card>

            {/* Title */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => {
                    handleInputChange("title", e.target.value);
                    if (isNew && formData.slug === "") {
                      handleInputChange("slug", generateSlug(e.target.value));
                    }
                  }}
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                  placeholder="Enter blog title"
                  required
                />
                <p className="mt-2 text-sm text-neutral-500">
                  {adminBlogs.edit.form.titleHelper}
                </p>
              </CardContent>
            </Card>

            {/* Slug */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.slug}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => handleInputChange("slug", e.target.value)}
                    className="flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                    placeholder="blog-slug"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      handleInputChange("slug", generateSlug(formData.title))
                    }
                  >
                    {adminBlogs.edit.form.generateSlug}
                  </Button>
                </div>
                <p className="mt-2 text-sm text-neutral-500">
                  {adminBlogs.edit.form.slugHelper}
                </p>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.description}</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={4}
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                  placeholder="Enter blog description"
                />
                <p className="mt-2 text-sm text-neutral-500">
                  {adminBlogs.edit.form.descriptionHelper}
                </p>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.tags}</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  value={formData.tags?.join(", ") || ""}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                  placeholder="tag1, tag2, tag3"
                />
                {formData.tags && formData.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent>
                <RichTextEditor
                  content={typeof formData.content === "string" ? formData.content : ""}
                  onChange={(content) => handleInputChange("content", content)}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.status}</CardTitle>
              </CardHeader>
              <CardContent>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option value="draft">{adminBlogs.edit.status.draft}</option>
                  <option value="published">
                    {adminBlogs.edit.status.published}
                  </option>
                </select>
              </CardContent>
            </Card>

            {/* Visibility */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.visibility}</CardTitle>
              </CardHeader>
              <CardContent>
                <select
                  value={formData.visibility}
                  onChange={(e) =>
                    handleInputChange("visibility", e.target.value)
                  }
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option value="public">
                    {adminBlogs.edit.visibility.public}
                  </option>
                  <option value="private">
                    {adminBlogs.edit.visibility.private}
                  </option>
                  <option value="subscribers">
                    {adminBlogs.edit.visibility.subscribers}
                  </option>
                </select>
              </CardContent>
            </Card>

            {/* Featured */}
            <Card>
              <CardHeader>
                <CardTitle>{adminBlogs.edit.form.featured}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      handleInputChange("featured", e.target.checked)
                    }
                    className="h-4 w-4 rounded border-neutral-300"
                  />
                  <label className="text-sm">
                    {adminBlogs.edit.form.featuredDescription}
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/blogs")}
          >
            {adminBlogs.edit.actions.cancel}
          </Button>
          <Button type="submit" disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving
              ? "Saving..."
              : isNew
                ? adminBlogs.edit.actions.create
                : adminBlogs.edit.actions.update}
          </Button>
        </div>
      </form>
    </div>
  );
}

