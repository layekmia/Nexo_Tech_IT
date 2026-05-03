import { CheckCircle2, MonitorPlay, GraduationCap, ShoppingCart, Boxes } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: "school-ms",
      tag: "School Administration",
      icon: GraduationCap,
      name: "School Management System",
      desc: "The all-in-one school administration platform. Manage students, teachers, attendance, fees, exams, grades, timetables, and parent communication — all from a single powerful dashboard. Trusted by schools across the UK and USA.",
      features: ["Student & Teacher Management", "Attendance & Timetable System", "Fee Collection & Invoicing", "Exam & Grade Management", "Parent Communication Portal", "Reports & Analytics Dashboard"],
      pricing: { starter: "$199", growth: "$349" }
    },
    {
      id: "lms",
      tag: "Online Education",
      icon: MonitorPlay,
      name: "Learning Management System",
      desc: "Build, market, and sell online courses, memberships, and digital products from a single platform. Deliver engaging learning experiences with video lessons, quizzes, live classes, and automated certificates.",
      features: ["Course Creation & Management", "Video Lessons & Live Classes", "Student Progress Tracking", "Automated Certificates", "Built-in Payment Gateway", "Mobile-Friendly Learning App"],
      pricing: { starter: "$149", growth: "$299" }
    },
    {
      id: "ecommerce",
      tag: "Online Commerce",
      icon: ShoppingCart,
      name: "E-Commerce Platform",
      desc: "Launch your complete online store and start selling globally within days. Manage products, process payments, track orders, and grow your business with powerful built-in analytics. Designed for retailers and brands.",
      features: ["Product & Inventory Management", "Secure Multi-Currency Payments", "Order Tracking & Management", "Sales Analytics Dashboard", "Discount & Coupon System", "Mobile-Optimized Storefront"],
      pricing: { starter: "$179", growth: "$329" }
    },
    {
      id: "inventory",
      tag: "Business Operations",
      icon: Boxes,
      name: "Inventory Management System",
      desc: "Take complete control of your stock, suppliers, and supply chain with our smart inventory platform. Get real-time stock alerts, manage multiple locations, track purchase orders, and make data-driven decisions.",
      features: ["Real-Time Stock Tracking", "Multi-Location Management", "Supplier & Purchase Orders", "Low Stock Alerts", "Barcode Scanning Support", "Detailed Reports & Analytics"],
      pricing: { starter: "$129", growth: "$249" }
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Products</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Battle-tested, ready-made software solutions designed to scale your business. 
              Fully customizable to your exact requirements.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-20 space-y-32">
        {products.map((product, i) => (
          <section key={product.id} id={product.id} className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <Reveal className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-semibold mb-6 shadow-sm">
                  <product.icon className="w-4 h-4 text-primary" />
                  <span className="text-slate-700">{product.tag}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{product.name}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {product.desc}
                </p>
                
                <h4 className="font-bold text-slate-900 mb-4">Core Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {product.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md">
                    Request Demo
                  </Link>
                </div>
              </Reveal>

              <Reveal direction="left" className="lg:col-span-5 space-y-6">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
                  <div className="relative z-10 text-slate-400 font-medium flex flex-col items-center">
                    <MonitorPlay className="w-12 h-12 mb-2 opacity-20" />
                    Interactive Demo Placeholder
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-6 text-center">Pricing Plans</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div>
                        <span className="block font-bold text-slate-900">Starter</span>
                        <span className="text-xs text-slate-500">Basic features</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-xl text-primary">{product.pricing.starter}</span>
                        <span className="text-xs text-slate-500">/mo</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">POPULAR</div>
                      <div>
                        <span className="block font-bold text-slate-900">Growth</span>
                        <span className="text-xs text-slate-500">Advanced features</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-xl text-primary">{product.pricing.growth}</span>
                        <span className="text-xs text-slate-500">/mo</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div>
                        <span className="block font-bold text-slate-900">Enterprise</span>
                        <span className="text-xs text-slate-500">Custom solutions</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-sm text-slate-900">Custom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
