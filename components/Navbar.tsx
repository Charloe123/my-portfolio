"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md text-white z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left - Name with animated gradient */}
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
            <Link href="#home">Charlotte Ncube</Link>
          </div>

          {/* Center - Rounded Links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-teal-500 transition backdrop-blur-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right - Hire Me Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-400 transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-4 pb-4 space-y-2 border-t border-white/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 rounded-full bg-white/10 hover:bg-teal-500 transition backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
