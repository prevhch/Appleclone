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

const MEDIA = "/apple/har/iphone-18-pro-buy/media";

const FINISHES = [
  { name: "Black Titanium", puck: "#3c3f41", src: `${MEDIA}/iphone-compare-iphone-18-pro-202609` },
  { name: "Desert Titanium", puck: "#b9a58f", src: `${MEDIA}/iphone-compare-iphone-duo-202609` },
  { name: "Natural Titanium", puck: "#c2bcb2", src: `${MEDIA}/iphone-compare-iphone-air-202609` },
];

const STORAGE = [
  { size: "256GB", price: "From $1,199 or $50.00/mo." },
  { size: "512GB", price: "From $1,399 or $58.35/mo." },
  { size: "1TB", price: "From $1,599 or $66.67/mo." },
];

const CARRIERS = ["AT&T", "T-Mobile", "Verizon"];

export default function BuyPage() {
  return (
    <>
      {CSS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div className="rf-bfe-container">
        <div className="rf-bfe-column-left">
          <section className="rf-bfe-gallery-section">
            <div className="rf-bfe-gallery-wrapper">
              <div className="rf-bfe-gallery">
                <div className="rf-bfe-gallery-content">
                  <div className="rf-bfe-gallery-item">
                    <div className="rf-bfe-gallery-image-wrapper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="rf-bfe-gallery-image"
                        src={`${MEDIA}/iphone-18-pro-witb-burgundy-202609`}
                        alt="iPhone 18 Pro in Black Titanium"
                      />
                    </div>
                  </div>
                </div>
                <div className="rf-bfe-gallery-info">
                  <div className="rf-bfe-gallery-info-content">
                    <span className="rf-bfe-gallery-info-text-bold">
                      Get 3 free months of AppleCare+
                    </span>{" "}
                    with your iPhone 18 Pro purchase.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="rf-bfe-column-right">
          <header className="rf-bfe-header">
            <div className="rf-bfe-header-wrapper">
              <h1 className="rf-bfe-header-title">iPhone 18 Pro</h1>
              <div className="rf-bfe-header-price">
                <span className="price-point">From $1,199 or $50.00/mo.</span>
              </div>
            </div>
          </header>

          <section className="rf-bfe-dimension rf-bfe-dimension-dimensionscreensize">
            <div className="rf-bfe-dimension-header">
              <h2 className="rf-bfe-dimension-title">
                <span>Model. </span>
                <span className="as-subheading">Which is best for you?</span>
              </h2>
            </div>
            <div className="rf-bfe-config-options">
              {["iPhone 18 Pro 6.5-inch", "iPhone 18 Pro Max 6.9-inch"].map((m) => (
                <div key={m} className="form-selector">
                  <input
                    className="form-selector-input"
                    type="radio"
                    name="model"
                    defaultChecked={m.startsWith("iPhone 18 Pro 6")}
                  />
                  <label className="form-selector-label">
                    {m}
                    <span className="rf-bfe-config-options-price price-point">
                      {m.includes("Max") ? "From $1,299" : "From $1,199"}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="rf-bfe-dimension rf-bfe-dimension-dimensioncolor">
            <div className="rf-bfe-dimension-header">
              <h2 className="rf-bfe-dimension-title">
                <span>Finish. </span>
                <span className="as-subheading">Pick your favorite.</span>
              </h2>
            </div>
            <div className="colornav-items">
              {FINISHES.map((f, i) => (
                <div key={f.name} className="colornav-item">
                  <input
                    className="colornav-value rf-bfe-product-dimension-colornav-input"
                    type="radio"
                    name="finish"
                    defaultChecked={i === 0}
                    aria-label={f.name}
                  />
                  <label className="rf-bfe-product-dimension-colornav-label" aria-hidden="true">
                    <span className="colornav-swatch" style={{ backgroundColor: f.puck }} />
                    <span className="colornav-label">{f.name}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.src} alt="" aria-hidden="true" />
                  </label>
                </div>
              ))}
            </div>
            <div className="rf-bfe-dimension-footer">
              <span className="as-price-highlight">Black Titanium</span>
            </div>
          </section>

          <section className="rf-bfe-dimension rf-bfe-dimension-dimensioncapacity">
            <div className="rf-bfe-dimension-header">
              <h2 className="rf-bfe-dimension-title">
                <span>Storage. </span>
                <span className="as-subheading">How much space do you need?</span>
              </h2>
            </div>
            <div className="rf-bfe-config-options">
              {STORAGE.map((s, i) => (
                <div key={s.size} className="form-selector">
                  <input
                    className="form-selector-input"
                    type="radio"
                    name="storage"
                    defaultChecked={i === 0}
                  />
                  <label className="form-selector-label">
                    {s.size}
                    <span className="rf-bfe-config-options-price price-point">{s.price}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="rf-bfe-dimension-footer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/iphone-storage-thumbnail`} alt="" aria-hidden="true" />
            </div>
          </section>

          <section className="rf-bfe-dimension rf-bfe-dimension-carriermodel">
            <div className="rf-bfe-dimension-header">
              <h2 className="rf-bfe-dimension-title">
                <span>Connectivity. </span>
                <span className="as-subheading">Choose a carrier.</span>
              </h2>
            </div>
            <div className="rf-bfe-dimension-carriermodel-options">
              {CARRIERS.map((c, i) => (
                <div key={c} className="form-selector">
                  <input
                    className="form-selector-input"
                    type="radio"
                    name="carrier"
                    defaultChecked={i === 0}
                  />
                  <label className="form-selector-label">
                    {c}
                    <span className="rf-bfe-dimension-carriermodel-optionprice price-point">
                      5G included
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="rf-bfe-dimension">
            <div className="rf-bfe-dimension-header">
              <h2 className="rf-bfe-dimension-title">Apple Trade In.</h2>
            </div>
            <div className="rf-bfe-config-options">
              <span className="as-price-tradeinmsg">
                iPhone 17 Pro Max — up to $700 credit.
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/iphone-trade-in-pre-purchase-thumbnail`} alt="" aria-hidden="true" />
            </div>
          </section>

          <section className="rf-bfe-complimentary-section">
            <div className="rf-bfe-complimentary-header">
              <h2 className="rf-bfe-complimentary-title">
                Get 3 months of AppleCare+ free.
              </h2>
            </div>
            <div className="rf-bfe-complimentary-description">
              AppleCare+ for iPhone 18 Pro / 18 Pro Max, with Apple Music, TV+ and Arcade.
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/iphone-apple-care-one-vid1-thumbnail`} alt="" aria-hidden="true" />
            </div>
          </section>

          <section className="rf-bfe-summary">
            <div className="rf-bfe-summary-section">
              <div className="rf-bfe-summary-price-box">
                <span className="rf-bfe-summary-price price-point">
                  From $1,199 or $50.00/mo.
                </span>
              </div>
            </div>
          </section>
        </div>

        <div className="rf-bfe-stickybar">
          <div className="rf-bfe-stickybar-scroller">
            <div className="rf-bfe-stickybar-header">Your iPhone 18 Pro</div>
            <button className="rf-bfe-stickybar-button" type="button">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
