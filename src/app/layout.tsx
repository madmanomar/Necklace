import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Pearl Necklace | Handcrafted Freshwater Pearl Jewelry',
  description: 'Exquisite handcrafted freshwater pearl necklaces. Browse our collection, customize your piece, or get in touch for custom orders.',
  keywords: 'freshwater pearl necklaces, pearl jewelry, handcrafted jewelry, custom necklaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
