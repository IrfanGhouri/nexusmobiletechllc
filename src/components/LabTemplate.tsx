import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ChevronRight } from "lucide-react";

interface LabTemplateProps {
  title: string;
  description: string;
  imageSrc: string;
  content: string;
  bulletPoints?: string[];
  breadcrumbCategory?: string;
}

export default function LabTemplate({
  title,
  description,
  imageSrc,
  content,
  bulletPoints = [],
  breadcrumbCategory = "Lab Services",
}: LabTemplateProps) {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow pt-16 bg-slate-900 text-white">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(32,82,201,0.15),rgba(255,255,255,0))] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-400">{breadcrumbCategory}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* 300 Word Content (Left Column) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Professional Diagnostics & Repair
              </h2>
              <div 
                className="text-slate-300 leading-relaxed text-base space-y-4 font-normal"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {bulletPoints.length > 0 && (
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <h3 className="text-lg font-bold text-primary mb-4 font-display">Key Repairs We Offer:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-2.5 text-slate-350 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Image (Right Column) */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 aspect-4/3 w-full bg-slate-950">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
