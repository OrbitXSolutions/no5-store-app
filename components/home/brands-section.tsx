"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Truck, Shield, Sparkles, Clock, Gift, HeartHandshake, CreditCard, Banknote, Lock } from "lucide-react"

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
      <path d="M12.5 18H7.5L7.5 18.2C11.3 19.1 13.8 21.5 14.5 24.3L13.7 19.1C13.6 18.3 13 18 12.5 18Z" fill="#F9A533" />
    </svg>
  )
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="8" fill="#F5F5F5" />
      <circle cx="19" cy="24" r="10" fill="#EB001B" />
      <circle cx="29" cy="24" r="10" fill="#F79E1B" />
      <path
        d="M24 17.5C25.9 19 27.2 21.3 27.2 24C27.2 26.7 25.9 29 24 30.5C22.1 29 20.8 26.7 20.8 24C20.8 21.3 22.1 19 24 17.5Z"
        fill="#FF5F00"
      />
    </svg>
  )
}

function TamaraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="8" fill="#3FCEA5" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        Tamara
      </text>
    </svg>
  )
}

const trustFeatures = [
  {
    icon: Truck,
    titleEn: "Free Shipping",
    titleAr: "شحن مجاني",
    descEn: "Orders over 500 AED",
    descAr: "للطلبات فوق 500 درهم",
  },
  {
    icon: Shield,
    titleEn: "Authentic Quality",
    titleAr: "جودة أصلية",
    descEn: "100% Premium Fabrics",
    descAr: "أقمشة فاخرة 100%",
  },
  {
    icon: Sparkles,
    titleEn: "Handcrafted",
    titleAr: "صناعة يدوية",
    descEn: "Artisan Embroidery",
    descAr: "تطريز حرفي",
  },
  {
    icon: Clock,
    titleEn: "Fast Delivery",
    titleAr: "توصيل سريع",
    descEn: "2-3 Days in UAE",
    descAr: "2-3 أيام في الإمارات",
  },
  {
    icon: Gift,
    titleEn: "Gift Wrapping",
    titleAr: "تغليف هدايا",
    descEn: "Luxury Packaging",
    descAr: "تغليف فاخر",
  },
  {
    icon: HeartHandshake,
    titleEn: "Easy Returns",
    titleAr: "إرجاع سهل",
    descEn: "14 Days Return",
    descAr: "سياسة إرجاع 14 يوم",
  },
]

export function BrandsSection() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
            {isRTL ? "لماذا تختاريننا" : "Why Choose Us"}
          </h2>
          <p className="text-muted-foreground">
            {isRTL ? "خدمات مميزة لتجربة تسوق فريدة" : "Premium services for a unique shopping experience"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4 group-hover:from-secondary/30 group-hover:to-secondary/10 group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm lg:text-base mb-1">
                {isRTL ? feature.titleAr : feature.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{isRTL ? feature.descAr : feature.descEn}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-10">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">
                {isRTL ? "طرق الدفع الآمنة" : "Secure Payment Methods"}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {/* Visa */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                <VisaIcon className="w-10 h-10" />
                <span className="text-xs font-medium text-muted-foreground hidden sm:block">Visa</span>
              </div>

              {/* Mastercard */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                <MastercardIcon className="w-10 h-10" />
                <span className="text-xs font-medium text-muted-foreground hidden sm:block">Mastercard</span>
              </div>

              {/* Stripe */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                <CreditCard className="w-6 h-6 text-[#635BFF]" />
                <span className="text-xs font-medium text-muted-foreground">Stripe</span>
              </div>

              {/* Tamara */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                <TamaraIcon className="w-10 h-10" />
                <span className="text-xs font-medium text-muted-foreground hidden sm:block">
                  {isRTL ? "تمارا" : "Tamara"}
                </span>
              </div>

              {/* Cash on Delivery */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                <Banknote className="w-6 h-6 text-green-600" />
                <span className="text-xs font-medium text-muted-foreground">
                  {isRTL ? "الدفع عند الاستلام" : "Cash on Delivery"}
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              {isRTL ? "جميع المعاملات مشفرة وآمنة 100%" : "All transactions are encrypted and 100% secure"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
