"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const features = [
  {
    title: "Safety button",
    description:
      "Add a reliable contact to receive notifications every time you travel, share your real-time location or contact emergencies.",
    icon: (
      <svg width={48} height={48} fill="none">
        <rect x="6" y="11" width="36" height="26" rx="6" fill="#156082" />
        <path d="M24 32c3 0 6-2 6-5v-1a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1c0 3 3 5 6 5z" fill="#fff" />
        <circle cx="24" cy="20" r="5" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Journey tracking",
    description:
      "Each journey is tracked and you can share your route in real-time so your friends and family know where you are.",
    icon: (
      <svg width={48} height={48} fill="none">
        <circle cx="24" cy="24" r="22" fill="#1f4b68" />
        <path d="M24 14l10 20-10-7-10 7z" fill="#fff" />
        <circle cx="24" cy="22" r="4" fill="#fff" />
        <circle cx="24" cy="22" r="2" fill="#9f6afd" />
      </svg>
    ),
  },
  {
    title: "We’re here for you",
    description:
      "Our customer support team is here to help you and answer any questions you might have.",
    icon: (
      <svg width={48} height={48} fill="none">
        <rect x="10" y="16" width="28" height="16" rx="4" fill="#FFCB6B" />
        <rect x="14" y="20" width="20" height="8" rx="2" fill="#fff" />
        <rect x="14" y="26" width="8" height="2" rx="1" fill="#FFCB6B" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.72, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6" ref={ref}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10 md:mb-14">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f4b68]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            ref={ref}
          >
            Committed to <br /> keeping you safe
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-[#156082] font-medium flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            We’ve created our service with safety in mind, down to every last detail
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-3xl border border-[#ede7fd] hover:shadow-lg shadow transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center min-h-[260px] sm:min-h-[290px]"
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="mb-4 sm:mb-5">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1f4b68] mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-[#156082] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
