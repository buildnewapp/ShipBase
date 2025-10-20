import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/server";
import { OrderService } from "@/lib/orders/service";

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

    const orders = await OrderService.getUserOrders(userId, limit, offset);
    
    return respData({
      orders,
      pagination: {
        limit,
        offset,
        total: orders.length,
      }
    });
  } catch (e: any) {
    console.log("获取订单列表失败: ", e);
    return respErr("获取订单列表失败: " + (e?.message || String(e)));
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
  } catch (e: any) {
    console.log("获取订单详情失败: ", e);
    return respErr("获取订单详情失败: " + (e?.message || String(e)));
  }
}
