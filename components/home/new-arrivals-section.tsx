"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart, CreditCard } from "lucide-react"

const products = [
  {
    id: 1,
    slug: "silk-elegance-abaya",
    image: "/elegant-black-silk-abaya-with-gold-embroidery-luxu.jpg",
    titleEn: "Silk Elegance Abaya",
    titleAr: "عباءة حرير أنيقة",
    price: 850,
    originalPrice: 1100,
    isNew: true,
    currency: "AED",
  },
  {
    id: 2,
    slug: "royal-navy-abaya",
    image: "/navy-blue-embroidered-abaya-luxury-modern.jpg",
    titleEn: "Royal Navy Abaya",
    titleAr: "عباءة الأزرق الملكي",
    price: 950,
    isNew: true,
    currency: "AED",
  },
  {
    id: 3,
    slug: "kimono-open-abaya",
    image: "/beige-open-abaya-kimono-style-elegant.jpg",
    titleEn: "Kimono Open Abaya",
    titleAr: "عباءة كيمونو مفتوحة",
    price: 720,
    originalPrice: 890,
    isNew: false,
    currency: "AED",
  },
  {
    id: 4,
    slug: "oud-royale-perfume",
    image: "/luxury-arabic-oud-perfume-bottle-gold-elegant.jpg",
    titleEn: "Oud Royale Perfume",
    titleAr: "عطر عود رويال",
    price: 450,
    isNew: true,
    currency: "AED",
  },
]

export function NewArrivalsSection() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t.newArrivals.title}
            </h2>
            <p className="text-muted-foreground text-lg">{t.newArrivals.subtitle}</p>
          </div>
          <Button variant="outline" className="w-fit bg-transparent">
            {t.collections.viewAll}
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.slug}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={language === "ar" ? product.titleAr : product.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badges */}
                  {product.isNew && (
                    <span className="absolute top-3 start-3 bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded">
                      {t.collections.newBadge}
                    </span>
                  )}
                  {/* Quick Actions */}
                  <div className="absolute top-3 end-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="w-9 h-9 bg-background rounded-full flex items-center justify-center shadow-md hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={(e) => e.preventDefault()}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ShoppingBag className="h-4 w-4 me-2" />
                        {t.newArrivals.addToCart}
                      </Button>
                      <Button onClick={(e) => e.preventDefault()} variant="secondary" className="w-full">
                        <CreditCard className="h-4 w-4 me-2" />
                        {t.newArrivals.buyNow}
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Product Info - Also clickable */}
              <Link href={`/products/${product.slug}`}>
                <h3 className="font-medium text-primary group-hover:text-secondary transition-colors mb-2">
                  {language === "ar" ? product.titleAr : product.titleEn}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">
                    {product.currency} {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">
                      {product.currency} {product.originalPrice}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
