"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface RelatedPost {
  slug: string;
  title: string;
  date: string;
  category: string;
}

interface RelatedPostsProps {
  currentSlug: string;
}

// You'll expand this with actual related logic later
const relatedPosts: RelatedPost[] = [
  {
    slug: "chatgpt-vs-google-search-differences",
    title: "ChatGPT vs Google Search: The Key Differences",
    date: "2024-01-10",
    category: "AI Insights"
  },
  {
    slug: "optimizing-for-perplexity-ai",
    title: "How to Optimize Your Business for Perplexity AI",
    date: "2024-01-05",
    category: "Platform Guides"
  },
  {
    slug: "what-is-geo-and-why-it-matters",
    title: "What is GEO and Why It Matters",
    date: "2024-01-15",
    category: "GEO Basics"
  }
];

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  // Filter out current post
  const posts = relatedPosts.filter(post => post.slug !== currentSlug).slice(0, 3);

  return (
    <section className="mt-20 pt-12 border-t border-blue-100">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Related Articles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              {/* Thumbnail */}
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-blue-200/50 transition-all duration-300 border border-blue-100 group-hover:border-blue-300">
                <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs font-medium">
                  {post.category}
                </div>
              </div>

              {/* Category Badge */}
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md mb-2">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-sm font-semibold text-black mb-2 group-hover:text-blue-500 transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Date */}
              <p className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

