"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  ShoppingCart,
  Minus,
  Plus,
  Check,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  Banknote,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductGallery } from "./product-gallery"
import { SizeGuideTable } from "./size-guide-table"
import { ProductReviews } from "./product-reviews"
import { BrandsSection } from "@/components/home/brands-section"
import Link from "next/link"
import { useRouter } from "next/navigation"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function VisaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="8" fill="#1A1F71" />
      <path d="M19.5 30L21.5 18H24.5L22.5 30H19.5Z" fill="white" />
      <path
        d="M32.5 18.3C31.8 18 30.8 17.7 29.5 17.7C26.5 17.7 24.4 19.3 24.4 21.5C24.4 23.2 25.9 24.1 27.1 24.7C28.3 25.3 28.7 25.7 28.7 26.2C28.7 27 27.7 27.4 26.8 27.4C25.5 27.4 24.8 27.2 23.7 26.7L23.3 26.5L22.9 29.3C23.7 29.7 25.1 30 26.6 30C29.8 30 31.9 28.4 31.9 26.1C31.9 24.8 31.1 23.8 29.3 23C28.2 22.4 27.5 22 27.5 21.4C27.5 20.9 28.1 20.4 29.3 20.4C30.3 20.4 31.1 20.6 31.7 20.9L32 21L32.5 18.3Z"
        fill="white"
      />
      <path
        d="M37.1 18H34.8C34.1 18 33.5 18.2 33.2 19L28.5 30H31.7L32.3 28.3H36.2L36.6 30H39.5L37.1 18ZM33.2 26C33.5 25.2 34.7 22 34.7 22C34.7 22 35 21.2 35.2 20.7L35.4 22L36.2 26H33.2Z"
        fill="white"
      />
      <path d="M17.5 18L14.5 26.1L14.2 24.8C13.6 23 11.9 21 10 20L12.7 30H16L21 18H17.5Z" fill="white" />
    </svg>
  )
}

// Sample product data
const product = {
  id: "1",
  slug: "elegant-black-embroidered-abaya",
  nameEn: "Elegant Black Embroidered Abaya",
  nameAr: "عباءة سوداء مطرزة أنيقة",
  price: 1299,
  originalPrice: 1599,
  rating: 4.7,
  reviewCount: 23,
  descriptionEn:
    "A stunning black abaya featuring intricate gold embroidery along the sleeves and front panel. Made from premium quality crepe fabric that drapes beautifully and provides exceptional comfort. Perfect for special occasions and everyday elegance.",
  descriptionAr:
    "عباءة سوداء مذهلة تتميز بتطريز ذهبي دقيق على الأكمام واللوحة الأمامية. مصنوعة من قماش كريب عالي الجودة يتدلى بشكل جميل ويوفر راحة استثنائية. مثالية للمناسبات الخاصة والأناقة اليومية.",
  colors: [
    { id: "black", nameEn: "Black", nameAr: "أسود", hex: "#000000" },
    { id: "navy", nameEn: "Navy Blue", nameAr: "أزرق داكن", hex: "#1e3a5f" },
    { id: "burgundy", nameEn: "Burgundy", nameAr: "عنابي", hex: "#722f37" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "/elegant-black-embroidered-abaya-front-view-on-mode.jpg",
    "/elegant-black-embroidered-abaya-back-view-showing-.jpg",
    "/close-up-of-intricate-gold-embroidery-on-black-aba.jpg",
    "/black-abaya-side-profile-showing-flowing-silhouett.jpg",
  ],
  videoUrl: "/abaya-video-model-walking-elegant-black-embroidere.mp4",
  tags: ["New Arrival", "Bestseller", "Limited Edition"],
  tagsAr: ["وصل حديثاً", "الأكثر مبيعاً", "إصدار محدود"],
}

export function ProductDetails() {
  const { t, language } = useLanguage()
  const { addItem } = useCart()
  const router = useRouter()
  const isRTL = language === "ar"
  const sizeGuideRef = useRef<HTMLDivElement>(null)

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState("description")

  const scrollToSizeGuide = () => {
    setActiveTab("sizeGuide")
    setTimeout(() => {
      sizeGuideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert(isRTL ? "الرجاء اختيار المقاس" : "Please select a size")
      return
    }
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.nameEn,
      nameAr: product.nameAr,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      color: selectedColor.nameEn,
      colorAr: selectedColor.nameAr,
      size: selectedSize,
      quantity: quantity,
    })
    router.push("/cart")
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert(isRTL ? "الرجاء اختيار المقاس" : "Please select a size")
      return
    }
    const params = new URLSearchParams({
      name: product.nameEn,
      nameAr: product.nameAr,
      price: product.price.toString(),
      size: selectedSize,
      color: selectedColor.nameEn,
      colorAr: selectedColor.nameAr,
      image: product.images[0],
      quantity: quantity.toString(),
    })
    router.push(`/buy-now?${params.toString()}`)
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `مرحباً، أود الاستفسار عن:\n\n` +
        `${product.nameAr}\n` +
        `اللون: ${selectedColor.nameAr}\n` +
        `${selectedSize ? `المقاس: ${selectedSize}\n` : ""}` +
        `السعر: ${product.price} درهم\n\n` +
        `شكراً لكم!`,
    )
    window.open(`https://wa.me/971588998267?text=${message}`, "_blank")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 pt-20 lg:pt-24 pb-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t.nav.home}
            </Link>
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <Link href="/shop" className="hover:text-primary transition-colors">
              {t.nav.shop}
            </Link>
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <span className="text-primary font-medium truncate max-w-[200px]">
              {isRTL ? product.nameAr : product.nameEn}
            </span>
          </nav>
        </div>

        {/* Main Product Section */}
        <div className="container mx-auto px-4 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <ProductGallery
              images={product.images}
              videoUrl={product.videoUrl}
              productName={isRTL ? product.nameAr : product.nameEn}
            />

            {/* Product Info */}
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(isRTL ? product.tagsAr : product.tags).map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Rating */}
              <div>
                <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-3">
                  {isRTL ? product.nameAr : product.nameEn}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ms-1">({product.rating})</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviewCount} {isRTL ? "تقييم" : "reviews"}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  {product.price.toLocaleString()} {isRTL ? "د.إ" : "AED"}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString()} {isRTL ? "د.إ" : "AED"}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Colors */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">
                    {isRTL ? "اللون:" : "Color:"} {isRTL ? selectedColor.nameAr : selectedColor.nameEn}
                  </span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor.id === color.id ? "border-secondary scale-110" : "border-transparent"}`}
                      style={{ backgroundColor: color.hex }}
                      title={isRTL ? color.nameAr : color.nameEn}
                    >
                      {selectedColor.id === color.id && (
                        <Check className={`w-5 h-5 mx-auto ${color.id === "black" ? "text-white" : "text-white"}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">{isRTL ? "المقاس" : "Size"}</span>
                  <button onClick={scrollToSizeGuide} className="text-sm text-secondary hover:underline">
                    {isRTL ? "دليل المقاسات" : "Size Guide"}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] px-3 py-2 text-sm font-medium rounded-lg border transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-secondary bg-background"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-sm font-medium block mb-3">{isRTL ? "الكمية" : "Quantity"}</span>
                <div className="inline-flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons - UPDATED */}
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
                    className="h-12 w-12 border-2 border-border bg-transparent"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>

                {/* WhatsApp Contact */}
                <button
                  onClick={handleWhatsAppContact}
                  className="flex items-center justify-center gap-2 w-full text-[#25D366] hover:text-[#128C7E] transition-colors py-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {isRTL ? "تواصلي معنا على الواتساب" : "Contact us on WhatsApp"}
                  </span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto mb-1 text-secondary" />
                  <p className="text-xs text-muted-foreground">{isRTL ? "شحن مجاني" : "Free Shipping"}</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto mb-1 text-secondary" />
                  <p className="text-xs text-muted-foreground">{isRTL ? "جودة مضمونة" : "Quality Guaranteed"}</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 mx-auto mb-1 text-secondary" />
                  <p className="text-xs text-muted-foreground">{isRTL ? "إرجاع سهل" : "Easy Returns"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div ref={sizeGuideRef} className="container mx-auto px-4 lg:px-8 pb-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent px-6 py-3"
              >
                {isRTL ? "الوصف" : "Description"}
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent px-6 py-3"
              >
                {isRTL ? "التفاصيل" : "Details"}
              </TabsTrigger>
              <TabsTrigger
                value="sizeGuide"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent px-6 py-3"
              >
                {isRTL ? "دليل المقاسات" : "Size Guide"}
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent px-6 py-3"
              >
                {isRTL ? "الشحن والإرجاع" : "Shipping & Returns"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="pt-6">
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {isRTL ? product.descriptionAr : product.descriptionEn}
              </p>
            </TabsContent>

            <TabsContent value="details" className="pt-6">
              <ul className="space-y-2 text-muted-foreground max-w-xl">
                <li>• {isRTL ? "القماش: كريب فاخر عالي الجودة" : "Fabric: Premium quality crepe"}</li>
                <li>• {isRTL ? "التطريز: تطريز يدوي بخيوط ذهبية" : "Embroidery: Hand-stitched gold thread"}</li>
                <li>• {isRTL ? "البطانة: بطانة حريرية ناعمة" : "Lining: Soft silk lining"}</li>
                <li>• {isRTL ? "الإغلاق: أزرار مخفية أمامية" : "Closure: Hidden front buttons"}</li>
                <li>• {isRTL ? "العناية: تنظيف جاف فقط" : "Care: Dry clean only"}</li>
                <li>• {isRTL ? "صنع في: الإمارات العربية المتحدة" : "Made in: United Arab Emirates"}</li>
              </ul>
            </TabsContent>

            <TabsContent value="sizeGuide" className="pt-6">
              <SizeGuideTable />
            </TabsContent>

            <TabsContent value="shipping" className="pt-6">
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <Truck className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{isRTL ? "الشحن" : "Shipping"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isRTL
                        ? "شحن مجاني للطلبات فوق 500 درهم. التوصيل خلال 2-3 أيام عمل داخل الإمارات."
                        : "Free shipping on orders over 500 AED. Delivery within 2-3 business days in UAE."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <RotateCcw className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{isRTL ? "الإرجاع والاستبدال" : "Returns & Exchanges"}</h4>
                    <p className="text-sm text-muted-foreground">
                      {isRTL
                        ? "إرجاع مجاني خلال 14 يوم من الاستلام. يجب أن يكون المنتج بحالته الأصلية مع جميع البطاقات."
                        : "Free returns within 14 days of delivery. Items must be unworn with original tags attached."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <Shield className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{isRTL ? "الدفع الآمن" : "Secure Payment"}</h4>
                    <div className="flex items-center gap-3 mt-2">
                      <VisaIcon className="w-10 h-10" />
                      <CreditCard className="w-6 h-6 text-[#635BFF]" />
                      <Banknote className="w-6 h-6 text-green-600" />
                      <span className="text-xs text-muted-foreground">
                        {isRTL ? "فيزا، ماستركارد، الدفع عند الاستلام" : "Visa, Mastercard, Cash on Delivery"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Reviews Section */}
        <ProductReviews />

        {/* Why Choose Us */}
        <BrandsSection />
      </div>
      <Footer />
    </>
  )
}
