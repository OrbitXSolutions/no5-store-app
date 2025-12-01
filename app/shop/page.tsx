import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ShopContent } from "@/components/shop/shop-content"
import { BrandsSection } from "@/components/home/brands-section"

export const metadata = {
  title: "Shop All Products | No.5 Boutique Dubai",
  description:
    "Browse our complete collection of elegant Abayas, Hijabs, and Perfumes. Free shipping on orders over 500 AED. Premium modest fashion from Dubai.",
  keywords: "shop abaya, buy abaya online, dubai abaya, hijab shop, modest fashion uae",
  openGraph: {
    title: "Shop All Products | No.5 Boutique Dubai",
    description:
      "Browse our complete collection of elegant Abayas and accessories. Free shipping on orders over 500 AED.",
  },
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ShopContent />
        <BrandsSection />
      </main>
      <Footer />
    </>
  )
}
