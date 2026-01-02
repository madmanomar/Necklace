'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Shop() {
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
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Shop Our Collection
          </h1>
          <p className="font-lora text-lg text-gray-700">
            Browse and purchase our beautiful handcrafted pearl necklaces
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="font-lora text-lg text-gray-600 mb-4">
              🛒 Shopping cart functionality coming soon!
            </motion.p>
            <motion.p variants={itemVariants} className="font-lora text-gray-600 mb-8">
              In the meantime, please browse our gallery and contact us for orders or custom requests.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="/gallery"
              className="inline-block px-8 py-3 bg-gray-800 text-white font-lora font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              View Gallery
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
