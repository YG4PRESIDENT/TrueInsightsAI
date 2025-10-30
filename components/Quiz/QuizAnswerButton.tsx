"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface QuizAnswerButtonProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  type?: 'yesno' | 'default';
}

export default function QuizAnswerButton({ 
  value, 
  label, 
  selected, 
  onClick,
  type = 'default'
}: QuizAnswerButtonProps) {
  const isYes = type === 'yesno' && value === 'yes';
  const isNo = type === 'yesno' && value === 'no';
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full py-4 px-8 rounded-full font-semibold text-lg
        transition-all duration-200 border-2
        ${selected 
          ? 'bg-black text-white border-black shadow-lg' 
          : 'bg-white text-black border-gray-300 hover:border-black hover:shadow-md'
        }
      `}
    >
      <div className="flex items-center justify-center gap-3">
        {type === 'yesno' && (
          <>
            {isYes && <Check className="w-6 h-6" />}
            {isNo && <X className="w-6 h-6" />}
          </>
        )}
        <span>{label}</span>
      </div>
    </motion.button>
  );
}

