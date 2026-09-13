import { ProductSubnav, BannerBar, ProductHero, FeatureBlocks, TileGrid } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "Apple Watch Series 12" };

export default function WatchSeries12Page() {
  return (
    <main>
      <BannerBar text="Pre-order Apple Watch Series 12. Available starting 9.18." cta={{ label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_series_12" }} />
      <ProductSubnav
        title="Watch"
        items={[
          { label: "Overview", href: "/apple-watch-series-12" },
          { label: "Why Apple Watch", href: "/apple-watch-series-12" },
          { label: "Tech Specs", href: "/apple-watch-series-12" },
        ]}
      />
      <ProductHero
        eyebrow="New"
        title="Apple Watch Series 12"
        sub="A work of heart."
        price="From $399"
        avail="Available starting 9.18"
        links={[
          { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_series_12" },
          { label: "Learn more", href: "/watch" },
        ]}
        dark
      />
      <div className="bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/apple-watch-series-12/a/hero_apple_watch_series_12_preorder__cv2wd7ow8926_large.jpg")}
          alt="Apple Watch Series 12"
          className="w-full max-w-[1100px] mx-auto object-cover"
        />
      </div>
      <FeatureBlocks
        blocks={[
          { title: "Health Sensing System", sub: "Most accurate heart rate sensing in a wearable.", body: "An all-new Health Sensing System with more capable optical and electrical sensors and larger, more power-efficient green LEDs." },
          { title: "Readiness", sub: "Ready. Set. Know.", body: "A personal readiness score tells you whether to rest or put yourself to the test — calculated from recent activity, vitals, and sleep." },
          { title: "HRV", sub: "Stress and recovery insights.", body: "More frequent heart rate variability readings — up to 24x more often than Series 11 — help provide insights on stress and recovery." },
          { title: "Sleep", sub: "Understand your rest.", body: "A Sleep score analyzes duration, bedtime consistency, wakeups, and sleep stages so you wake up informed." },
          { title: "Design", sub: "Stunning display. Eight finishes.", body: "Wide-angle Always-On Retina display up to 2000 nits, Ceramic Shield 2, and eight finishes including Ceramic in Pearl White and Night Blue. 46mm or 42mm." },
          { title: "Battery life", sub: "Up to 24 hours of normal use.", body: "With fast charging — 15 minutes gives you up to 12 additional hours. Up to 38 hours in Low Power Mode." },
          { title: "Siri AI", sub: "More personal. More powerful.", body: "Make every day more effortless with Siri AI — seamless with Audio Intelligence, powered by the S11 chip." },
          { title: "Safety", sub: "Helpful features. On and off the grid.", body: "Emergency SOS, Fall Detection, and Crash Detection are built in, plus 5G and Precision Finding for iPhone." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Worth the upgrade? Absolutely."
        cta={{ label: "Compare all Apple Watch models", href: "/watch" }}
        tiles={[
          { title: "Up to 24 hours of battery life", text: "Up to 38 hours in Low Power Mode." },
          { title: "Most accurate heart rate sensing in a wearable", text: "With the new Health Sensing System." },
          { title: "Readiness and Vitals", sub: "HRV, blood oxygen, and more.", text: "Know your body through the day." },
          { title: "Sleep score", text: "Sleep tracking with apnea notifications and advanced Cycle Tracking." },
        ]}
      />
    </main>
  );
}