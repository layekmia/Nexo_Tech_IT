import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Nexo Tech IT</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are a team of passionate developers and designers dedicated to building software that makes a real difference for businesses globally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Nexo Tech IT started with a simple vision: to make enterprise-grade software accessible to growing businesses around the world.
                </p>
                <p>
                  We noticed that many businesses were struggling with fragmented tools, outdated legacy systems, or overpriced software that didn't quite fit their needs.
                </p>
                <p>
                  Today, we provide both robust ready-made products and tailored custom solutions that help companies streamline their operations, increase revenue, and scale faster.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" className="bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400">
               Team Photo Placeholder
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-center">
            <Reveal delay={0} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">To empower businesses with innovative, reliable, and affordable technology solutions that drive growth and efficiency.</p>
            </Reveal>
            <Reveal delay={0.1} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">To be the trusted technology partner for companies worldwide, known for our excellence in software engineering and customer success.</p>
            </Reveal>
            <Reveal delay={0.2} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Quality code, transparent communication, continuous innovation, and an unwavering commitment to our clients' success.</p>
            </Reveal>
          </div>

          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Tech Stack</h2>
            <p className="text-slate-600">We use modern, scalable technologies to build our solutions.</p>
          </Reveal>

          <Reveal className="flex flex-wrap justify-center gap-4 mb-24">
            {["React", "Next.js", "TypeScript", "Node.js", "Laravel", "PostgreSQL", "MongoDB", "Tailwind CSS", "AWS", "Docker"].map((tech, i) => (
              <span key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 shadow-sm">
                {tech}
              </span>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
