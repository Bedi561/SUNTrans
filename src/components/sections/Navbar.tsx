"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/30 border-b border-white/20"
    >
      {/* Centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">

          <img
            src="/logo.png"         // path to your logo
            alt="SNTC Logo"
            className="h-10 md:h-12 w-auto" // adjust height for mobile/desktop
          />

        </div>

        {/* Right: Nav Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-semibold text-m tracking-wide text-black hover:text-[#FFD700] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
