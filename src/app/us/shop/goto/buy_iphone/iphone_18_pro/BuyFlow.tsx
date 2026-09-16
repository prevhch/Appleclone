"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

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

function fmtFull(n: string) {
  const v = Number(n);
  return "$" + v.toLocaleString("en-US") + ".00";
}
const CARRIERS = ["AT&T", "T-Mobile", "Verizon", "Connect on your own later."];

function OptLabel({
  id,
  name,
  checked,
  defaultChecked,
  disabled,
  onChange,
  title,
  sub,
  subHeader,
  tradeSub,
  prices,
}: {
  id: string;
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
  title: ReactNode;
  sub?: string;
  subHeader?: boolean;
  tradeSub?: boolean;
  prices?: string[];
  disabled?: boolean;
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
        disabled={disabled}
        onChange={onChange}
      />
      {subHeader ? (
        <div className="form-selector-label rf-applecare-label">
          <label className="rc-dimension-list-header form-selector-list-header" htmlFor={id}>
            <span className="row row-logical">
              <span className="form-selector-left-col column large-12">
                <span className="form-selector-title">{title}</span>{" "}
                <span>{sub}</span>
              </span>
            </span>
          </label>
        </div>
      ) : (
      <label className="form-selector-label" htmlFor={id}>
        <span className="row">
          <span className="column form-selector-left-col rf-bfe-selector-left-col">
            <span className="form-selector-title">
              {title}
              {sub && !tradeSub ? <span className="form-label-small">{sub}</span> : null}
              {sub && tradeSub ? <span className="form-label-small rf-tradeupselector-subheader">{sub}</span> : null}
            </span>{" "}
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
      )}
    </div>
  );
}

export default function BuyFlow() {
  const [modelIdx, setModelIdx] = useState<number | null>(null);
  const [finish, setFinish] = useState<Finish | null>(null);
  const [storageIdx, setStorageIdx] = useState<number | null>(null);
  const [tradeIdx, setTradeIdx] = useState<number | null>(null);
  const [payIdx, setPayIdx] = useState<number | null>(null);
  const [carrierIdx, setCarrierIdx] = useState<number | null>(null);
  const [careIdx, setCareIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [galIdx, setGalIdx] = useState(0);

  const pickFinish = (f: Finish) => { setFinish(f); setGalIdx(0); setStorageIdx(null); setTradeIdx(null); setPayIdx(null); setCarrierIdx(null); setCareIdx(null); };
  const pickModel = (i: number) => { setModelIdx(i); setGalIdx(0); setFinish(null); setStorageIdx(null); setTradeIdx(null); setPayIdx(null); setCarrierIdx(null); setCareIdx(null); };
  const pickStorage = (i: number) => { setStorageIdx(i); setTradeIdx(null); setPayIdx(null); setCarrierIdx(null); setCareIdx(null); };
  const mi = modelIdx ?? 0;
  const si = storageIdx ?? 0;
  const fin: Finish = finish ?? "burgundy";
  const gSrc = finish === null && modelIdx === null
    ? `${MEDIA}/iphone-18-pro-model-unselect-gallery-${galIdx + 1}-202609`
    : gallerySrc(mi, fin, galIdx);
  const gAlt = FINISH_GALLERY_ALT[fin];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const model = MODELS[mi];
  const price = model.prices[si];
  const buyLine = `Buy from ${price.buy} or ${price.mo} for 24 mo.*`;
  const leaseLine = `Lease from ${price.lease} for 24 mo.#`;
  const summaryDesc = `${model.name}, back exterior, ${FINISH_DESC[fin]}, Pro Fusion camera system, rectangular housing spanning the top, 3 lenses on left, flash, microphone, and LiDAR Scanner on right`;


  return (
    <div className="rf-bfe">
      <div className="rf-bfe-header-wrapper">
        <div className="rf-bfe-header">
        <div data-autom="bfe-header">
          <span className="badge badge-no-scrim">New</span>
          <h1 className="fwl">Pre-order {model.name}</h1>
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
            <span>Apple Intelligence and Siri AI</span> <a className="more" href="#apple-intelligence">Learn more</a>
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
      </div>

      <div className="rf-bfe-main row">
      <div className="rf-bfe-column-left">
        <div className="rf-bfe-gallery-container">
        <section className="rf-bfe-gallery-section">
          <div className="rf-bfe-gallery-wrapper">
            <div className="rc-inline-gallery rf-bfe-gallery">
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
              <div>
                <div className="rc-inline-gallery-item">
                  <div className="rf-bfe-gallery-item rf-bfe-gallery-item-dark">
                    <div className="rf-bfe-gallery-content">
                      <div className="rf-bfe-gallery-image-wrapper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="rf-bfe-gallery-image"
                          src={gSrc}
                          alt={gAlt}
                          data-finish={fin}
                        />
                      </div>
                    </div>
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
              <div className="rc-gallery-paddlenav paddlenav paddlenav-alpha paddlenav-elevated">
                <button
                  type="button"
                  className={`paddlenav-arrow paddlenav-arrow-previous${galIdx === 0 ? " visuallyhidden" : ""}`}
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
                  className={`paddlenav-arrow paddlenav-arrow-next${galIdx === 1 ? " visuallyhidden" : ""}`}
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
      </div>

      <div className="rf-bfe-column-right rf-bfe-selectionarea">
        <div
          className="rf-bfe-step rf-bfe-first-step rf-bfe-focused-step rf-bfe-dimension rf-bfe-dimension-dimensionscreensize"
          style={{ margin: "max(0px, -285.5px + 50vh) 0px max(60px, -343.5px + 50vh)" }}
        >
          <h2 id="dimensionScreensize" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Model. </span>
            <span className="as-subheading">Which is best for you?</span>
          </h2>
          <fieldset className="rc-dimension rf-bfe-product-dimension-group">
            <div className="rc-dimension-selector-group form-selector-group">
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
                  `Buy from ${o.prices[si].buy} or ${o.prices[si].mo} for 24 mo.*`,
                  `Lease from ${o.prices[si].lease} for 24 mo.#`,
                ]}
              />
            ))}
          </div>
          </fieldset>
          <div className="rf-bfe-decision-support">
            <div className="rc-decisionsection as-util-relatedlink">
              <div className="rc-decisionsection-details typography-body-reduced">
                <div className="rc-decisionsection-info">
                  <div className="rc-decisionsection-header typography-body-reduced-tight">Need help choosing a model?</div>
                  <div className="rc-decisionsection-desc typography-body-reduced-tight">Explore the differences in screen size and battery&nbsp;life.</div>
                </div>
              </div>
              <span role="button" className="rc-decisionsection-link">Show more</span>
            </div>
          </div>
        </div>

        <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncolor" style={{ margin: "0px 0px max(60px, -194.5px + 50vh)" }}>
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
                    disabled={modelIdx === null}
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
            <span className="as-price-highlight">Color {FINISH_LABEL[fin]}</span>
          </div>
        </div>

        <div className="rf-bfe-step rf-bfe-right-rail-step rf-bfe-dimension rf-bfe-dimension-dimensioncapacity" style={{ margin: "0px 0px max(60px, -473.5px + 50vh)" }}>
          <h2 id="dimensionCapacity" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Storage. </span>
            <span className="as-subheading">How much space do you need?</span>
          </h2>
          <fieldset className="rc-dimension rf-bfe-product-dimension-group">
            <div className="rc-dimension-selector-group form-selector-group">
            {STORAGE.map((size, i) => (
              <OptLabel
                key={size}
                id={`storage-${i}`}
                name="dimensionCapacity"
                checked={i === storageIdx}
                disabled={finish === null}
                onChange={() => pickStorage(i)}
                title={size}
                prices={[
                  `Buy from ${model.prices[i].buy} or ${model.prices[i].mo} for 24 mo.*`,
                  `Lease from ${model.prices[i].lease} for 24 mo.#`,
                ]}
              />
            ))}
          </div>
          </fieldset>
          <div className="rf-bfe-decision-support">
            <div className="rc-decisionsection as-util-relatedlink">
              <div className="rc-decisionsection-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/iphone-storage-thumbnail`} alt="" aria-hidden="true" width={120} />
              </div>
              <div className="rc-decisionsection-details typography-body-reduced">
                <div className="rc-decisionsection-info">
                  <div className="rc-decisionsection-header typography-body-reduced-tight">Not sure how much storage to get?</div>
                  <div className="rc-decisionsection-desc typography-body-reduced-tight">Get a better understanding of how much space you&rsquo;ll need.</div>
                </div>
              </div>
              <span role="button" className="rc-decisionsection-link">Show more</span>
            </div>
          </div>
        </div>

      </div>
      </div>

      <div className="rf-bfe-selectionarea">

        <div className="rf-bfe-step rf-bfe-tradeup-fullwidth">
          <div className="rf-bfe-tradeup-header">
            <h2 id="tradeupinline" className="typography-eyebrow" tabIndex={-1}>
              <span>Apple Trade In.</span>
              <span className="rf-bfe-tradeup-subheader typography-eyebrow">Get $35–$885 credit towards your new iPhone.</span>
            </h2>
          </div>
          <div className="row">
          <div className="rf-bfe-tradeup-column-left">
          <div className="rf-tradeupinline-mainwrapper rf-tradeupinline-mainwrapper-fullwidth">
          <div className="rf-bfe-tradeup-carriers">
            {["att", "tmobile", "verizon"].map((c) => (
              <span key={c} className="rf-bfe-tradeup-carrier">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/iphone-carrier-${c}-202207`} alt={c} width={100} loading="lazy" />
              </span>
            ))}
          </div>
          <fieldset className="rc-dimension rf-bfe-product-dimension-group">
            <div className="rc-dimension-selector-group form-selector-group">
            <OptLabel tradeSub id="tradein-add" name="tradein" checked={tradeIdx === 0} disabled={storageIdx === null} onChange={() => { setTradeIdx(0); setPayIdx(null); setCarrierIdx(null); setCareIdx(null); }} title="Add a trade-in" sub="Answer a few questions to get your estimate." />
            <OptLabel tradeSub id="tradein-no" name="tradein" checked={tradeIdx === 1} disabled={storageIdx === null} onChange={() => { setTradeIdx(1); setPayIdx(null); setCarrierIdx(null); setCareIdx(null); }} title="No trade-in" />
            <span className="as-price-tradeinmsg">
              Save even more when you trade in and finance with select carrier deals at Apple.
            </span>
          </div>
          </fieldset>
          </div>
          <div className="rf-bfe-tradeup-column-right">
          <div className="rf-bfe-decision-support">
            <div className="rc-decisionsection as-util-relatedlink">
              <div className="rc-decisionsection-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/iphone-trade-in-pre-purchase-thumbnail`} alt="" aria-hidden="true" width={120} />
              </div>
              <div className="rc-decisionsection-details typography-body-reduced">
                <div className="rc-decisionsection-info">
                  <div className="rc-decisionsection-header typography-body-reduced-tight">How does trade-in work?</div>
                  <div className="rc-decisionsection-desc typography-body-reduced-tight">Learn how you can save on your order with a trade-in.</div>
                </div>
              </div>
              <span role="button" className="rc-decisionsection-link">Show more</span>
            </div>
          </div>
          </div>
          </div>
        </div>

        <div className="rf-bfe-purchase-options rf-bfe-step rf-bfe-purchase-options-fullwidth">
          <div className="r-in-view-transition r-in-view-transition-enter-done">
          <div className="rf-po-bfe-purchaseoptions-wrapper rf-po-bfe-purchaseoptions-view-full-width">
          <h2 id="dimensionPayment" className="rf-po-bfe-purchaseoptions-header typography-eyebrow" tabIndex={-1}>
            <span>Payment options. </span>
            <span className="as-subheading">Select the one that works for you.</span>
          </h2>
          <div className="row rf-po-bfe-purchaseoptions-wrapper-disabled">
            <div className="rc-dimension-selector-row form-selector">
              <input className="form-selector-input" id="pay-buy" type="radio" name="payment" checked={payIdx === 0} disabled={tradeIdx === null} onChange={() => setPayIdx(0)} />
              <label className="form-selector-label" htmlFor="pay-buy">
                <span className="rf-po-bfe-dimension-base-title">Buy</span>
                <span className="rf-po-bfe-purchasegroupoption-price">{fmtFull(model.prices[si].buy.replace("$", ""))}</span>
                <span className="rf-po-bfe-dimension-base-detail">Pay with Apple Pay or other payment methods.</span>
              </label>
            </div>
            <div className="rc-dimension-selector-row form-selector">
              <input className="form-selector-input" id="pay-fin" type="radio" name="payment" checked={payIdx === 1} disabled={tradeIdx === null} onChange={() => setPayIdx(1)} />
              <label className="form-selector-label" htmlFor="pay-fin">
                <span className="rf-po-bfe-dimension-base-title">Finance</span>
                <span className="rf-po-bfe-purchasegroupoption-price">{fmtFull(model.prices[si].buy.replace("$", ""))}</span>
                <span className="rf-po-bfe-dimension-base-detail">Pay over time at 0% APR.</span>
              </label>
            </div>
            <div className="rc-dimension-selector-row form-selector">
              <input className="form-selector-input" id="pay-lease" type="radio" name="payment" checked={payIdx === 2} disabled={tradeIdx === null} onChange={() => setPayIdx(2)} />
              <label className="form-selector-label" htmlFor="pay-lease">
                <span className="rf-po-bfe-dimension-base-title">Lease with {/* eslint-disable-next-line @next/next/no-img-element */}<img src={`${MEDIA}/step1-payments-logo-upgrade`} alt="" width={82} height={17} className="ir" /><span className="visuallyhidden">Apple Upgrade</span></span>
                <span className="rf-po-bfe-purchasegroupoption-price">{fmtFull(model.prices[si].buy.replace("$", ""))}</span>
                <span className="rf-po-bfe-dimension-base-detail">Pay monthly with Klarna. Easily upgrade at the end of your term.</span>
              </label>
            </div>
          </div>
          </div>
          </div>
        </div>

        <div className="rf-bfe-step row rf-bfe-dimension rf-bfe-dimension-carriermodel">
          <h2 id="dimensionCarrier" className="rf-bfe-dimension-header typography-eyebrow" tabIndex={-1}>
            <span>Connectivity. </span>
            <span className="as-subheading">Choose a carrier.</span>
          </h2>
          <div className="row">
          <div className="rf-bfe-dimension-carriermodel-options">
            {[["AT&T", "att"], ["T-Mobile", "tmobile"], ["Verizon", "verizon"], ["Connect on your own later.", null]].map(([c, logo], i) => (
              <OptLabel
                key={c as string}
                id={`carrier-${i}`}
                name="dimensionCarrierModel"
                checked={i === carrierIdx}
                disabled={storageIdx === null}
                onChange={() => { setCarrierIdx(i); setCareIdx(null); }}
                title={<span><span className="ie-label" />{logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`${MEDIA}/iphone-step1-logo-${logo}`} alt="" width={112} height={50} loading="lazy" />
                ) : null}{c}</span>}
                sub={fmtFull(model.prices[si].buy.replace("$", ""))}
              />
            ))}
          </div>
          <div className="rf-bfe-decision-support">
            <div className="rc-decisionsection as-util-relatedlink">
              <div className="rc-decisionsection-details typography-body-reduced">
                <div className="rc-decisionsection-info">
                  <div className="rc-decisionsection-header typography-body-reduced-tight">Is it easy to get connected?</div>
                  <div className="rc-decisionsection-desc typography-body-reduced-tight">Yes. We&rsquo;ll help you set up your carrier, number, and rate plan.</div>
                </div>
              </div>
              <span role="button" className="rc-decisionsection-link">Show more</span>
            </div>
          </div>
          </div>
        </div>

        <div className="rf-bfe-applecare-options rf-bfe-step rf-bfe-applecare-options-fullwidth">
          <div className="rf-applecare-section">
          <div className="row rf-applecare-section-disabled">
          <div className="rf-bfe-complimentary-header">
            <h2 className="rf-bfe-complimentary-title">
              AppleCare coverage. Peace of mind in every plan.
            </h2>
          </div>
          <div className="row">
            {[
              {
                id: "care-plus", t: "AppleCare+ with Theft and Loss", cover: "Cover this product only",
                price: "$14.99/mo. or $149.99/yr.",
                bullets: ["Unlimited repairs for accidents like drops and spills", "Theft and loss coverage for up to 2 claims every 12 months", "24/7 priority support from Apple experts", "Express Replacement Service — we’ll ship you a replacement so you don’t have to wait for a repair"],
              },
              {
                id: "care-one", t: "AppleCare One", cover: "Cover multiple products, including this iPhone with AppleCare One Individual",
                price: "$19.99/mo.",
                bullets: ["All the benefits of AppleCare+ for up to 3 products, at one low price", "Theft and loss coverage for iPhone, iPad, and Apple Watch up to 3 total claims every 12 months", "Add more products anytime for $5.99/mo. each", "Cover all your family’s eligible devices with AppleCare One Family"],
              },
              {
                id: "care-no", t: "No AppleCare coverage", cover: "Your device won’t be protected against accidental damage, theft, or loss.",
                price: "",
                bullets: [],
              },
            ].map((o, i) => (
              <div key={o.id} className="column large-4 small-12 rf-applecare-option rc-dimension-selector-row form-selector-twocol-threeline form-selector">
                <input className="form-selector-input rf-applecare-selector" id={o.id} type="radio" name="applecare" checked={careIdx === i} disabled={carrierIdx === null} onChange={() => setCareIdx(i)} />
                <div className="form-selector-label rf-applecare-label">
                  <label className="rc-dimension-list-header form-selector-list-header" htmlFor={o.id}>
                    <span className="row row-logical">
                      <span className="form-selector-left-col column large-12">
                        <span aria-hidden="true" className="rf-applecare-override-svg as-svgicon-container rf-applecare-quote-icon">
                          <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applelogo as-svgicon-reduced as-svgicon-applelogoreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.4 8.146a3.5 3.5 0 0 0-1.675 2.948 3.41 3.41 0 0 0 2.075 3.129 8.2 8.2 0 0 1-1.063 2.2c-.662.953-1.354 1.905-2.407 1.905s-1.324-.612-2.537-.612c-1.183 0-1.6.632-2.567.632s-1.634-.882-2.407-1.965A9.5 9.5 0 0 1 6.2 11.255c0-3.008 1.955-4.6 3.881-4.6 1.023 0 1.875.672 2.517.672.612 0 1.564-.712 2.727-.712A3.65 3.65 0 0 1 18.4 8.146M12.68 6.442a1 1 0 0 1-.211-.02 1.4 1.4 0 0 1-.03-.281 3.36 3.36 0 0 1 .852-2.1 3.46 3.46 0 0 1 2.276-1.173 1.5 1.5 0 0 1 .03.311 3.46 3.46 0 0 1-.822 2.156 3 3 0 0 1-2.095 1.107"></path></svg>
                        </span>
                        <span className="form-selector-title">{o.t}</span>
                        <span className="form-selector-list-header">{o.cover}</span>
                        {o.price ? <span className="rf-bfe-config-options-price price-point">{o.price}</span> : null}
                      </span>
                    </span>
                  </label>
                </div>
                {o.bullets.length ? (
                  <div className="as-form-choiceselectordesc-list">
                    <ul className="as-form-choiceselectordesc-list">
                      {o.bullets.map((b) => (
                        <li key={b.slice(0, 20)} className="as-form-choiceselectordesc-listitem">{b}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          </div>
          </div>
          <div className="rf-applecare-decision-support">
            <div className="rc-decisionsection as-util-relatedlink">
              <div className="rc-decisionsection-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/iphone-apple-care-one-vid1-thumbnail`} alt="" aria-hidden="true" width={120} />
              </div>
              <div className="rc-decisionsection-details typography-body-reduced">
                <div className="rc-decisionsection-info">
                  <div className="rc-decisionsection-header typography-body-reduced-tight">How does AppleCare work?</div>
                  <div className="rc-decisionsection-desc typography-body-reduced-tight">Explore the features and coverage of AppleCare.</div>
                </div>
              </div>
              <span role="button" className="rc-decisionsection-link">Show more</span>
            </div>
          </div>
        </div>

      <div className="rf-bfe-summary-wrapper">
        <section className="rf-bfe-summary">
          <div className="rf-bfe-summary-grid-image">
            <div className="rf-bfe-summary-image">
              <h2 className="rf-bfe-summary-image-headline"><span>Your new iPhone awaits. Make it yours.</span></h2>
              <div className="rf-bfe-summary-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img width={362} height={270} alt={gAlt} src={`${MEDIA}/iphone-18-pro-finish-select-${fin}-202609_AV2`} className="rf-bfe-summary-image-img" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="rf-bfe-summary-price-section">
            <div className="rf-bfe-summary-price-title rf-bfe-updated-summary">
              Your new {model.name}. Just the way you want it.
            </div>
            <div className="rf-bfe-summary-price-box">
              <div className="rf-bfe-summary-price-content">
                <span>{summaryDesc}</span>{" "}
                <span className="rf-bfe-summary-price price-point">{buyLine}</span>{" "}
                <span className="price-point">{leaseLine} with Apple Upgrade</span>{" "}
                <span className="price-point">Get 3% Daily Cash back with Apple Card</span>
              </div>
              <div className="rf-bfe-summary-price-content">
                <span>Need a moment?</span>{" "}
                <span>Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.</span>{" "}
                <span>Save for later</span>
              </div>
              <div className="rf-bfe-summary-fulfillment">
                <span>Free shipping</span>{" "}
                <span>Pick up from Store</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>

        <section className="dd-info">
          <h2 className="rf-bfe-dimension-header typography-eyebrow">
            <span>What&rsquo;s in the Box</span>
          </h2>
          <div className="rf-bfe-box-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${MEDIA}/iphone-18-pro-witb-${fin}-202609`} alt={`${model.name} in box`} loading="lazy" />
            <span className="form-selector-title">{model.name}</span>
          </div>
          <div className="rf-bfe-box-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${MEDIA}/iphone-18-pro-witb-cable-202609`} alt="USB-C Charge Cable" loading="lazy" />
            <span className="form-selector-title">USB-C Charge Cable</span>{" "}
            <span className="form-selector-list-header">USB-C to USB-C charging cable, white woven cable</span>
          </div>
          <div className="rf-bfe-box-environment">
            Our environmental goals. As part of our efforts to reach carbon neutrality by 2030, {model.name} does not include a power adapter or EarPods. Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.
          </div>
        </section>

        <section className="dd-shared-personal-setup dd-fill-tertiary">
          <div className="dd-l-plate">
            <div className="dd-info dd-text-align-center">
              <h2 className="t-headline-reduced dd-compact-large-12 dd-compact-small-10">
                Set up your device with one-on-one sessions with a Specialist.
              </h2>
              <div className="dd-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/personal-setup-shop-shared-202511_GEO_US`} alt="" width={708} height={152} className="dd-hero ir" loading="lazy" />
              </div>
              <p className="t-intro-elevated dd-compact-large-14">When you buy directly from Apple, you can get help transferring your data and making the most of your new device with our free online Personal Setup sessions.</p>
              <p className="dd-link t-intro-elevated">
                <span className="as-buttonlink icon icon-after icon-pluscircle" role="button">Learn more about Personal Setup</span>
              </p>
            </div>
          </div>
        </section>

        <section className="dd-services">
          <div className="dd-l-mw1070">
            <div className="dd-l-plate">
              <div className="dd-info">
                <h2 className="dd-header t-custom-header dd-compact-small-5">
                  Your new iPhone comes with so much more.
                </h2>
                <p className="dd-subcopy">
                  Get 3 months of select services free when you purchase an Apple device.
                </p>
                <span>Apple TV, Apple Music, Apple Arcade, Apple News+, Apple Fitness+</span>
              </div>
              <div className="dd-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/services-iphone-202605_GEO_US`} alt="Apple TV, Apple Music, Apple Arcade, Apple News+, Apple Fitness+" width={1070} height={481} className="dd-hero ir" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
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
