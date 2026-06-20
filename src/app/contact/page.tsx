"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ChevronRight, Phone, MapPin, CheckCircle } from "lucide-react";

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
      <main className="flex-grow bg-white text-slate-800">
        {/* Simple Banner Section */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-450" />
              <span>Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 font-display">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Have questions about a repair? Want a price quote for a used iPhone or laptop? Contact our technicians directly or fill out the form below.
            </p>
          </div>
        </section>

        {/* Content & Form Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form & Info */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-display">
                  Send A Message
                </h2>
                <p className="text-slate-550 text-sm">
                  Fill out the form below and one of our technicians will get back to you with a free estimation within a couple of hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-secondary" />
                  <h3 className="text-lg font-bold text-slate-900 font-display">Message Sent Successfully!</h3>
                  <p className="text-slate-600 text-sm max-w-md">
                    Thank you for reaching out to Nexus Mobile Tech. Our team will review your inquiry and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-250 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all"
                        placeholder="(513) 302-1801"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Device Type</label>
                      <select
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all"
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
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Describe the Issue / Request</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all"
                      placeholder="My screen is cracked / I want to sell my Macbook Air..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-sm py-3 px-6 rounded-lg hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Submit Request
                  </button>
                </form>
              )}

              {/* Direct Contacts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">Call Us Directly</h4>
                  <p className="text-xs text-slate-600 space-y-1">
                    <a href="tel:+15133021801" className="block hover:text-secondary transition-colors font-medium">(513) 302-1801</a>
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">Our Addresses</h4>
                  <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                    <div>
                      <span className="font-semibold block text-slate-800 text-[11px]">Location 1:</span>
                      <span>5720 Winton Rd # 407</span>
                      <span className="block text-[11px] text-slate-500">Cincinnati, OH 45232</span>
                    </div>
                    <div>
                      <span className="font-semibold block text-slate-800 text-[11px]">Location 2:</span>
                      <span>5301 Glenway Ave</span>
                      <span className="block text-[11px] text-slate-500">Cincinnati, OH 45238</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Office/Lab Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-slate-200 aspect-4/3 w-full bg-slate-50 shadow-sm">
                <Image
                  src="/images/repair_lab.jpg"
                  alt="Contact Nexus Mobile Tech lab"
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
