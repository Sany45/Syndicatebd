"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Heart, ShoppingCart, ArrowLeft, Star, Minus, Plus, Share2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"

// Mock product data - in real app, this would come from API/database
const products = {
  1: {
    id: 1,
    name: "Pearly Bay Champagne",
    price: "4999",
    emoji: "🍾",
    description:
      "Pearly Bay Champagne is a premium sparkling wine that embodies elegance and sophistication. Crafted with the finest grapes and traditional methods, this champagne offers a perfect balance of crisp acidity and delicate bubbles. Its golden hue and refined taste make it ideal for celebrations and special occasions. The champagne features notes of green apple, citrus, and a hint of brioche, creating a complex and memorable drinking experience.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop",
    ],
    category: "Champagne",
    alcohol: "12.5%",
    volume: "750ml",
    origin: "France",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    badge: "Premium",
  },
  2: {
    id: 2,
    name: "Royal Stag Indian Whiskey",
    price: "4999",
    emoji: "",
    description:
      "Royal Stag is India's premium whiskey brand, known for its smooth taste and exceptional quality. This whiskey is carefully crafted using the finest ingredients and aged to perfection. It offers a rich, full-bodied flavor with hints of vanilla, oak, and spice. Perfect for those who appreciate the finer things in life, Royal Stag delivers a sophisticated drinking experience that's both bold and refined.",
    images: [
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=600&fit=crop",
    ],
    category: "Whiskey",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India",
    rating: 4.2,
    reviews: 89,
    inStock: true,
    badge: "Popular",
  },
  3: {
    id: 3,
    name: "Chivas Regal 12 Years",
    price: "13999",
    emoji: "",
    description:
      "Chivas Regal 12 Year Old is a premium Scotch whisky that represents the perfect blend of tradition and craftsmanship. Aged for a minimum of 12 years, this whisky offers a rich, smooth taste with notes of honey, vanilla, and ripe apple. The blend includes malt and grain whiskies from Scotland's most prestigious distilleries, creating a harmonious and complex flavor profile that has made Chivas Regal a global icon.",
    images: [
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564933736566-7c2d0d2e7d1e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=600&fit=crop",
    ],
    category: "Scotch Whisky",
    alcohol: "40%",
    volume: "750ml",
    origin: "Scotland",
    rating: 4.7,
    reviews: 256,
    inStock: true,
    badge: "Premium Choice",
  },
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams()

  // Get product data
  const product = products[params.id] || products[1]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={product.images[selectedImage] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-3">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                      ? "border-primary shadow-lg"
                      : "border-border hover:border-muted-foreground"
                      }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Badge and Category */}
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {product.badge}
                </Badge>
                <span className="text-sm text-muted-foreground">{product.category}</span>
              </div>

              {/* Product Name and Emoji */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center">
                  {product.name}
                  {product.emoji && <span className="ml-3 text-3xl">{product.emoji}</span>}
                </h1>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-foreground">৳{product.price}</span>
                <Badge variant={product.inStock ? "default" : "destructive"} className="bg-green-100 text-green-800">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              {/* Product Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Alcohol:</span>
                      <span className="ml-2 font-medium text-xs">{product.alcohol}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Volume:</span>
                      <span className="ml-2 font-medium text-xs">{product.volume}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Origin:</span>
                      <span className="ml-2 font-medium text-xs">{product.origin}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Category:</span>
                      <span className="ml-2 font-medium text-xs">{product.category}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-3 justify-center items-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="max-w-96 w-full">
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-500 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Order Via WhatsApp
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="max-w-96 w-full">
                  <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </motion.div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 text-center min-w-[3rem] font-medium">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsLiked(!isLiked)}
                    className={`${isLiked
                      ? "bg-black text-white border-black hover:bg-gray-800"
                      : "bg-white text-black border-gray-200 hover:bg-gray-50"
                      }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>


              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-3">
              </div> */}
            </motion.div>
          </div>
        </div >
      </div >

      <Footer />
    </div >
  )
}
