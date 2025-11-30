import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { formatBlogContent } from '../utils/formatBlogContent';

interface BlogPostProps {
  slug: string;
  onClose: () => void;
}

export const BlogPost = ({ slug, onClose }: BlogPostProps) => {
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Update meta tags for SEO
      document.title = post.metaTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', post.keywords.join(', '));
      }
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Post Not Found</h1>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-32 pb-20"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-24 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-lg rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      >
        <span className="text-2xl">×</span>
      </button>

      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author}</p>
              <p className="text-sm">Expert Baby Care Team</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="blog-content max-w-none"
          dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
        />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Hire a Baby Care Expert?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Get verified, trained professionals for your baby's care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:9971691558"
              className="px-8 py-3.5 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Call Now: 9971691558
            </a>
            <a
              href="https://wa.me/919971691558"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Related Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">Related Keywords:</h3>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};
