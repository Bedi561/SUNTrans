"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa] shadow-2xl border-b border-[#156082]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="w.png" alt="Kruze" className="h-28" />
          </motion.div>

          {/* CTA Button (Desktop only) */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Button className="bg-[#156082] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1f4b68] hover:scale-105 transition-transform">
              Download Now <span className="ml-1">&#8594;</span>
            </Button>
          </motion.div>

          {/* Mobile Menu Button (Mobile only) */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-lg bg-[#156082]/20 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                className="w-full h-0.5 bg-[#156082]"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
              />
              <motion.div
                className="w-full h-0.5 bg-[#156082]"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.div
                className="w-full h-0.5 bg-[#156082]"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu panel can be inserted here, conditionally rendered when isMobileMenuOpen */}
    </motion.nav>
  );
}
