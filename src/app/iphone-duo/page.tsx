import { ProductSubnav, BannerBar, ProductHero, FeatureBlocks, TileGrid } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "iPhone Duo" };

export default function IPhoneDuo() {
  return (
    <main>
      <BannerBar
        text="Pre-order starting 5:00 a.m. PT on October sixteenth. Available starting October twenty-third."
        cta={{ label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_duo" }}
      />
      <ProductSubnav
        title="iPhone Duo"
        items={[
          { label: "Overview", href: "/iphone-duo" },
          { label: "Tech Specs", href: "/iphone-duo" },
          { label: "Switch from Android", href: "/iphone-duo" },
        ]}
      />
      <ProductHero
        title="iPhone Duo"
        sub="Hello, hello."
        price=""
        avail="Pre-order 10.16 · Available 10.23"
        links={[
          { label: "View pricing", href: "/us/shop/goto/buy_iphone/iphone_duo" },
          { label: "Learn more", href: "/iphone" },
        ]}
        dark
      />
      <div className="bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/iphone-duo/a/hero_iphone_duo_announce__fh4u8yzndpe2_large.jpg")}
          alt="iPhone Duo unfolded"
          className="w-full max-w-[1100px] mx-auto object-cover"
        />
      </div>
      <FeatureBlocks
        blocks={[
          { title: "Foldable design", sub: "A new iPhone enters the fold.", body: "The first foldable iPhone, with the largest display ever — 50% larger than iPhone 18 Pro Max. Grade 5 titanium frame and hinge cover. Durable, pocketable, and posable." },
          { title: "Expansive display", sub: "Think vast.", body: "7.6-inch Super Retina XDR display with a consistent inner and outer aspect ratio, 3000 nits peak brightness, and an under-display FaceTime camera." },
          { title: "Versatility", sub: "Reimagined iOS. Anything's posable.", body: "Poses — Landscape, Portrait, Closed, Seated, Standing — with Split View multitasking, flexible views, and hands-free FaceTime in iOS 27." },
          { title: "Advanced camera system", sub: "Your new favorite camera features.", body: "48MP Dual Fusion camera system with Smart Take, Duo Preview, Kid Cue, and Duo FaceTime. 48MP photos, 4K 120 fps video, and 2x optical-quality zoom." },
          { title: "Performance and battery", sub: "Power on full display.", body: "Vapor-cooled A20 Pro with up to 20% faster 6-core CPU and 50% higher memory bandwidth. Dual-battery system for up to 31 hours of video and a C2 modem." },
          { title: "Siri AI", sub: "More personal. More powerful.", body: "Just ask Siri AI — your AI assistant with personal context, app actions, and world knowledge. Rolling out in English." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Why Apple is the best place to shop iPhone."
        tiles={[
          { title: "Apple Upgrade", sub: "Love it. Lease it. Upgrade it.", text: "Lease a new iPhone with low monthly payments for 12 or 24 months and upgrade at the end of your term." },
          { title: "Apple Trade In", sub: "Save on a new iPhone with a trade-in.", text: "Get credit toward your next iPhone when you trade in an eligible iPhone or Android device." },
          { title: "Ways to Buy", sub: "Pay over time, interest-free.", text: "Pay for your new iPhone over time, interest-free, with Apple Card Monthly Installments." },
          { title: "Personal Setup", sub: "Meet your new iPhone with Personal Setup.", text: "Jump into online, one-on-one sessions with a Specialist to set up your iPhone and discover new features." },
        ]}
      />
    </main>
  );
}