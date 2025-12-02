# Baby Sitter Agency Website

Delhi NCR's Most Trusted 24-Hour Baby Care Agency website built with React, TypeScript, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with UI
npm run test:ui
```

## 📁 Project Structure

```
src/
├── components/        # React components
├── data/             # Static data (services, testimonials, FAQs)
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── test/             # Test setup files
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update `src/utils/emailService.ts` with your credentials:

```typescript
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Content Management

### Updating Services

Edit `src/data/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: 'unique-id',
    icon: 'icon-name',
    title: 'Service Title',
    description: 'Service description',
    priceRange: '₹18,000 – ₹22,000 per month',
    // ... other fields
  },
];
```

### Updating Testimonials

Edit `src/data/testimonials.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Customer Name',
    location: 'Location',
    rating: 5,
    review: 'Review text',
    photo: 'https://image-url.com/photo.jpg'
  },
];
```

### Updating FAQs

Edit `src/data/faqs.ts`:

```typescript
export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Your question?',
    answer: 'Your answer'
  },
];
```

### Updating Contact Details

Update contact information in:
- `src/components/Footer.tsx` - Footer contact section
- `src/components/FloatingButtons.tsx` - WhatsApp and Call buttons
- `src/components/Hero.tsx` - Hero CTA buttons
- `index.html` - Meta tags and Schema.org data

## 🧪 Testing

### Run All Tests
```bash
npm run test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run Tests Once
```bash
npm run test:run
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables in Vercel dashboard
5. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains production-ready files
# Upload to your hosting provider
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',
      secondary: '#FFB6B9',
      accent: '#F4C430',
    }
  }
}
```

### Fonts

Update fonts in `src/index.css` or `index.html`.

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling with Lenis.js
- ✅ Animations with Framer Motion
- ✅ Contact form with EmailJS integration
- ✅ SEO optimized with meta tags and Schema.org
- ✅ Lazy loading images
- ✅ Testimonial carousel
- ✅ FAQ accordion
- ✅ Service modals
- ✅ Blog system
- ✅ Review submission form
- ✅ WhatsApp & Call floating buttons

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion, GSAP, Lenis.js
- **Form Handling**: EmailJS
- **Testing**: Vitest, React Testing Library, fast-check
- **Deployment**: Vercel

## 📞 Support

For issues or questions:
- Email: sewaenterprises2@gmail.com
- Phone: +91-9971691558, +91-9971691558

## 📄 License

Copyright © 2024 Maid Placement Agency Baby Sitter. All rights reserved.
