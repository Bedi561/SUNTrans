"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const companies = [
  "TCS", "HCLTech", "Capgemini", "Samsung", "Barclays", "AsianPaints",
  "Optum", "GlobalLogic", "Mercer", "Oppo", "IndiaMART",
  "BureauVeritas", "MothersonSumi", "Mphasis", "Oracle",
];

export default function ClientShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(40, 66, 103, 0.03), transparent 70%)",
        }}
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(40, 66, 103, 0.03), transparent 70%)",
            "radial-gradient(circle at 30% 70%, rgba(40, 66, 103, 0.05), transparent 70%)",
            "radial-gradient(circle at 70% 30%, rgba(40, 66, 103, 0.04), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(40, 66, 103, 0.03), transparent 70%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Premium Gradient Fades */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-48"
        style={{
          background:
            "linear-gradient(to right, #FFFFFF, rgba(255, 255, 255, 0.9), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-20 h-full w-48"
        style={{
          background:
            "linear-gradient(to left, #FFFFFF, rgba(255, 255, 255, 0.9), transparent)",
        }}
      />

      {/* Section Header */}
      <motion.div
        className="text-center mb-24 px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span style={{ color: "#284267" }}>Trusted by India&apos;s Leading </span>
          <span style={{ color: "#EB8844" }}>Corporates</span>
        </motion.h2>

        <motion.p
          className="text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#284267" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          We serve enterprises, institutions, and government sectors with tailored
          transport solutions across Delhi NCR and Hyderabad.
        </motion.p>
      </motion.div>

      {/* First Row (Left to Right) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <Marquee speed={40} gradient={false} pauseOnHover={false} className="mb-16">
          {companies.map((name, idx) => (
            <motion.div key={`row1-${idx}`} className="mx-10 flex items-center">
              <img
                src={`/${name}.png`}
                alt={name}
                className="h-24 w-auto object-contain"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Second Row (Right to Left) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <Marquee
          speed={35}
          gradient={false}
          pauseOnHover={false}
          direction="right"
          className="mt-16"
        >
          {companies.map((name, idx) => (
            <motion.div key={`row2-${idx}`} className="mx-10 flex items-center">
              <img
                src={`/${name}.png`}
                alt={name}
                className="h-24 w-auto object-contain"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Bottom Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(40, 66, 103, 0.1)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            backgroundColor: "rgba(40, 66, 103, 0.2)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}
