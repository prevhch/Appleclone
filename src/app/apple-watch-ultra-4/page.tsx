import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Apple Watch Ultra 4" };

export default function WatchUltra4Page() {
  return (
    <main>
      <ProductSubnav
        title="Watch"
        items={[
          { label: "Overview", href: "/apple-watch-ultra-4" },
          { label: "Tech Specs", href: "/apple-watch-ultra-4" },
          { label: "Compare", href: "/watch" },
        ]}
      />
      <ProductHero
        eyebrow="New"
        title="Apple Watch Ultra 4"
        sub="A battery you can't outrun. Precision GPS. Water resistance to 100m. The most rugged Apple Watch."
        links={[
          { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4" },
          { label: "Learn more", href: "/watch" },
        ]}
        dark
      />
      <FeatureBlocks
        blocks={[
          { title: "Battery Life", sub: "Up to 72 hours.", body: "The longest battery life of any Apple Watch. Low Power Mode extends to 72 hours for multi-day adventures." },
          { title: "Precision GPS", sub: "Dual-frequency accuracy.", body: "L1 + L5 GPS with advanced positioning algorithms delivers pinpoint accuracy in dense urban environments and remote areas." },
          { title: "Water Resistance", sub: "100 meters.", body: "WR100 rated with ocean-specific depth gauge and water temperature sensor. EN 13319 compliant for recreational scuba." },
          { title: "Action Button", sub: "Instant access.", body: "A customizable Action Button in international orange for quick access to workout start, compass waypoints, and dive functions." },
          { title: "Durability", sub: "Built for extremes.", body: "Aerospace-grade titanium case, sapphire front crystal, and MIL-STD-810H certification for altitude, temperature, and shock." },
          { title: "Compass", sub: "Navigate anywhere.", body: "Waypoint marking, backtrack routing, and precision dual-frequency compass for backcountry navigation." },
        ]}
      />
    </main>
  );
}
