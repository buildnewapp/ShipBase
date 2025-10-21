# 环境变量配置说明

## 管理员配置

### ADMIN_EMAILS

**描述：** 配置管理员邮箱列表，多个邮箱用逗号分隔。

**示例：**
```bash
ADMIN_EMAILS=admin@example.com,owner@example.com,superuser@example.com
```

**用途：**
- 管理员可以访问管理后台（/admin/blogs）
- 管理员在用户菜单中会看到"管理后台"选项
- 管理员拥有所有博客的编辑和删除权限

**安全注意事项：**
- 不要在生产环境中公开这些邮箱
- 定期审查管理员列表
- 确保邮箱地址正确无误

## 完整环境变量列表

除了现有的环境变量（DATABASE_URL, BETTER_AUTH_SECRET 等），新增：

```bash
# 管理员邮箱（多个用逗号分隔）
ADMIN_EMAILS=admin@example.com,owner@example.com
```

## 在 .env.local 中配置

在项目根目录的 `.env.local` 文件中添加：

```bash
# Admin Configuration
ADMIN_EMAILS=your-admin-email@example.com
```

多个管理员：

```bash
ADMIN_EMAILS=admin1@example.com,admin2@example.com,admin3@example.com
```

## 使用示例

在代码中使用：

```typescript
import { isAdmin } from "@/lib/auth/admin";

const userEmail = session?.user?.email;
if (isAdmin(userEmail)) {
  // 用户是管理员
  // 显示管理员功能
}
```

