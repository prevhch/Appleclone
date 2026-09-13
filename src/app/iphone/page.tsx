import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "iPhone" };

export default function IPhonePage() {
  return (
    <main>
      <ProductSubnav
        title="iPhone"
        items={[
          { label: "iPhone Duo", href: "/iphone-duo", tag: "New" },
          { label: "iPhone 18 Pro", href: "/iphone-18-pro", tag: "New" },
          { label: "iPhone Air", href: "/iphone" },
          { label: "iPhone 17", href: "/iphone" },
          { label: "Compare", href: "/iphone" },
          { label: "Shop iPhone", href: "/us/shop/goto/buy_iphone" },
        ]}
      />
      <ProductHero
        title="iPhone"
        sub="Hello, hello. Pro further."
        links={[
          { label: "Learn more about Duo", href: "/iphone-duo" },
          { label: "Learn more about 18 Pro", href: "/iphone-18-pro" },
        ]}
      />
      <FeatureBlocks
        blocks={[
          { title: "Getting Started", sub: "Switching from Android is simple.", body: "Move to iOS app transfers contacts, messages, photos, apps and more securely." },
          { title: "Designed to Last", sub: "Holds value longer.", body: "Ceramic Shield 2, better scratch resistance, splash resistance, regular iOS updates." },
          { title: "Cutting-Edge Cameras", sub: "Picture your best photos.", body: "48MP Fusion Main with variable aperture, 4K 120fps Dolby Vision, Camera Control." },
          { title: "Apple Intelligence and Siri AI", sub: "Helpful in all the right places.", body: "On-device processing, Private Cloud Compute, Visual Intelligence via Shutter button." },
          { title: "Environment", sub: "Designed with earth in mind.", body: "100% recycled cobalt in batteries, fiber-based packaging, Apple Trade In." },
          { title: "Privacy", sub: "Your data where you want it.", body: "On-device AI, Private Browsing, end-to-end encrypted iMessage, Apple Pay tokenization." },
        ]}
      />
    </main>
  );
}
