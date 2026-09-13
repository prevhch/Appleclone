import { ProductSubnav, BannerBar, ProductHero, FeatureBlocks, TileGrid } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "iPhone 18 Pro" };

export default function IPhone18Pro() {
  return (
    <main>
      <BannerBar text="Pre-order iPhone 18 Pro. Available starting 9.18." cta={{ label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_18_pro" }} />
      <ProductSubnav
        title="iPhone 18 Pro"
        items={[
          { label: "Overview", href: "/iphone-18-pro" },
          { label: "Tech Specs", href: "/iphone-18-pro" },
          { label: "Switch from Android", href: "/iphone-18-pro" },
        ]}
      />
      <ProductHero
        eyebrow="New"
        title="iPhone 18 Pro"
        sub="Pro further."
        avail="Available starting 9.18"
        links={[
          { label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_18_pro" },
          { label: "Learn more", href: "/iphone" },
        ]}
        dark
      />
      <div className="bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro_preorder__dd68unjbzswi_large.jpg")}
          alt="iPhone 18 Pro in Burgundy"
          className="w-full max-w-[1100px] mx-auto object-cover"
        />
      </div>
      <FeatureBlocks
        blocks={[
          { title: "The ultimate upgrade", sub: "Most wanted.", body: "Up to 6 more hours of video vs. iPhone 17 Pro Max, faster wired charging, vapor-cooled A20 Pro, 48MP Fusion with variable aperture, and Ceramic Shield on the front and back." },
          { title: "Pro camera system", sub: "Eye-opening control.", body: "All-new 48MP Fusion Main with variable aperture from ƒ/1.48 to ƒ/4.0, Fusion Ultra Wide and Fusion Telephoto for up to 8x optical-quality zoom, Photographic Styles 3, and Audio Mix." },
          { title: "Battery life", sub: "Greatest of hour time.", body: "Up to 30 hours of use and charge on iPhone 18 Pro Max, up to 45 hours of video playback, and up to 50% charge in about 15 minutes." },
          { title: "A20 Pro", sub: "Welcome to the mother chip.", body: "Vapor-cooled A20 Pro with up to 40% faster graphics than iPhone 17 Pro — 1000x faster neural computations. A20 Pro powers the most responsive iPhone ever." },
          { title: "Design", sub: "Our finest unibody of work.", body: "Four gorgeous finishes with color-matched back glass: Burgundy, Glacier, Silver, and Black. 6.3-inch and 6.9-inch Super Retina XDR displays with ProMotion up to 120Hz." },
          { title: "Siri AI", sub: "More personal. More powerful.", body: "Siri AI is your AI assistant powered by Apple Intelligence — with personal context, app actions, and world knowledge. Rolling out in English." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Why Apple is the best place to shop iPhone."
        tiles={[
          { title: "Apple Upgrade", sub: "Love it. Lease it. Upgrade it.", text: "Lease a new iPhone with low monthly payments for 12 or 24 months and upgrade at the end of your term." },
          { title: "Carrier Deals at Apple", sub: "Get up to $1200 in credit.", text: "Includes carrier credits. AT&T: up to $1200. T-Mobile: up to $1200. Verizon: up to $1020." },
          { title: "Apple Trade In", sub: "Save on a new iPhone with a trade-in.", text: "Get credit toward your next iPhone when you trade in an eligible device. Android phones eligible." },
          { title: "Ways to Buy", sub: "Pay over time, interest-free.", text: "Pay for your new iPhone over time, interest-free, with Apple Card Monthly Installments." },
        ]}
      />
    </main>
  );
}