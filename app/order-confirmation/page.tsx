"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Truck, Mail, ArrowRight, ArrowLeft, Home, ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function OrderConfirmationPage() {
  const { language } = useLanguage()
  const isRTL = language === "ar"
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const Chevron = isRTL ? ChevronLeft : ChevronRight

  // Generate random order number
  const orderNumber = `NO5-${Date.now().toString().slice(-8)}`

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="w-4 h-4" />
              {isRTL ? "الرئيسية" : "Home"}
            </Link>
            <Chevron className="w-4 h-4" />
            <span className="text-foreground">{isRTL ? "تأكيد الطلب" : "Order Confirmation"}</span>
          </nav>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border text-center shadow-sm">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                {isRTL ? "تم تأكيد طلبك!" : "Order Confirmed!"}
              </h1>

              <p className="text-muted-foreground mb-2">
                {isRTL ? "شكراً لتسوقك من No.5 Boutique" : "Thank you for shopping with No.5 Boutique"}
              </p>

              <div className="inline-block bg-muted rounded-lg px-4 py-2 mb-8">
                <p className="text-sm text-muted-foreground">{isRTL ? "رقم الطلب" : "Order Number"}</p>
                <p className="font-mono font-bold text-primary text-lg">{orderNumber}</p>
              </div>

              {/* Order Steps */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{isRTL ? "تأكيد بالبريد" : "Email Confirmation"}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Package className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{isRTL ? "تجهيز الطلب" : "Preparing Order"}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{isRTL ? "التوصيل" : "Delivery"}</p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6 mb-8 text-start">
                <h3 className="font-semibold mb-3">{isRTL ? "ماذا بعد؟" : "What's Next?"}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • {isRTL ? "ستصلك رسالة تأكيد على بريدك الإلكتروني" : "You'll receive a confirmation email shortly"}
                  </li>
                  <li>• {isRTL ? "سنقوم بتجهيز طلبك خلال 24 ساعة" : "We'll prepare your order within 24 hours"}</li>
                  <li>
                    • {isRTL ? "التوصيل خلال 2-3 أيام عمل في الإمارات" : "Delivery within 2-3 business days in UAE"}
                  </li>
                  <li>• {isRTL ? "ستصلك رسالة عند شحن الطلب" : "You'll be notified when your order ships"}</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  <Link href="/shop">
                    {isRTL ? "متابعة التسوق" : "Continue Shopping"}
                    <Arrow className="ms-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 h-12 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-medium transition-all bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/971588998267" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5 me-2" />
                    {isRTL ? "تواصلي معنا" : "Contact Us"}
                  </a>
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
