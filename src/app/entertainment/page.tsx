import { ProductSubnav, SectionBlock, TileGrid } from "@/components/Product";

export const metadata = { title: "Entertainment" };

export default function EntertainmentPage() {
  return (
    <main>
      <ProductSubnav
        title="Entertainment"
        items={[
          { label: "Apple One", href: "/entertainment" },
          { label: "Apple TV", href: "/entertainment" },
          { label: "Apple Music", href: "/entertainment" },
          { label: "Apple Arcade", href: "/entertainment" },
          { label: "Apple Fitness+", href: "/entertainment" },
          { label: "Apple News+", href: "/entertainment" },
          { label: "Apple Podcasts", href: "/entertainment" },
          { label: "Apple Books", href: "/entertainment" },
        ]}
      />
      <SectionBlock
        title="Meet the A-list of entertainment."
        sub="Award-winning movies. Binge-worthy shows. Your favorite music mastered in Spatial Audio. The most epic collection of mobile games. And the world's largest library of 4K Ultra HD fitness content. The best entertainment and experiences live here — only on Apple."
        links={[
          { label: "Get up to six services in one subscription with Apple One", href: "/entertainment" },
          { label: "Learn more", href: "/entertainment" },
        ]}
        dark
      />
      <SectionBlock title="One subscription. Six services. Infinite entertainment." />
      <TileGrid
        tiles={[
          { title: "Apple TV", sub: "Stream award-winning Apple Originals on every screen.", text: "Severance, Silo, Foundation, Slow Horses, and more — ad-free, on demand, across all your devices.", link: { label: "Try it free", href: "/entertainment" } },
          { title: "Apple Music", sub: "All music. Highest audio quality. Zero ads.", text: "Over 100 million songs, Spatial Audio mastered, offline listening, and personalized playlists.", link: { label: "Try it free", href: "/entertainment" } },
          { title: "Apple Arcade", sub: "The best collection of mobile games, now in the Apple Games app.", text: "200+ incredibly fun games with no ads and no in-app purchases, across Apple Arcade.", link: { label: "Get the app", href: "/entertainment" } },
          { title: "Apple Fitness+", sub: "From Strength to Meditation, there's something for everyone.", text: "Work out with world-class trainers, with Apple Watch metrics on screen in real time.", link: { label: "Try it free", href: "/entertainment" } },
          { title: "Apple News+", sub: "Hundreds of magazines and leading newspapers. One subscription.", text: "Premium publications, audio stories, and puzzles — all in one place, ad-free.", link: { label: "Try it free", href: "/entertainment" } },
          { title: "Apple Podcasts", sub: "Millions of shows, from the biggest names to the best independents.", text: "Discover your next favorite show, or subscribe to premium channels for bonus episodes.", link: { label: "Open the app", href: "/entertainment" } },
          { title: "Apple Books", sub: "Read, listen, discover. All in one place.", text: "Browse millions of books and audiobooks, and enjoy them across all your Apple devices.", link: { label: "Open the app", href: "/entertainment" } },
        ]}
      />
      <SectionBlock
        title="Apple One."
        sub="Bundle up to six Apple services and enjoy more for less."
        links={[{ label: "Try Apple One free", href: "/entertainment" }]}
      />
    </main>
  );
}