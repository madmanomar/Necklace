'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0)

  const headings = [
    "Timeless Quality",
    "Handcrafted Beauty",
    "Elegant Design"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % headings.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [headings.length])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <div className="relative h-32 sm:h-40 lg:h-48 mb-6 flex items-center">
              <motion.h1
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight absolute"
              >
                {headings[textIndex]}
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="font-lora text-lg sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed"
            >
              Discover our exquisite collection of handcrafted freshwater pearl necklaces & bracelets. Each piece is meticulously designed and carefully assembled to bring timeless elegance to your wardrobe. Perfect for any occasion, from everyday wear to special celebrations.
            </motion.p>

            <motion.div
              variants={itemVariants}
            >
              <Link
                href="/shop"
                className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-lora font-semibold text-sm uppercase tracking-wide rounded-none hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-bl from-gray-100 to-white rounded-lg overflow-hidden">
              {/* Product Image Placeholder */}
              <div className="w-80 h-80 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 blur-3xl"></div>
                  <svg className="w-72 h-72 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
