"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";
import { COMPANY_NAME, NAV_LINKS, CTA_PRIMARY, CTA_SECONDARY } from "@/lib/constants";

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

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="flex items-center justify-center h-16">
        {/* Logo */}
        <div className="absolute left-8">
          <a href="/" className="text-xl font-bold text-black hover:opacity-80 transition-opacity duration-200">
            {COMPANY_NAME.replace('.com', '')}
            <span className="text-blue-500">.com</span>
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

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
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-gray-700 hover:text-black py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

