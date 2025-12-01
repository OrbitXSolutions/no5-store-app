"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { Mail, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-start">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2">{t.newsletter.title}</h3>
              <p className="text-primary-foreground/70">{t.newsletter.subtitle}</p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <Input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0">
                {t.newsletter.button}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About - updated to No.5 Boutique */}
          <div>
            <Link href="/" className="font-serif text-xl font-bold tracking-wide inline-block mb-4">
              No.5 Boutique
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">{t.footer.aboutText}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/no.5.boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/971588998267"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/legal#privacy"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#terms"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#cookies"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {t.footer.cookiePolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#refund"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {t.footer.refundPolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - updated with No.5 Boutique info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm whitespace-pre-line">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="https://wa.me/971588998267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="mailto:sales@no5boutique.com"
                  className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors"
                >
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} No.5 Boutique. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/legal#privacy"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                href="/legal#terms"
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                {t.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
