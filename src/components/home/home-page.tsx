"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Rocket, Play, ChevronDown, ExternalLink } from "lucide-react";
import type { AppDictionary } from "@/i18n";
import { useState } from "react";
import Image from "next/image";

interface HomePageProps {
  dictionary: AppDictionary;
}

export function HomePage({ dictionary }: HomePageProps) {
  const { home } = dictionary;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950">
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30" />
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        </div>
        
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
                <Play className="mr-2 h-5 w-5" />
                {home.watchDemo}
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
            
            {/* Scroll indicator */}
            <div className="flex justify-center">
              <div className="animate-bounce">
                <ChevronDown className="h-6 w-6 text-neutral-400" />
              </div>
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
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-2">{item.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">{item.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.productShowcaseTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.productShowcaseSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {home.showcaseItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    loader={({ src }) => src}
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto">
                    {home.viewDetails} <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
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
      <section className="bg-neutral-100 dark:bg-neutral-800 px-6 py-16 sm:px-10 lg:px-16">
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

      {/* Stats Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.statsTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.statsSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {home.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                  {stat.label}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300">
                  {stat.description}
                </div>
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
                    &ldquo;{testimonial.quote}&rdquo;
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

      {/* FAQ Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {home.faqTitle}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {home.faqSubtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            {home.faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-neutral-500 transition-transform ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            {home.finalCtaTitle}
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            {home.finalCtaSubtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50">
              <Rocket className="mr-2 h-5 w-5" />
              {home.finalCtaButton}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm">
              {home.finalCtaSecondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}