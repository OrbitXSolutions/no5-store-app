"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

interface SizeGuideTableProps {
  product: {
    model: { size: string; height: number; bust: number; waist: number; hips: number; image: string }
    measurements: Record<string, { shoulder: number; length: number; sleeve: number; chest: number }>
    sizes: string[]
  }
}

export function SizeGuideTable({ product }: SizeGuideTableProps) {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const [unit, setUnit] = useState<"cm" | "in">("cm")
  const [activeTab, setActiveTab] = useState<"product" | "body">("product")

  const convertToInches = (cm: number) => (cm / 2.54).toFixed(1)

  const getValue = (value: number) => (unit === "cm" ? value : convertToInches(value))

  // Body measurements based on sizes
  const bodyMeasurements = {
    XS: { bust: "82-86", waist: "62-66", hips: "88-92" },
    S: { bust: "86-90", waist: "66-70", hips: "92-96" },
    M: { bust: "90-94", waist: "70-74", hips: "96-100" },
    L: { bust: "94-98", waist: "74-78", hips: "100-104" },
    XL: { bust: "98-102", waist: "78-82", hips: "104-108" },
  }

  return (
    <div className="space-y-6">
      {/* Unit Toggle */}
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-lg border border-border overflow-hidden">
          <button
            onClick={() => setUnit("in")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              unit === "in" ? "bg-secondary text-secondary-foreground" : "hover:bg-muted"
            }`}
          >
            {isRTL ? t.product.inches : t.product.inches}
          </button>
          <button
            onClick={() => setUnit("cm")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              unit === "cm" ? "bg-secondary text-secondary-foreground" : "hover:bg-muted"
            }`}
          >
            {isRTL ? t.product.cm : t.product.cm}
          </button>
        </div>
      </div>

      {/* Model Info */}
      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
          <Image
            src={product.model.image || "/placeholder.svg"}
            alt="Model"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`flex-1 ${isRTL ? "text-right" : ""}`}>
          <p className="font-medium text-foreground mb-1">
            {isRTL ? t.product.modelWears : t.product.modelWears}: {product.model.size}
          </p>
          <p className="text-sm text-muted-foreground">
            {isRTL ? t.product.height : t.product.height}: {getValue(product.model.height)} ·{" "}
            {isRTL ? t.product.bust : t.product.bust}: {getValue(product.model.bust)} ·{" "}
            {isRTL ? t.product.waist : t.product.waist}: {getValue(product.model.waist)} ·{" "}
            {isRTL ? t.product.hips : t.product.hips}: {getValue(product.model.hips)}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("product")}
          className={`px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "product" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {isRTL ? t.product.productMeasurements : t.product.productMeasurements}
          {activeTab === "product" && <span className="absolute bottom-0 start-0 end-0 h-0.5 bg-secondary" />}
        </button>
        <button
          onClick={() => setActiveTab("body")}
          className={`px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "body" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {isRTL ? t.product.bodyMeasurements : t.product.bodyMeasurements}
          {activeTab === "body" && <span className="absolute bottom-0 start-0 end-0 h-0.5 bg-secondary" />}
        </button>
      </div>

      {/* Product Measurements Table */}
      {activeTab === "product" && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-start font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.size : t.product.size}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.shoulder : t.product.shoulder}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.length : t.product.length}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.sleeveLength : t.product.sleeveLength}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.chest : t.product.chest}
                </th>
              </tr>
            </thead>
            <tbody>
              {product.sizes.map((size, index) => {
                const measurements = product.measurements[size]
                return (
                  <tr key={size} className={`border-b border-border ${index % 2 === 1 ? "bg-muted/20" : ""}`}>
                    <td className="px-4 py-4 font-semibold text-secondary">{size}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{getValue(measurements.shoulder)}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{getValue(measurements.length)}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{getValue(measurements.sleeve)}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{getValue(measurements.chest)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Body Measurements Table */}
      {activeTab === "body" && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-start font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.size : t.product.size}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.bust : t.product.bust} ({unit.toUpperCase()})
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.waist : t.product.waist} ({unit.toUpperCase()})
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground bg-muted/50">
                  {isRTL ? t.product.hips : t.product.hips} ({unit.toUpperCase()})
                </th>
              </tr>
            </thead>
            <tbody>
              {product.sizes.map((size, index) => {
                const measurements = bodyMeasurements[size as keyof typeof bodyMeasurements]
                return (
                  <tr key={size} className={`border-b border-border ${index % 2 === 1 ? "bg-muted/20" : ""}`}>
                    <td className="px-4 py-4 font-semibold text-secondary">{size}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{measurements.bust}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{measurements.waist}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{measurements.hips}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Measurement Note */}
      <p className="text-sm text-muted-foreground">{isRTL ? t.product.measurementNote : t.product.measurementNote}</p>
    </div>
  )
}
