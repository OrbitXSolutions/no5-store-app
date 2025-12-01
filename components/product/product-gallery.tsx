"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { X, ChevronLeft, ChevronRight, Play, ZoomIn, Maximize2 } from "lucide-react"

interface ProductGalleryProps {
  images: { type: "image" | "video"; url: string; thumbnail?: string; alt: string }[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const currentMedia = images[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setIsZoomed(false)
    setIsPlaying(false)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setIsZoomed(false)
    setIsPlaying(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageContainerRef.current) return
    const rect = imageContainerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPosition({ x, y })
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setIsZoomed(false)
  }

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) {
        if (e.key === "Escape") setIsFullscreen(false)
        if (e.key === "ArrowLeft") isRTL ? handleNext() : handlePrev()
        if (e.key === "ArrowRight") isRTL ? handlePrev() : handleNext()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen, isRTL])

  return (
    <>
      <div className="space-y-4">
        {/* Main Image/Video */}
        <div
          ref={imageContainerRef}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted cursor-zoom-in group"
          onClick={() => currentMedia.type === "image" && setIsZoomed(!isZoomed)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomed(false)}
        >
          {currentMedia.type === "image" ? (
            <Image
              src={currentMedia.url || "/placeholder.svg"}
              alt={currentMedia.alt}
              fill
              className={`object-cover transition-transform duration-300 ${isZoomed ? "scale-[2.5]" : "scale-100"}`}
              style={isZoomed ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : undefined}
              priority
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src={currentMedia.url}
                poster={currentMedia.thumbnail}
                className="w-full h-full object-cover"
                onClick={(e) => {
                  e.stopPropagation()
                  handleVideoPlay()
                }}
              />
              {!isPlaying && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleVideoPlay()
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-foreground ms-1" fill="currentColor" />
                  </div>
                </button>
              )}
            </div>
          )}

          {/* Zoom indicator */}
          {currentMedia.type === "image" && !isZoomed && (
            <div className="absolute bottom-4 end-4 flex items-center gap-2 px-3 py-2 bg-black/50 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
              {isRTL ? t.product.zoomIn : t.product.zoomIn}
            </div>
          )}

          {/* Fullscreen button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleFullscreen()
            }}
            className="absolute top-4 end-4 p-2 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            className="absolute start-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft className={`w-6 h-6 ${isRTL ? "rotate-180" : ""}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute end-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight className={`w-6 h-6 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((media, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setIsZoomed(false)
                setIsPlaying(false)
              }}
              className={`relative flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                activeIndex === index
                  ? "border-secondary ring-2 ring-secondary/30"
                  : "border-transparent hover:border-secondary/50"
              }`}
            >
              <Image
                src={media.type === "video" ? media.thumbnail || media.url : media.url}
                alt={media.alt}
                fill
                className="object-cover"
              />
              {media.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="w-6 h-6 text-white" fill="white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 end-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute start-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className={`w-10 h-10 ${isRTL ? "rotate-180" : ""}`} />
          </button>
          <button
            onClick={handleNext}
            className="absolute end-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className={`w-10 h-10 ${isRTL ? "rotate-180" : ""}`} />
          </button>

          {/* Content */}
          <div className="w-full h-full flex items-center justify-center p-8">
            {currentMedia.type === "image" ? (
              <Image
                src={currentMedia.url || "/placeholder.svg"}
                alt={currentMedia.alt}
                fill
                className="object-contain"
              />
            ) : (
              <video src={currentMedia.url} controls autoPlay className="max-w-full max-h-full" />
            )}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-8 start-1/2 -translate-x-1/2 flex gap-2">
            {images.map((media, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  activeIndex === index ? "border-white" : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={media.type === "video" ? media.thumbnail || media.url : media.url}
                  alt={media.alt}
                  width={64}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-4 start-4 text-white text-lg">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
