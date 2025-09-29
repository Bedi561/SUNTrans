"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const trustedTexts = [
  "Itshift",
  "Nietzsche",
  "GlobalBank",
  "CloudWatch"
];

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[#fafafa] flex items-center px-6 lg:px-12 py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col space-y-3 mt-12">
          <motion.h1
            className="text-[#1f4b68] font-bold text-[48px] lg:text-[56px] leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            KRUZE YOUR WAY
          </motion.h1>

          <motion.p
            className="text-[#495f7d] text-lg font-medium max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Travel smarter with airport transfers, corporate mobility, and on-demand rides in our premium fleet of electric and hybrid cars. Experience comfort, punctuality, and peace of mind every time you ride.
          </motion.p>

          {/* Ratings */}
          <div className="flex items-center space-x-3">
            <span className="text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-[#1f4b68] text-sm">
              Trusted by 10,000+ Premium Riders in Delhi NCR
            </span>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Button className="bg-[#156082] text-white px-8 py-6 rounded-full font-semibold hover:bg-[#1f4b68] hover:scale-105 transition-transform mt-4 mb-10">
              Download Now <span className="ml-1 ">&#8594;</span>
            </Button>
          </motion.div>

          {/* Trusted By Text Loop */}
          <div className="w-[480px] max-w-full flex flex-col items-start">
            {/* Top row: Trusted By + line */}
            <div className="flex items-center w-full mb-2 ">
              <span className="text-[#050505] text-sm font-semibold tracking-wide mr-4 whitespace-nowrap">
                Trusted By
              </span>
              <div className="flex-1 h-px bg-gray-300"></div> {/* horizontal line */}
            </div>

            {/* Marquee slider below */}
            <div className="relative w-full overflow-hidden">
              {/* Left gradient for blur effect */}
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none z-10" />
              {/* Right gradient for blur effect */}
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none z-10" />

              <Marquee
                className="w-full text-[#1F4B68] text-sm font-bold tracking-wider ml-2"
                gradient={false}
                speed={32}
                pauseOnHover={false}
              >
                {trustedTexts.map((text, idx) => (
                  <span key={idx} className="mx-7 opacity-80">
                    {text}
                  </span>
                ))}
                {trustedTexts.map((text, idx) => (
                  <span key={"repeat-" + idx} className="mx-7 opacity-80">
                    {text}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>

        </div>

        {/* Right Section - Custom Layout */}
        <div className="flex w-[500px] lg:w-[600px] gap-3 mt-24">
          {/* Left Column */}
          <div className="flex flex-col gap-3 w-[230px]">
            {/* Top Image Card */}
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-[#156082] h-[280px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.22 }}
            />
            {/* Bottom Stats Card */}
            <motion.div
              className="bg-[#156082] rounded-2xl text-white px-6 py-8 flex flex-col justify-center items-start h-[180px] w-[180px] ml-auto"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          {/* Right Column - Person Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-[#156082] flex-1 h-[330px] flex items-end mt-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.36 }}
          >
            <div className="absolute top-4 right-4 bg-[#156082] bg-opacity-90 text-white text-lg px-4 py-2 rounded-xl text-right" />
            <div className="absolute bottom-4 left-4 bg-opacity-70 text-white text-base px-4 py-2 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
