"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export function FeaturedBannerSection() {
  const { t, dir } = useLanguage()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
            {/* Content */}
            <div className="flex items-center p-8 lg:p-16">
              <div className="text-primary-foreground">
                <span className="inline-block bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full mb-6">
                  {t.collections.newBadge}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {dir === "rtl" ? "مجموعة حصرية لفصل الشتاء" : "Exclusive Winter Collection"}
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                  {dir === "rtl"
                    ? "اكتشف أحدث صيحات الموضة الشتوية مع خصم يصل إلى 30%"
                    : "Discover the latest winter fashion trends with up to 30% off"}
                </p>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group">
                  {t.newArrivals.shopNow}
                  <Arrow className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <img
                src="/elegant-winter-fashion-model-coat-luxury.jpg"
                alt="Winter Collection"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
