import { ProductSubnav, ProductGrid, FeatureBlocks } from "@/components/Product";
import { A } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "AirPods" };

export default function AirPodsPage() {
  return (
    <main>
      <ProductSubnav
        title="AirPods"
        items={[
          { label: "AirPods 4", href: "/airpods" },
          { label: "AirPods 5", href: "/airpods-5", tag: "New" },
          { label: "AirPods Pro", href: "/airpods" },
          { label: "AirPods Max", href: "/airpods" },
          { label: "Compare", href: "/airpods" },
          { label: "Shop AirPods", href: "/us/shop/goto/store" },
        ]}
      />
      <section className="bg-black text-white text-center relative overflow-hidden">
        <div className="hero-copy z-20 relative px-4 pt-11 md:pt-14">
          <h1 className="hero-title text-4xl md:text-6xl">AirPods</h1>
          <p className="mt-3 text-xl md:text-2xl opacity-80">Discover the magic of Active Noise Cancellation.</p>
          <div className="mt-4 flex gap-5 justify-center text-[17px]">
            <Link href="/airpods-5" className="hero-link">Learn more <span aria-hidden="true" className="chev">›</span></Link>
            <Link href="/us/shop/goto/store" className="hero-link">Buy <span aria-hidden="true" className="chev">›</span></Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/airpods-5/a/promo_airpods_5_preorder__lydvte0llb6i_large.jpg")}
          alt="AirPods 5"
          className="w-full max-w-[900px] mx-auto object-cover"
        />
      </section>
      <ProductGrid
        products={[
          {
            name: "AirPods 5",
            tag: "New",
            sub: "Discover the magic of Active Noise Cancellation.",
            cta: [
              { label: "Learn more", href: "/airpods-5" },
              { label: "Pre-order", href: "/us/shop/goto/store" },
            ],
            dark: true,
          },
          {
            name: "AirPods Pro 3",
            sub: "Intelligent noise cancellation. Personalized Spatial Audio.",
            cta: [
              { label: "Learn more", href: "/airpods" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "AirPods Max",
            sub: "High-fidelity audio. Effortless magic.",
            colors: ["#7B68AE", "#C0C0C0", "#E8A0BF", "#7EB5D6", "#2C2C2E"],
            cta: [
              { label: "Learn more", href: "/airpods" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
        ]}
      />
      <FeatureBlocks
        blocks={[
          { title: "Active Noise Cancellation", sub: "Silence the world.", body: "Up to 2x more noise cancelled than the previous generation. Computational audio powered by the H3 chip blocks outside sounds." },
          { title: "Spatial Audio", sub: "Sound all around.", body: "Personalized Spatial Audio with dynamic head tracking creates an immersive theater-like experience for music, movies, and calls." },
          { title: "Battery Life", sub: "All day. All night.", body: "Up to 6 hours of listening time on a single charge, and up to 30 hours with the MagSafe Charging Case." },
          { title: "Design", sub: "Comfort meets durability.", body: "Redesigned contoured fit, IP54 dust and water resistance, and a lightweight build for all-day comfort." },
          { title: "H3 Chip", sub: "Smarter than ever.", body: "Custom Apple silicon delivers computational audio, adaptive EQ, and seamless switching between your Apple devices." },
          { title: "Find My", sub: "Never lose them.", body: "Precision Finding with U1 chip, speaker in the case, and Find My network support to locate your AirPods." },
        ]}
      />
    </main>
  );
}
