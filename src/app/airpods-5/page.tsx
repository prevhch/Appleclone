import { ProductSubnav, BannerBar, ProductHero, FeatureBlocks, TileGrid } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "AirPods 5" };

export default function AirPods5Page() {
  return (
    <main>
      <BannerBar text="Pre-order AirPods 5. Available starting 9.18." cta={{ label: "Pre-order", href: "/us/shop/goto/buy_airpods/airpods_5" }} />
      <ProductSubnav
        title="AirPods"
        items={[
          { label: "Overview", href: "/airpods-5" },
          { label: "Tech Specs", href: "/airpods-5" },
          { label: "Compare", href: "/airpods" },
        ]}
      />
      <ProductHero
        eyebrow="AirPods 5"
        title="Discover the magic of Active Noise Cancellation."
        sub=""
        price="Starting at $129"
        avail="Available starting 9.18"
        links={[
          { label: "Pre-order", href: "/us/shop/goto/buy_airpods/airpods_5" },
          { label: "Learn more", href: "/airpods" },
        ]}
        dark
      />
      <div className="bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/airpods-5/a/promo_airpods_5_preorder__lydvte0llb6i_large.jpg")}
          alt="AirPods 5"
          className="w-full max-w-[1100px] mx-auto object-cover"
        />
      </div>
      <FeatureBlocks
        blocks={[
          { title: "Active Noise Cancellation", sub: "Noise out. Magic in.", body: "Up to 1.5x better at blocking noise than the previous generation, with the industry's best ANC in an open-ear design. Modes include Transparency, Adaptive Audio, and Conversation Awareness." },
          { title: "Audio performance", sub: "Better sound all the way around.", body: "A redesigned acoustic architecture with next-gen Adaptive EQ and Personalized Spatial Audio with dynamic head tracking, plus Voice Isolation for calls." },
          { title: "Powered by H2", sub: "The chip that works its magic.", body: "The Apple H2 chip powers a range of intelligent features, from instant connection to Siri AI, Live Translation, and Find My." },
          { title: "Charging", sub: "Power for hours.", body: "Up to 4 hours of listening time with ANC, or 5 hours with the Wireless Charging Case — up to 22 hours total with the case." },
          { title: "Design", sub: "All-day comfort.", body: "An open-ear design with force sensor and volume swipe, dual beamforming microphones, and IP57 dust, sweat, and water resistance." },
          { title: "Seamless experience", sub: "Every little thing they do is magic.", body: "One-tap connect, auto-detection that pauses when you remove them, and Find My with Precision Finding." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Why Apple is the best place to buy AirPods."
        tiles={[
          { title: "Pay over time, interest-free", sub: "Apple Card Monthly Installments.", text: "You can pay over time when you choose to check out at Apple with Apple Card Monthly Installments." },
          { title: "Get flexible delivery and easy pickup", sub: "Your order, your way.", text: "Choose two-hour delivery, free next-day delivery, or easy pickup at an Apple Store." },
          { title: "Shop live with a Specialist", sub: "Guided Video Shopping.", text: "Get one-on-one shopping support in a live, guided video session whenever you want it." },
          { title: "Apple Store app", sub: "Designed around you.", text: "Explore a shopping experience designed around you, customized to your devices." },
        ]}
      />
    </main>
  );
}