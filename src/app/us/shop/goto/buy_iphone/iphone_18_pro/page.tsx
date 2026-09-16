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

export default function BuyIphone18ProPage() {
  return (
    <html lang="en-US">
      <head>
        {CSS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body style={{ minHeight: "100vh" }}>
        <div id="ac-globalnav" />
        <main>
          <h1 className="typography-headline-evolvability-large">
            iPhone 18 Pro and iPhone 18 Pro Max
          </h1>
          <p className="typography-body">
            Get 3 months of Apple Music, Apple TV+, and Apple Arcade free with
            this device purchase. Ends with your renewal.
          </p>
        </main>
      </body>
    </html>
  );
}
