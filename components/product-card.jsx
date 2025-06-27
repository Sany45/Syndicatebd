"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="overflow-hidden bg-card border-border hover:border-muted-foreground/50 transition-all duration-300 shadow-lg hover:shadow-xl">
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.3 }}>
                <Image
                  src={product.image1 || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover cursor-pointer"
                />
              </motion.div>
            </Link>

            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link href={`/products/${product.id}`}>
                  <Button variant="secondary" className="bg-background/90 text-foreground hover:bg-background">
                    View Details
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-3">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-sm font-semibold text-foreground mb-2 hover:text-muted-foreground transition-colors cursor-pointer line-clamp-2 leading-tight">
                {product.name}
              </h3>
            </Link>

            {/* Compact Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Price and Emoji */}
              <div className="flex items-center space-x-1">
                <span className="text-lg font-bold text-foreground">৳{product.price}</span>
                {product.emoji && <span className="text-sm">{product.emoji}</span>}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-1">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className={`h-8 w-8 ${isLiked
                      ? "text-white bg-black hover:bg-gray-800"
                      : "text-black bg-white hover:bg-gray-100 border border-gray-200"
                      } transition-all duration-200`}
                  >
                    <Heart className={`h-3.5 w-3.5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" className="h-8 px-3 bg-black hover:bg-gray-800 text-white text-xs font-medium">
                    <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                    Add
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
