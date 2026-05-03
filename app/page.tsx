import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Code2, Package, Smartphone, Shield, Zap, CircleDollarSign, Lock, Settings2, Globe, HeartHandshake, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Trusted by businesses in USA, UK & Europe
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                  We Build Software That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Powers</span><br /> Growing Businesses Worldwide
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                  From ready-made systems to fully custom software — we help schools, retailers, and businesses across USA, UK, Europe & Canada work smarter and scale faster.
                </p>
              </Reveal>
              
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/products" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-primary/25 text-center flex items-center justify-center">
                    Explore Our Products
                  </Link>
                  <Link href="/contact" className="bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary px-8 py-3.5 rounded-full font-medium transition-colors text-center flex items-center justify-center">
                    Book a Free Demo &rarr;
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500 font-medium">
                  <span className="flex -space-x-2">
                    {/* Placeholder for small avatar images */}
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px]">US</div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px]">UK</div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px]">CA</div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px]">DE</div>
                  </span>
                  <p>Serving clients in 🇺🇸 USA 🇬🇧 UK 🇨🇦 Canada 🇩🇪 Germany 🇨🇭 Switzerland 🇳🇱 Netherlands</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} direction="left" className="relative lg:h-[600px] flex items-center justify-center">
              {/* Floating Mockup Placeholder */}
              <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-tr from-blue-100 to-primary/20 rounded-3xl p-8 shadow-2xl flex items-center justify-center overflow-hidden border border-white/50 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-3xl"></div>
                 <div className="relative z-10 w-full h-full bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex flex-col gap-4 animate-[float_6s_ease-in-out_infinite]">
                    {/* Fake UI elements */}
                    <div className="h-8 w-full border-b border-slate-100 flex items-center gap-2 pb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex gap-4 h-full">
                      <div className="w-1/4 bg-slate-50 rounded-lg h-full"></div>
                      <div className="w-3/4 flex flex-col gap-4">
                        <div className="h-32 bg-primary/10 rounded-lg w-full"></div>
                        <div className="flex gap-4">
                           <div className="h-24 bg-slate-50 rounded-lg w-1/2"></div>
                           <div className="h-24 bg-slate-50 rounded-lg w-1/2"></div>
                        </div>
                        <div className="h-full bg-slate-50 rounded-lg w-full"></div>
                      </div>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">The Positive Force To Empower Growth</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "4+", label: "Products Built", desc: "Battle-tested software products serving businesses worldwide." },
              { num: "50+", label: "Happy Clients", desc: "Businesses across USA, UK, Europe trust our software." },
              { num: "100%", label: "Client Satisfaction", desc: "5-star rated across all platforms — we deliver results." },
              { num: "30+", label: "Countries Reached", desc: "Our software is actively used in 30+ countries worldwide." },
            ].map((stat, i) => (
              <Reveal key={i} delay={0.1 * i} direction="up" className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-5xl font-bold text-primary mb-2">{stat.num}</h3>
                <p className="text-lg font-semibold text-slate-900 mb-3">{stat.label}</p>
                <p className="text-slate-500 text-sm">{stat.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-50" id="products">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Reveal className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Products Successfully Serving<br/> Customers Worldwide</h2>
          </Reveal>

          <div className="space-y-24">
            {/* Product 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">School Administration</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">School Management System</h3>
                <p className="text-slate-600 mb-6 text-lg">
                  The all-in-one school administration platform. Manage students, teachers, attendance, fees, exams, grades, timetables, and parent communication — all from a single powerful dashboard. Trusted by schools across the UK and USA.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Student & Teacher Management", "Attendance & Timetable System", 
                    "Fee Collection & Invoicing", "Exam & Grade Management",
                    "Parent Communication Portal", "Reports & Analytics Dashboard"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Request a Demo &rarr;
                </Link>
              </Reveal>
              <Reveal direction="left" className="order-1 lg:order-2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-slate-400 font-medium">Software Mockup Placeholder</div>
              </Reveal>
            </div>

            {/* Product 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-slate-400 font-medium">Software Mockup Placeholder</div>
              </Reveal>
              <Reveal direction="left">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">Online Education</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Learning Management System (LMS)</h3>
                <p className="text-slate-600 mb-6 text-lg">
                  Build, market, and sell online courses, memberships, and digital products from a single platform. Deliver engaging learning experiences with video lessons, quizzes, live classes, and automated certificates. Perfect for educators, coaches, and training companies worldwide.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Course Creation & Management", "Video Lessons & Live Classes", 
                    "Student Progress Tracking", "Automated Certificates",
                    "Built-in Payment Gateway", "Mobile-Friendly Learning App"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Request a Demo &rarr;
                </Link>
              </Reveal>
            </div>

            {/* Product 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">Online Commerce</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">E-Commerce Platform</h3>
                <p className="text-slate-600 mb-6 text-lg">
                  Launch your complete online store and start selling globally within days. Manage products, process payments, track orders, and grow your business with powerful built-in analytics. Designed for retailers and brands in USA, UK, and Europe.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Product & Inventory Management", "Secure Multi-Currency Payments", 
                    "Order Tracking & Management", "Sales Analytics Dashboard",
                    "Discount & Coupon System", "Mobile-Optimized Storefront"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Request a Demo &rarr;
                </Link>
              </Reveal>
              <Reveal direction="left" className="order-1 lg:order-2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-slate-400 font-medium">Software Mockup Placeholder</div>
              </Reveal>
            </div>

            {/* Product 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-slate-400 font-medium">Software Mockup Placeholder</div>
              </Reveal>
              <Reveal direction="left">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">Business Operations</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Inventory Management System</h3>
                <p className="text-slate-600 mb-6 text-lg">
                  Take complete control of your stock, suppliers, and supply chain with our smart inventory platform. Get real-time stock alerts, manage multiple locations, track purchase orders, and make data-driven decisions with powerful reporting tools.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Real-Time Stock Tracking", "Multi-Location Management", 
                    "Supplier & Purchase Orders", "Low Stock Alerts",
                    "Barcode Scanning Support", "Detailed Reports & Analytics"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Request a Demo &rarr;
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Reveal className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Don't Just Build Software. We Build Solutions.</h2>
            <p className="text-slate-600 text-lg">
              From custom development to ready-made products — we deliver everything your business needs to grow.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Code2, title: "Custom Software Development", desc: "Tailor-made software built exactly to your business requirements. Web apps, SaaS platforms, APIs, enterprise systems — we build it all with clean, scalable code." },
              { icon: Package, title: "Ready-Made Product Licensing", desc: "Deploy our battle-tested software products for your business in days, not months. Fully customizable to match your brand, workflow, and business requirements." },
              { icon: Smartphone, title: "Web & Mobile Development", desc: "Modern, fast, and scalable web and mobile applications built with cutting-edge technology. From MVP launch to full enterprise product — we handle every stage." },
              { icon: Shield, title: "IT Consulting & Support", desc: "Strategic tech advice and long-term support to keep your systems running at peak performance. We become your trusted technology partner for the long run." },
            ].map((service, i) => (
              <Reveal key={i} delay={0.1 * i} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Hundreds of Businesses Choose Nexo Tech IT</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "We deliver projects on time, every time — no delays, no excuses." },
              { icon: CircleDollarSign, title: "Affordable Pricing", desc: "Enterprise-quality software at prices that make sense for growing businesses." },
              { icon: Lock, title: "Secure & GDPR Ready", desc: "All products are built security-first and fully compliant with GDPR for European clients." },
              { icon: Settings2, title: "100% Customizable", desc: "Every product is tailored exactly to your brand, workflow, and business needs." },
              { icon: Globe, title: "International Experience", desc: "Actively serving clients across USA, UK, Europe, and Canada with professional standards." },
              { icon: HeartHandshake, title: "Long-Term Support", desc: "We don't disappear after delivery. Ongoing maintenance, updates, and dedicated support always included." },
            ].map((feature, i) => (
              <Reveal key={i} delay={0.1 * i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded-lg h-fit">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 text-lg">Real feedback from real businesses worldwide.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Nexo Tech IT built our school management system in under 4 weeks. The communication was professional, the delivery was on time, and the system works perfectly. Highly recommend to any school.",
                name: "James Richardson", role: "School Director — United Kingdom 🇬🇧"
              },
              {
                text: "We finally have complete control over our inventory. The system is fast, intuitive, and saves our team hours every week. The support team is always responsive and helpful.",
                name: "Sarah Mitchell", role: "Operations Manager — United States 🇺🇸"
              },
              {
                text: "The e-commerce platform they built for us increased our online sales by 60% in the first 3 months. Best technology investment we have ever made for our business.",
                name: "Thomas König", role: "Business Owner — Canada 🇨🇦"
              }
            ].map((t, i) => (
              <Reveal key={i} delay={0.1 * i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative">
                <div className="text-yellow-400 tracking-widest text-lg mb-4">★★★★★</div>
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

      {/* Payment Methods Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Simple International Payments</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto">We accept hassle-free international payment methods trusted by businesses worldwide.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
              {[
                { name: "Wise", desc: "Fast bank transfers worldwide", icon: "💸" },
                { name: "Payoneer", desc: "Global payment platform", icon: "💳" },
                { name: "Crypto", desc: "USDT / USDC accepted", icon: "🪙" },
              ].map((p, i) => (
                <div key={i} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <span className="text-2xl">{p.icon}</span>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 leading-tight">{p.name}</h4>
                    <span className="text-xs text-slate-500">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400">Stripe & PayPal coming soon</p>
          </Reveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <Reveal className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Book a free 15-minute demo call and see exactly how our software can save you time and grow your revenue. No commitment. No pressure. Just results.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105 mb-8">
              Book Your Free Demo &rarr;
            </Link>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/90 text-sm font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-300" /> Free 15-min demo call</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-300" /> Reply within 24 hours</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-300" /> No commitment required</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 text-lg">
              Passionate developers and designers dedicated to building software that makes a real difference.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Founder & CEO", desc: "A technology entrepreneur passionate about building affordable, world-class software for businesses globally." },
              { name: "Jane Smith", role: "Lead Developer", desc: "Full-stack engineer with expertise in building scalable, high-performance web applications." },
              { name: "Alex Johnson", role: "UI/UX Designer", desc: "Creating intuitive, beautiful interfaces that users love and businesses rely on every day." },
            ].map((member, i) => (
              <Reveal key={i} delay={0.1 * i} className="group">
                <div className="bg-slate-100 rounded-2xl aspect-square mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                    Photo Placeholder
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name} — <span className="text-primary font-medium text-base">{member.role}</span></h3>
                <p className="text-slate-600 leading-relaxed">{member.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
