"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Flag } from "lucide-react"

interface ProductReviewsProps {
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
  averageRating: number
}

export function ProductReviews({ reviews, averageRating }: ProductReviewsProps) {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const [helpfulClicks, setHelpfulClicks] = useState<Record<number, boolean>>({})

  const handleHelpful = (reviewId: number) => {
    setHelpfulClicks((prev) => ({ ...prev, [reviewId]: !prev[reviewId] }))
  }

  // Rating distribution
  const ratingCounts = reviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  return (
    <div className="mt-16 pt-16 border-t border-border">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
        {isRTL ? t.product.reviews : t.product.reviews}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Rating Summary */}
        <div className="lg:col-span-1">
          <div className="bg-muted/50 rounded-2xl p-6 sticky top-24">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-foreground mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(averageRating) ? "fill-secondary text-secondary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {isRTL ? `بناءً على ${reviews.length} تقييم` : `Based on ${reviews.length} reviews`}
              </p>
            </div>

            {/* Rating Bars */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingCounts[rating] || 0
                const percentage = (count / reviews.length) * 100
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground w-4">{rating}</span>
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{count}</span>
                  </div>
                )
              })}
            </div>

            <Button className="w-full mt-6">{isRTL ? t.product.writeReview : t.product.writeReview}</Button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-border pb-6 last:border-0">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{isRTL ? review.nameAr : review.nameEn}</span>
                    {review.verified && (
                      <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                        {isRTL ? t.product.verifiedPurchase : t.product.verifiedPurchase}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-secondary text-secondary" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString(isRTL ? "ar-AE" : "en-AE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{isRTL ? review.textAr : review.textEn}</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleHelpful(review.id)}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    helpfulClicks[review.id] ? "text-secondary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  {isRTL ? t.product.helpful : t.product.helpful} ({review.helpful + (helpfulClicks[review.id] ? 1 : 0)}
                  )
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Flag className="w-4 h-4" />
                  {isRTL ? t.product.report : t.product.report}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
