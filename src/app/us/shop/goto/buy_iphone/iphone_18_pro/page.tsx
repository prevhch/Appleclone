import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop iPhone 18 Pro and iPhone 18 Pro Max - Apple",
  description:
    "Buy iPhone 18 Pro and iPhone 18 Pro Max with trade-in. Get 3 free months of AppleCare+. Choose carrier, color, storage, and trade-in before checkout.",
};

export const dynamic = "force-static";

const CSS = [
  "/apple/har/iphone-18-pro-buy/css/live-1-ac-globalnav.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-2-ac-external.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-3-common-vendor.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-4-step1evolution.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-5-buy-flow-iphone.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-6-as-iphone-18pro.built.css",
];

const TILE: React.CSSProperties = {
  borderRadius: "18px",
  border: "1px solid #d2d2d7",
  padding: "12px",
};

function LazyImage({ src, alt, ratio }: { src: string; alt: string; ratio: number }) {
  return (
    <div style={{ position: "relative", aspectRatio: String(ratio), overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* FIXME: next/image rewrite against harness needs width; keep plain <img> so byte-true Apple url stays intact */}
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
}

export default function BuyPage() {
  return (
    <>
      {CSS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div id="ac-globalnav" />
      <nav className="ac-gn ac-gn-no-js" aria-label="Global" role="navigation">
        <div id="ac-gn-menustate" className="ac-gn-menustate" />
        <div className="ac-gn-search-placeholder" role="search" />
      </nav>
      <main className="rf-buyflow rf-aos-timetoshop">
        <section className="rf-hcard rf-hcard-hero">
          <h1 className="typography-headline-evolvability-large">iPhone 18 Pro</h1>
          <h2 className="typography-headline-evolvability">iPhone 18 Pro Max</h2>
          <LazyImage
            src="/apple/har/iphone-18-pro-buy/media/iphone-18-pro-witb-burgundy-202609"
            alt="iPhone 18 Pro in Black Titanium"
            ratio={1.2}
          />
          <p className="typography-body-large">
            Get 3 free months of AppleCare+ with your iPhone 18 Pro purchase.
          </p>
        </section>

        <section className="rf-category rf-aos-step rf-aos-step1">
          {[
            { label: "Size: 6.5\u00a0inch", node: null },
            { label: "Finish: Black Titanium", node: null },
            { label: "Storage: 256GB", node: null },
            { label: "Carrier: AT&T", node: null },
            { label: "Trade-in: None", node: null },
          ].map((r, i) => (
            <div key={i} className="rf-hcard rf-hcard-label" style={TILE}>
              <span className="typography-body-tiny rf-nowrap">{r.label}</span>
            </div>
          ))}
        </section>

        <section className="rf-aos-step rf-aos-step2">
          <h2 className="typography-headline">Choose your finish.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { name: "iPhone 18 Pro", src: "/apple/har/iphone-18-pro-buy/media/iphone-compare-iphone-18-pro-202609" },
              { name: "iPhone 18 Pro Max", src: "/apple/har/iphone-18-pro-buy/media/iphone-compare-iphone-duo-202609" },
              { name: "iPhone Air", src: "/apple/har/iphone-18-pro-buy/media/iphone-compare-iphone-air-202609" },
            ].map((m) => (
              <div key={m.name} style={TILE} aria-selected={m.name === "iPhone 18 Pro"}>
                <LazyImage src={m.src} alt={m.name} ratio={1.2} />
                <span className="typography-caption">{m.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rf-aos-step rf-aos-step3">
          <h2 className="typography-headline">Choose your storage.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { l: "256GB", s: "From $1,199 or $50.00/mo." },
              { l: "512GB", s: "From $1,399 or $58.35/mo." },
              { l: "1TB", s: "From $1,599 or $66.67/mo." },
            ].map((s) => (
              <div key={s.l} style={TILE} aria-selected={s.l === "256GB"}>
                <span className="typography-headline-evolvability">{s.l}</span>
                <span className="typography-caption">{s.s}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rf-aos-step rf-aos-step4">
          <h2 className="typography-headline">Choose how you connect.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {["AT&T", "T-Mobile", "Verizon", "Sprint"].map((c) => (
              <div key={c} style={TILE} aria-selected={c === "AT&T"}>
                <span className="typography-body">{c}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rf-aos-step rf-aos-step5">
          <h2 className="typography-headline">Trade in your current smartphone.</h2>
          <div style={TILE}>
            <span className="typography-body">iPhone 17 Pro Max — up to $700 credit.</span>
          </div>
        </section>

        <section className="rf-aos-step rf-aos-step6">
          <h2 className="typography-headline">Get 3 months of AppleCare+ free with Apple Music, TV+ and Arcade.</h2>
          <div style={TILE} aria-selected={true}>
            <span className="typography-body-large">AppleCare+ for iPhone 18 Pro / 18 Pro Max</span>
          </div>
        </section>

        <section className="rf-ctabar rf-ctabar-sticky">
          <div className="rf-ctabar-content">
            <span className="typography-headline">Your iPhone 18 Pro</span>
            <button className="button button-primary button-buysticky" type="button">
              Continue
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
