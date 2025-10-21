import { MetadataRoute } from 'next';
import { db } from '@/lib/db/client';
import { blogs } from '@/lib/db/schema/blogs';
import { eq, and } from 'drizzle-orm';
import { locales, defaultLocale } from '@/i18n/types';

// 获取网站基础 URL
function getBaseUrl(): string {
  // 在生产环境中，使用环境变量或实际域名
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  
  // 开发环境
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // 默认值
  return 'https://shipbase.com';
}

// 所有静态页面的路径
const staticPages = [
  '',
  'features',
  'pricing',
  'docs',
  'integrations',
  'help',
  'contact',
  'status',
  'privacy',
  'terms',
  'cookies',
  'login',
  'signup',
  'blogs',
];

// 生成语言的 URL（英语不带 /en 前缀）
function getLocaleUrl(baseUrl: string, locale: string, path: string): string {
  if (locale === 'en') {
    return path === '' ? `${baseUrl}/` : `${baseUrl}/${path}`;
  }
  return path === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const currentDate = new Date();
  
  // 生成所有语言的静态页面 sitemap 条目
  const staticPageEntries: MetadataRoute.Sitemap = [];
  
  for (const locale of locales) {
    for (const page of staticPages) {
      const url = getLocaleUrl(baseUrl, locale, page);
      
      // 生成所有语言版本的 URL
      const alternates: Record<string, string> = {};
      for (const loc of locales) {
        alternates[loc] = getLocaleUrl(baseUrl, loc, page);
      }
      
      staticPageEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }
  
  // 获取所有已发布的博客文章
  const blogEntries: MetadataRoute.Sitemap = [];
  
  try {
    const publishedBlogs = await db
      .select()
      .from(blogs)
      .where(
        and(
          eq(blogs.status, 'published'),
          eq(blogs.visibility, 'public')
        )
      );
    
    // 为每个博客文章创建 sitemap 条目
    for (const blog of publishedBlogs) {
      const publishedDate = blog.publishedAt 
        ? new Date(blog.publishedAt)
        : blog.updatedAt;
      
      // 为每种语言创建对应的 URL
      const blogUrls: Record<string, string> = {};
      for (const locale of locales) {
        if (locale === 'en') {
          blogUrls[locale] = `${baseUrl}/blogs/${blog.slug}`;
        } else {
          blogUrls[locale] = `${baseUrl}/${locale}/blogs/${blog.slug}`;
        }
      }
      
      blogEntries.push({
        url: blogUrls[blog.language] || blogUrls[defaultLocale],
        lastModified: publishedDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: blogUrls,
        },
      });
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    // 即使获取博客失败，仍然返回静态页面的 sitemap
  }
  
  // 合并所有条目
  return [...staticPageEntries, ...blogEntries];
}

