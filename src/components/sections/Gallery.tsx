"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const SECTION_BG = "#284167";
const CARD_BG = "rgba(255, 255, 255, 0.06)";
const ORANGE = "#EB8844";
const BEIGE = "#E9DBB6";

const fleetData = [
  {
    type: "Electric Sedan",
    text: "Eco-friendly AC sedans ideal for daily team commutes and airport transfers — comfort meets sustainability.",
  },
  {
    type: "Spacious Tempo",
    text: "12–17 seater vehicles built for corporate shifts and educational group movement with ample comfort.",
  },
  {
    type: "Deluxe Bus",
    text: "Premium group shuttles for large events and intercity travel — safe, stylish, and dependable.",
  },
  {
    type: "CNG Cab",
    text: "Cost-efficient CNG cabs crafted for eco-conscious urban commuting without compromise.",
  },
];

export default function Gallery() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="w-full py-24 px-6 md:px-12 rounded-[2rem]"
      style={{ background: SECTION_BG }}
    >
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <div className="mb-14 text-center max-w-3xl">
          <div
            style={{
              color: BEIGE,
              textTransform: "uppercase",
              fontSize: "0.9rem",
              letterSpacing: "2px",
              marginBottom: "0.75rem",
              opacity: 0.9,
            }}
          >
            — Our Fleet
          </div>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#fff",
              lineHeight: 1.3,
              fontWeight: 700,
            }}
          >
            Our vehicles speak for us.<br />More than words can.
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
          {fleetData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center relative overflow-hidden"
              style={{
                background: CARD_BG,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(14px)",
                minHeight: "340px",
                padding: "2rem 1.5rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              }}
            >
              {/* subtle gradient accent overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(235,136,68,0.4), transparent 70%)",
                }}
              ></div>

              {/* Icon */}
              <div className="flex justify-center mb-6 z-10">
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    padding: "1rem",
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 64 64" fill={ORANGE}>
                    <circle cx="32" cy="32" r="28" />
                  </svg>
                </div>
              </div>

              {/* Vehicle Type */}
              <div
                className="z-10"
                style={{
                  fontWeight: 600,
                  color: ORANGE,
                  textTransform: "uppercase",
                  fontSize: "0.95rem",
                  letterSpacing: "0.5px",
                  marginBottom: "0.75rem",
                }}
              >
                {card.type}
              </div>

              {/* Description */}
              <div
                className="z-10"
                style={{
                  color: BEIGE,
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  opacity: 0.9,
                  maxWidth: "90%",
                  margin: "0 auto",
                }}
              >
                {card.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
