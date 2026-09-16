"use client";

import { useState } from "react";

const FAQ: Array<[string, string]> = [
  [
    "What is eSIM?",
    "An eSIM is a digital SIM that eliminates the need for a physical SIM card. With eSIM, you can quickly and easily transfer an existing cellular plan or get a new cellular plan, all digitally.",
  ],
  [
    "Can I activate an iPhone 18 Pro outside of the United States?",
    "iPhone 16, iPhone 17e, iPhone 17, iPhone Air, iPhone 18 Pro, and iPhone Duo models purchased in the U.S. or Puerto Rico don\u2019t have a physical SIM tray and activate only using eSIM. You can activate your iPhone outside the country if your carrier supports eSIM roaming.",
  ],
  [
    "Will my new iPhone be unlocked?",
    "In most cases, yes. An iPhone purchased from Apple is unlocked. Once your new iPhone is activated, it remains unlocked, which means you can use it with any carrier that provides service for iPhone.",
  ],
  [
    "When I buy from apple.com, does my iPhone come ready to use?",
    "Carrier-connected iPhone 16, iPhone 17e, iPhone 17, iPhone Air, iPhone 18 Pro, and iPhone Duo models will arrive ready to activate with eSIM and can connect to your cellular voice and data service without a physical SIM card.",
  ],
  [
    "Will my iPhone work worldwide?",
    "All iPhone models are world phones, so you can use them almost anywhere. Whether you are a GSM or CDMA network customer, you can roam internationally on GSM networks in over 200 countries or regions around the world.",
  ],
  [
    "Can I return my iPhone?",
    "Yes. If you change your mind and no longer wish to keep your iPhone, you have the option to return it to us. The returned iPhone must be in good condition and in the original packaging, which contains all accessories, manuals, and instructions.",
  ],
  [
    "I\u2019m buying an iPhone as a gift. Can it be activated at a later date?",
    "In most cases, an iPhone purchased from apple.com can be activated later. However, certain special deals or discounts may require preparation with the carrier at the time of purchase so that the phone arrives ready to use.",
  ],
  [
    "What resources are available to me to quickly get set up, transfer existing files, and make the most of my new iPhone?",
    "When you buy directly from Apple, you\u2019ll get access to Personal Setup \u2014 free online, one\u2011on\u2011one sessions with a Specialist who can help you set up your new iPhone and start your data transfer.",
  ],
  [
    "Are there differences between an iPhone for AT&T, T-Mobile, or Verizon?",
    "The iPhone models for AT&T, T-Mobile, and Verizon are the same. However, if you choose to finance an iPhone through the AT&T Installment Plan, T-Mobile Equipment Installment Plan, or Verizon Device Payment Program, your iPhone will arrive ready to activate.",
  ],
  [
    "Can I easily switch my carrier when I purchase an iPhone?",
    "Yes. You can switch carriers when you purchase an iPhone directly from Apple and choose carrier financing as your payment option. You\u2019ll also be able to keep your existing number and data.",
  ],
  [
    "How does Apple Upgrade work?",
    "Apple Upgrade is a leasing program offered in partnership with Klarna. Lease an iPhone or Apple Watch for 12 or 24 months, or an iPad or Mac for 24 or 36 months. Then, easily upgrade to something new at the end of your term.",
  ],
  [
    "What are connectivity discounts?",
    "Connectivity discounts are reflected in the advertised price of select iPhone models, and are available to customers who connect with select carriers at the time of purchase.",
  ],
  [
    "Which network providers offer 5G service?",
    "AT&T, T-Mobile, and Verizon are the national wireless carriers for iPhone in the United States, and they all offer 5G service.",
  ],
  [
    "What products can be covered by AppleCare One?",
    "AppleCare One coverage extends to products that were purchased recently or are currently covered by AppleCare+. Other eligible devices are those currently associated with your Apple Account.",
  ],
];

const MEDIA = "/apple/har/iphone-18-pro-buy/media";

const COMPARE = [
  {
    swatch: `${MEDIA}/iphone-compare-iphone-duo-swatch-202609`,
    swatchW: 31,
    swatchH: 13,
    swatchAlt: "iPhone Duo available colors: night sky, star white",
    zoomIcon: `${MEDIA}/iphone-compare-icon-zoom-17-202509`,
    zoom: "0.5x, 1x, 2x",
    name: "iPhone Duo",
    img: `${MEDIA}/iphone-compare-iphone-duo-202609`,
    imgAlt: "iPhone Duo, folded back exterior and unfolded interior display",
    tag: "New",
    blurb: "The largest display of any iPhone. Foldable. Posable. And durable.",
    price: "From $1999",
    display: "7.6-inch Super Retina XDR folding display",
    chip: "A20 Pro chip",
    camera: "48MP Dual Fusion camera system",
    battery: "Up to 44 hours video playback",
  },
  {
    swatch: `${MEDIA}/iphone-compare-iphone-18-pro-swatch-202609`,
    swatchW: 67,
    swatchH: 13,
    swatchAlt: "iPhone 18 Pro available colors: burgundy, glacier, silver, black",
    zoomIcon: `${MEDIA}/iphone-compare-icon-zoom-17-pro-202509`,
    zoom: "0.5x, 1x, 2x, 4x, 8x",
    name: "iPhone 18 Pro",
    img: `${MEDIA}/iphone-compare-iphone-18-pro-202609`,
    imgAlt: "iPhone 18 Pro Max and iPhone 18 Pro in Burgundy",
    tag: "New",
    blurb: "The ultimate battery life, performance, and camera of any iPhone.",
    price: "From $1199",
    display: "6.9″ or 6.3″ Super Retina XDR display",
    chip: "A20 Pro chip",
    camera: "48MP Pro Fusion camera system",
    battery: "Up to 45 hours video playback",
  },
  {
    swatch: `${MEDIA}/iphone-compare-iphone-air-swatch-202509`,
    swatchW: 67,
    swatchH: 13,
    swatchAlt: "iPhone Air available colors: sky blue, light gold, cloud white, space black",
    zoomIcon: `${MEDIA}/iphone-compare-icon-zoom-17-air-202509`,
    zoom: "1x, 2x",
    name: "iPhone Air",
    img: `${MEDIA}/iphone-compare-iphone-air-202609`,
    imgAlt: "iPhone Air, back and front exterior",
    tag: "",
    blurb: "Incredibly light and thin with pro performance.",
    price: "From $1099",
    display: "6.5” Super Retina XDR display",
    chip: "A19 Pro chip",
    camera: "48MP Fusion camera system",
    battery: "Up to 27 hours video playback",
  },
  {
    swatch: `${MEDIA}/iphone-compare-iphone-17-swatch-202509`,
    swatchW: 85,
    swatchH: 13,
    swatchAlt: "iPhone 17 available colors: lavender, sage, mist blue, white, black",
    zoomIcon: `${MEDIA}/iphone-compare-icon-zoom-17-202509`,
    zoom: "0.5x, 1x, 2x",
    name: "iPhone 17",
    img: `${MEDIA}/iphone-compare-iphone-17-202609`,
    imgAlt: "iPhone 17, back and front exterior",
    tag: "",
    blurb: "Powerful, durable, and delightful.",
    price: "From $899",
    display: "6.3” Super Retina XDR display",
    chip: "A19 chip",
    camera: "48MP Dual Fusion camera system",
    battery: "Up to 30 hours video playback",
  },
  {
    swatch: `${MEDIA}/iphone-compare-iphone-17e-swatch-202603`,
    swatchW: 54,
    swatchH: 18,
    swatchAlt: "iPhone 17e available colors: soft pink, white, black",
    zoomIcon: `${MEDIA}/iphone-compare-icon-zoom-17-air-202509`,
    zoom: "1x, 2x",
    name: "iPhone 17e",
    img: `${MEDIA}/iphone-compare-iphone-17e-202609`,
    imgAlt: "iPhone 17e, back and front exterior",
    tag: "",
    blurb: "Feature stacked. Value packed.",
    price: "From $699",
    display: "6.1″ Super Retina XDR display",
    chip: "A19 chip",
    camera: "48MP Fusion camera system",
    battery: "Up to 26 hours video playback",
  },
];

const FOOTER_COLS: Array<[string, string[]]> = [
  ["Shop and Learn", ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]],
  ["Apple Wallet", ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]],
  ["Account", ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"]],
  ["Entertainment", ["Apple One", "Apple TV", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"]],
  ["Apple Store", ["Find a Store", "Genius Bar", "Today at Apple", "Apple Store App", "Apple Upgrade", "Apple Trade In", "Order Status", "Shopping Help"]],
  ["About Apple", ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Events", "Contact Apple"]],
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rc-accordion-item">
      <h3 className="rc-accordion-header">
        <button type="button" className="rc-accordion-button" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="rc-accordion-title">{q}</span>
          <span className="icon icon-plus as-accordion-plusicon" aria-hidden="true" />
        </button>
      </h3>
      {open ? (
        <div data-core-accordion-content>
          <div className="rc-accordion-content row">
            <div className="rc-accordion-box-content column large-10 small-12">
              <p>{a}</p>
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export default function BelowFold() {
  return (
    <>
      <section className="dd-compare-section">
        <h2 className="t-headline-reduced dd-compare-header">Which iPhone is right for you?</h2>
        <div className="dd-compare row">
          {COMPARE.map((m) => (
            <div key={m.name} className="column large-2 dd-compare-model" style={{ textAlign: "center" }}>
              <div className="dd-column-header">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.img} alt={m.imgAlt} width={200} height={256} className="dd-compare-hero ir" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.swatch} alt={m.swatchAlt} width={m.swatchW} height={m.swatchH} className="dd-color-swatch ir" loading="lazy" />
              {m.tag ? <span className="badge badge-reduced badge-no-scrim dd-violator">{m.tag}</span> : null}
              <p className="t-label dd-product-name">{m.name}</p>
              <p className="t-body-tight dd-subtitle">{m.blurb}</p>
              <p className="t-body-reduced-tight dd-compare-price">{m.price}</p>
              </div>
              <div className="dd-features" role="list">
                <div className="dd-feature display" role="listitem">
                  <p className="t-eyebrow-elevated dd-display-size">{m.display.split(" ")[0]}</p>
                  <p>{m.display}</p>
                </div>
                <div className="dd-feature chip" role="listitem">
                  <p>{m.chip}</p>
                </div>
                <div className="dd-feature camera" role="listitem">
                  <p>{m.camera}</p>
                </div>
                <div className="dd-feature zoom" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.zoomIcon} alt={`Optical zoom options ${m.zoom}`} width={76} height={56} className="dd-icon dd-invert-classic ir" loading="lazy" />
                  <p>Optical zoom options <span className="visuallyhidden">{m.zoom}</span></p>
                </div>
                <div className="dd-feature apple-intelligence" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${MEDIA}/iphone-compare-icon-apple-intelligence-202609`} alt="Siri AI and Apple Intelligence" width={42} height={56} className="dd-icon dd-icon-apple-intelligence dd-invert-classic ir" loading="lazy" />
                  <p className="column">Apple Intelligence</p>
                  <p className="column">Siri AI</p>
                </div>
                <div className="dd-feature battery" role="listitem">
                  <p>{m.battery}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section as-l-container">
        <h2 className="rc-accordion-title">Frequently Asked Questions</h2>
        <div className="rc-accordion rc-accordion-compact rc-accordion-hover">
          <ul className="rc-accordion">
            {FAQ.map(([q, a]) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </ul>
        </div>
      </section>

      <footer className="as-globalfooter">
        <div className="as-globalfooter-content row">
          {FOOTER_COLS.map(([h, links]) => (
            <div key={h} className="column large-2 as-globalfooter-col">
              <h3 className="as-globalfooter-label">{h}</h3>
              <ul>
                {links.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="as-globalfooter-mini">
          <span>Copyright © 2026 AppleClone (school project). All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
