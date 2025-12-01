import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { testimonials as defaultTestimonials } from '../data/testimonials';
import { ReviewForm } from './ReviewForm';

interface UserReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  photo?: string;
}

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userReviews, setUserReviews] = useState<UserReview[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // Load user reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('userReviews');
    if (savedReviews) {
      setUserReviews(JSON.parse(savedReviews));
    }
  }, []);

  // Combine default testimonials with user reviews (user reviews at the end)
  const allTestimonials = [...defaultTestimonials, ...userReviews];

  useEffect(() => {
    if (isPaused || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isVisible, allTestimonials.length]);

  const currentTestimonial = allTestimonials[currentIndex];

  const handleReviewSubmit = (newReview: UserReview) => {
    setUserReviews((prev) => [...prev, newReview]);
    // Show the new review (it will be at the end of user reviews, before default testimonials)
    setCurrentIndex(userReviews.length);
  };

  const handleDeleteReview = (reviewId: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      const updatedReviews = userReviews.filter(r => r.id !== reviewId);
      setUserReviews(updatedReviews);
      localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
    }
  };

  const handleDragEnd = (_event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      // Swipe right - previous
      setCurrentIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
    } else if (info.offset.x < -threshold) {
      // Swipe left - next
      setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="testimonials-section py-10 md:py-14 px-4 md:px-6 bg-gradient-to-br from-purple-50 to-pink-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3">
            What Parents Say
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            {allTestimonials.length} reviews from families across Delhi NCR
          </p>
        </motion.div>

        <div className="relative min-h-[280px] md:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl border border-white/20 cursor-grab active:cursor-grabbing"
            >
              {/* Profile Picture and Stars at Top */}
              <div className="flex flex-col items-center mb-4 md:mb-5">
                {currentTestimonial.photo && (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 md:border-4 border-indigo-200 shadow-lg mb-3 md:mb-4">
                    <img
                      src={currentTestimonial.photo}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex justify-center gap-0.5 md:gap-1 mb-1.5 md:mb-2">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-medium text-gray-900 text-base md:text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  {currentTestimonial.location}
                </p>
              </div>
              
              {/* Review Text */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed italic text-center">
                "{currentTestimonial.review}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length)}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % allTestimonials.length)}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-1 md:gap-1.5 mt-6 md:mt-8">
          {allTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-indigo-600 w-3 md:w-5' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Two Column Layout: Carousel + Review Form */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14 items-start">
          {/* Left: All Reviews Display */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-3 md:p-4 border border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-[500px]">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 text-center flex-shrink-0">
              📝 All Reviews ({allTestimonials.length})
            </h3>
            <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {allTestimonials.map((testimonial, index) => {
                const isUserReview = userReviews.some(r => r.id === testimonial.id);
                return (
                  <motion.div
                    key={testimonial.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-2.5 md:p-3 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 relative group"
                  >
                    <div className="flex items-start gap-3">
                      {testimonial.photo && (
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-sm md:text-base text-gray-900 truncate">
                            {testimonial.name}
                          </p>
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{testimonial.location}</p>
                        <p className="text-xs md:text-sm text-gray-700 line-clamp-2">"{testimonial.review}"</p>
                      </div>
                    </div>
                    
                    {/* Edit/Delete Buttons for User Reviews */}
                    {isUserReview && (
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleDeleteReview(testimonial.id)}
                          className="p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
                          title="Delete review"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Review Form (Compact) */}
          <div className="lg:sticky lg:top-24" id="review-form">
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};
