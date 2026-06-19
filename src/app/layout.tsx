import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus Mobile Tech LLC | Professional Mobile, Tablet & Laptop Repair Services",
  description: "Get premium, fast iPhone, iPad, laptop, and console repairs. We also buy and sell used iPhones and laptops at the best rates in Cincinnati, OH and Des Plaines, IL. 45-minute quick repairs!",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-light text-slate-800">
        {children}
      </body>
    </html>
  );
}

