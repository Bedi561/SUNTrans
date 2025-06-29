'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Car, Shield, Star } from 'lucide-react';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const backdropBlur = useTransform(scrollY, [100, 200], [8, 20]);

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            setIsVisible(latest > 100);
        });
        return () => unsubscribe();
    }, [scrollY]);

    // const navItems = [
    //     { href: "#services", label: "Our Fleet", icon: Car },
    //     { href: "#about", label: "Why Us", icon: Shield },
    //     { href: "#partners", label: "Clients", icon: Star },
    //     { href: "#contact", label: "Reach Us", icon: Phone }
    // ];


    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                opacity: isVisible ? opacity : 1,
            }}
        >
            <motion.div
                className={`${isVisible
                    ? 'bg-black/90 shadow-2xl border-b border-[#9F96FF]/20'
                    : 'bg-black/70'
                    } transition-all duration-500`}
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="w-12 h-12 bg-[#9F96FF] flex items-center justify-center shadow-lg"
                                whileHover={{ rotate: 5 }}
                            >
                                <Car className="w-7 h-7 text-black font-bold" />
                            </motion.div>
                            <div>
                                <h1 className="text-2xl font-black text-white tracking-tight">
                                    SUN TRANSMOVERS
                                </h1>
                                <p className="text-xs text-[#9F96FF] font-semibold tracking-wide">
                                    SUSTAINABLE CORPORATE MOBILITY
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        {/* <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2 px-4 py-2 text-white font-bold [#9F96FF]/20 hover:text-[#9F96FF] transition-all duration-300 group"
                                        >
                                            <IconComponent className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                                            <span className="tracking-wide">{item.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div> */}

                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:block"
                        >
                            <Link
                                href="#booking"
                                className="bg-[#9F96FF] text-black px-8 py-3 font-black text-sm tracking-wider hover:shadow-2xl hover:shadow-[#9F96FF]/30 transition-all duration-300 flex items-center space-x-2 group"
                            >
                                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                                <span>BOOK NOW</span>
                            </Link>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden w-10 h-10 rounded-lg bg-[#9F96FF]/20 flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                <motion.div
                                    className="w-full h-0.5 bg-[#9F96FF]"
                                    animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                                />
                                <motion.div
                                    className="w-full h-0.5 bg-[#9F96FF]"
                                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                                />
                                <motion.div
                                    className="w-full h-0.5 bg-[#9F96FF]"
                                    animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                                />
                            </div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    {/* <motion.div
                        className="md:hidden overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="py-4 space-y-2 border-t border-[#9F96FF]/20">
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: isMobileMenuOpen ? 1 : 0,
                                            x: isMobileMenuOpen ? 0 : -20
                                        }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-3 px-4 py-3 text-white font-bold hover:bg-[#9F96FF]/20 hover:text-[#9F96FF] transition-all duration-300"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : -20
                                }}
                                transition={{ delay: 0.4 }}
                                className="pt-2"
                            >
                                <Link
                                    href="#booking"
                                    className="flex items-center justify-center space-x-2 bg-[#9F96FF] text-black px-6 py-3 font-black tracking-wider mx-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>REQUEST A QUOTE</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div> */}
                </div>
            </motion.div>
        </motion.nav>
    );
};