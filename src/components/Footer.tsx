'use client'

import Link from 'next/link'
import { Mail, Phone, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <span className="font-playfair text-lg font-semibold text-gray-800 block mb-4">Pearl Studio</span>
            <p className="text-gray-700 font-lora text-sm">
              Handcrafted freshwater pearl necklaces and bracelets for the modern, elegant person.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 font-lora text-sm text-gray-700">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-900 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3 font-lora text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:omarabdelbagi12@gmail.com" className="hover:text-gray-900 transition-colors">
                  pearline2026@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span>Coming Soon!</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm font-lora">
            © {currentYear} Pearl Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-lora text-sm">
            <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
