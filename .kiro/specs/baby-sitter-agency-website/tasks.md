# Implementation Plan

- [x] 1. Set up project structure and dependencies
  - Initialize Vite + React + TypeScript project
  - Install core dependencies: TailwindCSS, Framer Motion, Lenis.js, GSAP, fast-check, Vitest, React Testing Library
  - Configure TailwindCSS with custom color palette (Soft Blue #4A90E2, Warm Peach #FFB6B9, Gold #F4C430)
  - Set up TypeScript configuration with strict mode
  - Create folder structure: components, hooks, utils, data, styles
  - _Requirements: All_

- [x] 2. Create data models and type definitions
  - Define TypeScript interfaces for Service, Testimonial, FAQItem, ContactFormData, ProcessStep
  - Create services data array with 6 services (24-Hour Live-In, Newborn Care, Toddler Care, North East Nannies, Emergency Replacement, Mother & Baby Care)
  - Create testimonials data array with 5 customer reviews from Noida, Gurugram, South Delhi, Ghaziabad, Faridabad
  - Create FAQs data array with 8 questions covering verification, satisfaction, 24-hour service, care inclusions, speed, charges, first aid, replacement
  - Create process steps data with 5 stages: Contact Us, Share Requirements, Meet Candidates, Select & Start, Ongoing Support
  - _Requirements: 2.4, 5.2, 5.5, 6.5, 4.4_

- [x] 2.1 Write property test for service data completeness
  - **Property 3: Service data completeness**
  - **Validates: Requirements 2.4**

- [x] 2.2 Write property test for testimonial data completeness
  - **Property 6: Testimonial data completeness**
  - **Validates: Requirements 5.2**

- [x] 3. Implement shared components and utilities
  - Create Button component with hover animations and ripple effect
  - Create LoadingSpinner component with baby icon bouncing animation
  - Create ScrollToTop button that appears after scrolling
  - Implement form validation utility functions for name, phone, baby age, service type
  - Create EmailJS service integration utility
  - _Requirements: 10.4, 10.5, 8.3_

- [x] 3.1 Write unit tests for form validation utilities
  - Test name validation (2-50 chars, letters and spaces only)
  - Test phone validation (10 digits starting with 6-9)
  - Test required field validation
  - _Requirements: 8.3_

- [x] 4. Implement smooth scrolling and animation hooks
  - Create useSmoothScroll hook with Lenis.js integration (1.2s duration)
  - Create useIntersectionObserver hook for scroll-triggered animations
  - Create useScrollAnimation hook with GSAP ScrollTrigger
  - Initialize Lenis in main App component
  - _Requirements: 10.1_

- [x] 5. Build Hero section component
  - Create Hero component with full-screen layout
  - Add gradient overlay background
  - Implement headline "Delhi NCR's Most Trusted 24/7 Live-In Baby Care Service"
  - Add subheadline with trust indicators (15+ Years, 5000+ Babies, 4.9 Rating)
  - Create two CTA buttons: "Book Free Consultation" and "Call Now: 9971691558"
  - Add Framer Motion animations: text fade-in from bottom, buttons scale-in with stagger
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 5.1 Write unit tests for Hero component
  - Test headline and subheadline render correctly
  - Test CTA buttons are present with correct labels
  - _Requirements: 1.1, 1.3_

- [x] 6. Build Trust Bar component
  - Create TrustBar component with horizontal scrolling marquee
  - Display statistics: 15+ Years Experience, 5000+ Babies Cared, 4.9/5 Rating, Most Trusted, 100% Verified Staff, 24-Hour Replacement
  - Implement infinite scroll animation with CSS or Framer Motion
  - Add pause-on-hover functionality
  - _Requirements: 1.4, 1.5_

- [x] 6.1 Write property test for trust bar pause on hover
  - **Property 1: Trust bar pause on hover**
  - **Validates: Requirements 1.5**

- [x] 7. Build Services section components
  - Create ServicesGrid component with 3-column grid layout (1 column on mobile)
  - Create ServiceCard component with glassmorphism styling (backdrop-blur, semi-transparent background)
  - Display icon, title, and description for each service
  - Implement stagger fade-in animation when cards enter viewport
  - Add hover effects: scale to 1.05, increase shadow depth
  - Make responsive: single column below 768px
  - _Requirements: 2.1, 2.3, 2.4, 2.5_

- [x] 7.1 Write property test for service card hover transformation
  - **Property 2: Service card hover transformation**
  - **Validates: Requirements 2.3**

- [x] 7.2 Write property test for responsive grid layout
  - **Property 4: Responsive grid layout**
  - **Validates: Requirements 2.5, 9.1**

- [x] 8. Build Why Choose Us section
  - Create WhyChooseUs component with split-screen layout
  - Add image on left side with parallax scroll effect
  - Create FeatureList component with 8 features: Background Verified, First Aid Trained, 24/7 Support, North East & Nepali, Affordable, No Hidden Charges, Free Trial, 24-Hour Replacement
  - Add checkmark icons with scale-in bounce animation
  - Implement sequential fade-in for list items
  - _Requirements: 3.1, 3.3, 3.5_

- [x] 8.1 Write unit tests for Why Choose Us section
  - Test split layout structure
  - Test all 8 features are displayed
  - _Requirements: 3.1, 3.3_

- [x] 9. Build Process Timeline component
  - Create ProcessTimeline component with horizontal layout (vertical on mobile)
  - Create ProcessStep component with numbered circles and descriptions
  - Display 5 steps with connecting line
  - Implement line drawing animation on scroll
  - Add sequential pop-in animation for numbered circles
  - Make responsive: vertical orientation below 768px
  - _Requirements: 4.1, 4.4, 4.5_

- [x] 9.1 Write property test for timeline responsive orientation
  - **Property 5: Timeline responsive orientation**
  - **Validates: Requirements 4.5**

- [x] 10. Build Testimonials section
  - Create TestimonialCarousel component with auto-play (5 second interval)
  - Create TestimonialCard component displaying name, location, 5-star rating, review text
  - Implement 3D flip transition effect between testimonials
  - Add pause-on-hover functionality for carousel
  - Display all 5 testimonials in rotation
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 10.1 Write property test for carousel pause on hover
  - **Property 7: Carousel pause on hover**
  - **Validates: Requirements 5.4**

- [x] 11. Build FAQ section
  - Create FAQSection component to manage accordion state
  - Create FAQItem component with question and answer
  - Implement accordion expand/collapse with smooth animation
  - Add icon rotation on expand/collapse
  - Display all 8 FAQ items
  - Implement toggle logic: clicking open item closes it, clicking closed item opens it
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 11.1 Write property test for FAQ accordion toggle
  - **Property 8: FAQ accordion toggle**
  - **Validates: Requirements 6.2, 6.4**

- [x] 12. Build floating action buttons
  - Create FloatingButtons component with WhatsApp and Call buttons
  - Position WhatsApp button in bottom-right corner (fixed position)
  - Position Call button in bottom-left corner (fixed position)
  - Set WhatsApp button href to "https://wa.me/919971691558" with pre-filled message
  - Set Call button href to "tel:9971691558"
  - Make buttons visible throughout scroll
  - Add pulse animation to draw attention
  - _Requirements: 7.1, 7.2, 7.3_

- [x] 12.1 Write property test for WhatsApp button link format
  - **Property 9: WhatsApp button link format**
  - **Validates: Requirements 7.2**

- [x] 12.2 Write property test for call button link format
  - **Property 10: Call button link format**
  - **Validates: Requirements 7.3**

- [x] 13. Build CTA section
  - Create CTASection component with full-width layout
  - Add gradient background (blue to purple)
  - Display headline "Ready to Give Your Baby the Best Care?"
  - Add subtext "Join 5000+ Happy Families in Delhi NCR"
  - Create three CTA buttons: "Book Free Consultation", "Call Now: 9971691558", WhatsApp icon button
  - Implement pulse animation for buttons
  - _Requirements: 7.4, 7.5_

- [x] 13.1 Write unit test for CTA section
  - Test headline and subtext are displayed
  - Test all three CTA buttons are present
  - _Requirements: 7.4_

- [x] 14. Build Contact Form component
  - Create ContactForm component with floating label inputs
  - Add form fields: Name (required), Phone (required), Baby Age (required), Service Type dropdown (required), Message (optional)
  - Implement floating label animation on focus
  - Add glow effect to input borders on focus
  - Implement client-side validation for all required fields
  - Validate phone number format (10 digits starting with 6-9)
  - Display inline error messages for invalid fields
  - Integrate EmailJS for form submission
  - Show success message after successful submission
  - Clear form fields after success
  - _Requirements: 8.2, 8.3, 8.4_

- [x] 14.1 Write property test for form input focus state
  - **Property 11: Form input focus state**
  - **Validates: Requirements 8.2**

- [x] 14.2 Write property test for form validation
  - **Property 12: Form validation for required fields**
  - **Validates: Requirements 8.3**

- [x] 14.3 Write property test for form submission success flow
  - **Property 13: Form submission success flow**
  - **Validates: Requirements 8.4**

- [x] 15. Build Contact section with map
  - Create Contact section with split layout
  - Place ContactForm on left side
  - Add Google Maps embed on right side
  - Center map on "Pillanji, South Extension, Delhi"
  - Make responsive: stack vertically on mobile
  - _Requirements: 8.1, 8.5_

- [x] 15.1 Write unit test for contact section layout
  - Test form and map are both rendered
  - Test map has correct location parameters
  - _Requirements: 8.1, 8.5_

- [x] 16. Build Footer component
  - Create Footer with 4-column layout (stack on mobile)
  - Column 1: About section with logo, description, social media icons (Facebook, Instagram, Twitter)
  - Column 2: Quick Links (Home, Services, About Us, Testimonials, Contact)
  - Column 3: Services list (6 main services)
  - Column 4: Contact info (Address: Pillanji, South Extension, Delhi; Phone: 9971691558; Email; Hours: Open 24/7)
  - Use dark background (#1A1A2E) with gold accents (#F4C430)
  - Add target="_blank" and rel="noopener noreferrer" to social media links
  - Add copyright notice at bottom
  - _Requirements: 13.1, 13.2, 13.3, 13.4_

- [x] 16.1 Write property test for social media link behavior
  - **Property 22: Social media link behavior**
  - **Validates: Requirements 13.3**

- [x] 17. Implement mobile responsive navigation
  - Create mobile navigation with hamburger menu icon
  - Show hamburger menu below 768px viewport width
  - Hide desktop navigation below 768px
  - Implement slide-in animation for mobile menu
  - Add toggle functionality: clicking hamburger opens/closes menu
  - Ensure all interactive elements have minimum 44x44px touch targets on mobile
  - _Requirements: 9.2, 9.3, 9.4_

- [x] 17.1 Write property test for mobile navigation toggle
  - **Property 14: Mobile navigation toggle**
  - **Validates: Requirements 9.2, 9.3**

- [x] 17.2 Write property test for mobile touch target sizing
  - **Property 15: Mobile touch target sizing**
  - **Validates: Requirements 9.4**

- [x] 18. Implement micro-interactions and hover effects
  - Add hover effects to all interactive elements (buttons, cards, links)
  - Implement scale, lift, or glow animations on hover
  - Add ripple effect to button clicks
  - Ensure smooth transitions for all hover states
  - _Requirements: 10.2, 10.4_

- [x] 18.1 Write property test for interactive element hover effects
  - **Property 16: Interactive element hover effects**
  - **Validates: Requirements 10.2**

- [x] 18.2 Write property test for button hover animations
  - **Property 18: Button hover animations**
  - **Validates: Requirements 10.4**

- [x] 19. Implement image optimization and lazy loading
  - Add loading="lazy" attribute to all images
  - Convert images to WebP format with JPEG fallback
  - Implement responsive images with srcset for different screen sizes
  - Add descriptive alt text to all images for accessibility
  - Compress images to 80% quality
  - _Requirements: 10.3, 11.4, 12.2_

- [x] 19.1 Write property test for image lazy loading
  - **Property 17: Image lazy loading**
  - **Validates: Requirements 10.3**

- [x] 19.2 Write property test for image alt text accessibility
  - **Property 19: Image alt text accessibility**
  - **Validates: Requirements 11.4**

- [x] 19.3 Write property test for image format optimization
  - **Property 20: Image format optimization**
  - **Validates: Requirements 12.2**

- [x] 20. Implement SEO optimization
  - Add meta tags: title, description, keywords optimized for "baby sitter Delhi NCR"
  - Add Open Graph tags for social media sharing (og:title, og:description, og:image)
  - Implement Schema.org LocalBusiness structured data with business name, address, phone, hours, rating
  - Create XML sitemap
  - Create robots.txt file
  - Ensure all images have alt text
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [x] 20.1 Write unit tests for SEO meta tags
  - Test meta tags are present with correct content
  - Test Open Graph tags are present
  - Test Schema.org markup is valid JSON-LD
  - _Requirements: 11.1, 11.2, 11.3_

- [x] 21. Implement analytics and tracking
  - Integrate Google Analytics 4
  - Set up event tracking for: CTA clicks, form submissions, WhatsApp clicks, call clicks, service card interactions, FAQ expansions
  - Add analytics to production build only
  - Implement error tracking for form submission failures
  - _Requirements: All (tracking)_

- [x] 22. Configure build optimization
  - Configure Vite for production build with code splitting
  - Minify JavaScript and CSS
  - Enable tree shaking to remove unused code
  - Set up CDN configuration for static assets
  - Optimize bundle size with dynamic imports for heavy components
  - _Requirements: 12.3, 12.4_

- [x] 22.1 Write unit test for build output
  - Test production build generates minified files
  - Test bundle size is within acceptable limits
  - _Requirements: 12.3_

- [x] 23. Implement error handling
  - Add try-catch blocks for EmailJS integration with user-friendly error messages
  - Implement image loading error handlers with placeholder fallbacks
  - Add form validation error display with inline messages
  - Handle Google Maps loading errors with static map fallback
  - Wrap animation code in try-catch for graceful degradation
  - Implement feature detection for IntersectionObserver with polyfill
  - _Requirements: 8.3, 8.4_

- [x] 23.1 Write unit tests for error handling
  - Test form shows errors for invalid inputs
  - Test EmailJS failure shows user-friendly message
  - Test image error handler sets placeholder
  - _Requirements: 8.3, 8.4_

- [x] 24. Implement accessibility features
  - Ensure keyboard navigation works for all interactive elements
  - Add ARIA labels where needed
  - Implement focus management for modals and menus
  - Ensure color contrast meets WCAG 2.1 AA standards
  - Add skip-to-content link
  - Respect prefers-reduced-motion for users who prefer less animation
  - _Requirements: 9.4, 11.4_

- [x] 24.1 Run accessibility audit with axe-core
  - Test for WCAG 2.1 Level AA compliance
  - Test keyboard navigation
  - Test focus indicators
  - _Requirements: 9.4, 11.4_

- [x] 25. Cross-browser testing and compatibility
  - Test website in Chrome, Firefox, and Safari
  - Fix any browser-specific issues
  - Add necessary polyfills for older browsers
  - Ensure no console errors in any supported browser
  - Test on mobile browsers (Safari iOS, Chrome Android)
  - _Requirements: 12.5_

- [x] 25.1 Write property test for cross-browser compatibility
  - **Property 21: Cross-browser compatibility**
  - **Validates: Requirements 12.5**

- [x] 26. Performance optimization
  - Implement code splitting for routes and heavy components
  - Lazy load carousel and maps components
  - Optimize animation performance using CSS transforms and opacity
  - Debounce scroll event handlers
  - Use will-change sparingly for critical animations
  - Minimize use of layout-triggering CSS properties in animations
  - _Requirements: 10.1, 10.2, 12.1_

- [x] 26.1 Run Lighthouse performance audit
  - Target: FCP < 1.5s, LCP < 2.5s, TTI < 3.0s, CLS < 0.1, FID < 100ms
  - Fix any performance issues identified
  - _Requirements: 12.1_

- [x] 27. Create documentation
  - Write README with project setup instructions
  - Document how to update services data
  - Document how to update testimonials
  - Document how to change contact details
  - Create EmailJS setup guide
  - Document deployment process to Vercel
  - _Requirements: 13.5_

- [x] 28. Deploy to Vercel
  - Create Vercel account and link repository
  - Configure build settings (build command, output directory)
  - Set up environment variables for EmailJS and Google Maps API
  - Configure custom domain (optional)
  - Set up security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
  - Enable automatic deployments on Git push
  - _Requirements: All_

- [x] 29. Final testing and quality assurance
  - Test complete user journey from landing to form submission
  - Verify all links work correctly (WhatsApp, phone, social media)
  - Test responsive behavior on multiple devices
  - Verify EmailJS sends emails correctly
  - Check Google Maps displays correct location
  - Verify all animations work smoothly
  - Test form validation with various inputs
  - Ensure no console errors
  - Verify SEO meta tags are correct
  - Test page load speed
  - _Requirements: All_

- [x] 30. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
