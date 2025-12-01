import { useState, useEffect, lazy, Suspense } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FloatingButtons } from './components/FloatingButtons';

// Lazy load components for better performance
const ServicesGrid = lazy(() => import('./components/ServicesGrid').then(m => ({ default: m.ServicesGrid })));
const AboutUs = lazy(() => import('./components/AboutUs').then(m => ({ default: m.AboutUs })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const ProcessTimeline = lazy(() => import('./components/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })));
const TestimonialCarousel = lazy(() => import('./components/TestimonialCarousel').then(m => ({ default: m.TestimonialCarousel })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const CTASection = lazy(() => import('./components/CTASection').then(m => ({ default: m.CTASection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const BlogPost = lazy(() => import('./components/BlogPost').then(m => ({ default: m.BlogPost })));
const BlogList = lazy(() => import('./components/BlogList').then(m => ({ default: m.BlogList })));

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'blog-list'>('home');
  const [blogSlug, setBlogSlug] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'blogs') {
        setCurrentPage('blog-list');
        setBlogSlug('');
      } else if (hash.startsWith('blog/')) {
        setCurrentPage('blog');
        setBlogSlug(hash.replace('blog/', ''));
      } else {
        setCurrentPage('home');
        setBlogSlug('');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseBlog = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  if (currentPage === 'blog-list') {
    return (
      <>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <TopBanner />
          <Navbar />
          <BlogList />
          <CTASection />
          <Footer />
        </Suspense>
        <FloatingButtons />
      </>
    );
  }

  if (currentPage === 'blog' && blogSlug) {
    return (
      <>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <TopBanner />
          <Navbar />
          <BlogPost slug={blogSlug} onClose={handleCloseBlog} />
          <Footer />
        </Suspense>
        <FloatingButtons />
      </>
    );
  }

  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <TrustBar />
      <Suspense fallback={<div className="py-20" />}>
        <ServicesGrid />
        <AboutUs />
        <WhyChooseUs />
        <ProcessTimeline />
        <TestimonialCarousel />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </Suspense>
      <FloatingButtons />
    </>
  );
}

export default App;
