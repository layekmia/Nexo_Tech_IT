import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    { name: "GlobalEd School Management", category: "Education", desc: "A comprehensive management system for a group of international schools." },
    { name: "TechStore E-Commerce", category: "Retail", desc: "High-performance online store handling thousands of daily transactions." },
    { name: "MediCore Healthcare ERP", category: "Healthcare", desc: "Custom ERP solution for a regional hospital network." },
    { name: "LogiTrack Inventory", category: "Logistics", desc: "Real-time inventory and supply chain tracking platform." },
    { name: "FinTech Dashboard", category: "Finance", desc: "Secure financial analytics dashboard for wealth management." },
    { name: "SkillUp LMS", category: "E-Learning", desc: "Custom learning management system for professional training." }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Portfolio</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore some of our recent work and see how we've helped businesses achieve their digital goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Reveal key={i} delay={0.1 * i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex items-center justify-center text-slate-400">
                  Project Image Placeholder
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-slate-600 text-sm flex-1 mb-6">{project.desc}</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary transition-colors mt-auto">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
