"use client";

import { motion } from "framer-motion";
import LetsChatButton from "./LetsChatButton";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Elijah Leach",
    role: "Co-Founder & Sales",
    bio: "Sales and marketing pro who's helped real estate brands win big. Now applying that drive to AI search.",
    image: "/team/Elijah.JPG",
    linkedin: "https://www.linkedin.com/in/elijah-leach",
    email: "elijah@trueinsightsai.com"
  },
  {
    name: "Yahir Gonzalez",
    role: "Co-Founder & CTO",
    bio: "AI search expert bridging traditional SEO and the new era of Generative Engine Optimization.",
    image: "/team/Yahir.png",
    linkedin: "https://www.linkedin.com/in/yahir-gonzalez",
    email: "yahir@trueinsightsai.com"
  }
];

export default function Team() {
  return (
    <section id="team" className="relative bg-white overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '160px' }}>
      {/* Soft ambient glow - more present */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[130%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(219, 234, 254, 0.4) 0%, rgba(239, 246, 255, 0.18) 45%, transparent 70%)',
            filter: 'blur(75px)'
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center px-6 relative z-10">
        {/* Trust Badge */}
        <div className="mb-20"></div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-4xl"
        >
          <h2 className="text-5xl font-bold text-black mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600">
            Your True AI Presence Partner
          </p>
        </motion.div>

        {/* Explicit spacing after header text */}
        <div className="h-5"></div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl w-full">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <div className="mb-6 group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-transparent group-hover:ring-blue-200 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="w-full">
                <h3 className="text-4xl font-bold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-5 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explicit spacing before CTA */}
        <div className="h-6"></div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-24"
        >
          <LetsChatButton calendlyUrl="https://calendly.com/trueinsightsai/30min" size="large" />
        </motion.div>
      </div>
    </section>
  );
}