import { ProductSubnav, SectionBlock, ProductGrid, TileGrid } from "@/components/Product";

export const metadata = { title: "Watch" };

export default function WatchPage() {
  return (
    <main>
      <ProductSubnav
        title="Shop Watch"
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
      <SectionBlock title="Apple Watch" sub="Explore the lineup." links={[{ label: "Shop Apple Watch", href: "/us/shop/goto/store" }]} />
      <ProductGrid
        products={[
          {
            name: "Apple Watch Series 12",
            tag: "New",
            sub: "The ultimate way to watch your health.",
            price: "From $399",
            avail: "Available starting 9.18",
            colors: ["Dark Bronze", "Light Gold", "Black", "Space Gray", "Radiant Gold", "Natural", "Pearl White", "Night Blue"],
            cta: [
              { label: "Learn more", href: "/apple-watch-series-12" },
              { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_series_12" },
            ],
            dark: true,
          },
          {
            name: "Apple Watch Ultra 4",
            tag: "New",
            sub: "The ultimate sports and adventure watch.",
            price: "From $799",
            avail: "Available starting 9.18",
            colors: ["Natural", "Black"],
            cta: [
              { label: "Learn more", href: "/apple-watch-ultra-4" },
              { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4" },
            ],
            dark: true,
          },
          {
            name: "Apple Watch SE 3",
            sub: "Essential health features at a great value.",
            colors: ["Midnight", "Starlight"],
            cta: [
              { label: "Learn more", href: "/watch" },
              { label: "Buy", href: "/us/shop/goto/buy_watch/apple_watch_se" },
            ],
          },
        ]}
      />
      <SectionBlock title="Apple Watch essentials." />
      <TileGrid
        tiles={[
          { title: "Bands", sub: "Make it personal. Make it pop.", text: "Discover new bands in a fresh mix of materials, colors, and patterns — including new colors this season." },
          { title: "Watch Faces", sub: "Make it yours.", text: "Dozens of watch faces to personalize, from simple and minimal to rich and information-dense." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Made for each other."
        tiles={[
          { title: "Apple Watch and iPhone", sub: "Better together.", text: "The redesigned Health app arrives late 2026 on Apple Intelligence-enabled iPhones — with custom Maps routes and cycling Live Activity." },
          { title: "Apple Watch and AirPods", sub: "Your soundtrack, on the move.", text: "Take calls, play music and podcasts, get notifications, and respond with just Siri on Apple Watch." },
          { title: "Apple Watch and Apple Fitness+", sub: "Your workout, your way.", text: "Real-time heart rate, calories, and Activity rings on screen, plus audio-guided walks, runs, and meditations." },
        ]}
      />
      <TileGrid
        bg="bg-white"
        heading="Why Apple is the best place to shop Apple Watch."
        cta={{ label: "Shop Apple Watch", href: "/us/shop/goto/store" }}
        tiles={[
          { title: "Apple Trade In", sub: "Save on a new Apple Watch with a trade-in.", text: "Get credit toward your next Apple Watch when you trade in an eligible device." },
          { title: "Education", sub: "Save on Apple Watch with education pricing.", text: "College students and educators save on Apple Watch through the Apple Education Store." },
          { title: "Delivery and Pickup", sub: "Get your order quickly and easily.", text: "Choose two-hour delivery, free next-day delivery, or easy pickup options at Apple Store." },
          { title: "Personal Setup", sub: "Make the most of your Apple Watch.", text: "Jump into an online, one-on-one session with a Specialist to set up and personalize your Apple Watch." },
        ]}
      />
    </main>
  );
}