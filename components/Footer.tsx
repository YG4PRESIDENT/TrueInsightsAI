"use client";

import { COMPANY_NAME, FOOTER_DESCRIPTION, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else if (href.startsWith("https://calendly.com")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `/${href}`;
      }
    } else {
      window.location.href = href;
    }
  };

  const handleRunAudit = () => {
    const toolBaseUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001'
    window.location.href = toolBaseUrl
  }

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Footer glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%]"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0) 60%)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="/" className="inline-block hover:opacity-80 transition-opacity">
              <img
                src="/images/Official logo.png"
                alt="True Insights AI"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {FOOTER_DESCRIPTION}
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavClick("#faq")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("/blog")} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Get Started</h3>
            <p className="text-xs text-slate-400">
              See how AI models rank your business in seconds.
            </p>
            <div className="mt-8">
              <Button 
                onClick={handleRunAudit}
                variant="primary"
                className="w-full"
              >
                Run Free Audit <ArrowRight className="ml-2 w-4 h-4 text-white/80" />
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2025 {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-slate-500 hover:text-slate-300">Privacy Policy</button>
            <button className="text-xs text-slate-500 hover:text-slate-300">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}