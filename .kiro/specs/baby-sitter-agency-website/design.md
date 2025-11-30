# Design Document

## Overview

The baby sitter agency website is a modern, premium web application built with React, TypeScript, and TailwindCSS. The design philosophy follows Apple/Airbnb aesthetics with clean layouts, generous whitespace, and delightful micro-interactions. The architecture emphasizes performance, accessibility, and conversion optimization through strategic placement of trust signals and CTAs.

The website serves as the primary digital touchpoint for parents seeking professional baby care services in Delhi NCR. It must establish immediate trust, clearly communicate service offerings, and provide frictionless paths to contact the agency.

## Architecture

### Technology Stack

**Frontend Framework:**
- React 18+ with TypeScript for type safety and component reusability
- Vite for fast development and optimized production builds
- TailwindCSS for utility-first styling with custom design tokens

**Animation Libraries:**
- Lenis.js for smooth scrolling with momentum-based physics
- Framer Motion for declarative animations and gesture handling
- GSAP with ScrollTrigger for complex scroll-based animations

**Integrations:**
- EmailJS for serverless contact form submissions
- Google Maps Embed API for location display
- Google Analytics 4 for user behavior tracking
- WhatsApp Business API for direct messaging

**Build & Deployment:**
- Vite build system with code splitting and tree shaking
- Vercel for hosting with automatic CDN distribution
- Image optimization with next-gen formats (WebP, AVIF)

### Application Structure

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── HeroBackground.tsx
│   │   └── HeroCTA.tsx
│   ├── TrustBar/
│   │   └── TrustBar.tsx
│   ├── Services/
│   │   ├── ServicesGrid.tsx
│   │   └── ServiceCard.tsx
│   ├── WhyChooseUs/
│   │   ├── WhyChooseUs.tsx
│   │   └── FeatureList.tsx
│   ├── Process/
│   │   ├── ProcessTimeline.tsx
│   │   └── ProcessStep.tsx
│   ├── Testimonials/
│   │   ├── TestimonialCarousel.tsx
│   │   └── TestimonialCard.tsx
│   ├── FAQ/
│   │   ├── FAQSection.tsx
│   │   └── FAQItem.tsx
│   ├── CTA/
│   │   └── CTASection.tsx
│   ├── Contact/
│   │   ├── ContactForm.tsx
│   │   └── MapEmbed.tsx
│   ├── Footer/
│   │   └── Footer.tsx
│   └── shared/
│       ├── FloatingButtons.tsx
│       ├── Button.tsx
│       ├── LoadingSpinner.tsx
│       └── ScrollToTop.tsx
├── hooks/
│   ├── useSmoothScroll.ts
│   ├── useScrollAnimation.ts
│   └── useIntersectionObserver.ts
├── utils/
│   ├── emailService.ts
│   ├── analytics.ts
│   └── validation.ts
├── styles/
│   ├── globals.css
│   └── animations.css
├── data/
│   ├── services.ts
│   ├── testimonials.ts
│   └── faqs.ts
├── App.tsx
└── main.tsx
```

## Components and Interfaces

### Core Component Interfaces

```typescript
// Service Card Component
interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

// Testimonial Component
interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  photo?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

// FAQ Component
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

// Contact Form Component
interface ContactFormData {
  name: string;
  phone: string;
  babyAge: string;
  serviceType: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

// Process Step Component
interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}
```

### Animation Hooks

```typescript
// Smooth Scroll Hook
interface SmoothScrollOptions {
  duration: number;
  easing: (t: number) => number;
  smooth: boolean;
}

function useSmoothScroll(options: SmoothScrollOptions): void;

// Intersection Observer Hook
interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionOptions
): boolean;

// Scroll Animation Hook
interface ScrollAnimationConfig {
  from: object;
  to: object;
  trigger: string;
  start?: string;
  end?: string;
}

function useScrollAnimation(config: ScrollAnimationConfig): void;
```

## Data Models

### Service Data Model

```typescript
const services: Service[] = [
  {
    id: 'live-in-24hr',
    icon: '🏠👶',
    title: '24-Hour Live-In Baby Sitter',
    description: 'Round-the-clock dedicated care with feeding, bathing & sleep management'
  },
  {
    id: 'newborn-care',
    icon: '🍼',
    title: 'Newborn Care Specialist (0-12 months)',
    description: 'Expert newborn handling, hygiene, night feeds & mother support'
  },
  {
    id: 'toddler-care',
    icon: '🧒',
    title: 'Toddler Care (1-3 years)',
    description: 'Meal prep, potty training, early learning activities & development'
  },
  {
    id: 'north-east-nannies',
    icon: '🇳🇵',
    title: 'North East Trained Nannies',
    description: 'Polite, professional, English/Hindi speaking, trusted by 1000s'
  },
  {
    id: 'emergency-replacement',
    icon: '⚡',
    title: 'Emergency Replacement Service',
    description: 'Fast replacement within 24 hours if you\'re not satisfied'
  },
  {
    id: 'mother-baby-package',
    icon: '👩‍🍼',
    title: 'Mother & Baby Care Package',
    description: 'Post-delivery support for both mother recovery & baby care'
  }
];
```

### Testimonial Data Model

```typescript
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    location: 'Noida',
    rating: 5,
    review: 'Best nanny agency in Delhi! Our North East nanny is like family now. Takes care of our 8-month baby with so much love. Highly recommended!'
  },
  {
    id: 'testimonial-2',
    name: 'Rahul Verma',
    location: 'Gurugram',
    rating: 5,
    review: 'Very professional service. They arranged a trained nanny within 1 day. Our baby loves her. Thank you maid placement agency!'
  },
  {
    id: 'testimonial-3',
    name: 'Anjali & Vikram',
    location: 'South Delhi',
    rating: 5,
    review: 'Trusted and reliable. The nanny is experienced, clean and speaks good Hindi. Our worries are gone. Best decision for working parents.'
  },
  {
    id: 'testimonial-4',
    name: 'Neha Kapoor',
    location: 'Ghaziabad',
    rating: 5,
    review: 'After trying 3 other agencies, found this gem. Their replacement policy is genuine. Very happy with the service quality.'
  },
  {
    id: 'testimonial-5',
    name: 'Deepak & Swati',
    location: 'Faridabad',
    rating: 5,
    review: '15/10 service! The nanny handles our twins perfectly. Background verified, trustworthy, and kids are always happy with her.'
  }
];
```

### FAQ Data Model

```typescript
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are your nannies background verified?',
    answer: 'Yes, all our nannies undergo thorough background verification including police verification, ID proof validation, and reference checks. We ensure complete transparency and safety for your family.'
  },
  {
    id: 'faq-2',
    question: 'What if we\'re not satisfied with the nanny?',
    answer: 'We offer a 24-hour replacement guarantee. If you\'re not satisfied with the nanny for any reason, we will provide a replacement within 24 hours at no additional cost.'
  },
  {
    id: 'faq-3',
    question: 'Do nannies stay 24 hours or come daily?',
    answer: 'We offer both options. Our primary service is 24-hour live-in nannies who stay at your home. We also provide daily visit options based on your specific requirements.'
  },
  {
    id: 'faq-4',
    question: 'What is included in baby care service?',
    answer: 'Our comprehensive baby care includes feeding, bathing, diaper changing, sleep management, hygiene maintenance, playtime activities, and basic health monitoring. For newborns, we also provide night feed support and mother assistance.'
  },
  {
    id: 'faq-5',
    question: 'How quickly can you arrange a nanny?',
    answer: 'We can arrange a verified nanny within 24-48 hours of your request. For urgent requirements, we offer same-day placement subject to availability.'
  },
  {
    id: 'faq-6',
    question: 'What are your charges?',
    answer: 'Our charges vary based on the service type, baby\'s age, and specific requirements. Typically, rates range from ₹15,000-30,000 per month. Please contact us for a customized quote based on your needs.'
  },
  {
    id: 'faq-7',
    question: 'Are nannies trained in first aid?',
    answer: 'Yes, all our nannies receive training in baby safety and basic first aid. They are equipped to handle common emergencies and know when to seek immediate medical attention.'
  },
  {
    id: 'faq-8',
    question: 'Can we get a replacement nanny?',
    answer: 'Absolutely! We offer free replacement service anytime during the service period. If your nanny needs to leave or if you\'re not satisfied, we provide a replacement within 24 hours.'
  }
];
```

### Contact Form Validation Schema

```typescript
const contactFormSchema = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    errorMessage: 'Please enter a valid name'
  },
  phone: {
    required: true,
    pattern: /^[6-9]\d{9}$/,
    errorMessage: 'Please enter a valid 10-digit Indian mobile number'
  },
  babyAge: {
    required: true,
    errorMessage: 'Please specify your baby\'s age'
  },
  serviceType: {
    required: true,
    options: [
      '24-Hour Live-In Baby Sitter',
      'Newborn Care Specialist',
      'Toddler Care',
      'North East Trained Nannies',
      'Emergency Replacement',
      'Mother & Baby Care Package'
    ],
    errorMessage: 'Please select a service type'
  },
  message: {
    required: false,
    maxLength: 500
  }
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Trust bar pause on hover
*For any* user interaction with the trust bar, when the user hovers over the scrolling marquee, the animation should pause, and when hover ends, animation should resume.
**Validates: Requirements 1.5**

### Property 2: Service card hover transformation
*For any* service card, when a user hovers over it, the card should scale to 1.05 times its original size and shadow depth should increase.
**Validates: Requirements 2.3**

### Property 3: Service data completeness
*For any* service in the services array, the service object should contain non-empty icon, title, and description properties.
**Validates: Requirements 2.4**

### Property 4: Responsive grid layout
*For any* viewport width below 768 pixels, multi-column grid layouts (services, features, footer) should display as single-column stacks.
**Validates: Requirements 2.5, 9.1**

### Property 5: Timeline responsive orientation
*For any* viewport width below 768 pixels, the process timeline should change from horizontal to vertical orientation.
**Validates: Requirements 4.5**

### Property 6: Testimonial data completeness
*For any* testimonial in the testimonials array, the testimonial object should contain non-empty name, location, rating (1-5), and review properties.
**Validates: Requirements 5.2**

### Property 7: Carousel pause on hover
*For any* user interaction with the testimonial carousel, when the user hovers over it, auto-play should pause, and when hover ends, auto-play should resume.
**Validates: Requirements 5.4**

### Property 8: FAQ accordion toggle
*For any* FAQ item, clicking it when closed should expand it (isOpen = true), and clicking it when open should collapse it (isOpen = false).
**Validates: Requirements 6.2, 6.4**

### Property 9: WhatsApp button link format
*For any* WhatsApp floating button, the href attribute should contain a valid WhatsApp URL with format "https://wa.me/919971691558" and optional pre-filled message.
**Validates: Requirements 7.2**

### Property 10: Call button link format
*For any* call floating button, the href attribute should be "tel:9971691558" to initiate phone calls on mobile devices.
**Validates: Requirements 7.3**

### Property 11: Form input focus state
*For any* form input field, when it receives focus, the label should float upward and the input border should apply glow effect styling.
**Validates: Requirements 8.2**

### Property 12: Form validation for required fields
*For any* contact form submission, if any required field (name, phone, babyAge, serviceType) is empty or invalid, the form should not submit and should display appropriate validation error messages.
**Validates: Requirements 8.3**

### Property 13: Form submission success flow
*For any* valid contact form submission, the EmailJS service should be called with the form data, and upon success, a success message should be displayed to the user.
**Validates: Requirements 8.4**

### Property 14: Mobile navigation toggle
*For any* viewport width below 768 pixels, clicking the hamburger menu icon should toggle the mobile navigation menu visibility (closed to open, or open to closed).
**Validates: Requirements 9.2, 9.3**

### Property 15: Mobile touch target sizing
*For any* interactive element (buttons, links, form inputs) on viewport width below 768 pixels, the element should have minimum dimensions of 44x44 pixels for accessibility.
**Validates: Requirements 9.4**

### Property 16: Interactive element hover effects
*For any* interactive element (buttons, cards, links), hovering over it should apply micro-interaction animations such as scale, lift, or glow effects.
**Validates: Requirements 10.2**

### Property 17: Image lazy loading
*For any* image element on the page, it should have the loading="lazy" attribute to defer loading until the image enters the viewport.
**Validates: Requirements 10.3**

### Property 18: Button hover animations
*For any* button element, hovering over it should apply scale transformation and visual feedback effects.
**Validates: Requirements 10.4**

### Property 19: Image alt text accessibility
*For any* image element on the page, it should have a non-empty alt attribute describing the image content for accessibility and SEO.
**Validates: Requirements 11.4**

### Property 20: Image format optimization
*For any* image served by the website, it should use modern formats (WebP or AVIF) with appropriate compression to minimize file size.
**Validates: Requirements 12.2**

### Property 21: Cross-browser compatibility
*For any* supported browser (Chrome, Firefox, Safari), the website should function correctly without console errors or broken functionality.
**Validates: Requirements 12.5**

### Property 22: Social media link behavior
*For any* social media link in the footer, it should have target="_blank" and rel="noopener noreferrer" attributes to open in a new tab securely.
**Validates: Requirements 13.3**

## Error Handling

### Form Validation Errors

**Client-Side Validation:**
- Name field: Must be 2-50 characters, letters and spaces only
- Phone field: Must be exactly 10 digits starting with 6-9 (Indian mobile format)
- Baby Age field: Required, cannot be empty
- Service Type field: Must be one of the predefined service options
- Message field: Optional, max 500 characters

**Error Display:**
- Show inline error messages below each invalid field
- Use red color (#EF4444) for error text
- Apply red border to invalid input fields
- Clear errors when user starts typing in the field
- Prevent form submission until all validations pass

**Error Messages:**
```typescript
const errorMessages = {
  name: {
    required: 'Please enter your name',
    minLength: 'Name must be at least 2 characters',
    maxLength: 'Name cannot exceed 50 characters',
    pattern: 'Name can only contain letters and spaces'
  },
  phone: {
    required: 'Please enter your phone number',
    pattern: 'Please enter a valid 10-digit Indian mobile number'
  },
  babyAge: {
    required: 'Please specify your baby\'s age'
  },
  serviceType: {
    required: 'Please select a service type'
  },
  message: {
    maxLength: 'Message cannot exceed 500 characters'
  }
};
```

### EmailJS Integration Errors

**Network Errors:**
- Display user-friendly message: "Unable to send message. Please check your internet connection and try again."
- Provide alternative contact options: "You can also reach us at 9971691558 or via WhatsApp"
- Log error details to console for debugging
- Keep form data intact so user doesn't lose their input

**Service Errors:**
- Handle EmailJS service failures gracefully
- Show message: "Something went wrong. Please try again or contact us directly."
- Implement retry mechanism with exponential backoff
- Track failed submissions in analytics

**Success Handling:**
- Clear form fields after successful submission
- Display success message: "Thank you! We'll contact you within 24 hours."
- Optionally redirect to thank you page after 3 seconds
- Track successful submissions in analytics

### Image Loading Errors

**Fallback Strategy:**
- Use placeholder images for failed image loads
- Implement onError handler for img elements
- Show alt text when image fails to load
- Log image loading errors for monitoring

```typescript
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = '/images/placeholder.jpg';
  e.currentTarget.alt = 'Image unavailable';
  console.error('Image failed to load:', e.currentTarget.dataset.src);
};
```

### Animation Errors

**Graceful Degradation:**
- Wrap animation code in try-catch blocks
- Provide static fallback if animation libraries fail to load
- Use CSS transitions as backup for JavaScript animations
- Ensure content is accessible even without animations

**Performance Considerations:**
- Disable animations on low-end devices using matchMedia
- Respect user's prefers-reduced-motion setting
- Throttle scroll event handlers to prevent performance issues

```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable complex animations
  // Use simple CSS transitions instead
}
```

### Browser Compatibility Errors

**Feature Detection:**
- Check for IntersectionObserver support before using
- Provide polyfills for older browsers
- Test critical features in target browsers
- Show upgrade message for unsupported browsers (IE11 and below)

```typescript
if (!('IntersectionObserver' in window)) {
  // Load polyfill or use fallback
  import('intersection-observer');
}
```

### Third-Party Integration Errors

**Google Maps:**
- Handle API key errors gracefully
- Show static map image as fallback
- Provide address text if map fails to load
- Display error message: "Map temporarily unavailable. Address: Pillanji, South Extension, Delhi"

**Analytics:**
- Wrap analytics calls in try-catch
- Don't block page functionality if analytics fails
- Use async loading for analytics scripts

## Testing Strategy

### Unit Testing

**Framework:** Vitest with React Testing Library

**Component Testing:**
- Test each component in isolation
- Mock external dependencies (EmailJS, Google Maps)
- Verify correct props handling
- Test conditional rendering logic
- Verify accessibility attributes

**Example Unit Tests:**

```typescript
// ServiceCard.test.tsx
describe('ServiceCard', () => {
  it('should render service with icon, title, and description', () => {
    const service = {
      id: 'test-service',
      icon: '🏠',
      title: 'Test Service',
      description: 'Test description'
    };
    
    render(<ServiceCard service={service} index={0} />);
    
    expect(screen.getByText('🏠')).toBeInTheDocument();
    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
  
  it('should apply hover styles when hovered', () => {
    const service = { id: 'test', icon: '🏠', title: 'Test', description: 'Desc' };
    render(<ServiceCard service={service} index={0} />);
    
    const card = screen.getByRole('article');
    fireEvent.mouseEnter(card);
    
    expect(card).toHaveClass('scale-105');
  });
});

// ContactForm.test.tsx
describe('ContactForm', () => {
  it('should show validation errors for empty required fields', async () => {
    render(<ContactForm onSubmit={jest.fn()} />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    expect(await screen.findByText('Please enter your name')).toBeInTheDocument();
    expect(await screen.findByText('Please enter your phone number')).toBeInTheDocument();
  });
  
  it('should validate phone number format', async () => {
    render(<ContactForm onSubmit={jest.fn()} />);
    
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.blur(phoneInput);
    
    expect(await screen.findByText('Please enter a valid 10-digit Indian mobile number')).toBeInTheDocument();
  });
});

// FAQItem.test.tsx
describe('FAQItem', () => {
  it('should toggle open state when clicked', () => {
    const faq = { id: '1', question: 'Test?', answer: 'Answer' };
    const onToggle = jest.fn();
    
    render(<FAQItem faq={faq} isOpen={false} onToggle={onToggle} />);
    
    const question = screen.getByText('Test?');
    fireEvent.click(question);
    
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
```

### Property-Based Testing

**Framework:** fast-check (JavaScript property-based testing library)

**Configuration:**
- Run minimum 100 iterations per property test
- Use seed for reproducible test runs
- Configure appropriate shrinking for counterexamples

**Property Test Implementation:**

Each property-based test must include a comment tag referencing the design document property:

```typescript
// Property tests for form validation
describe('Contact Form Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 12: Form validation for required fields
   */
  it('should reject any form submission with missing required fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.option(fc.string(), { nil: '' }),
          phone: fc.option(fc.string(), { nil: '' }),
          babyAge: fc.option(fc.string(), { nil: '' }),
          serviceType: fc.option(fc.string(), { nil: '' }),
          message: fc.string()
        }),
        (formData) => {
          const hasEmptyRequired = 
            !formData.name || 
            !formData.phone || 
            !formData.babyAge || 
            !formData.serviceType;
          
          const validationResult = validateContactForm(formData);
          
          if (hasEmptyRequired) {
            expect(validationResult.isValid).toBe(false);
            expect(validationResult.errors.length).toBeGreaterThan(0);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Feature: baby-sitter-agency-website, Property 13: Form submission success flow
   */
  it('should call EmailJS with correct data for any valid form submission', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.record({
          name: fc.string({ minLength: 2, maxLength: 50 }).filter(s => /^[a-zA-Z\s]+$/.test(s)),
          phone: fc.string().filter(s => /^[6-9]\d{9}$/.test(s)),
          babyAge: fc.string({ minLength: 1 }),
          serviceType: fc.constantFrom(
            '24-Hour Live-In Baby Sitter',
            'Newborn Care Specialist',
            'Toddler Care',
            'North East Trained Nannies',
            'Emergency Replacement',
            'Mother & Baby Care Package'
          ),
          message: fc.string({ maxLength: 500 })
        }),
        async (validFormData) => {
          const mockEmailJS = jest.fn().mockResolvedValue({ status: 200 });
          
          await submitContactForm(validFormData, mockEmailJS);
          
          expect(mockEmailJS).toHaveBeenCalledWith(
            expect.any(String), // service ID
            expect.any(String), // template ID
            expect.objectContaining(validFormData),
            expect.any(String)  // public key
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property tests for responsive behavior
describe('Responsive Layout Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 4: Responsive grid layout
   */
  it('should display single-column layout for any viewport below 768px', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 767 }),
        (viewportWidth) => {
          window.innerWidth = viewportWidth;
          window.dispatchEvent(new Event('resize'));
          
          const serviceGrid = document.querySelector('.services-grid');
          const computedStyle = window.getComputedStyle(serviceGrid);
          
          expect(computedStyle.gridTemplateColumns).toBe('1fr');
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Feature: baby-sitter-agency-website, Property 15: Mobile touch target sizing
   */
  it('should ensure all interactive elements have minimum 44x44px on mobile', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 767 }),
        (viewportWidth) => {
          window.innerWidth = viewportWidth;
          window.dispatchEvent(new Event('resize'));
          
          const interactiveElements = document.querySelectorAll('button, a, input, select');
          
          interactiveElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            expect(rect.width).toBeGreaterThanOrEqual(44);
            expect(rect.height).toBeGreaterThanOrEqual(44);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property tests for data completeness
describe('Data Model Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 3: Service data completeness
   */
  it('should ensure all services have required fields', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 1 }),
            icon: fc.string({ minLength: 1 }),
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 })
          })
        ),
        (services) => {
          services.forEach(service => {
            expect(service.id).toBeTruthy();
            expect(service.icon).toBeTruthy();
            expect(service.title).toBeTruthy();
            expect(service.description).toBeTruthy();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Feature: baby-sitter-agency-website, Property 6: Testimonial data completeness
   */
  it('should ensure all testimonials have required fields with valid rating', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 1 }),
            name: fc.string({ minLength: 1 }),
            location: fc.string({ minLength: 1 }),
            rating: fc.integer({ min: 1, max: 5 }),
            review: fc.string({ minLength: 1 })
          })
        ),
        (testimonials) => {
          testimonials.forEach(testimonial => {
            expect(testimonial.id).toBeTruthy();
            expect(testimonial.name).toBeTruthy();
            expect(testimonial.location).toBeTruthy();
            expect(testimonial.rating).toBeGreaterThanOrEqual(1);
            expect(testimonial.rating).toBeLessThanOrEqual(5);
            expect(testimonial.review).toBeTruthy();
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property tests for accessibility
describe('Accessibility Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 19: Image alt text accessibility
   */
  it('should ensure all images have non-empty alt text', () => {
    fc.assert(
      fc.property(
        fc.constant(document),
        (doc) => {
          const images = doc.querySelectorAll('img');
          
          images.forEach(img => {
            const altText = img.getAttribute('alt');
            expect(altText).toBeTruthy();
            expect(altText.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property tests for interaction behavior
describe('Interaction Properties', () => {
  /**
   * Feature: baby-sitter-agency-website, Property 8: FAQ accordion toggle
   */
  it('should toggle FAQ state correctly for any sequence of clicks', () => {
    fc.assert(
      fc.property(
        fc.array(fc.boolean(), { minLength: 1, maxLength: 10 }),
        (clickSequence) => {
          let isOpen = false;
          
          clickSequence.forEach(() => {
            isOpen = !isOpen;
          });
          
          const expectedState = clickSequence.length % 2 === 1;
          expect(isOpen).toBe(expectedState);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Feature: baby-sitter-agency-website, Property 7: Carousel pause on hover
   */
  it('should pause and resume carousel for any hover interaction', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({ type: fc.constantFrom('enter', 'leave'), delay: fc.integer({ min: 0, max: 1000 }) })),
        (hoverEvents) => {
          let isPlaying = true;
          
          hoverEvents.forEach(event => {
            if (event.type === 'enter') {
              isPlaying = false;
            } else {
              isPlaying = true;
            }
          });
          
          // Verify final state matches last event
          const lastEvent = hoverEvents[hoverEvents.length - 1];
          if (lastEvent) {
            expect(isPlaying).toBe(lastEvent.type === 'leave');
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

**Scope:**
- Test complete user flows from landing to form submission
- Verify EmailJS integration with test credentials
- Test responsive behavior across breakpoints
- Verify third-party integrations (Maps, Analytics)

**Example Integration Tests:**

```typescript
describe('User Journey Integration Tests', () => {
  it('should complete full contact flow', async () => {
    render(<App />);
    
    // User lands on page
    expect(screen.getByText(/Delhi NCR's Most Trusted/i)).toBeInTheDocument();
    
    // User scrolls to contact form
    const contactSection = screen.getByTestId('contact-section');
    contactSection.scrollIntoView();
    
    // User fills form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/baby age/i), { target: { value: '6 months' } });
    fireEvent.change(screen.getByLabelText(/service type/i), { target: { value: 'Newborn Care Specialist' } });
    
    // User submits
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Success message appears
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
  });
});
```

### End-to-End Testing

**Framework:** Playwright

**Test Scenarios:**
- Complete user journey across all sections
- Form submission with EmailJS
- Mobile responsive behavior
- Cross-browser compatibility
- Performance metrics

### Performance Testing

**Metrics to Track:**
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.0s
- Cumulative Layout Shift (CLS) < 0.1
- First Input Delay (FID) < 100ms

**Tools:**
- Lighthouse CI for automated performance audits
- WebPageTest for detailed performance analysis
- Chrome DevTools for profiling

### Accessibility Testing

**Standards:** WCAG 2.1 Level AA compliance

**Testing Approach:**
- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast verification
- Focus management validation

## Implementation Notes

### Animation Performance

**Optimization Strategies:**
- Use CSS transforms and opacity for animations (GPU-accelerated)
- Avoid animating layout properties (width, height, margin)
- Use `will-change` sparingly for critical animations
- Implement `requestAnimationFrame` for JavaScript animations
- Debounce scroll event handlers

### Image Optimization

**Strategy:**
- Serve WebP with JPEG fallback
- Use responsive images with srcset
- Implement lazy loading for below-fold images
- Compress images to 80% quality
- Use appropriate image dimensions (no oversized images)

### Code Splitting

**Approach:**
- Split by route (if multi-page)
- Lazy load heavy components (carousel, maps)
- Separate vendor bundles
- Use dynamic imports for non-critical features

### SEO Implementation

**Meta Tags:**
```html
<title>24/7 Baby Sitter Services in Delhi NCR | Verified Nannies | Maid Placement Agency</title>
<meta name="description" content="Delhi NCR's most trusted baby care service. 15+ years experience, 5000+ happy families. Verified North East & Nepali nannies. 24-hour replacement guarantee. Call 9971691558">
<meta name="keywords" content="baby sitter Delhi, nanny services NCR, newborn care, toddler care, North East nannies, 24 hour baby care">
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maid Placement Agency Baby Sitter",
  "description": "24/7 Live-In Baby Care Service",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pillanji",
    "addressLocality": "South Extension",
    "addressRegion": "Delhi",
    "addressCountry": "IN"
  },
  "telephone": "+919971691558",
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
  }
}
```

### Deployment Configuration

**Vercel Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Browser Support

**Target Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (last 2 versions)

**Polyfills Required:**
- IntersectionObserver for older browsers
- Smooth scroll behavior polyfill
- CSS custom properties fallback

## Maintenance and Updates

### Content Management

**Editable Content:**
- Services data in `src/data/services.ts`
- Testimonials in `src/data/testimonials.ts`
- FAQs in `src/data/faqs.ts`
- Contact information in environment variables

**Update Process:**
1. Edit data files with new content
2. Run `npm run build` to create production build
3. Deploy to Vercel (automatic via Git push)
4. Verify changes in production

### Analytics Tracking

**Events to Track:**
- Page views
- CTA button clicks
- Form submissions (success/failure)
- WhatsApp button clicks
- Call button clicks
- Service card interactions
- FAQ expansions

### Future Enhancements

**Phase 2 Features:**
- Blog section for SEO content
- Online booking system with calendar
- Customer portal for existing clients
- Video testimonials section
- Live chat integration
- Multi-language support (Hindi, English)
- Pricing calculator tool
