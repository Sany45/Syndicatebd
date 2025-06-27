"use client"

import { motion } from "motion/react"
import { Phone } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-background via-background/95 to-background border-t border-border mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
              WineCare
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium wines and spirits delivered to your doorstep. Quality guaranteed.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+880 1758-758147</span>
              </div>
              <p className="text-xs text-muted-foreground/70">(WhatsApp Available)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <a href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  About Us
                </a>
              </div>
              <div>
                <a href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Contact
                </a>
              </div>
              <div>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-border mt-8 pt-6"
        >
          <div className="text-center">
            <p className="text-muted-foreground/70 text-sm">
              © 2025 SamoSoft. All rights reserved. | Drink Responsibly
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
