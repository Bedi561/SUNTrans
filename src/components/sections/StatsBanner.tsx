/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  index?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 2000, index = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animateCounter();
    }
  }, [isInView, hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <motion.div
      ref={elementRef}
      className="text-5xl lg:text-6xl font-bold"
      style={{ color: "#284267" }} // deep blue text for numbers
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
}

export default function StatsBanner() {
  const stats = [
    { label: "CNG STAFF TRANSPORT VEHICLES", value: 2000, suffix: "+" },
    { label: "ELECTRIC CABS & BUSES", value: 200, suffix: "+" },
    { label: "DELUXE CORPORATE BUSES", value: 300, suffix: "+" },
    { label: "TEMPO TRAVELLERS FOR TEAMS", value: 200, suffix: "+" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <section className="relative w-full pt-16 pb-8 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
            backgroundColor: "rgba(40, 66, 103, 0.2)", // deep blue lighter shade for particles
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((s, i) => (
            <motion.div
              className="space-y-2 relative"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            >
              <AnimatedCounter
                target={s.value}
                suffix={s.suffix}
                duration={2000 + i * 200}
                index={i}
              />

              <motion.div
                className="text-sm uppercase tracking-widest font-light relative z-10"
                style={{ color: "#284267" }} // deep blue for labels
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1 + 0.8,
                  ease: "easeOut"
                }}
              >
                {s.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
