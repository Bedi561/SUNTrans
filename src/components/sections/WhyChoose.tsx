/* eslint-disable react/jsx-key */
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// icons (same as yours)
const icons = [
  <svg width="26" height="26" fill="none" stroke="currentColor"><circle cx="13" cy="13" r="11" strokeWidth="2"/></svg>,
  <svg width="26" height="26" fill="none" stroke="currentColor"><circle cx="13" cy="13" r="11" strokeWidth="2"/><path d="M13 7v6h5" strokeWidth="2"/></svg>,
  <svg width="26" height="26" fill="none" stroke="currentColor"><rect x="5" y="10" width="16" height="10" rx="2" strokeWidth="2"/><path d="M5 14h16" strokeWidth="2"/></svg>,
];

export default function WhyChooseExactGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="w-full mb-24 py-12 px-2 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 rounded-lg overflow-hidden shadow-lg min-h-[360px]">

        {/* LEFT TOP (col 1..3, row 1) */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-start-1 md:col-span-3 md:row-start-1 h-full flex flex-col gap-3 justify-center items-center p-6"
          style={{ backgroundColor: "#284267", color: "#E9DBB6" }} // deep blue bg with warm beige text
        >
          {icons[0]}
          <div className="font-bold text-lg uppercase tracking-wider">SAMPLE HEADLINE</div>
          <div className="text-sm opacity-90">Sample text. Click to select the text box.</div>
        </motion.div>

        {/* LEFT BOTTOM (col 1..3, row 2) */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-start-1 md:col-span-3 md:row-start-2 h-full flex flex-col gap-3 justify-center items-center p-6"
          style={{ backgroundColor: "#E9DBB6", color: "#284267" }} // warm beige bg with deep blue text
        >
          {icons[1]}
          <div className="font-bold text-lg uppercase tracking-wider">SAMPLE HEADLINE</div>
          <div className="text-sm opacity-90">Sample text. Click to select the text box.</div>
        </motion.div>

        {/* CENTER IMAGE (col 4..9, row 1-2) */}
        <div className="col-span-1 md:col-start-4 md:col-span-6 md:row-start-1 md:row-span-2 flex items-center justify-center bg-[#F9F8F6]">
          {/* slightly off-white background for subtle contrast */}
          <img
            src="1.jpg"
            alt="center"
            className="object-contain max-w-full max-h-[100%] rounded"
          />
        </div>

        {/* RIGHT TOP (col 10..12, row 1) */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-start-10 md:col-span-3 md:row-start-1 h-full flex flex-col justify-center p-8"
          style={{ backgroundColor: "#E9DBB6", color: "#284267" }} // warm beige bg with deep blue text
        >
          <h2 className="text-4xl font-bold leading-tight mb-2" style={{ color: "#284267" }}>
            WHY <br />
            <span className="text-black">CHOOSE US?</span>
          </h2>
          <p className="mt-2 font-medium" style={{ color: "#EB8844" }}>
            Everyday we work hard to make life of our clients better and happier.
          </p>
        </motion.div>

        {/* RIGHT BOTTOM (col 10..12, row 2) -> nested 2 cols */}
        <div className="col-span-1 md:col-start-10 md:col-span-3 md:row-start-2 grid grid-cols-2 gap-0 h-full">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col gap-2 justify-center items-center p-6 h-full"
            style={{ backgroundColor: "#284267", color: "#E9DBB6" }}
          >
            {icons[2]}
            <div className="font-bold text-lg uppercase tracking-wider">SAMPLE HEADLINE</div>
            <div className="text-sm opacity-90">Sample text. Click to select the text box.</div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col gap-2 justify-center items-center p-6 h-full"
            style={{ backgroundColor: "#EB8844", color: "#E9DBB6" }}
          >
            {icons[0]}
            <div className="font-bold text-lg uppercase tracking-wider">SAMPLE HEADLINE</div>
            <div className="text-sm opacity-90">Sample text. Click to select the text box.</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
