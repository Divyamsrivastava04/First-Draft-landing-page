"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f0d0a]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/tivora-logo.png"
              alt="Tivora Logo"
              width={100}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="#vision"
              className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm font-medium"
            >
              Our Vision
            </a>
            <a
              href="#team"
              className="text-text-muted hover:text-text-offwhite transition-colors duration-200 text-sm font-medium"
            >
              The Team
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#2a2419] hover:bg-[#3a3225] text-text-offwhite px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm hover:shadow-lg hover:shadow-accent-gold/20">
            Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}

