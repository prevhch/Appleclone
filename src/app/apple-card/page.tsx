import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Apple Card" };

export default function AppleCardPage() {
  return (
    <main>
      <ProductSubnav
        title="Apple Card"
        items={[
          { label: "Overview", href: "/apple-card" },
          { label: "Daily Cash", href: "/apple-card" },
          { label: "Apply now", href: "https://card.apple.com/apply/application" },
        ]}
      />
      <ProductHero
        title="Apple Card"
        sub="Get up to 3% Daily Cash back with every purchase. No fees. Built into your iPhone."
        links={[
          { label: "Learn more", href: "/apple-card" },
          { label: "Apply now", href: "https://card.apple.com/apply/application" },
        ]}
      />
      <FeatureBlocks
        blocks={[
          { title: "Daily Cash", sub: "Cash back, instantly.", body: "Get 3% back at Apple and select merchants, 2% with Apple Pay, and 1% with the titanium card. Daily Cash arrives every day." },
          { title: "No Fees", sub: "No surprises.", body: "No annual fee, no late fees, no international fees, and no over-limit fees. Variable APRs from 18.24% to 28.99%." },
          { title: "Titanium Card", sub: "Beautiful design.", body: "Laser-etched titanium with no card number, CVV, or expiration date. Just your name and Apple logo." },
          { title: "Wallet Integration", sub: "Seamless.", body: "Set up in seconds in the Wallet app. Track spending by category, get weekly summaries, and manage payments." },
          { title: "Security", sub: "Your info stays yours.", body: "Face ID, Touch ID, and a unique Device Account Number. No card number stored on your device or Apple servers." },
          { title: "Apple Pay", sub: "Pay anywhere.", body: "Use Apple Card with Apple Pay for contactless payments online, in apps, and at millions of locations worldwide." },
        ]}
      />
    </main>
  );
}
