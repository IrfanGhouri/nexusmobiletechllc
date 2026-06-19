import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { FileQuestion, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow pt-16 bg-slate-900 text-white flex flex-col justify-center min-h-[70vh]">
        {/* Banner / 404 Section */}
        <section className="relative overflow-hidden py-24 lg:py-32 flex-grow flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(32,82,201,0.15),rgba(255,255,255,0))] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <div className="max-w-md mx-auto space-y-6 flex flex-col items-center">
              <div className="p-4 bg-slate-950 border border-slate-800 text-primary rounded-2xl animate-bounce">
                <FileQuestion className="w-12 h-12" />
              </div>
              <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-secondary font-display">
                404
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Page Not Found
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-secondary hover:bg-secondary/95 transition-all shadow-lg shadow-secondary/20 hover:scale-[1.03]"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-350 hover:text-white bg-slate-950 border border-slate-800 transition-all hover:scale-[1.03]"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
