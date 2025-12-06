"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Linkedin, Mail, Sparkles } from "lucide-react";

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
    email: "elijah@rankett.com"
  },
  {
    name: "Yahir Gonzalez",
    role: "Co-Founder & CTO",
    bio: "AI search expert bridging traditional SEO and the new era of Generative Engine Optimization.",
    image: "/team/Yahir.png",
    linkedin: "https://www.linkedin.com/in/yahir-gonzalez",
    email: "yahir@rankett.com"
  }
];

export default function Team() {
  const handleBookCall = () => {
    window.open("https://calendly.com/rankett/30min", "_blank", "noopener,noreferrer");
  }

  return (
    <section id="team" className="relative bg-slate-950 py-32 overflow-hidden border-t border-slate-800">
      {/* Subtle Transition Gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Two obsessed founders dedicated to making your company rank first. We don&apos;t stop until you win.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale-[20%]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 min-h-[80px]">
                  {member.bio}
                </p>

                <div className="flex gap-4 pt-6 border-t border-slate-800/50">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-white transition-colors">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Button 
            onClick={() => {
              window.open("https://calendly.com/rankett/30min", "_blank", "noopener,noreferrer");
            }} 
            size="lg"
            variant="primary"
          >
            <Sparkles className="w-4 h-4 mr-2 text-white/70" />
            Work With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}