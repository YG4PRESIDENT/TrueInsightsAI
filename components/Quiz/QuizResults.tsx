/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { TierRecommendation, getTierPrice, getTierTagline } from "@/lib/tierCalculator";

interface QuizResultsProps {
  recommendation: TierRecommendation;
  userName: string;
  onBookCall: () => void;
}

export default function QuizResults({ recommendation, userName, onBookCall }: QuizResultsProps) {
  const { tier, reasons, benefits } = recommendation;
  const price = getTierPrice(tier);
  const tagline = getTierTagline(tier);
  
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      {/* Celebration header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-black text-white rounded-full p-4">
            <Sparkles className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-black mb-3">
          Perfect match, {userName}!
        </h2>
        <p className="text-xl text-gray-600">
          Based on your answers, we recommend the <span className="font-semibold text-black">{tier}</span> plan
        </p>
      </motion.div>

      {/* Recommendation card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl border-2 border-black p-8 mb-8 shadow-xl"
      >
        {/* Tier info */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-black mb-2">{tier}</h3>
          <p className="text-lg text-gray-600 mb-4">{tagline}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-black">${price}</span>
            <span className="text-lg text-gray-500 ml-1">/month</span>
          </div>
        </div>

        {/* Reasons */}
        {reasons.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm font-semibold text-gray-700 mb-3">Why this plan?</p>
            <ul className="space-y-2">
              {reasons.map((reason, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">What you'll get:</p>
          <ul className="space-y-3">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-left">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <motion.button
          onClick={onBookCall}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white rounded-full py-4 px-8 font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          Book Your Free Consultation
        </motion.button>
      </motion.div>

      {/* Email confirmation message */}
              { }
              <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-500"
            >
              Your personalized audit report has been sent to your email
            </motion.p>    </div>
  );
}

