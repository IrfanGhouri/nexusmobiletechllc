"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Smartphone, Tablet, Laptop, Gamepad2 } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const labServices = [
    { name: "iPhone Repair", href: "/lab/iphone-repair", icon: Smartphone },
    { name: "iPad & Tablet Repair", href: "/lab/ipad-tablet-repair", icon: Tablet },
    { name: "Laptop & Desktop Repair", href: "/lab/laptop-desktop-repair", icon: Laptop },
    { name: "Game Console Repair", href: "/lab/game-console-repair", icon: Gamepad2 },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
                Nexus <span className="text-primary ml-1.5 font-black">Mobile</span>
                <span className="text-secondary font-black">Tech</span>
                <span className="text-xs text-slate-450 font-bold self-end ml-1 mb-1">LLC</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/" ? "text-primary font-semibold" : "text-slate-300"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/about" ? "text-primary font-semibold" : "text-slate-300"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group/dropdown">
                <button
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
                    pathname.startsWith("/lab") ? "text-primary font-semibold" : "text-slate-300"
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  Lab Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover/dropdown:rotate-180" />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 transition-all duration-200 origin-top-left ${
                    isDropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto"
                  }`}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {labServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        <div className="p-1.5 bg-slate-800 text-primary rounded-md group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/buy-used-iphones"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/buy-used-iphones" ? "text-primary font-semibold" : "text-slate-300"
                }`}
              >
                Buy Used iPhones
              </Link>
              <Link
                href="/buy-used-laptops"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/buy-used-laptops" ? "text-primary font-semibold" : "text-slate-300"
                }`}
              >
                Buy Used Laptops
              </Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-secondary hover:bg-secondary/95 border border-transparent shadow-lg shadow-secondary/20 hover:scale-[1.03] transition-all"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-400 hover:text-white md:hidden rounded-lg bg-slate-900/50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-slate-950 border-l border-slate-900 shadow-2xl p-6 transition-all duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-white">
            Nexus <span className="text-primary font-black">Mobile</span> Tech
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-5">
          <Link
            href="/"
            className={`text-base font-semibold transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-base font-semibold transition-colors hover:text-primary ${
              pathname === "/about" ? "text-primary" : "text-slate-300"
            }`}
          >
            About
          </Link>

          {/* Collapsible Lab Services */}
          <div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
              Lab Services
            </div>
            <div className="flex flex-col gap-2 pl-3 border-l border-slate-800">
              {labServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`text-sm py-1.5 font-medium transition-colors hover:text-primary ${
                    pathname === service.href ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/buy-used-iphones"
            className={`text-base font-semibold transition-colors hover:text-primary ${
              pathname === "/buy-used-iphones" ? "text-primary" : "text-slate-300"
            }`}
          >
            Buy Used iPhones
          </Link>
          <Link
            href="/buy-used-laptops"
            className={`text-base font-semibold transition-colors hover:text-primary ${
              pathname === "/buy-used-laptops" ? "text-primary" : "text-slate-300"
            }`}
          >
            Buy Used Laptops
          </Link>

          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center w-full px-5 py-3 rounded-xl text-center text-sm font-bold text-white bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/10"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}
