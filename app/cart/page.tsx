"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/lib/i18n/language-context"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { language } = useLanguage()
  const { items, removeItem, updateQuantity, totalPrice } = useCart()
  const isRTL = language === "ar"
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const shippingThreshold = 500
  const freeShipping = totalPrice >= shippingThreshold
  const remainingForFreeShipping = shippingThreshold - totalPrice

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <Breadcrumb items={[{ label: "Cart", labelAr: "سلة التسوق" }]} />

            <div className="max-w-md mx-auto text-center py-8">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-primary mb-4">
                {isRTL ? "سلة التسوق فارغة" : "Your Cart is Empty"}
              </h1>
              <p className="text-muted-foreground mb-8">
                {isRTL
                  ? "لم تضيفي أي منتجات بعد. اكتشفي مجموعتنا الرائعة!"
                  : "You haven't added any items yet. Discover our amazing collection!"}
              </p>
              <Button asChild size="lg">
                <Link href="/shop">
                  {isRTL ? "تسوقي الآن" : "Shop Now"}
                  <Arrow className="ms-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <Breadcrumb items={[{ label: "Cart", labelAr: "سلة التسوق" }]} />

          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-8 mt-6">
            {isRTL ? "سلة التسوق" : "Shopping Cart"}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Free Shipping Progress */}
              {!freeShipping && (
                <div className="bg-secondary/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-center mb-2">
                    {isRTL
                      ? `أضيفي ${remainingForFreeShipping.toFixed(0)} درهم للحصول على شحن مجاني!`
                      : `Add ${remainingForFreeShipping.toFixed(0)} AED more for FREE shipping!`}
                  </p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary transition-all duration-500"
                      style={{ width: `${Math.min((totalPrice / shippingThreshold) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-4 bg-card rounded-xl p-4 border border-border"
                >
                  <Link href={`/products/${item.slug}`} className="shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={isRTL ? item.nameAr : item.name}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.slug}`}>
                      <h3 className="font-semibold text-primary hover:text-secondary transition-colors line-clamp-2">
                        {isRTL ? item.nameAr : item.name}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                      <span>
                        {isRTL ? "اللون:" : "Color:"} {isRTL ? item.colorAr : item.color}
                      </span>
                      <span>•</span>
                      <span>
                        {isRTL ? "المقاس:" : "Size:"} {item.size}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-end">
                        <p className="font-bold text-primary">
                          {(item.price * item.quantity).toLocaleString()} {isRTL ? "د.إ" : "AED"}
                        </p>
                        {item.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">
                            {(item.originalPrice * item.quantity).toLocaleString()} {isRTL ? "د.إ" : "AED"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.size, item.color)}
                    className="text-muted-foreground hover:text-destructive transition-colors self-start"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
                <h2 className="font-serif text-xl font-bold text-primary mb-6">
                  {isRTL ? "ملخص الطلب" : "Order Summary"}
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? "المجموع الفرعي" : "Subtotal"}</span>
                    <span className="font-medium">
                      {totalPrice.toLocaleString()} {isRTL ? "د.إ" : "AED"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isRTL ? "الشحن" : "Shipping"}</span>
                    <span className={`font-medium ${freeShipping ? "text-green-600" : ""}`}>
                      {freeShipping ? (isRTL ? "مجاني" : "FREE") : `30 ${isRTL ? "د.إ" : "AED"}`}
                    </span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>{isRTL ? "الإجمالي" : "Total"}</span>
                      <span className="text-primary">
                        {(totalPrice + (freeShipping ? 0 : 30)).toLocaleString()} {isRTL ? "د.إ" : "AED"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <div className="flex gap-2 mb-6">
                  <Input placeholder={isRTL ? "كود الخصم" : "Coupon code"} className="flex-1" />
                  <Button variant="outline" className="bg-transparent">
                    {isRTL ? "تطبيق" : "Apply"}
                  </Button>
                </div>

                <Button asChild size="lg" className="w-full mb-3">
                  <Link href="/checkout">
                    {isRTL ? "إتمام الطلب" : "Proceed to Checkout"}
                    <Arrow className="ms-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                  <Link href="/shop">{isRTL ? "متابعة التسوق" : "Continue Shopping"}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
