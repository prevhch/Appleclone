import { ProductSubnav, SectionBlock, TileGrid } from "@/components/Product";

export const metadata = { title: "TV and Home" };

export default function TvHomePage() {
  return (
    <main>
      <ProductSubnav
        title="TV & Home"
        items={[
          { label: "Apple TV 4K", href: "/tv-home" },
          { label: "Apple TV app", href: "/tv-home" },
          { label: "Apple TV", href: "/tv-home" },
          { label: "HomePod", href: "/tv-home" },
          { label: "HomePod mini", href: "/tv-home" },
          { label: "Home app", href: "/tv-home" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
        ]}
      />
      <SectionBlock title="TV & Home" links={[{ label: "Shop TV & Home", href: "/us/shop/goto/store" }]} />
      <section className="max-w-[1024px] mx-auto px-4 pb-6 grid md:grid-cols-2 gap-6">
        {[
          {
            name: "Apple TV 4K",
            sub: "The Apple experience. Cinematic in every sense.",
            links: [
              { label: "Buy", href: "/us/shop/goto/buy_appletv" },
              { label: "Learn more", href: "/tv-home" },
            ],
          },
          {
            name: "HomePod",
            sub: "Profound sound.",
            links: [
              { label: "Buy", href: "/us/shop/goto/buy_homepod" },
              { label: "Learn more", href: "/tv-home" },
            ],
          },
          {
            name: "HomePod mini",
            sub: "Surprising sound for its size.",
            links: [
              { label: "Buy", href: "/us/shop/goto/buy_homepod_mini" },
              { label: "Learn more", href: "/tv-home" },
            ],
          },
          {
            name: "Home app",
            sub: "The foundation for a smarter home.",
            links: [{ label: "Learn more", href: "/tv-home" }],
          },
        ].map((t) => (
          <div key={t.name} className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <h2 className="text-[21px] font-semibold">{t.name}</h2>
            <p className="mt-2 text-[15px] opacity-80">{t.sub}</p>
            <div className="mt-4 flex gap-5 justify-center text-[14px]">
              {t.links.map((l) => (
                <a key={l.label} href={l.href} className="link-blue">
                  {l.label} <span aria-hidden="true" className="chev">›</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
      <SectionBlock title="Every reason to turn your house into a smart home." />
      <TileGrid
        tiles={[
          { title: "Easily control your home", sub: "From anywhere.", text: "Use your favorite devices — iPhone, iPad, Apple Watch, and Mac — to control your connected home with the Home app." },
          { title: "Seamlessly connected entertainment", sub: "In every room.", text: "Play audio across all your HomePods, and video on your Apple TV, for entertainment that follows you through the house." },
          { title: "Run it all with your voice", sub: "Siri has you covered.", text: "\u201CHey Siri, set my bedtime scene.\u201D \u201CHey Siri, make it warmer.\u201D \u201CHey Siri, turn off the lights downstairs.\u201D" },
          { title: "Security and privacy", sub: "The Apple way.", text: "All your smart home activity is protected with end-to-end encryption between your devices and Home access." },
        ]}
      />
      <SectionBlock title="Accessories." sub="Around your home and across your devices." />
      <TileGrid
        bg="bg-[#f5f5f7]"
        tiles={[
          { title: "Lighting", sub: "Shop lights and bulbs, outlets, and switches.", text: "Works with Apple Home for scenes, schedules, and Siri voice control." },
          { title: "Security", sub: "Shop cameras and sensors.", text: "Secure video with HomeKit, and privacy-protected smart home monitoring." },
          { title: "Comfort", sub: "Shop thermostats and climate.", text: "Automate heating and cooling to fit your routine." },
          { title: "Entry", sub: "Shop sensors and locks.", text: "Control your devices by a schedule, by the people you choose, or with your voice." },
        ]}
      />
      <SectionBlock
        title="Watch, sing, play, and work out."
        sub="On the big screen."
        links={[
          { label: "Try Apple TV+ free", href: "/tv-home" },
          { label: "Try Apple Music free", href: "/tv-home" },
          { label: "Get started with Apple Arcade", href: "/tv-home" },
        ]}
        dark
      />
    </main>
  );
}