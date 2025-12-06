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
      "Dedicated GEO manager for your entire AI presence."
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black flex justify-center items-center px-4 sm:px-0" style={{ marginBottom: '40px', lineHeight: '1.2' }}>
            <span>{typedText}</span>
            {!isComplete && <span className="animate-pulse ml-1">|</span>}
          </h2>
          <p className="text-gray-600 max-w-2xl text-center px-6 sm:px-8 leading-relaxed text-base sm:text-lg">
            Choose the perfect plan to dominate AI search results and grow your digital presence
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
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
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <span 
                    className="text-white rounded-full font-bold shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                      fontSize: '11px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Static Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 flex flex-col border-2 border-black h-full min-h-[450px] sm:min-h-[475px]">
                
                {/* Subtle Top Spacing */}
                <div style={{ height: '12px' }}></div>

                {/* Header Section */}
                <div className="text-center px-2 sm:px-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">{tier.name}</h3>
                  <p className="text-xs font-medium text-gray-600 mb-3">{tier.tagline}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{tier.description}</p>
                </div>

                {/* Gap */}
                <div className="h-4"></div>

                {/* Price Section */}
                <div className="text-center px-2 sm:px-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-black">${tier.price}</span>
                    <span className="text-xs text-gray-400 ml-2">/mo</span>
                  </div>
                </div>

                {/* Gap between Price and Models */}
                <div className="h-8"></div>

                {/* Metrics Section */}
                <div className="px-4 sm:px-8 md:px-12">
                  <div className="grid grid-cols-[auto_auto] gap-x-4 sm:gap-x-8 gap-y-3 justify-center text-xs sm:text-sm">
                    {/* Models */}
                    <span className="text-xs text-gray-500 flex items-center">Models</span>
                    <div className="flex gap-2 justify-end items-center">
                      {tier.aiModels.map((model, idx) => (
                        <AIModelLogo key={idx} model={model} />
                      ))}
                      {tier.name === "Premium" && (
                        <span className="text-sm font-bold text-black ml-1">+</span>
                      )}
                    </div>

                    {/* Prompts */}
                    <span className="text-xs text-gray-500">Prompts (per brand)</span>
                    <span className="text-xs font-bold text-black text-right">{tier.prompts}</span>

                    {/* Tracking */}
                    <span className="text-xs text-gray-500">Tracking</span>
                    <span className="text-xs font-bold text-black text-right">{tier.tracking}</span>

                    {/* Reports */}
                    <span className="text-xs text-gray-500">Reports</span>
                    <span className="text-xs font-bold text-black text-right">{tier.reports}</span>

                    {/* Support */}
                    <span className="text-xs text-gray-500">Support</span>
                    <span className="text-xs font-bold text-black text-right">{tier.support}</span>
                  </div>
                </div>

                {/* Gap between Support and Key Services */}
                <div className="h-8"></div>

                {/* Key Services Section */}
                <div className="mb-4 px-2 sm:px-6">
                  <p className="text-xs text-gray-500 text-center font-semibold mb-4 uppercase tracking-wide">Key Services</p>
                  <div className="space-y-2 sm:space-y-3">
                    {tier.keyServices.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
                        <span className="text-green-500 text-sm sm:text-base flex-shrink-0 font-bold mt-0.5">✓</span>
                        <span className="text-xs text-gray-700 leading-relaxed">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Explicit Top Gap Before Button */}
                <div style={{ height: '24px' }}></div>

                {/* CTA Button */}
                <div className="px-2 sm:px-6 flex justify-center">
            <a 
              href="https://calendly.com/rankett/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 group"
            >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-blue-300 transition-colors duration-200" />
                    <span>{tier.cta}</span>
                  </a>
                </div>

                {/* Explicit Bottom Gap After Button */}
                <div style={{ height: '24px' }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

