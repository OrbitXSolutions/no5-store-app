"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    nameEn: "Sarah M.",
    nameAr: "سارة م.",
    rating: 5,
    textEn:
      "Absolutely love the quality and attention to detail. The abayas are stunning and the customer service is exceptional.",
    textAr: "أحب جودة العباءات والاهتمام بالتفاصيل. خدمة العملاء استثنائية، والمنتجات تفوق توقعاتي دائماً.",
    locationEn: "Dubai, UAE",
    locationAr: "دبي، الإمارات",
  },
  {
    id: 2,
    nameEn: "Fatima A.",
    nameAr: "فاطمة أ.",
    rating: 5,
    textEn:
      "The best shopping experience I've had online. Fast shipping, beautiful packaging, and the quality is unmatched.",
    textAr: "أفضل تجربة تسوق عبر الإنترنت. شحن سريع، تغليف جميل، والجودة لا مثيل لها.",
    locationEn: "Abu Dhabi, UAE",
    locationAr: "أبوظبي، الإمارات",
  },
  {
    id: 3,
    nameEn: "Layla H.",
    nameAr: "ليلى ه.",
    rating: 5,
    textEn:
      "I'm a repeat customer for a reason. The styles are always elegant, and the quality makes every piece a wardrobe staple.",
    textAr: "أنا عميلة دائمة لسبب وجيه. الأنماط دائماً أنيقة، والجودة تجعل كل قطعة أساسية في خزانة الملابس.",
    locationEn: "Sharjah, UAE",
    locationAr: "الشارقة، الإمارات",
  },
]

export function ReviewsSection() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t.reviews.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.reviews.subtitle}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-secondary/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-card-foreground leading-relaxed mb-6">
                {language === "ar" ? review.textAr : review.textEn}
              </p>

              {/* Reviewer - Replaced photo with initials circle */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary font-semibold text-lg">
                    {(language === "ar" ? review.nameAr : review.nameEn).charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {language === "ar" ? review.nameAr : review.nameEn}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" ? review.locationAr : review.locationEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
