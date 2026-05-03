import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { title: "The Future of E-Commerce in 2026", category: "E-Commerce", date: "May 1, 2026", readTime: "5 min read", desc: "Discover the latest trends shaping the future of online retail." },
    { title: "Why Custom Software Beats Off-The-Shelf", category: "Technology", date: "Apr 28, 2026", readTime: "7 min read", desc: "An in-depth look at the long-term ROI of building custom software solutions." },
    { title: "Securing Your Digital Assets in a Cloud-First World", category: "Security", date: "Apr 15, 2026", readTime: "6 min read", desc: "Best practices for maintaining data security when scaling your infrastructure." },
    { title: "How LMS Platforms are Revolutionizing Corporate Training", category: "E-Learning", date: "Apr 2, 2026", readTime: "4 min read", desc: "Learn how modern learning management systems increase employee retention." },
    { title: "Maximizing Efficiency with Smart Inventory Management", category: "Operations", date: "Mar 20, 2026", readTime: "8 min read", desc: "Reduce stockouts and overstock with automated inventory tracking." },
    { title: "Choosing the Right Tech Stack for Your Startup", category: "Development", date: "Mar 10, 2026", readTime: "10 min read", desc: "A comprehensive guide to selecting the best technologies for your next big idea." },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Blog</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Nexo Tech IT team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Reveal key={i} delay={0.1 * i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col">
                <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center text-slate-400 relative overflow-hidden">
                  Blog Image Placeholder
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                     <span className="text-primary font-bold uppercase tracking-wider">{post.category}</span>
                     <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                     <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  <p className="text-slate-600 text-sm flex-1 mb-6">{post.desc}</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
