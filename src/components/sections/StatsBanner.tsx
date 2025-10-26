/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 2000, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });
  const prefersReducedMotion = useReducedMotion();

  const easeOutCubic = useCallback((t: number) => 1 - Math.pow(1 - t, 3), []);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let frame: number;
    const start = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - start - delay) / duration, 1);
      if (progress >= 0) {
        const eased = easeOutCubic(progress);
        setCount(Math.floor(target * eased));
      }
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    const timer = setTimeout(() => {
      frame = requestAnimationFrame(update);
    }, delay);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [isInView, target, duration, delay, easeOutCubic, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      className="text-5xl lg:text-6xl font-bold"
      style={{ color: "#284267" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

export default function StatsBanner() {
  const stats = useMemo(() => [
    { label: "CNG STAFF TRANSPORT VEHICLES", value: 2000, suffix: "+" },
    { label: "ELECTRIC CABS & BUSES", value: 200, suffix: "+" },
    { label: "DELUXE CORPORATE BUSES", value: 300, suffix: "+" },
    { label: "TEMPO TRAVELLERS FOR TEAMS", value: 200, suffix: "+" },
  ], []);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section
      className="relative w-full pt-16 pb-8 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Floating particles (soft & light load) */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${25 + (i % 3) * 25}%`,
            backgroundColor: "rgba(40, 66, 103, 0.15)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="space-y-2"
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
                duration={2200}
                delay={i * 250}
              />
              <motion.div
                className="text-sm uppercase tracking-widest font-light"
                style={{ color: "#284267" }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.25 + 0.8,
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
