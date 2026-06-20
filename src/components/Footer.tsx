import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Branding & Description */}
          <div className="space-y-4">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center">
              Nexus <span className="text-primary ml-1 font-black">Mobile</span>
              <span className="text-secondary font-black">Tech</span>
              <span className="text-xs text-slate-500 font-bold self-end ml-1 mb-1">LLC</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-500">
              Nexus Mobile Tech LLC (powered by Mr iPhone Repair) is your premier destination for professional, lightning-fast electronics repair and certified pre-owned devices. We breathe life back into your tech with standard-setting warranties.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
              Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary hover:underline transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary hover:underline transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/buy-used-iphones" className="hover:text-secondary hover:underline transition-all">
                  Buy Used iPhones
                </Link>
              </li>
              <li>
                <Link href="/buy-used-laptops" className="hover:text-secondary hover:underline transition-all">
                  Buy Used Laptops
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary hover:underline transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Repair Lab Services */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-2 border-secondary pl-2.5">
              Repair Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/lab/iphone-repair" className="hover:text-secondary hover:underline transition-all">
                  iPhone Repair
                </Link>
              </li>
              <li>
                <Link href="/lab/ipad-tablet-repair" className="hover:text-secondary hover:underline transition-all">
                  iPad & Tablet Repair
                </Link>
              </li>
              <li>
                <Link href="/lab/laptop-desktop-repair" className="hover:text-secondary hover:underline transition-all">
                  Laptop & Desktop Repair
                </Link>
              </li>
              <li>
                <Link href="/lab/game-console-repair" className="hover:text-secondary hover:underline transition-all">
                  Game Console Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-2 border-accent pl-2.5">
              Contact Details
            </h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col text-slate-700">
                    <a href="tel:+15133021801" className="hover:text-secondary transition-colors font-medium">
                      (513) 302-1801
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" />
                  <div className="text-slate-700">
                    <p className="font-semibold text-slate-900 text-xs">Location 1</p>
                    <p className="text-xs leading-relaxed">
                      5720 Winton Rd # 407<br />
                      Cincinnati, OH 45232
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1" />
                  <div className="text-slate-700">
                    <p className="font-semibold text-slate-900 text-xs">Location 2</p>
                    <p className="text-xs leading-relaxed">
                      5301 Glenway Ave<br />
                      Cincinnati, OH 45238
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nexus Mobile Tech LLC. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a href="#" className="text-secondary hover:underline font-semibold">
              Mr iPhone Repair
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
