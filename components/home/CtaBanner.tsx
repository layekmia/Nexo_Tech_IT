import Link from "next/link";
import { Reveal } from "../Reveal";
import { Check } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <Reveal className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Book a free 15-minute demo call and see exactly how our software can
            save you time and grow your revenue. No commitment. No pressure.
            Just results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105 mb-8"
          >
            Book Your Free Demo &rarr;
          </Link>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/90 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" /> Free 15-min demo call
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" /> Reply within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" /> No commitment
              required
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
