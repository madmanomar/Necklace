import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2 text-center">
                  Demo
                </h3>
                <p className="text-center font-lora text-gray-700 font-semibold">
                  £XX
                </p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2 text-center">
                  Demo
                </h3>
                <p className="text-center font-lora text-gray-700 font-semibold">
                  £XX
                </p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2 text-center">
                  Demo
                </h3>
                <p className="text-center font-lora text-gray-700 font-semibold">
                  £XX
                </p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2 text-center">
                  Demo
                </h3>
                <p className="text-center font-lora text-gray-700 font-semibold">
                  £XX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6 font-lora text-lg text-gray-700">
                <li className="flex items-start space-x-4">
                  <span className="text-gold text-2xl leading-none mt-1 flex-shrink-0">✨</span>
                  <span>
                    <strong>Premium Quality:</strong> Finest materials sourced responsibly
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-gold text-2xl leading-none mt-1 flex-shrink-0">🎨</span>
                  <span>
                    <strong>Expert Craftsmanship:</strong> Each piece handcrafted with care
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-gold text-2xl leading-none mt-1 flex-shrink-0">⭐</span>
                  <span>
                    <strong>Custom Design:</strong> Personalized pieces for special occasions
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-64 h-64 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
