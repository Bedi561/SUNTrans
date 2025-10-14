"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseCompatto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 px-6 md:px-12 bg-[#F9FAFB] flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold mb-14 text-center text-[#284267] leading-tight"
      >
        Why <span className="text-[#EB8844]">Choose</span> Compatto
      </motion.h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl w-full">
        {/* LEFT COLUMN (3 cols) */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-8">
          {/* Top row - two boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Box 1 */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="rounded-2xl p-7 bg-white shadow-md border border-[#284267]/10 hover:shadow-lg transition-all h-full"
            >
              <h3 className="text-lg font-semibold text-[#284267] mb-3">
                End-to-End Solutions
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                From concept to completion, we manage every stage of your furnishing project — ensuring flawless delivery and peace of mind.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="rounded-2xl p-7 shadow-md bg-gradient-to-br from-[#284267] to-[#1e3350] text-white hover:scale-[1.02] transition-transform h-full"
            >
              <h3 className="text-lg font-semibold mb-3">After-Sales Support</h3>
              <p className="text-[15px] opacity-90 leading-relaxed">
                Our dedicated support team ensures lasting satisfaction — providing assistance, maintenance, and service whenever you need it.
              </p>
            </motion.div>
          </div>

          {/* Bottom wide box */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="rounded-2xl overflow-hidden shadow-lg bg-white border border-[#284267]/10"
          >
            <img
              src="/1.jpg"
              alt="Superior Quality"
              className="w-full object-cover h-[210px]" // refined height for balance
            />
            <div className="p-7 bg-[#EB8844] text-white">
              <h3 className="text-lg font-semibold mb-2">Superior Quality</h3>
              <p className="text-[15px] opacity-95 leading-relaxed">
                We source only from the best — combining premium materials and craftsmanship to deliver lasting quality you can trust.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (2 cols) */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-span-2 rounded-2xl p-9 flex flex-col justify-center text-white relative overflow-hidden min-h-[460px]"
          style={{
            background: "linear-gradient(145deg, #284267 0%, #1b304d 80%)",
          }}
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB8844]/25 rounded-full blur-3xl opacity-70"></div>

          <div className="mb-10 relative z-10">
            <h3 className="text-xl font-semibold mb-3">No Variety Restrictions</h3>
            <p className="text-[15px] leading-relaxed opacity-95">
              Choose from any trusted vendor that meets our quality standards — enjoy flexibility without compromising craftsmanship.
            </p>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 text-[#EB8844]">
              Bespoke Furniture
            </h3>
            <p className="text-[15px] opacity-95 leading-relaxed">
              Crafted exclusively to your vision — every piece tailored to your space, taste, and individuality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
