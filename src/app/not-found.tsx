import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow bg-white text-slate-800 flex flex-col justify-center min-h-[60vh]">
        {/* Simple 404 Section */}
        <section className="py-20 flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="max-w-md mx-auto space-y-5 flex flex-col items-center">
              <div className="p-3 bg-slate-50 border border-slate-200 text-secondary rounded-xl">
                <FileQuestion className="w-10 h-10" />
              </div>
              <h1 className="text-6xl sm:text-7xl font-extrabold text-slate-900 font-display">
                404
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 font-display">
                Page Not Found
              </h2>
              <p className="text-slate-550 text-sm leading-relaxed">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-secondary hover:bg-secondary/95 shadow-sm transition-all"
                >
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
                >
                  Contact Support
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
