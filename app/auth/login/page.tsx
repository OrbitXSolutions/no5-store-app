"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

export default function LoginPage() {
  const { language } = useLanguage()
  const router = useRouter()
  const isRTL = language === "ar"
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push("/")
  }

  const handleGoogleLogin = () => {
    // Google OAuth would be implemented here
    console.log("Google login clicked")
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-muted/30 flex flex-col items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-md">
          {/* Added breadcrumb navigation */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Login", labelAr: "تسجيل الدخول" }]} />
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="text-center mb-8">
              <h1 className="font-serif text-2xl font-bold text-primary mb-2">
                {isRTL ? "تسجيل الدخول" : "Welcome Back"}
              </h1>
              <p className="text-muted-foreground text-sm">
                {isRTL ? "سجلي دخولك للمتابعة" : "Sign in to your account to continue"}
              </p>
            </div>

            {/* Google Login */}
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full mb-6 bg-transparent"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon className="w-5 h-5 me-2" />
              {isRTL ? "الدخول بحساب Google" : "Continue with Google"}
            </Button>

            <div className="relative mb-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                {isRTL ? "أو" : "or"}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{isRTL ? "البريد الإلكتروني" : "Email"}</Label>
                <div className="relative">
                  <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={isRTL ? "أدخلي بريدك الإلكتروني" : "Enter your email"}
                    required
                    className="ps-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">{isRTL ? "كلمة المرور" : "Password"}</Label>
                  <Link href="/auth/forgot-password" className="text-sm text-secondary hover:underline">
                    {isRTL ? "نسيتِ كلمة المرور؟" : "Forgot password?"}
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={isRTL ? "أدخلي كلمة المرور" : "Enter your password"}
                    required
                    className="ps-10 pe-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (isRTL ? "جاري التسجيل..." : "Signing in...") : isRTL ? "تسجيل الدخول" : "Sign In"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {isRTL ? "ليس لديكِ حساب؟" : "Don't have an account?"}{" "}
              <Link href="/auth/register" className="text-secondary font-medium hover:underline">
                {isRTL ? "سجلي الآن" : "Sign up"}
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
