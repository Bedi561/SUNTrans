'use client';

import React, { useRef } from 'react';
import { Instagram, Linkedin, Car } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const footerRef = useRef(null);
const isInView = useInView(footerRef, { amount: 0.2, once: true });

  return (
    <motion.footer
      ref={footerRef}
      className="bg-black text-white w-full border-t border-[#9F96FF]/20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-12 h-12 bg-[#9F96FF] rounded-xl flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 5 }}
          >
            <Car className="w-6 h-6 text-black font-bold" />
          </motion.div>
          <div>
          <h1 className="text-2xl font-black tracking-tight">SUN TRANSMOVERS</h1>
<p className="text-sm font-semibold tracking-widest text-[#9F96FF]">SUSTAINABLE MOBILITY PARTNER</p>

          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-wider">
          {['About', 'Fleet', 'Clients', 'Contact']
.map((label, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="text-white hover:text-[#9F96FF] relative group transition-all"
              whileHover={{ y: -2 }}
            >
              {label}
              <span className="block h-0.5 w-0 bg-[#9F96FF] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {[Linkedin, Instagram]
.map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-[#9F96FF] hover:scale-110 transition-transform"
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#9F96FF]/10 py-4 text-center text-xs text-[#9F96FF] tracking-wider font-light">
        © {new Date().getFullYear()} Sun Transmovers (I) Pvt. Ltd. All rights reserved.

      </div>
    </motion.footer>
  );
}
