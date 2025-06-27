"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "Chivas Regal 12 Years",
    price: "13999",
    description: "A blend of many different malt and grain Scotch whiskies, matured for at least 12 years.",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop",
    badge: "Premium Choice",
  },
  {
    id: 2,
    name: "Johnnie Walker Black Label",
    price: "12999",
    description: "An uncompromising blend of Scotland's deepest, richest whiskies.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=400&fit=crop",
    badge: "Best Seller",
    emoji: "🍾",
  },
  {
    id: 3,
    name: "Absolut Citron Vodka",
    price: "8999",
    description: "Made exclusively from natural ingredients with a fresh, fruity taste and smooth finish.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop",
    badge: "Featured",
    emoji: "🍾",
  },
]

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
    setIsAutoPlaying(false)
  }

  const currentProduct = featuredProducts[currentSlide]

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-r from-background via-background/95 to-background border-b border-border">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:grid lg:grid-cols-2 h-full">
            {/* Product Info */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                  {currentProduct.badge}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {currentProduct.name}
                  {currentProduct.emoji && <span className="ml-2">{currentProduct.emoji}</span>}
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                {currentProduct.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center space-x-2"
              >
                <span className="text-4xl font-bold text-neutral-800 dark:text-white">Tk.{currentProduct.price}/-</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex space-x-4"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </Button>
              </motion.div>
            </div>

            {/* Product Image */}
            <div className="relative flex items-center justify-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl transform rotate-6"></div>
                <Image
                  src={currentProduct.image || "/placeholder.svg"}
                  alt={currentProduct.name}
                  width={400}
                  height={500}
                  className="relative z-10 rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile/Tablet Layout (under lg) */}
          <div className="lg:hidden relative w-full h-full">
            {/* Background Image with 16:9 aspect ratio */}
            <div className="relative w-full h-full">
              <Image
                src={currentProduct.image || "/placeholder.svg"}
                alt={currentProduct.name}
                fill
                className="object-cover"
                priority
              />

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end px-4 py-10 md:p-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-3 md:space-y-4"
                >
                  {/* Badge */}
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-white/20 text-white rounded-full backdrop-blur-sm">
                    {currentProduct.badge}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {currentProduct.name}
                    {currentProduct.emoji && <span className="ml-2">{currentProduct.emoji}</span>}
                  </h2>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-md line-clamp-2">
                    {currentProduct.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white">Tk.{currentProduct.price}/-</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                    <Button size="sm" className="bg-white/90 hover:bg-white text-black font-medium backdrop-blur-sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Wishlist
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
