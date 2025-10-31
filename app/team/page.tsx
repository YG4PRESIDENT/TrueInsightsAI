"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";

const team = [
  {
    name: "J Gonzalez",
    title: "Co-Founder & CEO",
    bio: "Leading the charge in AI visibility optimization, J brings deep expertise in search algorithms and digital presence strategy. Passionate about helping businesses thrive in the AI-first future.",
    image: "/team/j-gonzalez.jpg", // Placeholder - replace with actual image
    linkedin: "#",
    email: "j@trueinsightsai.com"
  },
  {
    name: "Elijah Leach",
    title: "Co-Founder & CTO",
    bio: "Engineering the future of GEO optimization, Elijah combines technical excellence with strategic vision to build cutting-edge solutions that dominate AI search results.",
    image: "/team/elijah-leach.jpg", // Placeholder - replace with actual image
    linkedin: "#",
    email: "elijah@trueinsightsai.com"
  }
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold text-black mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help businesses dominate AI search results and build powerful digital presence across every platform that matters.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-6 border-t border-gray-100">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-600 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-600 transition-all duration-200"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-20 bg-white rounded-2xl p-12 shadow-lg max-w-3xl mx-auto border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to dominate AI search?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's work together to build your AI visibility and grow your digital presence.
            </p>
            <a
              href="/#"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your Free Audit
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}

