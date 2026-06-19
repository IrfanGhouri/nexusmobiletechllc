"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Clock,
  ShieldCheck,
  Zap,
  Activity,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  UserCheck,
  CheckCircle,
  ThumbsUp,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const bestBuyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const fixRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Testimonials Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "The OLED screen on my iPhone 15 Pro was completely shattered. I walked into their shop and 30 minutes later, it was like brand new. Incredible service, and the technician was extremely transparent about the pricing!",
      author: "David K.",
      location: "Cincinnati, OH",
      rating: 5,
    },
    {
      text: "I bought a refurbished MacBook Air here for college. The laptop is in pristine condition, battery life is outstanding, and it was hundreds of dollars cheaper than retail! Highly recommend checking their shop before buying new.",
      author: "Sarah L.",
      location: "Des Plaines, IL",
      rating: 5,
    },
    {
      text: "My PS5 stopped outputting video. The guys diagnosed a broken HDMI port, replaced it within an hour, and even cleaned out the dust. Fair rates and top-tier micro-soldering expertise.",
      author: "Marcus T.",
      location: "Cincinnati, OH",
      rating: 5,
    },
    {
      text: "Fantastic tablet screen replacement. Friendly staff, professional laboratory workbench setups, and very fast turnaround times. The new screen response is flawless.",
      author: "Emily R.",
      location: "Des Plaines, IL",
      rating: 5,
    },
  ];

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

  useEffect(() => {
    // GSAP ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Entrance
    const heroElements = heroRef.current?.querySelectorAll(".animate-hero");
    if (heroElements) {
      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }

    // Scroll trigger fade-ins for sections
    const scrollSections = [
      { ref: aboutRef, trigger: aboutRef.current },
      { ref: bestBuyRef, trigger: bestBuyRef.current },
      { ref: servicesRef, trigger: servicesRef.current },
      { ref: fixRef, trigger: fixRef.current },
      { ref: whyRef, trigger: whyRef.current },
      { ref: testimonialRef, trigger: testimonialRef.current },
      { ref: ctaRef, trigger: ctaRef.current },
    ];

    scrollSections.forEach((section) => {
      if (section.trigger) {
        gsap.fromTo(
          section.trigger,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section.trigger,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const services = [
    {
      title: "iPhone Repair",
      desc: "Fast OLED, digitizer, battery, and charging port repairs under 45 minutes using premium replacement parts.",
      img: "/images/iphone_repair.png",
      href: "/lab/iphone-repair",
      icon: Smartphone,
    },
    {
      title: "iPad & Tablet Repair",
      desc: "Expert touch glass diagnostics, LCD swaps, and power chip replacements for iPads and Android tablets.",
      img: "/images/ipad_repair.png",
      href: "/lab/ipad-tablet-repair",
      icon: Tablet,
    },
    {
      title: "Laptop & Desktop Repair",
      desc: "Hardware troubleshooting, broken screen repair, SSD/RAM speed upgrades, and motherboard micro-soldering.",
      img: "/images/laptop_repair.png",
      href: "/lab/laptop-desktop-repair",
      icon: Laptop,
    },
    {
      title: "Game Console Repair",
      desc: "HDMI port repairs, overheating cleanups, and optical disc drive replacements for PS5, Xbox, and Switch.",
      img: "/images/console_repair.png",
      href: "/lab/game-console-repair",
      icon: Gamepad2,
    },
  ];

  const issuesList = [
    { name: "Screen & Panel Replacement", icon: Smartphone },
    { name: "Water Damage Recovery", icon: Activity },
    { name: "Mic & Speaker Replacement", icon: ThumbsUp },
    { name: "No Signal & Cellular Issues", icon: Zap },
    { name: "Charging Port Repairs", icon: ArrowRight },
    { name: "Dead Battery Swaps", icon: Clock },
  ];

  return (
    <SmoothScroll>
      <Header />
      <main className="flex-grow bg-slate-900 text-white overflow-hidden">
        {/* 1. HERO SECTION */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-24 pb-16 lg:pb-24 overflow-hidden bg-slate-950 border-b border-slate-800"
        >
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* 1st Column: Text content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="animate-hero inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-primary rounded-full text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Premium Diagnostics & Repair
                </div>
                <h1 className="animate-hero text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-display">
                  Smartphones Shattered? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-secondary">
                    We Revive Your Tech.
                  </span>
                </h1>
                <p className="animate-hero text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
                  Don&apos;t let a broken screen or a dead battery halt your day. We provide expert, certified repair services for iPhones, iPads, laptops, and game consoles. Most repairs completed in under 45 minutes!
                </p>
                <div className="animate-hero flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-secondary hover:bg-secondary/95 border border-transparent shadow-lg shadow-secondary/20 hover:scale-[1.03] transition-all"
                  >
                    Contact Us Now
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* 2nd Column: Repair lab image */}
              <div className="lg:col-span-6 relative animate-hero">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-md opacity-30" />
                <div className="relative aspect-4/3 w-full rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                  <Image
                    src="/images/repair_lab.png"
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
        <section
          ref={aboutRef}
          className="py-20 lg:py-28 bg-slate-900 border-b border-slate-850"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image Left */}
              <div className="lg:col-span-5 relative group order-2 lg:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-300" />
                <div className="relative aspect-4/3 w-full rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-xl">
                  <Image
                    src="/images/about_tech.png"
                    alt="Technician repairing mobile motherboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="text-xs font-bold text-accent uppercase tracking-widest font-display">
                  Who We Are
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  We are Master Craftsmen of Modern Micro-Electronics
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Nexus Mobile Tech is a premier electronic repair shop with state-of-the-art diagnostic laboratories in Cincinnati, OH, and Des Plaines, IL. Our mission is simple: deliver high-quality, transparent, and ultra-fast hardware repairs to get you back online.
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  We utilize premium diagnostic gear, precision heat plates, and advanced micro-soldering tooling to tackle failures that other shops reject. From basic screen swaps to complex board-level issues, our workmanship sets the local standard.
                </p>
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-6 text-sm text-slate-350">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    <span>Certified Engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                    <span>90-Day Lab Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BEST BUY USED IPHONES AND LAPTOPS */}
        <section
          ref={bestBuyRef}
          className="relative bg-slate-950 border-b border-slate-850"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Column 1: Used iPhones */}
            <div className="relative group overflow-hidden flex flex-col justify-end p-8 sm:p-12 lg:p-16 min-h-[350px] md:min-h-0 border-b md:border-b-0 md:border-r border-slate-800">
              <div className="absolute inset-0 bg-slate-950/60 z-10 transition-colors group-hover:bg-slate-950/45 duration-350" />
              <Image
                src="/images/used_iphones.png"
                alt="Refurbished iPhones for Sale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-20 space-y-3">
                <span className="text-xs font-bold text-primary tracking-widest uppercase font-display">
                  Certified Pre-Owned
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Used iPhones Shop
                </h3>
                <p className="text-slate-300 text-sm max-w-md leading-relaxed font-normal">
                  Get like-new unlocked iPhones tested across 30 points. Mint condition, fresh battery health, and verified warranty included.
                </p>
                <div className="pt-2">
                  <Link
                    href="/buy-used-iphones"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors"
                  >
                    Browse iPhones
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Used Laptops */}
            <div className="relative group overflow-hidden flex flex-col justify-end p-8 sm:p-12 lg:p-16 min-h-[350px] md:min-h-0">
              <div className="absolute inset-0 bg-slate-950/60 z-10 transition-colors group-hover:bg-slate-950/45 duration-350" />
              <Image
                src="/images/used_laptops.png"
                alt="Refurbished Laptops for Sale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-20 space-y-3">
                <span className="text-xs font-bold text-secondary tracking-widest uppercase font-display">
                  Workstations & Ultrabooks
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Used Laptops Shop
                </h3>
                <p className="text-slate-300 text-sm max-w-md leading-relaxed font-normal">
                  Premium MacBooks and Windows PCs fully wiped and pre-configured. Superb performance for work, study, or gaming.
                </p>
                <div className="pt-2">
                  <Link
                    href="/buy-used-laptops"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-secondary transition-colors"
                  >
                    Browse Laptops
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR SERVICES SECTION */}
        <section
          ref={servicesRef}
          className="py-20 lg:py-28 bg-slate-900 border-b border-slate-850"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="text-xs font-bold text-primary uppercase tracking-widest font-display">
                What We Offer
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Full-Service Hardware Solutions
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you drop your phone, spill liquid on your keyboard, or experience console errors, our dedicated laboratory delivers modern diagnostics and reliable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group bg-slate-950 rounded-2xl border border-slate-850 overflow-hidden shadow-lg hover:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-106"
                      />
                    </div>
                    {/* Body */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary">
                          <Icon className="w-4 h-4 shrink-0" />
                          <h3 className="text-lg font-bold text-white font-display">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white group-hover:text-primary transition-colors pt-2 self-start"
                      >
                        Service Lab Details
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. WHAT WE CAN FIX SECTION */}
        <section
          ref={fixRef}
          className="py-20 lg:py-28 bg-slate-950 border-b border-slate-850"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & Text */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                  Complete Diagnosis
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  No Issue is Too Complex for Our Techs
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We don&apos;t just replace screens. Our lab workbench is built to resolve everything from fluid ingress to complex motherboard trace repair.
                </p>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary animate-pulse" />
                    Instant diagnostics check
                  </h4>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    Walk in, hand over your device, and our technicians will run quick, localized tests to identify the failure path.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {issuesList.map((issue) => {
                  const Icon = issue.icon;
                  return (
                    <div
                      key={issue.name}
                      className="p-5 bg-slate-900 border border-slate-850 hover:border-slate-700 hover:bg-slate-900/80 rounded-2xl shadow-md transition-all flex items-start gap-4 group"
                    >
                      <div className="p-2.5 bg-slate-950 border border-slate-800 text-primary rounded-xl group-hover:text-white group-hover:bg-primary transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors font-display">
                          {issue.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-normal">
                          Certified laboratory repairs with quick diagnostics.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE US (BENTO GRID) */}
        <section
          ref={whyRef}
          className="py-20 lg:py-28 bg-slate-900 border-b border-slate-850"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="text-xs font-bold text-accent uppercase tracking-widest font-display">
                The Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Why Cincinnati & Des Plaines Trust Us
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We combine laboratory expertise, certified technicians, and customer-first store policies.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Highlight Card: 45 Minutes Repair */}
              <div className="md:col-span-2 bg-gradient-to-br from-slate-950 via-slate-950 to-secondary/30 rounded-3xl p-8 border border-secondary/50 shadow-2xl relative overflow-hidden flex flex-col justify-between group min-h-[300px]">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/35 text-white border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Express service
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight font-display">
                    45 Minutes <br />
                    <span className="text-primary">Express Repairs</span>
                  </h3>
                  <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                    Most standard smartphone screen replacements, charging port repairs, and battery swaps are performed on the spot. Sit down, enjoy a coffee, and get your device back within 45 minutes.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-bold text-white group-hover:text-primary transition-colors">
                  <span>Fast turnaround guaranteed</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </div>

              {/* Bento Card 2: Best Repairs */}
              <div className="bg-slate-950 rounded-3xl p-8 border border-slate-850 flex flex-col justify-between shadow-lg hover:border-slate-800 transition-all min-h-[300px]">
                <div>
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    Best Repairs
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Certified technicians inspect every solder joint, flex cable, and display panel under lab microscopes before certifying your hardware.
                  </p>
                </div>
                <span className="text-slate-650 text-xs font-semibold">Quality standard</span>
              </div>

              {/* Bento Card 3: No Appointment Needed */}
              <div className="bg-slate-950 rounded-3xl p-8 border border-slate-850 flex flex-col justify-between shadow-lg hover:border-slate-800 transition-all min-h-[300px]">
                <div>
                  <UserCheck className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    No Appointment Needed
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Simply walk in to either of our service locations in Cincinnati, OH, or Des Plaines, IL. Our diagnostic workbench runs walk-in evaluations daily.
                  </p>
                </div>
                <span className="text-slate-650 text-xs font-semibold">Walk-in ready</span>
              </div>

              {/* Bento Card 4: Best Rates */}
              <div className="bg-slate-950 rounded-3xl p-8 border border-slate-850 flex flex-col justify-between shadow-lg hover:border-slate-800 transition-all min-h-[300px]">
                <div>
                  <div className="text-2xl font-black text-emerald-500 mb-4 font-display">$</div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    Best Rates
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    We source display panels and components directly to cut out middle-men, giving you premium parts and laboratory services at fair, competitive rates.
                  </p>
                </div>
                <span className="text-slate-650 text-xs font-semibold">Fair pricing</span>
              </div>

              {/* Bento Card 5: Check Warranty */}
              <div className="bg-slate-950 rounded-3xl p-8 border border-slate-850 flex flex-col justify-between shadow-lg hover:border-slate-800 transition-all min-h-[300px]">
                <div>
                  <Activity className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    Check Warranty
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Every hardware component we install comes with a 90-day parts warranty. We repair or replace it free of charge if any issues arise.
                  </p>
                </div>
                <span className="text-slate-650 text-xs font-semibold">Worry-free coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS SECTION */}
        <section
          ref={testimonialRef}
          className="py-20 lg:py-28 bg-slate-950 border-b border-slate-850"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="text-xs font-bold text-secondary uppercase tracking-widest font-display">
                Reviews
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                What Our Customers Say
              </h2>
            </div>

            {/* Testimonials Slider */}
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-xl relative min-h-[250px] flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed font-normal">
                    &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white font-display">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 border border-slate-800 hover:border-slate-600 bg-slate-950 text-slate-400 hover:text-white rounded-full transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 border border-slate-800 hover:border-slate-600 bg-slate-950 text-slate-400 hover:text-white rounded-full transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA & CONTACT FORM SECTION */}
        <section
          ref={ctaRef}
          className="py-20 lg:py-28 bg-slate-900 relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(32,82,201,0.1),rgba(255,255,255,0))] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Ready to Get Your Device Fixed?
              </h2>
              <p className="text-slate-450 text-sm leading-relaxed max-w-md mx-auto">
                Fill out this quick form and our lab team will contact you within 2 hours with a free estimate!
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-slate-950 border border-emerald-800 rounded-3xl flex flex-col items-center text-center space-y-4 shadow-xl">
                <CheckCircle className="w-16 h-16 text-emerald-500" />
                <h3 className="text-2xl font-bold text-white font-display">Estimation Form Submitted!</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  Our laboratory staff will review your details and phone you directly. We look forward to reviving your device.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
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
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
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
                    placeholder="(513) 258-9811"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
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
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/95 text-slate-900 font-bold text-sm py-3.5 px-6 rounded-xl hover:scale-[1.01] transition-all cursor-pointer shadow-lg shadow-primary/10"
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
