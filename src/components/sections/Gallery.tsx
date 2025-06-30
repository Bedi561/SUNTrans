"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Enhanced Gallery Component
export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cards = fleetData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full py-20 relative overflow-hidden" style={{ backgroundColor: "#111827" }} ref={ref}>
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-orange-500/5 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10"
      >
        {/* Enhanced Header Section */}
        <div className="max-w-7xl px-4 mx-auto text-center mb-16">
          <motion.h2 
            className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              style={{ color: "#9F96FF" }}
              initial={{ opacity: 0, rotateX: 90 }}
              animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Green & Versatile
            </motion.span>{" "}
            <motion.span
              className="inline-block bg-gradient-to-r bg-clip-text text-transparent"
              style={{ color: "#9F96FF" }}
              initial={{ opacity: 0, rotateX: 90 }}
              animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Corporate Fleet
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-neutral-400 dark:text-neutral-300 font-light mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
From EV cabs to tempo travellers to deluxe buses, tailored for corporate staff transport and enterprise mobility.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="flex items-center gap-2 text-neutral-300"
              whileHover={{ scale: 1.05, color: "#9F96FF" }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>Electric & CNG Fleet</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-neutral-300"
              whileHover={{ scale: 1.05, color: "#9F96FF" }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Real-Time GPS Tracking</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-neutral-300"
              whileHover={{ scale: 1.05, color: "#9F96FF" }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Trained Drivers & Safety Protocols</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-neutral-300"
              whileHover={{ scale: 1.05, color: "#9F96FF" }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>24/7 Operational Support</span>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <Carousel items={cards} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Enhanced Fleet Card Content
const FleetCardContent = ({ description }: { description: string }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-neutral-1000 p-8 md:p-14 mb-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.p 
        className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const fleetData = [
  {
    title: "Eco-Friendly Electric Sedans", // Added title
    category: "Electric Cabs",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    content: (
      <FleetCardContent description="4 passengers - Eco-friendly AC sedans ideal for short daily commutes, airport transfers, or client movement. Designed for companies focused on sustainability and ESG goals." />
    ),
  },
  {
    title: "Spacious Team Transport", // Added title
    category: "Tempo Travellers",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    content: (
      <FleetCardContent description="12–17 passengers - Spacious and comfortable vans used widely for mid-size team transport, factory shifts, educational institution movement, and off-site coordination." />
    ),
  },
  {
    title: "Premium Group Transport", // Added title
    category: "Deluxe Buses",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    content: (
      <FleetCardContent description="35–50 passengers - Air-conditioned large-capacity buses with premium seating. Perfect for corporate events, regular staff shuttles, institutional tie-ups, and intercity group travel." />
    ),
  },
  {
    title: "Sustainable Fleet Solutions", // Added title
    category: "CNG Vehicles",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    content: (
      <FleetCardContent description="4–50 passengers - India's largest CNG-powered fleet for sustainable and cost-efficient urban transport. Available across all vehicle categories from cabs to buses." />
    ),
  },
];
