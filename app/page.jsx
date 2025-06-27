"use client"

import { motion } from "motion/react"
import ProductCard from "@/components/product-card"
import ProductSlider from "@/components/product-slider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useState, useEffect } from "react"

// const products = [
//   {
//     id: 1,
//     name: "Pearly Bay Champagne",
//     price: "4999",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Royal Stag Indian Whiskey",
//     price: "4999",
//     emoji: "",
//     image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=400&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Chivas Regal 12 Years",
//     price: "13999",
//     emoji: "",
//     image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop",
//   },
//   {
//     id: 4,
//     name: "Jim Beam Bourbon Whiskey",
//     price: "8500",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Grand Macnish Super Smooth Whiskey",
//     price: "7999",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=400&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Absolut Citron 🍋 Vodka Flavored",
//     price: "8999",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop",
//   },
//   {
//     id: 7,
//     name: "All Regular Whiskey",
//     price: "7999",
//     emoji: "🥂",
//     image: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=400&h=400&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Tequila Orendian",
//     price: "8500",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1615332579937-23bbaa4cfa6d?w=400&h=400&fit=crop",
//   },
//   {
//     id: 9,
//     name: "Vuda De Romero Tequila",
//     price: "8999",
//     emoji: "",
//     image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
//   },
//   {
//     id: 10,
//     name: "Beefeater Dry Gin",
//     price: "7999",
//     emoji: "",
//     image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop",
//   },
//   {
//     id: 11,
//     name: "Danzka Vodka",
//     price: "8999",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
//   },
//   {
//     id: 12,
//     name: "Staylanska Vodka",
//     price: "7500",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop",
//   },
//   {
//     id: 13,
//     name: "Johnnie Walker Black Label Whiskey",
//     price: "12999",
//     emoji: "🍾",
//     image: "https://images.unsplash.com/photo-1564933736566-7c2d0d2e7d1e?w=400&h=400&fit=crop",
//   },
// ]

export default function HomePage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await getDocs(collection(db, "products"))
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setProducts(productsList)
    }
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Product Slider */}
      <div className="pt-16">
        <ProductSlider />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent mb-6"
          >
            Premium Wines & Spirits
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Discover our curated collection of finest wines, whiskeys, vodkas, and spirits from around the world.
          </motion.p>
        </div>
      </motion.section>

      {/* Products Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            Featured Products
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
