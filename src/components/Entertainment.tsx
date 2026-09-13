"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ATV_LOGO, FAM_ITEMS, SERVICE_LABEL, TV_ITEMS, tvSrc } from "@/lib/entertainment";

/** Single shared gallery controller: one index drives both TV + FAM tracks. */
function useSharedGallery(count: number, intervalMs = 4160) {
  const tvTrackRef = useRef<HTMLDivElement>(null);
  const famTrackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const idxRef = useRef(idx);
  useEffect(() => { idxRef.current = idx; }, [idx]);

  const scrollTo = useCallback((track: HTMLDivElement, childIdx: number) => {
    const card = track.children[childIdx] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  const goTo = useCallback((i: number) => {
    const n = ((i % count) + count) % count;
    setIdx(n);
    if (tvTrackRef.current) scrollTo(tvTrackRef.current, n);
    if (famTrackRef.current) scrollTo(famTrackRef.current, n * 3);
  }, [count, scrollTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo(idxRef.current + 1), intervalMs);
    return () => clearInterval(t);
  }, [paused, intervalMs, goTo]);

  // Track manual swipes on either track
  useEffect(() => {
    const tracks = [tvTrackRef.current, famTrackRef.current].filter(Boolean) as HTMLDivElement[];
    if (!tracks.length) return;
    let raf = 0;
    const onScroll = (track: HTMLDivElement) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((c, i) => {
          const el = c as HTMLElement;
          const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        // FAM track has 3x items; derive the dot index
        const dotIdx = track === famTrackRef.current ? Math.round(best / 3) : best;
        setIdx((prev) => (prev === dotIdx ? prev : Math.min(dotIdx, count - 1)));
      });
    };
    const listeners = tracks.map((t) => {
      const handler = () => onScroll(t);
      t.addEventListener("scroll", handler, { passive: true });
      return { t, handler };
    });
    return () => {
      cancelAnimationFrame(raf);
      listeners.forEach(({ t, handler }) => t.removeEventListener("scroll", handler));
    };
  }, [count]);

  return { tvTrackRef, famTrackRef, idx, goTo, paused, setPaused };
}

function Dots({ count, idx, goTo, label }: { count: number; idx: number; goTo: (i: number) => void; label: string }) {
  return (
    <div className="flex justify-center gap-2 px-4" role="tablist" aria-label={label}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === idx}
          aria-label={`${label} item ${i + 1}`}
          onClick={() => goTo(i)}
          className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#1d1d1f]" : "w-2 bg-[#d2d2d7] hover:bg-[#86868b]"}`}
        />
      ))}
    </div>
  );
}

export default function Entertainment() {
  const { tvTrackRef, famTrackRef, idx, goTo, paused, setPaused } = useSharedGallery(TV_ITEMS.length, 4160);

  return (
    <div
      className="bg-white py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Headline */}
      <h2 className="media-gallery-headline px-4 text-center" style={{ fontSize: "56px", lineHeight: "60px", fontWeight: 600 }}>
        Endless entertainment.
      </h2>

      {/* TV+ Gallery — 1 card per dot position */}
      <div ref={tvTrackRef} className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-[13px] overflow-x-auto px-[max(12px,calc(50%-625px))]">
        {TV_ITEMS.map((t, i) => (
          <a
            key={t.title}
            href={t.href}
            aria-label={`${t.cta}, ${t.title}`}
            onClick={(e) => { if (i !== idx) { e.preventDefault(); goTo(i); } }}
            className={`tv-card group relative shrink-0 snap-center overflow-hidden rounded-[18px] bg-black transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-60"
            }`}
          >
            <picture>
              <source srcSet={tvSrc(t.img, "274x496")} media="(max-width: 734px)" />
              <source srcSet={tvSrc(t.img, "688x368")} media="(max-width: 1068px)" />
              <source srcSet={tvSrc(t.img, "980x522")} media="(max-width: 1440px)" />
              <img src={t.img} alt="" loading={i === 0 ? "eager" : "lazy"} className="tv-card-img" />
            </picture>
            <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">
              <div className="flex items-start gap-3">
                <img src={ATV_LOGO.src} srcSet={`${ATV_LOGO.src2x} 2x`} alt="" aria-hidden="true" className="h-[13px] w-auto object-contain" />
                <img src={t.logo} alt="" aria-hidden="true" className="h-[27px] w-auto max-w-[220px] object-contain" loading="lazy" />
              </div>
              <div>
                <span className="btn btn-neutral">{t.cta}</span>
                <p className="media-longnote mt-3 max-w-[520px]">
                  {t.genre && <span className="media-genre">{t.genre}</span>}
                  {t.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* FAM Gallery — 3 cards per dot position (music/arcade/fitness cycle) */}
      <div ref={famTrackRef} className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-[13px] overflow-x-auto px-[max(12px,calc(50%-625px))]">
        {FAM_ITEMS.map((f, i) => {
          const dotIdx = Math.floor(i / 3);
          const square = f.service === "music";
          return (
            <a
              key={f.title}
              href={f.href}
              aria-label={`${f.cta}, ${f.title}`}
              onClick={(e) => { if (dotIdx !== idx) { e.preventDefault(); goTo(dotIdx); } }}
              className={`fam-card group relative shrink-0 snap-center overflow-hidden rounded-[18px] bg-black transition-opacity duration-500 ${
                square ? "fam-square" : "fam-wide"
              } ${dotIdx === idx ? "opacity-100" : "opacity-60"}`}
            >
              <img src={f.img} alt="" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="text-[12px] font-semibold text-white/90">{SERVICE_LABEL[f.service]}</span>
                <div>
                  <span className="btn btn-neutral btn-sm">{f.cta}</span>
                  <p className="media-longnote mt-2">{f.title}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Shared dot nav + play/pause — ONE control bar for both galleries */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <Dots count={TV_ITEMS.length} idx={idx} goTo={goTo} label="Endless entertainment gallery" />
        <button
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play gallery" : "Pause gallery"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#1d1d1f] transition-colors hover:bg-black/10"
        >
          {paused ? (
            <svg width="10" height="12" viewBox="0 0 10 12" className="fill-current" aria-hidden="true">
              <path d="M0 0l10 6-10 6z" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 10 12" className="fill-current" aria-hidden="true">
              <path d="M0 0h3.5v12H0zM6.5 0H10v12H6.5z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
