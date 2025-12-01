import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ShopContent } from "@/components/shop/shop-content"

export const metadata = {
  title: "Shop All Products | No.5 Boutique",
  description: "Browse our complete collection of elegant Abayas and accessories",
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ShopContent />
      </main>
      <Footer />
    </>
  )
}
