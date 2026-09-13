import { ProductHero, FeatureBlocks } from "@/components/Product";

function stub(title: string, sub: string) {
  return function Page() {
    return (
      <main>
        <ProductHero title={title} sub={sub} links={[{ label: "Back home", href: "/" }]} />
        <FeatureBlocks
          blocks={[
            { title: `${title} overview`, sub: "Learn more", body: `The new ${title.toLowerCase()} lineup. Explore all features and specifications.` },
            { title: "Why Apple", sub: "Best place to shop", body: "Education pricing, Personal Setup, delivery & pickup, guided shopping." },
          ]}
        />
      </main>
    );
  };
}

// Route stubs share one file pattern via individual pages below
export default stub("Product", "Stub");
