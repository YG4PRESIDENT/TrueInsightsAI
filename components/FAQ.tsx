"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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
    answer: "Traditional SEO is about ranking on Google. GEO is about appearing in AI responses - different algorithms, different optimization strategies. AI models care more about structured data, external citations, and authority signals than backlinks."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see initial improvements in AI visibility within 30-45 days. Significant ranking improvements typically occur within 60-90 days as our optimization strategies compound and AI models index the changes."
  },
  {
    question: "Do I need to change my website?",
    answer: "We handle most optimizations externally through directories, content networks, and structured data. Some clients benefit from minor website updates like schema markup, but we can implement that for you if needed."
  },
  {
    question: "Can you track my competitors too?",
    answer: "Absolutely! All plans include competitor tracking. We monitor where your competitors appear in AI search results and identify opportunities to outrank them."
  },
  {
    question: "What if I don't have much online presence yet?",
    answer: "Perfect timing! It's easier to build AI visibility from the ground up than to fix poor existing signals. We'll establish your presence across all key platforms and optimize from day one."
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "No long-term contracts required. We offer month-to-month plans, and you can cancel anytime. We're confident you'll see the value and want to stay."
  },
  {
    question: "What's included in the free audit?",
    answer: "Your free audit includes: current AI visibility score across major platforms (ChatGPT, Claude, Perplexity, Gemini), competitor analysis, missing optimization opportunities, and a customized roadmap to improve your rankings."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5, 10);

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about AI visibility optimization and how we help you dominate search results.
          </p>
        </motion.div>

        {/* FAQ Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 flex-1">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, index) => {
              const actualIndex = index + 5;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900 flex-1">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 mt-1">
                      {openIndex === actualIndex ? (
                        <Minus className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === actualIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help. Get in touch with our team and we'll answer any questions you have.
          </p>
          <a
            href="mailto:hello@trueinsightsai.com"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

