"use client";

import { Sparkles } from "lucide-react";

interface LetsChatButtonProps {
  email?: string;
  className?: string;
  size?: "default" | "large";
}

export default function LetsChatButton({ 
  email = "yahir@trueinsightsai.com,elijah@trueinsightsai.com",
  className = "",
  size = "default"
}: LetsChatButtonProps) {
  return (
    <a
      href={`mailto:${email}`}
      style={{
        paddingLeft: '21px',
        paddingRight: '21px',
        paddingTop: '12px',
        paddingBottom: '12px',
        fontSize: '16px'
      }}
      className={`group relative inline-flex items-center justify-center gap-6 bg-black text-white rounded-full font-bold transition-all duration-200 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-200 ${className}`}
    >
      <Sparkles className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-200" />
      <span style={{ fontSize: '16px' }}>Let&apos;s Chat</span>
    </a>
  );
}

