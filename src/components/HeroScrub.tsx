"use client";
import Link from "next/link";
import ApplePicture from "@/components/ApplePicture";
import InlineMedia from "@/components/InlineMedia";

export type HeroLink = { label: string; href: string; ariaLabel?: string };

/**
 * Full-width hero band. Copy (headline/sub/avail/CTAs) layered over Apple's
 * inline-media system (start-frame → video → maxframe) from InlineMedia.
 */
export default function HeroScrub({
  title,
  sub,
  avail,
  sup,
  links,
  tileLink,
  startStem,
  endStem,
  logoStem,
  theme = "dark",
  tall = false,
  videoBase,
}: {
  title: string;
  sub: string;
  avail?: string;
  sup?: number;
  links: HeroLink[];
  tileLink: string;
  startStem: string;
  endStem: string;
  logoStem?: string;
  theme?: "dark" | "light";
  tall?: boolean;
  videoBase: string;
}) {
  const dark = theme === "dark";

  return (
    <section className={`hero-band relative flex flex-col items-center overflow-hidden text-center ${dark ? "bg-black" : "bg-[#f5f5f7]"}`}>
      <a href={tileLink} aria-hidden="true" tabIndex={-1} className="tile-link">
        <span className="visuallyhidden">{title}</span>
      </a>
      <div className="hero-copy z-20 px-4 pt-11 md:pt-14 pointer-events-none">
        {logoStem ? (
          <h2 className="flex justify-center">
            <ApplePicture
              stem={logoStem}
              ext="png"
              className="h-8 md:h-10 [&>img]:h-8 [&>img]:md:h-10 [&>img]:w-auto [&>img]:object-contain"
              ariaHidden
            />
            <span className="visuallyhidden">{title}</span>
          </h2>
        ) : (
          <h2 className={`hero-title ${dark ? "text-[#f5f5f7]" : "text-[#1d1d1f]"}`}>{title}</h2>
        )}
        <p className={`hero-sub ${dark ? "text-[#f5f5f7]" : "text-[#1d1d1f]"}`}>
          {sub}
          {sup !== undefined && (
            <sup className="footnote-number">
              <a href={`#footnote-${sup}`} aria-label={`Footnote ${sup}`}>
                {sup}
              </a>
            </sup>
          )}
        </p>
        {avail && <p className={`hero-avail ${dark ? "" : "!text-[#6e6e73]"}`}>{avail}</p>}
        <div className={`tile-ctas pointer-events-auto ${dark ? "theme-dark" : ""}`}>
          {links.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              aria-label={l.ariaLabel ?? `${l.label}, ${title}`}
              className={i === 0 ? "btn" : "btn btn-secondary"}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <InlineMedia
        className="hero-media"
        startStem={startStem}
        endStem={endStem}
        videoBase={videoBase}
        tall={tall}
        imgStart="hero-img"
        imgEnd="hero-img"
      />
    </section>
  );
}