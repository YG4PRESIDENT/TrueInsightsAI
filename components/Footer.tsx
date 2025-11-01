"use client";

import { COMPANY_NAME, FOOTER_DESCRIPTION, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Linkedin, Sparkles } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else if (href.startsWith("https://calendly.com")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      // Check if we're on the home page
      const isHomePage = window.location.pathname === '/';
      
      if (isHomePage) {
        // On home page: scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On another page: navigate to home page with hash
        window.location.href = `/${href}`;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="relative bg-white border-t border-blue-100/50 overflow-hidden">
      {/* Footer glow - enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%]"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(219, 234, 254, 0.45) 0%, rgba(239, 246, 255, 0.2) 35%, transparent 65%)',
            filter: 'blur(75px)'
          }}
        />
      </div>
      <div className="h-12 relative z-10"></div>
      {/* Top Section - 3 Columns */}
      <div className="max-w-7xl mx-auto py-16 relative z-10">
        <div className="px-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left spacer to push content away from left edge */}
            <div className="hidden lg:block lg:w-12"></div>
            
            {/* Left Column - Logo, Description, Social Icons, Contact Button */}
            <div className="lg:max-w-md">
              <a href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
                <img 
                  src="/images/Official logo.png" 
                  alt="True Insights AI" 
                  className="h-[50px]"
                />
              </a>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {FOOTER_DESCRIPTION}
              </p>
              
              {/* Comical spacing after description */}
              <div className="h-6"></div>
              
              <div className="flex items-center gap-6">
                {/* TikTok */}
                <a 
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                {/* Email */}
                <a 
                  href={SOCIAL_LINKS.email}
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              
              {/* Comical spacing after icons */}
              <div className="h-6"></div>
              
              <a
                href="https://calendly.com/trueinsightsai/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  paddingLeft: '21px',
                  paddingRight: '21px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  fontSize: '16px',
                  transform: 'translateX(-10px)'
                }}
                className="group relative inline-flex items-center justify-center gap-6 bg-black text-white rounded-full font-bold transition-all duration-200 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-200"
              >
                <Sparkles className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-200" />
                <span style={{ fontSize: '16px' }}>Contact Us</span>
              </a>
              
              {/* Comical spacing after contact button */}
              <div className="h-6"></div>
            </div>
            
            {/* Flexible spacer to push right content to the right */}
            <div className="flex-1"></div>
            
            {/* Right Side - Resources and Company */}
            <div className="flex gap-16">
            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavClick("#faq")}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 text-left"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/blog")}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200 text-left"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Divider - OUTSIDE constrained container */}
      <div className="border-t border-gray-200 relative z-10"></div>
      
      {/* Comical top spacing */}
      <div className="h-11 relative z-10"></div>
      
      {/* Bottom Section - Centered Copyright - OUTSIDE constrained container */}
      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            TrueInsights AI is the leading AI Search visibility partner that helps businesses identify, fix, and optimize their presence across ChatGPT, Gemini, and Perplexity. Get insights into competitor performance, citation sources, and actionable recommendations to improve your AI Search rankings.
          </p>
          <div className="h-6"></div>
          <p className="text-xs text-gray-400">
            © 2025 {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Comical bottom spacing */}
      <div className="h-11 relative z-10"></div>
    </footer>
  );
}

