import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/server";
import { OrderService } from "@/lib/orders/service";
import { eq, and, desc, like, or } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { orders } from "@/lib/db/schema/orders";

function respErr(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

function respData<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

// 获取用户的订单列表
export async function GET(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    const userId = session?.user?.id;
    
    if (!userId) {
      return respErr("no auth, please sign-in", 401);
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    // 构建查询条件
    let whereConditions = eq(orders.userId, userId);
    
    // 添加状态筛选
    if (status && status !== 'all') {
      whereConditions = and(whereConditions, eq(orders.status, status));
    }
    
    // 添加搜索条件
    if (search) {
      whereConditions = and(
        whereConditions,
        or(
          like(orders.orderNumber, `%${search}%`),
          like(orders.productName, `%${search}%`)
        )
      );
    }

    // 获取订单列表
    const ordersList = await db
      .select()
      .from(orders)
      .where(whereConditions)
      .orderBy(desc(orders.createdAt))
      .limit(limit)
      .offset(offset);

    // 获取总数
    const totalResult = await db
      .select({ count: orders.id })
      .from(orders)
      .where(whereConditions);
    
    const total = totalResult.length;
    
    return respData({
      orders: ordersList,
      pagination: {
        limit,
        offset,
        total,
        hasMore: offset + limit < total,
      }
    });
  } catch (e: unknown) {
    console.log("获取订单列表失败: ", e);
    const errorMessage = e instanceof Error ? e.message : String(e);
    return respErr("获取订单列表失败: " + errorMessage);
  }
}

// 获取特定订单详情
export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    const userId = session?.user?.id;
    
    if (!userId) {
      return respErr("no auth, please sign-in", 401);
    }

    const { orderId }: { orderId?: string } = await req.json();
    
    if (!orderId) {
      return respErr("invalid params: orderId");
    }

    const result = await OrderService.getOrderWithItems(orderId);
    
    if (!result.order) {
      return respErr("订单未找到", 404);
    }

    // 检查订单是否属于当前用户
    if (result.order.userId !== userId) {
      return respErr("无权访问此订单", 403);
    }
    
    return respData(result);
  } catch (e: unknown) {
    console.log("获取订单详情失败: ", e);
    const errorMessage = e instanceof Error ? e.message : String(e);
    return respErr("获取订单详情失败: " + errorMessage);
  }
}
