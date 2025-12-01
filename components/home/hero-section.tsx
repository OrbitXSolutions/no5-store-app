"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const { t, dir } = useLanguage()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      <Image
        src="/elegant-woman-wearing-luxury-black-abaya-in-modern.jpg"
        alt="Elegant woman wearing black abaya"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent rtl:bg-gradient-to-l" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group text-base"
              asChild
            >
              <Link href="/shop">
                {t.hero.cta}
                <Arrow className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link href="/about">{t.hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 bg-white/30 backdrop-blur-sm">
          <div className="w-1 h-2 bg-primary/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
