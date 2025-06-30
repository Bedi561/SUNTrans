"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
<div className="absolute inset-0" style={{ backgroundColor: 'rgba(17, 24, 39, 0.6)' }} />

      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          style={{ color: '#FFFFFF' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Enabling Smarter Corporate Mobility
        </motion.h1>
                
        <motion.h2 
          className="text-xl md:text-2xl font-normal mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#E0E0E0' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Electric, CNG & Deluxe Transport Solutions for Delhi NCR & Hyderabad.
  Reliable. Sustainable. Always On-Time.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <Button 
            className="px-12 py-6 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ 
              backgroundColor: '#9F96FF', 
              color: 'white',
              border: 'none'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#8B82FF'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#9F96FF'}
          >
            Get a Free Quote
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ color: '#E0E0E0' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.div 
            className="w-px h-8"
            style={{ backgroundColor: '#E0E0E0' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          />
          <motion.div 
            className="text-sm font-light tracking-wider"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          >
            SCROLL
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}