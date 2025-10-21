# Sitemap 实现文档

## 概述

本项目使用 Next.js 的动态 sitemap 功能，自动生成包含所有页面和博客文章的 sitemap.xml 文件。

## 文件结构

### 1. Sitemap 配置
- `src/app/sitemap.ts` - 动态生成 sitemap.xml
- `src/app/robots.ts` - 生成 robots.txt 并引用 sitemap

### 2. 中间件配置
- `src/middleware.ts` - 已更新以排除 sitemap.xml 和 robots.txt

## 功能特性

### 支持的页面类型

1. **静态页面** - 所有语言版本
   - 首页 (/)
   - Features (/features)
   - Pricing (/pricing)
   - Docs (/docs)
   - Integrations (/integrations)
   - Help (/help)
   - Contact (/contact)
   - Status (/status)
   - Privacy (/privacy)
   - Terms (/terms)
   - Cookies (/cookies)
   - Login (/login)
   - Signup (/signup)
   - Blogs (/blogs)

2. **博客文章** - 动态从数据库获取
   - 只包含状态为 "published" 且可见性为 "public" 的文章
   - 根据文章的语言自动生成对应语言的 URL

### 多语言支持

sitemap 为每种语言生成相应的 URL：
- 英语 (en)
- 中文 (zh)
- 日语 (ja)

每个 URL 都包含 `hreflang` 属性，指向其他语言版本。

### SEO 优化

- **优先级 (Priority)**
  - 首页: 1.0
  - 其他页面: 0.8
  - 博客文章: 0.7

- **更新频率 (Change Frequency)**
  - 首页: daily
  - 其他页面: weekly
  - 博客文章: monthly

- **最后修改时间 (Last Modified)**
  - 静态页面: 当前时间
  - 博客文章: 使用 `publishedAt` 或 `updatedAt`

## 环境变量配置

在 `.env.local` 中添加：

```bash
# 网站基础 URL（用于生成 sitemap）
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # 开发环境
# NEXT_PUBLIC_BASE_URL=https://shipbase.com  # 生产环境
```

## Robots.txt 配置

robots.txt 禁止爬虫访问以下路径：
- `/api/` - API 路由
- `/admin/` - 管理后台
- `/dashboard/` - 用户仪表板
- `/profile/` - 用户资料
- `/membership/` - 会员页面
- `/orders/` - 订单页面
- `/payment/` - 支付页面

## 访问 Sitemap

访问以下 URL 查看 sitemap：
- Sitemap: `http://localhost:3000/sitemap.xml`
- Robots: `http://localhost:3000/robots.txt`

## 技术实现

### Sitemap 生成流程

1. 获取基础 URL（从环境变量或默认值）
2. 生成所有语言的静态页面 URL
3. 从数据库查询已发布的博客文章
4. 为每个博客文章生成对应语言的 URL
5. 返回符合 XML Sitemap 标准的数组

### 数据库查询

```typescript
const publishedBlogs = await db
  .select()
  .from(blogs)
  .where(
    and(
      eq(blogs.status, 'published'),
      eq(blogs.visibility, 'public')
    )
  );
```

### 多语言 URL 生成

```typescript
const blogUrls: Record<string, string> = {};
for (const locale of locales) {
  blogUrls[locale] = `${baseUrl}/${locale}/blogs/${blog.slug}`;
}
```

## 注意事项

1. **基础 URL**: 生产环境必须设置 `NEXT_PUBLIC_BASE_URL` 环境变量
2. **中间件**: 确保 middleware 排除了 sitemap.xml 和 robots.txt
3. **数据库连接**: sitemap 需要数据库连接，确保环境变量配置正确
4. **性能**: 博客文章较多时，考虑添加缓存或分页

## 测试

```bash
# 开发环境
pnpm dev

# 访问 sitemap
curl http://localhost:3000/sitemap.xml

# 访问 robots.txt
curl http://localhost:3000/robots.txt
```

## 更新日志

- 2025-10-21: 初始实现
  - 支持静态页面和博客文章
  - 多语言支持（en, zh, ja）
  - 自动生成 robots.txt

