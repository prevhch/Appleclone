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
  { name: "Burgundy", puck: "#5e2b33", src: `${MEDIA}/iphone-18-pro-witb-burgundy-202609` },
  { name: "Glacier", puck: "#dfe4e3", src: `${MEDIA}/iphone-compare-iphone-18-pro-202609` },
  { name: "Silver", puck: "#e3e4e6", src: `${MEDIA}/iphone-compare-iphone-duo-202609` },
  { name: "Black", puck: "#3c3f41", src: `${MEDIA}/iphone-compare-iphone-air-202609` },
];

const STORAGE = [
  { size: "256GB", buy: "Buy from $1199 or $49.95/mo. per month for 24 mo.months", lease: "Lease from $34.99/mo. per month for 24 mo.months" },
  { size: "512GB", buy: "Buy from $1399 or $58.29/mo. per month for 24 mo.months", lease: "Lease from $40.83/mo. per month for 24 mo.months" },
  { size: "1TB", buy: "Buy from $1799 or $74.95/mo. per month for 24 mo.months", lease: "Lease from $52.50/mo. per month for 24 mo.months" },
  { size: "2TB", buy: "Buy from $2399 or $99.95/mo. per month for 24 mo.months", lease: "Lease from $70.01/mo. per month for 24 mo.months" },
];

const CARRIERS = ["AT&T", "T-Mobile", "Verizon", "Connect to any carrier later"];

export default function BuyPage() {
  return (
    <>
      {CSS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div className="rf-bfe-container row">
        <div className="rf-bfe-column-left column large-7">
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

        <div className="rf-bfe-column-right column large-5">
          <header className="rf-bfe-header">
            <div className="rf-bfe-header-wrapper">
              <span className="rf-bfe-coming-soon-violator">New</span>
              <h1 className="rf-bfe-header-title">Pre-order iPhone 18 Pro</h1>
              <div className="rf-bfe-header-price">
                <span className="price-point">Buy from $1199 or $49.95/mo. per month for 24 mo.months</span>
                <span className="price-point">Lease from $34.99/mo. per month for 24 mo.months with Apple Upgrade</span>
              </div>
              <div className="rf-bfe-availabilitybanner">Available starting 9.18.</div>
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
              {[
                { m: "iPhone 18 Pro", d: "6.3-inch display", buy: "Buy from $1199 or $49.95/mo. per month for 24 mo.months", lease: "Lease from $34.99/mo. per month for 24 mo.months" },
                { m: "iPhone 18 Pro Max", d: "6.9-inch display", buy: "Buy from $1299 or $54.12/mo. per month for 24 mo.months", lease: "Lease from $37.99/mo. per month for 24 mo.months" },
              ].map((o, i) => (
                <div key={o.m} className="form-selector">
                  <input
                    className="form-selector-input"
                    type="radio"
                    name="model"
                    defaultChecked={i === 0}
                  />
                  <label className="form-selector-label">
                    {o.m}
                    <span className="form-selector-list-header">{o.d}</span>
                    <span className="rf-bfe-config-options-price price-point">{o.buy}</span>
                    <span className="rf-bfe-config-options-price price-point">{o.lease}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="rf-bfe-dimension-footer">
              Need help choosing a model? Explore the differences in screen size and battery life.
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
              <span className="as-price-highlight">Color Burgundy</span>
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
                    <span className="rf-bfe-config-options-price price-point">{s.buy}</span>
                    <span className="rf-bfe-config-options-price price-point">{s.lease}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="rf-bfe-dimension-footer">
              Not sure how much storage to get? Get a better understanding of how much space
              you&rsquo;ll need.
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
              <h2 className="rf-bfe-dimension-title">Apple Trade In. Get $35–$885 credit towards your new iPhone.</h2>
            </div>
            <div className="rf-bfe-config-options">
              <div className="form-selector">
                <input className="form-selector-input" type="radio" name="tradein" defaultChecked />
                <label className="form-selector-label">
                  Add a trade-in
                  <span className="form-selector-list-header">Answer a few questions to get your estimate.</span>
                </label>
              </div>
              <div className="form-selector">
                <input className="form-selector-input" type="radio" name="tradein" />
                <label className="form-selector-label">No trade-in</label>
              </div>
              <span className="as-price-tradeinmsg">
                Save even more when you trade in and finance with select carrier deals at Apple.
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/iphone-trade-in-pre-purchase-thumbnail`} alt="" aria-hidden="true" />
            </div>
            <div className="rf-bfe-dimension-footer">
              How does trade-in work? Learn how you can save on your order with a trade-in.
            </div>
          </section>

          <section className="rf-bfe-dimension">
            <div className="rf-bfe-dimension-header">
              <h2 className="rf-bfe-dimension-title">
                <span>Payment options. </span>
                <span className="as-subheading">Select the one that works for you.</span>
              </h2>
            </div>
            <div className="rf-bfe-config-options">
              {[
                { t: "Buy", d: "Pay with Apple Pay or other payment methods." },
                { t: "Finance", d: "Pay over time at 0% APR." },
                { t: "Lease with Apple Upgrade", d: "Pay monthly with Klarna. Easily upgrade at the end of your term." },
              ].map((o, i) => (
                <div key={o.t} className="form-selector">
                  <input className="form-selector-input" type="radio" name="payment" defaultChecked={i === 0} />
                  <label className="form-selector-label">
                    {o.t}
                    <span className="form-selector-list-header">{o.d}</span>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="rf-bfe-complimentary-section">
            <div className="rf-bfe-complimentary-header">
              <h2 className="rf-bfe-complimentary-title">
                AppleCare coverage. Peace of mind in every plan.
              </h2>
            </div>
            <div className="rf-bfe-config-options">
              {[
                { t: "AppleCare+ with Theft and Loss", d: "Cover this product only. Unlimited repairs for accidents like drops and spills. 24/7 priority support from Apple experts." },
                { t: "AppleCare One", d: "Cover multiple products, including this iPhone. Theft and loss coverage for iPhone, iPad, and Apple Watch." },
                { t: "No AppleCare coverage", d: "" },
              ].map((o, i) => (
                <div key={o.t} className="form-selector">
                  <input className="form-selector-input" type="radio" name="applecare" defaultChecked={i === 0} />
                  <label className="form-selector-label">
                    {o.t}
                    {o.d ? <span className="form-selector-list-header">{o.d}</span> : null}
                  </label>
                </div>
              ))}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/iphone-apple-care-one-vid1-thumbnail`} alt="" aria-hidden="true" />
            </div>
            <div className="rf-bfe-complimentary-description">
              How does AppleCare work? Explore the features and coverage of AppleCare.
            </div>
          </section>

          <section className="rf-bfe-summary">
            <div className="rf-bfe-summary-section">
              <div className="rf-bfe-summary-price-box">
                <span className="rf-bfe-header-title">Your new iPhone awaits. Make it yours.</span>
                <span className="rf-bfe-summary-price price-point">
                  Buy from $1199 or $49.95/mo. per month for 24 mo.months
                </span>
                <span className="price-point">Get 3% Daily Cash back with Apple Card</span>
              </div>
            </div>
          </section>
        </div>

      </div>

      <div className="rf-bfe-stickybar">
        <div className="rf-bfe-stickybar-scroller">
          <div className="rf-bfe-stickybar-header">Your iPhone 18 Pro</div>
          <button className="rf-bfe-stickybar-button" type="button">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
