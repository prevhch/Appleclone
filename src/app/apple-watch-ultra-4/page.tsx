import { ProductSubnav, BannerBar, ProductHero, FeatureBlocks, TileGrid } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "Apple Watch Ultra 4" };

export default function WatchUltra4Page() {
  return (
    <main>
      <BannerBar text="Pre-order Apple Watch Ultra 4. Available starting 9.18." cta={{ label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4" }} />
      <ProductSubnav
        title="Watch"
        items={[
          { label: "Overview", href: "/apple-watch-ultra-4" },
          { label: "Why Apple Watch", href: "/apple-watch-ultra-4" },
          { label: "Tech Specs", href: "/apple-watch-ultra-4" },
        ]}
      />
      <ProductHero
        eyebrow="New"
        title="Apple Watch Ultra 4"
        sub="A battery you can't outrun."
        price="From $799"
        avail="Available starting 9.18"
        links={[
          { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4" },
          { label: "Learn more", href: "/watch" },
        ]}
        dark
      />
      <div className="bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4_preorder__fvnta8sy0wa6_large.jpg")}
          alt="Apple Watch Ultra 4"
          className="w-full max-w-[1100px] mx-auto object-cover"
        />
      </div>
      <FeatureBlocks
        blocks={[
          { title: "A battery you can't outrun", sub: "Extreme staying power.", body: "Up to 50 hours of normal use and up to 84 hours in Low Power Mode — plus a new Max Extended Workout mode for up to 45 hours of workout tracking." },
          { title: "Precision GPS", sub: "Dual-frequency accuracy.", body: "Precision dual-frequency GPS with advanced positioning algorithms delivers exceptional accuracy even in the densest urban and remote environments." },
          { title: "Health Sensing System", sub: "Heartcore innovation.", body: "The most accurate heart rate sensing in a wearable, powered by the S11 chip — with 60x more frequent background heart readings than Ultra 3." },
          { title: "Durability", sub: "Built for extremes.", body: "49mm aerospace-grade titanium case in Natural and Black finishes, with a sapphire front crystal. MIL-STD-810H tested and IP6X dust resistant." },
          { title: "Water resistance", sub: "Go deeper.", body: "Rated WR100 — fit for recreational scuba diving to 40 meters and high-speed water sports, with full dive-computer capabilities." },
          { title: "Satellite communications", sub: "Connected. Protected.", body: "Emergency SOS, Messages, and Find My via satellite keep you connected when you're off the grid." },
          { title: "Action Button", sub: "Instant access.", body: "A customizable Action Button in international orange gives precise, physical control over your workouts, segments, intervals, and more." },
          { title: "Display", sub: "More readable in the sun.", body: "Wide-angle Always-On Retina display with up to 3000 nits, the brightest display Apple has ever made." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Worth the upgrade? Absolutely."
        cta={{ label: "Compare all Apple Watch models", href: "/watch" }}
        tiles={[
          { title: "Up to 50 hours of battery life", text: "Up to 84 hours in Low Power Mode and 45 hours of Max Extended Workout tracking." },
          { title: "The most accurate heart rate sensing in a wearable", text: "Health Sensing System with the S11 chip." },
          { title: "Readiness and Vitals", sub: "HRV, blood oxygen, and more.", text: "Know your body through the day." },
          { title: "Satellite communications", text: "Emergency SOS, Messages, and Find My via satellite." },
        ]}
      />
    </main>
  );
}