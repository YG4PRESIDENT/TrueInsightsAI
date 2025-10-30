"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
  metaphor: string;
  badge?: string;
  badgeColor?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    price: 199,
    tagline: "External Boost",
    metaphor: "The Car Wash",
    features: [
      "Directory optimization (Google Business, BBB, Apple Business Connect)",
      "Reddit presence building",
      "Content network distribution (Medium, Substack, Quora)",
      "AI crawl audit",
      "Monthly reporting"
    ],
    cta: "Book a Call"
  },
  {
    name: "Advanced",
    price: 399,
    tagline: "Full Optimization",
    metaphor: "Interior Detailing",
    badge: "Popular",
    badgeColor: "bg-purple-500",
    popular: true,
    features: [
      "Everything in Basic",
      "Schema markup implementation",
      "AI bot crawling enablement",
      "Q&A format conversion",
      "XML tag optimization",
      "Priority support"
    ],
    cta: "Book a Call"
  },
  {
    name: "Premium",
    price: 499,
    tagline: "Full Stack",
    metaphor: "Full Valet Package",
    features: [
      "Everything in Advanced",
      "Weekly AI presence score",
      "Visibility tracking across ChatGPT, Perplexity, Gemini",
      "Email reports",
      "Real-time monitoring dashboard",
      "Dedicated success manager"
    ],
    cta: "Book a Call"
  }
];

export default function Pricing() {
  const headlineText = "AI Presence Optimization Plans";
  const { displayText: typedText, isComplete } = useTypewriter(headlineText, 60);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleCardClick = (tierName: string) => {
    if (flippedCard === tierName) {
      setFlippedCard(null); // Unflip if clicking same card
    } else {
      setFlippedCard(tierName); // Flip new card, unflip previous
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-40" style={{ paddingBottom: '100px' }}>
      <div className="w-full flex flex-col items-center justify-center">
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
          <p className="text-xl text-gray-600 max-w-2xl text-center px-8 leading-relaxed">
            Choose the perfect plan to dominate AI search results and grow your digital presence
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl mx-auto place-items-start px-8">
          {tiers.map((tier, index) => {
            const isFlipped = flippedCard === tier.name;
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-sm"
                style={{ perspective: '1000px' }}
              >
                {/* Flip Container */}
                <motion.div
                  onClick={() => handleCardClick(tier.name)}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={!isFlipped ? { 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  } : {}}
                  className={`relative w-full cursor-pointer`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    minHeight: '350px'
                  }}
                >
                  {/* FRONT FACE */}
                  <div
                    className="absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col border-2 border-black"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    {/* Tier Name */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-black mb-1">{tier.name}</h3>
                      <p className="text-sm font-medium text-gray-600">{tier.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-black">${tier.price}</span>
                        <span className="text-base text-gray-500 ml-1">/month</span>
                      </div>
                    </div>

                    {/* Metaphor with explanation */}
                    <div className="text-center mb-4 px-2">
                      <p className="text-xs text-gray-500 italic mb-1">{tier.metaphor}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {tier.name === "Basic" && "Quick external cleanup to get you visible"}
                        {tier.name === "Advanced" && "Deep optimization inside and out"}
                        {tier.name === "Premium" && "Complete white-glove service"}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-grow"></div>

                    {/* CTA Button */}
                    <button
                      className="w-full bg-black text-white rounded-full py-3.5 px-8 font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {tier.cta}
                    </button>

                    {/* Click to see details hint */}
                    <p className="text-center text-xs text-gray-400 mt-2.5">Click to see what&apos;s included</p>
                  </div>

                  {/* BACK FACE */}
                  <div
                    className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col border-2 border-black"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    {/* Tier Name */}
                    <div className="text-center mb-4 pt-2">
                      <h3 className="text-xl font-bold text-black mb-1">{tier.name}</h3>
                      <p className="text-xs text-gray-500">What&apos;s Included</p>
                    </div>

                    {/* Features Checklist */}
                    <div className="flex-grow">
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Flip Back hint */}
                    <p className="text-center text-xs text-gray-400 mt-4">Click to flip back</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

