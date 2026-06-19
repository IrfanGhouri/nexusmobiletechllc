"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ChevronRight, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "iPhone",
    issue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="text-slate-400">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 font-display">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl font-medium leading-relaxed">
              Have questions about a repair? Want a price quote for a used iPhone or laptop? Contact our technicians directly or fill out the form below.
            </p>
          </div>
        </section>

        {/* Content & Form Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form & Info */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                  Send A Message
                </h2>
                <p className="text-slate-450 text-sm leading-relaxed mb-6">
                  Fill out the form below and one of our master diagnostic technicians will get back to you with a free estimation within a couple of hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-slate-950 border border-emerald-800 rounded-2xl flex flex-col items-center text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                  <h3 className="text-xl font-bold text-white font-display">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-md">
                    Thank you for reaching out to Nexus Mobile Tech. Our team will review your inquiry and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="(513) 258-9811"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">Device Type</label>
                      <select
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                      >
                        <option>iPhone</option>
                        <option>iPad / Tablet</option>
                        <option>Laptop / Desktop</option>
                        <option>Game Console</option>
                        <option>Other / Sales Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 tracking-wider mb-1">Describe the Issue / Request</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
                      placeholder="My screen is cracked / I want to sell my Macbook Air..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold text-sm py-3 px-6 rounded-xl hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Submit Request
                  </button>
                </form>
              )}

              {/* Direct Contacts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                  <Phone className="w-5 h-5 text-primary mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2 font-display">Call Us Directly</h4>
                  <p className="text-xs text-slate-400 space-y-1">
                    <a href="tel:+15132589811" className="block hover:text-white transition-colors">+1 (513) 258-9811</a>
                    <a href="tel:+18723146237" className="block hover:text-white transition-colors">+1 (872) 314-6237</a>
                  </p>
                </div>
                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                  <MapPin className="w-5 h-5 text-secondary mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2 font-display">Our Locations</h4>
                  <p className="text-xs text-slate-400 space-y-1 leading-relaxed">
                    <span>5301 Glenway Ave, Cincinnati, OH 45238</span>
                    <span className="block mt-1">8814 Robin Dr Unit A, Des Plaines, IL 60016</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Office/Lab Image */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 aspect-4/3 w-full bg-slate-950">
                <Image
                  src="/images/repair_lab.png"
                  alt="Contact Nexus Mobile Tech lab"
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
