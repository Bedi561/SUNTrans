// Top of Hero.tsx
"use client";

// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // keep named import only
import StatsBanner from "./StatsBanner";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/about" },
  { label: "Our Fleet", href: "/portfolio" },
  { label: "Clients", href: "/contacts" },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      {/* NAVIGATION BAR */}
    <nav className="absolute top-0 left-0 w-full z-30 px-12 py-6 bg-transparent flex items-center justify-between">
  {/* Left: Logo */}
  <div className="flex-shrink-0 ml-8">
    <span className="font-bold text-3xl tracking-wider text-foreground ml-10 ">
      SNTC
    </span>
  </div>

  {/* Center: Nav Links */}
  <div className="flex-1 flex justify-center gap-16 ml-6">
    {navLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="relative font-bold text-base tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 group"
      >
        {link.label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}
  </div>

  {/* Right: CTA Button */}
  <div className="flex-shrink-0">
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200">
      GET A QUOTE
    </button>
  </div>
</nav>



      {/* HERO SECTION */}
      <div className="container mx-auto px-12 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
          {/* Hero Text */}
          <div className="flex-1 max-w-2xl">
            <motion.h1
  className="text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight uppercase"
  style={{ color: "#284267" }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Seamless Staff Mobility
</motion.h1>

            <motion.p
              className="text-lg font-light text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
Reliable transport for your staff.
            </motion.p>
          </div>

          {/* CTA Button */}
          
        </div>

        {/* Hero Image Card */}
        <motion.div
          className="relative w-full h-[500px] rounded-3xl overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>


          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Enabling Smarter Corporate Mobility
                </h3>
                <p className="text-sm text-white/80 font-light tracking-wide">
                  Electric, CNG & Deluxe Transport Solutions for Delhi NCR & Hyderabad.
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

            <StatsBanner />
      </div>
    </div>
  );
}
