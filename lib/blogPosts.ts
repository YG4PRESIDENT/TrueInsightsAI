export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

// Blog posts data
export const blogPosts: Record<string, BlogPostData> = {
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

At Rankett, we help businesses navigate this transition and dominate both traditional search and AI-powered results.

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

Track your Perplexity visibility score over time and correlate it with traffic and leads. At Rankett, we provide comprehensive monitoring across all major AI platforms.

[Get your free AI visibility audit](#pricing)
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Platform Guides",
    author: "Yahir Gonzalez"
  }
};

