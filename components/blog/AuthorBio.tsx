"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface AuthorBioProps {
  author: string;
}

const authorInfo: Record<string, {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}> = {
  "Yahir Gonzalez": {
    name: "Yahir Gonzalez",
    role: "Co-Founder & CTO",
    bio: "AI search optimization expert specializing in helping businesses dominate AI-driven search results.",
    image: "/team/Yahir.png",
    linkedin: "https://www.linkedin.com/in/yahir-gonzalez",
    email: "yahir@rankett.com"
  },
  "Elijah Leach": {
    name: "Elijah Leach",
    role: "Co-Founder & Sales",
    bio: "Experienced in sales and digital marketing, helping businesses succeed in AI Search visibility.",
    image: "/team/Elijah.JPG",
    linkedin: "https://www.linkedin.com/in/elijah-leach",
    email: "elijah@rankett.com"
  }
};

export default function AuthorBio({ author }: AuthorBioProps) {
  const info = authorInfo[author];
  
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 shadow-md"
    >
      <div className="flex items-start gap-6">
        {/* Author Image */}
        <img
          src={info.image}
          alt={info.name}
          className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-200 flex-shrink-0"
        />
        
        {/* Author Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-black">{info.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{info.role}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {info.linkedin && (
                <a
                  href={info.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {info.email && (
                <a
                  href={`mailto:${info.email}`}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed">
            {info.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

