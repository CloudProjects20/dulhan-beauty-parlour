# 📋 Dulhan Beauty Parlour - Modern Beauty Website

A complete, production-ready beauty parlour website built with **Next.js 16+**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Features a modern, elegant design with pink/purple/neutral color palette optimized for mobile-first browsing.

## ✨ Key Features

### 🎨 Design
- **Modern Aesthetic**: Elegant pink, purple, and neutral color palette
- **Responsive Layout**: Mobile-first, fully responsive design
- **Interactive Elements**: Smooth transitions and hover effects
- **Brand Consistency**: Cohesive design system across all pages

### ⚡ Performance
- **Fast Load Times**: Optimized images and code splitting
- **Production Ready**: Minification and compression
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Accessibility**: WCAG compliant with keyboard navigation

### 📱 Pages
| Page | Features |
|------|----------|
| Home | Hero, About, Services, Gallery, Testimonials, CTA |
| Services | 12+ services with descriptions and pricing |
| Contact | Contact form, business info, social links |
| Booking | Appointment form with date/time selection |

### 🧩 Reusable Components
- `Header` - Navigation with mobile menu
- `Footer` - Contact info and social links
- `ServiceCard` - Service display with pricing
- `TestimonialCard` - Client reviews with ratings
- `SectionDivider` - Visual section separators

## 🚀 Quick Start

### Installation
```bash
# Clone or download project
cd dulhan-beauty-parlour

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build & Deploy
```bash
# Build for production
npm run build

# Start production server
npm start
```

## ⚙️ Configuration

### Update Business Information
Edit `config.ts`:
```typescript
export const config = {
  business: {
    name: 'Your Salon Name',
    contact: { email, phone, address, hours },
    social: { facebook, instagram, twitter },
  },
  services: [ /* your services */ ],
  testimonials: [ /* your testimonials */ ],
};
```

### Update Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #ec4899;        /* Main pink */
  --primary-dark: #be185d;   /* Darker pink */
  --secondary: #8b5cf6;      /* Purple accent */
}
```

### Update SEO
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Salon | Your Tagline',
  description: 'Your description here',
};
```

## 📁 Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── ServiceCard.tsx     # Service card
│   ├── TestimonialCard.tsx # Review card
│   └── SectionDivider.tsx  # Visual divider
├── services/
│   └── page.tsx            # Services page
├── contact/
│   └── page.tsx            # Contact page
├── book-appointment/
│   └── page.tsx            # Booking page
├── layout.tsx              # Root layout
├── page.tsx                # Home page
└── globals.css             # Global styles
```

## 📚 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup and features guide
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick reference
- **[INTEGRATION_EXAMPLES.md](./INTEGRATION_EXAMPLES.md)** - Backend integration
- **[PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md)** - Completion checklist
- **[config.ts](./config.ts)** - Configuration file

## 🛠️ Tech Stack

- **Next.js 16+** - React framework
- **React 19.2+** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Node.js 18+** - Runtime

## 🚀 Deployment

```bash
# Vercel (Recommended)
npm install -g vercel
vercel

# Or use Netlify, AWS Amplify, etc.
```

## 📧 Form Integration

See `INTEGRATION_EXAMPLES.md` for complete backend setup with:
- Email notifications
- Database integration
- Payment processing
- Appointment reminders

## 🎯 Next Steps

1. Customize `config.ts` with your business info
2. Update colors in `app/globals.css` (optional)
3. Add real images to `/public/images/`
4. Set up form integration
5. Deploy to your hosting platform

---

**Built with ❤️ for modern beauty parlours**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
