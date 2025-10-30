"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { isValidUrl } from "@/lib/utils";
import Quiz from "./Quiz";

// Custom hook for typewriter effect
function useTypewriter(text: string, speed: number = 100) {
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

export default function Hero() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  
  // Typewriter effect for headline
  const headlineText = "Get your free AI visibility audit.";
  const { displayText: typedText, isComplete } = useTypewriter(headlineText, 80);

  const platformLogos = [
    { 
      name: "ChatGPT",
      logo: (
        <img 
          src="https://cdn.simpleicons.org/openai/000000" 
          alt="ChatGPT"
          className="w-10 h-10"
        />
      ),
      color: ""
    },
    { 
      name: "Gemini",
      logo: (
        <img 
          src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
          alt="Gemini"
          className="w-10 h-10"
        />
      ),
      color: ""
    },
    { 
      name: "Perplexity",
      logo: (
        <img 
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png" 
          alt="Perplexity"
          className="w-10 h-10"
        />
      ),
      color: ""
    },
    { 
      name: "Google",
      logo: (
        <img 
          src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
          alt="Google"
          className="w-10 h-10"
        />
      ),
      color: ""
    },
  ];

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center py-20">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Headline with Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-black leading-tight"
          style={{ marginBottom: '30px' }}
        >
          {typedText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl"
          style={{ marginBottom: '30px' }}
        >
          See exactly where you rank in ChatGPT, Perplexity, and Google AI search results.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
          style={{ marginBottom: '30px' }}
        >
          <button
            onClick={() => setIsQuizOpen(true)}
            className="px-12 py-5 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <Search className="w-6 h-6" />
            Get Your Free AI Audit
          </button>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-gray-500 text-center"
          style={{ marginBottom: '30px' }}
        >
          Free AI visibility audit. No credit card. No commitments. Just insights.
        </motion.p>

        {/* Platform Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center gap-12"
        >
          {platformLogos.map(({ name, logo }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Quiz Modal */}
      <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}

