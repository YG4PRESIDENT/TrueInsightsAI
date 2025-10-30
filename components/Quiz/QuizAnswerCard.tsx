"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface QuizAnswerCardProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function QuizAnswerCard({ value, label, selected, onClick }: QuizAnswerCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-6 rounded-xl text-left font-medium text-base
        transition-all duration-200 border-2
        ${selected 
          ? 'bg-gray-50 border-black shadow-md' 
          : 'bg-white border-gray-300 hover:border-black hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-gray-900">{label}</span>
        <div className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
          transition-all duration-200
          ${selected 
            ? 'bg-black border-black' 
            : 'border-gray-300'
          }
        `}>
          {selected && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>
    </motion.button>
  );
}

