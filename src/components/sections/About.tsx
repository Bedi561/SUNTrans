"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 lg:py-32 px-6" style={{ backgroundColor: '#111827' }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-sm uppercase tracking-widest font-light"
              style={{ color: '#9F96FF' }}
              variants={itemVariants}
            >
              ABOUT US
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: '#FFFFFF' }}
              variants={itemVariants}
            >
              Leading the Charge in Green Corporate Mobility
            </motion.h2>

            <motion.p 
              className="text-lg leading-relaxed"
              style={{ color: '#B8B8B8' }}
              variants={itemVariants}
            >
 With over 25 years of transport excellence, Sun Transmovers is a trusted partner in corporate mobility. From electric cabs to deluxe buses, we deliver sustainable, tech-enabled transport solutions across Delhi NCR and Hyderabad.
            </motion.p>

            <motion.div 
              className="mt-12"
              variants={imageVariants}
            >
              <motion.img
src="/2.jpg"
                alt="Professional chauffeur in suit standing beside luxury vehicle"
                className="w-full h-80 object-cover shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              <motion.img
src="/1.jpg"

                alt="Luxury black sedan in front of modern building"
                className="w-full h-96 lg:h-[500px] object-cover shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Subtle overlay effect on hover */}
              <motion.div
                className="absolute inset-0 bg-black/0 pointer-events-none"
                whileHover={{ backgroundColor: "rgba(159, 150, 255, 0.1)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.p 
                className="text-lg leading-relaxed"
                style={{ color: '#B8B8B8' }}
                variants={itemVariants}
              >
 Whether it’s daily corporate transit, educational institution support, or event transportation, our trained staff and real-time fleet monitoring ensure a seamless experience—powered by safety, efficiency, and innovation.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button
                  variant="outline"
                  className="uppercase tracking-wide px-8 py-4 font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg"
                  style={{ 
                    borderColor: '#9F96FF',
                    borderWidth: '2px',
                    color: '#9F96FF',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#9F96FF';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#9F96FF';
                  }}
                >
                  EXPLORE OUR SERVICES
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}