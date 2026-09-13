"use client";
import { useEffect, useRef, useState } from "react";
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
  className = "",
  imgStart = "hero-img",
  imgEnd = "hero-img",
}: {
  startStem: string;
  endStem: string;
  videoBase: string;
  tall?: boolean;
  loop?: boolean;
  className?: string;
  imgStart?: string;
  imgEnd?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("loading");
  const modeRef = useRef<Mode>("loading");
  const userPausedRef = useRef(false);
  const frozenRef = useRef(false);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v) return;
    if (reduced) return; // static endframe rendered instead

    v.muted = true;
    v.defaultMuted = true;
    const want = pickSrc(videoBase, tall);

    const ensureSrc = () => {
      if (!frozenRef.current) {
        frozenRef.current = true;
        setSrc(want);
      }
    };
    const tryPlay = () => {
      if (userPausedRef.current) return;
      ensureSrc();
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
    const onReady = () => {
      ensureSrc();
      try {
        v.currentTime = 0;
      } catch {}
      setMode("ready");
    };
    const onPlay = () => setMode("playing");
    const onPause = () => setMode(modeRef.current === "ended" ? "ended" : "ready");
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
    v.addEventListener("canplay", onReady);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    const io = new IntersectionObserver(
      (entries) => {
        const inter = entries[0]?.isIntersecting ?? false;
        if (inter) {
          tryPlay();
        } else if (loop) {
          v.pause();
        }
      },
      { threshold: loop ? 0.4 : 0.3 }
    );
    io.observe(wrap);

    return () => {
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
      io.disconnect();
    };
  }, [reduced, videoBase, tall, loop]);

  useEffect(() => {
    const v = videoRef.current;
    if (v && src && v.getAttribute("src") !== src) {
      v.setAttribute("src", src);
      v.load();
    }
  }, [src]);

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
      <picture className="static">
        <ApplePicture
          stem={endStem}
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