import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { productsData } from "@/constants/products";

export const Products = () => {
  return (
    <section className="py-24 bg-white font-tight" id="products">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal className="text-center mb-20 flex flex-col items-center">
          {/* Gradient Border Badge */}
          <div className="mx-auto w-fit p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mb-8">
            <div className="bg-slate-50 px-8 py-2 rounded-full">
              <span className="text-slate-900 font-semibold text-[15px]">Our Products</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-slate-800 tracking-tight leading-[1.15]">
            Our Products Successfully Serving <br className="hidden md:block" /> Customers 
          </h2>
        </Reveal>

        <div className="flex flex-col gap-16">
          {productsData.map((product, index) => {
            return (
              <Reveal key={product.id} delay={0.1}>
                <div
                  className={`flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-12 rounded-3xl gap-8 lg:gap-12 mx-auto max-w-6xl ${product.bgColor}`}
                >
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    {/* Logo Mockup */}
                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="flex -space-x-1 transform rotate-12">
                        <div className={`w-2 h-4 rounded-sm ${product.logoIconColor}`}></div>
                        <div className={`w-2 h-4 rounded-sm ${product.logoIconColor} opacity-80 -translate-y-1.5`}></div>
                        <div className={`w-2 h-4 rounded-sm ${product.logoIconColor} opacity-60 translate-y-1.5`}></div>
                      </div>
                      <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                        {product.logoText}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-950 mb-4 leading-[1.15] tracking-tight">
                      {product.title}
                    </h3>
                    
                    <p className="text-slate-800/80 text-base md:text-lg leading-relaxed mb-8 max-w-[95%]">
                      {product.description}
                    </p>

                    <Link
                      href={product.link}
                      target="_blank"
                      className={`inline-flex items-center justify-center text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition-all shadow-sm hover:shadow-md hover:scale-105 ${product.btnColor} ${product.btnHoverColor}`}
                    >
                      Take A Tour
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative w-full aspect-[4/3] rounded-3xl md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white/40 overflow-hidden group">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
