"use client";

import { useEffect, useState } from "react";

const MEDIA = "/apple/har/iphone-18-pro-buy/media";

const FINISHES = ["burgundy", "glacier", "silver", "black"] as const;
type Finish = (typeof FINISHES)[number];

const FINISH_LABEL: Record<Finish, string> = {
  burgundy: "Burgundy",
  glacier: "Glacier",
  silver: "Silver",
  black: "Black",
};

const FINISH_DESC: Record<Finish, string> = {
  burgundy: "burgundy color (dark red)",
  glacier: "glacier color (light blue)",
  silver: "silver color",
  black: "black color",
};

const FINISH_GALLERY_ALT: Record<Finish, string> = {
  burgundy: "iPhone 18 Pro, back exterior, burgundy color (dark red), Pro Fusion camera system",
  glacier: "iPhone 18 Pro, back exterior, glacier color (light blue), Pro Fusion camera system",
  silver: "iPhone 18 Pro, back exterior, silver color, Pro Fusion camera system",
  black: "iPhone 18 Pro, back exterior, black color, Pro Fusion camera system",
};

const MODEL_SIZE = ["6-3inch", "6-9inch"] as const;

function gallerySrc(modelIdx: number, finish: Finish, variant: number) {
  const base = `iphone-18-pro-finish-select-202609-${MODEL_SIZE[modelIdx]}-${finish}`;
  return `${MEDIA}/${base}${variant === 1 ? "_AV1" : ""}`;
}

const MODELS = [
  {
    name: "iPhone\u00a018\u00a0Pro",
    display: "6.3-inch display",
    prices: [
      { buy: "$1199", mo: "$49.95/mo.", lease: "$34.99/mo." },
      { buy: "$1399", mo: "$58.29/mo.", lease: "$40.83/mo." },
      { buy: "$1799", mo: "$74.95/mo.", lease: "$52.50/mo." },
      { buy: "$2399", mo: "$99.95/mo.", lease: "$70.01/mo." },
    ],
  },
  {
    name: "iPhone\u00a018\u00a0Pro\u00a0Max",
    display: "6.9-inch display",
    prices: [
      { buy: "$1299", mo: "$54.12/mo.", lease: "$37.99/mo." },
      { buy: "$1499", mo: "$62.45/mo.", lease: "$43.84/mo." },
      { buy: "$1899", mo: "$79.12/mo.", lease: "$55.54/mo." },
      { buy: "$2499", mo: "$104.12/mo.", lease: "$73.09/mo." },
    ],
  },
];

const STORAGE = ["256GB", "512GB", "1TB", "2TB"];
const CARRIERS = ["AT&T", "T-Mobile", "Verizon", "Connect to any carrier later"];

function OptLabel({
  id,
  name,
  checked,
  defaultChecked,
  onChange,
  title,
  sub,
  subHeader,
  prices,
}: {
  id: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
  title: string;
  sub?: string;
  subHeader?: boolean;
  prices?: string[];
}) {
  return (
    <div className="rc-dimension-selector-row form-selector">
      <input
        className="form-selector-input"
        id={id}
        type="radio"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label className="form-selector-label" htmlFor={id}>
        <span className="row">
          <span className="column form-selector-left-col rf-bfe-selector-left-col">
            <span className="form-selector-title">
              {title}
              {sub && !subHeader ? <span className="form-label-small">{sub}</span> : null}
            </span>{" "}
            {sub && subHeader ? <span className="form-selector-list-header">{sub}</span> : null}
          </span>
          {prices ? (
            <span className="column form-selector-right-col rf-bfe-selector-right-col">
              {prices.map((pr) => (
                <span key={pr} className="rf-bfe-config-options-price price-point">{pr}</span>
              ))}
            </span>
          ) : null}
        </span>
      </label>
    </div>
  );
}

export default function BuyFlow() {
  const [modelIdx, setModelIdx] = useState(0);
  const [finish, setFinish] = useState<Finish>("burgundy");
  const [storageIdx, setStorageIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [galIdx, setGalIdx] = useState(0);

  const pickFinish = (f: Finish) => { setFinish(f); setGalIdx(0); };
  const pickModel = (i: number) => { setModelIdx(i); setGalIdx(0); };
  const gSrc = gallerySrc(modelIdx, finish, galIdx);
  const gAlt = FINISH_GALLERY_ALT[finish];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const model = MODELS[modelIdx];
  const price = model.prices[storageIdx];
  const buyLine = `Buy from ${price.buy} or ${price.mo} for 24 mo.*`;
  const leaseLine = `Lease from ${price.lease} for 24 mo.#`;
  const summaryDesc = `${model.name}, back exterior, ${FINISH_DESC[finish]}, Pro Fusion camera system, rectangular housing spanning the top, 3 lenses on left, flash, microphone, and LiDAR Scanner on right`;


  return (
    <div className="rf-bfe">
      <div className="rf-bfe-header-wrapper">
        <div className="rf-bfe-header">
        <div data-autom="bfe-header">
          <span className="badge badge-no-scrim">New</span>
          <h1 className="fwl">Pre-order {model.name}</h1>
          Already have an iPhone saved? <span className="more">View ›</span>
          <br />
          Available starting 9.18.
        </div>
          <div className="rf-bfe-header-price-wrapper">
            <div className="rf-bfe-header-price" data-autom="headerPrice">
              <div className="rc-prices rc-prices-default typography-label">
                <div className="rc-price">
                  <div className="rc-prices-currentprice typography-label">
                    <div className="rc-prices-fullprice" data-autom="full-price">
                      <span className="price-point price-point-fullPrice">
                        Buy from <span className="nowrap">{price.buy}</span>
                      </span>{" "}
                      <span className="price-point price-point-acmiPrice">
                        or <span className="nowrap">{price.mo}</span> for 24 mo.*
                      </span>
                    </div>
                    <div className="rc-prices-leasetext">
                      <span className="price-point">
                        Lease from <span className="nowrap">{price.lease}</span> for 24 mo. with Apple Upgrade#
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rf-bfe-header-ai">
            <span>Apple Intelligence and Siri AI</span> <span className="more">Learn more ⊕</span>
          </div>
        </div>
        </div>
        <div className="rf-bfe-header-rightsection" style={{ maxWidth: 340 }}>
          <div className="rf-bfe-header-learnmorelink-items">
            <div className="rf-bfe-header-learnmorelink rf-bfe-header-tradein-learnmorelink">
              <a className="rf-bfe-header-plusicon" role="button" href="#tradein">
                Get $35–$885 for your trade-in.
              </a>
            </div>
            <div className="rf-bfe-header-learnmorelink">
              <a className="rf-bfe-header-plusicon" role="button" href="#payment">
                See how to pay monthly.
              </a>
          </div>
        </div>
      </div>

      <div className="rf-bfe-main row">
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
                      src={gSrc}
                      alt={gAlt}
                      data-finish={finish}
                    />
                  </div>
                </div>
              </div>
              <div className="rf-bfe-gallery-info">
                <div className="rf-bfe-gallery-info-content">
                  <span className="rf-bfe-gallery-info-text-bold">
                    Get 3 free months of AppleCare+
                  </span>{" "}
                  with your {model.name} purchase.
                </div>
              </div>
              <div className="rc-gallery-dotnav dotnav">
                <ul className="dotnav-items" role="tablist">
                  {[0, 1].map((n) => (
                    <li key={n} role="presentation" className="dotnav-item">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={n === galIdx}
                        aria-label={`Gallery image ${n + 1}`}
                        tabIndex={-1}
                        className="rc-gallery-dotnav-item"
                        onClick={() => setGalIdx(n)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rc-gallery-paddlenav paddlenav paddlenav-alpha paddlenav-elevated">
                <button
                  type="button"
                  className="paddlenav-arrow paddlenav-arrow-previous"
                  disabled={galIdx === 0}
                  aria-label="Previous gallery image"
                  onClick={() => setGalIdx(0)}
                >
                  <span className="visuallyhidden">Previous gallery image</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-hidden="true">
                    <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C20.9241,26.648 19.9761,26.646 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.5 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1461,10.528 22.1441,11.477 21.559,12.062 Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="paddlenav-arrow paddlenav-arrow-next"
                  disabled={galIdx === 1}
                  aria-label="Next gallery image"
                  onClick={() => setGalIdx(1)}
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

      <div className="rf-bfe-column-right column large-5 rf-bfe-selectionarea">
        <div className="rf-bfe-step rf-bfe-first-step rf-bfe-dimension rf-bfe-dimension-dimensionscreensize">
          <h2 id="dimensionScreensize" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Model. </span>
            <span className="as-subheading">Which is best for you?</span>
          </h2>
          <div className="rf-bfe-config-options">
            {MODELS.map((o, i) => (
              <OptLabel
                key={o.name}
                id={`model-${i}`}
                name="dimensionScreensize"
                checked={i === modelIdx}
                onChange={() => pickModel(i)}
                title={o.name}
                sub={o.display}
                prices={[
                  `Buy from ${o.prices[storageIdx].buy} or ${o.prices[storageIdx].mo} for 24 mo.*`,
                  `Lease from ${o.prices[storageIdx].lease} for 24 mo.#`,
                ]}
              />
            ))}
          </div>
          <div className="rf-bfe-dimension-footer">
            Need help choosing a model? Explore the differences in screen size and battery life.
          </div>
        </div>

        <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncolor">
          <fieldset className="colornav rc-dimension-colornav rf-bfe-product-dimension-group">
            <legend>
              <h2 id="dimensionColor" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
                <span>Finish. </span>
                <span className="as-subheading">Pick your favorite.</span>
              </h2>
            </legend>
            <div className="rf-bfe-product-dimension-colornav-header">Color</div>
            <ul className="colornav-items">
              {FINISHES.map((f) => (
                <li key={f} className="colornav-item">
                  <input
                    id={`finish-${f}`}
                    className="colornav-value rc-dimension-colornav-input rf-bfe-product-dimension-colornav-input"
                    type="radio"
                    value={f}
                    name="dimensionColor"
                    checked={f === finish}
                    onChange={() => pickFinish(f)}
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
            <span className="as-price-highlight">Color {FINISH_LABEL[finish]}</span>
          </div>
        </div>

        <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncapacity">
          <h2 id="dimensionCapacity" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Storage. </span>
            <span className="as-subheading">How much space do you need?</span>
          </h2>
          <div className="rf-bfe-config-options">
            {STORAGE.map((size, i) => (
              <OptLabel
                key={size}
                id={`storage-${i}`}
                name="dimensionCapacity"
                checked={i === storageIdx}
                onChange={() => setStorageIdx(i)}
                title={size}
                prices={[
                  `Buy from ${model.prices[i].buy} or ${model.prices[i].mo} for 24 mo.*`,
                  `Lease from ${model.prices[i].lease} for 24 mo.#`,
                ]}
              />
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
          <h2 id="dimensionCarrier" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Connectivity. </span>
            <span className="as-subheading">Choose a carrier.</span>
          </h2>
          <div className="rf-bfe-dimension-carriermodel-options">
            {CARRIERS.map((c, i) => (
              <OptLabel
                key={c}
                id={`carrier-${i}`}
                name="dimensionCarrierModel"
                defaultChecked={i === 0}
                title={c}
                sub="5G included"
              />
            ))}
          </div>
          <div className="rf-bfe-dimension-footer">
            Is it easy to get connected? Yes. We&rsquo;ll help you set up your carrier, number, and rate plan.
          </div>
        </div>

        <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension">
          <h2 id="dimensionTradeIn" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Apple Trade In. Get $35–$885 credit towards your new iPhone.</span>
          </h2>
          <div className="rf-bfe-config-options">
            <OptLabel subHeader id="tradein-add"  name="tradein" defaultChecked title="Add a trade-in" sub="Answer a few questions to get your estimate." />
            <OptLabel subHeader id="tradein-no"  name="tradein" title="No trade-in" />
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
          <h2 id="dimensionPayment" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Payment options. </span>
            <span className="as-subheading">Select the one that works for you.</span>
          </h2>
          <div className="rf-bfe-config-options">
            <OptLabel subHeader id="pay-0"  name="payment" defaultChecked title="Buy" sub="Pay with Apple Pay or other payment methods." />
            <OptLabel subHeader id="pay-1"  name="payment" title="Finance" sub="Pay over time at 0% APR." />
            <OptLabel subHeader id="pay-2"  name="payment" title="Lease with Apple Upgrade" sub="Pay monthly with Klarna. Easily upgrade at the end of your term." />
          </div>
        </div>

        <section className="rf-bfe-complimentary-section">
          <div className="rf-bfe-complimentary-header">
            <h2 className="rf-bfe-complimentary-title">
              AppleCare coverage. Peace of mind in every plan.
            </h2>
          </div>
          <div className="rf-bfe-config-options">
            <OptLabel subHeader id="care-0"  name="applecare" defaultChecked title="AppleCare+ with Theft and Loss" sub="Cover this product only. Unlimited repairs for accidents like drops and spills. 24/7 priority support from Apple experts." />
            <OptLabel subHeader id="care-1"  name="applecare" title="AppleCare One" sub="Cover multiple products, including this iPhone. Theft and loss coverage for iPhone, iPad, and Apple Watch." />
            <OptLabel subHeader id="care-2"  name="applecare" title="No AppleCare coverage" />
          </div>
          <div className="rf-bfe-complimentary-description">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${MEDIA}/iphone-apple-care-one-vid1-thumbnail`} alt="" aria-hidden="true" />
            How does AppleCare work? Explore the features and coverage of AppleCare.
          </div>
        </section>

        <section className="rf-bfe-summary">
          <div className="rf-bfe-summary-section">
            <div className="rf-bfe-summary-price-box">
              <span className="rf-bfe-summary-title">Your new {model.name}.</span>
              <span className="rf-bfe-summary-subtitle">Just the way you want it.</span>
              <span className="rf-bfe-summary-desc">{summaryDesc}</span>
              <span className="rf-bfe-summary-price price-point">{buyLine}</span>
              <span className="price-point">{leaseLine} with Apple Upgrade</span>
              <span className="price-point">Get 3% Daily Cash back with Apple Card</span>
              <span className="rf-bfe-summary-saves">Need a moment?</span>
              <span>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</span>
              <span className="rf-bfe-summary-saves">Save for later</span>
              <span className="rf-bfe-summary-fulfillment">Free shipping</span>
              <span className="rf-bfe-summary-fulfillment">Pick up from Store</span>
            </div>
          </div>
        </section>

        <section className="rf-bfe-box-section">
          <h2 className="rf-bfe-dimension-header typography-eyebrow">
            <span>What&rsquo;s in the Box</span>
          </h2>
          <div className="rf-bfe-box-item">
            <span className="form-selector-title">{model.name}</span>
          </div>
          <div className="rf-bfe-box-item">
            <span className="form-selector-title">USB-C Charge Cable</span>{" "}
            <span className="form-selector-list-header">USB-C to USB-C charging cable, white woven cable</span>
          </div>
          <div className="rf-bfe-box-environment">
            Our environmental goals. As part of our efforts to reach carbon neutrality by 2030, {model.name} does not include a power adapter or EarPods. Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.
          </div>
        </section>

        <section className="rf-bfe-setup-section">
          <h2 className="rf-bfe-dimension-header typography-eyebrow">
            <span>Set up your device with one-on-one sessions with a Specialist.</span>
          </h2>
          <p>When you buy directly from Apple, you can get help transferring your data and making the most of your new device with our free online Personal Setup sessions.</p>
        </section>

        <section className="rf-bfe-services-section">
          <h2 className="rf-bfe-dimension-header typography-eyebrow">
            <span>Your new iPhone comes with so much more.</span>
          </h2>
          <p>Get 3 months of select services free when you purchase an Apple device.</p>
          <span>Apple TV, Apple Music, Apple Arcade, Apple News+, Apple Fitness+</span>
        </section>
      </div>
      </div>

      <div className="rf-bfe-stickybar" style={{ position: "sticky", top: 48, background: "#fff", zIndex: 10 }}>
        <div className="rf-bfe-stickybar-scroller">
          {scrolled ? (
            <>
              <div className="rf-bfe-stickybar-header">Your {model.name}</div>
              <button className="rf-bfe-stickybar-button" type="button">
                Continue — {buyLine}
              </button>
            </>
          ) : (
            <>
              <div className="rf-bfe-stickybar-header">{buyLine}</div>
              <div className="rf-bfe-stickybar-fulfillment">
                <span>Free shipping</span>
                <span>Pick up from Store</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
