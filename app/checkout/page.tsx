"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/lib/i18n/language-context"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Banknote, Truck } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { language } = useLanguage()
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const isRTL = language === "ar"
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const shippingCost = totalPrice >= 500 ? 0 : 30
  const total = totalPrice + shippingCost

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    router.push("/order-confirmation")
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold mb-4">{isRTL ? "سلة التسوق فارغة" : "Your cart is empty"}</h1>
            <Button asChild>
              <Link href="/shop">{isRTL ? "تسوقي الآن" : "Shop Now"}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <Breadcrumb 
            items={[
              { label: "Cart", labelAr: "سلة التسوق", href: "/cart" },
              { label: "Checkout", labelAr: "إتمام الطلب" }
            ]} 
          />

          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-8 mt-6">
            {isRTL ? "إتمام الطلب" : "Checkout"}
          </h1>

          {/* ... existing code ... */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Info */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-secondary" />
                    {isRTL ? "معلومات الشحن" : "Shipping Information"}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{isRTL ? "الاسم الأول" : "First Name"}</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{isRTL ? "الاسم الأخير" : "Last Name"}</Label>
                      <Input id="lastName" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="email">{isRTL ? "البريد الإلكتروني" : "Email"}</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="phone">{isRTL ? "رقم الهاتف" : "Phone"}</Label>
                      <Input id="phone" type="tel" required placeholder="+971" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">{isRTL ? "العنوان" : "Address"}</Label>
                      <Input id="address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{isRTL ? "المدينة" : "City"}</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emirate">{isRTL ? "الإمارة" : "Emirate"}</Label>
                      <Input id="emirate" required placeholder={isRTL ? "دبي" : "Dubai"} />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-secondary" />
                    {isRTL ? "طريقة الدفع" : "Payment Method"}
                  </h2>

                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "card" ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/50"}`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium">{isRTL ? "بطاقة ائتمان / خصم" : "Credit / Debit Card"}</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, Stripe</p>
                      </div>
                    </label>

                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "cod" ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/50"}`}
                    >
                      <RadioGroupItem value="cod" id="cod" />
                      <Banknote className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium">{isRTL ? "الدفع عند الاستلام" : "Cash on Delivery"}</p>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? "ادفعي عند استلام الطلب" : "Pay when you receive your order"}
                        </p>
                      </div>
                    </label>

                    <label
                      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === "tamara" ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/50"}`}
                    >
                      <RadioGroupItem value="tamara" id="tamara" />
                      <div className="w-5 h-5 bg-[#3FCEA5] rounded text-white text-xs flex items-center justify-center font-bold">
                        T
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{isRTL ? "تمارا - ادفعي لاحقاً" : "Tamara - Buy Now, Pay Later"}</p>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? "قسمي مدفوعاتك على 4 دفعات" : "Split into 4 interest-free payments"}
                        </p>
                      </div>
                    </label>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">{isRTL ? "رقم البطاقة" : "Card Number"}</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">{isRTL ? "تاريخ الانتهاء" : "Expiry"}</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
                  <h2 className="font-semibold text-lg mb-6">{isRTL ? "ملخص الطلب" : "Order Summary"}</h2>

                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={isRTL ? item.nameAr : item.name}
                          className="w-16 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm line-clamp-1">{isRTL ? item.nameAr : item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.size} • {isRTL ? item.colorAr : item.color}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {isRTL ? "الكمية:" : "Qty:"} {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium text-sm">
                          {(item.price * item.quantity).toLocaleString()} {isRTL ? "د.إ" : "AED"}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isRTL ? "المجموع الفرعي" : "Subtotal"}</span>
                      <span>
                        {totalPrice.toLocaleString()} {isRTL ? "د.إ" : "AED"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{isRTL ? "الشحن" : "Shipping"}</span>
                      <span className={shippingCost === 0 ? "text-green-600" : ""}>
                        {shippingCost === 0 ? (isRTL ? "مجاني" : "FREE") : `${shippingCost} ${isRTL ? "د.إ" : "AED"}`}
                      </span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>{isRTL ? "الإجمالي" : "Total"}</span>
                        <span className="text-primary">
                          {total.toLocaleString()} {isRTL ? "د.إ" : "AED"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-6" disabled={isProcessing}>
                    {isProcessing
                      ? isRTL
                        ? "جاري المعالجة..."
                        : "Processing..."
                      : isRTL
                        ? "تأكيد الطلب"
                        : "Place Order"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
