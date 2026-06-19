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
      <main className="flex-grow bg-white text-slate-800">
        {/* Simple Banner Section */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span>{breadcrumbCategory}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 font-display">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (Write-up) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Professional Diagnostics & Repair
              </h2>
              <div 
                className="text-slate-650 leading-relaxed text-sm sm:text-base space-y-4 font-normal"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {bulletPoints.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 font-display">
                    Key Services Offered:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column (Simple Image) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-slate-200 aspect-4/3 w-full bg-slate-50 shadow-sm">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
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
