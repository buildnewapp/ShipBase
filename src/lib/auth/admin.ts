/**
 * 检查用户是否为管理员
 * @param email 用户邮箱
 * @returns 是否为管理员
 */
export function isAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  
  // 在客户端组件中，需要通过 API 来检查
  // 这里返回 false，实际检查在服务器端
  if (typeof window !== 'undefined') {
    return false;
  }
  
  const adminEmails = process.env.ADMIN_EMAILS?.split(",").map(e => e.trim()) || [];
  return adminEmails.includes(email);
}

/**
 * 在客户端检查用户是否为管理员
 * 需要通过 API 路由进行验证
 */
export async function checkAdminStatus(email: string): Promise<boolean> {
  try {
    const response = await fetch('/api/admin/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    return data.isAdmin || false;
  } catch {
    return false;
  }
}

