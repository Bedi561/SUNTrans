"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // === Animation Variants ===
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 px-6"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl mx-auto"> {/* Updated container width */}
        <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
          {/* === Left Column === */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="text-xs font-light uppercase tracking-widest"
              style={{ color: "#284267" }}
              variants={itemVariants}
            >
              ABOUT US
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold leading-snug"
              style={{ color: "#284267" }}
              variants={itemVariants}
            >
              Leading the Charge in Green Corporate Mobility
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed"
              style={{ color: "#59686f" }}
              variants={itemVariants}
            >
              With over 25 years of transport excellence, Sun Transmovers is a
              trusted partner in corporate mobility. From electric cabs to deluxe
              buses, we deliver sustainable, tech-enabled transport solutions
              across Delhi NCR and Hyderabad.
            </motion.p>

            <motion.div className="mt-8" variants={imageVariants}>
              <motion.img
                src="/2.jpg"
                alt="Professional chauffeur beside luxury vehicle"
                className="w-full h-56 lg:h-64 object-cover shadow-xl rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          {/* === Right Column === */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="relative" variants={imageVariants}>
              <motion.img
                src="/1.jpg"
                alt="Luxury black sedan in front of modern building"
                className="w-full h-64 lg:h-80 object-cover shadow-2xl rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Overlay hover effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none bg-black/0"
                whileHover={{ backgroundColor: "rgba(40, 66, 103, 0.1)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.p
                className="text-base leading-relaxed"
                style={{ color: "#59686f" }}
                variants={itemVariants}
              >
                Whether it&apos;s daily corporate transit, educational institution
                support, or event transportation, our trained staff and real-time
                fleet monitoring ensure a seamless experience—powered by safety,
                efficiency, and innovation.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button
                  variant="outline"
                  className="uppercase tracking-wide px-6 py-3 font-medium text-base transition-all duration-300"
                  style={{
                    borderColor: "#EB8844",
                    borderWidth: "2px",
                    color: "#284267",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = "#EB8844";
                    target.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = "transparent";
                    target.style.color = "#284267";
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
