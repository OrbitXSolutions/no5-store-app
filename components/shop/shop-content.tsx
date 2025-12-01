"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

// Sample products data - in production this would come from your database/API
const allProducts = [
  {
    id: "1",
    slug: "elegant-black-embroidered-abaya",
    nameEn: "Elegant Black Embroidered Abaya",
    nameAr: "عباءة سوداء مطرزة أنيقة",
    price: 1299,
    originalPrice: 1599,
    image: "/elegant-black-embroidered-abaya-front-view-on-mode.jpg",
    categoryEn: "Embroidered Abayas",
    categoryAr: "عباءات مطرزة",
    colorEn: "Black",
    colorAr: "أسود",
    isNew: true,
    isBestseller: true,
  },
  {
    id: "2",
    slug: "classic-black-open-abaya",
    nameEn: "Classic Black Open Abaya",
    nameAr: "عباءة سوداء مفتوحة كلاسيكية",
    price: 899,
    image: "/classic-black-open-abaya-on-mannequin.jpg",
    categoryEn: "Open Abayas",
    categoryAr: "عباءات مفتوحة",
    colorEn: "Black",
    colorAr: "أسود",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "3",
    slug: "navy-blue-lace-abaya",
    nameEn: "Navy Blue Lace Abaya",
    nameAr: "عباءة دانتيل أزرق داكن",
    price: 1199,
    image: "/navy-blue-lace-detailed-abaya-elegant.jpg",
    categoryEn: "Classic Abayas",
    categoryAr: "عباءات كلاسيكية",
    colorEn: "Navy Blue",
    colorAr: "أزرق داكن",
    isNew: true,
    isBestseller: false,
  },
  {
    id: "4",
    slug: "pearl-embellished-abaya",
    nameEn: "Pearl Embellished Abaya",
    nameAr: "عباءة مزينة باللؤلؤ",
    price: 1499,
    image: "/black-abaya-with-pearl-embellishments-luxury.jpg",
    categoryEn: "Evening Wear",
    categoryAr: "ملابس سهرة",
    colorEn: "Black",
    colorAr: "أسود",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "5",
    slug: "modern-minimalist-abaya",
    nameEn: "Modern Minimalist Abaya",
    nameAr: "عباءة حديثة بسيطة",
    price: 799,
    image: "/modern-minimalist-black-abaya-clean-design.jpg",
    categoryEn: "Open Abayas",
    categoryAr: "عباءات مفتوحة",
    colorEn: "Black",
    colorAr: "أسود",
    isNew: false,
    isBestseller: false,
  },
  {
    id: "6",
    slug: "burgundy-silk-abaya",
    nameEn: "Burgundy Silk Abaya",
    nameAr: "عباءة حرير عنابي",
    price: 1099,
    image: "/burgundy-silk-abaya-elegant.jpg",
    categoryEn: "Classic Abayas",
    categoryAr: "عباءات كلاسيكية",
    colorEn: "Burgundy",
    colorAr: "عنابي",
    isNew: true,
    isBestseller: false,
  },
  {
    id: "7",
    slug: "beige-summer-abaya",
    nameEn: "Beige Summer Abaya",
    nameAr: "عباءة صيفية بيج",
    price: 699,
    image: "/beige-summer-abaya-lightweight.jpg",
    categoryEn: "Open Abayas",
    categoryAr: "عباءات مفتوحة",
    colorEn: "Beige",
    colorAr: "بيج",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "8",
    slug: "emerald-green-abaya",
    nameEn: "Emerald Green Abaya",
    nameAr: "عباءة خضراء زمردية",
    price: 999,
    image: "/emerald-green-abaya-elegant.jpg",
    categoryEn: "Classic Abayas",
    categoryAr: "عباءات كلاسيكية",
    colorEn: "Green",
    colorAr: "أخضر",
    isNew: true,
    isBestseller: false,
  },
  {
    id: "9",
    slug: "luxury-perfume-oud",
    nameEn: "Luxury Oud Perfume",
    nameAr: "عطر عود فاخر",
    price: 499,
    image: "/luxury-oud-perfume-bottle-gold.jpg",
    categoryEn: "Perfumes",
    categoryAr: "عطور",
    colorEn: "N/A",
    colorAr: "غير محدد",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "10",
    slug: "rose-musk-perfume",
    nameEn: "Rose & Musk Perfume",
    nameAr: "عطر ورد ومسك",
    price: 399,
    image: "/rose-musk-perfume-elegant-bottle.jpg",
    categoryEn: "Perfumes",
    categoryAr: "عطور",
    colorEn: "N/A",
    colorAr: "غير محدد",
    isNew: true,
    isBestseller: false,
  },
  {
    id: "11",
    slug: "premium-silk-hijab-black",
    nameEn: "Premium Silk Hijab - Black",
    nameAr: "حجاب حرير فاخر - أسود",
    price: 199,
    image: "/premium-black-silk-hijab-folded.jpg",
    categoryEn: "Hijabs & Scarves",
    categoryAr: "حجاب ووشاح",
    colorEn: "Black",
    colorAr: "أسود",
    isNew: false,
    isBestseller: true,
  },
  {
    id: "12",
    slug: "gold-sequin-evening-abaya",
    nameEn: "Gold Sequin Evening Abaya",
    nameAr: "عباءة سهرة بالترتر الذهبي",
    price: 1799,
    image: "/black-abaya-gold-sequins-evening-luxury.jpg",
    categoryEn: "Evening Wear",
    categoryAr: "ملابس سهرة",
    colorEn: "Black/Gold",
    colorAr: "أسود/ذهبي",
    isNew: true,
    isBestseller: true,
  },
]

const categories = [
  { en: "Classic Abayas", ar: "عباءات كلاسيكية" },
  { en: "Embroidered Abayas", ar: "عباءات مطرزة" },
  { en: "Open Abayas", ar: "عباءات مفتوحة" },
  { en: "Evening Wear", ar: "ملابس سهرة" },
  { en: "Hijabs & Scarves", ar: "حجاب ووشاح" },
  { en: "Perfumes", ar: "عطور" },
]

const colors = [
  { en: "Black", ar: "أسود" },
  { en: "Navy Blue", ar: "أزرق داكن" },
  { en: "Burgundy", ar: "عنابي" },
  { en: "Green", ar: "أخضر" },
  { en: "Beige", ar: "بيج" },
]

const priceRanges = [
  { id: "0-500", label: "Under 500 AED", labelAr: "أقل من 500 درهم", min: 0, max: 500 },
  { id: "500-1000", label: "500 - 1000 AED", labelAr: "500 - 1000 درهم", min: 500, max: 1000 },
  { id: "1000-1500", label: "1000 - 1500 AED", labelAr: "1000 - 1500 درهم", min: 1000, max: 1500 },
  { id: "1500+", label: "Above 1500 AED", labelAr: "أكثر من 1500 درهم", min: 1500, max: Number.POSITIVE_INFINITY },
]

export function ShopContent() {
  const { t, language } = useLanguage()
  const { addItem } = useCart()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [showBestsellersOnly, setShowBestsellersOnly] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        language === "ar"
          ? product.nameAr.toLowerCase().includes(searchQuery.toLowerCase())
          : product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(language === "ar" ? product.categoryAr : product.categoryEn),
      )
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColors.includes(language === "ar" ? product.colorAr : product.colorEn),
      )
    }

    // Price range filter
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPriceRanges.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId)
          if (!range) return false
          return product.price >= range.min && product.price <= range.max
        })
      })
    }

    // New arrivals filter
    if (showNewOnly) {
      filtered = filtered.filter((product) => product.isNew)
    }

    // Bestsellers filter
    if (showBestsellersOnly) {
      filtered = filtered.filter((product) => product.isBestseller)
    }

    // Sort
    const sorted = [...filtered]
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        sorted.sort((a, b) => (language === "ar" ? a.nameAr.localeCompare(b.nameAr) : a.nameEn.localeCompare(b.nameEn)))
        break
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        // featured - keep original order
        break
    }

    return sorted
  }, [
    searchQuery,
    selectedCategories,
    selectedColors,
    selectedPriceRanges,
    sortBy,
    showNewOnly,
    showBestsellersOnly,
    language,
  ])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const togglePriceRange = (rangeId: string) => {
    setSelectedPriceRanges((prev) => (prev.includes(rangeId) ? prev.filter((r) => r !== rangeId) : [...prev, rangeId]))
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedPriceRanges([])
    setShowNewOnly(false)
    setShowBestsellersOnly(false)
  }

  const activeFiltersCount =
    selectedCategories.length +
    selectedColors.length +
    selectedPriceRanges.length +
    (showNewOnly ? 1 : 0) +
    (showBestsellersOnly ? 1 : 0)

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-sm mb-3">{language === "ar" ? "الفئات" : "Categories"}</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const label = language === "ar" ? category.ar : category.en
            return (
              <div key={label} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${label}`}
                  checked={selectedCategories.includes(label)}
                  onCheckedChange={() => toggleCategory(label)}
                />
                <Label htmlFor={`category-${label}`} className="text-sm cursor-pointer">
                  {label}
                </Label>
              </div>
            )
          })}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold text-sm mb-3">{language === "ar" ? "الألوان" : "Colors"}</h3>
        <div className="space-y-2">
          {colors.map((color) => {
            const label = language === "ar" ? color.ar : color.en
            return (
              <div key={label} className="flex items-center gap-2">
                <Checkbox
                  id={`color-${label}`}
                  checked={selectedColors.includes(label)}
                  onCheckedChange={() => toggleColor(label)}
                />
                <Label htmlFor={`color-${label}`} className="text-sm cursor-pointer">
                  {label}
                </Label>
              </div>
            )
          })}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-sm mb-3">{language === "ar" ? "السعر" : "Price Range"}</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center gap-2">
              <Checkbox
                id={`price-${range.id}`}
                checked={selectedPriceRanges.includes(range.id)}
                onCheckedChange={() => togglePriceRange(range.id)}
              />
              <Label htmlFor={`price-${range.id}`} className="text-sm cursor-pointer">
                {language === "ar" ? range.labelAr : range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Special Filters */}
      <div>
        <h3 className="font-semibold text-sm mb-3">{language === "ar" ? "خاص" : "Special"}</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="new-arrivals"
              checked={showNewOnly}
              onCheckedChange={(checked) => setShowNewOnly(checked as boolean)}
            />
            <Label htmlFor="new-arrivals" className="text-sm cursor-pointer">
              {language === "ar" ? "وصل حديثاً" : "New Arrivals"}
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="bestsellers"
              checked={showBestsellersOnly}
              onCheckedChange={(checked) => setShowBestsellersOnly(checked as boolean)}
            />
            <Label htmlFor="bestsellers" className="text-sm cursor-pointer">
              {language === "ar" ? "الأكثر مبيعاً" : "Bestsellers"}
            </Label>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header with Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 pt-6">
          <Breadcrumb items={[{ label: "Shop", labelAr: "المتجر" }]} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-4">
            {language === "ar" ? "تسوقي المجموعة" : "Shop Collection"}
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "اكتشفي مجموعتنا الحصرية من العباءات الفاخرة والإكسسوارات"
              : "Discover our exclusive collection of premium abayas and accessories"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">{language === "ar" ? "تصفية" : "Filters"}</h2>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                    {language === "ar" ? "مسح الكل" : "Clear All"}
                  </Button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={language === "ar" ? "ابحثي عن منتج..." : "Search products..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden bg-transparent">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    {language === "ar" ? "تصفية" : "Filters"}
                    {activeFiltersCount > 0 && (
                      <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side={language === "ar" ? "right" : "left"}>
                  <SheetHeader>
                    <SheetTitle>{language === "ar" ? "تصفية المنتجات" : "Filter Products"}</SheetTitle>
                    <SheetDescription>
                      {language === "ar"
                        ? "استخدمي المرشحات لتضييق نطاق البحث"
                        : "Use filters to narrow down your search"}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                  {activeFiltersCount > 0 && (
                    <Button variant="outline" onClick={clearAllFilters} className="w-full mt-6 bg-transparent">
                      {language === "ar" ? "مسح جميع المرشحات" : "Clear All Filters"}
                    </Button>
                  )}
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">{language === "ar" ? "مميز" : "Featured"}</SelectItem>
                  <SelectItem value="newest">{language === "ar" ? "الأحدث" : "Newest"}</SelectItem>
                  <SelectItem value="price-asc">
                    {language === "ar" ? "السعر: من الأقل للأعلى" : "Price: Low to High"}
                  </SelectItem>
                  <SelectItem value="price-desc">
                    {language === "ar" ? "السعر: من الأعلى للأقل" : "Price: High to Low"}
                  </SelectItem>
                  <SelectItem value="name-asc">{language === "ar" ? "الاسم: أ-ي" : "Name: A-Z"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Pills */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((cat) => (
                  <Button key={cat} variant="secondary" size="sm" onClick={() => toggleCategory(cat)} className="gap-2">
                    {cat}
                    <X className="h-3 w-3" />
                  </Button>
                ))}
                {selectedColors.map((color) => (
                  <Button
                    key={color}
                    variant="secondary"
                    size="sm"
                    onClick={() => toggleColor(color)}
                    className="gap-2"
                  >
                    {color}
                    <X className="h-3 w-3" />
                  </Button>
                ))}
                {selectedPriceRanges.map((rangeId) => {
                  const range = priceRanges.find((r) => r.id === rangeId)
                  return (
                    <Button
                      key={rangeId}
                      variant="secondary"
                      size="sm"
                      onClick={() => togglePriceRange(rangeId)}
                      className="gap-2"
                    >
                      {language === "ar" ? range?.labelAr : range?.label}
                      <X className="h-3 w-3" />
                    </Button>
                  )
                })}
                {showNewOnly && (
                  <Button variant="secondary" size="sm" onClick={() => setShowNewOnly(false)} className="gap-2">
                    {language === "ar" ? "وصل حديثاً" : "New Arrivals"}
                    <X className="h-3 w-3" />
                  </Button>
                )}
                {showBestsellersOnly && (
                  <Button variant="secondary" size="sm" onClick={() => setShowBestsellersOnly(false)} className="gap-2">
                    {language === "ar" ? "الأكثر مبيعاً" : "Bestsellers"}
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-4">
              {language === "ar"
                ? `عرض ${filteredAndSortedProducts.length} من ${allProducts.length} منتج`
                : `Showing ${filteredAndSortedProducts.length} of ${allProducts.length} products`}
            </p>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="group">
                    <div className="bg-card rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg">
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={language === "ar" ? product.nameAr : product.nameEn}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {language === "ar" ? "جديد" : "New"}
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {language === "ar" ? "الأكثر مبيعاً" : "Bestseller"}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">
                          {language === "ar" ? product.categoryAr : product.categoryEn}
                        </p>
                        <h3 className="font-medium mb-2 line-clamp-1 text-balance">
                          {language === "ar" ? product.nameAr : product.nameEn}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg">{product.price} AED</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice} AED
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  {language === "ar" ? "لا توجد منتجات مطابقة" : "No products found"}
                </p>
                <Button onClick={clearAllFilters}>{language === "ar" ? "مسح المرشحات" : "Clear Filters"}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
