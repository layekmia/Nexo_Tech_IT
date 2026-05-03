import { Check, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. No hidden fees.
            </p>
            <div className="mt-8 inline-flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
              <button className="px-6 py-2 rounded-full bg-primary text-white font-medium text-sm">Monthly</button>
              <button className="px-6 py-2 rounded-full text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors">Yearly (Save 20%)</button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Reveal delay={0} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col mt-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6">Perfect for small businesses starting out.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">$149</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Basic Features", "Up to 5 Users", "Standard Support", "10GB Storage"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <Check className="w-5 h-5 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
                Get Started
              </Link>
            </Reveal>

            {/* Growth (Popular) */}
            <Reveal delay={0.1} className="bg-primary rounded-3xl p-8 border border-primary shadow-xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">Ideal for growing teams and businesses.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$299</span>
                <span className="text-primary-foreground/80">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Everything in Starter", "Up to 20 Users", "Priority Support", "50GB Storage", "Advanced Analytics"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <Check className="w-5 h-5 text-green-300" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center bg-white text-primary hover:bg-slate-50 px-6 py-3 rounded-full font-bold transition-colors shadow-md">
                Get Started
              </Link>
            </Reveal>

            {/* Enterprise */}
            <Reveal delay={0.2} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col mt-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">For large scale organizations.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Everything in Growth", "Unlimited Users", "24/7 Dedicated Support", "Unlimited Storage", "Custom Integrations"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <Check className="w-5 h-5 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                Contact Sales
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
           <p className="text-slate-500 font-medium mb-4">We accept:</p>
           <div className="flex justify-center items-center gap-6">
              <span className="font-bold text-slate-800">Wise</span>
              <span className="text-slate-300">•</span>
              <span className="font-bold text-slate-800">Payoneer</span>
              <span className="text-slate-300">•</span>
              <span className="font-bold text-slate-800">USDT/USDC Crypto</span>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "Can I customize the products?", a: "Yes, all our ready-made products are fully customizable to match your brand and business workflow." },
              { q: "Do you offer free trials?", a: "We offer a free 15-minute demo and a guided tour of our platforms before you make any commitment." },
              { q: "What payment methods do you accept?", a: "We accept Wise, Payoneer, and Crypto (USDT/USDC). Stripe and PayPal will be available soon." },
              { q: "How long does setup take?", a: "Ready-made products can be deployed within days. Custom software depends on the project scope." },
              { q: "What support is included?", a: "All plans include support. Growth and Enterprise plans include priority and dedicated 24/7 support." },
              { q: "Is there a refund policy?", a: "We work on milestone-based payments to ensure 100% satisfaction throughout the development process." }
            ].map((faq, i) => (
              <Reveal key={i} delay={0.1 * i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                   <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                   {faq.q}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
