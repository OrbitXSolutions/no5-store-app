"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import Link from "next/link"

const categories = [
  {
    id: 1,
    image: "/elegant-black-abaya-luxury-fashion.jpg",
    titleEn: "Classic Abayas",
    titleAr: "عباءات كلاسيكية",
  },
  {
    id: 2,
    image: "/embroidered-abaya-luxury-gold-detail.jpg",
    titleEn: "Embroidered",
    titleAr: "عباءات مطرزة",
  },
  {
    id: 3,
    image: "/modern-open-abaya-fashion-kimono-style.jpg",
    titleEn: "Open Abayas",
    titleAr: "عباءات مفتوحة",
  },
  {
    id: 4,
    image: "/luxury-silk-hijab-scarf-collection.jpg",
    titleEn: "Hijabs & Scarves",
    titleAr: "حجابات وأوشحة",
  },
  {
    id: 5,
    image: "/luxury-evening-dress-gown-women-fashion.jpg",
    titleEn: "Evening Wear",
    titleAr: "ملابس سهرة",
  },
  {
    id: 6,
    image: "/luxury-arabic-perfume-oud-bottle-elegant.jpg",
    titleEn: "Perfumes",
    titleAr: "عطور",
  },
]

export function CategoriesSection() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t.categories.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.categories.subtitle}</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href="#" className="group flex flex-col items-center text-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 ring-2 ring-transparent group-hover:ring-secondary transition-all duration-300">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={language === "ar" ? category.titleAr : category.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-medium text-primary group-hover:text-secondary transition-colors">
                {language === "ar" ? category.titleAr : category.titleEn}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
