"use client";
import { useEffect, useRef, useSyncExternalStore, useState, useCallback } from "react";
import ApplePicture from "@/components/ApplePicture";

const MQ = {
  large: "(min-width: 1069px)",
  small: "(max-width: 734px)",
  tallL: "(min-height: 776px)",
  tallM: "(min-height: 734px)",
  retina: "(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)",
};

function pickSrc(base: string, tall: boolean) {
  const q = (s: string) => window.matchMedia(s).matches;
  const retina = q(MQ.retina);
  let size: string;
  if (q(MQ.large)) size = tall && q(MQ.tallL) ? "largetall" : "large";
  else if (q(MQ.small)) size = "small";
  else size = tall && q(MQ.tallM) ? "mediumtall" : "medium";
  return `${base}/${size}${retina ? "_2x" : ""}.mp4`;
}

export type HeroLink = { label: string; href: string; ariaLabel?: string };

/**
 * Pic → Video → Pic hero. Video auto-plays once when the hero band enters
 * the viewport (threshold 0.5). Plays through to `ended` even if scrolled
 * past, then crossfades to the endframe. On page reload, the animation
 * replays from the beginning.
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
  videoLabel,
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
  videoLabel?: string;
}) {
  const bandRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startedRef = useRef(false);

  const liveSrc = useSyncExternalStore(
    () => () => {},
    () => pickSrc(videoBase, tall),
    () => `${videoBase}/large.mp4`
  );
  const [frozenSrc, setFrozenSrc] = useState<string | null>(null);
  const src = frozenSrc ?? liveSrc;
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  // Auto-play once when the video element enters the viewport.
  // Observer fires when 50% of the hero band is visible.
  // Once triggered, the video plays through to the end regardless of scroll.
  useEffect(() => {
    const band = bandRef.current;
    const v = videoRef.current;
    if (!band || !v || reduced) return;

    v.muted = true;
    v.defaultMuted = true;

    const want = pickSrc(videoBase, tall);

    const tryPlay = () => {
      v.muted = true;
      if (v.src !== want) {
        setFrozenSrc(want);
        v.src = want;
        v.load();
      }
      v.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          if (v.readyState >= 1) {
            tryPlay();
          } else {
            v.addEventListener("canplay", tryPlay, { once: true });
          }
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(band);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, videoBase, tall]);

  const dark = theme === "dark";
  const posterSize = (src.split("/").pop() ?? "large.mp4")
    .replace(/\.mp4$/, "")
    .replace(/_2x$/, "");
  const poster = `${startStem}_${posterSize}.jpg`;

  return (
    <div
      ref={bandRef}
      className={`hero-band relative flex flex-col items-center overflow-hidden text-center ${
        dark ? "bg-black" : "bg-[#f5f5f7]"
      }`}
    >
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
            <a
              key={l.label}
              href={l.href}
              aria-label={l.ariaLabel ?? `${l.label}, ${title}`}
              className={i === 0 ? "btn" : "btn btn-secondary"}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-media absolute inset-0 z-10">
        <ApplePicture
          stem={startStem}
          alt=""
          tall={tall}
          eager
          className="absolute inset-0 h-full w-full"
          imgClassName="hero-img"
          ariaHidden
        />
        {!reduced ? (
          <>
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              aria-label={videoLabel}
              src={src}
              poster={poster}
              onPlay={() => setPlaying(true)}
              onEnded={() => setFinished(true)}
              onError={() => setFinished(true)}
              className="hero-img transition-opacity duration-700"
              style={{ opacity: playing && !finished ? 1 : 0 }}
            />
            <ApplePicture
              stem={endStem}
              alt=""
              tall={tall}
              className="absolute inset-0 h-full w-full transition-opacity duration-700"
              imgClassName="hero-img"
              style={{ opacity: finished ? 1 : 0 }}
              ariaHidden
            />
          </>
        ) : (
          <ApplePicture
            stem={endStem}
            alt=""
            tall={tall}
            className="absolute inset-0 h-full w-full"
            imgClassName="hero-img"
            ariaHidden
          />
        )}
      </div>
    </div>
  );
}
