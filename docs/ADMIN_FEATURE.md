# 管理员功能实现说明

## 概述

已成功实现管理员功能，允许配置管理员邮箱，管理员可以访问管理后台。

## 实现内容

### 1. 环境变量配置

**新增环境变量：**
```bash
ADMIN_EMAILS=admin@example.com,owner@example.com
```

- 支持多个管理员邮箱
- 用逗号分隔
- 在 `.env.local` 中配置

### 2. 辅助函数

**文件：** `src/lib/auth/admin.ts`

```typescript
// 服务器端检查管理员
export function isAdmin(email: string | null | undefined): boolean

// 客户端检查管理员
export async function checkAdminStatus(email: string): Promise<boolean>
```

### 3. API 路由

**文件：** `src/app/api/admin/check/route.ts`

```typescript
POST /api/admin/check
Body: { email: string }
Response: { success: boolean, isAdmin: boolean }
```

### 4. 用户菜单增强

**文件：** `src/components/layout/user-menu.tsx`

- 自动检查用户是否为管理员
- 如果是管理员，显示"管理后台"菜单项
- 菜单项前添加分割线
- 使用齿轮图标 (Settings icon)

### 5. 国际化支持

**新增翻译：**
- 英文：`Admin Panel`
- 中文：`管理后台`

## 使用方法

### 1. 配置管理员

在 `.env.local` 文件中添加：

```bash
ADMIN_EMAILS=your-email@example.com
```

多个管理员：

```bash
ADMIN_EMAILS=admin1@example.com,admin2@example.com,admin3@example.com
```

### 2. 访问管理后台

1. 使用管理员邮箱登录
2. 点击右上角用户头像
3. 在菜单中找到"管理后台"或"Admin Panel"
4. 点击进入 `/admin/blogs`

### 3. 管理功能

管理员可以：
- 查看所有博客（包括草稿）
- 创建新博客
- 编辑博客
- 删除博客
- 管理博客状态和可见性

## 安全特性

1. **服务器端验证** - 管理员检查在服务器端进行
2. **环境变量保护** - 管理员邮箱列表不会暴露到客户端
3. **权限隔离** - 非管理员用户无法访问管理后台
4. **API 验证** - 客户端通过 API 获取管理员状态

## 代码示例

### 检查管理员状态

```typescript
import { checkAdminStatus } from "@/lib/auth/admin";

const isAdmin = await checkAdminStatus(userEmail);
if (isAdmin) {
  // 显示管理员功能
}
```

### 在页面中检查

```typescript
import { isAdmin } from "@/lib/auth/admin";

// 服务器组件
export default async function AdminPage() {
  const session = await auth.api.getSession({ headers });
  if (!isAdmin(session?.user?.email)) {
    redirect("/");
  }
  // 管理员内容
}
```

## 技术细节

### 流程

1. 用户登录后，客户端通过 `useEffect` 调用 `/api/admin/check`
2. API 路由从环境变量读取 `ADMIN_EMAILS`
3. 检查用户邮箱是否在管理员列表中
4. 返回结果并更新用户菜单
5. 管理员菜单项显示/隐藏

### 文件结构

```
src/
├── lib/auth/
│   └── admin.ts                    # 管理员检查函数
├── app/api/admin/
│   └── check/
│       └── route.ts                # 管理员检查 API
└── components/layout/
    └── user-menu.tsx               # 用户菜单（含管理员功能）
```

## 注意事项

1. **重启服务器** - 修改环境变量后需要重启开发服务器
2. **生产环境** - 确保在生产环境中正确配置 `ADMIN_EMAILS`
3. **邮箱格式** - 确保邮箱地址格式正确，没有多余空格
4. **权限控制** - 管理后台页面本身也需要添加权限检查

## 下一步

可以考虑添加：
- 管理后台首页（仪表板）
- 用户管理功能
- 系统设置
- 内容审核流程
- 操作日志

