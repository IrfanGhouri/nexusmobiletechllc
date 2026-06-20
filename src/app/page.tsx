"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import {
  Clock,
  ShieldCheck,
  CheckCircle,
  UserCheck,
  MapPin,
  HelpCircle,
  Check,
} from "lucide-react";

export default function Home() {
  // Inline Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const services = [
    {
      title: "iPhone Repair",
      desc: "Fast OLED, digitizer, battery, and charging port repairs under 45 minutes using premium replacement parts.",
      img: "/images/iphone_repair.webp",
      href: "/lab/iphone-repair",
    },
    {
      title: "iPad & Tablet Repair",
      desc: "Expert touch glass diagnostics, LCD swaps, and power chip replacements for iPads and Android tablets.",
      img: "/images/ipad_repair.jpg",
      href: "/lab/ipad-tablet-repair",
    },
    {
      title: "Laptop & Desktop Repair",
      desc: "Hardware troubleshooting, broken screen repair, SSD/RAM speed upgrades, and motherboard micro-soldering.",
      img: "/images/laptop_repair.webp",
      href: "/lab/laptop-desktop-repair",
    },
    {
      title: "Game Console Repair",
      desc: "HDMI port repairs, overheating cleanups, and optical disc drive replacements for PS5, Xbox, and Switch.",
      img: "/images/console_repair.webp",
      href: "/lab/game-console-repair",
    },
  ];

  const issuesList = [
    "Screen & Panel Replacement",
    "Water Damage Recovery",
    "Mic & Speaker Replacement",
    "No Signal & Cellular Issues",
    "Charging Port Repairs",
    "Dead Battery Swaps",
  ];

  const testimonials = [
    {
      text: "The screen on my iPhone 15 Pro was completely shattered. I walked into their shop and 30 minutes later, it was like brand new. Friendly technician and fair pricing!",
      author: "David K.",
      location: "Cincinnati, OH",
    },
    {
      text: "I bought a refurbished MacBook Air here for college. The laptop is in pristine condition, battery life is outstanding, and it was hundreds of dollars cheaper than retail!",
      author: "Sarah L.",
      location: "Cincinnati, OH",
    },
    {
      text: "My PS5 stopped outputting video. They diagnosed a broken HDMI port, replaced it within an hour, and even cleaned out the dust. Great rates.",
      author: "Marcus T.",
      location: "Cincinnati, OH",
    },
  ];

  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow bg-white text-slate-800">
        {/* 1. HERO SECTION */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text content */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
                  Smartphones Shattered? <br />
                  <span className="text-secondary">We Repair It Fast.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-655 leading-relaxed font-normal">
                  Don&apos;t let a broken screen or a dead battery halt your day. We provide reliable, expert repair services for iPhones, iPads, laptops, and game consoles. Most repairs completed in under 45 minutes!
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-secondary hover:bg-secondary/95 shadow-sm transition-all"
                  >
                    Contact Us Now
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Repair lab image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-4/3 w-full rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <Image
                    src="/images/repair_lab.jpg"
                    alt="Mobile Repair Laboratory Workbench"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT US SECTION */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Left */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative aspect-4/3 w-full rounded-xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm">
                  <Image
                    src="/images/about_tech.webp"
                    alt="Technician repairing mobile motherboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                  Who We Are
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  Professional Repair Technicians
                </h2>
                <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                  Nexus Mobile Tech is a premier electronic repair shop with diagnostic laboratories in Cincinnati, OH. Our mission is simple: deliver high-quality, transparent, and ultra-fast hardware repairs to get you back online.
                </p>
                <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                  We utilize premium diagnostic gear, precision heat plates, and advanced micro-soldering tooling to resolve device issues. From basic screen swaps to complex board-level problems, our technicians handle it all.
                </p>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-secondary" />
                    <span>Certified Engineers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-secondary" />
                    <span>Store Parts Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BEST BUY USED IPHONES AND LAPTOPS */}
        <section className="relative bg-white border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Column 1: Used iPhones */}
            <div className="relative flex flex-col justify-end p-8 sm:p-12 lg:p-16 min-h-[800px] border-b md:border-b-0 md:border-r border-slate-200">
              <div className="absolute inset-0 bg-slate-900/60 z-10" />
              <Image
                src="/images/used_iphones.webp"
                alt="Refurbished iPhones for Sale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-20 space-y-3">
                <span className="text-xs font-bold text-primary tracking-widest uppercase font-display">
                  Certified Pre-Owned
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Used iPhones Shop
                </h3>
                <p className="text-slate-200 text-sm max-w-md leading-relaxed font-normal">
                  Get like-new unlocked iPhones tested across 30 points. Mint condition, fresh battery health, and verified warranty included.
                </p>
                <div className="pt-2">
                  <Link
                    href="/buy-used-iphones"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-primary transition-colors"
                  >
                    Browse iPhones &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Used Laptops */}
            <div className="relative flex flex-col justify-end p-8 sm:p-12 lg:p-16 min-h-[800px]">
              <div className="absolute inset-0 bg-slate-900/60 z-10" />
              <Image
                src="/images/used_laptops.webp"
                alt="Refurbished Laptops for Sale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-20 space-y-3">
                <span className="text-xs font-bold text-primary tracking-widest uppercase font-display">
                  Workstations & Ultrabooks
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Used Laptops Shop
                </h3>
                <p className="text-slate-200 text-sm max-w-md leading-relaxed font-normal">
                  Premium MacBooks and Windows PCs fully wiped and pre-configured. Superb performance for work, study, or gaming.
                </p>
                <div className="pt-2">
                  <Link
                    href="/buy-used-laptops"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-primary transition-colors"
                  >
                    Browse Laptops &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                What We Offer
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Our Repair Services
              </h2>
              <p className="text-slate-600 text-sm">
                Whether you drop your phone, spill liquid on your keyboard, or experience console errors, our dedicated laboratory delivers reliable diagnostics and repair.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                return (
                  <div
                    key={service.title}
                    className="bg-white rounded-xl border border-slate-250 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    {/* Body */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-550 leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline self-start"
                      >
                        Service Details &rarr;
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. WHAT WE CAN FIX SECTION */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                  Complete Diagnosis
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  Common Repairs We Handle
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don&apos;t just replace screens. Our lab is built to resolve hardware issues ranging from fluid damage to charging issues.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Instant Diagnostics:</strong> Walk in, hand over your device, and our technicians will run quick checks to identify the failure path.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {issuesList.map((issue) => {
                  return (
                    <div
                      key={issue}
                      className="p-4 bg-slate-50 border border-slate-250 rounded-xl shadow-xs flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-sm font-semibold text-slate-800 font-display">
                        {issue}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE US (BENTO GRID) */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                Our Guarantee
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Why Choose Nexus Mobile Tech
              </h2>
              <p className="text-slate-655 text-sm">
                We combine laboratory expertise, certified technicians, and customer-first store policies.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Highlight Card: 45 Minutes Repair */}
              <div className="md:col-span-2 bg-white rounded-xl p-6 border-2 border-primary shadow-xs flex flex-col justify-between min-h-[220px]">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md text-xs font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    Express service
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    45 Minutes Express Repairs
                  </h3>
                  <p className="text-slate-655 text-sm leading-relaxed">
                    Most standard smartphone screen replacements, charging port repairs, and battery swaps are performed on the spot. Sit down, wait, and get your device back within 45 minutes.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Fast turnaround guaranteed</span>
                </div>
              </div>

              {/* Bento Card 2: Best Repairs */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs min-h-[220px]">
                <div className="space-y-2">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Best Repairs
                  </h3>
                  <p className="text-slate-550 text-xs leading-relaxed">
                    Certified technicians inspect every solder joint, flex cable, and display panel under lab microscopes before certifying your hardware.
                  </p>
                </div>
                <span className="text-slate-400 text-xs font-semibold">Quality standard</span>
              </div>

              {/* Bento Card 3: No Appointment Needed */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs min-h-[220px]">
                <div className="space-y-2">
                  <UserCheck className="w-6 h-6 text-secondary" />
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    No Appointment Needed
                  </h3>
                  <p className="text-slate-550 text-xs leading-relaxed">
                    Simply walk in to either of our service locations in Cincinnati, OH. Our diagnostic workbench runs walk-in evaluations daily.
                  </p>
                </div>
                <span className="text-slate-400 text-xs font-semibold">Walk-in ready</span>
              </div>

              {/* Bento Card 4: Best Rates */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs min-h-[220px]">
                <div className="space-y-2">
                  <div className="text-lg font-bold text-secondary font-display">$</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Best Rates
                  </h3>
                  <p className="text-slate-550 text-xs leading-relaxed">
                    We source display panels and components directly to cut out middle-men, giving you premium parts and laboratory services at fair, competitive rates.
                  </p>
                </div>
                <span className="text-slate-400 text-xs font-semibold">Fair pricing</span>
              </div>

              {/* Bento Card 5: Check Warranty */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs min-h-[220px]">
                <div className="space-y-2">
                  <HelpCircle className="w-6 h-6 text-secondary" />
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Check Warranty
                  </h3>
                  <p className="text-slate-550 text-xs leading-relaxed">
                    Every hardware component we install comes with a 90-day parts warranty. We repair or replace it free of charge if any issues arise.
                  </p>
                </div>
                <span className="text-slate-400 text-xs font-semibold">Worry-free coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS SECTION */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                Reviews
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                What Our Customers Say
              </h2>
            </div>

            {/* Testimonials Simple Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-xs flex flex-col justify-between">
                  <p className="text-slate-655 text-sm italic leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-display">{t.author}</h4>
                    <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {t.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA & CONTACT FORM SECTION */}
        <section className="py-16 lg:py-24 bg-slate-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Ready to Get Your Device Fixed?
              </h2>
              <p className="text-slate-655 text-sm max-w-md mx-auto">
                Fill out this quick form and our team will contact you within 2 hours with a free estimate!
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center space-y-4 shadow-sm">
                <CheckCircle className="w-12 h-12 text-secondary animate-pulse" />
                <h3 className="text-xl font-bold text-slate-950 font-display">Form Submitted!</h3>
                <p className="text-slate-550 text-sm max-w-md">
                  Our staff will review your details and phone you directly. We look forward to reviving your device.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 bg-white p-6 sm:p-10 rounded-xl border border-slate-250 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="(513) 302-1801"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Device Model & Issue</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="iPhone 14 screen replacement / Dell laptop overheating..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/95 text-white font-bold text-sm py-3 px-6 rounded-lg transition-all cursor-pointer shadow-md shadow-secondary/15"
                >
                  Send Free Quote Request
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
