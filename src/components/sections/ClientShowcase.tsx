"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const faqs = [
  {
    question: "What areas do you operate in?",
    answer:
      "We currently serve Delhi NCR and Hyderabad with premium corporate, airport, and on-demand mobility solutions.",
  },
  {
    question: "Can I schedule my ride in advance?",
    answer:
      "Yes. You can schedule rides ahead of time using our mobile app or web platform to suit your itinerary.",
  },
  {
    question: "Are your drivers trained and vetted?",
    answer:
      "All KRUZE drivers are professionally trained, background-checked, and routinely evaluated for service standards.",
  },
  {
    question: "How does KRUZE ensure safety?",
    answer:
      "We use journey tracking, safety buttons for emergency alerts, and rigorous vehicle cleanliness standards for your protection.",
  },
  {
    question: "How can I contact KRUZE for support?",
    answer:
      "Reach out via chat in the app or contact our 24x7 customer support hotline for assistance.",
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [open, setOpen] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.11, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="max-w-3xl mx-auto py-24 px-6 bg-[#fafafa] rounded-3xl"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-14 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-2 text-[#156082] text-sm font-semibold tracking-wide"
        >
          FAQ
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="font-extrabold text-4xl md:text-5xl mb-6 tracking-tight text-[#1f4b68]"
        >
          Everything you need to know
        </motion.h2>
      </motion.div>
      <div>
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="border-b border-[#d0dde4] last:border-b-0"
            >
              <button
className="w-full flex items-center justify-between py-7 px-4 text-lg font-medium text-[#1f4b68] focus:outline-none transition-colors duration-300 hover:bg-[#eaf2f7]"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-item-${idx}`}
              >
                <span>{faq.question}</span>
                <span
                  className={`inline-block w-7 h-7 rounded-full bg-[#156082] text-white text-xl flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <motion.div
                id={`faq-item-${idx}`}
                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                animate={
                  isOpen
                    ? { height: "auto", opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } }
                    : { height: 0, opacity: 0, scale: 0.95, transition: { duration: 0.35, ease: "easeIn" } }
                }
                className="overflow-hidden text-[#495f7d] px-2 pb-0 text-base"
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
