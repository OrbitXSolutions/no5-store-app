"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Clock, Send, CheckCircle, Instagram } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      titleEn: "Address",
      titleAr: "العنوان",
      content:
        language === "ar" ? "دبي، الإمارات العربية المتحدة\nص.ب: 90690" : "Dubai, United Arab Emirates\nPO Box: 90690",
    },
    {
      icon: WhatsAppIcon,
      titleEn: "WhatsApp",
      titleAr: "واتساب",
      content: "+971 58 899 8267",
      link: "https://wa.me/971588998267",
    },
    {
      icon: Mail,
      titleEn: "Email",
      titleAr: "البريد الإلكتروني",
      content: "sales@no5boutique.com",
      link: "mailto:sales@no5boutique.com",
    },
    {
      icon: Instagram,
      titleEn: "Instagram",
      titleAr: "انستغرام",
      content: "@no.5.boutique",
      link: "https://www.instagram.com/no.5.boutique",
    },
    {
      icon: Clock,
      titleEn: "Business Hours",
      titleAr: "ساعات العمل",
      content: t.contact.info.hoursText,
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-muted overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Contact No.5 Boutique"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-muted via-muted/90 to-muted" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up opacity-0">
                {t.contact.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up opacity-0 stagger-1">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-card-foreground mb-8">
                  {language === "ar" ? "أرسلي لنا رسالة" : "Send us a message"}
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-card-foreground mb-2">
                      {language === "ar" ? "تم الإرسال بنجاح!" : "Message Sent!"}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === "ar"
                        ? "شكراً لتواصلك معنا. سنرد عليك قريباً."
                        : "Thank you for reaching out. We'll get back to you soon."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.name}</Label>
                        <Input id="name" required placeholder={t.contact.form.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input id="email" type="email" required placeholder={t.contact.form.email} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t.contact.form.subject}</Label>
                      <Input id="subject" required placeholder={t.contact.form.subject} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea id="message" required placeholder={t.contact.form.message} rows={5} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 me-2" />
                      {t.contact.form.send}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-8">{t.contact.info.title}</h2>

                <div className="space-y-4 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {language === "ar" ? info.titleAr : info.titleEn}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-secondary transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map/Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-muted">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="No.5 Boutique Location - Dubai"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-accent-foreground mb-4">
              {language === "ar" ? "تفضلين التواصل عبر الواتساب؟" : "Prefer WhatsApp?"}
            </h2>
            <p className="text-accent-foreground/70 mb-6 max-w-2xl mx-auto">
              {language === "ar"
                ? "تواصلي معنا مباشرة عبر الواتساب للحصول على رد سريع ومساعدة شخصية."
                : "Contact us directly on WhatsApp for quick responses and personalized assistance."}
            </p>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
              <a href="https://wa.me/971588998267" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 me-2" />
                {language === "ar" ? "تواصلي عبر الواتساب" : "Chat on WhatsApp"}
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
