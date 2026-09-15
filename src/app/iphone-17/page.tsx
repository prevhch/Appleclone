"use client";

import Link from "next/link";
import { ProductSubnav } from "@/components/Product";
import HeroScrub from "@/components/HeroScrub";
import InlineMedia from "@/components/InlineMedia";
import ApplePicture from "@/components/ApplePicture";
import { A } from "@/lib/site";

const P = (stem: string) => `/apple/v/iphone-17/i/images/overview/${stem}`;
const S = (stem: string) => `/apple/v/iphone-17/i/images/site/localnav/${stem}`;

/**
 * iPhone 17 — full real-apple.com marketing clone.
 * EVERY stem below verified physically on disk at public/apple/v/iphone-17.
 */

const NAV_ITEMS = [
  { label: "iPhone 17", href: "/iphone-17", active: true },
  { label: "iPhone 18 Pro", href: "/iphone-18-pro" },
  { label: "iPhone Air", href: "/iphone-air" },
  { label: "iPhone 17e", href: "/iphone-17e" },
  { label: "Compare", href: "/iphone/compare", img: P("site/localnav/compare__f59ce5huzzjdy") },
  { label: "Accessories", href: "/iphone/accessories", img: P("site/localnav/accessories__eyzg7ip7y3jgy") },
  { label: "Shop 17", href: "/us/shop/goto/buy_iphone/iphone_17", img: P("site/localnav/shop__cb9bgej62nf6") },
];

interface HeadProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
}

function Head({ eyebrow, title, sub, children }: HeadProps) {
  return (
    <div className="mx-auto max-w-[890px] px-4 pt-16 pb-10 text-center">
      {eyebrow && <p className="text-[21px] font-semibold text-[#2997ff]">{eyebrow}</p>}
      <h2 className="mt-3 text-[40px] font-semibold tracking-tight md:text-[56px]">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-[700px] text-[21px] leading-relaxed text-[#86868b]">{sub}</p>}
      {children}
    </div>
  );
}

function Head2({ title, sub, children }: { title: string; sub: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[890px] px-4 pt-20 pb-10 text-center">
      <h2 className="text-[40px] font-semibold tracking-tight md:text-[56px]">{title}</h2>
      <p className="mx-auto mt-4 max-w-[700px] text-[21px] leading-relaxed text-[#86868b]">{sub}</p>
      {children}
    </div>
  );
}

const MEDIA = "/apple/105/media/us/iphone-17/2026/07e2b11e";
const V = (anim: string) => `${MEDIA}/anim/${anim}/`;

export default function IPhone17Page() {
  const P_ = (stem: string) => P(stem);
  return (
    <main className="bg-black text-white">
      <ProductSubnav title="iPhone 17" items={NAV_ITEMS} dark />

      {/* ── Welcome hero — static (no endframe on disk) ── */}
      <section id="welcome" className="relative bg-black pb-0 pt-2 text-center">
        <div className="mx-auto max-w-[1024px] px-4 pt-16">
          <h1 className="text-[40px] font-semibold leading-tight tracking-tight md:text-[64px]">iPhone 17</h1>
          <p className="mt-3 text-[21px] font-medium text-[#86868b] md:text-[24px]">It&rsquo;s a camera. It&rsquo;s an A19 supercomputer. It&rsquo;s the new everything.</p>
          <div className="mt-6 flex items-center justify-center gap-8">
            <Link href="/us/shop/goto/buy_iphone/iphone_17" className="text-[17px] text-[#2997ff] hover:underline">
              Buy <span aria-hidden="true">›</span>
            </Link>
            <Link href="/iphone-17/specs" className="text-[17px] text-[#2997ff] hover:underline">
              Learn more <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-[1024px] px-4 pb-12 pt-10">
          <ApplePicture stem={P("welcome/hero_startframe__e9e7pcnguyqi")} className="block w-full" imgClassName="w-full" />
        </div>
      </section>

      {/* ── Highlights — ceramic shield scrub ── */}
      <section id="highlights" className="bg-black">
        <Head eyebrow="Highlights" title="The new everything." sub="A18 Pro outperforms. But out of nowhere, the new everything. Titanium on iPhone 17. A19 Pro power. A 2x stronger Ceramic Shield. And Apple Intelligence, built right in.">
          <Link href="/iphone-17/highlights" className="text-[17px] text-[#2997ff] hover:underline">
            Learn more <span aria-hidden="true">›</span>
          </Link>
        </Head>
        <div className="mx-auto max-w-[1024px] px-4 pb-16">
          <HeroScrub
            title="Ceramic Shield"
            sub="2x stronger than the glass on any smartphone. Now with a new high-performance formula, the Ceramic Shield on iPhone 17 is tougher than ever."
            avail="On every iPhone 17."
            startStem={P("highlights/ceramic-shield/highlights_ceramic_shield_startframe__c6ac0uj2h6y6")}
            endStem={P("highlights/ceramic-shield/highlights_ceramic_shield_endframe__cbyipzki5iwi")}
            tileLink="/iphone-17"
            theme="dark"
            videoBase=""
            links={[]}
          />
        </div>
      </section>

      {/* ── A19 Pro chip scrub ── */}
      <section className="bg-black py-8">
        <div className="mx-auto max-w-[1024px] px-4">
          <HeroScrub
            title="The new A19 Pro chip"
            sub="The fastest chip ever in a smartphone. A 3nm process, a 16-core Neural Engine, and graphics that rival desktop-class GPUs — all while sipping power."
            avail="Apple Intelligence ready."
            startStem={P("highlights/chip-battery/highlights_chip_startframe__ff1c34djngya")}
            endStem={P("highlights/chip-battery/highlights_chip_endframe__bxwttzjdejf6")}
            tileLink="/iphone-17"
            theme="dark"
            videoBase=""
            links={[]}
          />
        </div>
      </section>

      {/* ── Front camera scrub ── */}
      <section className="bg-black py-8">
        <div className="mx-auto max-w-[1024px] px-4">
          <HeroScrub
            title="A stunning front camera"
            sub="With a 24MP front camera and Focus Pixels, selfies and FaceTime calls look sharper and more true-to-life than ever."
            avail="The best front camera on iPhone."
            startStem={P("highlights/front-camera/highlights_front_camera_startframe__72filxhs5z62")}
            endStem={P("highlights/front-camera/highlights_front_camera_endframe__b8bxaqbz3n8i")}
            tileLink="/iphone-17"
            theme="dark"
            videoBase=""
            links={[]}
          />
        </div>
      </section>

      {/* ── Shared features — Intelligence + connectivity ── */}
      <section className="bg-black py-10">
        <div className="mx-auto max-w-[1024px] px-4">
          <ApplePicture stem={P("shared-features/hero_features_center__bgssuxptzwhe")} className="block w-full" imgClassName="w-full" />
        </div>
      </section>

      {/* ── Performance — chip scrub ── */}
      <section id="performance" className="bg-black py-8">
        <Head eyebrow="Performance" title="A19 Pro. A giant leap." sub="From the A19 Pro chip to the fastest 5G on any smartphone, iPhone 17 is built for whatever comes next.">
          <Link href="/iphone-17/performance" className="text-[17px] text-[#2997ff] hover:underline">
            Learn more <span aria-hidden="true">›</span>
          </Link>
        </Head>
        <div className="mx-auto max-w-[1024px] px-4 pb-16">
          <InlineMedia
            startStem={P("performance/chip_startframe__fvb09bwp2nma")}
            endStem={P("performance/chip_endframe__epkfgf5bhre6")}
            videoBase=""
            ext="jpg"
          />
        </div>
      </section>

      {/* ── Camera — back gallery ── */}
      <section id="camera" className="bg-black py-8">
        <Head eyebrow="Camera" title="A59MP Fusion camera. Pure craft." sub="The best camera system ever on iPhone. Meet the new 48MP Fusion, 2x Telephoto, Night mode that sees in the dark, and Photographic Styles tuned by the A19 Pro chip.">
          <Link href="/iphone-17/camera" className="text-[17px] text-[#2997ff] hover:underline">
            Learn more <span aria-hidden="true">›</span>
          </Link>
        </Head>
        <div className="mx-auto max-w-[1024px] px-4">
          <ApplePicture stem={P("cameras/back-camera/hero_rear_camera__baka63bo73ma")} className="block w-full" imgClassName="w-full" />
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              ["audio_mix__b94t7cpin1n6", "Audio Mix"],
              ["clean_up__bxhtl4cw48ly", "Clean Up"],
              ["macro__dyisv8f4eh6q", "Macro"],
              ["night_mode__b2cn6zlk4lde", "Night mode"],
              ["photographic_styles__mfkjax7ttwii", "Photographic Styles"],
              ["telephoto_lens__b4ad0o0ksro2", "2x Telephoto"],
            ].map(([stem, label]) => (
              <div key={stem} className="overflow-hidden rounded-2xl bg-[#f5f5f7]">
                <ApplePicture stem={P(`cameras/back-gallery/${stem}`)} className="block w-full" imgClassName="w-full" />
                <p className="pb-0 pt-3 text-center text-[15px] font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── New camera features — Audio Mix + Center Stage ── */}
      <section className="bg-black py-8">
        <div className="mx-auto max-w-[1024px] px-4">
          <ApplePicture stem={P("cameras/new-camera-features/hw_mask__djrn0upt1c02")} className="block w-full" imgClassName="w-full" />
        </div>
        <div className="mx-auto max-w-[1024px] px-4 pt-8">
          <ApplePicture stem={P("cameras/new-camera-features/center_stage_facetime__cihgc5ty7ro2")} className="block w-full" imgClassName="w-full" />
        </div>
      </section>

      {/* ── Design — via shared hero features ── */}
      <section id="design" className="bg-black py-8">
        <Head eyebrow="Design" title="Gorgeous. Durable. Either way." sub="Aerospace-grade titanium on the Pro. Drag-and-drop superpowers with drag and drop and libraries. And an overall love for the details, from the surgical-grade stainless to the gorgeous edges.">
          <Link href="/iphone-17/design" className="text-[17px] text-[#2997ff] hover:underline">
            Learn more <span aria-hidden="true">›</span>
          </Link>
        </Head>
      </section>

      {/* ── Product viewer — colors ── */}
      <section id="appearance" className="bg-black py-8">
        <Head eyebrow="Plenty of ways to make it yours." title="Stylishly strong." sub="In five gorgeous finishes. With a Ceramic Shield display, a new titanium design, and an always-on display that finally goes all-in.">
          <Link href="/iphone-17/design" className="text-[17px] text-[#2997ff] hover:underline">
            Choose your iPhone 17 <span aria-hidden="true">›</span>
          </Link>
        </Head>
        <div className="mx-auto max-w-[1024px] px-4 pb-16">
          <div className="grid grid-cols-5 gap-px overflow-hidden rounded-3xl bg-[#1d1d1f]">
            {[
              ["product-viewer/colors_black__fzuhc3kqvmq2", "#1d1d1f"],
              ["product-viewer/colors_lavender__bcaie9a8npj6", "#b9a9e6"],
              ["product-viewer/colors_mist_blue__700uff6zu2qa", "#a8c5e0"],
              ["product-viewer/colors_sage__cr1jt90v1yoi", "#b8c7ab"],
              ["product-viewer/colors_white__979ypubjzdum", "#f0f0f0"],
            ].map(([stem, hex]) => (
              <div key={stem} className="bg-black">
                <ApplePicture stem={P(stem)} className="block w-full" imgClassName="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Apple / incentive ── */}
      <section id="incentive" className="bg-black pb-0 pt-4 text-4xl">
        <Head eyebrow="Why Apple" title="Why Apple is the best place to buy iPhone." sub="Save with trade-in. Get 3% Daily Cash back with Apple Card. Get personalized setup support. And enjoy free delivery and returns.">
          <Link href="/us/shop/goto/buy_iphone/iphone_17" className="inline-flex items-center rounded-full bg-[#0071e3] px-5 py-2 text-[17px] font-medium text-white hover:bg-[#0077ed]">
            Buy iPhone 17
          </Link>
        </Head>
        <div className="mx-auto grid max-w-[1024px] grid-cols-3 gap-4 px-4 pb-16 md:grid-cols-6">
          {[
            ["incentive/buy__bcu5z0sfxej6", "Buy", "3% Daily Cash"],
            ["incentive/trade_in__c0lu0hwv8be6", "Trade In", "Swipe. Save."],
            ["incentive/deliver__ecu52z9p87wy", "Delivery", "Free, fast"],
            ["incentive/setup__d0qkgo3adoae", "Setup", "1:1 help"],
            ["incentive/specialist__eio8u0ayvvyq", "Specialist", "Talk to us"],
            ["incentive/carrier__ctbxaccivwk2", "Carrier", "All carriers"],
          ].map(([stem, title, sub]) => (
            <Link key={stem} href="/us/shop/goto/buy_iphone/iphone_17" className="group block rounded-2xl bg-white p-4 text-center text-black">
              <ApplePicture stem={P(stem)} className="block w-full" imgClassName="mx-auto w-full" />
              <h3 className="mt-3 text-[17px] font-semibold">{title}</h3>
              <p className="mt-1 text-[13px] text-[#6e6e73]">{sub}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Accessories ── */}
      <section id="accessories" className="bg-black pb-0 pt-4">
        <Head eyebrow="Accessories" title="A case for every adventure." sub="From clear to colorful, find the perfect case for your iPhone 17, plus MagSafe chargers that click right on.">
          <Link href="/us/shop/goto/buy_iphone/iphone_17/accessories" className="text-[17px] text-[#2997ff] hover:underline">
            Shop accessories <span aria-hidden="true">›</span>
          </Link>
        </Head>
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-4 px-4 pb-16 md:grid-cols-3">
          {[
            ["accessories/case__gbwm2o7k7guq", "Clear Case", "Show off the color"],
            ["accessories/case_silicone__bux7nv31de6a", "Silicone Case", "Soft-touch, MagSafe"],
            ["accessories/strap__wj7gmu2ihz62", "Lanyard", "Hands-free style"],
          ].map(([stem, title, sub]) => (
            <Link key={stem} href="/us/shop/goto/buy_iphone/iphone_17/accessories" className="group block overflow-hidden rounded-2xl bg-[#f5f5f7] text-black">
              <ApplePicture stem={P(stem)} className="block w-full" imgClassName="w-full" />
              <div className="p-5">
                <h3 className="text-[21px] font-semibold group-hover:text-[#0066cc]">{title}</h3>
                <p className="mt-1 text-[13px] text-[#6e6e73]">{sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section id="values" className="bg-black pb-0 pt-10">
        <Head eyebrow="Values" title="Designed to make a difference." sub="Every iPhone is made with the planet in mind — recycled materials, smarter energy, and technology that works for everyone.">
          <Link href="/iphone-17/environment" className="text-[17px] text-[#2997ff] hover:underline">
            Learn more <span aria-hidden="true">›</span>
          </Link>
        </Head>
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-4 px-4 pb-16 text-white md:grid-cols-3">
          {[
            ["values/icon_privacy__c70li57hxziq", "Privacy", "On-device intelligence keeps your data yours."],
            ["values/icon_environment__cc3z1j9ozbqu", "Environment", "Powered by 100% recycled aluminum in the enclosure."],
            ["values/icon_accessibility__c6l7sk1nco4m", "Accessibility", "Built-in tools that make iPhone work for everyone."],
          ].map(([stem, title, sub]) => (
            <div key={stem} className="rounded-2xl border border-[#424245] p-8">
              <ApplePicture stem={P(stem)} className="block h-20 w-20" imgClassName="h-20 w-20" />
              <h3 className="mt-4 text-[19px] font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#a1a1a6]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Compare ── */}
      <section className="bg-[#f5f5f7] pb-16 pt-10 text-black">
        <div className="mx-auto max-w-[1024px] px-4">
          <Head2 title="Which iPhone is right for you?" sub="Compare iPhone 17, iPhone Air, and iPhone 17e." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link href="/iphone/compare" className="group block rounded-2xl bg-white p-6 text-center">
              <ApplePicture stem={P("highlights/cameras/cameras__bp927f4j5vqu")} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[21px] font-semibold group-hover:text-[#0066cc]">Compare all models</h3>
              <p className="mt-1 text-[13px] text-[#6e6e73]">iPhone 17, iPhone Air &amp; iPhone 17e.</p>
            </Link>
            <Link href="/us/shop/goto/buy_iphone/iphone_17" className="group block rounded-2xl bg-white p-6 text-center">
              <ApplePicture stem={P("highlights/ios/ios__dh3mxqibj1g2")} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[21px] font-semibold group-hover:text-[#0066cc]">Shop iPhone 17</h3>
              <p className="mt-1 text-[13px] text-[#6e6e73]">Get it now, starting at $799.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footnotes ── */}
      <section className="bg-[#f5f5f7] pb-8 pt-2 text-black">
        <div className="mx-auto max-w-[1024px] px-4">
          <ol className="list-decimal pl-5 text-[13px] leading-relaxed text-[#6e6e73]">
            <li>Battery life varies by use and configuration. Actual results will vary.</li>
            <li>Apple Intelligence is available in beta on iPhone 17 with iOS 26.1. Features like Siri require supported devices.</li>
            <li>Trade-in values vary based on condition, year, and configuration. You must be at least 18 years old.</li>
            <li>MagSafe chargers require Apple 20W USB-C Power Adapter or higher (sold separately).</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
