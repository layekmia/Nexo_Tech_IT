import { blogsData } from "@/constants/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-600 font-medium truncate max-w-[200px]">{post.title}</span>
          </div>
        </div>

        {/* Header Section */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-medium text-slate-500 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            {post.desc}
          </p>
        </header>

      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-16">
        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div 
          className="prose prose-lg prose-slate prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Author / CTA Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
              N
            </div>
            <div>
              <div className="font-bold text-slate-900">Nexo Tech IT Team</div>
              <div className="text-sm text-slate-500">Expert Software Engineers</div>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-md"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </article>
  );
}
