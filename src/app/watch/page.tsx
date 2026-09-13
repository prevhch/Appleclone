import { ProductSubnav, ProductHero, ProductGrid, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Watch" };

export default function WatchPage() {
  return (
    <main>
      <ProductSubnav
        title="Watch"
        items={[
          { label: "Series 12", href: "/apple-watch-series-12", tag: "New" },
          { label: "Ultra 4", href: "/apple-watch-ultra-4", tag: "New" },
          { label: "SE 3", href: "/watch" },
          { label: "Nike", href: "/watch", tag: "New Colors" },
          { label: "Hermès", href: "/watch", tag: "New" },
          { label: "Compare", href: "/watch" },
          { label: "Bands", href: "/us/shop/goto/buy_accessories", tag: "New Colors" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
          { label: "Apple Fitness+", href: "/watch" },
          { label: "Shop Watch", href: "/us/shop/goto/store" },
          { label: "watchOS 27", href: "/watch" },
        ]}
      />
      <ProductHero
        title="Apple Watch"
        sub=""
        links={[{ label: "Shop Apple Watch", href: "/us/shop/goto/store" }]}
      />
      <ProductGrid
        products={[
          {
            name: "Apple Watch Series 12",
            tag: "New",
            sub: "The ultimate way to watch your health.",
            colors: ["#8B6914", "#D4A574", "#2C2C2E", "#808080", "#D4AF37", "#C0C0C0", "#F5F5DC", "#1C3A5F"],
            cta: [
              { label: "Learn more", href: "/apple-watch-series-12" },
              { label: "Pre-order", href: "/us/shop/goto/store" },
            ],
            dark: true,
          },
          {
            name: "Apple Watch Ultra 4",
            tag: "New",
            sub: "The ultimate sports and adventure watch.",
            colors: ["#C0C0C0", "#2C2C2E"],
            cta: [
              { label: "Learn more", href: "/apple-watch-ultra-4" },
              { label: "Pre-order", href: "/us/shop/goto/store" },
            ],
            dark: true,
          },
          {
            name: "Apple Watch SE 3",
            sub: "Essential health features at a great value.",
            colors: ["#2C2C2E", "#F5E6C8"],
            cta: [
              { label: "Learn more", href: "/watch" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
        ]}
      />
      <FeatureBlocks
        blocks={[
          { title: "Heart Rate Sensing", sub: "The most accurate ever.", body: "Optical heart-rate sensor with clinical-grade accuracy, irregular rhythm notifications, and high/low heart rate alerts." },
          { title: "Health Monitoring", sub: "Your health, always on.", body: "Blood Oxygen, ECG, temperature sensing, sleep tracking with REM stages, and menstrual cycle predictions." },
          { title: "Fitness", sub: "Workout smarter.", body: "Advanced metrics for running, cycling, swimming, and strength training. Automatic workout detection and real-time zones." },
          { title: "Design", sub: "Built tough. Looks great.", body: "Titanium and aluminum cases, scratch-resistant Sapphire crystal, and water resistance to 100m." },
          { title: "watchOS", sub: "Smarter every day.", body: "Smart Stack widgets, personalized watch faces, notifications, and Apple Pay right on your wrist." },
          { title: "Safety", sub: "Peace of mind.", body: "Crash Detection, Fall Detection, Emergency SOS, and precision dual-frequency GPS for location accuracy." },
        ]}
      />
    </main>
  );
}
