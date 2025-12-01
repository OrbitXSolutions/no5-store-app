"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { t, dir } = useLanguage()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0">
        <img
          src="/elegant-woman-wearing-luxury-black-abaya-in-modern.jpg"
          alt="No.5 Boutique - Elegant Abaya Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-6 animate-fade-in-up opacity-0">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-2">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 stagger-3">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group text-base">
              {t.hero.cta}
              <Arrow className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base bg-transparent"
              asChild
            >
              <Link href="/about">{t.hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
