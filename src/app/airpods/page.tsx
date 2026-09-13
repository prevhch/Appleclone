import { ProductSubnav, BannerBar, SectionBlock, ProductGrid, TileGrid } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "AirPods" };

export default function AirPodsPage() {
  return (
    <main>
      <BannerBar
        text="Get 3 months of Apple Music free with your AirPods 5."
        cta={{ label: "Pre-order", href: "/us/shop/goto/buy_airpods/airpods_5" }}
      />
      <ProductSubnav
        title="Shop AirPods"
        items={[
          { label: "AirPods", href: "/airpods", tag: "New" },
          { label: "AirPods Pro", href: "/airpods" },
          { label: "AirPods Max", href: "/airpods" },
          { label: "Compare", href: "/airpods" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
          { label: "Apple Music", href: "/entertainment" },
        ]}
      />
      <SectionBlock title="AirPods" text="Discover the magic of Active Noise Cancellation." dark />
      <ProductGrid
        products={[
          {
            name: "AirPods 5",
            tag: "New",
            sub: "Discover the magic of Active Noise Cancellation.",
            avail: "Available starting 9.18",
            cta: [
              { label: "Learn more", href: "/airpods-5" },
              { label: "Pre-order", href: "/us/shop/goto/buy_airpods/airpods_5" },
            ],
            dark: true,
          },
          {
            name: "AirPods Pro 3",
            sub: "The world's best in-ear Active Noise Cancellation.",
            cta: [
              { label: "Learn more", href: "/airpods" },
              { label: "Buy", href: "/us/shop/goto/buy_airpods/airpods_pro" },
            ],
          },
          {
            name: "AirPods Max 2",
            sub: "Listening. Remastered.",
            cta: [
              { label: "Learn more", href: "/airpods" },
              { label: "Buy", href: "/us/shop/goto/buy_airpods/airpods_max" },
            ],
          },
        ]}
      />
      <SectionBlock title="Get to know AirPods." />
      <TileGrid
        tiles={[
          { title: "Active Noise Cancellation", sub: "Control what you hear. And what you don't.", text: "ANC reduces unwanted sounds so you can focus, and Transparency lets you hear the world around you when you need to." },
          { title: "Live Translation", sub: "Easily communicate across languages.", text: "Available in select languages and regions on AirPods 5, AirPods Pro 3, and AirPods Max 2." },
          { title: "Heart Rate Sensing", sub: "Track your heart rate and calories burned.", text: "Only AirPods Pro 3 sense your heart rate during workouts, with metrics synced to your Apple Watch and iPhone." },
          { title: "Hearing Health", sub: "Keep in touch with your hearing.", text: "Hearing Test, Hearing Aid, and Hearing Protection — all built into AirPods Pro 3 for active hearing health." },
          { title: "Personalized Spatial Audio", sub: "Immersive sound. Fine-tuned to you.", text: "3D audio matched to your ear shape with dynamic head tracking, for a theater-like experience wherever you go." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Why Apple is the best place to buy AirPods."
        tiles={[
          { title: "Personalize your AirPods", sub: "Make them yours.", text: "Engrave your AirPods with your initials or favorite emoji — free. Only at Apple." },
          { title: "Pay monthly at 0% APR", sub: "Apple Card Monthly Installments.", text: "You can pay over time when you choose to check out at Apple with Apple Card Monthly Installments." },
          { title: "Fast delivery or pickup", sub: "Get your order quickly and easily.", text: "Choose two-hour delivery or pick up available items at an Apple Store." },
          { title: "Get help buying", sub: "Have a question?", text: "Call a Specialist or chat online to get one-on-one shopping help." },
        ]}
      />
    </main>
  );
}