import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductDetails } from "@/components/product/product-details"

const sampleProduct = {
  id: "1",
  slug: "elegant-black-embroidered-abaya",
  nameEn: "Elegant Black Embroidered Abaya",
  nameAr: "عباءة سوداء مطرزة أنيقة",
  price: 1299,
  originalPrice: 1599,
  currency: "AED",
  sku: "AB-001-BLK",
  categoryEn: "Embroidered Abayas",
  categoryAr: "عباءات مطرزة",
  tagsEn: ["New Arrival", "Bestseller", "Limited Edition"],
  tagsAr: ["وصل حديثاً", "الأكثر مبيعاً", "إصدار محدود"],
  descriptionEn: `Experience unparalleled elegance with our signature Elegant Black Embroidered Abaya. This exquisite piece showcases intricate hand-embroidered details along the sleeves and front panel, creating a stunning visual effect that elevates your presence at any occasion.

Crafted from premium Korean Nida fabric, this abaya offers exceptional comfort and durability. The flowing silhouette flatters all body types while maintaining a modest and sophisticated appearance.

Perfect for special occasions, formal events, or when you simply want to make a lasting impression. This abaya seamlessly blends traditional craftsmanship with contemporary design sensibilities.`,
  descriptionAr: `استمتعي بأناقة لا مثيل لها مع عباءتنا السوداء المطرزة الأنيقة. تتميز هذه القطعة الرائعة بتفاصيل تطريز يدوي دقيقة على طول الأكمام واللوحة الأمامية، مما يخلق تأثيراً بصرياً مذهلاً يرفع حضورك في أي مناسبة.

مصنوعة من قماش النيدا الكوري الفاخر، توفر هذه العباءة راحة ومتانة استثنائية. التصميم الانسيابي يناسب جميع أنواع الجسم مع الحفاظ على مظهر محتشم وراقي.

مثالية للمناسبات الخاصة والفعاليات الرسمية، أو عندما تريدين ببساطة ترك انطباع دائم. تمزج هذه العباءة بسلاسة بين الحرفية التقليدية وحساسيات التصميم المعاصر.`,
  detailsEn: [
    "Premium Korean Nida fabric",
    "Hand-embroidered floral motifs",
    "Hidden snap button closure",
    "Side pockets for convenience",
    "Breathable and lightweight",
    "Dry clean recommended",
    "Made in UAE",
  ],
  detailsAr: [
    "قماش نيدا كوري فاخر",
    "زخارف زهرية مطرزة يدوياً",
    "إغلاق بأزرار كبس مخفية",
    "جيوب جانبية للراحة",
    "قابل للتنفس وخفيف الوزن",
    "يُنصح بالتنظيف الجاف",
    "صُنع في الإمارات",
  ],
  colors: [
    { id: "black", nameEn: "Black", nameAr: "أسود", hex: "#1a1a1a" },
    { id: "navy", nameEn: "Navy Blue", nameAr: "أزرق داكن", hex: "#1e3a5f" },
    { id: "burgundy", nameEn: "Burgundy", nameAr: "عنابي", hex: "#722f37" },
    { id: "forest", nameEn: "Forest Green", nameAr: "أخضر غابي", hex: "#228b22" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  stock: {
    XS: 5,
    S: 12,
    M: 8,
    L: 3,
    XL: 0,
  },
  images: [
    {
      type: "image" as const,
      url: "/elegant-black-silk-abaya-with-gold-embroidery-luxu.jpg",
      alt: "Elegant black silk abaya with gold embroidery",
    },
    {
      type: "image" as const,
      url: "/black-abaya-gold-sequins-evening-luxury.jpg",
      alt: "Black abaya with gold sequins evening luxury",
    },
    {
      type: "image" as const,
      url: "/black-abaya-side-profile-showing-flowing-silhouett.jpg",
      alt: "Black abaya side profile flowing silhouette",
    },
    {
      type: "image" as const,
      url: "/black-abaya-with-pearl-embellishments-luxury.jpg",
      alt: "Black abaya with pearl embellishments",
    },
    {
      type: "image" as const,
      url: "/beige-summer-abaya-lightweight.jpg",
      alt: "Beige summer abaya lightweight",
    },
    {
      type: "video" as const,
      url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
      thumbnail: "/elegant-black-silk-abaya-with-gold-embroidery-luxu.jpg",
      alt: "Abaya fashion showcase video",
    },
  ],
  model: {
    size: "S",
    height: 173,
    bust: 88,
    waist: 62,
    hips: 89,
    image: "/model-wearing-abaya.jpg",
  },
  measurements: {
    XS: { shoulder: 39, length: 133, sleeve: 61.5, chest: 95 },
    S: { shoulder: 40, length: 134, sleeve: 62.5, chest: 99 },
    M: { shoulder: 41, length: 135, sleeve: 63.5, chest: 103 },
    L: { shoulder: 42.5, length: 136.5, sleeve: 65, chest: 109 },
    XL: { shoulder: 44, length: 138, sleeve: 66.5, chest: 115 },
  },
  reviews: [
    {
      id: 1,
      nameEn: "Amira K.",
      nameAr: "أميرة ك.",
      rating: 5,
      date: "2024-11-15",
      verified: true,
      textEn:
        "Absolutely stunning! The embroidery is even more beautiful in person. The quality is exceptional and it fits perfectly. I've received so many compliments wearing this to events.",
      textAr:
        "رائعة للغاية! التطريز أجمل بكثير على الطبيعة. الجودة استثنائية والمقاس مثالي. تلقيت الكثير من الإطراء عند ارتدائها في المناسبات.",
      helpful: 24,
    },
    {
      id: 2,
      nameEn: "Sara M.",
      nameAr: "سارة م.",
      rating: 5,
      date: "2024-11-10",
      verified: true,
      textEn:
        "The fabric quality is amazing - so soft and comfortable. I ordered size M and it's perfect. Shipping was fast and the packaging was beautiful.",
      textAr: "جودة القماش مذهلة - ناعم ومريح جداً. طلبت مقاس M وكان مثالياً. الشحن كان سريعاً والتغليف كان جميلاً.",
      helpful: 18,
    },
    {
      id: 3,
      nameEn: "Fatima A.",
      nameAr: "فاطمة أ.",
      rating: 4,
      date: "2024-11-05",
      verified: true,
      textEn:
        "Beautiful abaya with excellent craftsmanship. The only reason for 4 stars is that I wish there were more color options. Otherwise, it's perfect!",
      textAr:
        "عباءة جميلة بحرفية ممتازة. السبب الوحيد لأربع نجوم هو أنني أتمنى لو كان هناك المزيد من خيارات الألوان. بخلاف ذلك، هي مثالية!",
      helpful: 12,
    },
  ],
  relatedProducts: [
    {
      id: "2",
      slug: "classic-black-open-abaya",
      nameEn: "Classic Black Open Abaya",
      nameAr: "عباءة سوداء مفتوحة كلاسيكية",
      price: 899,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80",
    },
    {
      id: "3",
      slug: "navy-blue-lace-abaya",
      nameEn: "Navy Blue Lace Abaya",
      nameAr: "عباءة دانتيل أزرق داكن",
      price: 1199,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    },
    {
      id: "4",
      slug: "pearl-embellished-abaya",
      nameEn: "Pearl Embellished Abaya",
      nameAr: "عباءة مزينة باللؤلؤ",
      price: 1499,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
    },
    {
      id: "5",
      slug: "modern-minimalist-abaya",
      nameEn: "Modern Minimalist Abaya",
      nameAr: "عباءة حديثة بسيطة",
      price: 799,
      image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80",
    },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return {
    title: `${sampleProduct.nameEn} | No.5 Boutique`,
    description: sampleProduct.descriptionEn.substring(0, 160),
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // In production, fetch product data based on slug
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ProductDetails product={sampleProduct} />
      </main>
      <Footer />
    </>
  )
}
