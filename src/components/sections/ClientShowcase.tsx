"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className="relative w-full overflow-hidden py-32" style={{ backgroundColor: '#111827' }}>
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"
        animate={{
          background: [
            "radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)",
            "radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_70%)",
            "radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.04),transparent_70%)",
            "radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Premium Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-48" style={{ background: 'linear-gradient(to right, #111827, rgba(17, 24, 39, 0.9), transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-48" style={{ background: 'linear-gradient(to left, #111827, rgba(17, 24, 39, 0.9), transparent)' }} />

      {/* Section Header with Enhanced Animations */}
      <motion.div
        className="text-center mb-24 px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
  className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-6"
  style={{ color: "#9F96FF" }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  Trusted by India&apos;s Leading Corporates
</motion.h2>

        <motion.p
          className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#9F96FF" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          We serve enterprises, institutions, and government sectors with tailored transport solutions across Delhi NCR and Hyderabad.

        </motion.p>
      </motion.div>

      {/* First Row (Left to Right) with Stagger Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={false}
          className="mb-16"
        >
          {companies.map((name, idx) => (
            <motion.div
              key={`row1-${idx}`}
              className="mx-10 flex items-center"
            >
              <img
                src={`/${name}.png`}
                alt={name}
                className="h-24 w-auto object-contain"
              />
            </motion.div>
          ))}
        </Marquee>

      </motion.div>

      {/* Second Row (Right to Left) with Stagger Animation */}
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
            <motion.div
              key={`row1-${idx}`}
              className="mx-10 flex items-center"
            >
              <img
                src={`/${name}.png`}
                alt={name}
                className="h-24 w-auto object-contain"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Enhanced Bottom Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional floating particles for ambiance */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
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