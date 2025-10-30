"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { CTA_ANALYZE } from "@/lib/constants";
import { isValidUrl, cn } from "@/lib/utils";

// Custom hook for typewriter effect
function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isComplete]);

  return { displayText, isComplete };
}

export default function Hero() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  
  // Typewriter effect for headline
  const headlineText = "Get your free GEO SEO audit.";
  const { displayText: typedText, isComplete } = useTypewriter(headlineText, 80);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError("Please enter a website URL");
      return;
    }
    
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }
    
    setError("");
    // TODO: Handle form submission in Milestone 5
    console.log("Analyzing:", url);
    alert(`This will analyze: ${url}\n(Form submission coming in Milestone 5)`);
  };

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
          Track, analyze, and grow your local search presence across Google, Bing, and Apple Maps.
        </motion.p>

        {/* URL Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
          style={{ marginBottom: '30px' }}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-white rounded-full shadow-lg border-2 border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300">
              <input
                type="text"
                placeholder="Enter your website URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                className="w-80 pr-8 text-base text-gray-700 placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0 bg-transparent"
                style={{ 
                  paddingTop: '10px', 
                  paddingBottom: '10px', 
                  paddingLeft: '40px', 
                  outline: 'none', 
                  boxShadow: 'none',
                  caretColor: 'black'
                }}
              />
              <button
                type="submit"
                className="bg-black text-white text-sm font-medium hover:bg-gray-900 transition-all duration-100 flex items-center gap-3 whitespace-nowrap rounded-full"
                style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '58px', paddingRight: '75px' }}
              >
                <Search className="w-5 h-5" />
                Analyze my website
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
            )}
          </form>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-gray-500 text-center"
          style={{ marginBottom: '30px' }}
        >
          Free GEO SEO audit. No credit card. No commitments. Just insights. Upgrade to a free trial anytime.
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
    </section>
  );
}

