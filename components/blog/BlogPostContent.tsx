"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/blog/AuthorBio";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import Link from "next/link";
import { BlogPostData } from "@/lib/blogPosts";
import { Button } from "@/components/ui/Button";

export default function BlogPostContent({ post }: { post: BlogPostData }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-slate-950 overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        {/* Atmospheric blue glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%]"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0) 60%)',
              filter: 'blur(100px)'
            }}
          />
        </div>

        <article className="max-w-4xl mx-auto px-6 w-full relative z-10">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium"
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
            <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-6 border border-blue-500/20 uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-slate-400 text-sm border-y border-slate-800 py-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span className="font-medium text-slate-300">By {post.author}</span>
            </div>
          </motion.div>

          {/* Featured Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-96 bg-slate-900 rounded-2xl flex items-center justify-center mb-12 mx-auto shadow-2xl border border-slate-800"
          >
            <div className="text-slate-700 text-6xl font-bold opacity-50">
              {post.category}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none w-full"
          >
            <div 
              className="text-slate-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </motion.div>

          {/* Share Buttons */}
          <div className="my-12 pt-8 border-t border-slate-800">
             <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Author Bio */}
          <AuthorBio author={post.author} />

          {/* Related Posts */}
          <div className="my-16">
             <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
             <RelatedPosts currentSlug={post.slug} />
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-10 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl text-center w-full border border-slate-800 relative overflow-hidden group"
          >
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to dominate AI search results?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Get a free AI visibility audit and discover exactly how we can help your business rank #1.
              </p>
        <button 
          onClick={() => window.open("https://calendly.com/rankett/30min", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
        >
                <Sparkles className="w-4 h-4 mr-2" />
                Book a Call
              </button>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}