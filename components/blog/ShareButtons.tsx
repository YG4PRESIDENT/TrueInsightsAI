"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const url = typeof window !== 'undefined' 
    ? `${window.location.origin}/blog/${slug}` 
    : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="mt-12 pt-8 border-t border-blue-100"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-700">Share this article</p>
        
        <div className="flex items-center gap-3">
          {/* Twitter */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all duration-200 hover:shadow-md"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          
          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all duration-200 hover:shadow-md"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          
          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all duration-200 hover:shadow-md relative"
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <LinkIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

