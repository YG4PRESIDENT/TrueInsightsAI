"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";
import LetsChatButton from "./LetsChatButton";
import { COMPANY_NAME, NAV_LINKS, CTA_PRIMARY, CTA_SECONDARY, CONTACT } from "@/lib/constants";

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
      // Check if we're on the home page
      const isHomePage = window.location.pathname === '/';
      
      if (isHomePage) {
        // On home page: scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }
      } else {
        // On another page: navigate to home page with hash
        window.location.href = `/${href}`;
      }
    } else {
      // Navigate to different page
      window.location.href = href;
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "shadow-md border-blue-100/50 bg-white backdrop-blur-md" 
          : "border-transparent bg-transparent backdrop-blur-none"
      )}
    >
      <div className="flex items-center justify-center h-20 px-4">
        {/* Logo */}
        <div className="absolute left-8">
          <a href="/" className="hover:opacity-80 transition-opacity duration-200">
            <img 
              src="/images/Trueinsights official logo.png" 
              alt="True Insights AI" 
              style={{ height: '80px' }}
            />
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium relative group"
              style={{ fontSize: '17px' }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block absolute right-8">
          <LetsChatButton email={CONTACT.email} size="large" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-black absolute right-8"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-50/10 border-t border-blue-100/30 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-gray-700 hover:text-black py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            {/* Mobile CTA Button */}
            <LetsChatButton email={CONTACT.email} className="w-full mt-4" />
          </div>
        </div>
      )}
    </header>
  );
}

