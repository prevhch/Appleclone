import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Apple",
    template: "%s - Apple",
  },
  description:
    "Apple designs and builds iPhone, iPad, Mac, Apple Watch, Vision Pro, AirPods, Apple TV, and home and accessories.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* eslint-disable @next/next/no-css-tags */}
        {/* Apple's own inline-media CSS (layered hero/promo video system), vendored verbatim */}
        <link rel="stylesheet" href="/apple/v/homepage/a/styles/inline-media.built.css" />
        {/* eslint-enable @next/next/no-css-tags */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
