import { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { BlogPost } from './components/BlogPost';
import { BlogList } from './components/BlogList';

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
        <TopBanner />
        <Navbar />
        <BlogList />
        <CTASection />
        <Footer />
      </>
    );
  }

  if (currentPage === 'blog' && blogSlug) {
    return (
      <>
        <TopBanner />
        <Navbar />
        <BlogPost slug={blogSlug} onClose={handleCloseBlog} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialCarousel />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
