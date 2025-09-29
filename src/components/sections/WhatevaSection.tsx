"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Icons with brand color used in background fill
function IconShield() {
  return (
    <div className="bg-[#156082] rounded-xl flex items-center justify-center w-14 h-14">
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="12" fill="#1f4b68" />
        <path d="M12 17l-4-2.5V9l4-2.5L16 9v5.5L12 17z" fill="#fff" />
      </svg>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="bg-[#156082] rounded-xl flex items-center justify-center w-14 h-14">
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="12" fill="#1f4b68" />
        <path
          d="M8 12.5l3 3 5-5"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function IconTag() {
  return (
    <div className="bg-[#156082] rounded-xl flex items-center justify-center w-14 h-14">
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="12" fill="#1f4b68" />
        <path
          d="M7 17l10-10m0 0h-4m4 0v4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function WhatevaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
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

  return (
    <section
      className="py-24 bg-[#fafafa] rounded-[50px] w-full overflow-hidden"
      ref={ref}
    >
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6">
        {/* Left - Image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-[#e6f2f6] rounded-[40px] flex justify-center items-center p-8 ml-24"
        >
          <motion.img
            src="nwo.png"
            alt="Mobile App Screenshot"
            className="w-[280px] md:w-[320px] rounded-[32px] shadow-lg"
            variants={itemVariants}
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="flex-1 max-w-xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-6 px-5 py-2 bg-[#d4e8f2] text-[#1f4b68] font-semibold text-lg rounded-full"
            variants={itemVariants}
          >
            Why choose whateva
          </motion.div>

          <ul className="space-y-8 mb-8">
            <motion.li className="flex items-start gap-5" variants={itemVariants}>
              <IconShield />
              <div>
                <h3 className="font-bold text-lg text-[#156082] mb-2">
                  Your safety is our priority
                </h3>
                <p className="text-[#497a97] text-base">
                  With geolocated rides, verified drivers and a safety button available to take care of you during your ride.
                </p>
              </div>
            </motion.li>

            <motion.li className="flex items-start gap-5" variants={itemVariants}>
              <IconCheck />
              <div>
                <h3 className="font-bold text-lg text-[#156082] mb-2">
                  The highest quality standards
                </h3>
                <p className="text-[#497a97] text-base">
                  Professional drivers, modern vehicles and the ability to control your journey preferences via the app. At last, you’ll travel as you deserve to.
                </p>
              </div>
            </motion.li>

            <motion.li className="flex items-start gap-5" variants={itemVariants}>
              <IconTag />
              <div>
                <h3 className="font-bold text-lg text-[#156082] mb-2">
                  Clear and transparent prices
                </h3>
                <p className="text-[#497a97] text-base">
                  We always show you the price before you order the journey so that you can decide how best to get there. No surprises.
                </p>
              </div>
            </motion.li>
          </ul>

          <motion.div className="flex gap-4 mb-6" variants={itemVariants}>
            <a href="#" className="block">
              <img
                src="/appstore-badge.png"
                alt="Download on App Store"
                className="h-10"
              />
            </a>
            <a href="#" className="block">
              <img
                src="/googleplay-badge.png"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </motion.div>

          <motion.div
            className="text-[#1f4b68] text-base font-semibold flex items-center gap-2"
            variants={itemVariants}
          >
            Or discover our <a href="#" className="underline">web app</a>{" "}
            <span>→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
