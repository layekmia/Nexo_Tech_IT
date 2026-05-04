import { Reveal } from "../Reveal";

export default function TestiMonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            Real feedback from real businesses worldwide.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Nexo Tech IT built our school management system in under 4 weeks. The communication was professional, the delivery was on time, and the system works perfectly. Highly recommend to any school.",
              name: "James Richardson",
              role: "School Director — United Kingdom 🇬🇧",
            },
            {
              text: "We finally have complete control over our inventory. The system is fast, intuitive, and saves our team hours every week. The support team is always responsive and helpful.",
              name: "Sarah Mitchell",
              role: "Operations Manager — United States 🇺🇸",
            },
            {
              text: "The e-commerce platform they built for us increased our online sales by 60% in the first 3 months. Best technology investment we have ever made for our business.",
              name: "Thomas König",
              role: "Business Owner — Canada 🇨🇦",
            },
          ].map((t, i) => (
            <Reveal
              key={i}
              delay={0.1 * i}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative"
            >
              <div className="text-yellow-400 tracking-widest text-lg mb-4">
                ★★★★★
              </div>
              <p className="text-slate-700 italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
