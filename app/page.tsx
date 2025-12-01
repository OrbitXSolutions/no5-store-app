import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CollectionsSection } from "@/components/home/collections-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { NewArrivalsSection } from "@/components/home/new-arrivals-section"
import { FeaturedBannerSection } from "@/components/home/featured-banner-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { BrandsSection } from "@/components/home/brands-section"

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
