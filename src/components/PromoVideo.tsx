"use client";
import { useEffect, useRef, useSyncExternalStore, useState } from "react";

const MQ = {
  large: "(min-width: 1069px)",
  small: "(max-width: 734px)",
  retina: "(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)",
};

function pickSrc(base: string) {
  const q = (s: string) => window.matchMedia(s).matches;
  const retina = q(MQ.retina);
  let size: string;
  if (q(MQ.large)) size = "large";
  else if (q(MQ.small)) size = "small";
  else size = "medium";
  return `${base}/${size}${retina ? "_2x" : ""}.mp4`;
}

/**
 * Apple promo-grid video: muted autoplay-loop that starts when the tile is in
 * view and pauses when scrolled away. Static poster/startframe shows otherwise.
 */
export default function PromoVideo({
  startStem,
  videoBase,
  imgClassName = "",
  ariaHidden = false,
}: {
  startStem: string;
  videoBase: string;
  imgClassName?: string;
  ariaHidden?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const liveSrc = useSyncExternalStore(
    () => () => {},
    () => pickSrc(videoBase),
    () => `${videoBase}/large.mp4`
  );
  const [frozenSrc, setFrozenSrc] = useState<string | null>(null);
  const src = frozenSrc ?? liveSrc;

  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v || reduced) return;
    v.muted = true;
    v.defaultMuted = true;

    const want = pickSrc(videoBase);
    const tryPlay = () => {
      v.muted = true;
      if (v.src !== want) {
        setFrozenSrc(want);
        v.src = want;
        v.load();
      }
      v.currentTime = 0;
      v.play().catch(() => {});
    };
    const pause = () => v.pause();

    const io = new IntersectionObserver(
      (entries) => {
        const ok = entries[0]?.isIntersecting;
        if (ok) tryPlay();
        else pause();
      },
      { threshold: 0.4 }
    );
    io.observe(wrap);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, videoBase]);

  const posterSize = (src.split("/").pop() ?? "large.mp4")
    .replace(/\.mp4$/, "")
    .replace(/_2x$/, "");
  const poster = `${startStem}_${posterSize}.jpg`;

  return (
    <div ref={wrapRef} className="promo-media" aria-hidden={ariaHidden || undefined}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        src={src}
        poster={poster}
        className={imgClassName}
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          objectPosition: "center bottom",
          opacity: playing && !reduced ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
        onPlay={() => setPlaying(true)}
        onWaiting={() => setPlaying(false)}
        onError={() => setPlaying(false)}
      />
      <img
        src={`${startStem}_${posterSize}.jpg`}
        alt=""
        loading="lazy"
        className={`${imgClassName} transition-opacity duration-500`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center bottom",
          opacity: playing && !reduced ? 0 : 1,
        }}
        draggable={false}
      />
    </div>
  );
}