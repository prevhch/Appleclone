import Link from "next/link";
import ApplePicture from "@/components/ApplePicture";
import HeroScrub from "@/components/HeroScrub";
import PromoVideo from "@/components/PromoVideo";
import Reveal from "@/components/Reveal";
import Entertainment from "@/components/Entertainment";
import { HERO_18PRO, HERO_DUO, WATCH12, PROMOS, type Promo } from "@/lib/site";

function Ctas({ links, dark = false }: { links: Promo["cta"]; dark?: boolean }) {
  return (
    <div className={`tile-ctas ${dark ? "theme-dark" : ""}`}>
      {links.map((c, i) => (
        <Link
          key={c.label}
          href={c.href}
          aria-label={c.ariaLabel ?? c.label}
          className={i === 0 ? "btn" : "btn btn-secondary"}
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}

function Sup({ n, dark = false }: { n: number; dark?: boolean }) {
  return (
    <sup className="footnote-number">
      <a href={`#footnote-${n}`} aria-label={`Footnote ${n}`} className={dark ? "text-inherit" : ""}>
        {n}
      </a>
    </sup>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero 1: iPhone 18 Pro — dark theme, plays when viewed */}
      <HeroScrub
        title="iPhone 18 Pro"
        sub="Pro further."
        avail="Available starting 9.18"
        theme="dark"
        tall
        tileLink={HERO_18PRO.tileLink}
        links={[
          { label: "Learn more", href: "/iphone-18-pro", ariaLabel: "Learn more, iPhone 18 Pro" },
          { label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_18_pro", ariaLabel: "Pre-order, iPhone 18 Pro" },
        ]}
        startStem={HERO_18PRO.startStem}
        endStem={HERO_18PRO.endStem}
        videoBase={HERO_18PRO.videoBase}
      />

      {/* Hero 2: iPhone Duo — light static band (no video on apple.com) */}
      <section className="hero-static relative flex flex-col items-center bg-[#f5f5f7] pt-11 md:pt-14 text-center overflow-hidden">
        <a href={HERO_DUO.tileLink} aria-hidden="true" tabIndex={-1} className="tile-link">
          <span className="visuallyhidden">iPhone Duo</span>
        </a>
        <Reveal className="hero-copy z-20 px-4 pointer-events-none">
          <h2 className="hero-title text-[#1d1d1f]">iPhone Duo</h2>
          <p className="hero-sub text-[#1d1d1f]">Hello, hello.</p>
          <p className="hero-avail !text-[#6e6e73]">
            Pre-order starting 5:00 a.m. PT on 10.16 Available starting 10.23
          </p>
          <div className="pointer-events-auto">
            <Ctas
              links={[
                { label: "Learn more", href: "/iphone-duo", ariaLabel: "Learn more, iPhone Duo" },
                { label: "View pricing", href: "/us/shop/goto/buy_iphone/iphone_duo", ariaLabel: "View pricing, iPhone Duo" },
              ]}
            />
          </div>
        </Reveal>
        <ApplePicture
          stem={HERO_DUO.stem}
          alt="iPhone Duo unfolded held in two hands"
          tall
          eager
          className="absolute inset-0 z-10"
          imgClassName="hero-img"
        />
      </section>

      {/* Hero 3: Apple Watch Series 12 — full-width SPLIT tile (dark, static image) */}
      <section className="hero-band relative flex flex-col items-center overflow-hidden bg-black text-center">
        <a href={WATCH12.tileLink} aria-hidden="true" tabIndex={-1} className="tile-link">
          <span className="visuallyhidden">Apple Watch Series 12</span>
        </a>
        <div className="hero-copy z-20 flex w-full flex-1 flex-col items-center px-4 pt-11 md:pt-14 pointer-events-none">
          <h2 className="flex justify-center">
            <ApplePicture
              stem={WATCH12.logoStem}
              ext="png"
              className="h-[44px] md:h-[66px] [&>img]:h-[44px] [&>img]:md:h-[66px] [&>img]:w-auto [&>img]:object-contain"
              ariaHidden
            />
            <span className="visuallyhidden">Apple Watch Series 12</span>
          </h2>
          <div className="mt-auto flex flex-col items-center pb-[63px]">
            <p className="hero-sub !mb-0 text-[#f5f5f7]">
              The most accurate heart rate sensing in a wearable.
              <Sup n={1} dark />
            </p>
            <p className="hero-avail !text-[#86868b]" style={{ marginTop: 9 }}>
              Available starting 9.18
            </p>
            <div
              className="pointer-events-auto grid grid-flow-col gap-[17px] theme-dark"
              style={{ marginTop: 15 }}
            >
              <Link className="btn" href="/apple-watch-series-12/" aria-label="Learn more, Apple Watch Series 12">
                Learn more
              </Link>
              <Link
                className="btn btn-secondary"
                href="/us/shop/goto/buy_watch/apple_watch_series_12"
                aria-label="Pre-order, Apple Watch Series 12"
              >
                Pre-order
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-media absolute inset-0 z-10">
          <ApplePicture
            stem={WATCH12.imgStem}
            alt="Apple Watch Series 12"
            eager
            className="absolute inset-0 h-full w-full"
            imgClassName="hero-img"
          />
        </div>
      </section>

      {/* Promo tiles — pill buttons like Apple promo tiles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white max-w-[2560px] mx-auto">
        {PROMOS.map((p) => (
          <Reveal key={p.title}>
            <div className={`promo-tile relative ${p.dark ? "bg-black text-white theme-dark" : "bg-[#f5f5f7]"}`}>
              <a href={p.tileLink} aria-hidden="true" tabIndex={-1} className="tile-link">
                <span className="visuallyhidden">{p.title}</span>
              </a>
              <div className="hero-copy z-20 px-6 pointer-events-none">
                {p.logoStem ? (
                  <h3 className="flex justify-center">
                    <ApplePicture
                      stem={p.logoStem}
                      ext="png"
                      className="h-5 [&>img]:h-5 [&>img]:w-auto [&>img]:object-contain"
                      ariaHidden
                    />
                    <span className="visuallyhidden">{p.title}</span>
                  </h3>
                ) : (
                  <h3 className="mt-2 font-semibold tracking-tight" style={{ fontSize: "40px", lineHeight: "44px" }}>{p.title}</h3>
                )}
                <p className={`mt-1 leading-snug ${p.dark ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`} style={{ fontSize: "21px", lineHeight: "25px" }}>
                  {p.sub}
                  {p.sup !== undefined && <Sup n={p.sup} dark={p.dark} />}
                </p>
                {p.avail && (
                  <p className={`mt-1 text-[13px] ${p.dark ? "text-[#86868b]" : "text-[#6e6e73]"}`}>{p.avail}</p>
                )}
                <div className="pointer-events-auto">
                  <Ctas links={p.cta} dark={p.dark} />
                </div>
              </div>
              {p.videoBase && p.startStem ? (
                <PromoVideo
                  startStem={p.startStem}
                  endStem={p.imgStem}
                  videoBase={p.videoBase}
                />
              ) : (
                <ApplePicture
                  stem={p.imgStem}
                  alt={p.title}
                  className="promo-media"
                  imgClassName="promo-img mt-4 transition-transform duration-700 hover:scale-[1.02]"
                  ariaHidden
                />
              )}
            </div>
          </Reveal>
        ))}
      </section>

      <Entertainment />
    </main>
  );
}
