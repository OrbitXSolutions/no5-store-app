import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CollectionsSection } from "@/components/home/collections-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { NewArrivalsSection } from "@/components/home/new-arrivals-section"
import { FeaturedBannerSection } from "@/components/home/featured-banner-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { BrandsSection } from "@/components/home/brands-section"

export const metadata = {
  title: "No.5 Boutique | Elegant Abayas & Modest Fashion Dubai",
  description:
    "Discover premium handcrafted Abayas, Hijabs & Perfumes at No.5 Boutique Dubai. Free shipping on orders over 500 AED. Shop our exclusive collection of elegant modest fashion.",
  keywords:
    "abaya, dubai fashion, modest fashion, hijab, islamic clothing, luxury abaya, embroidered abaya, UAE fashion",
  openGraph: {
    title: "No.5 Boutique | Elegant Abayas & Modest Fashion Dubai",
    description: "Discover premium handcrafted Abayas at No.5 Boutique Dubai. Free shipping on orders over 500 AED.",
    type: "website",
    locale: "en_AE",
    alternateLocale: "ar_AE",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <CategoriesSection />
        <NewArrivalsSection />
        <FeaturedBannerSection />
        <BrandsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  )
}
