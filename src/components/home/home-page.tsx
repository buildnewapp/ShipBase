import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Rocket } from "lucide-react";
import type { AppDictionary } from "@/i18n";

interface HomePageProps {
  dictionary: AppDictionary;
}

export function HomePage({ dictionary }: HomePageProps) {
  const { home } = dictionary;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-semibold">
              {home.badgeLabel}
            </Badge>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl lg:text-7xl">
              {home.heroTitle}
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-600 dark:text-neutral-300">
              {home.heroDescription}
            </p>
            
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                {home.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                {home.ctaSecondary}
              </Button>
            </div>
            
            <div className="mb-8">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {home.promotionText}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {home.userCount}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.techStackTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {home.techStackItems.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-2">{item.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">{item.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.featuresTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.featuresSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {home.features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.benefitsTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.benefitsSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {home.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {index === 0 && <Shield className="h-12 w-12 text-primary" />}
                  {index === 1 && <Zap className="h-12 w-12 text-primary" />}
                  {index === 2 && <Users className="h-12 w-12 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Steps Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.launchStepsTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.launchStepsSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {home.launchSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.keyFeaturesTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.keyFeaturesSubtitle}
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {home.keyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.testimonialsTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.testimonialsSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {home.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-600 dark:text-neutral-300 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-50">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            {home.finalCtaTitle}
          </h2>
          <p className="mb-8 text-xl text-neutral-600 dark:text-neutral-300">
            {home.finalCtaSubtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Rocket className="mr-2 h-5 w-5" />
              {home.finalCtaButton}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              {home.finalCtaSecondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
