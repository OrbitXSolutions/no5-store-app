"use client"

const brands = [
  { name: "Brand 1", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Brand 2", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Brand 3", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Brand 4", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Brand 5", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Brand 6", logo: "/placeholder.svg?height=60&width=120" },
]

export function BrandsSection() {
  return (
    <section className="py-12 lg:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              className="h-8 lg:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
