'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 group">
            <span className="font-playfair text-sm font-semibold text-gray-800">
              Pearl Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors font-lora text-sm uppercase tracking-widest">
              Home
            </Link>
            <Link href="/shop" className="text-gray-800 hover:text-gray-600 transition-colors font-lora text-sm uppercase tracking-widest">
              Shop
            </Link>
            <Link href="/gallery" className="text-gray-800 hover:text-gray-600 transition-colors font-lora text-sm uppercase tracking-widest">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors font-lora text-sm uppercase tracking-widest">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors" aria-label="User account">
              <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-800" />
              <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-white border-t border-gray-300">
            <Link
              href="/"
              className="block px-4 py-3 hover:bg-gray-50 transition-colors font-lora text-gray-800 uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-4 py-3 hover:bg-gray-50 transition-colors font-lora text-gray-800 uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 hover:bg-gray-50 transition-colors font-lora text-gray-800 uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="block px-4 py-3 hover:bg-gray-50 transition-colors font-lora text-gray-800 uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 hover:bg-gray-50 transition-colors font-lora text-gray-800 uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
