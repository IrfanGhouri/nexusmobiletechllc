"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const labServices = [
    { name: "iPhone Repair", href: "/lab/iphone-repair" },
    { name: "iPad & Tablet Repair", href: "/lab/ipad-tablet-repair" },
    { name: "Laptop & Desktop Repair", href: "/lab/laptop-desktop-repair" },
    { name: "Game Console Repair", href: "/lab/game-console-repair" },
  ];

  return (
    <>
      {/* Static Header */}
      <header className="w-full bg-white border-b border-slate-200 py-4 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col group leading-none">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center">
                Nexus <span className="text-primary ml-1.5 font-black">Mobile</span>
                <span className="text-secondary font-black">Tech</span>
                <span className="text-xs text-slate-500 font-bold self-end ml-1 mb-1">LLC</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium text-right mt-1.5">
                powered by <span className="font-semibold text-slate-500">Mr iPhone Repair</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  pathname === "/" ? "text-secondary font-bold" : "text-slate-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  pathname === "/about" ? "text-secondary font-bold" : "text-slate-600"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group/dropdown">
                <button
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-secondary ${
                    pathname.startsWith("/lab") ? "text-secondary font-bold" : "text-slate-600"
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  Lab Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover/dropdown:rotate-180 text-slate-400" />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 transition-all duration-200 origin-top-left ${
                    isDropdownOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto"
                  }`}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {labServices.map((service) => {
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center px-4 py-2.5 rounded-lg text-slate-700 hover:text-secondary hover:bg-slate-50 transition-colors text-sm font-medium"
                      >
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/buy-used-iphones"
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  pathname === "/buy-used-iphones" ? "text-secondary font-bold" : "text-slate-600"
                }`}
              >
                Buy Used iPhones
              </Link>
              <Link
                href="/buy-used-laptops"
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  pathname === "/buy-used-laptops" ? "text-secondary font-bold" : "text-slate-600"
                }`}
              >
                Buy Used Laptops
              </Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-secondary hover:bg-secondary/95 shadow-md shadow-secondary/15 transition-all"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 md:hidden rounded-lg bg-slate-100"
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
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white border-l border-slate-200 shadow-2xl p-6 transition-all duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-bold text-slate-900 leading-none">
              Nexus <span className="text-primary font-black">Mobile</span> Tech
            </span>
            <span className="text-[9px] text-slate-400 font-medium leading-none mt-1">
              powered by <span className="font-semibold text-slate-500">Mr iPhone Repair</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-5">
          <Link
            href="/"
            className={`text-base font-semibold transition-colors hover:text-secondary ${
              pathname === "/" ? "text-secondary" : "text-slate-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-base font-semibold transition-colors hover:text-secondary ${
              pathname === "/about" ? "text-secondary" : "text-slate-700"
            }`}
          >
            About
          </Link>

          <div>
            <div className="text-xs font-bold text-slate-450 uppercase tracking-wider mb-2">
              Lab Services
            </div>
            <div className="flex flex-col gap-2 pl-3 border-l border-slate-200">
              {labServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`text-sm py-1.5 font-medium transition-colors hover:text-secondary ${
                    pathname === service.href ? "text-secondary font-bold" : "text-slate-655"
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/buy-used-iphones"
            className={`text-base font-semibold transition-colors hover:text-secondary ${
              pathname === "/buy-used-iphones" ? "text-secondary" : "text-slate-700"
            }`}
          >
            Buy Used iPhones
          </Link>
          <Link
            href="/buy-used-laptops"
            className={`text-base font-semibold transition-colors hover:text-secondary ${
              pathname === "/buy-used-laptops" ? "text-secondary" : "text-slate-700"
            }`}
          >
            Buy Used Laptops
          </Link>

          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center w-full px-5 py-3 rounded-xl text-center text-sm font-bold text-white bg-secondary hover:bg-secondary/90 shadow-md shadow-secondary/10"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}
