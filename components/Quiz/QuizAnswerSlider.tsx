"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface QuizAnswerSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export default function QuizAnswerSlider({ min, max, value, onChange }: QuizAnswerSliderProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  
  return (
    <div className="w-full">
      {/* Number buttons */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-6">
        {numbers.map((num) => (
          <motion.button
            key={num}
            onClick={() => onChange(num)}
            onHoverStart={() => setHoveredValue(num)}
            onHoverEnd={() => setHoveredValue(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              aspect-square rounded-xl font-bold text-lg
              transition-all duration-200 border-2
              ${value === num
                ? 'bg-black text-white border-black shadow-lg'
                : hoveredValue === num
                ? 'bg-gray-100 border-gray-400'
                : 'bg-white text-gray-700 border-gray-300 hover:border-black'
              }
            `}
          >
            {num}
          </motion.button>
        ))}
      </div>
      
      {/* Labels */}
      <div className="flex justify-between text-sm text-gray-500 px-2">
        <span>Not important</span>
        <span>Critical</span>
      </div>
    </div>
  );
}

