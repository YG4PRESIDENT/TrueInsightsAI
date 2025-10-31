"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  subtitle: string;
  price: string;
  metaphor: string;
  popular?: boolean;
  features: {
    brands: string;
    models: string;
    tracking: string;
    dataPoints: string;
    support: string;
    reporting: string;
  };
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    subtitle: "External Boost",
    price: "$199",
    metaphor: "The Car Wash",
    features: {
      brands: "1 Brand",
      models: "GPT • Claude • Perplexity",
      tracking: "Monthly",
      dataPoints: "500/mo",
      support: "Email",
      reporting: "Monthly Reports"
    },
    cta: "Book a Call"
  },
  {
    name: "Advanced",
    subtitle: "Full Optimization",
    price: "$399",
    metaphor: "Interior Detailing",
    popular: true,
    features: {
      brands: "3 Brands",
      models: "GPT • Claude • Perplexity • Gemini",
      tracking: "Weekly",
      dataPoints: "2,000/mo",
      support: "(Priority) Email",
      reporting: "Weekly Reports + Dashboard"
    },
    cta: "Book a Call"
  },
  {
    name: "Premium",
    subtitle: "Full Stack",
    price: "$499",
    metaphor: "Full Valet Package",
    features: {
      brands: "Unlimited",
      models: "All Major AI Models",
      tracking: "Daily",
      dataPoints: "Unlimited",
      support: "Email + Slack",
      reporting: "Real-time Dashboard + Dedicated Manager"
    },
    cta: "Book a Call"
  }
];

const featureLabels = [
  { key: "brands", label: "# of brands" },
  { key: "models", label: "AI Models" },
  { key: "tracking", label: "Tracking" },
  { key: "dataPoints", label: "Data Points" },
  { key: "support", label: "Support" },
  { key: "reporting", label: "Reporting" }
];

export default function Pricing() {
  const headlineText = "AI Presence Optimization Plans";
  const { displayText: typedText, isComplete } = useTypewriter(headlineText, 60);

  return (
    <section id="pricing" className="relative bg-gradient-to-b from-gray-50 to-white py-32">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-black flex justify-center items-center mb-6">
            <span>{typedText}</span>
            {!isComplete && <span className="animate-pulse ml-1">|</span>}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to dominate AI search results and grow your digital presence
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                tier.popular
                  ? "border-pink-300 shadow-xl scale-105"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{tier.subtitle}</p>
                <p className="text-xs text-gray-400 italic">{tier.metaphor}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 ml-2">/mo</span>
                </div>
              </div>

              {/* Features Breakdown */}
              <div className="space-y-5 mb-8">
                {featureLabels.map((feature) => (
                  <div key={feature.key} className="flex items-start justify-between gap-3 pb-4 border-b border-gray-100">
                    <span className="text-sm text-gray-500 min-w-[90px]">{feature.label}</span>
                    <span className="text-sm text-gray-900 font-medium text-right flex-1">
                      {tier.features[feature.key as keyof typeof tier.features]}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-full font-bold text-base transition-all duration-300 ${
                  tier.popular
                    ? "bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-gray-900 text-white hover:bg-black shadow-md hover:shadow-lg"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            Need a custom plan for your agency or enterprise?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200"
          >
            Contact us for enterprise pricing →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
