import HeroScrub from "@/components/HeroScrub";
import Reveal from "@/components/Reveal";
import { HERO_18PRO } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "iPhone 18 Pro" };

export default function IPhone18Pro() {
  return (
    <main>
      <HeroScrub
        title="iPhone 18 Pro"
        sub="Pro further."
        avail="Pre-order now. Available 9.18"
        theme="dark"
        links={[{ label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_18_pro" }]}
        tileLink={HERO_18PRO.tileLink}
        startStem={HERO_18PRO.startStem}
        endStem={HERO_18PRO.endStem}
        tall
        videoBase={HERO_18PRO.videoBase}
        videoLabel="iPhone 18 Pro rotating Burgundy Glacier Black"
      />
      <section className="mx-auto max-w-[800px] px-4 py-16 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold">A20 Pro. Variable aperture. Ceramic Shield 2.</h2>
          <p className="mt-4 text-[17px] text-[#6e6e73]">
            School-project detail page. The hero above plays once when viewed:
            startframe JPG poster → MP4 (finishes even if scrolled past) →
            endframe JPG.
          </p>
          <Link href="/iphone" className="link-blue">Back to iPhone <span aria-hidden="true" className="chev">›</span></Link>
        </Reveal>
      </section>
    </main>
  );
}
