"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Banknote, ShieldCheck, Truck, Package } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function BuyNowPage() {
  const { language } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isRTL = language === "ar"

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  // Get product details from URL params
  const productName = searchParams.get("name") || "Elegant Black Embroidered Abaya"
  const productNameAr = searchParams.get("nameAr") || "عباءة سوداء مطرزة أنيقة"
  const price = Number(searchParams.get("price")) || 1299
  const size = searchParams.get("size") || "M"
  const color = searchParams.get("color") || "Black"
  const colorAr = searchParams.get("colorAr") || "أسود"
  const image = searchParams.get("image") || "/elegant-black-embroidered-abaya-front-view-on-mode.jpg"
  const quantity = Number(searchParams.get("quantity")) || 1

  const shippingCost = price >= 500 ? 0 : 30
  const total = price * quantity + shippingCost

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/order-confirmation")
  }

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `مرحباً، أود طلب:\n\n` +
        `المنتج: ${productNameAr}\n` +
        `المقاس: ${size}\n` +
        `اللون: ${colorAr}\n` +
        `الكمية: ${quantity}\n` +
        `السعر: ${total} درهم\n\n` +
        `شكراً لكم!`,
    )
    window.open(`https://wa.me/971588998267?text=${message}`, "_blank")
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Added breadcrumb navigation */}
            <Breadcrumb
              items={[
                { label: "Shop", labelAr: "المتجر", href: "/shop" },
                { label: "Quick Checkout", labelAr: "الشراء السريع" },
              ]}
            />

            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2 text-center mt-6">
              {isRTL ? "الشراء السريع" : "Quick Checkout"}
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              {isRTL ? "أكملي طلبك في خطوة واحدة" : "Complete your order in one step"}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Product Summary */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
                  <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-secondary" />
                    {isRTL ? "المنتج" : "Product"}
                  </h2>

                  <div className="flex gap-4 mb-6">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={isRTL ? productNameAr : productName}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium mb-1">{isRTL ? productNameAr : productName}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {isRTL ? "المقاس:" : "Size:"} {size}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">
                        {isRTL ? "اللون:" : "Color:"} {isRTL ? colorAr : color}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isRTL ? "الكمية:" : "Qty:"} {quantity}
                      </p>
                      <p className="font-bold text-primary mt-2">
                        {(price * quantity).toLocaleString()} {isRTL ? "د.إ" : "AED"}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isRTL ? "المنتج" : "Product"}</span>
                      <span>
                        {(price * quantity).toLocaleString()} {isRTL ? "د.إ" : "AED"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isRTL ? "الشحن" : "Shipping"}</span>
                      <span className={shippingCost === 0 ? "text-green-600" : ""}>
                        {shippingCost === 0 ? (isRTL ? "مجاني" : "FREE") : `${shippingCost} ${isRTL ? "د.إ" : "AED"}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                      <span>{isRTL ? "الإجمالي" : "Total"}</span>
                      <span className="text-primary">
                        {total.toLocaleString()} {isRTL ? "د.إ" : "AED"}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Order Option */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3 text-center">
                      {isRTL ? "أو اطلبي عبر الواتساب" : "Or order via WhatsApp"}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full bg-transparent border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                      onClick={handleWhatsAppOrder}
                    >
                      <WhatsAppIcon className="w-5 h-5 me-2" />
                      {isRTL ? "اطلبي عبر الواتساب" : "Order on WhatsApp"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Checkout Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Shipping Info */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-secondary" />
                      {isRTL ? "معلومات التوصيل" : "Delivery Information"}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{isRTL ? "الاسم الكامل" : "Full Name"}</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{isRTL ? "رقم الهاتف" : "Phone"}</Label>
                        <Input id="phone" type="tel" required placeholder="+971" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email">{isRTL ? "البريد الإلكتروني" : "Email"}</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address">{isRTL ? "العنوان الكامل" : "Full Address"}</Label>
                        <Input
                          id="address"
                          required
                          placeholder={isRTL ? "المبنى، الشارع، المنطقة" : "Building, Street, Area"}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">{isRTL ? "المدينة" : "City"}</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emirate">{isRTL ? "الإمارة" : "Emirate"}</Label>
                        <Input id="emirate" required defaultValue={isRTL ? "دبي" : "Dubai"} />
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-secondary" />
                      {isRTL ? "طريقة الدفع" : "Payment"}
                    </h2>

                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <label
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "card" ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/50"}`}
                      >
                        <RadioGroupItem value="card" />
                        <CreditCard className="w-5 h-5" />
                        <span className="font-medium">{isRTL ? "بطاقة ائتمان" : "Credit Card"}</span>
                      </label>
                      <label
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "cod" ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/50"}`}
                      >
                        <RadioGroupItem value="cod" />
                        <Banknote className="w-5 h-5" />
                        <span className="font-medium">{isRTL ? "الدفع عند الاستلام" : "Cash on Delivery"}</span>
                      </label>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4">
                        <div className="space-y-2">
                          <Label>{isRTL ? "رقم البطاقة" : "Card Number"}</Label>
                          <Input placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>{isRTL ? "تاريخ الانتهاء" : "Expiry"}</Label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label>CVV</Label>
                            <Input placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
                    {isProcessing
                      ? isRTL
                        ? "جاري المعالجة..."
                        : "Processing..."
                      : isRTL
                        ? `تأكيد الطلب - ${total.toLocaleString()} د.إ`
                        : `Place Order - ${total.toLocaleString()} AED`}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4" />
                    {isRTL ? "دفع آمن ومشفر 100%" : "100% Secure & Encrypted Payment"}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
