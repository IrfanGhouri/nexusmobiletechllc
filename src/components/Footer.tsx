import Link from "next/link";
import { Phone, MapPin, Mail, Smartphone, Laptop, Tablet, Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Branding & Description */}
          <div className="space-y-4">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
              Nexus <span className="text-primary ml-1 font-black">Mobile</span>
              <span className="text-secondary font-black">Tech</span>
              <span className="text-xs text-slate-450 font-bold self-end ml-1 mb-1">LLC</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              Nexus Mobile Tech LLC (powered by Mr iPhone Repair) is your premier destination for professional, lightning-fast electronics repair and certified pre-owned devices. We breathe life back into your tech with standard-setting warranties.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
              Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-primary hover:underline transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary hover:underline transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/buy-used-iphones" className="hover:text-primary hover:underline transition-all">
                  Buy Used iPhones
                </Link>
              </li>
              <li>
                <Link href="/buy-used-laptops" className="hover:text-primary hover:underline transition-all">
                  Buy Used Laptops
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary hover:underline transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Repair Lab Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-secondary pl-2.5">
              Repair Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-primary" />
                <Link href="/lab/iphone-repair" className="hover:text-primary hover:underline transition-all">
                  iPhone Repair
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Tablet className="w-3.5 h-3.5 text-primary" />
                <Link href="/lab/ipad-tablet-repair" className="hover:text-primary hover:underline transition-all">
                  iPad & Tablet Repair
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-primary" />
                <Link href="/lab/laptop-desktop-repair" className="hover:text-primary hover:underline transition-all">
                  Laptop & Desktop Repair
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Gamepad2 className="w-3.5 h-3.5 text-primary" />
                <Link href="/lab/game-console-repair" className="hover:text-primary hover:underline transition-all">
                  Game Console Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-accent pl-2.5">
              Contact Details
            </h3>
            <div className="space-y-4 text-sm text-slate-350">
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <a href="tel:+15132589811" className="hover:text-white transition-colors">
                      +1 (513) 258-9811
                    </a>
                    <a href="tel:+18723146237" className="hover:text-white transition-colors">
                      +1 (872) 314-6237
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location 1</p>
                    <p className="text-slate-400">5301 Glenway Ave, Cincinnati, OH 45238</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location 2</p>
                    <p className="text-slate-400">8814 Robin Dr Unit A, Des Plaines, IL 60016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Nexus Mobile Tech LLC. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a href="#" className="text-primary hover:underline">
              Mr iPhone Repair
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
