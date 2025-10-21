import { Metadata } from "next";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { DashboardPage } from "@/components/dashboard";
import { getDictionary } from "@/i18n";
import { type Locale } from "@/i18n/types";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.locale);
  
  return {
    title: dictionary.pages.dashboard.title,
    description: dictionary.pages.dashboard.description,
  };
}

export default async function DashboardPageRoute({ params }: { params: Promise<{ locale: Locale }> }) {
  const resolvedParams = await params;
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((mod) => mod.headers()),
  });

  if (!session?.user) {
    redirect(`/${resolvedParams.locale}/login`);
  }

  const user = session.user;
  const dictionary = getDictionary(resolvedParams.locale);

  return <DashboardPage dictionary={dictionary.pages.dashboard} userName={user.name || undefined} />;
}

