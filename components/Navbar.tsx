"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Career", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <div
        className={`w-full max-w-7xl rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3 md:px-8 md:py-4 bg-blue-50/70 backdrop-blur-md shadow-lg shadow-blue-900/5 border border-white/20`}
      >
        {/* Left: Logo + Brand + Tagline */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-primary group-hover:scale-105 transition-transform">
            {/* Custom Appifylab-like logo icon or default Zap */}
            <Zap className="w-8 h-8 fill-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              Nexo Tech IT
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-600 mt-1 uppercase">
              We Code Your Dreams
            </span>
          </div>
        </Link>

        {/* Right: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                pathname === link.href ? "text-primary" : "text-slate-700"
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700 p-2 hover:bg-white/20 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+10px)] left-4 right-4 md:hidden bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 flex items-center justify-between ${
                    pathname === link.href ? "text-primary" : "text-slate-700"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5 text-slate-400" />}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
