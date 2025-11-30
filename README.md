# Baby Sitter Agency Website

A modern, premium baby sitter agency website built with React, TypeScript, and Framer Motion. Features smooth animations, responsive design, and conversion-optimized layout.

## 🚀 Features

- **Modern Design**: Apple/Airbnb-inspired aesthetics with glassmorphism effects
- **Smooth Animations**: Framer Motion powered micro-interactions and scroll animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Contact Form**: EmailJS integration for form submissions
- **Performance**: Optimized build with code splitting and lazy loading

## 📦 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **EmailJS** - Contact form integration
- **Lenis** - Smooth scrolling
- **GSAP** - Advanced animations

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update the credentials in `src/utils/emailService.ts`:

```typescript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

### Updating Content

#### Services
Edit `src/data/services.ts` to update service offerings:

```typescript
export const services: Service[] = [
  {
    id: 'service-id',
    icon: '🏠',
    title: 'Service Title',
    description: 'Service description'
  }
];
```

#### Testimonials
Edit `src/data/testimonials.ts` to update customer reviews:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Customer Name',
    location: 'Location',
    rating: 5,
    review: 'Review text'
  }
];
```

#### FAQs
Edit `src/data/faqs.ts` to update frequently asked questions:

```typescript
export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Question?',
    answer: 'Answer text'
  }
];
```

#### Contact Information
Update contact details in:
- `src/components/Footer.tsx` - Footer contact info
- `src/components/ContactSection.tsx` - Contact section
- `src/components/FloatingButtons.tsx` - WhatsApp and call buttons
- `index.html` - Meta tags and structured data

## 🎨 Customization

### Colors
The website uses a modern color palette. To customize colors, update the CSS classes in components:

- Primary: `bg-indigo-600`, `text-indigo-600`
- Secondary: `bg-purple-600`, `text-purple-600`
- Accent: `bg-green-500`, `text-green-500`

### Animations
Animations are configured using Framer Motion. To adjust animation timing:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // Adjust duration here
>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO

SEO features included:
- Meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card tags
- Schema.org structured data (LocalBusiness)
- XML sitemap
- robots.txt

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if needed)
4. Deploy!

### Other Platforms

The build output is in the `dist` folder after running `npm run build`. Upload this folder to any static hosting service.

## 📊 Performance

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.0s
- Lighthouse Score: 90+

## 🤝 Support

For questions or issues:
- Phone: 9971691558
- Email: info@babysitteragency.com
- WhatsApp: [Click to chat](https://wa.me/919971691558)

## 📄 License

© 2024 Baby Sitter Agency. All rights reserved.
