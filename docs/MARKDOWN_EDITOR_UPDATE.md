# Markdown 编辑器更新说明

## 更新内容

已将复杂的 Tiptap 富文本编辑器替换为简单的 Markdown 编辑器。

### 变更内容

**替换的包：**
- ❌ 移除：`@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-placeholder`
- ✅ 添加：`@uiw/react-md-editor`, `react-markdown`

**修改的文件：**
- `src/components/ui/rich-text-editor.tsx` - 使用 Markdown 编辑器
- `src/components/blogs/blog-detail.tsx` - 使用 ReactMarkdown 渲染

## 新功能特性

### Markdown 编辑器优势
1. **简单易用** - 只需要一个 npm 包
2. **实时预览** - 左侧编辑，右侧预览
3. **轻量级** - 包体积小，加载快
4. **通用性** - Markdown 是标准格式

### 支持的 Markdown 语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本**
*斜体文本*

- 无序列表项
- 无序列表项

1. 有序列表项
2. 有序列表项

> 引用文本

`行内代码`

```
代码块
```

[链接文本](https://example.com)

![图片描述](image-url)
```

## 使用方法

### 编辑博客
1. 访问 `/admin/blogs/new` 或 `/admin/blogs/[id]/edit`
2. 在 Content 部分使用 Markdown 语法编写
3. 左侧编辑，右侧实时预览

### 示例内容

```markdown
# 我的第一篇博客

这是一段**加粗**和*斜体*的文本。

## 列表示例

- 第一项
- 第二项
- 第三项

## 代码示例

```javascript
console.log("Hello, World!");
```

## 引用

> 这是一段引用文本

## 链接

访问 [ShipBase](https://shipbase.ai) 了解更多。
```

## 技术细节

### 编辑器组件
```tsx
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

<MDEditor
  value={content}
  onChange={(value) => onChange(value || "")}
  preview="edit"
  hideToolbar={false}
  visibleDragBar={false}
  data-color-mode="light"
/>
```

### 渲染组件
```tsx
import ReactMarkdown from "react-markdown";

<ReactMarkdown>{blog.content}</ReactMarkdown>
```

## 注意事项

1. **数据格式** - 博客内容现在以 Markdown 格式存储
2. **兼容性** - 与之前的 HTML 内容可能不兼容，需要重新编辑
3. **样式** - 使用 Tailwind Typography 插件美化 Markdown 渲染效果

## 优势对比

| 特性 | Tiptap | Markdown Editor |
|------|--------|----------------|
| 包大小 | 大 (64 个依赖) | 小 (1 个主包) |
| 学习曲线 | 陡峭 | 平缓 |
| 数据格式 | HTML | Markdown |
| 实时预览 | 需要配置 | 内置 |
| 通用性 | 低 | 高 |
| 兼容性 | 需要处理 | 标准格式 |

## 总结

Markdown 编辑器更简单、更轻量，适合大多数博客写作场景。开发者友好的语法，易于维护和扩展。

