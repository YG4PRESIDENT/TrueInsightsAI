"use client";

import { COMPANY_NAME, FOOTER_DESCRIPTION, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
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
      <div className="max-w-7xl mx-auto py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20 px-8">
          {/* Left Section - Logo & Description */}
          <div className="lg:max-w-md lg:pr-8" style={{ paddingLeft: '3rem' }}>
            <div className="mb-6">
              <a href="/" className="text-xl font-bold text-black hover:opacity-80 transition-opacity duration-200">
                {COMPANY_NAME.replace('.com', '')}
                <span className="text-blue-400">.com</span>
              </a>
            </div>
            
            <div className="h-4"></div>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              {FOOTER_DESCRIPTION}
            </p>
            
            <div className="h-6"></div>
            
            {/* Social Icons */}
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
            
            <div className="h-8"></div>
          </div>
          
          {/* Right Section - Navigation Columns */}
          <div className="flex gap-16 lg:gap-24">
            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Resources</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
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
      
      {/* Bottom Bar */}
      <div className="border-t border-blue-100/50 bg-blue-50/20 mt-8 relative z-10">
        <div className="w-full py-8">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <p className="text-xs text-gray-500 mb-6 max-w-2xl leading-relaxed">
              TrueInsights AI is the leading AI Search visibility partner that helps businesses identify, fix, and optimize their presence across ChatGPT, Gemini, and Perplexity. Get insights into competitor performance, citation sources, and actionable recommendations to improve your AI Search rankings.
            </p>
            
            <div className="h-2"></div>
            
            <p className="text-xs text-gray-400 mb-2">
              © 2025 {COMPANY_NAME}
            </p>
            
            <p className="text-xs text-gray-400 mb-8">
              All Rights Reserved
            </p>
            
            <div className="h-4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

