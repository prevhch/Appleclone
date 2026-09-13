import { ProductSubnav, ProductHero, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "Entertainment" };

export default function EntertainmentPage() {
  return (
    <main>
      <ProductSubnav
        title="Entertainment"
        items={[
          { label: "Apple TV+", href: "/entertainment" },
          { label: "Apple Music", href: "/entertainment" },
          { label: "Apple Arcade", href: "/entertainment" },
          { label: "Apple Fitness+", href: "/entertainment" },
          { label: "Apple News+", href: "/entertainment" },
          { label: "Apple Podcasts", href: "/entertainment" },
          { label: "Apple Books", href: "/entertainment" },
        ]}
      />
      <ProductHero
        title="Entertainment"
        sub="Endless stories. Epic experiences. Music, TV, games, fitness, news, and more."
        links={[
          { label: "Try Apple TV+ free", href: "/entertainment" },
          { label: "Try Apple Music free", href: "/entertainment" },
        ]}
        dark
      />
      <FeatureBlocks
        blocks={[
          { title: "Apple TV+", sub: "Stories to believe in.", body: "Award-winning original series, films, and documentaries. Ted Lasso, Severance, The Morning Show, and more. Stream ad-free." },
          { title: "Apple Music", sub: "100 million songs.", body: "Ad-free listening, lossless audio, Spatial Audio with Dolby Atmos, and curated playlists from music experts." },
          { title: "Apple Arcade", sub: "200+ games.", body: "Unlimited access to 200+ incredibly fun games with no ads and no in-app purchases. Play across all your Apple devices." },
          { title: "Apple Fitness+", sub: "Workout your way.", body: "11 workout types, Pilates, yoga, meditation, and more. Apple Watch integration for real-time metrics on screen." },
          { title: "Apple News+", sub: "Hundreds of magazines.", body: "Access to hundreds of premium magazines, news sources, and exclusive content. Stay informed on what matters." },
          { title: "Apple Podcasts", sub: "Stories worth hearing.", body: "Discover millions of free podcasts or subscribe to premium channels. Follow shows, save episodes, and listen anywhere." },
        ]}
      />
    </main>
  );
}
