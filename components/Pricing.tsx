"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// AI Model Logo Component
function AIModelLogo({ model }: { model: string }) {
  const logoUrls: Record<string, string> = {
    "ChatGPT": "https://cdn.simpleicons.org/openai/000000",
    "Perplexity": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png",
    "Gemini": "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    "Claude": "https://cdn.simpleicons.org/anthropic/000000"
  };
  
  return (
    <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center p-1">
      <img 
        src={logoUrls[model]} 
        alt={model}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// Custom hook for typewriter effect
function useTypewriter(text: string, speed: number = 80) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  const isComplete = currentIndex === text.length;

  return { displayText, isComplete };
}

interface PricingTier {
  name: string;
  price: number;
  tagline: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  cta: string;
  popular?: boolean;
  aiModels: string[];
  prompts: string;
  tracking: string;
  reports: string;
  support: string;
  keyServices: string[];
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    price: 199,
    tagline: "External Boost",
    description: "Track AI visibility for 2 client brands with ease.",
    cta: "Book a Call",
    aiModels: ["ChatGPT", "Perplexity"],
    prompts: "20 (per brand)",
    tracking: "Weekly",
    reports: "Monthly",
    support: "Email",
    keyServices: [
      "Claim & optimize directories AI platforms scan",
      "Strategic Reddit presence for ChatGPT training data",
      "Citation network across Medium, Substack & Quora"
    ]
  },
  {
    name: "Advanced",
    price: 399,
    tagline: "Full Optimization",
    description: "AI visibility tracking for up to 5 client brands.",
    badge: "Popular",
    badgeColor: "bg-blue-400",
    popular: true,
    cta: "Book a Call",
    aiModels: ["ChatGPT", "Perplexity", "Gemini"],
    prompts: "20 (per brand)",
    tracking: "Daily",
    reports: "Weekly",
    support: "Priority Email",
    keyServices: [
      "Everything in Basic + website access optimization",
      "Enable AI bot crawling & schema markup implementation",
      "Convert site content to AI-readable Q&A format"
    ]
  },
  {
    name: "Premium",
    price: 499,
    tagline: "Full Stack",
    description: "Scalable AI visibility for agencies managing many clients.",
    cta: "Book a Call",
    aiModels: ["ChatGPT", "Perplexity", "Gemini"],
    prompts: "Custom",
    tracking: "Daily",
    reports: "Weekly",
    support: "Dedicated Manager",
    keyServices: [
      "Everything in Advanced + full monitoring stack",
      "Real-time visibility tracking across all major AI platforms",
      "Dedicated GEO strategist managing your entire presence"
    ]
  }
];

export default function Pricing() {
  const headlineText = "AI Presence Optimization Plans";
  const { displayText: typedText, isComplete } = useTypewriter(headlineText, 60);

  return (
    <section id="pricing" className="relative bg-white py-40 overflow-hidden" style={{ paddingBottom: '100px' }}>
      {/* Atmospheric depth - stronger */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[90%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(219, 234, 254, 0.5) 0%, rgba(239, 246, 255, 0.25) 35%, transparent 65%)',
            filter: 'blur(75px)'
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center"
          style={{ marginBottom: '80px' }}
        >
          <h2 className="text-5xl font-bold text-black flex justify-center items-center" style={{ marginBottom: '60px' }}>
            <span>{typedText}</span>
            {!isComplete && <span className="animate-pulse ml-1">|</span>}
          </h2>
          <p className="text-gray-600 max-w-2xl text-center px-8 leading-relaxed" style={{ fontSize: '16px' }}>
            Choose the perfect plan to dominate AI search results and grow your digital presence
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full relative"
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`${tier.badgeColor} text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Static Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 flex flex-col border-2 border-black h-full min-h-[900px]">
                
                {/* Header Section */}
                <div className="text-center px-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                  <p className="text-xs font-medium text-gray-600 mb-3">{tier.tagline}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{tier.description}</p>
                </div>

                {/* COMICALLY HUGE GAP #1 */}
                <div className="h-12"></div>

                {/* Price Section */}
                <div className="text-center px-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-black">${tier.price}</span>
                    <span className="text-xs text-gray-400 ml-2">/mo</span>
                  </div>
                </div>

                <div className="h-8"></div>

                {/* Metrics Section */}
                <div className="px-8">
                  <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 max-w-[280px] ml-auto mr-6">
                    {/* Models */}
                    <span className="text-xs text-gray-500 text-left">Models</span>
                    <div className="flex gap-2 justify-end">
                      {tier.aiModels.map((model, idx) => (
                        <AIModelLogo key={idx} model={model} />
                      ))}
                    </div>

                    {/* Prompts */}
                    <span className="text-xs text-gray-500 text-left">Prompts (per brand)</span>
                    <span className="text-xs font-bold text-black text-right">{tier.prompts}</span>

                    {/* Tracking */}
                    <span className="text-xs text-gray-500 text-left">Tracking</span>
                    <span className="text-xs font-bold text-black text-right">{tier.tracking}</span>

                    {/* Reports */}
                    <span className="text-xs text-gray-500 text-left">Reports</span>
                    <span className="text-xs font-bold text-black text-right">{tier.reports}</span>

                    {/* Support */}
                    <span className="text-xs text-gray-500 text-left">Support</span>
                    <span className="text-xs font-bold text-black text-right">{tier.support}</span>
                  </div>
                </div>

                {/* Gap before Key Services */}
                <div className="h-8"></div>

                {/* Key Services Section */}
                <div className="mb-6 px-6">
                  <p className="text-xs text-gray-500 text-center font-semibold mb-4 uppercase tracking-wide">Key Services</p>
                  <div className="space-y-3">
                    {tier.keyServices.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="text-green-500 text-base flex-shrink-0 font-bold">✓</span>
                        <span className="text-xs text-gray-700 leading-relaxed">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* CTA Button */}
                <div className="px-6">
                  <motion.a
                    href="mailto:yahir@trueinsightsai.com,elijah@trueinsightsai.com"
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-black text-white rounded-xl py-3.5 px-6 font-semibold text-xs transition-all duration-200 hover:bg-gray-800 hover:shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{tier.cta}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

