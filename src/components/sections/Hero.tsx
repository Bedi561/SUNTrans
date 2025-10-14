"use client";

import { motion } from "framer-motion"; // keep named import only
import StatsBanner from "./StatsBanner";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-background flex flex-col justify-between">
      {/* Navbar inside Hero */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-0 md:px-18 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="SNTC Logo"
              className="h-10 md:h-16 w-auto"
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

      {/* HERO SECTION */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 pt-8 flex-1 flex flex-col justify-between">
        {/* Text */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="flex-1 max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-snug tracking-tight uppercase"
              style={{ color: "#284267" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Seamless Staff Mobility
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base font-light text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Reliable transport for your staff.
            </motion.p>
          </div>
        </div>

        {/* Hero Image Card */}
        <motion.div
          className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden group mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  Enabling Smarter Corporate Mobility
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light tracking-wide">
                  Electric, CNG & Deluxe Transport Solutions for Delhi NCR &
                  Hyderabad.
                </p>
              </div>

              <div className="shrink-0 mt-2 sm:mt-0">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Banner at bottom */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pb-4">
        <StatsBanner />
      </div>
    </div>
  );
}
