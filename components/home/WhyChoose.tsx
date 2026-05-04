import {
  MessageSquare,
  Target,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  Headphones,
} from "lucide-react";
import { Reveal } from "../Reveal";

export default function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
We Help You Build Systems That Actually Work for Your Business
          </h2>
          <p className="text-slate-600 text-lg">
           We focus on simple, practical solutions that help you save time, stay organized, and grow your business — without unnecessary complexity.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            
  {
    icon: MessageSquare,
    title: "Simple & Clear Communication",
    desc: "We explain everything in a way you understand. No confusing technical terms — just clear ideas and honest advice."
  },
  {
    icon: Target,
    title: "Focused on Your Real Problems",
    desc: "We don’t just build what you ask. We understand how your business works and create solutions that actually make your work easier."
  },
  {
    icon: ShieldCheck,
    title: "Honest Work, No Surprises",
    desc: "Clear pricing, realistic timelines, and no hidden conditions. What we promise is exactly what we deliver."
  },
  {
    icon: TrendingUp,
    title: "Built to Grow With You",
    desc: "Whether you're just starting or expanding, we build systems that can grow as your business grows."
  },
  {
    icon: HeartHandshake,
    title: "We Work Like Your Partner",
    desc: "We don’t see you as just a client. We work with you, understand your goals, and help you move forward step by step."
  },
  {
    icon: Headphones,
    title: "Support After Delivery",
    desc: "We don’t disappear after launch. We stay available to help, update, and improve your system whenever needed."
  },

          ].map((feature, i) => (
            <Reveal
              key={i}
              delay={0.1 * i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl h-fit w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}