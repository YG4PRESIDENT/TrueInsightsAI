"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/blog/AuthorBio";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

// Placeholder blog posts data - you'll expand this later
const blogPosts: Record<string, BlogPostData> = {
  "what-is-geo-and-why-it-matters": {
    slug: "what-is-geo-and-why-it-matters",
    title: "What is GEO and Why It Matters for Your Business",
    excerpt: "Discover how Generative Engine Optimization is revolutionizing the way businesses appear in AI search results and why you need to act now.",
    content: `
# Introduction

The landscape of digital visibility is changing rapidly. While traditional SEO focused on ranking in Google's search results, a new paradigm is emerging: **Generative Engine Optimization (GEO)**.

## What is GEO?

Generative Engine Optimization is the practice of optimizing your online presence to appear in AI-generated responses from platforms like ChatGPT, Claude, Perplexity AI, and Google's Gemini.

Unlike traditional search engines that show a list of links, AI models generate direct answers to user queries. If your business isn't optimized for these platforms, you're invisible to a growing segment of your potential customers.

## Why GEO Matters Now

1. **AI Adoption is Skyrocketing** - Millions of users rely on AI chatbots for recommendations and research
2. **First-Mover Advantage** - Most businesses haven't optimized for AI visibility yet
3. **Higher Intent Users** - People asking AI for recommendations are closer to making decisions
4. **Competitive Moat** - Early optimization builds lasting visibility advantages

## The Difference Between SEO and GEO

Traditional SEO focuses on:
- Keywords and backlinks
- Page speed and technical optimization
- Content targeting search intent

GEO focuses on:
- Structured data and entity recognition
- Authority signals across platforms
- Citation networks and trust signals
- Q&A format optimization

## Getting Started with GEO

The good news? You don't need to choose between SEO and GEO. They complement each other. But you do need specialized expertise to succeed in both.

At TrueInsightsAI, we help businesses navigate this transition and dominate both traditional search and AI-powered results.

Ready to get started? [Book a consultation](#pricing) today.
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "GEO Basics",
    author: "Yahir Gonzalez"
  },
  "chatgpt-vs-google-search-differences": {
    slug: "chatgpt-vs-google-search-differences",
    title: "ChatGPT vs Google Search: The Key Differences for Businesses",
    excerpt: "Understanding how AI models like ChatGPT differ from traditional search engines and what it means for your visibility strategy.",
    content: `
# ChatGPT vs Google Search: What Businesses Need to Know

The way people find information online is evolving. Understanding the differences between AI chatbots and traditional search engines is crucial for modern businesses.

## How They Differ

### Google Search
- Shows ranked list of websites
- Users click through to sites
- Based on keyword matching and backlinks

### ChatGPT
- Generates direct answers
- No clickthrough (usually)
- Based on training data and context

## What This Means for Your Business

If you're only focused on Google SEO, you're missing a massive opportunity. AI platforms are becoming the first stop for research, recommendations, and decision-making.

Stay tuned for more insights on optimizing for both channels.
    `,
    date: "2024-01-10",
    readTime: "7 min read",
    category: "AI Insights",
    author: "Elijah Leach"
  },
  "optimizing-for-perplexity-ai": {
    slug: "optimizing-for-perplexity-ai",
    title: "How to Optimize Your Business for Perplexity AI",
    excerpt: "A comprehensive guide to ensuring your brand appears in Perplexity AI responses and captures more qualified leads.",
    content: `
# Optimizing for Perplexity AI: A Complete Guide

Perplexity AI is one of the fastest-growing AI search platforms. Here's how to ensure your business appears in its results.

## Why Perplexity Matters

Unlike ChatGPT, Perplexity includes citations and sources. This makes it a prime opportunity for businesses to gain visibility and traffic.

## Key Optimization Strategies

1. **Build Authority Signals** - Get mentioned in reputable publications
2. **Optimize Structured Data** - Help AI models understand your business
3. **Create Q&A Content** - Match how users ask questions
4. **Monitor Your Presence** - Track how often you appear in results

## Measuring Success

Track your Perplexity visibility score over time and correlate it with traffic and leads. At TrueInsightsAI, we provide comprehensive monitoring across all major AI platforms.

[Get your free AI visibility audit](#pricing)
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Platform Guides",
    author: "Yahir Gonzalez"
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        {/* Atmospheric blue glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%]"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(219, 234, 254, 0.4) 0%, rgba(239, 246, 255, 0.2) 40%, transparent 65%)',
              filter: 'blur(80px)'
            }}
          />
        </div>

        <article className="max-w-4xl mx-auto px-6 w-full relative z-10">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {/* Category Badge */}
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-200">
              {post.category}
            </span>

            <h1 className="text-5xl font-bold text-black mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </motion.div>

          {/* Featured Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-96 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mb-12 mx-auto shadow-xl border border-blue-200"
          >
            <div className="text-blue-400 text-6xl font-bold">
              {post.category}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none w-full"
          >
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </motion.div>

          {/* Share Buttons */}
          <ShareButtons title={post.title} slug={post.slug} />

          {/* Author Bio */}
          <AuthorBio author={post.author} />

          {/* Related Posts */}
          <RelatedPosts currentSlug={post.slug} />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl text-center w-full border-2 border-blue-200 shadow-lg relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(219, 234, 254, 0.4) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-black mb-4">
                Ready to dominate AI search results?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Get a free AI visibility audit and discover how we can help your business.
              </p>
              <a
                href="/#pricing"
                className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}

