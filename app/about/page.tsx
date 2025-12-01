"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/lib/i18n/language-context"
import { Target, Eye, Heart, Sparkles, Palette } from "lucide-react"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const sections = [
    {
      icon: Heart,
      title: t.about.whoWeAre,
      text: t.about.whoWeAreText,
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    },
    {
      icon: Target,
      title: t.about.mission,
      text: t.about.missionText,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    },
    {
      icon: Sparkles,
      title: t.about.products,
      text: t.about.productsText,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    },
    {
      icon: Palette,
      title: t.about.designProcess,
      text: t.about.designProcessText,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      icon: Eye,
      title: t.about.future,
      text: t.about.futureText,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 pt-6">
          <Breadcrumb items={[{ label: "About Us", labelAr: "من نحن" }]} />
        </div>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-muted overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
              alt="No.5 Boutique"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-muted via-muted/90 to-muted" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                {t.about.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {language === "ar"
                  ? "اكتشفي قصتنا وشغفنا بالأناقة والحرفية"
                  : "Discover our story and passion for elegance and craftsmanship"}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1400&q=80"
                alt="No.5 Boutique - Elegance Redefined"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-center">
                <p className="font-serif text-2xl lg:text-3xl text-primary-foreground max-w-3xl mx-auto">
                  {language === "ar"
                    ? "نؤمن بأن الموضة لديها القدرة على التمكين والإلهام"
                    : "We believe fashion has the power to empower and inspire"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        {sections.map((section, index) => (
          <section key={index} className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-muted" : "bg-background"}`}>
            <div className="container mx-auto px-4 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
                      <section.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.text}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute -bottom-4 -end-4 w-24 h-24 bg-secondary rounded-2xl -z-10" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold mb-2">5K+</div>
                <p className="text-primary-foreground/70">{language === "ar" ? "عميلات سعيدات" : "Happy Customers"}</p>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold mb-2">200+</div>
                <p className="text-primary-foreground/70">{language === "ar" ? "تصميم" : "Designs"}</p>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold mb-2">UAE</div>
                <p className="text-primary-foreground/70">{language === "ar" ? "دبي، الإمارات" : "Dubai Based"}</p>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <p className="text-primary-foreground/70">{language === "ar" ? "جودة مضمونة" : "Quality Guaranteed"}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
