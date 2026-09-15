import Link from "next/link";
import { ProductSubnav } from "@/components/Product";
import ApplePicture from "@/components/ApplePicture";
import { A } from "@/lib/site";

const P = (stem: string) => A(stem);

const HERO = P("welcome/hero_startframe__e9e7pcnguyqi");
const CAMERA = P("highlights/highlights_camera_startframe__dfwsnvejxgq6");
const DESIGN = P("highlights/highlights_design_startframe__ihc0ao2t9ziq");
const BATTERY = P("welcome/hero_endframe__eafizd06t6qa");

const NAV_ITEMS = [
  { label: "iPhone 17", href: "/iphone-17", active: true },
  { label: "iPhone Air", href: "/iphone-air" },
  { label: "iPhone 17e", href: "/iphone-17e" },
  { label: "Compare", href: "/iphone/compare" },
  { label: "Shop iPhone", href: "/us/shop/goto/buy_iphone" },
];

export default function BuyIPhone17PreorderPage() {
  return (
    <main className="bg-black text-white">
      <ProductSubnav title="iPhone 17" items={NAV_ITEMS} dark />

      <section className="bg-black pb-16 pt-8">
        <div className="mx-auto grid max-w-[1024px] gap-6 px-4 md:grid-cols-2">
          <div className="self-center">
            <p className="text-[21px] font-semibold text-[#2997ff]">New</p>
            <h1 className="mt-3 text-[40px] font-semibold tracking-tight md:text-[56px]">
              iPhone 17.
              <br />
              Built for Apple Intelligence.
            </h1>
            <p className="mt-4 text-[21px] text-[#6e6e73]">
              From $799 or $33.29/mo. for 12 months.
            </p>
            <p className="mt-6 text-[14px] text-[#6e6e73]">
              Get $300–$650 credit toward iPhone 17 when you trade in iPhone 11 or
              newer.*
            </p>
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
              <Link
                href="/us/shop/goto/bag"
                className="rounded-full bg-[#0071e3] px-6 py-3 text-[17px] font-medium transition hover:bg-[#0077ed]"
              >
                Pre-order now <span aria-hidden="true">›</span>
              </Link>
              <p className="text-[12px] text-[#6e6e73]">
                Get next-day delivery, free. Or pick up at an Apple Store.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px]">
            <ApplePicture stem={HERO} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-black py-6">
        <div className="mx-auto grid max-w-[1024px] gap-6 px-4 md:grid-cols-3">
          {[
            [CAMERA, "Pro-level camera", "48MP Fusion camera. Photographic Styles are more personalised than ever."],
            [DESIGN, "Design that lasts", "Ceramic Shield, aerospace-grade aluminium, and an IP68 rating."],
            [BATTERY, "All-day battery", "Up to 27 hours of video playback. Apple Intelligence powered by A19 Pro."],
          ].map(([stem, title, sub]) => (
            <div key={title as string} className="rounded-[24px] bg-[#1d1d1f] p-4">
              <ApplePicture stem={stem} className="block w-full" imgClassName="w-full rounded-2xl" />
              <h3 className="mt-3 text-[17px] font-semibold">{title}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#86868b]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black pb-12">
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 md:grid-cols-4">
          {[
            ["Free delivery", "Get free next-day delivery on every pre-order, or pick up at an Apple Store."],
            ["No-contact", "Choose no-contact delivery on orders for one-click, socially distant drop-off."],
            ["60-day returns", "Returns for Apple Online Store pre-orders still qualify for 60 days from receipt."],
            ["Apple Trade In", "Get up to $650 in credit toward your new iPhone after trade-in."],
          ].map(([t, d]) => (
            <div key={t as string} className="rounded-2xl bg-[#161617] p-4">
              <h3 className="text-[15px] font-semibold">{t}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#86868b]">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
