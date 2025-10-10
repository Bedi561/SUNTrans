"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { amount: 0.2, once: true });

  return (
    <motion.footer
      ref={footerRef}
      style={{ backgroundColor: "#284267" }} // main footer bg color
      className="w-full"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* --- Top Row: Footer Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
        {/* Logo/Message */}
        <div className="flex flex-col items-start space-y-3 md:space-y-4 min-w-[240px]">
          <p className="text-3xl font-bold tracking-wide text-foreground text-white">
  SUN TRANSMOVERS INDIA PVT LTD.
</p>

          <p className="text-sm sm:text-base text-[#fafafa] leading-relaxed max-w-xs">
            Experience the difference of a ride that&apos;s big on care, comfort, and attention to every detail.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-row gap-8 sm:gap-12">
          <div>
            <div className="font-medium mb-3 sm:mb-4 text-[#fafafa] text-sm sm:text-base">Sections</div>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[#fafafa]">
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
            <div className="font-medium mb-3 sm:mb-4 text-[#fafafa] text-sm sm:text-base">Socials</div>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-[#fafafa]">
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

      {/* --- Bottom Row: Background Image --- */}
      {/* <div
        style={{
          backgroundImage: "url('/ok2.png')",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom",
          backgroundRepeat: "repeat-x",
          height: "450px", // adjust height of the image row
        }}
      /> */}
    </motion.footer>
  );
}
