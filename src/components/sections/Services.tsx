"use client";

import { useRef } from "react";
import { motion, useInView, easeOut } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      className="py-24 px-6 md:px-12 bg-white"
      style={{
        maxWidth: "1380px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-20">
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
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ color: "#284267" }}
        >
          Complete Corporate Transport Solutions
        </motion.h2>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#284267" }}
        >
          From daily staff commute to electric fleet deployment and event logistics, Sun Transmovers ensures safe, sustainable, and tech-enabled transport across Delhi NCR & Hyderabad.
        </motion.p>
      </div>

      {/* Service Boxes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.03,
              y: -6,
              transition: { duration: 0.3, ease: easeOut },
            }}
            className="relative rounded-2xl shadow-2xl group cursor-pointer p-14 sm:p-16 bg-[#284267]"
          >
            <div className="relative z-10">
              <h3
                className="text-2xl sm:text-3xl font-semibold mb-5"
                style={{ color: "#E9DBB6" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#EB8844" }}
              >
                {service.description}
              </p>
            </div>

            {/* Border Glow on Hover */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(235,136,68,0.3)]"
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
