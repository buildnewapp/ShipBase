import { Metadata } from "next";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Calendar, Shield } from "lucide-react";
import { getDictionary } from "@/i18n";
import { type Locale } from "@/i18n/types";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dictionary = getDictionary(params.locale);
  
  return {
    title: dictionary.pages.profile.title,
    description: dictionary.pages.profile.description,
  };
}

export default async function ProfilePage({ params }: { params: { locale: Locale } }) {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((mod) => mod.headers()),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;
  const dictionary = getDictionary(params.locale);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            {dictionary.pages.profile.subtitle}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {dictionary.pages.profile.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 基本信息 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {dictionary.pages.profile.basicInfo.title}
              </CardTitle>
              <CardDescription>
                {dictionary.pages.profile.basicInfo.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || user.email || "User"}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-semibold text-lg">
                      {(user.name || user.email || "U")
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    {user.name || dictionary.pages.profile.noNameSet}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {user.email}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {dictionary.pages.profile.basicInfo.emailLabel}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {user.email}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neutral-500" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dictionary.pages.profile.basicInfo.registrationDate}
                </span>
              </div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString(params.locale === 'zh' ? 'zh-CN' : params.locale === 'ja' ? 'ja-JP' : 'en-US') : dictionary.pages.profile.basicInfo.unknown}
              </p>
            </CardContent>
          </Card>

          {/* 账户状态 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {dictionary.pages.profile.accountStatus.title}
              </CardTitle>
              <CardDescription>
                {dictionary.pages.profile.accountStatus.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dictionary.pages.profile.accountStatus.emailVerification}
                </span>
                <Badge variant={user.emailVerified ? "default" : "secondary"}>
                  {user.emailVerified ? dictionary.pages.profile.accountStatus.verified : dictionary.pages.profile.accountStatus.unverified}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dictionary.pages.profile.accountStatus.accountStatus}
                </span>
                <Badge variant="default">
                  {dictionary.pages.profile.accountStatus.normal}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {dictionary.pages.profile.accountStatus.loginMethod}
                </span>
                <Badge variant="outline">
                  {user.image ? dictionary.pages.profile.accountStatus.oauth : dictionary.pages.profile.accountStatus.emailLogin}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 操作按钮 */}
        <div className="mt-8 flex gap-4">
          <button className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
            {dictionary.pages.profile.actions.editProfile}
          </button>
          <button className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800">
            {dictionary.pages.profile.actions.changePassword}
          </button>
        </div>
      </div>
    </div>
  );
}
