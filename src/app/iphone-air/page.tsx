"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ProductSubnav } from "@/components/Product";
import InlineMedia from "@/components/InlineMedia";
import ApplePicture from "@/components/ApplePicture";
import { A } from "@/lib/site";

const P = (stem: string, ext: "jpg" | "png" = "jpg") => `/apple/v/iphone-air/i/images/overview/${stem}`;
const V = (anim: string) =>
  `/apple/105/media/us/iphone-air/2026/591df885-5ee2-4173-86e6-401021249f7c/anim/${anim}/`;

function Head({ eyebrow, title, sub, children }: { eyebrow: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[890px] px-4 pt-16 pb-10 text-center">
      <p className="text-[21px] font-semibold text-[#2997ff]">{eyebrow}</p>
      <h1 className="mt-3 text-[40px] md:text-[56px] font-semibold tracking-tight">{title}</h1>
      {sub && <p className="mx-auto mt-4 max-w-[690px] text-[21px] leading-relaxed text-white/80">{sub}</p>}
      {children}
    </div>
  );
}

function CtaRow({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[17px]">
      {links.map((l) => (
        <a key={l.label} href={l.href} className="text-[#2997ff] hover:underline">
          {l.label} <span aria-hidden="true"></span>
        </a>
      ))}
    </div>
  );
}

/** Scroll-cued worker: each video starts when its slot enters the viewport, then plays through (never paused). */
function CuedMedia({
  stem,
  end,
  video,
  loop = false,
}: {
  stem: string;
  end: string;
  video: string;
  loop?: boolean;
}) {
  return (
    <InlineMedia
      startStem={stem}
      endStem={end}
      videoBase={video}
      loop={loop}
      className="relative overflow-hidden bg-black"
      imgStart="h-full w-full object-cover"
      imgEnd="h-full w-full object-cover"
    />
  );
}

function GalleryOneAfterAnother({ items }: { items: { id: string; label: string; stem: string; end: string; video: string }[] }) {
  const [active, setActive] = useState(0);
  const played = useRef(new Set<number>());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ios = items.map((_, i) => {
      const el = refs.current[i];
      if (!el) return null;
      const io = new IntersectionObserver(
        (es) => {
          if (es[0]?.isIntersecting) {
            setActive(i);
            played.current.add(i);
          }
        },
        { threshold: 0.45 }
      );
      io.observe(el);
      return io;
    });
    return () => ios.forEach((io) => io?.disconnect());
  }, [items]);

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[1024px] px-4 pb-10 text-center">
        <div className="flex flex-wrap justify-center gap-3 text-[14px]">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => {
                setActive(i);
                refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`rounded-full px-4 py-2 ${active === i ? "bg-white text-black" : "bg-white/15 text-white"}`}
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-[4vh] px-4 md:px-0">
        {items.map((it, i) => (
          <div
            key={it.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="mx-auto max-w-[840px]"
          >
            <div className="relative overflow-hidden rounded-2xl bg-black">
              <CuedMedia stem={it.stem} end={it.end} video={it.video} />
            </div>
            <div className="mx-auto max-w-[580px] px-4 py-4 text-center">
              <h3 className="text-[21px] font-semibold text-white">{it.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DrawerTabs({ tabs }: { tabs: { id: string; label: string; stem?: string; end?: string; video?: string }[] }) {
  const [sel, setSel] = useState(tabs[0]?.id ?? "");
  const tab = tabs.find((t) => t.id === sel) ?? tabs[0];
  return (
    <div>
      <div className="mx-auto flex max-w-[700px] flex-wrap justify-center gap-3 px-4 pb-8 text-[14px]">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setSel(t.id)}
            className={`rounded-full px-4 py-2 ${sel === t.id ? "bg-white text-black" : "bg-white/15 text-back"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="relative mx-auto max-w-[980px] px-4">
        {tab.video ? (
          <div key={tab.id} className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={tab.stem!} end={tab.end!} video={tab.video} />
          </div>
        ) : tab.stem ? (
          <ApplePicture stem={tab.stem!} className="w-full rounded-2xl" imgClassName="w-full rounded-2xl" />
        ) : null}
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { label: "iPhone Duo", href: "/iphone-duo" },
  { label: "iPhone Air", href: "/iphone-air" },
  { label: "iPhone Air", href: "/iphone-air" },
  { label: "iPhone 17", href: "/iphone-17" },
  { label: "iPhone 17e", href: "/iphone-17e" },
  { label: "iPhone 16", href: "/iphone-16" },
  { label: "Compare", href: "/iphone/compare" },
  { label: "Accessories", href: "/us/shop/goto/buy_iphone/accessories" },
  { label: "Shop iPhone", href: "/us/shop/goto/buy_iphone" },
  { label: "iOS 27", href: "/ios/ios-27" },
];

export default function IPhoneAirPage() {
  return (
    <main className="bg-black text-white">
      <ProductSubnav title="iPhone Air" items={NAV_ITEMS} dark />

      {/*  Section 1: Media hero  */}
      <section className="relative bg-black">
        <div className="relative z-10 pt-[70px] text-center">
          <p className="text-[21px] font-semibold text-[#2997ff]">iPhone Air</p>
          <h1 className="mt-3 text-[56px] md:text-[80px] font-semibold tracking-tight">Pro further.</h1>
          <p className="mt-4 text-[21px] text-white/80">Available starting September 18</p>
          <div className="mt-6">
            <Link
              href="/us/shop/goto/buy_iphone/iphone_air"
              className="inline-flex items-center rounded-full bg-[#0071e3] px-5 py-2 text-[17px] font-medium hover:bg-[#0077ed]"
            >
              Pre-order
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-none">
          <InlineMedia
            startStem={P("media-hero/hero_startframe__ft43ohx1qiaa")}
            endStem={P("media-hero/hero_endframe__fjhlsvwr03ma")}
            videoBase={V("hero")}
            className="relative aspect-[16/10]"
            imgStart="h-full w-full object-cover"
            imgEnd="h-full w-full object-cover"
          />
        </div>
      </section>

      {/*  Section 2: Highlights (videos come after each other)  */}
      <section id="highlights" className="bg-black py-6">
        <Head eyebrow="" title="Get the highlights.">
          <a href="#" className="text-[17px] text-[#2997ff] hover:underline">
            Watch the film <span aria-hidden="true"></span>
          </a>
        </Head>
        <GalleryOneAfterAnother
          items={[
            { id: "camera", label: "Camera", stem: P("highlights/main_camera_startframe__dbtqkrydkxua"), end: P("highlights/main_camera_endframe__fcjfhs06rdme"), video: V("highlights-camera") },
            { id: "battery", label: "Battery", stem: P("highlights/battery_startframe__dc61ck806uy6"), end: P("highlights/battery_endframe__ds9p2a09r9aq"), video: V("highlights-battery") },
            { id: "colors", label: "Colors", stem: P("highlights/colors_startframe__dswlwmy4piuu"), end: P("highlights/colors_endframe__czfie0zmty4i"), video: V("highlights-colors") },
            { id: "chip", label: "A20 Pro chip", stem: P("highlights/chip_startframe__cbo2noldjewi"), end: P("highlights/chip_endframe__lhkymtfv1uie"), video: V("highlights-chip") },
          ]}
        />
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-16 pt-4 md:grid-cols-4">
          {[
            ["Camera", "48MP Fusion Main camera with variable aperture. Improved low-light photos and video. Impressive depth of field."],
            ["Battery", "The longest battery life in an iPhone.1 Up to 45 hours video playback on iPhone Air Max.2"],
            ["Colors", "Four gorgeous colors. Two great sizes. One durable aluminum design."],
            ["A20 Pro chip", "A20 Pro chip. Next-generation vapor chamber. Dual 16-core Neural Engine. Total AI powerhouse."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-[#161617] p-5">
              <h3 className="text-[17px] font-semibold">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/*  Section 3: The ultimate upgrade (aio)  */}
      <section className="bg-black">
        <Head
          eyebrow="The ultimate upgrade"
          title="Most wanted."
          sub="iPhone Air is purpose-built for unprecedented performance.4 Get up to 6 more hours of video playback on iPhone Air Max, faster wired charging, a vapor-cooled A20 Pro chip for the most intensive AI workloads, and a new 48MP Fusion Main camera with variable aperture. All in a durable unibody with Ceramic Shield front and back — everything a pro wants."
        />
        <div className="mx-auto max-w-[1024px] px-4 pb-16">
          <ApplePicture stem={P("aio/hero__c8vidxwr9imq")} className="block w-full rounded-2xl" imgClassName="w-full" />
        </div>
      </section>

      {/*  Section 4: Design (product viewer, layered videos)  */}
      <section id="design" className="bg-[#0a0a0c] pb-4">
        <Head eyebrow="Design" title="Our finest unibody of work." />
        <DrawerTabs
          tabs={[
            { id: "colors", label: "Colors", stem: P("highlights/colors_startframe__dswlwmy4piuu") },
            { id: "aperture", label: "New Main camera", stem: P("product-viewer/viewer_aperture_startframe__fd2z3na1d066"), end: P("product-viewer/viewer_aperture_endframe__2jpki8xah2au"), video: V("viewer-aperture") },
            { id: "dynamic", label: "Redesigned Dynamic Island", stem: P("product-viewer/dynamic_island_startframe__e29ujwo7xcwi"), end: P("product-viewer/dynamic_island_endframe__edszr68pgo66"), video: V("viewer-dynamic-island") },
          ]}
        />
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-16 pt-6 md:grid-cols-3">
          {[
            ["Two sizes", "6.9-inch iPhone Air Max and 6.3-inch iPhone Air, featuring brilliant Super Retina XDR displays with ProMotion up to 120Hz."],
            ["Durability", "Built to last with a strong aluminum unibody, Ceramic Shield back, and Ceramic Shield 2 front with 3x better scratch resistance than iPhone 16 Pro."],
            ["Camera Control / Action button", "Instantly take a photo, record video, adjust settings, and more — plus a customizable Action button fast track to your favorite feature."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-[#161617] p-5">
              <h3 className="text-[17px] font-semibold">{t}</h3>
              <p className="mt-2 text-[15px] text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/*  Section 5: Pro camera system  */}
      <section id="cameras" className="bg-black">
        <Head
          eyebrow="Pro camera system"
          title="Eye-opening control."
          sub="Meet our best-ever camera system for pros and creators. iPhone Air breaks new ground with a variable aperture on the 48MP Fusion Main camera, delivering better low-light photos and video and sharper detail throughout the scene. And with new Pro controls and Photographic Styles to adjust texture and grain, you’ll have even more creative range."
        />
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-8 md:grid-cols-3">
          {[
            ["All 48MP rear cameras", "48MP Fusion Main camera with variable aperture."],
            ["Up to 8x optical-quality zoom", "48MP Fusion Telephoto camera with 100/200 mm focal length (4x/8x)."],
            ["48MP Fusion Ultra Wide", "13 mm focal length (.5x/macro), /2.2 aperture."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-[#161617] p-5">
              <h3 className="text-[15px] font-semibold">{t}</h3>
              <p className="mt-2 text-[13px] text-white/70">{d}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[980px] px-4 pb-16">
          <a href="#" className="text-[17px] text-[#2997ff] hover:underline">
            Watch the variable aperture in action <span aria-hidden="true"></span>
          </a>
          <div className="mt-6 overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("pro-camera/control/8x-zoom_startframe__wp22u2y5ir6q")} end={P("pro-camera/control/8x-zoom_endframe__ed8psayfjwqe")} video={V("8x-zoom")} />
          </div>
        </div>
      </section>

      {/*  Section 6: Pro video  */}
      <section id="pro-video" className="bg-black py-4">
        <Head
          eyebrow="Pro video"
          title="Make it cinematic. After the fact."
          sub="iPhone Air lets you add Cinematic mode effects to regular video — even after you shoot — so any moment can feel like a movie. Support for 60 fps makes slo-mo smooth. And with Audio Mix, you can isolate a musical performance from its surroundings, so every note comes through clearly."
        />
        <div className="mx-auto max-w-[980px] space-y-6 px-4 pb-20">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("pro-video/pro_video_startframe__ggkgg862ssq6")} end={P("pro-video/pro_video_endframe__jo1bq7ocrka6")} video={V("pro-video")} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-black">
              <CuedMedia stem={P("pro-video/4k_timelapse_startframe__bwemjwb0098i")} end={P("pro-video/4k_timelapse_endframe__fpokzlb44wa6")} video={V("4k-timelapse")} />
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-[#161617] p-6">
              <h3 className="text-[17px] font-semibold">Better low-light video.</h3>
              <p className="mt-2 text-[15px] text-white/70">
                The iPhone Air camera system improves low-light video at night or indoors by intelligently adjusting
                aperture and frame rate for brighter, clearer footage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Section 7: Battery life  */}
      <section id="battery" className="bg-black py-4">
        <Head
          eyebrow="Battery life"
          title="Best iPhone battery life.4 Greatest of hour time."
          sub="Up to 30 hours of use per charge on iPhone Air Max.6"
        />
        <div className="mx-auto max-w-[980px] px-4 pb-16">
          <ApplePicture stem={P("battery/hero__c8vidxwr9imq")} className="block w-full rounded-2xl" imgClassName="w-full" />
          <p className="mx-auto mt-6 max-w-[640px] text-center text-[15px] leading-relaxed text-white/70">
            iPhone Air Max delivers a massive leap in battery life with up to 45 hours of video playback — 6 more
            hours than iPhone 17 Pro Max. Thanks to faster wired charging, iPhone Air reaches up to 50 percent
            battery life in around 15 minutes.7
          </p>
        </div>
      </section>

      {/*  Section 8: Performance  */}
      <section id="performance" className="bg-black py-4">
        <Head
          eyebrow="Performance"
          title="Welcome to the mother chip."
          sub="A20 Pro is our most powerful and efficient iPhone chip design ever, with packaging inspired by our M-series chips. Working with the next-generation vapor chamber, it delivers up to 40 percent faster graphics performance than iPhone 17 Pro — and a Dual 16-core Neural Engine with two times the compute for on-device intelligence.5"
        />
        <div className="mx-auto max-w-[980px] px-4 pb-20">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("highlights/chip_startframe__cbo2noldjewi")} end={P("highlights/chip_endframe__lhkymtfv1uie")} video={V("performance")} />
          </div>
        </div>
      </section>

      {/*  Section 9: Family (iOS / Siri AI / connectivity / accessories)  */}
      <section className="bg-black pb-4">
        <Head eyebrow="All in the family" title="All the must-haves. All on iPhone." />
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-20 md:grid-cols-3">
          {[
            ["Siri AI", "Your new, more powerful AI assistant — powered by Apple Intelligence."],
            ["iOS and Apple Intelligence", "Helpful in all the right places: Clean Up, Image Playground, Call Context, and child safety features."],
            ["Connectivity", "eSIM, Wi-Fi 7, Bluetooth 6, 5G, Messages via satellite, Roadside Assistance and Emergency SOS via satellite, and Crash Detection."],
            ["Accessories", "MagSafe cases and wallets, plus the new Wrist Strap and Crossbody Strap in new colors."],
            ["Worth the upgrade? You bet.", "Variable aperture camera, up to 80% faster 6-core CPU, up to 25 more hours of video playback, and up to 50% charge in around 15 minutes."],
            ["A20 Pro chip", "M-class-inspired packaging design, bigger vapor chamber, and exceptional AI capabilities."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-[#161617] p-5">
              <h3 className="text-[15px] font-semibold">{t}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/*  Section 10: Why Apple (incentive)  */}
      <section className="bg-[#f5f5f7] pb-4 pt-20 text-black">
        <div className="mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">Why Apple is the best place to shop iPhone.</h2>
          <p className="mt-2 text-[17px] text-[#6e6e73]">
            Get up to $1200 in credit on a new iPhone after trade-in. Save on a new iPhone with a trade-in. Lease a new
            iPhone with Apple Upgrade, or pay low monthly payments with Apple Card Monthly Installments.
          </p>
          <div className="mt-8">
            <Link href="/us/shop/goto/buy_iphone/iphone_air" className="link-blue text-[17px]">
              Shop iPhone <span aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </section>

      {/*  Section 11: Keep exploring iPhone  */}
      <section className="bg-[#f5f5f7] pb-4 pt-10 text-black">
        <div className="mx-auto max-w-[1024px] px-4">
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight">Keep exploring iPhone.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "iPhone Air", s: "The ultimate battery life, performance, and camera of any iPhone.", i: P("aio/hero__c8vidxwr9imq"), ext: "jpg" as const, h: "/iphone-air" },
              { t: "iPhone Duo", s: "A masterpiece over an amazing all-new design.", i: A("/v/iphone-air/a/images/site/localnav/iphone_duo__es1je56gg18i"), ext: "png" as const, h: "/iphone-duo" },
              { t: "Compare", s: "Find your perfect iPhone.", i: A("/v/iphone-air/a/images/site/localnav/compare__clhjrq5m2ymq"), ext: "png" as const, h: "/iphone/compare" },
            ].map((c) => (
              <a key={c.t} href={c.h} className="group block rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto max-w-[240px]">
                  <ApplePicture stem={c.i} ext={c.ext} className="block w-full" imgClassName="w-full" />
                </div>
                <h3 className="mt-4 text-[21px] font-semibold group-hover:text-blue-600">{c.t}</h3>
                <p className="mt-1 text-[15px] text-[#6e6e73]">{c.s}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*  Footer note / environment inline  */}
      <section className="bg-[#f5f5f7] pb-16 pt-8 text-black">
        <div className="mx-auto max-w-[980px] px-4">
          <p className="text-[13px] leading-relaxed text-[#6e6e73]">
            1 Compared with previous-generation iPhone. 2 Battery life varies by use. 3 Siri AI is rolling out in
            English. 4 Compared with iPhone 17 Pro Max. 5 Compared with iPhone 17 Pro. 6 6.9-inch iPhone Air Max and
            6.3-inch iPhone Air display diagonals. 7 Testing conducted by Apple in July 2026. Battery life varies by
            use and configuration.
          </p>
        </div>
      </section>
    </main>
  );
}