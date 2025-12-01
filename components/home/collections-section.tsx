"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    id: 1,
    image: "/luxury-ramadan-abaya-collection-elegant-woman-duba.jpg",
    titleEn: "Ramadan Collection",
    titleAr: "مجموعة رمضان",
  },
  {
    id: 2,
    image: "/elegant-wedding-abaya-bride-luxury-white-gold.jpg",
    titleEn: "Bridal Collection",
    titleAr: "مجموعة العروس",
  },
  {
    id: 3,
    image: "/casual-everyday-abaya-modern-woman-fashion.jpg",
    titleEn: "Everyday Elegance",
    titleAr: "أناقة يومية",
  },
]

export function CollectionsSection() {
  const { t, language, dir } = useLanguage()
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-fade-in-up opacity-0">
            {t.collections.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up opacity-0 stagger-1">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href="#"
              className={`group relative overflow-hidden rounded-lg aspect-[4/5] animate-fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <img
                src={collection.image || "/placeholder.svg"}
                alt={language === "ar" ? collection.titleAr : collection.titleEn}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary-foreground mb-2">
                  {language === "ar" ? collection.titleAr : collection.titleEn}
                </h3>
                <span className="inline-flex items-center text-sm text-primary-foreground/80 group-hover:text-secondary transition-colors">
                  {t.collections.viewAll}
                  <Arrow className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
