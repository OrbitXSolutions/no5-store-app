import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "No.5 Boutique | Elegant Abayas & Modest Fashion Dubai",
  description:
    "Discover premium handcrafted Abayas, Hijabs & Perfumes at No.5 Boutique Dubai. Free shipping on orders over 500 AED.",
  keywords: ["abaya", "dubai fashion", "modest fashion", "hijab", "islamic clothing", "luxury abaya"],
  generator: "v0.app",
  openGraph: {
    title: "No.5 Boutique | Elegant Abayas & Modest Fashion Dubai",
    description: "Discover premium handcrafted Abayas at No.5 Boutique Dubai",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.className} font-sans antialiased`}>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
