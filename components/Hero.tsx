"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { isValidUrl } from "@/lib/utils";

// Custom hook for rotating typewriter effect with typing and deleting
function useTypewriter(
  texts: string[], 
  typingSpeed: number = 80,
  deletingSpeed: number = 40,
  pauseAfterTyping: number = 2000,
  pauseAfterDeleting: number = 500
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    // Typing phase
    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Pause after typing completes, then start deleting
    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
      return () => clearTimeout(timeout);
    }

    // Deleting phase
    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // Move to next text after deleting completes
    if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseAfterDeleting);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting]);

  return { displayText };
}

export default function Hero() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  
  // Typewriter effect for headline with rotating texts
  const headlineTexts = [
    "Are you showing up in AI answers?",
    "Get your free AI visibility report",
    "Be the brand, be the business AI recommends first",
    "Turn AI visibility into paying customers"
  ];
  const { displayText: typedText } = useTypewriter(headlineTexts);

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
    
    // Store URL in sessionStorage and navigate to quiz
    sessionStorage.setItem("auditUrl", url);
    router.push("/quiz");
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
      name: "Claude",
      logo: (
        <img 
          src="https://cdn.simpleicons.org/anthropic/000000" 
          alt="Claude"
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
    <section className="relative bg-white min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Atmospheric radial glow - more aggressive */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-[110%]"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(219, 234, 254, 0.6) 0%, rgba(219, 234, 254, 0.35) 25%, rgba(239, 246, 255, 0.2) 45%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center relative z-10">
        {/* Headline with Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-black leading-tight"
          style={{ marginBottom: '30px' }}
        >
          {typedText}
          <span className="animate-pulse text-blue-400">|</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 leading-relaxed whitespace-nowrap"
          style={{ marginBottom: '30px' }}
        >
          We optimize your visibility in AI-powered search and recommendations
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
            <div className="flex items-center bg-white rounded-full shadow-lg border-2 border-gray-300 overflow-hidden hover:shadow-xl hover:border-blue-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300">
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
                  caretColor: '#60A5FA'
                }}
              />
              <button
                type="submit"
                className="bg-black text-white text-sm font-medium hover:bg-gray-900 hover:shadow-blue-200 hover:shadow-lg transition-all duration-100 flex items-center gap-3 whitespace-nowrap rounded-full"
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
          className="text-sm text-gray-400 text-center"
          style={{ marginBottom: '30px' }}
        >
          See if AI is recommending your competitors instead of you. Free personalized report.
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

