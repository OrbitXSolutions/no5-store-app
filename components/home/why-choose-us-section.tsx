"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Award, Truck, RefreshCcw, Headphones } from "lucide-react"

export function WhyChooseUsSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      title: t.whyChooseUs.features.quality.title,
      description: t.whyChooseUs.features.quality.description,
    },
    {
      icon: Truck,
      title: t.whyChooseUs.features.shipping.title,
      description: t.whyChooseUs.features.shipping.description,
    },
    {
      icon: RefreshCcw,
      title: t.whyChooseUs.features.returns.title,
      description: t.whyChooseUs.features.returns.description,
    },
    {
      icon: Headphones,
      title: t.whyChooseUs.features.support.title,
      description: t.whyChooseUs.features.support.description,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-accent">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-accent-foreground/70 text-lg max-w-2xl mx-auto">{t.whyChooseUs.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
