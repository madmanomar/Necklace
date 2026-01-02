'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our pieces or want to discuss a custom order? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:omarabdelbagi12@gmail.com" className="font-lora text-gray-800 hover:text-gray-900 transition-colors">
                omarabdelbagi12@gmail.com
              </a>
              <p className="font-lora text-sm text-gray-500 mt-2">We respond within 24 hours</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="font-lora text-gray-600">+1 (234) 567-890</p>
              <p className="font-lora text-sm text-gray-500 mt-2">Available Mon-Fri, 9am-6pm</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="font-lora text-gray-600">Based in Your City</p>
              <p className="font-lora text-sm text-gray-500 mt-2">Handcrafted with care</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-8 text-center">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-lora text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-lora transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-lora text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-lora transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-lora text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-lora transition-colors"
                    placeholder="+44 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-lora text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-lora transition-colors cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="wholesale">Wholesale</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-lora text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-lora transition-colors resize-none"
                  placeholder="Tell us about your inquiry or custom order..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-lora text-green-800">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-lora text-red-800">
                    ✗ Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gray-800 text-white font-lora font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100 border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="font-lora text-lg text-gray-700 mb-8">
            Subscribe to our newsletter for new collections, special offers, and pearl care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg font-lora text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <button className="px-8 py-3 bg-gray-800 text-white font-lora font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
