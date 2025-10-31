"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

// Placeholder blog posts - replace with actual content or CMS integration
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Search: Why GEO is the New SEO",
    excerpt: "Discover how generative engine optimization is revolutionizing the way businesses appear in AI-powered search results and what you need to do to stay ahead.",
    date: "2025-10-15",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "/blog/geo-future.jpg",
    slug: "future-of-ai-search-geo"
  },
  {
    id: 2,
    title: "10 Ways to Optimize Your Business for ChatGPT and Claude",
    excerpt: "A comprehensive guide to ensuring your business appears in AI chatbot responses and captures the attention of your ideal customers.",
    date: "2025-10-10",
    readTime: "8 min read",
    category: "How-To Guide",
    image: "/blog/chatgpt-optimization.jpg",
    slug: "optimize-business-chatgpt-claude"
  },
  {
    id: 3,
    title: "Case Study: How We Increased AI Visibility by 400%",
    excerpt: "Real results from a local business that dominated AI search results in just 90 days using our proven GEO strategies.",
    date: "2025-10-05",
    readTime: "6 min read",
    category: "Case Study",
    image: "/blog/case-study-400.jpg",
    slug: "case-study-ai-visibility-400-percent"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-black mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest strategies, case studies, and insights on AI visibility and generative engine optimization.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Featured Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200 group"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More content coming soon!
            </h3>
            <p className="text-gray-600 mb-6">
              We're constantly publishing new insights, guides, and case studies. Check back regularly or subscribe to our newsletter.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Subscribe to Updates
            </button>
          </motion.div>
        </div>
      </main>
    </>
  );
}

