"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { isValidUrl } from "@/lib/utils";
import FloatingNotifications from "@/components/FloatingNotifications";

// Optimized typewriter hook with batched updates for better performance
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
  const lastUpdateRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const currentText = texts[textIndex];
    let isCancelled = false;

    const animate = (timestamp: number) => {
      if (isCancelled) return;

      const elapsed = timestamp - lastUpdateRef.current;

      // Typing phase
      if (!isDeleting && charIndex < currentText.length) {
        if (elapsed >= typingSpeed) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          lastUpdateRef.current = timestamp;
        }
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Pause after typing completes
      if (!isDeleting && charIndex === currentText.length) {
        if (elapsed >= pauseAfterTyping) {
          setIsDeleting(true);
          lastUpdateRef.current = timestamp;
        }
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Deleting phase
      if (isDeleting && charIndex > 0) {
        if (elapsed >= deletingSpeed) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
          lastUpdateRef.current = timestamp;
        }
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Move to next text after deleting completes
      if (isDeleting && charIndex === 0) {
        if (elapsed >= pauseAfterDeleting) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          lastUpdateRef.current = timestamp;
        }
        frameRef.current = requestAnimationFrame(animate);
        return;
      }
    };

    lastUpdateRef.current = performance.now();
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      isCancelled = true;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
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
    sessionStorage.setItem("websiteUrl", url);
    router.push("/quiz");
  };

  const platformLogos = [
    {
      name: "ChatGPT",
      logo: (
        <img
          src="/logos/chatgpt.svg"
          alt="ChatGPT"
          className="w-10 h-10"
          loading="eager"
        />
      ),
      color: ""
    },
    {
      name: "Claude",
      logo: (
        <img
          src="/logos/claude.svg"
          alt="Claude"
          className="w-10 h-10"
          loading="eager"
        />
      ),
      color: ""
    },
    {
      name: "Gemini",
      logo: (
        <img
          src="/logos/gemini.svg"
          alt="Gemini"
          className="w-10 h-10"
          loading="eager"
        />
      ),
      color: ""
    },
    {
      name: "Perplexity",
      logo: (
        <img
          src="/logos/perplexity.png"
          alt="Perplexity"
          className="w-10 h-10"
          loading="eager"
        />
      ),
      color: ""
    },
    {
      name: "Google",
      logo: (
        <img
          src="/logos/google.png"
          alt="Google"
          className="w-10 h-10"
          loading="eager"
        />
      ),
      color: ""
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
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

      {/* Floating Notifications - Behind main content */}
      <FloatingNotifications />

      <div className="flex flex-col items-center justify-center text-center relative z-10 w-full px-4 sm:px-0">
        {/* Headline with Typewriter Effect */}
        {isMobile ? (
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-4 sm:mb-5">
            {typedText}
            <span className="animate-pulse text-blue-400">|</span>
          </h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-5"
          >
            {typedText}
            <span className="animate-pulse text-blue-400">|</span>
          </motion.h1>
        )}

        {/* Subheadline */}
        {isMobile ? (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center mb-6 sm:mb-8">
            We optimize your visibility in AI-powered search and recommendations
          </p>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center sm:whitespace-nowrap mb-6 sm:mb-8"
          >
            We optimize your visibility in AI-powered search and recommendations
          </motion.p>
        )}

        {/* URL Input Form */}
        {isMobile ? (
          <div className="flex justify-center w-full max-w-lg sm:max-w-none mb-5 sm:mb-6">
            <form onSubmit={handleSubmit} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg border-2 border-gray-300 overflow-hidden hover:shadow-xl hover:border-blue-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setError("");
                  }}
                  className="w-full sm:w-80 pr-4 sm:pr-8 text-sm sm:text-base text-gray-700 placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0 bg-transparent"
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '20px',
                    outline: 'none',
                    boxShadow: 'none',
                    caretColor: '#60A5FA'
                  }}
                />
                <button
                  type="submit"
                  className="bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-900 hover:shadow-blue-200 hover:shadow-lg transition-all duration-100 flex items-center justify-center gap-2 whitespace-nowrap rounded-full w-full sm:w-auto mt-2 sm:mt-0"
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    minHeight: '44px'
                  }}
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Analyze my website</span>
                  <span className="sm:hidden">Analyze</span>
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
              )}
            </form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center w-full max-w-lg sm:max-w-none mb-5 sm:mb-6"
          >
            <form onSubmit={handleSubmit} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg border-2 border-gray-300 overflow-hidden hover:shadow-xl hover:border-blue-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setError("");
                  }}
                  className="w-full sm:w-80 pr-4 sm:pr-8 text-sm sm:text-base text-gray-700 placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0 bg-transparent"
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '20px',
                    outline: 'none',
                    boxShadow: 'none',
                    caretColor: '#60A5FA'
                  }}
                />
                <button
                  type="submit"
                  className="bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-900 hover:shadow-blue-200 hover:shadow-lg transition-all duration-100 flex items-center justify-center gap-2 whitespace-nowrap rounded-full w-full sm:w-auto mt-2 sm:mt-0"
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    minHeight: '44px'
                  }}
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Analyze my website</span>
                  <span className="sm:hidden">Analyze</span>
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
              )}
            </form>
          </motion.div>
        )}

        {/* Disclaimer */}
        {isMobile ? (
          <p className="text-xs sm:text-sm text-gray-400 text-center mb-5 sm:mb-6">
            See if AI is recommending your competitors instead of you. Free personalized report.
          </p>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs sm:text-sm text-gray-400 text-center mb-5 sm:mb-6"
          >
            See if AI is recommending your competitors instead of you. Free personalized report.
          </motion.p>
        )}

        {/* Platform Logos */}
        {isMobile ? (
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {platformLogos.map(({ name, logo }) => (
              <div key={name} className="flex-shrink-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap"
          >
            {platformLogos.map(({ name, logo }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex-shrink-0"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10">
                  {logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

