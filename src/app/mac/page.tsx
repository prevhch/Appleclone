import { ProductSubnav, ProductHero, ProductGrid, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Mac" };

export default function MacPage() {
  return (
    <main>
      <ProductSubnav
        title="Mac"
        items={[
          { label: "MacBook Neo", href: "/mac" },
          { label: "MacBook Air", href: "/macbook-air" },
          { label: "MacBook Pro", href: "/mac" },
          { label: "iMac", href: "/mac" },
          { label: "Mac mini", href: "/mac", tag: "New" },
          { label: "Mac Studio", href: "/mac", tag: "New" },
          { label: "Compare", href: "/mac" },
          { label: "Help Me Choose", href: "/mac" },
          { label: "Displays", href: "/mac" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
          { label: "Shop Mac", href: "/us/shop/goto/store" },
        ]}
      />
      <ProductHero
        title="Mac"
        sub=""
        links={[{ label: "Shop Mac", href: "/us/shop/goto/store" }]}
      />
      <ProductGrid
        products={[
          {
            name: "MacBook Neo",
            sub: "The magic of Mac at a surprising price.",
            colors: ["#C0C0C0", "#E8B4B8", "#F5D76E", "#4B0082"],
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "MacBook Air 13\" and 15\"",
            sub: "Thin. Fast. Powerful and portable.",
            colors: ["#A8C8E8", "#C0C0C0", "#F5E6C8", "#2C2C2E"],
            cta: [
              { label: "Learn more", href: "/macbook-air" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "MacBook Pro 14\" and 16\"",
            sub: "The most advanced Mac laptops for demanding tasks.",
            colors: ["#2C2C2E", "#C0C0C0"],
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "iMac",
            sub: "An all-in-one desktop for creativity and productivity.",
            colors: ["#7EB5D6", "#9B8EC4", "#E8A0BF", "#F4A460", "#F5D76E", "#7BC67E", "#C0C0C0"],
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "Mac mini",
            tag: "New",
            sub: "The mini-est, most affordable Mac desktop.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Pre-order", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "Mac Studio",
            tag: "New",
            sub: "Powerful performance and connectivity for pros.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Pre-order", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "Studio Display",
            sub: "A 5K Retina display that's perfect for Mac.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "Studio Display XDR",
            sub: "The ultimate 5K Retina XDR display for creative and pro workflows.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
        ]}
      />
      <FeatureBlocks
        blocks={[
          { title: "Performance and Battery Life", sub: "Go fast. Go far.", body: "M5 chip family, all-day battery, fanless Air designs." },
          { title: "A powerful platform for AI", sub: "Smart. Secure. On device.", body: "Apple Intelligence runs entirely on your Mac, keeping your data private." },
          { title: "macOS and Apple Intelligence", sub: "Easy to use. Easy to love.", body: "On-device AI, smarter Siri, and tools that help you write, focus, and create." },
          { title: "Mac + iPhone", sub: "Together they work wonders.", body: "Answer calls from your iPhone on your Mac. Copy text on one, paste on the other." },
          { title: "Compatibility", sub: "Mac runs your favorite apps.", body: "Microsoft 365, Adobe Creative Cloud, Zoom, and thousands more." },
          { title: "Privacy and Security", sub: "Your business is nobody else's.", body: "Built-in protections keep your data safe and your Mac secure." },
        ]}
      />
    </main>
  );
}
