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
        <div className="w-full h-48 bg-slate-900 border border-slate-800 rounded-2xl mb-4 overflow-hidden relative group-hover:border-blue-500/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs font-medium uppercase tracking-widest group-hover:text-blue-400 transition-colors">
            {post.thumbnail || "Article"}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
          {post.title}
        </h3>

        {/* Date */}
        <p className="text-xs text-slate-500 font-mono">
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
      <main className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%]"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
              filter: 'blur(100px)'
            }}
          />
        </div>

        {/* Top spacing to clear navbar */}
        <div className="h-32"></div>
        
        <div className="w-full flex flex-col items-center px-6 pb-20 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center max-w-4xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium font-mono mb-6">
              INSIGHTS & INTELLIGENCE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Tips, lessons and advice
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Everything you need to know about dominating AI-powered search and growing your digital presence in the new age of search.
            </p>
          </motion.div>

          {/* Large spacing gap */}
          <div className="h-20"></div>

          {/* Featured Articles Section */}
          <section className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-10 flex items-center gap-3"
            >
              Featured Articles
              <div className="h-px flex-1 bg-slate-800" />
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {featuredPosts.map((post, index) => renderArticleCard(post, index))}
            </div>
          </section>

          <div className="h-24"></div>

          {/* Latest Articles Section */}
          <section className="w-full max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold text-white mb-10 flex items-center gap-3"
            >
              Latest Articles
              <div className="h-px flex-1 bg-slate-800" />
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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