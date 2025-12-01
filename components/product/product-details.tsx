"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { SizeGuideTable } from "@/components/product/size-guide-table"
import { ProductReviews } from "@/components/product/product-reviews"
import { BrandsSection } from "@/components/home/brands-section"
import { ShoppingCart, Heart, Truck, RotateCcw, Shield, Check, Minus, Plus, ChevronRight, Star } from "lucide-react"

interface ProductDetailsProps {
  product: {
    id: string
    slug: string
    nameEn: string
    nameAr: string
    price: number
    originalPrice?: number
    currency: string
    sku: string
    categoryEn: string
    categoryAr: string
    tagsEn: string[]
    tagsAr: string[]
    descriptionEn: string
    descriptionAr: string
    detailsEn: string[]
    detailsAr: string[]
    colors: { id: string; nameEn: string; nameAr: string; hex: string }[]
    sizes: string[]
    stock: Record<string, number>
    images: { type: "image" | "video"; url: string; thumbnail?: string; alt: string }[]
    model: { size: string; height: number; bust: number; waist: number; hips: number; image: string }
    measurements: Record<string, { shoulder: number; length: number; sleeve: number; chest: number }>
    reviews: {
      id: number
      nameEn: string
      nameAr: string
      rating: number
      date: string
      verified: boolean
      textEn: string
      textAr: string
      helpful: number
    }[]
    relatedProducts: { id: string; slug: string; nameEn: string; nameAr: string; price: number; image: string }[]
  }
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const sizeGuideRef = useRef<HTMLDivElement>(null)

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<"description" | "details" | "size" | "shipping">("description")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const name = isRTL ? product.nameAr : product.nameEn
  const category = isRTL ? product.categoryAr : product.categoryEn
  const tags = isRTL ? product.tagsAr : product.tagsEn
  const description = isRTL ? product.descriptionAr : product.descriptionEn
  const details = isRTL ? product.detailsAr : product.detailsEn

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const currentStock = selectedSize ? product.stock[selectedSize] : null

  const averageRating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length

  const whatsappMessage = encodeURIComponent(
    isRTL
      ? `مرحباً، أرغب في الاستفسار عن: ${name}\nاللون: ${selectedColor.nameAr}\nالمقاس: ${selectedSize || "لم يتم التحديد"}\nالرابط: ${typeof window !== "undefined" ? window.location.href : ""}`
      : `Hello, I'm interested in: ${name}\nColor: ${selectedColor.nameEn}\nSize: ${selectedSize || "Not selected"}\nLink: ${typeof window !== "undefined" ? window.location.href : ""}`,
  )
  const whatsappLink = `https://wa.me/971588998267?text=${whatsappMessage}`

  const scrollToSizeGuide = () => {
    setActiveTab("size")
    setTimeout(() => {
      sizeGuideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert(isRTL ? "الرجاء اختيار المقاس" : "Please select a size")
      return
    }
    console.log("Added to cart:", { product: product.id, color: selectedColor.id, size: selectedSize, quantity })
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert(isRTL ? "الرجاء اختيار المقاس" : "Please select a size")
      return
    }
    console.log("Buy now:", { product: product.id, color: selectedColor.id, size: selectedSize, quantity })
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {isRTL ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shop" className="hover:text-foreground transition-colors">
              {isRTL ? "المتجر" : "Shop"}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{name}</span>
          </nav>
        </div>

        {/* Main Product Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Gallery */}
            <ProductGallery images={product.images} productName={name} />

            {/* Product Info */}
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Rating */}
              <div>
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">{name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.round(averageRating) ? "fill-secondary text-secondary" : "text-muted-foreground"}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ms-1">
                      ({averageRating.toFixed(1)}) · {product.reviews.length} {isRTL ? "تقييم" : "reviews"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  {product.price} {product.currency}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {product.originalPrice} {product.currency}
                    </span>
                    <span className="px-2 py-1 text-sm font-medium bg-red-100 text-red-600 rounded">-{discount}%</span>
                  </>
                )}
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium text-foreground mb-3">
                  {t.product.color}:{" "}
                  <span className="text-muted-foreground">{isRTL ? selectedColor.nameAr : selectedColor.nameEn}</span>
                </h3>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        selectedColor.id === color.id
                          ? "border-secondary ring-2 ring-secondary/30 scale-110"
                          : "border-border hover:border-secondary/50"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={isRTL ? color.nameAr : color.nameEn}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-foreground">
                    {t.product.size}: {selectedSize && <span className="text-muted-foreground">{selectedSize}</span>}
                  </h3>
                  <button onClick={scrollToSizeGuide} className="text-sm text-secondary hover:underline">
                    {t.product.sizeGuide}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const stock = product.stock[size]
                    const isOutOfStock = stock === 0
                    return (
                      <button
                        key={size}
                        onClick={() => !isOutOfStock && setSelectedSize(size)}
                        disabled={isOutOfStock}
                        className={`min-w-[44px] px-3 py-2 text-sm rounded-md border transition-all duration-300 ${
                          selectedSize === size
                            ? "border-secondary bg-secondary text-secondary-foreground"
                            : isOutOfStock
                              ? "border-border bg-muted text-muted-foreground cursor-not-allowed line-through"
                              : "border-border hover:border-secondary/50 text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    )
                  })}
                </div>
                {/* Stock Status */}
                {selectedSize && (
                  <p
                    className={`mt-2 text-sm ${currentStock && currentStock <= 5 ? "text-red-500" : "text-green-600"}`}
                  >
                    {currentStock === 0
                      ? t.product.outOfStock
                      : currentStock && currentStock <= 5
                        ? t.product.limitedStock.replace("{count}", String(currentStock))
                        : t.product.inStock}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium text-foreground mb-3">{t.product.quantity}</h3>
                <div className="flex items-center gap-1 w-fit border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <Button
                    onClick={handleAddToCart}
                    variant="outline"
                    className="flex-1 h-12 text-sm font-semibold border-2 border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                  >
                    <ShoppingCart className="w-4 h-4 me-2" />
                    {t.product.addToCart}
                  </Button>

                  <Button
                    onClick={handleBuyNow}
                    className="flex-1 h-12 text-sm font-semibold bg-primary hover:bg-primary/90"
                  >
                    {t.product.buyNow}
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="h-12 w-12 border-2 border-border"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 transition-colors py-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="font-medium">{t.product.contactWhatsapp}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5 text-secondary" />
                  <span>{t.product.freeShipping}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RotateCcw className="w-5 h-5 text-secondary" />
                  <span>{t.product.easyReturns}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>{t.product.securePayment}</span>
                </div>
              </div>

              {/* SKU & Category */}
              <div className="text-sm text-muted-foreground space-y-1 pt-4 border-t border-border">
                <p>
                  <span className="font-medium text-foreground">{t.product.sku}:</span> {product.sku}
                </p>
                <p>
                  <span className="font-medium text-foreground">{t.product.category}:</span> {category}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16" ref={sizeGuideRef}>
            <div className="flex flex-wrap border-b border-border mb-8">
              {(
                [
                  { key: "description", label: t.product.description },
                  { key: "details", label: t.product.details },
                  { key: "size", label: t.product.sizeGuide },
                  { key: "shipping", label: t.product.shipping },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                    activeTab === tab.key ? "text-secondary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && <span className="absolute bottom-0 start-0 end-0 h-0.5 bg-secondary" />}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl">
              {activeTab === "description" && (
                <div className="prose prose-lg max-w-none">
                  {description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {activeTab === "details" && (
                <ul className="space-y-3">
                  {details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "size" && <SizeGuideTable product={product} />}

              {activeTab === "shipping" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{isRTL ? "الشحن" : "Shipping"}</h3>
                    <p className="text-muted-foreground">
                      {isRTL
                        ? "شحن مجاني داخل الإمارات للطلبات فوق 500 درهم. التوصيل خلال 2-3 أيام عمل. الشحن الدولي متاح لدول الخليج."
                        : "Free shipping within UAE for orders over 500 AED. Delivery within 2-3 business days. International shipping available to GCC countries."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {isRTL ? "الإرجاع والاستبدال" : "Returns & Exchanges"}
                    </h3>
                    <p className="text-muted-foreground">
                      {isRTL
                        ? "نقبل الإرجاع والاستبدال خلال 14 يوماً من تاريخ الاستلام. يجب أن تكون المنتجات في حالتها الأصلية مع جميع العلامات."
                        : "We accept returns and exchanges within 14 days of delivery. Items must be in original condition with all tags attached."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 py-12 px-6 bg-muted/30 rounded-2xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {isRTL ? "الشحن والإرجاع" : "Shipping & Returns"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{isRTL ? "شحن مجاني" : "Free Shipping"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "للطلبات فوق 500 درهم داخل الإمارات" : "For orders over 500 AED within UAE"}
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{isRTL ? "إرجاع سهل" : "Easy Returns"}</h3>
                <p className="text-sm text-muted-foreground">{isRTL ? "سياسة إرجاع 14 يوم" : "14-day return policy"}</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{isRTL ? "دفع آمن" : "Secure Payment"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isRTL ? "Visa, Stripe, Tamara, الدفع عند الاستلام" : "Visa, Stripe, Tamara, Cash on Delivery"}
                </p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <ProductReviews reviews={product.reviews} averageRating={averageRating} />
        </div>

        {/* Why Choose Us */}
        <BrandsSection />

        {/* Related Products */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t.product.relatedProducts}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {product.relatedProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.slug}`} className="group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={isRTL ? item.nameAr : item.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors mb-1 text-sm md:text-base">
                  {isRTL ? item.nameAr : item.nameEn}
                </h3>
                <p className="text-secondary font-semibold">
                  {item.price} {product.currency}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
