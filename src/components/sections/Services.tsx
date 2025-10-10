"use client";

import { useRef } from "react";
import { motion, useInView, easeOut } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ✅ Fixed fade-in animation variants with proper easing type
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const services = [
    {
      title: "Corporate Staff Transport",
      description:
        "Reliable daily employee commute services with CNG and electric fleet options for enterprises across Delhi NCR and Hyderabad.",
    },
    {
      title: "Electric Vehicle Mobility",
      description:
        "Eco-friendly mobility using 200+ electric cabs and buses. Track your rides in real time with our smart GPS platform.",
    },
    {
      title: "Deluxe Bus & Tempo Fleet",
      description:
        "300+ deluxe buses and 200+ tempo travellers for corporate events, educational institutions, and team movement.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-24 px-6 md:px-12"
      style={{
        backgroundColor: "white",
        maxWidth: "1380px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="text-center mb-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm uppercase tracking-widest font-light mb-4"
          style={{ color: "#284267" }}
        >
          Our Services
        </motion.div>

        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: "#284267" }}
        >
          Complete Corporate Transport Solutions
        </motion.h2>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#284267" }}
        >
          From daily staff commute to electric fleet deployment and event logistics, Sun Transmovers ensures safe, sustainable, and tech-enabled transport across Delhi NCR & Hyderabad.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.02,
              y: -6,
              transition: { duration: 0.3, ease: easeOut },
            }}
            className="relative rounded-xl shadow-lg group cursor-pointer p-10"
            style={{ backgroundColor: "#284267" }} // Deep blue background
          >
            <div className="absolute inset-0 rounded-xl z-0" />

            <div className="relative z-10">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#E9DBB6" }} // Warm beige for title
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#EB8844" }} // Vibrant orange for description
              >
                {service.description}
              </p>
            </div>

            {/* Border glow on hover with vibrant orange */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(235,136,68,0.3)]"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "#EB8844";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "transparent";
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
