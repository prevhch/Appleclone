import { ProductSubnav, FeatureBlocks } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "AirPods 5" };

export default function AirPods5Page() {
  return (
    <main>
      <ProductSubnav
        title="AirPods"
        items={[
          { label: "Overview", href: "/airpods-5" },
          { label: "Tech Specs", href: "/airpods-5" },
          { label: "Compare", href: "/airpods" },
        ]}
      />
      <section className="bg-[#f5f5f7] relative overflow-hidden" style={{ height: "800px" }}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A("/v/homepage/images/airpods-5/a/promo_airpods_5_preorder__lydvte0llb6i_large.jpg")}
            alt="AirPods 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end px-8 md:px-16" style={{ paddingBottom: "96px" }}>
            <h1 style={{ fontSize: "32px", lineHeight: "36px", fontWeight: 600, marginTop: "8px", color: "#f5f5f7" }}>AirPods 5</h1>
            <h2 style={{ fontSize: "64px", lineHeight: "68px", fontWeight: 600, marginTop: "8px", color: "#f5f5f7" }}>Discover the magic of Active Noise Cancellation.</h2>
            <p style={{ fontSize: "17px", lineHeight: "21px", marginTop: "8px", color: "#f5f5f7" }}>Available starting 9.18</p>
          </div>
          <div className="absolute right-8 md:right-16 flex items-center gap-4" style={{ bottom: "96px" }}>
            <span style={{ fontSize: "17px", lineHeight: "21px", color: "#f5f5f7" }}>Starting at $129</span>
            <a href="/us/shop/goto/buy_airpods/airpods_5" className="bg-[#2997ff] text-white text-[17px] px-5 py-2 rounded-full hover:bg-[#1d7de8] transition-colors">Pre-order</a>
          </div>
        </div>
      </section>
      <FeatureBlocks
        blocks={[
          { title: "Active Noise Cancellation", sub: "Your personal quiet.", body: "Advanced H3 chip delivers up to 2x noise cancellation, blocking out the world so you can focus on what matters." },
          { title: "Personalized Spatial Audio", sub: "Sound, customized.", body: "Creates a private listening profile using the TrueDepth camera to map your ear shape for precise spatial audio." },
          { title: "MagSafe Case", sub: "Charges anywhere.", body: "USB-C, Apple Watch charger, MagSafe, and Qi2 compatible. Precision Finding with built-in speaker." },
          { title: "Touch Control", sub: "Swipe to adjust.", body: "A capacitive touch surface on the stem for volume swipe, media control, and call management." },
          { title: "Battery", sub: "6+30 hours.", body: "6 hours of listening time per charge, plus 24 hours from the case for a total of 30 hours." },
          { title: "Durability", sub: "IP54 rated.", body: "Dust and water resistant for everyday adventures. Available in white." },
        ]}
      />
    </main>
  );
}
