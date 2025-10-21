import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/types';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 检查路径是否缺少语言前缀
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 如果路径缺少语言前缀，重写URL到默认语言版本
  if (pathnameIsMissingLocale) {
    // 重写URL到默认语言版本，但不重定向
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // 匹配所有路径，除了：
  // - api 路由
  // - admin 路由
  // - _next/static (静态文件)
  // - _next/image (图片优化)
  // - favicon.ico
  // - sitemap.xml, robots.txt (SEO 文件)
  matcher: [
    '/((?!api|admin|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
