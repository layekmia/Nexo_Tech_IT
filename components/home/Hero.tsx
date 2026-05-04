import Link from "next/link";
import React from "react";
import { Reveal } from "../Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#4f9cf9] via-[#5aa6f8] to-slate-50 pt-36 pb-24 md:pt-40 md:pb-32">
      {/* Soft Grid Background (lighter & modern) */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating Glow Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-200/30 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-5xl text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-6 backdrop-blur-md border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Built real systems for growing businesses
          </div>
        </Reveal>
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-tight">
          Grow Your Business with Digital Solutions That Actually Work
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          {/* We design and build scalable digital products that help people
            launch, grow, and automate their online businesses globally. */}
          At Nexotech IT, we build custom websites, online stores, and software
          systems that solve real problems, save you time, and help you reach
          more customers
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-10 py-4 rounded-full bg-white text-slate-800 font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Explore Our Work
          </a>

          <Link
            href="/about"
            className="px-10 py-4 rounded-full border border-white/40 text-white font-semibold backdrop-blur-md bg-blue-500 hover:bg-blue-600 transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
