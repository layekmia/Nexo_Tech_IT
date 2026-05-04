"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productLinks = [
  { name: "Softora Inventory", href: "https://smartsolutation2.vercel.app/" },
  { name: "EduFlow LMS", href: "https://eduflow.nexotechit.com/" },
  { name: "Shopcart Ecommerce", href: "https://shopcart.nexotechit.com/" },
  { name: "School MS", href: "https://smartschool1.vercel.app/" },
  { name: "Travel Tour Application", href: "https://natours.nexotechit.com/" },
  {
    name: "Wildoasis Hotel Management",
    href: "https://wildoasis.nexotechit.com/",
  },
  { name: "View All Products \u2192", href: "/products", isViewAll: true },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
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
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 group"
        >
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
            <div key={link.name} className="relative group py-2">
              <Link
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  pathname === link.href ? "text-primary" : "text-slate-700"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                )}
              </Link>

              {link.hasDropdown && (
                <div className="absolute top-full -left-4 w-[280px] bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 flex flex-col z-50">
                  {productLinks.map((pLink) => (
                    <Link
                      key={pLink.name}
                      href={pLink.href}
                      target={pLink.isViewAll ? "_self" : "_blank"}
                      className={`px-5 py-2.5 text-[15px] hover:text-primary hover:bg-slate-50 transition-colors ${
                        pLink.isViewAll
                          ? "mt-2 pt-3 border-t border-slate-100 font-semibold text-primary"
                          : "text-slate-600"
                      }`}
                    >
                      {pLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700 p-2 hover:bg-white/20 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() =>
                      !link.hasDropdown && setIsMobileMenuOpen(false)
                    }
                    className={`text-lg font-medium py-2 flex items-center justify-between ${
                      pathname === link.href ? "text-primary" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <div className="flex flex-col pl-4 mt-2 mb-2 space-y-1 border-l-2 border-slate-100">
                      {productLinks.map((pLink) => (
                        <Link
                          key={pLink.name}
                          href={pLink.href}
                          target={pLink.isViewAll ? "_self" : "_blank"}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`py-2 text-[15px] ${
                            pLink.isViewAll
                              ? "text-primary font-semibold mt-2 border-t border-slate-50 pt-3"
                              : "text-slate-600"
                          }`}
                        >
                          {pLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
