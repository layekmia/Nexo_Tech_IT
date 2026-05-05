import { Monitor, Store, BookOpen, LayoutDashboard } from "lucide-react";
import { Reveal } from "../Reveal";

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mx-auto w-fit p-[1px] rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mb-8">
            <div className="bg-slate-50 px-8 py-2 rounded-full">
              <span className="text-slate-900 font-semibold text-[15px]">
                What we do
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solutions Tailored to Your Business Goals
          </h2>
          <p className="text-slate-600 text-lg">
            We don’t just write code. We build simple, reliable tools to help
            you save time, automate your sales, and grow your business.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Monitor,
              title: "Professional Business Websites",
              desc: "Build instant trust with your customers. We create clean, fast websites that clearly explain what you do and turn visitors into leads.",
            },
            {
              icon: Store,
              title: "E-commerce & F-commerce Stores",
              desc: "Tired of managing orders through Facebook messages? We build fully automated online stores that sell for you 24/7 without the hassle.",
            },
            {
              icon: BookOpen,
              title: "LMS & School Management",
              desc: "Eliminate mountains of paperwork. Easily manage student attendance, fee tracking, and online video courses securely in one digital portal.",
            },
            {
              icon: LayoutDashboard,
              title: "Smart Inventory & Custom Systems",
              desc: "Replace messy notebooks and spreadsheets. Track your stock, manage your staff, and run your daily operations from a simple dashboard.",
            },
          ].map((service, i) => (
            <Reveal
              key={i}
              delay={0.1 * i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
