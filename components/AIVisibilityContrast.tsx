"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// AI Platform configurations - using exact logos from Hero, NO COLOR
const AI_PLATFORMS = [
  {
    name: "ChatGPT",
    logo: (
      <img
        src="/logos/chatgpt.svg"
        alt="ChatGPT"
        className="w-6 h-6"
        loading="lazy"
      />
    ),
  },
  {
    name: "Claude",
    logo: (
      <img
        src="/logos/claude.svg"
        alt="Claude"
        className="w-6 h-6"
        loading="lazy"
      />
    ),
  },
  {
    name: "Gemini",
    logo: (
      <img
        src="/logos/gemini.svg"
        alt="Gemini"
        className="w-6 h-6"
        loading="lazy"
      />
    ),
  },
  {
    name: "Perplexity",
    logo: (
      <img
        src="/logos/perplexity.png"
        alt="Perplexity"
        className="w-6 h-6"
        loading="lazy"
      />
    ),
  },
];

export default function AIVisibilityContrast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Rotate platforms every 3 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % AI_PLATFORMS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const platform = AI_PLATFORMS[currentPlatform];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 lg:py-28 flex items-center justify-center overflow-hidden"
    >
      {/* Atmospheric glow - more visible */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[70%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(219, 234, 254, 0.45) 0%, rgba(239, 246, 255, 0.25) 35%, transparent 65%)',
            filter: 'blur(75px)'
          }}
        />
      </div>
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 w-full flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4"
          >
            The Problem You Can't See
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center px-4 sm:px-0"
          >
            When someone asks AI about your business...
          </motion.h2>
        </div>

        {/* Split Screen Container - Perfectly Centered */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 mb-16 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">
          {/* LEFT SIDE: Your Reality - Sadder styling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex flex-col w-full lg:w-[480px] max-w-md lg:max-w-none"
          >
            {/* Label */}
            <div className="mb-6 text-center">
              <h3 className="text-lg font-bold text-red-600 mb-1">
                Your Reality Now
              </h3>
              <div className="h-5"></div>
            </div>

            {/* AI Mockup - Sad/Desaturated */}
            <div className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden h-[320px] sm:h-[380px] flex flex-col grayscale-[20%] opacity-90">
              {/* Animated Header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlatform}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white px-5 py-3.5 flex items-center gap-3 border-b border-gray-200"
                >
                  <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center p-1">
                    {platform.logo}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{platform.name}</span>
                </motion.div>
              </AnimatePresence>

              {/* Chat Content */}
              <div className="px-6 bg-gray-100 flex-1">
                {/* MASSIVE SPACER ABOVE */}
                <div className="h-8"></div>

                {/* User Query */}
                <div className="flex justify-end">
                  <div className="bg-gray-200 text-gray-900 px-6 py-4 rounded-2xl rounded-tr-md text-[27px] max-w-[80%] font-medium leading-snug">
                    Best tax preparer in Austin?
                  </div>
                </div>

                {/* MASSIVE SPACER BELOW */}
                <div className="h-8"></div>

                {/* AI Response - Plain text format like ChatGPT */}
                <div className="flex justify-start">
                  <div className="max-w-full pr-4">
                    <p className="text-[15px] text-gray-700 mb-8 leading-relaxed">
                      Based on local expertise and client reviews:
                    </p>
                    <div className="space-y-3 sm:space-y-5 text-sm sm:text-[15px] text-gray-800 mb-8 sm:mb-12">
                      <div>
                        <p className="font-semibold text-gray-900">1. Austin Tax Solutions</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Full-service tax preparation and consulting</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">2. Capital CPA Group</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Specializing in small business taxes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">3. Texas Tax Advisors</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Personal and business tax services</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">4. Lone Star CPA Firm</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Tax planning and preparation services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-5 flex items-center justify-center gap-2.5">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-red-600">You're not visible</p>
            </div>
          </motion.div>

          {/* CENTER ARROW - Hand-drawn Style Squiggly Line - BLACK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center lg:mx-8 my-6 lg:my-0 z-10"
          >
            <svg
              className="w-24 h-16 sm:w-32 sm:h-24 lg:w-40 lg:h-28"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hand-drawn style squiggly arrow with loop */}
              <path
                d="M20 50 C40 45, 50 30, 70 40 C75 43, 78 48, 80 52 C82 56, 83 60, 85 58 C87 56, 88 50, 92 48 C100 44, 110 50, 130 48 C145 47, 155 48, 170 48"
                stroke="#000000"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Arrowhead */}
              <path
                d="M165 42 L180 48 L165 54"
                stroke="#000000"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* RIGHT SIDE: Your Potential - Vibrant/Compelling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative flex flex-col w-full lg:w-[470px] max-w-md lg:max-w-none"
          >
            {/* Subtle glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-emerald-200/20 to-blue-200/30 blur-3xl rounded-3xl -z-10" />

            {/* Label */}
            <div className="mb-6 text-center">
              <h3 className="text-lg font-bold text-green-600 mb-1">
                Your Potential
              </h3>
              <div className="h-5"></div>
            </div>

            {/* AI Mockup - Vibrant/Successful - SAME HEIGHT AS LEFT */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-green-300 overflow-hidden h-[320px] sm:h-[380px] flex flex-col ring-4 ring-green-100">
              {/* Animated Header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlatform}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white px-5 py-3.5 flex items-center gap-3 border-b border-gray-200"
                >
                  <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center p-1">
                    {platform.logo}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{platform.name}</span>
                </motion.div>
              </AnimatePresence>

              {/* Chat Content */}
              <div className="px-6 bg-gradient-to-br from-green-50 to-emerald-50 flex-1">
                {/* MASSIVE SPACER ABOVE */}
                <div className="h-8"></div>

                {/* User Query */}
                <div className="flex justify-end">
                  <div className="bg-gray-200 text-gray-900 px-6 py-4 rounded-2xl rounded-tr-md text-[27px] max-w-[80%] font-medium leading-snug">
                    Best tax preparer in Austin?
                  </div>
                </div>

                {/* MASSIVE SPACER BELOW */}
                <div className="h-8"></div>

                {/* AI Response - Plain text format like ChatGPT */}
                <div className="flex justify-start">
                  <div className="max-w-full pr-4">
                    <p className="text-[15px] text-gray-700 mb-8 leading-relaxed">
                      Based on local expertise and client reviews:
                    </p>
                    <div className="space-y-3 sm:space-y-5 text-sm sm:text-[15px] mb-8 sm:mb-12 bg-green-50/30 rounded-lg p-2 sm:p-3 -mx-1 sm:-mx-2">
                      <div className="bg-green-50/70 border-l-[3px] border-green-500 rounded-r-md py-2 sm:py-4 px-2 sm:px-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-900 text-sm sm:text-[15px]">YOUR BUSINESS</p>
                            <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2 leading-relaxed">
                              Comprehensive tax preparation for individuals and businesses. Known for maximizing deductions and personalized service.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-40">
                        <p className="font-semibold text-gray-900">2. Austin Tax Solutions</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Full-service tax preparation and consulting</p>
                      </div>
                      <div className="opacity-25">
                        <p className="font-semibold text-gray-900">3. Capital CPA Group</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Specializing in small business taxes</p>
                      </div>
                      <div className="opacity-20">
                        <p className="font-semibold text-gray-900">4. Texas Tax Advisors</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Personal and business tax services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-5 flex items-center justify-center gap-2.5">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-sm font-bold text-green-700">You're dominating</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center w-full flex justify-center px-4 sm:px-0"
        >
          <button
            onClick={() => {
              const heroSection = document.querySelector('section');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full font-bold transition-all duration-200 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-200 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base min-h-[48px]"
          >
            <span>See where you rank now</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

