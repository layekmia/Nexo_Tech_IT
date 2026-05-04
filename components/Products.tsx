import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { productsData } from "@/constants/products";

export const Products = () => {
  return (
    <section className="py-24 bg-slate-50" id="products">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Custom Digital Solutions Helping
            <br /> Businesses Grow Every Day
          </h2>
        </Reveal>

        <div className="space-y-24">
          {productsData.map((product, index) => {
            const isEven = index % 2 !== 0; // 0-indexed: 0 is odd in visual layout, 1 is even. Wait, index 0 is first product, so visually "odd". Let's stick to index 0, 2, 4 being the first layout, index 1, 3, 5 being second layout.

            return (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content Side */}
                <Reveal
                  direction={isEven ? "left" : "right"}
                  className={`order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${product.categoryStyles}`}
                  >
                    {product.category}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Request a Demo &rarr;
                  </Link>
                </Reveal>

                {/* Image Side */}
                <Reveal
                  direction={isEven ? "right" : "left"}
                  className={`order-1 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center w-full`}
                >
                  <Image
                    src={
                      product.image ||
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    }
                    alt={product.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-xl border border-slate-100/50"
                    unoptimized
                  />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
