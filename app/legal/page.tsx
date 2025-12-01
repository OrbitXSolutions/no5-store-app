"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const legalSections = {
  en: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2025",
      content: [
        {
          heading: "Information We Collect",
          text: "We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This information may include your name, email address, postal address, phone number, and payment information.",
        },
        {
          heading: "How We Use Your Information",
          text: "We use the information we collect to process transactions, send you order confirmations and updates, respond to your comments and questions, personalize your shopping experience, and send you marketing communications (with your consent).",
        },
        {
          heading: "Information Sharing",
          text: "We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.",
        },
        {
          heading: "Data Security",
          text: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.",
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      lastUpdated: "Last updated: January 2025",
      content: [
        {
          heading: "Acceptance of Terms",
          text: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.",
        },
        {
          heading: "Products and Pricing",
          text: "All prices are listed in USD and are subject to change without notice. We reserve the right to modify or discontinue any product without notice. We shall not be liable to you or any third party for any modification, price change, or discontinuance.",
        },
        {
          heading: "Order Acceptance",
          text: "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by the same customer account.",
        },
        {
          heading: "Intellectual Property",
          text: "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of LUXE Store and is protected by international copyright laws.",
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: January 2025",
      content: [
        {
          heading: "What Are Cookies",
          text: "Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to the owners of the site.",
        },
        {
          heading: "How We Use Cookies",
          text: "We use cookies to remember your preferences, understand how you use our website, and improve your overall experience. We also use cookies for analytics purposes to understand how visitors interact with our website.",
        },
        {
          heading: "Managing Cookies",
          text: "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.",
        },
      ],
    },
    refund: {
      title: "Refund Policy",
      lastUpdated: "Last updated: January 2025",
      content: [
        {
          heading: "Return Eligibility",
          text: "Items must be returned within 30 days of delivery. Products must be unused, unworn, and in their original packaging with all tags attached. Some items like intimate wear, swimwear, and personalized products cannot be returned.",
        },
        {
          heading: "Refund Process",
          text: "Once we receive your return, we will inspect the item and notify you of the status of your refund. If approved, your refund will be processed within 5-7 business days. The refund will be credited to your original payment method.",
        },
        {
          heading: "Shipping Costs",
          text: "Original shipping costs are non-refundable unless the return is due to our error. Return shipping costs are the responsibility of the customer unless otherwise specified. We recommend using a trackable shipping service.",
        },
      ],
    },
  },
  ar: {
    privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يناير 2025",
      content: [
        {
          heading: "المعلومات التي نجمعها",
          text: "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب أو إجراء عملية شراء أو الاشتراك في النشرة الإخبارية أو التواصل معنا للحصول على الدعم. قد تتضمن هذه المعلومات اسمك وعنوان بريدك الإلكتروني وعنوانك البريدي ورقم هاتفك ومعلومات الدفع.",
        },
        {
          heading: "كيف نستخدم معلوماتك",
          text: "نستخدم المعلومات التي نجمعها لمعالجة المعاملات وإرسال تأكيدات الطلبات والتحديثات والرد على تعليقاتك وأسئلتك وتخصيص تجربة التسوق الخاصة بك وإرسال اتصالات تسويقية (بموافقتك).",
        },
        {
          heading: "مشاركة المعلومات",
          text: "نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف خارجية إلا كما هو موضح في هذه السياسة. قد نشارك معلوماتك مع أطراف ثالثة موثوقة تساعدنا في تشغيل موقعنا الإلكتروني.",
        },
        {
          heading: "أمن البيانات",
          text: "نطبق مجموعة متنوعة من التدابير الأمنية للحفاظ على سلامة معلوماتك الشخصية. يتم الاحتفاظ بمعلوماتك الشخصية خلف شبكات آمنة ولا يمكن الوصول إليها إلا من قبل عدد محدود من الأشخاص.",
        },
      ],
    },
    terms: {
      title: "الشروط والأحكام",
      lastUpdated: "آخر تحديث: يناير 2025",
      content: [
        {
          heading: "قبول الشروط",
          text: "من خلال الوصول إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على الالتزام بهذه الشروط، يرجى عدم استخدام هذا الموقع.",
        },
        {
          heading: "المنتجات والأسعار",
          text: "جميع الأسعار مدرجة بالدولار الأمريكي وهي عرضة للتغيير دون إشعار. نحتفظ بالحق في تعديل أو إيقاف أي منتج دون إشعار.",
        },
        {
          heading: "قبول الطلب",
          text: "نحتفظ بالحق في رفض أي طلب تقدمه لنا. قد نقوم، وفقاً لتقديرنا الخاص، بتحديد أو إلغاء الكميات المشتراة لكل شخص أو لكل أسرة أو لكل طلب.",
        },
        {
          heading: "الملكية الفكرية",
          text: "جميع المحتويات على هذا الموقع، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والصور والبرامج، هي ملك لمتجر LUXE ومحمية بموجب قوانين حقوق النشر الدولية.",
        },
      ],
    },
    cookies: {
      title: "سياسة ملفات تعريف الارتباط",
      lastUpdated: "آخر تحديث: يناير 2025",
      content: [
        {
          heading: "ما هي ملفات تعريف الارتباط",
          text: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقعنا الإلكتروني. تُستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة أكبر وتوفير المعلومات لأصحاب الموقع.",
        },
        {
          heading: "كيف نستخدم ملفات تعريف الارتباط",
          text: "نستخدم ملفات تعريف الارتباط لتذكر تفضيلاتك وفهم كيفية استخدامك لموقعنا وتحسين تجربتك العامة. كما نستخدم ملفات تعريف الارتباط لأغراض التحليلات.",
        },
        {
          heading: "إدارة ملفات تعريف الارتباط",
          text: "تسمح لك معظم متصفحات الويب بالتحكم في ملفات تعريف الارتباط من خلال إعداداتها. يمكنك ضبط متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط.",
        },
      ],
    },
    refund: {
      title: "سياسة الاسترداد",
      lastUpdated: "آخر تحديث: يناير 2025",
      content: [
        {
          heading: "أهلية الإرجاع",
          text: "يجب إرجاع العناصر خلال 30 يوماً من التسليم. يجب أن تكون المنتجات غير مستخدمة وغير ملبوسة وفي عبوتها الأصلية مع جميع العلامات المرفقة. لا يمكن إرجاع بعض العناصر مثل الملابس الداخلية وملابس السباحة والمنتجات المخصصة.",
        },
        {
          heading: "عملية الاسترداد",
          text: "بمجرد استلام إرجاعك، سنقوم بفحص العنصر وإخطارك بحالة استردادك. إذا تمت الموافقة، ستتم معالجة استردادك خلال 5-7 أيام عمل.",
        },
        {
          heading: "تكاليف الشحن",
          text: "تكاليف الشحن الأصلية غير قابلة للاسترداد ما لم يكن الإرجاع بسبب خطأنا. تقع تكاليف شحن الإرجاع على عاتق العميل ما لم يُحدد خلاف ذلك.",
        },
      ],
    },
  },
}

const faqItems = {
  en: [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International shipping may take 10-14 business days depending on the destination.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs duties and taxes.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.",
    },
    {
      question: "How do I return an item?",
      answer:
        "To initiate a return, log into your account and go to your orders section. Select the item you wish to return and follow the prompts. You'll receive a prepaid shipping label via email.",
    },
  ],
  ar: [
    {
      question: "كم يستغرق الشحن؟",
      answer:
        "يستغرق الشحن القياسي 5-7 أيام عمل. يستغرق الشحن السريع 2-3 أيام عمل. قد يستغرق الشحن الدولي 10-14 يوم عمل حسب الوجهة.",
    },
    {
      question: "هل تشحنون دولياً؟",
      answer:
        "نعم، نشحن إلى أكثر من 50 دولة حول العالم. تختلف تكاليف الشحن وأوقات التسليم حسب الموقع. قد تخضع الطلبات الدولية لرسوم جمركية وضرائب.",
    },
    {
      question: "كيف يمكنني تتبع طلبي؟",
      answer:
        "بمجرد شحن طلبك، ستتلقى بريداً إلكترونياً للتأكيد مع رقم تتبع. يمكنك استخدام هذا الرقم لتتبع طردك على موقعنا أو موقع شركة الشحن.",
    },
    {
      question: "ما طرق الدفع التي تقبلونها؟",
      answer:
        "نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، بايبال، آبل باي، وجوجل باي. جميع المعاملات مؤمنة بتشفير SSL.",
    },
    {
      question: "كيف أرجع منتجاً؟",
      answer:
        "لبدء الإرجاع، سجل الدخول إلى حسابك وانتقل إلى قسم طلباتك. حدد العنصر الذي ترغب في إرجاعه واتبع التعليمات. ستتلقى ملصق شحن مدفوع مسبقاً عبر البريد الإلكتروني.",
    },
  ],
}

type SectionKey = "privacy" | "terms" | "cookies" | "refund"

export default function LegalPage() {
  const { t, language } = useLanguage()
  const [activeSection, setActiveSection] = useState<SectionKey>("privacy")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const sections = legalSections[language]
  const faqs = faqItems[language]

  const navItems: { key: SectionKey; label: string }[] = [
    { key: "privacy", label: t.legal.privacy },
    { key: "terms", label: t.legal.terms },
    { key: "cookies", label: t.legal.cookies },
    { key: "refund", label: t.legal.refund },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{t.legal.title}</h1>
              <p className="text-muted-foreground text-lg">
                {language === "ar" ? "اقرأ سياساتنا وشروطنا بعناية" : "Please read our policies and terms carefully"}
              </p>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-4 shadow-sm">
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActiveSection(item.key)}
                        className={cn(
                          "w-full text-start px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          activeSection === item.key
                            ? "bg-secondary text-secondary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-xl p-6 lg:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-card-foreground mb-2">
                    {sections[activeSection].title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">{sections[activeSection].lastUpdated}</p>

                  <div className="space-y-8">
                    {sections[activeSection].content.map((item, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-lg text-card-foreground mb-3">{item.heading}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="mt-12 bg-card rounded-xl p-6 lg:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-card-foreground mb-8">
                    {t.footer.faq}
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-start bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <span className="font-medium text-card-foreground">{faq.question}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-muted-foreground transition-transform",
                              expandedFaq === index && "rotate-180",
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            expandedFaq === index ? "max-h-96" : "max-h-0",
                          )}
                        >
                          <p className="p-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
