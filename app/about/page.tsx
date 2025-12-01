"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { Target, Eye, Heart, Sparkles, Palette } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    nameEn: "Alexandra Chen",
    nameAr: "ألكسندرا تشين",
    roleEn: "Founder & CEO",
    roleAr: "المؤسسة والرئيسة التنفيذية",
    image: "/placeholder.svg?key=5dczz",
  },
  {
    id: 2,
    nameEn: "Marcus Thompson",
    nameAr: "ماركوس طومسون",
    roleEn: "Creative Director",
    roleAr: "المدير الإبداعي",
    image: "/placeholder.svg?key=1jgjj",
  },
  {
    id: 3,
    nameEn: "Sophia Williams",
    nameAr: "صوفيا ويليامز",
    roleEn: "Head of Design",
    roleAr: "رئيسة قسم التصميم",
    image: "/placeholder.svg?key=n73kt",
  },
  {
    id: 4,
    nameEn: "James Anderson",
    nameAr: "جيمس أندرسون",
    roleEn: "Operations Manager",
    roleAr: "مدير العمليات",
    image: "/placeholder.svg?key=a29xn",
  },
]

export default function AboutPage() {
  const { t, language } = useLanguage()

  const sections = [
    {
      icon: Heart,
      title: t.about.whoWeAre,
      text: t.about.whoWeAreText,
    },
    {
      icon: Target,
      title: t.about.mission,
      text: t.about.missionText,
    },
    {
      icon: Sparkles,
      title: t.about.products,
      text: t.about.productsText,
    },
    {
      icon: Palette,
      title: t.about.designProcess,
      text: t.about.designProcessText,
    },
    {
      icon: Eye,
      title: t.about.future,
      text: t.about.futureText,
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-muted overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/luxury-abaya-boutique-interior-elegant-store-dubai.jpg"
              alt="No.5 Boutique"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-muted via-muted/90 to-muted" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up opacity-0">
                {t.about.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-1">
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
                src="/placeholder.svg?height=600&width=1400"
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
                      src={`/placeholder.svg?height=500&width=600&query=luxury abaya boutique ${section.title.toLowerCase().replace(/\s/g, "-")} fashion elegant`}
                      alt={section.title}
                      className="rounded-2xl shadow-xl w-full"
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
