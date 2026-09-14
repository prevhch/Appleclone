"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BannerBar, ProductSubnav } from "@/components/Product";
import InlineMedia from "@/components/InlineMedia";
import ApplePicture from "@/components/ApplePicture";
import { A } from "@/lib/site";

const P = (stem: string) => `/apple/v/iphone-duo/a/images/overview/${stem}`;
const V = (anim: string) =>
  `/apple/105/media/us/iphone-duo/2026/9305e4b9-72d9-4c05-9381-b572adadd5e5/anim/${anim}/`;

function Head({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[890px] px-4 pt-16 pb-10 text-center">
      {eyebrow && <p className="text-[21px] font-semibold text-[#2997ff]">{eyebrow}</p>}
      <h1 className="mt-3 text-[40px] md:text-[56px] font-semibold tracking-tight">{title}</h1>
      {sub && <p className="mx-auto mt-4 max-w-[690px] text-[21px] leading-relaxed text-white/80">{sub}</p>}
      {children}
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

function GalleryOneAfterAnother({ items }: { items: { id: string; label: string; desc: string; stem: string; end: string; video: string }[] }) {
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
              <p className="mt-2 text-[17px] leading-relaxed text-white/70">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DrawerTabs({ tabs }: { tabs: { id: string; label: string; desc?: string; stem: string }[] }) {
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
        <ApplePicture key={tab.id} stem={tab.stem} className="block w-full rounded-2xl" imgClassName="w-full rounded-2xl" />
      </div>
      {tab.desc && (
        <div className="mx-auto mt-8 max-w-[640px] px-4 pb-16 text-center">
          <p className="text-[21px] leading-relaxed text-white/80">{tab.desc}</p>
        </div>
      )}
    </div>
  );
}

function StylesGrid({ items }: { items: { title: string; desc: string; stem: string }[] }) {
  return (
    <div className="mx-auto grid max-w-[1024px] grid-cols-2 gap-4 px-4 pb-20 md:grid-cols-3 lg:grid-cols-4">
      {items.map((it) => (
        <div key={it.title} className="overflow-hidden rounded-2xl bg-[#161617]">
          <ApplePicture stem={it.stem} className="block w-full" imgClassName="w-full" />
          <div className="p-5">
            <h3 className="text-[15px] font-semibold">{it.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/70">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const NAV_ITEMS = [
  { label: "iPhone 18 Pro", href: "/iphone-18-pro" },
  { label: "iPhone Duo", href: "/iphone-duo" },
  { label: "iPhone Air", href: "/iphone-air" },
  { label: "iPhone 17", href: "/iphone-17" },
  { label: "iPhone 17e", href: "/iphone-17e" },
  { label: "iPhone 16", href: "/iphone-16" },
  { label: "Compare", href: "/iphone/compare" },
  { label: "Accessories", href: "/us/shop/goto/buy_iphone/accessories" },
  { label: "Shop iPhone", href: "/us/shop/goto/buy_iphone" },
  { label: "iOS 27", href: "/ios/ios-27" },
];

export default function IPhoneDuoPage() {
  return (
    <main className="bg-black text-white">
      <BannerBar
        text="Pre-order starting 5:00 a.m. PT on October sixteenth. Available starting October twenty-third."
        cta={{ label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_duo" }}
      />
      <ProductSubnav title="iPhone Duo" items={NAV_ITEMS} dark />

      {/* ── Section 1: Media hero ─────────────────────────── */}
      <section className="relative bg-black">
        <div className="relative z-10 pt-[70px] text-center">
          <p className="text-[21px] font-semibold text-[#2997ff]">iPhone Duo</p>
          <h1 className="mt-3 text-[56px] md:text-[80px] font-semibold tracking-tight">Hello, hello.</h1>
          <p className="mt-4 text-[17px] text-white/80">
            Pre-order starting 5:00 a.m. PT on October sixteenth. Available starting October twenty-third.
          </p>
          <p className="mt-4 text-[17px] text-white/60">
            From $1999 or $83.29/mo. for 24 mo.* Lease from $57.99/mo. for 24 mo. with Apple Upgrade◊
          </p>
          <div className="mt-6">
            <Link
              href="/us/shop/goto/buy_iphone/iphone_duo"
              className="inline-flex items-center rounded-full bg-[#0071e3] px-5 py-2 text-[17px] font-medium hover:bg-[#0077ed]"
            >
              View pricing
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-4">
          <InlineMedia
            startStem={P("media-hero/hero_startframe__fcol1x2us8i2")}
            endStem={P("media-hero/hero_endframe__gdt3l3spaqie")}
            videoBase={V("hero")}
            className="relative aspect-[16/9]"
            imgStart="h-full w-full object-cover"
            imgEnd="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ── Section 2: Get the highlights ── */}
      <section id="highlights" className="bg-black py-6">
        <Head title="Get the highlights.">
          <a href="#" className="text-[17px] text-[#2997ff] hover:underline">
            Watch the film <span aria-hidden="true">›</span>
          </a>
        </Head>
        <GalleryOneAfterAnother
          items={[
            { id: "display", label: "Display", desc: "The largest iPhone display ever. In a thin, foldable design.", stem: P("highlights/highlights_display_startframe__bg5quzqwkz7m"), end: P("highlights/highlights_display_endframe__e0hi6rmf3hg2"), video: V("highlights-display") },
            { id: "ios", label: "iOS", desc: "More ways to iPhone. Reimagined iOS experiences for ultimate versatility.", stem: P("highlights/highlights_versatility_startframe__c304897cgcwi"), end: P("highlights/highlights_versatility_endframe__q3r50hxfi1ei"), video: V("highlights-versatility") },
            { id: "titanium", label: "Titanium frame", desc: "Titanium frame and hinge cover. Beautiful and durable.", stem: P("highlights/highlights_durability_startframe__dijrk29ydyi6"), end: P("highlights/highlights_durability_endframe__e2gc60lhc5me"), video: V("highlights-durability") },
            { id: "camera", label: "48MP Dual Fusion camera", desc: "48MP Dual Fusion camera system. And all-new ways to shoot from front to back.", stem: P("highlights/highlights_camera_startframe__ltwlwv2cm9ua"), end: P("highlights/highlights_camera_endframe__eggbiv0kjg2u"), video: V("highlights-camera") },
            { id: "chip", label: "A20 Pro chip", desc: "Vapor-cooled A20 Pro chip for pro performance.", stem: P("highlights/highlights_chip_startframe__djh8ur4er9w2"), end: P("highlights/highlights_chip_endframe__eckq8spbb2mq"), video: V("highlights-chip") },
            { id: "battery", label: "Battery", desc: "Dual-battery system. All-day power.1", stem: P("highlights/highlights_battery_startframe__e32yxe5223e6"), end: P("highlights/highlights_battery_endframe__lj0gaudp97em"), video: V("highlights-battery") },
          ]}
        />
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-16 pt-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("highlights/siri__bklrx9fgx0pe")} className="block w-full" imgClassName="w-full" />
            <div className="p-5">
              <h3 className="text-[21px] font-semibold">Siri AI</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-white/70">
                Meet Siri AI. Your AI assistant. More personal. More powerful. Siri AI is rolling out in English.2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Foldable design ── */}
      <section id="design" className="bg-black pb-4">
        <div className="mx-auto max-w-[890px] px-4 pt-16 pb-10 text-center">
          <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight">Foldable design</h2>
          <p className="mt-4 text-[17px] font-semibold text-[#86868b]">A new iPhone enters the fold.</p>
          <p className="mx-auto mt-4 max-w-[690px] text-[19px] leading-relaxed text-white/80">
            Introducing iPhone Duo, the first foldable iPhone. When open, it’s the thinnest iPhone with the largest
            display ever — 50 percent larger than iPhone 18 Pro Max. And it has an outer display with more than 90
            percent of the screen area of iPhone 18 Pro. Through reimagined iOS experiences, it offers unparalleled
            versatility in all-new poses and orientations. All in a durable, pocketable design. It’s an iPhone unlike
            any iPhone.
          </p>
        </div>
        <div className="mx-auto max-w-[980px] px-4 pb-10">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("design/design_startframe__d0ju7eaey3ki")} end={P("design/design_endframe__csvxe3ut4a6a")} video={V("design")} />
          </div>
        </div>
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("design/design_hero__gczn1e74mwa6")} className="block w-full" imgClassName="w-full" />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-[#161617] p-6">
            <h2 className="text-[21px] font-semibold">Switch from Android to iPhone Duo</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-white/70">
              A new iPhone enters the fold. The dual display system features the largest, thinnest iPhone display ever.
              Because it’s an iPhone, it holds its value longer than other smartphones. And switching from Android is
              easy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Take a closer look (product viewer) ── */}
      <section id="product-viewer" className="bg-[#0a0a0c] pt-16">
        <Head title="Take a closer look.">
          <a href="#" className="text-[17px] text-[#2997ff] hover:underline">
            View in your space <span aria-hidden="true">›</span>
          </a>
        </Head>
        <DrawerTabs
          tabs={[
            { id: "foldable", label: "Foldable design", desc: "Foldable design. Offers exceptional viewing experiences in a design that fits in your pocket.", stem: P("product-viewer/foldable__iybtpzlhgj6u") },
            { id: "landscape", label: "Landscape", desc: "Landscape. A spacious display for incredibly immersive entertainment. You can even use two apps side by side with Split View multitasking.", stem: P("product-viewer/landscape__f7x2oe1oxemy") },
            { id: "portrait", label: "Portrait", desc: "Portrait. Type comfortably on a wider keyboard. Enjoy more room to browse and scroll. Pin a video to the top and watch it while using another app.", stem: P("product-viewer/portrait__15lry9l2g8ye") },
            { id: "closed", label: "Closed", desc: "Closed. Compact and comfortable to hold. With essential controls moved to the side, they’re easy to reach. And you get more vertical space for apps.", stem: P("product-viewer/closed__3le61imm1w2e") },
            { id: "seated", label: "Seated", desc: "Seated. Set iPhone Duo down and watch a show or follow a workout at the perfect viewing angle — with easy access to the controls on the bottom.", stem: P("product-viewer/laptop__c7kl6vmsqd6q") },
            { id: "standing", label: "Standing", desc: "Standing. Display a bedside clock, photos, widgets, and more with StandBy. And watch movies and shows at an adjustable angle on the outer display.", stem: P("product-viewer/tent__68ysumotbs2m") },
            { id: "durability", label: "Durability", desc: "Durability. Grade 5 titanium frame and hinge cover. Scratch-resistant coating on the inner display. Ceramic Shield, front and back. IP68 water and dust resistant.3", stem: P("product-viewer/durability__d8uh14wcv2oi") },
          ]}
        />
      </section>

      {/* ── Section 5: Expansive display ── */}
      <section id="display" className="bg-black pb-4">
        <Head title="Expansive display" sub="Think vast." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("product-stories/immersive/hero-display_startframe__r42exuol7yi6")} end={P("product-stories/immersive/hero-display_endframe__5jdq3w2xk362")} video={V("hero-display")} />
          </div>
        </div>
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("product-stories/immersive/display_size__cpz9oocet7bm")} className="block w-full" imgClassName="w-full" />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-[#161617] p-6">
            <h2 className="text-[24px] font-semibold">50% larger display than iPhone 18 Pro Max</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              iPhone Duo offers the most immersive viewing experience of any iPhone. The aspect ratio of the 7.6-inch
              Super Retina XDR display4 is consistent across the inner and outer display. The inner display is made of
              10 ultrathin layers with a custom nano-texture finish that reduces glare. And the under-display FaceTime
              camera is hidden until you need it. The result is an uninterrupted viewing surface that’s remarkably
              smooth and flat. It’s simply the best iPhone for enjoying movies, shows, and games.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Versatility ── */}
      <section id="versatility" className="bg-black py-4">
        <Head title="Versatility" sub="Reimagined iOS. Anything’s posable." />
        <p className="mx-auto max-w-[640px] px-4 text-center text-[17px] leading-relaxed text-white/70">
          A posable design and reimagined iOS 27 open up totally new iPhone experiences — and transitioning between
          displays and orientations is seamless. Get things done on the outer display or large inner display. Angle
          iPhone Duo for the perfect view of movies and shows. Stand it up and take hands-free videos and calls.
          Sometimes all you need is a change of space.
        </p>
        <div className="mx-auto mt-12 grid max-w-[1024px] grid-cols-1 gap-6 px-4 pb-16 md:grid-cols-2">
          {[
            { t: "Split View multitasking.", d: "Multitasking across your favorite apps has never been easier. Now you can browse your Photos library on one side, and drag a picture into Mail on the other.", s: P("product-stories/versatility/apps_standby__b0akmv815b1e") },
            { t: "Siri AI.", d: "Ask questions, get answers, and use the rich conversation window. A larger canvas makes iPhone Duo great for Siri AI.2", s: P("product-stories/versatility/media__ccpeh3rqgupe") },
            { t: "Flexible views.", d: "With a dual-display system, you’ve always got options. Like watching your favorite movies or shows on the outer display at just the right angle.", s: P("product-stories/versatility/flexible_viewing__b2291bar6eqa") },
            { t: "Hands-free FaceTime.", d: "iPhone Duo can stand on its own, so you can take FaceTime calls without holding up your phone.", s: P("product-stories/versatility/facetime__es5go1wsw7ee") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-[#161617]">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <div className="p-5">
                <h3 className="text-[21px] font-semibold">{c.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 7: Advanced camera system ── */}
      <section id="cameras" className="bg-black pb-4">
        <div className="relative mx-auto max-w-[1024px] px-4 pt-16 pb-8 text-center">
          <p className="text-[21px] font-semibold text-[#2997ff]">Camera</p>
          <h2 className="mt-3 text-[40px] md:text-[56px] font-semibold tracking-tight">Advanced camera system</h2>
          <p className="text-[19px] font-semibold text-[#86868b]">Your new favorite camera features. Hands down.</p>
          <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-relaxed text-white/80">
            iPhone Duo gives the camera system you love delightful new features. Duo Preview and Kid Cue help everyone
            look their best. Include the people around you in group calls with Duo FaceTime. Use Smart Take so you can
            be part of the moment, not stuck photographing it. And capture dazzling 48MP photos and 4K 120 fps videos.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-40 md:w-56">
              <ApplePicture stem={P("camera/hero_left__cpq2rhkwqzqu")} className="block w-full" imgClassName="w-full" />
            </div>
            <div className="w-40 md:w-56">
              <ApplePicture stem={P("camera/hero_right__gk9rwhz4kdqq")} className="block w-full" imgClassName="w-full" />
            </div>
          </div>
        </div>

        <Head title="A whole family of possibilities." />
        <GalleryOneAfterAnother
          items={[
            { id: "smart-take", label: "Smart Take.", desc: "iPhone Duo can detect when everyone is ready and takes pictures. So you don’t have to race against a timer to get in the shot.", stem: P("camera/smart-take_startframe__ghdt9s2wnhm6"), end: P("camera/smart-take_endframe__fzy3ygxinq2y"), video: V("smart-take") },
            { id: "duo-preview", label: "Duo Preview.", desc: "The outer display lets whoever you’re photographing see a live preview of the shot, so they can get their pose and framing just right.", stem: P("camera/duo-preview_startframe__85441bzj5k2i"), end: P("camera/duo-preview_endframe__gmc0ch1ssfyy"), video: V("duo-preview") },
            { id: "kid-cue", label: "Kid Cue.", desc: "Getting kids to look at the camera just got a lot easier. Playful animations on the outer display naturally draw their eyes to the lens.", stem: P("camera/kid_cue_startframe__egw4exeaceqa"), end: P("camera/kid_cue_endframe__e6wxf50f0lg2"), video: V("kid-cue") },
            { id: "duo-facetime", label: "Duo FaceTime.", desc: "Lets nearby friends join the call on the outer display. No more crowding around or passing the phone.", stem: P("camera/duo-facetime_startframe__ehrsfzmwa46e"), end: P("camera/duo-facetime_endframe__kwx1xino3v2q"), video: V("duo-facetime") },
          ]}
        />

        <Head title="Set to stunning." />
        <StylesGrid
          items={[
            { title: "Photographic Styles 3.", desc: "In addition to tone and color, you can now customize texture and grain to smooth out skin details or achieve an artful film look, all while staying true to your original photo.", stem: P("camera/photographic_styles__eg0ze8iqtioi") },
            { title: "Intelligent photo editing.", desc: "Reframe a photo after it’s been taken with Spatial Reframing. Expand your shots with the Extend tool. And remove even larger objects with the enhanced Clean Up tool.5", stem: P("camera/photo_editing__cgylxrvrkh6u") },
            { title: "High image quality.", desc: "48MP frames are used throughout the imaging pipeline of the Fusion Main camera, for photos with remarkable resolution and detail.", stem: P("camera/photonic__dghocclrer2a") },
            { title: "Low-light videos.", desc: "Capture impressive videos in low-light conditions with the default 1080p setting.", stem: P("camera/low-light_startframe__eus77gnykx0m") },
            { title: "Cinematic mode.", desc: "Apply a depth-of-field effect that keeps your subject sharp while creating a beautifully blurred foreground and background. You can even apply and adjust it after you’ve captured a video.", stem: P("camera/cinematic-mode_startframe__fvj0bw8i8lim") },
            { title: "4K time-lapse.", desc: "Record in more detail with support for 4K resolution with Dolby Vision HDR.", stem: P("camera/timelapse_startframe__doixp5ce864i") },
            { title: "Smart focus tracking.", desc: "On-device intelligence lets you lock onto a subject and maintain focus as they move through the scene — even if they leave and then reenter the frame.", stem: P("camera/smart_focus__biiox7g8yiwi") },
            { title: "2x optical-quality zoom.", desc: "Add extended reach to your compositions without sacrificing detail.", stem: P("camera/zoom__bn9s5a2vuz6u") },
            { title: "Center Stage.", desc: "Frame your selfies in more flexible ways. Go from portrait to landscape without moving your iPhone. And fit more people in the frame automatically.", stem: P("camera/center_stage__poaluvf8tdeq") },
            { title: "Customizable widgets.", desc: "Get fast access to manual controls like white balance and focus.", stem: P("camera/customizable__dox1y6kmuuuu") },
          ]}
        />
      </section>

      {/* ── Section 8: Performance and battery life ── */}
      <section id="performance" className="bg-black py-4">
        <Head
          eyebrow="Performance and battery life"
          title="Power on full display."
        />
        <p className="mx-auto max-w-[640px] px-4 text-center text-[17px] leading-relaxed text-white/70">
          The A20 Pro chip with the Dual 16-core Neural Engine is purpose-built to handle intensive AI workloads. And
          an advanced thermal management system with a vapor chamber gives iPhone Duo pro performance, perfect for
          demanding tasks and gaming sessions.
        </p>
        <div className="mx-auto mt-12 grid max-w-[1024px] items-center gap-4 px-4 pb-20 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-black">
            <ApplePicture stem={P("product-stories/performance/hero__dbnzxlb3ia2q")} className="block w-full" imgClassName="w-full" />
          </div>
          <div className="rounded-2xl bg-[#161617] p-6">
            <div className="w-16">
              <ApplePicture ext="png" stem={P("product-stories/performance/icon_battery__djgcirkk7t8i")} className="block w-full" imgClassName="w-full" />
            </div>
            <h3 className="mt-4 text-[21px] font-semibold">Power coupled.</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              An iPhone-first dual-battery system, along with an internal space-saving eSIM design6, maximizes physical
              space for battery capacity. And the C2 modem delivers groundbreaking efficiency. So even if you’re
              scrolling and gaming throughout the day, iPhone Duo can go the distance on a single charge1. And you’ll
              get up to 50 percent charge in around 20 minutes with fast wired charging7.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 9: All in the family ── */}
      <section id="shared-features" className="bg-[#0a0a0c] pt-16">
        <Head
          eyebrow="All in the family"
          title="All the must-haves. All on iPhone."
          sub="The latest iPhone models come packed with advanced capabilities. Siri AI, your new, more powerful AI assistant. Apple Intelligence for next-level photo editing, Writing Tools, Visual Intelligence,9 and child safety features to make your everyday effortless.2 Fast, secure connections with Wi-Fi 7,10 Bluetooth 6, 5G,11 and eSIM.6 And safety features like Messages via satellite designed to give you peace of mind.12"
        />
        <div className="mx-auto max-w-[1024px] px-4 pb-16">
          <ApplePicture stem={P("shared-features/siri_ai_hero__c59xcl4s2n2a")} className="block w-full rounded-2xl" imgClassName="w-full rounded-2xl" />
        </div>
      </section>

      {/* ── Section 10: Meet Siri AI ── */}
      <section id="siri" className="bg-[#0a0a0c] pb-4">
        <Head title="Meet Siri AI. Your AI assistant. More personal. More powerful.">
          <p className="text-[15px] text-white/50">Siri AI is rolling out in English.2 Usage limits may apply.</p>
          <a href="#" className="inline-block text-[17px] text-[#2997ff] hover:underline">
            Learn more about Siri AI <span aria-hidden="true">›</span>
          </a>
        </Head>
        <StylesGrid
          items={[
            { title: "Just ask Siri AI.", desc: "Powered by Apple Intelligence, Siri AI is your conversational AI assistant with entirely new capabilities on iPhone.2 Ask open-ended questions, brainstorm ideas for work or creative projects on the go, and engage in natural, back-and-forth conversations.", stem: P("shared-features/siri-ai/siri_ai_assistant__dtt7ikw5et0m") },
            { title: "Personal context.", desc: "Siri AI can find relevant answers to what you’re looking for just by asking. Search for a photo from years ago, easily locate an email buried in your inbox, or pull up a note you saved on your iPhone.", stem: P("shared-features/siri-ai/personal_context__d0gzm1zaqzyq") },
            { title: "App actions.", desc: "Siri AI can take actions in apps like Messages, Music, Reminders, and more based on what you’re doing in the moment. Quickly edit a message you just sent or add a song you hear in the car to your workout playlist.", stem: P("shared-features/siri-ai/app_actions__fj2lncg4d7yy") },
            { title: "World knowledge.", desc: "Ask about virtually any topic that’s on your mind, from important facts to recipes and travel recommendations. Siri AI can reference information online to give you detailed, up-to-date insights.", stem: P("shared-features/siri-ai/world_knowledge__cus71vk5zssy") },
            { title: "Siri app.", desc: "A dedicated app brings together all your conversations in one place, so you can ask a question on your iPhone and pick up where you left off on your iPad. You can also pin conversations for easy access or start a new one.", stem: P("shared-features/siri-ai/siri_app__dtanjgh4kdw2") },
            { title: "Siri mode in Camera.", desc: "Siri mode and Visual Intelligence let you search, ask questions, and take action based on what’s around you with just a tap.13", stem: P("shared-features/siri-ai/siri_mode__km1cxj76jk6m") },
            { title: "Customize Siri.", desc: "Pick a voice, then customize expressivity and pace until it clicks for you.14", stem: P("shared-features/siri-ai/customize__dxovu3y0ipme") },
            { title: "Write with Siri.", desc: "Siri AI can now generate a draft from scratch or provide feedback on what you’ve written. Just describe what you need in your own words. And in Messages and Mail, Siri AI can match your writing style, punctuation, and tone.", stem: P("shared-features/siri-ai/write__c6s9w45tlz42") },
          ]}
        />
      </section>

      {/* ── Section 11: iOS and Apple Intelligence ── */}
      <section id="ios" className="bg-[#0a0a0c] pb-4">
        <Head title="iOS and Apple Intelligence. Helpful in all the right places.">
          <a href="#" className="inline-block text-[17px] text-[#2997ff] hover:underline">
            Learn more about iOS 27 and Apple Intelligence <span aria-hidden="true">›</span>
          </a>
        </Head>
        <StylesGrid
          items={[
            { title: "Call Context.", desc: "Call Context can proactively surface relevant information from across your apps when you’re calling a business — like a confirmation code from Mail when you call an airline.", stem: P("shared-features/ios-apple-intelligence/call_context__e54opc346geq") },
            { title: "Child safety features.", desc: "New and expanded child safety features help make it easier for parents and guardians to keep kids safe online.", stem: P("shared-features/ios-apple-intelligence/child_safety__bqy96pgxgf7m") },
            { title: "Clean Up.", desc: "Remove even larger objects with higher-quality infill, and blend your background seamlessly so your photos look their best.5", stem: P("shared-features/ios-apple-intelligence/clean_up__ebhbmxzbwbma") },
            { title: "Image Playground.", desc: "Create unique, high-quality images in just about any style, including photorealistic. Modify and transform your images with just a description or using touch for endless possibilities.", stem: P("shared-features/ios-apple-intelligence/image_playground__qvevo3n8b4yq") },
            { title: "Suggestions.", desc: "Messages15 and Mail offer suggestions to help you take quick actions based on context from your conversation — add a calendar event or search for a photo with just a tap. Available in English.", stem: P("shared-features/ios-apple-intelligence/suggestions__bstbkszt2nea") },
            { title: "Safari tabs.", desc: "Now your tabs can be automatically grouped into topics, so related pages are easier to find. Safari Notify Me monitors pages for changes — for example, a price change or restock — and alerts you when it’s time to act.", stem: P("shared-features/ios-apple-intelligence/safari_tabs__dqhlp1ay14gi") },
            { title: "Shortcuts.", desc: "Automate daily tasks with a simple description. Just describe what you need, and Shortcuts creates an automation that connects actions across apps.", stem: P("shared-features/ios-apple-intelligence/shortcuts__f5np1ycd1p6y") },
          ]}
        />
      </section>

      {/* ── Section 12: Connectivity ── */}
      <section id="connectivity" className="bg-[#0a0a0c] pb-4">
        <Head title="Connectivity. Peace of mind in your pocket." />
        <StylesGrid
          items={[
            { title: "eSIM.", desc: "A built-in eSIM provides seamless connectivity, flexibility, convenience, and better security without the need for a physical SIM card — perfect for traveling.6", stem: P("shared-features/connectivity/esim__ey0f0s1ddquu") },
            { title: "Messages via satellite.", desc: "Send and receive messages when you’re off the grid, right from the Messages app.12", stem: P("shared-features/connectivity/messages__c39uebs4e8sy") },
            { title: "Roadside Assistance via satellite.", desc: "Get help for things like a flat tire or dead car battery. iPhone will connect you with a roadside assistance provider, who can send help to your exact location.16", stem: P("shared-features/connectivity/roadside__edgw6wv1hz2a") },
            { title: "Emergency SOS via satellite.", desc: "If you try calling 911 but don’t have cell service or Wi-Fi, you can use iPhone to text emergency services over satellite.12", stem: P("shared-features/connectivity/esos__dae6q5e65e2q") },
            { title: "Crash Detection.", desc: "Hardware sensors and advanced motion algorithms can detect a severe car crash and call for help if you can’t.17", stem: P("shared-features/connectivity/crash_detection__cjmw7vbjk3ma") },
            { title: "Find My.", desc: "Securely share your location with friends and family.", stem: P("shared-features/connectivity/find_my__kk7v1jnlt3mi") },
          ]}
        />
      </section>

      {/* ── Section 13: Accessories ── */}
      <section id="accessories" className="bg-black pb-4">
        <Head
          title="Accessories"
          sub="Snap it on. Stand it up."
        />
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-8 md:grid-cols-2">
          {[
            { s: P("accessories/accessories__c8qvnrwewfsm") },
            { s: P("accessories/accessories_case__ec3jr9flntaq") },
          ].map((c, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-[#161617]">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
            </div>
          ))}
        </div>
        <p className="px-4 pb-8 text-center text-[15px] text-white/70">
          iPhone Duo Case offers lightweight protection in stylish colors. iPhone Duo Folio with Kickstand features a
          retractable kickstand for a range of helpful viewing angles.
        </p>
        <div className="pb-16 text-center">
          <Link href="/us/shop/goto/buy_iphone/accessories" className="text-[17px] text-[#2997ff] hover:underline">
            Shop all iPhone accessories <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      {/* ── Section 14: Why Apple is the best place to shop iPhone ── */}
      <section id="incentive" className="bg-[#f5f5f7] pb-4 pt-20 text-black">
        <div className="mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">Why Apple is the best place to shop iPhone.</h2>
          <div className="mt-8">
            <Link href="/us/shop/goto/buy_iphone/iphone_duo" className="link-blue text-[17px]">
              Shop iPhone <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1024px] gap-4 px-4 pb-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { t: "Apple Upgrade", d: "Love it. Lease it. Upgrade it. Lease a new iPhone with low monthly payments for 24 or 36 months and upgrade at the end of your term.", s: P("incentive/apple_upgrade_iphone__cmal88chdm4i") },
            { t: "Apple Trade In", d: "Save on a new iPhone with a trade-in. Get up to $175–$885 in credit toward iPhone Duo when you trade in iPhone 13 or higher.18", s: P("incentive/trade_in_iphone_duo__e7rn2xy0f9qy") },
            { t: "Ways to Buy", d: "Pay over time, interest-free. When you choose to check out at Apple with Apple Card Monthly Installments.", s: P("incentive/buy__ed74zg3nc18i") },
            { t: "Personal Setup", d: "Meet your new iPhone with Personal Setup. Jump into online sessions with a Specialist to set up your iPhone and discover new features.", s: P("incentive/setup__fztsj8mzvsuy") },
            { t: "Delivery and Pickup", d: "Get flexible delivery and easy pickup. Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.", s: P("incentive/deliver__cjdtvz5o30mu") },
            { t: "Guided Shopping", d: "Shop live with a Specialist. Let us help you find what you need and answer all of your questions, one on one, at an Apple Store or online.", s: P("incentive/specialist__ddklqzqjxocy") },
            { t: "Apple Store App", d: "Explore a shopping experience designed around you. Use the Apple Store app to get a more personal way to shop.", s: P("incentive/apple_store_app__cf7b1ilt0jqq") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 15: Keep exploring iPhone ── */}
      <section id="compare" className="bg-[#f5f5f7] pb-4 pt-10 text-black">
        <div className="mx-auto max-w-[1024px] px-4">
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight">Keep exploring iPhone.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "New iPhone Duo",
                s: "The largest display of any iPhone. Foldable. Posable. And durable.",
                stem: P("contrast/iphone_duo__btr0pf6i74r6"),
                ext: "jpg" as const,
                h: "/iphone-duo",
              },
              {
                t: "iPhone 18 Pro",
                s: "The ultimate battery life, performance, and camera of any iPhone.",
                stem: P("contrast/iphone_18_pro__bmrykxup0dqu"),
                ext: "jpg" as const,
                h: "/iphone-18-pro",
              },
              {
                t: "Compare iPhone models",
                s: "Find your perfect iPhone.",
                stem: A("/v/iphone-duo/a/images/site/localnav/compare__cm7zfv1uii4i"),
                ext: "png" as const,
                h: "/iphone/compare",
              },
            ].map((c) => (
              <a key={c.t} href={c.h} className="group block rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto max-w-[240px]">
                  <ApplePicture stem={c.stem} ext={c.ext} className="block w-full" imgClassName="w-full" />
                </div>
                <h3 className="mt-4 text-[21px] font-semibold group-hover:text-blue-600">{c.t}</h3>
                <p className="mt-1 text-[15px] text-[#6e6e73]">{c.s}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 16: Environment + footnote ── */}
      <section id="environment" className="bg-[#f5f5f7] pb-16 pt-10 text-black">
        <div className="mx-auto max-w-[980px] px-4 border-t border-black/10 pt-10">
          <h2 className="text-[24px] font-semibold">iPhone Duo and the environment.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Made with 35% recycled material by weight.", P("environment/icon_recycling__fi1oyd3q1jue")],
              ["Manufactured with 60% renewable electricity.", P("environment/icon_electricity__es7my93x0kya")],
              ["Ships in 100% fiber-based packaging.", P("environment/icon_package__byyensc1gqly")],
            ].map(([t, s]) => (
              <div key={t as string}>
                <div className="w-16">
                  <ApplePicture ext="png" stem={s as string} className="block w-full" imgClassName="w-full" />
                </div>
                <p className="mt-3 text-[15px] flex-1 text-[#1d1d1f] font-semibold">{t as string}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-[980px] px-4">
          <p className="text-[13px] leading-relaxed text-[#6e6e73]">
            *Pricing is for illustrative purposes. Final price is determined at time of purchase, and amounts may vary.
            ◊ Apple Upgrade lease terms apply. 1 Rupture testing conducted by Apple. Battery life varies by use,
            settings, and configuration. 2 Siri AI is rolling out in English. 3 iPhone Duo is splash, water, and dust
            resistant. 4 Display size is measured diagonally. 5 Apple Intelligence is available in certain languages
            and regions. 6 eSIM must be supported by carrier. 7 Fast wired charging results based on testing conducted
            by Apple in September 2026. 8 Battery life varies by use, settings, and configuration.
          </p>
        </div>
      </section>
    </main>
  );
}