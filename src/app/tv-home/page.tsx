import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "TV and Home" };

export default function TvHomePage() {
  return (
    <main>
      <ProductSubnav
        title="TV & Home"
        items={[
          { label: "Apple TV 4K", href: "/tv-home" },
          { label: "HomePod", href: "/tv-home" },
          { label: "HomePod mini", href: "/tv-home" },
          { label: "Shop", href: "/us/shop/goto/store" },
        ]}
      />
      <ProductHero
        title="TV and Home"
        sub="Endless entertainment. Smart home control. All from Apple."
        links={[
          { label: "Shop Apple TV 4K", href: "/us/shop/goto/store" },
          { label: "Shop HomePod", href: "/us/shop/goto/store" },
        ]}
        dark
      />
      <FeatureBlocks
        blocks={[
          { title: "Apple TV 4K", sub: "The best way to watch.", body: "A17 Pro chip, Dolby Vision, HDR10+, and Dolby Atmos for stunning picture and sound. Siri Remote included." },
          { title: "HomePod", sub: "Room-filling sound.", body: "Spatial audio with room sensing, Siri intelligence, and seamless smart home control with Thread and Matter support." },
          { title: "HomeKit", sub: "Your home, automated.", body: "Control lights, locks, thermostats, and more from anywhere with the Home app. Works with Siri voice commands." },
          { title: "AirPlay", sub: "Share from any device.", body: "Stream video, photos, and music from your iPhone, iPad, or Mac to your TV or HomePod speakers." },
          { title: "Apple TV App", sub: "One place for everything.", body: "Apple TV+, MLS Season Pass, channels from HBO, Paramount+, and more. All your shows in one app." },
          { title: "Privacy", sub: "Your data stays private.", body: "End-to-end encryption, no tracking across apps, and transparent data practices. Your home is your sanctuary." },
        ]}
      />
    </main>
  );
}
