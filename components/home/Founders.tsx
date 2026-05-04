import { Reveal } from "../Reveal";
import Image from "next/image";

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] mb-4">
            Meet the Founders
          </h2>
          <p className="text-slate-600 text-lg">
            We are a passionate founding team dedicated to building software
            that makes a real difference. As we grow, our team will expand to
            serve you even better.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {[
            {
              name: "Raihan Islam",
              role: "Co-Founder & CEO",
              desc: "A technology entrepreneur passionate about building affordable, world-class software for businesses globally. Dedicated to driving innovation and strategy.",
              image: "/team/founder_1.jpeg",
            },
            {
              name: "Layek Miah",
              role: "Co-Founder & CTO",
              desc: "Full-stack engineer with expertise in building scalable, high-performance web applications and leading technical architecture.",
              image: "/team/founder_2.jpeg",
            },
          ].map((member, i) => (
            <Reveal key={i} delay={0.1 * i} className="group">
              <div className="bg-slate-100 rounded-2xl aspect-square mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name} —{" "}
                <span className="text-primary font-medium text-base">
                  {member.role}
                </span>
              </h3>
              <p className="text-slate-600 leading-relaxed">{member.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
