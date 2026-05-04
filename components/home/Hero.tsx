import Link from "next/link";
import React from "react";
import { Reveal } from "../Reveal";
import { Globe, Box, Lightbulb, Code, Sparkle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#4a9cf5] to-[#e1f0ff] pt-32 pb-20 md:pt-40 md:pb-24 font-tight text-center min-h-[90vh] flex flex-col justify-center">
      {/* Background Arch & Grid */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden">
        {/* Soft Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glowing Arch */}
        <div className="absolute w-[150%] md:w-[100%] aspect-square border-t border-white/40 rounded-full translate-y-[55%] shadow-[0_-30px_80px_rgba(255,255,255,0.5)] bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl flex flex-col items-center">
        {/* Top Badge */}
        <Reveal>
          <div className="bg-white rounded-full py-1.5 pl-5 pr-1.5 flex items-center gap-4 shadow-sm border border-white/60 mb-10 mx-auto w-fit">
            <span className="text-slate-800 font-bold text-xl tracking-wide">
              Our Products
            </span>
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#525CEB] border-2 border-white flex items-center justify-center shadow-sm">
                <Globe className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#9B51E0] border-2 border-white flex items-center justify-center shadow-sm">
                <Box className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F2994A] border-2 border-white flex items-center justify-center shadow-sm">
                <Lightbulb className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#00B8D9] border-2 border-white flex items-center justify-center shadow-sm">
                <Code className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <div className="relative inline-block w-full px-4">
            {/* Sparkles */}
            <Sparkle
              className="absolute -left-6 md:-left-12 top-[60%] md:top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-white/50"
              strokeWidth={1}
            />
            <Sparkle
              className="absolute -right-2 md:-right-8 top-0 md:-top-4 w-6 h-6 md:w-10 md:h-10 text-white/70"
              strokeWidth={1}
            />

            <h1 className="text-[40px] leading-[1.1] sm:text-5xl md:text-[80px] font-bold text-white tracking-tight mb-8 drop-shadow-sm">
              We Build Systems That Power <br className="hidden md:block" />
              Creators and Businesses
            </h1>
          </div>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={0.2}>
          <p className="text-lg md:text-[22px] text-[#101828] font-normal max-w-4xl mx-auto leading-relaxed mb-12 px-2">
            We've built products from the ground up and have empowered customers{" "}
            <br className="hidden md:block" />
            across the world to start their dream business online.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.3}>
          <div className="flex flex-row gap-4 justify-center items-center mb-8 w-full">
            <a
              href="#products"
              className="w-40 py-3.5 bg-white text-slate-800 rounded-full font-bold shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-all text-center"
            >
              Products
            </a>
            <Link
              href="/about"
              className="w-40 py-3.5 bg-[#479bf4] text-white rounded-full font-bold shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_14px_0_rgba(71,155,244,0.4)] hover:bg-[#3b87dc] hover:scale-105 transition-all text-center"
            >
              About
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
