'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Gallery() {
  const [sortBy, setSortBy] = useState('newest')
  
  const necklaces = [
    {
      id: 1,
      name: 'Demo 1',
      price: '£XX',
      description: 'Add later',
      color: 'from-pearl-dark to-pearl',
    },
    {
      id: 2,
      name: 'Demo 2',
      price: '£XX',
      description: 'Add later',
      color: 'from-pink-100 to-pink-50',
    },
    {
      id: 3,
      name: 'Demo 3',
      price: '£XX',
      description: 'Add later',
      color: 'from-yellow-100 to-yellow-50',
    },
    {
      id: 4,
      name: 'Demo 4',
      price: '£XX',
      description: 'Add later',
      color: 'from-orange-100 to-orange-50',
    },
    {
      id: 5,
      name: 'Demo 5',
      price: '£XX',
      description: 'Add later',
      color: 'from-purple-100 to-purple-50',
    },
    {
      id: 6,
      name: 'Demo 6',
      price: '£XX',
      description: 'Add later',
      color: 'from-purple-100 to-pink-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const getSortedNecklaces = () => {
    const sorted = [...necklaces]
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('£', ''))
          const priceB = parseFloat(b.price.replace('£', ''))
          return priceA - priceB
        })
      case 'price-high':
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('£', ''))
          const priceB = parseFloat(b.price.replace('£', ''))
          return priceB - priceA
        })
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'newest':
      default:
        return sorted
    }
  }

  const sortedNecklaces = getSortedNecklaces()

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Pearl Collection
          </h1>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our exquisite handcrafted freshwater pearl necklaces. Each piece is uniquely designed and carefully crafted with premium materials.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-lora text-gray-700">Filter by:</span>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 rounded-full bg-gray-800 text-white font-lora text-sm">
                  All
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-800 text-gray-800 font-lora text-sm hover:bg-gray-800 hover:text-white transition-colors">
                  White
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-800 text-gray-800 font-lora text-sm hover:bg-gray-800 hover:text-white transition-colors">
                  Colored
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-800 text-gray-800 font-lora text-sm hover:bg-gray-800 hover:text-white transition-colors">
                  Statement
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2 font-lora text-gray-700">
              <span>Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sortedNecklaces.map((necklace) => (
              <motion.div
                key={necklace.id}
                variants={itemVariants}
                className="group rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Product Image Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${necklace.color} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark opacity-70 group-hover:opacity-100 transition-opacity"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {necklace.name}
                  </h3>
                  <p className="font-lora text-gray-600 text-sm mb-4">
                    {necklace.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-playfair text-2xl font-bold text-gray-800">
                      {necklace.price}
                    </span>
                    <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 hover:scale-110">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-lora text-lg text-gray-700 mb-8">
            We offer custom designs tailored to your unique style and preferences.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gray-800 text-white font-lora font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Request Custom Order
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
