"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/blog/AuthorBio";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import Link from "next/link";
import { BlogPostData } from "@/lib/blogPosts";

export default function BlogPostContent({ post }: { post: BlogPostData }) {
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

