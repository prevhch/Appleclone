"use client";
import { useCallback, useEffect, useRef, useState } from "react";
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
  return `${base.replace(/\/+$/, "")}/${size}${retina ? "_2x" : ""}.mp4`;
}

type Mode = "loading" | "ready" | "playing" | "ended";

/**
 * Apple's inline-media pattern, mirrored 1:1:
 *
 *   <div class="inline-media-wrapper [loading|loaded] [playing|ended]"
 *        data-component-list="InlineMedia" data-enhanced>
 *     <figure class="start-frame"><img …startframe></figure>
 *     <video data-inline-media-basepath="…" src="…"></video>
 *   </div>
 *   <picture class="static"><img …endframe></picture>
 *
 * The .start-frame stays visible while the player loads, then the CSS
 * `loaded` state hides it and reveals the cued first frame. Play starts when
 * the wrapper enters the viewport. State classes (loading/loaded/playing/ended)
 * drive Apple's verbatim inline-media.built.css.
 */
export default function InlineMedia({
  startStem,
  endStem,
  videoBase,
  tall = false,
  loop = false,
  ext = "jpg",
  className = "",
  imgStart = "hero-img",
  imgEnd = "hero-img",
}: {
  startStem: string;
  endStem: string;
  videoBase: string;
  tall?: boolean;
  loop?: boolean;
  ext?: "jpg" | "png";
  className?: string;
  imgStart?: string;
  imgEnd?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("loading");
  const userPausedRef = useRef(false);
  const frozenRef = useRef(false);
  const stallRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const [src, setSrc] = useState<string | null>(null);

  // Shared by the initial element and watchdog-swapped replacements so every
  // <video> carries the full state-event wiring (ready/play/pause/ended).
  const bindVideo = useCallback((v: HTMLVideoElement) => {
    const clearStall = () => {
      if (stallRef.current) {
        clearTimeout(stallRef.current);
        stallRef.current = null;
      }
    };
    const onReady = () => {
      clearStall();
      try {
        v.currentTime = 0;
      } catch {}
      setMode("ready");
    };
    const onCanplay = () => {
      clearStall();
      v.muted = true;
      v.play().catch(() => {});
    };
    const onPlay = () => setMode("playing");
    const onPause = () => setMode(v.ended ? "ended" : "ready");
    const onEnded = () => {
      if (loop) {
        try {
          v.currentTime = 0;
        } catch {}
        v.play().catch(() => {});
      } else {
        setMode("ended");
      }
    };
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("canplay", onCanplay);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
  }, [loop]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (reduced) return; // static endframe rendered instead

    const cur = videoRef.current;
    if (!cur) return;
    cur.muted = true;
    cur.defaultMuted = true;

    const ensureSrc = () => {
      if (!frozenRef.current) {
        frozenRef.current = true;
        setSrc(pickSrc(videoBase, tall));
      }
    };
    const tryPlay = () => {
      if (userPausedRef.current) return;
      ensureSrc();
      const v = videoRef.current;
      if (!v) return;
      if (v.readyState >= 2) {
        v.muted = true;
        v.play().catch(() => {});
      } else {
        v.addEventListener(
          "canplay",
          () => {
            v.muted = true;
            v.play().catch(() => {});
          },
          { once: true }
        );
      }
    };

    bindVideo(cur);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          tryPlay();
        }
      },
      { threshold: loop ? 0.4 : 0.3 }
    );
    io.observe(wrap);

    return () => {
      if (stallRef.current) clearTimeout(stallRef.current);
      io.disconnect();
    };
  }, [reduced, videoBase, tall, loop, bindVideo]);

  // Assign the picked source when it's known. A stall watchdog swaps in a fresh
  // <video> if the element never reaches `canplay`: some software-decode
  // environments leave a hydration-time element wedged at readyState 1.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src || v.getAttribute("src") === src) return;
    v.setAttribute("src", src);
    try {
      v.currentTime = 0;
    } catch {}
    v.load();
    if (stallRef.current) clearTimeout(stallRef.current);
    stallRef.current = setTimeout(() => {
      if (stallRef.current) clearTimeout(stallRef.current);
      const cur = videoRef.current;
      if (!cur || cur.getAttribute("src") !== src || cur.readyState >= 2) return;
      const fresh = document.createElement("video");
      fresh.muted = true;
      fresh.defaultMuted = true;
      fresh.setAttribute("data-inline-media-basepath", cur.getAttribute("data-inline-media-basepath") ?? "");
      fresh.playsInline = true;
      fresh.loop = loop;
      fresh.preload = "auto";
      fresh.setAttribute("disablePictureInPicture", "");
      fresh.setAttribute("aria-hidden", "true");
      fresh.tabIndex = -1;
      fresh.setAttribute("src", src);
      cur.replaceWith(fresh);
      videoRef.current = fresh;
      bindVideo(fresh);
      fresh.load();
    }, 4500);
    return () => {
      if (stallRef.current) clearTimeout(stallRef.current);
    };
  }, [src, loop, bindVideo]);

  // Reduced motion: pause at the final frame (maxframe image).
  if (reduced) {
    return (
      <div data-component-list="InlineMedia" data-enhanced className={className}>
        <div className="inline-media-wrapper loaded ended">
          <ApplePicture
            stem={endStem}
            alt=""
            tall={tall}
            eager
            className="h-full w-full [&>img]:h-full [&>img]:w-full"
            imgClassName={imgEnd}
            ariaHidden
          />
        </div>
      </div>
    );
  }

  const classes =
    `inline-media-wrapper ${mode === "loading" ? "loading" : "loaded"} ` +
    `${mode === "playing" ? "playing " : ""}${mode === "ended" ? "ended" : ""}`;

  return (
    <div data-component-list="InlineMedia" data-enhanced className={className}>
      <div ref={wrapRef} className={classes}>
        <figure className="start-frame">
          <ApplePicture
            stem={startStem}
            ext={ext}
            alt=""
            tall={tall}
            eager
            className="h-full w-full [&>img]:h-full [&>img]:w-full"
            imgClassName={imgStart}
            ariaHidden
          />
        </figure>
        <video
          ref={videoRef}
          data-inline-media-basepath={videoBase}
          muted
          playsInline
          loop={loop}
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        tabIndex={-1}
      />
      <picture className="end-frame">
        <ApplePicture
          stem={endStem}
          ext={ext}
          alt=""
          tall={tall}
          className="h-full w-full [&>img]:h-full [&>img]:w-full"
          imgClassName={imgEnd}
          ariaHidden
        />
      </picture>
      </div>
    </div>
  );
}