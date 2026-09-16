import type { Metadata } from "next";
import BuyFlow from "./BuyFlow";
import BelowFold from "./BelowFold";

export const metadata: Metadata = {
  title: "Shop iPhone 18 Pro and iPhone 18 Pro Max - Apple",
  description:
    "Buy iPhone 18 Pro and iPhone 18 Pro Max with trade-in. Get 3 free months of AppleCare+. Choose carrier, color, storage, and trade-in before checkout.",
};

export const dynamic = "force-static";

const CSS = [
  "/apple/har/iphone-18-pro-buy/css/live-0-fonts.css",
  "/apple/har/iphone-18-pro-buy/css/live-1-ac-globalnav.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-2-ac-external.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-3-common-vendor.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-4-step1evolution.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-5-buy-flow-iphone.built.css",
  "/apple/har/iphone-18-pro-buy/css/live-6-as-iphone-18pro.built.css",
];

export default function BuyPage() {
  return (
    <>
      {CSS.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div className="as-carrierpromotion-ribboncontainer row large-12 small-12 large-centered small-centered" style={{ background: "#f5f5f7", borderRadius: 12, padding: "12px 20px", margin: "12px auto", maxWidth: 1024 }}>
        <span><strong>Carrier Deals at Apple</strong> <a href="#carrier-deals">See all deals ⊕</a></span>
        <span>Carrier Financing</span>
        <div className="as-carrierpromotion-ribbon-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="as-carrierpromotion-ribbon-carrierlogo" src="/apple/har/iphone-18-pro-buy/media/carrier-logo-att" alt="AT&T" />
          <strong>AT&amp;T</strong> — Save up to $1200 for an eligible trade-in in any condition.
        </div>
        <div className="as-carrierpromotion-ribbon-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="as-carrierpromotion-ribbon-carrierlogo" src="/apple/har/iphone-18-pro-buy/media/carrier-logo-tmobile" alt="T-Mobile" />
          <strong>T-Mobile</strong> — Save up to $1200 for an eligible trade-in in any condition.
        </div>
        <div className="as-carrierpromotion-ribbon-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="as-carrierpromotion-ribbon-carrierlogo" src="/apple/har/iphone-18-pro-buy/media/carrier-logo-verizon" alt="Verizon" />
          <strong>Verizon</strong> — Save up to $1020 for an eligible trade-in in any condition.
        </div>
      </div>
      <BuyFlow />
      <BelowFold />
    </>
  );
}
