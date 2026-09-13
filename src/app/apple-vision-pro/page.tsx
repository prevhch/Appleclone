import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Apple Vision Pro" };

export default function VisionProPage() {
  return (
    <main>
      <ProductSubnav
        title="Vision Pro"
        items={[
          { label: "Overview", href: "/apple-vision-pro" },
          { label: "Tech Specs", href: "/apple-vision-pro" },
          { label: "Shop Vision Pro", href: "/us/shop/goto/store" },
        ]}
      />
      <ProductHero
        title="Apple Vision Pro"
        sub="Welcome to spatial computing. An infinite canvas for apps. A cinema for entertainment. A portal to the world."
        links={[
          { label: "Learn more", href: "/apple-vision-pro" },
          { label: "Buy", href: "/us/shop/goto/store" },
        ]}
        dark
      />
      <FeatureBlocks
        blocks={[
          { title: "Spatial Computing", sub: "Apps in your space.", body: "Place unlimited app windows anywhere in your room. Scale them, arrange them, and interact with them using your eyes, hands, and voice." },
          { title: "EyeSight", sub: "See and be seen.", body: "An outward display shows your eyes when someone approaches, letting them know when you're using apps or fully immersed." },
          { title: "Immersion", sub: "Transport yourself.", body: "Panoramas wrap around you. Environments place you in stunning landscapes. Dim the world to focus on what matters." },
          { title: "M2 + R1 Chips", sub: "Dual-chip power.", body: "M2 delivers stunning visuals while R1 processes input from 12 cameras, 5 sensors, and 6 microphones with 12ms latency." },
          { title: "Design", sub: "Engineered for comfort.", body: "A single piece of three-dimensionally laminated glass in a lightweight aluminum alloy frame with a modular headband system." },
          { title: "visionOS", sub: "Spatial operating system.", body: "Built on macOS, iOS, and iPadOS foundations. 3D interface, spatial Siri, and hundreds of compatible iPad and iPhone apps." },
        ]}
      />
    </main>
  );
}
