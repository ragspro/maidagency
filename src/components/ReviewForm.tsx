import { useState } from 'react';
import { motion } from 'framer-motion';

interface ReviewFormData {
  name: string;
  location: string;
  rating: number;
  review: string;
}

interface ReviewSubmission {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  photo?: string;
}

interface ReviewFormProps {
  onReviewSubmit: (review: ReviewSubmission) => void;
}

export const ReviewForm = ({ onReviewSubmit }: ReviewFormProps) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    location: '',
    rating: 5,
    review: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create new review object
      const newReview: ReviewSubmission = {
        id: `review-${Date.now()}`,
        name: formData.name,
        location: formData.location,
        rating: formData.rating,
        review: formData.review,
        date: new Date().toISOString(),
        photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=6366f1&color=fff&size=200`
      };

      // Save to localStorage (add at the end)
      const existingReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
      const updatedReviews = [...existingReviews, newReview];
      localStorage.setItem('userReviews', JSON.stringify(updatedReviews));

      // Notify parent component
      onReviewSubmit(newReview);

      setSubmitStatus('success');
      setFormData({
        name: '',
        location: '',
        rating: 5,
        review: ''
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-lg rounded-3xl p-3 md:p-5 shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-[500px] flex flex-col"
    >
      <div className="text-center mb-3 flex-shrink-0">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
          ✍️ Write a Review
        </h3>
        <p className="text-xs text-gray-600">
          Share your experience
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2.5 flex-1 flex flex-col">
        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            placeholder="Enter your name"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Location *
          </label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            placeholder="e.g., South Extension"
          />
        </div>



        {/* Rating */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Rating *
          </label>
          <div className="flex gap-1 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <svg
                  className={`w-7 h-7 md:w-8 md:h-8 ${
                    star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            {formData.rating === 5 && '⭐ Excellent!'}
            {formData.rating === 4 && '⭐ Very Good'}
            {formData.rating === 3 && '⭐ Good'}
            {formData.rating === 2 && '⭐ Fair'}
            {formData.rating === 1 && '⭐ Poor'}
          </p>
        </div>

        {/* Review */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Your Review *
          </label>
          <textarea
            required
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            rows={3}
            maxLength={500}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none shadow-sm"
            placeholder="Share your experience..."
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {formData.review.length}/500
          </p>
        </div>

        {/* Submit Button */}
        <div className="mt-auto pt-2">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-2 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.02] ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white shadow-lg`}
          >
            {isSubmitting ? 'Submitting...' : '⭐ Submit Review'}
          </motion.button>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-xs text-center mt-2"
            >
              ✅ Published successfully!
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs text-center mt-2"
            >
              ❌ Please try again.
            </motion.div>
          )}

          <p className="text-xs text-gray-500 text-center mt-2">
            Published instantly • Visible to all
          </p>
        </div>
      </form>
    </motion.div>
  );
};
