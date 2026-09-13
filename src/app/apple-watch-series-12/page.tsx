import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Apple Watch Series 12" };

export default function WatchSeries12Page() {
  return (
    <main>
      <ProductSubnav
        title="Watch"
        items={[
          { label: "Overview", href: "/apple-watch-series-12" },
          { label: "Tech Specs", href: "/apple-watch-series-12" },
          { label: "Compare", href: "/watch" },
        ]}
      />
      <ProductHero
        eyebrow="New"
        title="Apple Watch Series 12"
        sub="The most accurate heart rate sensing in a wearable. Always-on display. Blood Oxygen. ECG."
        links={[
          { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_series_12" },
          { label: "Learn more", href: "/watch" },
        ]}
        dark
      />
      <FeatureBlocks
        blocks={[
          { title: "Heart Rate Sensing", sub: "Clinical-grade accuracy.", body: "Third-generation optical sensor with enhanced algorithms provides the most accurate heart rate data in any wearable device." },
          { title: "Health Alerts", sub: "Always watching out for you.", body: "Irregular rhythm notifications, high and low heart rate alerts, and cardiovascular fitness notifications." },
          { title: "Sleep Tracking", sub: "Understand your rest.", body: "Tracks time in REM, Core, and Deep sleep, plus blood oxygen and wrist temperature during sleep." },
          { title: "Design", sub: "Stunning display.", body: "Always-on Retina display up to 2000 nits. Available in 42mm and 46mm cases in aluminum and stainless steel." },
          { title: "watchOS 12", sub: "Smarter every day.", body: "Smart Stack with relevant widgets, personalized watch faces, and workout improvements for every athlete." },
          { title: "Safety", sub: "Help when you need it.", body: "Crash Detection, Fall Detection, Emergency SOS, and international emergency calling." },
        ]}
      />
    </main>
  );
}
