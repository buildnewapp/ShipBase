# ShipBase 价格系统

ShipBase 现在支持多种付费方式，包括一次性付费、按月付费、按年付费，并提供了完整的国际化支持。

## 功能特性

- ✅ **多种付费方式**：一次性付费、按月付费、按年付费
- ✅ **年付优惠**：年付享受 20% 折扣
- ✅ **国际化支持**：支持中文、英文、日文
- ✅ **灵活配置**：价格信息独立配置文件，方便修改
- ✅ **响应式设计**：适配各种屏幕尺寸
- ✅ **类型安全**：完整的 TypeScript 类型定义

## 文件结构

```
src/
├── lib/pricing/
│   ├── config.ts          # 价格配置文件
│   └── types.ts           # TypeScript 类型定义
├── components/pricing/
│   ├── pricing-component.tsx  # 主要价格组件
│   ├── pricing-card.tsx       # 价格卡片组件
│   ├── billing-toggle.tsx      # 计费周期切换组件
│   └── index.ts               # 组件导出
└── i18n/locales/
    ├── zh.ts              # 中文翻译
    ├── en.ts              # 英文翻译
    └── ja.ts              # 日文翻译
```

## 使用方法

### 1. 基本使用

```tsx
import { PricingComponent } from "@/components/pricing";

export default function PricingPage() {
  const handlePlanSelect = (planId: string, period: PricingPeriod) => {
    console.log('Selected plan:', planId, 'Period:', period);
    // 处理购买逻辑
  };

  return (
    <PricingComponent
      locale="zh"
      showBillingToggle={true}
      defaultPeriod="yearly"
      onPlanSelect={handlePlanSelect}
    />
  );
}
```

### 2. 自定义配置

```tsx
import { pricingConfig, formatPrice } from "@/lib/pricing/config";

// 获取特定方案的价格
const professionalPricing = pricingConfig.plans.find(p => p.id === 'professional');
const yearlyPrice = professionalPricing?.pricing.yearly;

// 格式化价格显示
const formattedPrice = formatPrice(299, 'CNY'); // "¥299"
```

### 3. 单独使用组件

```tsx
import { PricingCard, BillingToggle } from "@/components/pricing";

// 使用单个价格卡片
<PricingCard
  plan={plan}
  period="yearly"
  locale="zh"
  onSelect={handleSelect}
/>

// 使用计费周期切换
<BillingToggle
  period={selectedPeriod}
  onPeriodChange={setSelectedPeriod}
  locale="zh"
/>
```

## 价格配置

价格配置位于 `src/lib/pricing/config.ts`，包含：

- **方案定义**：免费版、专业版、企业版
- **付费周期**：一次性、月付、年付
- **价格设置**：支持折扣和原价显示
- **功能列表**：每个方案包含的功能和限制

### 修改价格

1. 编辑 `src/lib/pricing/config.ts`
2. 更新 `pricingConfig.plans` 中的价格信息
3. 修改 `billingCycles` 中的周期标签和描述

```typescript
// 示例：修改专业版价格
{
  id: 'professional',
  name: '专业版',
  pricing: {
    'one-time': {
      price: 299,
      currency: 'CNY',
      period: '一次性付费'
    },
    'monthly': {
      price: 39,
      currency: 'CNY',
      period: '每月'
    },
    'yearly': {
      price: 374,
      currency: 'CNY',
      period: '每年',
      originalPrice: 468,
      discount: 20
    }
  }
}
```

## 国际化

支持的语言：
- 中文 (zh)
- 英文 (en)  
- 日文 (ja)

### 添加新语言

1. 在 `src/i18n/locales/` 创建新的语言文件
2. 添加价格相关的翻译
3. 更新 `src/i18n/types.ts` 中的类型定义

## 演示页面

访问 `/pricing-demo` 查看完整的价格功能演示。

## API 参考

### PricingComponent Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| locale | string | "zh" | 语言环境 |
| showBillingToggle | boolean | true | 是否显示计费周期切换 |
| defaultPeriod | PricingPeriod | "yearly" | 默认计费周期 |
| onPlanSelect | function | - | 方案选择回调 |
| className | string | - | 自定义样式类 |

### PricingPeriod

```typescript
type PricingPeriod = 'one-time' | 'monthly' | 'yearly';
```

### PricingPlan

```typescript
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  pricing: {
    [K in PricingPeriod]: {
      price: number;
      currency: string;
      period: string;
      originalPrice?: number;
      discount?: number;
    };
  };
}
```

## 样式定制

组件使用 Tailwind CSS 构建，可以通过以下方式自定义样式：

1. **修改默认样式**：编辑组件文件中的 className
2. **使用 CSS 变量**：通过 CSS 变量覆盖主题颜色
3. **添加自定义类**：通过 `className` prop 传入自定义样式

## 注意事项

1. **价格更新**：修改价格后需要重新构建应用
2. **货币支持**：目前主要支持 CNY，可扩展支持其他货币
3. **支付集成**：需要集成实际的支付服务（如 Stripe）
4. **数据持久化**：用户选择的价格信息需要保存到数据库

## 扩展功能

可以考虑添加的功能：

- [ ] 更多货币支持
- [ ] 优惠码功能
- [ ] 团队折扣
- [ ] 试用期功能
- [ ] 价格比较工具
- [ ] 订阅管理面板
