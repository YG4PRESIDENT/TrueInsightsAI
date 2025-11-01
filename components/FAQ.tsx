"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Can't I just do this myself?",
    answer: "You could, but it requires monitoring 20+ AI platforms, managing 50+ business profiles, implementing technical schema markup, and constantly adapting to new AI models. Most business owners find their time better spent serving clients."
  },
  {
    question: "How do you prove ROI?",
    answer: "We track AI visibility score (how often you appear), click-throughs from AI platforms (when available), and increases in direct searches for your name. We also monitor before/after rankings for key queries in ChatGPT, Claude, Perplexity, etc."
  },
  {
    question: "What if AI changes?",
    answer: "That's exactly why you need us. We monitor 10+ models, track algorithm changes, and adapt strategies. When GPT-5 launches or a new AI platform emerges, you're covered."
  },
  {
    question: "Why not just hire an SEO agency?",
    answer: "Traditional SEO is about ranking on Google. GEO is about appearing in AI responses with different algorithms and different optimization strategies. AI models care more about structured data, external citations, and authority signals than backlinks."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see their AI visibility score improve within 30 to 60 days. Quick wins include appearing in AI citations within weeks. Long-term positioning takes 3 to 6 months as AI models learn to recognize your authority signals."
  },
  {
    question: "What if I already work with an SEO agency?",
    answer: "We're your one-stop AI presence partner. SEO agencies focus on Google rankings, but they don't track or fix your AI visibility. We diagnose how you're performing across ChatGPT, Claude, Perplexity, and other AI platforms, then we optimize and fix it for you. Think of us as your dedicated AI visibility team that handles everything AI-related."
  },
  {
    question: "Do I need technical knowledge to use your service?",
    answer: "Not at all. We handle everything from technical implementation to ongoing optimization. You'll get clear reports showing your progress without needing to understand the technical details."
  },
  {
    question: "What's included in the free audit?",
    answer: "We analyze your current AI visibility across ChatGPT, Claude, Perplexity, and Gemini. You'll see exactly where you appear (or don't), how you compare to competitors, and our recommendations for improvement."
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer: "We optimize for all major platforms: ChatGPT, Claude, Perplexity, Google's Gemini, Bing Chat, and emerging AI search engines. As new platforms launch, we add them automatically so you're always covered."
  },
  {
    question: "How quickly can you get started?",
    answer: "Immediately. Once you book a call, we can have your free audit completed within 48 hours. From there, we'll implement optimizations and start tracking your AI visibility right away. No long onboarding process, we get to work fast."
  }
];

const leftColumnFAQs = faqData.slice(0, 5);
const rightColumnFAQs = faqData.slice(5, 10);

function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border-b border-gray-200 ${isOpen ? 'border-l-4 border-l-blue-300 pl-4' : ''} transition-all duration-300`}
      style={{ paddingTop: '28px', paddingBottom: '28px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-black group-hover:underline transition-all pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : "text-gray-600 group-hover:text-blue-300"
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-white overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Gentle ambient wash - enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[120%] h-[50%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(219, 234, 254, 0.4) 0%, rgba(239, 246, 255, 0.18) 40%, transparent 65%)',
            filter: 'blur(75px)'
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <h2 className="text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <div style={{ height: '24px' }}></div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </motion.div>
        
        <div style={{ height: '80px' }}></div>

        {/* Two Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 max-w-7xl w-full">
          {/* Left Column */}
          <div>
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnFAQs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

