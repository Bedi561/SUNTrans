"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { amount: 0.2, once: true });

  return (
    <motion.footer
      ref={footerRef}
      className="bg-[#1f4b68] w-full"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo/Message */}
        <div className="flex flex-col items-start space-y-4 min-w-[240px]">
          <img src="wwe.png" alt="Kruze" className="h-24 mb-2" />
          <p className="text-sm text-[#fafafa] leading-relaxed max-w-xs">
            Experience the difference of a ride that&apos;s big on care, comfort, and attention to every detail.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-row gap-16">
          <div>
            <div className="font-medium mb-4 text-[#fafafa]">Sections</div>
            <ul className="space-y-2 text-sm text-[#fafafa]">
              <li>
                <a href="#about" className="hover:underline transition">
                  About
                </a>
              </li>
              <li>
                <a href="#our-way" className="hover:underline transition">
                  Our Way
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-4 text-[#fafafa]">Socials</div>
            <ul className="space-y-2 text-sm text-[#fafafa]">
              <li>
                <a
                  target="_blank"
                  href="https://instagram.com"
                  rel="noopener"
                  className="flex items-center gap-2 hover:underline transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://linkedin.com"
                  rel="noopener"
                  className="flex items-center gap-2 hover:underline transition"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
