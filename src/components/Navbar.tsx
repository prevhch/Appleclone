"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

function AppleMark() {
  return (
    <svg height="44" viewBox="0 0 14 44" width="14" aria-hidden="true" className="fill-current">
      <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<"search" | "bag" | "menu" | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const textColor = isHome && !scrolled ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.8)";

  return (
    <>
      <header
        className={`sticky top-0 transition-all ${
          scrolled ? "apple-nav-blur" : "bg-transparent"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Apple globalnav: 48px height, max-height 44px on desktop */}
        <nav
          className="mx-auto flex items-center justify-between"
          style={{
            height: "48px",
            maxWidth: "1024px",
            padding: "0 max(22px, env(safe-area-inset-left)) 0 max(22px, env(safe-area-inset-right))",
          }}
        >
          {/* Mobile hamburger */}
          <button
            aria-label={open === "menu" ? "Close menu" : "Open menu"}
            aria-expanded={open === "menu"}
            onClick={() => setOpen(open === "menu" ? null : "menu")}
            className="md:hidden"
            style={{ color: textColor }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" className="stroke-current" fill="none" aria-hidden="true">
              {open === "menu" ? (
                <path d="M4 4l10 10M14 4L4 14" strokeWidth="1.5" />
              ) : (
                <path d="M3 5h12M3 9h12M3 13h12" strokeWidth="1.5" />
              )}
            </svg>
          </button>

          {/* Apple logo */}
          <Link href="/" aria-label="Apple" className="flex items-center" style={{ padding: "0 16px" }}>
            <span style={{ color: textColor }}>
              <AppleMark />
            </span>
          </Link>

          {/* Desktop nav links — Apple uses SVG icons, we use 12px text */}
          <ul className="hidden md:flex flex-1 items-center justify-between" style={{ margin: "0 -8px", height: "44px" }}>
            {NAV.map((n) => (
              <li key={n.label} style={{ height: "44px" }}>
                <Link
                  href={n.href}
                  style={{
                    color: textColor,
                    fontSize: "12px",
                    lineHeight: "1",
                    fontWeight: 400,
                    letterSpacing: "-.01em",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 8px",
                  }}
                  className="hover:!text-white transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons: search + bag */}
          <div className="flex items-center" style={{ gap: "20px" }}>
            <button
              aria-label="Search apple.com"
              onClick={() => setOpen(open === "search" ? null : "search")}
              style={{ color: textColor }}
              className="hover:opacity-70 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                <path fill="currentColor" d="m14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" />
              </svg>
            </button>
            <button
              aria-label="Shopping Bag"
              onClick={() => setOpen(open === "bag" ? null : "bag")}
              style={{ color: textColor }}
              className="hover:opacity-70 transition-opacity"
            >
              <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {open === "menu" && (
          <div className="apple-nav-blur border-t border-black/10 md:hidden">
            <ul className="mx-auto max-w-[1024px] px-6 py-2" style={{ fontSize: "15px" }}>
              {NAV.map((n) => (
                <li key={n.label} className="border-b border-black/10 last:border-0">
                  <Link
                    href={n.href}
                    onClick={() => setOpen(null)}
                    className="block py-3"
                    style={{ color: "rgba(0,0,0,.8)" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Search dropdown */}
        {open === "search" && (
          <div className="apple-nav-blur border-t border-black/10">
            <div className="mx-auto max-w-[1024px] px-4 py-4">
              <form action="/us/search" className="flex items-center gap-3">
                <input
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search apple.com"
                  className="w-full bg-transparent outline-none placeholder:text-gray-500"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: ".009em",
                    fontFamily: "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
                    color: "rgba(0,0,0,.92)",
                  }}
                  autoFocus
                />
              </form>
              <div className="mt-2" style={{ fontSize: "12px", color: "rgba(0,0,0,.56)" }}>
                Quick links:{" "}
                {["iPhone 18 Pro", "iPhone Duo", "MacBook Air", "Watch Series 12"].map((q) => (
                  <Link key={q} href={`/us/search?q=${encodeURIComponent(q)}`} className="mr-3 hover:underline" style={{ color: "rgb(0,102,204)" }}>
                    {q}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bag dropdown */}
        {open === "bag" && (
          <div className="apple-nav-blur border-t border-black/10">
            <div className="mx-auto max-w-[1024px] px-4 py-6" style={{ fontSize: "14px", color: "rgba(0,0,0,.92)" }}>
              Your Bag is empty.{" "}
              <Link href="/us/shop/goto/bag" style={{ color: "rgb(0,102,204)" }}>
                Review bag <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Promotional ribbon — Apple uses font-size: 12px, line-height: 1.333, letter-spacing: -.01em */}
      <div
        className="text-center"
        style={{
          background: "rgb(245,245,247)",
          fontSize: "12px",
          lineHeight: "1.3333733333",
          letterSpacing: "-.01em",
          fontWeight: 400,
          fontFamily: "SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
          color: "rgba(0,0,0,.8)",
          padding: "10px 16px",
        }}
      >
        For a limited time, get a gift card up to $150
        <sup className="footnote-number">
          <a href="#footnote-asterisk-1" aria-label="Footnote * symbol">
            *
          </a>
        </sup>{" "}
        when you buy Mac or iPad with education savings.{" "}
        <Link
          href="/us/shop/goto/edu_store"
          style={{ color: "rgb(0,102,204)" }}
          className="hover:underline"
        >
          Shop <span aria-hidden="true">›</span>
        </Link>
      </div>
    </>
  );
}
