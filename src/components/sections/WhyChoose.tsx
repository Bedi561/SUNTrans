/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useRef, useState } from "react";

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    })
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  return (
    <section className="py-20 w-full" ref={ref}>
      <div className="w-full">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="text-sm uppercase tracking-widest font-light mb-4"
            style={{ color: "#9F96FF" }}
            variants={headerVariants}
          >
            TRUSTED BY INDIA&apos;S TOP CORPORATES
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#9F96FF" }}
            variants={headerVariants}
          >
            WHY CHOOSE SUN TRANSMOVERS?
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* Box 1 - Expert Chauffeurs */}
          <motion.div
            className="aspect-[5/3] bg-gray-900 flex items-center justify-center p-8 relative overflow-hidden"
            variants={boxVariants}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onHoverStart={() => setHoveredBox(0)}
            onHoverEnd={() => setHoveredBox(null)}
            whileHover={{
              backgroundColor: "#111827",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(159, 150, 255, 0.05), transparent)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredBox === 0 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="text-center space-y-6 relative z-10"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                TRAINED PROFESSIONAL DRIVERS
              </motion.h3>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">EXPERTISE</span>
                  <motion.span
                    className="text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1 }}
                  >
                    90%
                  </motion.span>
                </div>
                <div className="relative">
                  <Progress value={90} className="h-2 bg-gray-700" />
                  <motion.div
                    className="absolute top-0 left-0 h-2 rounded-full"
                    style={{ backgroundColor: "#9F96FF" }}
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? "90%" : 0 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                whileHover={{ color: "#e5e7eb" }}
                transition={{ duration: 0.3 }}
              >
                Experienced drivers trained in safety protocols, punctuality,
                and courteous corporate conduct.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Box 2 - Image */}
          <motion.div
            className="aspect-[5/3] relative overflow-hidden w-full"
            variants={boxVariants}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-black/20"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Box 3 - Image */}
          <motion.div
            className="aspect-[5/3] relative overflow-hidden w-full"
            variants={boxVariants}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/1.jpg')"
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-black/20"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Box 4 - Quality Assurance */}
          <motion.div
            className="aspect-[5/3] bg-gray-900 flex items-center justify-center p-8 relative overflow-hidden"
            variants={boxVariants}
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onHoverStart={() => setHoveredBox(3)}
            onHoverEnd={() => setHoveredBox(null)}
            whileHover={{
              backgroundColor: "#111827",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(159, 150, 255, 0.05), transparent)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredBox === 3 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="text-center space-y-6 relative z-10"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                SAFETY & COMPLIANCE FIRST
              </motion.h3>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">QUALITY</span>
                  <motion.span
                    className="text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    95%
                  </motion.span>
                </div>
                <div className="relative">
                  <Progress value={95} className="h-2 bg-gray-700" />
                  <motion.div
                    className="absolute top-0 left-0 h-2 rounded-full"
                    style={{ backgroundColor: "#9F96FF" }}
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? "95%" : 0 }}
                    transition={{
                      duration: 1.5,
                      delay: 1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                whileHover={{ color: "#e5e7eb" }}
                transition={{ duration: 0.3 }}
              >
                We follow rigorous vehicle maintenance, real-time GPS tracking,
                and labor law compliance to ensure secure transport for all
                clients.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
