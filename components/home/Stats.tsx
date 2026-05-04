// import React from "react";
// import { Reveal } from "../Reveal";
// import { Globe, Box, Lightbulb, Code } from "lucide-react";

// export default function Stats() {
//   return (
//     <section className="py-24 bg-slate-50/50 font-tight overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
//         <Reveal>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">
//             The Positive Force To Empower growth
//           </h2>
//         </Reveal>

//         <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[220px]">
//           {/* Card 1: 120+ Team Member (Left Column, Full Height) */}
//           <Reveal
//             delay={0.1}
//             className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-pink-100/50 relative overflow-hidden group shadow-sm bg-gradient-to-br from-[#fff0f7] via-[#ffe3f3] to-[#ffd1ea]"
//           >
//             {/* Subtle Grid Background */}
//             <div
//               className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
//               style={{
//                 backgroundImage: "linear-gradient(to right, #ffb6db 1px, transparent 1px), linear-gradient(to bottom, #ffb6db 1px, transparent 1px)",
//                 backgroundSize: "32px 32px",
//               }}
//             ></div>
//             <div className="relative z-10">
//               <h3 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter drop-shadow-sm">
//                 20+
//               </h3>
//             </div>
//             <div className="relative z-10 mt-20 md:mt-0">
//               <h4 className="text-xl font-bold text-slate-950 mb-3">
//                 Team Member
//               </h4>
//               <p className="text-slate-700/90 text-[15px] leading-relaxed">
//                 Awesome products begin with an awesome team. We are a fantastic
//                 family.
//               </p>
//             </div>
//           </Reveal>

//           {/* Card 2: Our Products (Top Middle) */}
//           <Reveal
//             delay={0.2}
//             className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-center overflow-hidden"
//           >
//             <div className="flex flex-col h-full justify-between gap-4">
//               <div className="flex items-center justify-between gap-2">
//                 <h4 className="text-[17px] font-bold text-slate-950">
//                   Our Products
//                 </h4>
                
//                 {/* Overlapping Icons */}
//                 <div className="flex -space-x-2">
//                   <div className="w-8 h-8 rounded-full bg-[#525CEB] border-[3px] border-white flex items-center justify-center shadow-sm z-40">
//                     <Globe className="w-3.5 h-3.5 text-white" />
//                   </div>
//                   <div className="w-8 h-8 rounded-full bg-[#9B51E0] border-[3px] border-white flex items-center justify-center shadow-sm z-30">
//                     <Box className="w-3.5 h-3.5 text-white" />
//                   </div>
//                   <div className="w-8 h-8 rounded-full bg-[#F2994A] border-[3px] border-white flex items-center justify-center shadow-sm z-20">
//                     <Lightbulb className="w-3.5 h-3.5 text-white" />
//                   </div>
//                   <div className="w-8 h-8 rounded-full bg-[#00B8D9] border-[3px] border-white flex items-center justify-center shadow-sm z-10">
//                     <Code className="w-3.5 h-3.5 text-white" />
//                   </div>
//                 </div>
//               </div>
              
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 From LMS to website builder to community platform — we build
//                 systems that make digital ideas real and scalable.
//               </p>
//             </div>
//           </Reveal>

//           {/* Card 3: 50X Client Growth (Right Column, Top & Middle Rows) */}
//           <Reveal
//             delay={0.3}
//             className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-blue-100/50 relative overflow-hidden group shadow-sm bg-gradient-to-br from-[#eff5ff] via-[#e2edff] to-[#d1e3ff]"
//           >
//             {/* Subtle Dot Grid Background */}
//             <div
//               className="absolute inset-0 opacity-[0.25]"
//               style={{
//                 backgroundImage: "radial-gradient(#93c5fd 1.5px, transparent 1.5px)",
//                 backgroundSize: "24px 24px",
//               }}
//             ></div>
//             <div className="relative z-10">
//               <h3 className="text-6xl md:text-[5rem] font-black text-slate-950 tracking-tighter drop-shadow-sm">
//                 50X
//               </h3>
//             </div>
//             <div className="relative z-10 mt-12 md:mt-0">
//               <h4 className="text-[17px] font-bold text-slate-950 mb-3">
//                 Client Growth Results
//               </h4>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Our clients earn million dollars using our platforms.
//               </p>
//             </div>
//           </Reveal>

//           {/* Card 4: 100% Client Satisfaction (Middle Column, Middle Row) */}
//           <Reveal
//             delay={0.4}
//             className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 bg-gradient-to-br from-[#ebf8ff] to-[#d6f0ff] rounded-3xl p-8 border border-sky-100/50 shadow-sm flex flex-col justify-between relative overflow-hidden"
//           >
//              {/* Subtle Grid Background */}
//              <div
//               className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
//               style={{
//                 backgroundImage: "linear-gradient(to right, #bae6fd 1px, transparent 1px), linear-gradient(to bottom, #bae6fd 1px, transparent 1px)",
//                 backgroundSize: "24px 24px",
//               }}
//             ></div>
//             <div className="relative z-10">
//               <h3 className="text-5xl md:text-[54px] font-black text-slate-950 tracking-tighter drop-shadow-sm">
//                 100%
//               </h3>
//             </div>
//             <div className="relative z-10">
//               <h4 className="text-[17px] font-bold text-slate-950 mb-2">
//                 Client Satisfaction
//               </h4>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Rated 5-stars across platforms — we deliver exactly what your
//                 business needs.
//               </p>
//             </div>
//           </Reveal>

//           {/* Card 5: Our Clients in 30+ Countries (Middle & Right Columns, Bottom Row) */}
//           <Reveal
//             delay={0.5}
//             className="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
//           >
//             <div className="max-w-md">
//               <h4 className="text-[17px] font-bold text-slate-950 mb-2">
//                 Our Clients in 30+ Countries
//               </h4>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 We collaborate with startups and businesses across the US, Europe,
//                 and Asia.
//               </p>
//             </div>
            
//             {/* Flags Mockup */}
//             <div className="flex -space-x-3 mt-4 sm:mt-0">
//               {["us", "gb", "ca", "za", "br", "de", "bd"].map((code, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm flex items-center justify-center overflow-hidden bg-slate-100 relative"
//                 >
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img 
//                     src={`https://flagcdn.com/w80/${code}.png`} 
//                     alt={code} 
//                     className="w-full h-full object-cover absolute inset-0"
//                   />
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Reveal } from "../Reveal";
import { Globe, Box, Lightbulb, Code } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-24 bg-slate-50/50 font-tight overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">
            The Positive Force to Empower Growth
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[220px]">
          {/* Card 1: 24/7 Automation (Left Column, Full Height) */}
          <Reveal
            delay={0.1}
            className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4 flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-pink-100/50 relative overflow-hidden group shadow-sm bg-gradient-to-br from-[#fff0f7] via-[#ffe3f3] to-[#ffd1ea]"
          >
            {/* Subtle Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
              style={{
                backgroundImage: "linear-gradient(to right, #ffb6db 1px, transparent 1px), linear-gradient(to bottom, #ffb6db 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter drop-shadow-sm">
                24/7
              </h3>
            </div>
            <div className="relative z-10 mt-20 md:mt-0">
              <h4 className="text-xl font-bold text-slate-950 mb-3">
                Business Automation
              </h4>
              <p className="text-slate-700/90 text-[15px] leading-relaxed">
                Your website never sleeps. We build systems that sell products, manage inventory, and track data around the clock so you don't have to.
              </p>
            </div>
          </Reveal>

          {/* Card 2: Our Products (Top Middle) */}
          <Reveal
            delay={0.2}
            className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-center overflow-hidden"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[17px] font-bold text-slate-950">
                  Ready Solutions
                </h4>
                
                {/* Overlapping Icons */}
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#525CEB] border-[3px] border-white flex items-center justify-center shadow-sm z-40">
                    <Globe className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#9B51E0] border-[3px] border-white flex items-center justify-center shadow-sm z-30">
                    <Box className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F2994A] border-[3px] border-white flex items-center justify-center shadow-sm z-20">
                    <Lightbulb className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#00B8D9] border-[3px] border-white flex items-center justify-center shadow-sm z-10">
                    <Code className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                From E-commerce to School Management to Inventory—we have tested systems ready to deploy for your specific niche.
              </p>
            </div>
          </Reveal>

          {/* Card 3: 100% Ownership (Right Column, Top & Middle Rows) */}
          <Reveal
            delay={0.3}
            className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-blue-100/50 relative overflow-hidden group shadow-sm bg-gradient-to-br from-[#eff5ff] via-[#e2edff] to-[#d1e3ff]"
          >
            {/* Subtle Dot Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage: "radial-gradient(#93c5fd 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-6xl md:text-[4.5rem] font-black text-slate-950 tracking-tighter drop-shadow-sm leading-none">
                100%
              </h3>
            </div>
            <div className="relative z-10 mt-12 md:mt-0">
              <h4 className="text-[17px] font-bold text-slate-950 mb-3">
                Data Ownership
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stop relying on Facebook algorithms to find your customers. You completely own your platform, your store, and your business data.
              </p>
            </div>
          </Reveal>

          {/* Card 4: Zero Headaches (Middle Column, Middle Row) */}
          <Reveal
            delay={0.4}
            className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 bg-gradient-to-br from-[#ebf8ff] to-[#d6f0ff] rounded-3xl p-8 border border-sky-100/50 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
             {/* Subtle Grid Background */}
             <div
              className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
              style={{
                backgroundImage: "linear-gradient(to right, #bae6fd 1px, transparent 1px), linear-gradient(to bottom, #bae6fd 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-5xl md:text-[54px] font-black text-slate-950 tracking-tighter drop-shadow-sm">
                Zero
              </h3>
            </div>
            <div className="relative z-10">
              <h4 className="text-[17px] font-bold text-slate-950 mb-2">
                Tech Headaches
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                No jargon, no hidden fees, and no confusing setup. We handle the tech so you can focus on running your business.
              </p>
            </div>
          </Reveal>

          {/* Card 5: Built for the Global Market (Middle & Right Columns, Bottom Row) */}
          <Reveal
            delay={0.5}
            className="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="max-w-md">
              <h4 className="text-[17px] font-bold text-slate-950 mb-2">
                Built for the Global Market
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Whether you are a local shop in Bangladesh or a startup expanding internationally, our code meets strict global standards.
              </p>
            </div>
            
            {/* Flags Mockup */}
            <div className="flex -space-x-3 mt-4 sm:mt-0">
              {["us", "gb", "ca", "za", "br", "de", "bd"].map((code, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-[3px] border-white shadow-sm flex items-center justify-center overflow-hidden bg-slate-100 relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://flagcdn.com/w80/${code}.png`} 
                    alt={code} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}