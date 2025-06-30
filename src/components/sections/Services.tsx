/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useRef, useState } from "react";

// Services Component
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

 const services = [
  {
    title: "Corporate Staff Transport",
    description: "Reliable daily employee commute services with CNG and electric fleet options for enterprises across Delhi NCR and Hyderabad.",
    image: "/1.jpg",
  },
  {
    title: "Electric Vehicle Mobility",
    description: "Eco-friendly mobility using 200+ electric cabs and buses. Track your rides in real time with our smart GPS platform.",
    image: "/5.jpeg",
  },
  {
    title: "Deluxe Bus & Tempo Fleet",
    description: "300+ deluxe buses and 200+ tempo travellers for corporate events, educational institutions, and team movement.",
    image: "/3.jpeg"
  },
];


  return (
    <section className="py-20 lg:py-24 px-12 w-full" ref={ref}>
      <div className="w-full mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-sm uppercase tracking-widest font-light mb-4"
            style={{ color: '#9F96FF' }}
            variants={headerVariants}
          >
            OUR SERVICES
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#FFFFFF' }}
            variants={headerVariants}
          >
            Complete Corporate Transport Solutions
          </motion.h2>

          <motion.p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#B8B8B8' }}
            variants={headerVariants}
          >
From daily staff commute to electric fleet deployment and event logistics, Sun Transmovers ensures safe, sustainable, and tech-enabled transport across Delhi NCR & Hyderabad.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer perspective-1000"
            >
              <div className="relative h-96 overflow-hidden shadow-lg">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  whileHover={{ 
                    background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(159, 150, 255, 0.1), transparent)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base text-white/90 leading-relaxed"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>

                {/* Purple border animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent "
                  whileHover={{ 
                    borderColor: '#9F96FF',
                    boxShadow: `0 0 30px rgba(159, 150, 255, 0.3)`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}