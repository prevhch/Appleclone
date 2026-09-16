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

const FINISHES = ["burgundy", "glacier", "silver", "black"] as const;

const FINISH_LABEL: Record<(typeof FINISHES)[number], string> = {
  burgundy: "Burgundy",
  glacier: "Glacier",
  silver: "Silver",
  black: "Black",
};

const STORAGE = [
  { size: "256GB", buy: "Buy from $1199 or $49.95/mo. per month for 24 mo.months", lease: "Lease from $34.99/mo. per month for 24 mo.months" },
  { size: "512GB", buy: "Buy from $1399 or $58.29/mo. per month for 24 mo.months", lease: "Lease from $40.83/mo. per month for 24 mo.months" },
  { size: "1TB", buy: "Buy from $1799 or $74.95/mo. per month for 24 mo.months", lease: "Lease from $52.50/mo. per month for 24 mo.months" },
  { size: "2TB", buy: "Buy from $2399 or $99.95/mo. per month for 24 mo.months", lease: "Lease from $70.01/mo. per month for 24 mo.months" },
];

const CARRIERS = ["AT&T", "T-Mobile", "Verizon", "Connect to any carrier later"];

function DimHeader({ id, solid, sub }: { id: string; solid: string; sub?: string }) {
  return (
    <h2 id={id} className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
      <span>{solid} </span>
      {sub ? <span className="as-subheading">{sub}</span> : null}
    </h2>
  );
}

export default function BuyPage() {
  return (
    <>
      {CSS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div className="as-carrierpromotion-ribboncontainer row large-12 small-12 large-centered small-centered">
        <span>Carrier Deals at Apple</span>
        <a href="#carrier-deals">See all deals</a>
        <span>Carrier Financing</span>
        <div className="as-carrierpromotion-ribbon-item">AT&amp;T — Save up to $1200 for an eligible trade-in in any condition.</div>
        <div className="as-carrierpromotion-ribbon-item">T-Mobile — Save up to $1200 for an eligible trade-in in any condition.</div>
        <div className="as-carrierpromotion-ribbon-item">Verizon — Save up to $1020 for an eligible trade-in in any condition.</div>
      </div>
      <div className="rf-bfe-container row">
        <div className="rf-bfe-column-left column large-7">
          <section className="rf-bfe-gallery-section">
            <div className="rf-bfe-gallery-wrapper">
              <div className="rf-bfe-gallery">
                <div className="rf-bfe-gallery-content">
                  {[1, 2].map((n) => (
                    <div key={n} className="rf-bfe-gallery-item">
                      <div className="rf-bfe-gallery-image-wrapper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="rf-bfe-gallery-image"
                          src={`${MEDIA}/iphone-18-pro-model-unselect-gallery-${n}-202609`}
                          alt={n === 1 ? "iPhone 18 Pro Max and iPhone 18 Pro in Burgundy" : "iPhone 18 Pro front exterior"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rf-bfe-gallery-info">
                  <div className="rf-bfe-gallery-info-content">
                    <span className="rf-bfe-gallery-info-text-bold">
                      Get 3 free months of AppleCare+
                    </span>{" "}
                    with your iPhone 18 Pro purchase.
                  </div>
                </div>
                <div className="rc-gallery-dotnav dotnav">
                  <ul className="dotnav-items" role="tablist">
                    {[1, 2].map((n) => (
                      <li key={n} role="presentation" className="dotnav-item">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={n === 1}
                          aria-label={`Gallery image ${n}`}
                          tabIndex={-1}
                          className="rc-gallery-dotnav-item"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rc-gallery-paddlenav paddlenav paddlenav-alpha paddlenav-elevated">
                  <button
                    type="button"
                    className="paddlenav-arrow paddlenav-arrow-previous"
                    disabled
                    aria-label="Previous gallery image"
                  >
                    <span className="visuallyhidden">Previous gallery image</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-hidden="true">
                      <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C20.9241,26.648 19.9761,26.646 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.5 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1461,10.528 22.1441,11.477 21.559,12.062 Z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="paddlenav-arrow paddlenav-arrow-next"
                    aria-label="Next gallery image"
                  >
                    <span className="visuallyhidden">Next gallery image</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-hidden="true">
                      <path d="M14.4411,12.062 L20.3821,17.984 L14.4779,23.944 C13.895,24.533 13.8979,25.482 14.4869,26.065 C15.0759,26.648 16.0239,26.646 16.6079,26.056 L23.5649,19.034 C24.1469,18.446 24.1449,17.5 23.5589,16.916 L16.5589,9.938 C15.9739,9.353 15.0219,9.354 14.4379,9.941 C13.8539,10.528 13.8559,11.477 14.4411,12.062 Z" />
                    </svg>
                  </button>
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

          <div className="rf-bfe-step rf-bfe-first-step rf-bfe-dimension rf-bfe-dimension-dimensionscreensize">
            <DimHeader id="dimensionScreensize" solid="Model." sub="Which is best for you?" />
            <div className="rf-bfe-config-options">
              {[
                { m: "iPhone 18 Pro", d: "6.3-inch display", buy: "Buy from $1199 or $49.95/mo. per month for 24 mo.months", lease: "Lease from $34.99/mo. per month for 24 mo.months" },
                { m: "iPhone 18 Pro Max", d: "6.9-inch display", buy: "Buy from $1299 or $54.12/mo. per month for 24 mo.months", lease: "Lease from $37.99/mo. per month for 24 mo.months" },
              ].map((o, i) => (
                <div key={o.m} className="rc-dimension-selector-row form-selector">
                  <input
                    className="form-selector-input"
                    id={`model-${i}`}
                    type="radio"
                    name="dimensionScreensize"
                    defaultChecked={i === 0}
                  />
                  <label className="form-selector-label" htmlFor={`model-${i}`}>
                    <span className="row">
                      <span className="column form-selector-left-col rf-bfe-selector-left-col">
                        <span className="form-selector-title">{o.m}</span>
                        <span className="form-selector-list-header">{o.d}</span>
                        <span className="rf-bfe-config-options-price price-point">{o.buy}</span>
                        <span className="rf-bfe-config-options-price price-point">{o.lease}</span>
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="rf-bfe-dimension-footer">
              Need help choosing a model? Explore the differences in screen size and battery life.
            </div>
          </div>

          <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncolor">
            <fieldset className="colornav rc-dimension-colornav rf-bfe-product-dimension-group">
              <legend>
                <DimHeader id="dimensionColor" solid="Finish." sub="Pick your favorite." />
              </legend>
              <ul className="colornav-items">
                {FINISHES.map((f, i) => (
                  <li key={f} className="colornav-item">
                    <input
                      id={`finish-${f}`}
                      className="colornav-value rc-dimension-colornav-input rf-bfe-product-dimension-colornav-input"
                      type="radio"
                      value={f}
                      name="dimensionColor"
                      defaultChecked={i === 0}
                      aria-label={FINISH_LABEL[f]}
                    />
                    <label
                      htmlFor={`finish-${f}`}
                      className="colornav-link rc-dimension-colornav-link rf-bfe-product-dimension-colornav-label"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="colornav-swatch"
                        src={`${MEDIA}/iphone-18-pro-finish-${f}-202609`}
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="colornav-label">{FINISH_LABEL[f]}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
            <div className="rf-bfe-dimension-footer">
              <span className="as-price-highlight">Color Burgundy</span>
            </div>
          </div>

          <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncapacity">
            <DimHeader id="dimensionCapacity" solid="Storage." sub="How much space do you need?" />
            <div className="rf-bfe-config-options">
              {STORAGE.map((s, i) => (
                <div key={s.size} className="rc-dimension-selector-row form-selector">
                  <input
                    className="form-selector-input"
                    id={`storage-${i}`}
                    type="radio"
                    name="dimensionCapacity"
                    defaultChecked={i === 0}
                  />
                  <label className="form-selector-label" htmlFor={`storage-${i}`}>
                    <span className="row">
                      <span className="column form-selector-left-col rf-bfe-selector-left-col">
                        <span className="form-selector-title">{s.size}</span>
                        <span className="rf-bfe-config-options-price price-point">{s.buy}</span>
                        <span className="rf-bfe-config-options-price price-point">{s.lease}</span>
                      </span>
                    </span>
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
          </div>

          <div className="rf-bfe-step row rf-bfe-dimension rf-bfe-dimension-carriermodel-section">
            <DimHeader id="dimensionCarrier" solid="Connectivity." sub="Choose a carrier." />
            <div className="rf-bfe-dimension-carriermodel-options">
              {CARRIERS.map((c, i) => (
                <div key={c} className="rc-dimension-selector-row form-selector">
                  <input
                    className="form-selector-input"
                    id={`carrier-${i}`}
                    type="radio"
                    name="dimensionCarrierModel"
                    defaultChecked={i === 0}
                  />
                  <label className="form-selector-label" htmlFor={`carrier-${i}`}>
                    <span className="row">
                      <span className="column form-selector-left-col rf-bfe-selector-left-col">
                        <span className="form-selector-title">{c}</span>
                        <span className="typography-body-reduced rf-bfe-dimension-carriermodel-optionprice">
                          5G included
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension">
            <DimHeader id="dimensionTradeIn" solid="Apple Trade In. Get $35–$885 credit towards your new iPhone." />
            <div className="rf-bfe-config-options">
              <div className="rc-dimension-selector-row form-selector">
                <input className="form-selector-input" id="tradein-add" type="radio" name="tradein" defaultChecked />
                <label className="form-selector-label" htmlFor="tradein-add">
                  <span className="row">
                    <span className="column form-selector-left-col rf-bfe-selector-left-col">
                      <span className="form-selector-title">Add a trade-in</span>
                      <span className="form-selector-list-header">Answer a few questions to get your estimate.</span>
                    </span>
                  </span>
                </label>
              </div>
              <div className="rc-dimension-selector-row form-selector">
                <input className="form-selector-input" id="tradein-no" type="radio" name="tradein" />
                <label className="form-selector-label" htmlFor="tradein-no">
                  <span className="row">
                    <span className="column form-selector-left-col rf-bfe-selector-left-col">
                      <span className="form-selector-title">No trade-in</span>
                    </span>
                  </span>
                </label>
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
          </div>

          <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension">
            <DimHeader id="dimensionPayment" solid="Payment options." sub="Select the one that works for you." />
            <div className="rf-bfe-config-options">
              {[
                { t: "Buy", d: "Pay with Apple Pay or other payment methods." },
                { t: "Finance", d: "Pay over time at 0% APR." },
                { t: "Lease with Apple Upgrade", d: "Pay monthly with Klarna. Easily upgrade at the end of your term." },
              ].map((o, i) => (
                <div key={o.t} className="rc-dimension-selector-row form-selector">
                  <input className="form-selector-input" id={`pay-${i}`} type="radio" name="payment" defaultChecked={i === 0} />
                  <label className="form-selector-label" htmlFor={`pay-${i}`}>
                    <span className="row">
                      <span className="column form-selector-left-col rf-bfe-selector-left-col">
                        <span className="form-selector-title">{o.t}</span>
                        <span className="form-selector-list-header">{o.d}</span>
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

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
                <div key={o.t} className="rc-dimension-selector-row form-selector">
                  <input className="form-selector-input" id={`care-${i}`} type="radio" name="applecare" defaultChecked={i === 0} />
                  <label className="form-selector-label" htmlFor={`care-${i}`}>
                    <span className="row">
                      <span className="column form-selector-left-col rf-bfe-selector-left-col">
                        <span className="form-selector-title">{o.t}</span>
                        {o.d ? <span className="form-selector-list-header">{o.d}</span> : null}
                      </span>
                    </span>
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
