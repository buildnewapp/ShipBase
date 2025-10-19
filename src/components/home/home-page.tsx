import { AuthPanel } from "@/components/auth/auth-panel";
import { RichTextContent } from "@/components/i18n/rich-text";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AppDictionary } from "@/i18n";

interface HomePageProps {
  dictionary: AppDictionary;
}

export function HomePage({ dictionary }: HomePageProps) {
  const { home, authPanel } = dictionary;

  return (
    <div className="bg-gradient-to-br from-neutral-100 via-white to-neutral-200 px-6 py-16 font-sans dark:from-neutral-900 dark:via-neutral-950 dark:to-black sm:px-10 lg:px-16">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <section className="max-w-xl space-y-6">
          <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-wider">
            {home.badgeLabel}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            {home.heroTitle}
          </h1>
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            {home.heroDescription}
          </p>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                {home.bullets.map((bullet, index) => (
                  <li className="flex items-start gap-3" key={`feature-${index}`}>
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>
                      <RichTextContent segments={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
        <AuthPanel dictionary={authPanel} />
      </main>
    </div>
  );
}
