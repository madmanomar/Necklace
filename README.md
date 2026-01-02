# Pearl Necklace Studio - E-Commerce Website

A modern, creative website for handcrafted freshwater pearl necklaces. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

### User Experience
- **Modern Hero Section** - Eye-catching landing page with animated gradient backgrounds
- **Product Gallery** - Browse and explore handcrafted pearl necklace collections
- **Detailed Product Pages** - View specifications and customize your order
- **Contact & Inquiry Form** - Get in touch for custom orders and questions
- **Responsive Design** - Beautiful on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion animations for elegant interactions

### Collections
- **Classic Pearl** - Timeless elegance for everyday wear
- **Modern Minimalist** - Contemporary designs with sophisticated simplicity
- **Statement Pieces** - Bold designs that make an impression
- **Custom Orders** - Personalized necklaces tailored to your style

### Pages
- **Home** - Landing page with featured collections and value proposition
- **Gallery** - Browse all available designs with filters and sorting
- **Shop** - (Coming soon) Full e-commerce shopping cart functionality
- **Contact** - Get in touch for inquiries, custom orders, and support

## 🎨 Design Highlights

### Color Palette
- **Pearl** (#F5F1E8) - Soft, elegant base color
- **Gold** (#D4AF37) - Premium accent color
- **Sage** (#9CAF88) - Complementary green tone

### Typography
- **Playfair Display** - Elegant serif font for headings
- **Lora** - Beautiful serif font for body text

### Features
- Custom Tailwind CSS animations
- Glass-effect components
- Gradient overlays and effects
- Smooth scroll interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to `http://localhost:3000`

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with fonts
│   ├── globals.css           # Global styles
│   ├── gallery/
│   │   └── page.tsx          # Gallery page
│   ├── shop/
│   │   └── page.tsx          # Shop page
│   └── contact/
│       └── page.tsx          # Contact form page
├── components/
│   ├── Navigation.tsx        # Header/navbar component
│   ├── HeroSection.tsx       # Hero section with animations
│   └── Footer.tsx            # Footer component
└── lib/
    └── [utility files]

public/                        # Static assets (add product images here)
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Nodemailer** - Email sending (for contact form)

## 📧 Contact Form Setup

The contact form is currently in demo mode. To enable email functionality:

1. Install and configure Nodemailer
2. Create an API route for form submission
3. Update the contact page to submit to your endpoint

Example environment variables needed:
```
NEXT_PUBLIC_EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-app-password
```

## 🎯 Next Steps & Enhancements

### Coming Soon
- [ ] Full shopping cart functionality
- [ ] Payment integration (Stripe/PayPal)
- [ ] Product inventory system
- [ ] Order tracking system
- [ ] Customer reviews and ratings
- [ ] User authentication
- [ ] Admin dashboard for managing products
- [ ] Email notifications for orders
- [ ] Product image gallery with zoom
- [ ] Size and customization options
- [ ] Shipping calculator
- [ ] Blog for pearl care tips

## 📱 Responsive Breakpoints

The site is optimized for:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🎬 Animations

- Fade-in animations on scroll
- Smooth hover effects
- Gradient transitions
- Animated background blobs
- Button and card hover states

## 📝 Customization Guide

### Change Colors
Edit `tailwind.config.ts` to modify the pearl, gold, and sage colors:
```typescript
colors: {
  pearl: '#F5F1E8',
  'pearl-dark': '#E8DCC8',
  gold: '#D4AF37',
  // ...
}
```

### Add Products
Update the necklaces array in `src/app/gallery/page.tsx` with your product details.

### Update Contact Info
Modify contact details in `src/components/Footer.tsx` and `src/app/contact/page.tsx`.

## 🔒 Security Notes

- Keep environment variables in `.env.local` (not committed to git)
- Validate all form submissions on the backend
- Use CORS and security headers appropriately

## 📄 License

This project is created for Pearl Necklace Studio. All rights reserved.

## 👥 Support

For questions or issues with the website, please contact:
- Email: hello@pearlstudio.com
- Phone: +1 (234) 567-890

---

**Happy selling! ✨💎**
