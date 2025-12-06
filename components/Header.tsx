"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { COMPANY_NAME, NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }
      } else {
        window.location.href = `/${href}`;
      }
    } else {
      window.location.href = href;
    }
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/rankett/30min", "_blank", "noopener,noreferrer");
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-slate-800/50" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/images/Official logo.png" 
            alt="Rankett" 
            className="h-10 w-auto brightness-0 invert" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button 
            onClick={handleBookCall}
            variant="primary"
          >
            <Sparkles className="w-4 h-4 mr-2 text-white/70" />
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-4 absolute w-full shadow-2xl">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-slate-300 hover:text-white py-2"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={handleBookCall}
              className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold mt-4"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
