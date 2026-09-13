import { ProductHero, FeatureBlocks } from "@/components/Product";
import { A } from "@/lib/site";

export const metadata = { title: "iPhone Duo" };

export default function IPhoneDuo() {
  return (
    <main>
      <ProductHero
        title="iPhone Duo"
        sub="Hello, hello. The largest display of any iPhone. Foldable. Posable."
        links={[
          { label: "View pricing", href: "/us/shop/goto/buy_iphone/iphone_duo" },
          { label: "Back to iPhone", href: "/iphone" },
        ]}
      />
      <div className="flex justify-center bg-[#f5f5f7] pb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A("/v/homepage/images/iphone-duo/a/hero_iphone_duo_announce__fh4u8yzndpe2_large.jpg")}
          alt="iPhone Duo unfolded"
          className="w-full max-w-[1100px] object-cover"
        />
      </div>
      <FeatureBlocks
        blocks={[
          { title: "Foldable display", sub: "Posable. Durable.", body: "Interior Home Screen continuity, Dual Capture with Center Stage front camera." },
          { title: "Smart Take", sub: "On-device AI shutter.", body: "Detects posed people and captures automatically." },
        ]}
      />
    </main>
  );
}
