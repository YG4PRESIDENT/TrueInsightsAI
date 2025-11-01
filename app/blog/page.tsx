"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
}

// Featured blog posts
const featuredPosts: BlogPost[] = [
  {
    slug: "what-is-geo-and-why-it-matters",
    title: "What is GEO and Why It Matters for Your Business",
    date: "2024-01-15"
  },
  {
    slug: "chatgpt-vs-google-search-differences",
    title: "ChatGPT vs Google Search: The Key Differences for Businesses",
    date: "2024-01-10"
  },
  {
    slug: "optimizing-for-perplexity-ai",
    title: "How to Optimize Your Business for Perplexity AI",
    date: "2024-01-05"
  }
];

// Latest blog posts
const latestPosts: BlogPost[] = [
  {
    slug: "ai-visibility-best-practices",
    title: "Best Alternatives to ChatGPT",
    date: "2024-01-03"
  },
  {
    slug: "local-search-ai-integration",
    title: "Build AI Visibility Platforms in the United States",
    date: "2024-01-02"
  },
  {
    slug: "brand-mentions-ai-platforms",
    title: "Build AI Analysis platform with semantic leads retention",
    date: "2024-01-01"
  },
  {
    slug: "geo-implementation-guide",
    title: "How to use ChatGPT Canvas: Chatbot",
    date: "2023-12-28"
  },
  {
    slug: "ai-search-visibility-checklist",
    title: "Best AI SEO Toolkit Review",
    date: "2023-12-25"
  },
  {
    slug: "perplexity-vs-chatgpt",
    title: "How to know what your customers are thinking for AI",
    date: "2023-12-20"
  }
];

export default function BlogPage() {
  const renderArticleCard = (post: BlogPost, index: number) => (
    <motion.article
      key={post.slug}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        {/* Thumbnail */}
        <div className="w-full h-36 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-blue-200/50 transition-all duration-300 border border-blue-100 group-hover:border-blue-300">
          <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs font-medium">
            {post.thumbnail || "Article"}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-black mb-1.5 group-hover:text-blue-500 transition-colors leading-snug">
          {post.title}
        </h3>

        {/* Date */}
        <p className="text-xs text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </p>
      </Link>
    </motion.article>
  );

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white overflow-hidden">
        {/* Atmospheric blue glow - like Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%]"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(219, 234, 254, 0.5) 0%, rgba(219, 234, 254, 0.3) 25%, rgba(239, 246, 255, 0.15) 45%, transparent 70%)',
              filter: 'blur(90px)'
            }}
          />
        </div>

        {/* Top spacing to clear navbar */}
        <div className="h-24"></div>
        
        <div className="w-full flex flex-col items-center px-6 pb-20 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center max-w-4xl"
          >
            <h1 className="text-6xl font-bold text-black mb-6">
              Tips, lessons and advice
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about dominating AI-powered search and growing your digital presence in the new age of search.
            </p>
          </motion.div>

          {/* Large spacing gap */}
          <div className="h-12"></div>

          {/* Featured Articles Section */}
          <section className="w-full max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-black mb-8"
            >
              Featured Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {featuredPosts.map((post, index) => renderArticleCard(post, index))}
            </div>
          </section>

          <div className="h-14"></div>

          {/* Latest Articles Section */}
          <section className="w-full max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold text-black mb-8"
            >
              Latest Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {latestPosts.map((post, index) => renderArticleCard(post, index))}
            </div>
          </section>

          <div className="h-20"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

