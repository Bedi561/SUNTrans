'use client';

import { useRef } from "react";
import { motion } from "framer-motion";

// Colors
const SECTION_BG = "#284167";
const CARD_BG = "rgba(18,22,30,0.5)"; // semi-transparent for blur effect
const ORANGE = "#EB8844";
const BEIGE = "#E9DBB6";

const fleetData = [
  {
    type: "Electric Sedan",
    text: "Eco-friendly AC sedan for daily team commute and airport transfers.",
  },
  {
    type: "Spacious Tempo",
    text: "12-17 seater for corporate shifts and educational movements.",
  },
  {
    type: "Deluxe Bus",
    text: "Premium group shuttle for large staff events and intercity travel.",
  },
  {
    type: "CNG Cab",
    text: "Sustainable and cost-efficient transport for everyday urban commute.",
  },
];

export default function Gallery() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="w-full py-24 px-6 md:px-12"
      style={{ background: SECTION_BG, borderRadius: "2rem" }}
    >
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <div className="mb-16 text-center px-4 md:px-0">
          <div style={{ color: BEIGE, textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>
            — Our Fleet
          </div>
          <h2 style={{ fontSize: "2.5rem", color: "#fff", lineHeight: 1.3, fontWeight: 700 }}>
            Our vehicles speak for us.<br />More than words can.
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
          {fleetData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              className="flex flex-col items-center text-center"
              style={{
                background: CARD_BG,
                backdropFilter: "blur(10px)", // blurry transparent effect
                borderRadius: "1.5rem",
                minHeight: "420px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "1rem",
              }}
            >
              {/* SVG placeholder at top */}
              <div className="flex justify-center w-full mb-4">
                <svg width="80" height="80" viewBox="0 0 64 64" fill={ORANGE}>
                  <circle cx="32" cy="32" r="30" />
                </svg>
              </div>

              {/* Vehicle type */}
              <div style={{ fontWeight: 600, color: ORANGE, textTransform: "uppercase", fontSize: "0.95rem" }}>
                {card.type}
              </div>

              {/* Description */}
              <div style={{ color: BEIGE, fontSize: "1rem", marginTop: "0.5rem", lineHeight: 1.5 }}>
                {card.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
