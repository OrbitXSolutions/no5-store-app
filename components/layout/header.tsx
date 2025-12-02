"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { useCart } from "@/lib/cart-context"
import { Menu, X, Search, ShoppingBag, User, Globe, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const { t, language, setLanguage, dir } = useLanguage()
  const { totalItems } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/shop", label: t.nav.shop },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
    { href: "/admin", label: language === "ar" ? "لوحة التحكم" : "Admin" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background border-b border-border",
        isScrolled && "shadow-md backdrop-blur-md",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="font-serif text-xl lg:text-2xl font-bold text-primary tracking-wide">
            No.5 Boutique
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group",
                  link.href === "/admin" && "flex items-center gap-1",
                )}
              >
                {link.href === "/admin" && <Shield className="h-4 w-4" />}
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">{t.common.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  <span className={cn(language === "en" && "font-bold")}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")}>
                  <span className={cn(language === "ar" && "font-bold")}>العربية</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
              <Link href="/shop">
                <Search className="h-5 w-5" />
                <span className="sr-only">{t.header.search}</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
                <span className="sr-only">{t.header.cart}</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
              <Link href="/auth/login">
                <User className="h-5 w-5" />
                <span className="sr-only">{t.header.account}</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2",
                  link.href === "/admin" && "flex items-center gap-2",
                )}
              >
                {link.href === "/admin" && <Shield className="h-4 w-4" />}
                {link.label}
              </Link>
            ))}
            <Link
              href="/auth/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {language === "ar" ? "تسجيل الدخول" : "Login"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
