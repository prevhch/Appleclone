import { ProductSubnav, FeatureBlocks } from "@/components/Product";
import Link from "next/link";
import { A } from "@/lib/site";

export const metadata = { title: "MacBook Air" };

export default function MacBookAirPage() {
  return (
    <main>
      <ProductSubnav
        title="Mac"
        items={[
          { label: "Overview", href: "/macbook-air" },
          { label: "Tech Specs", href: "/macbook-air" },
          { label: "Compare", href: "/macbook-air" },
          { label: "Switch from PC to Mac", href: "/macbook-air" },
        ]}
      />
      <section className="bg-white relative overflow-hidden" style={{ height: "910px" }}>
        <div className="relative mx-auto" style={{ width: "980px", marginTop: "70px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A("/v/homepage/images/macbook-air-m5/a/promo_macbook_air_m5__e5xk2yysqiie_large.jpg")}
            alt="MacBook Air in Sky Blue"
            style={{ width: "980px", height: "469px", objectFit: "fill" }}
          />
        </div>
        <div className="text-center px-4" style={{ marginTop: "60px" }}>
          <h1 style={{ fontSize: "28px", lineHeight: "32px", fontWeight: 600, color: "#1d1d1f" }}>MacBook Air</h1>
          <p style={{ fontSize: "64px", lineHeight: "70px", fontWeight: 600, marginTop: "8px", background: "linear-gradient(90deg, #022640, #5786ab)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Might takes flight.</p>
          <p style={{ fontSize: "17px", lineHeight: "21px", marginTop: "7px", color: "#bf4800" }}><strong>Now supercharged by M5.</strong></p>
          <p style={{ fontSize: "17px", lineHeight: "21px", marginTop: "10px", fontWeight: 600, color: "#1d1d1f" }}>From $999, or $83.25/mo. for 12 mo.</p>
          <div className="mt-3 flex gap-5 justify-center text-[17px]">
            <Link href="/us/shop/goto/buy_mac/macbook_air" className="link-blue">Buy <span aria-hidden="true" className="chev">›</span></Link>
            <Link href="/us/shop/goto/store" className="link-blue">Get the highlights <span aria-hidden="true" className="chev">›</span></Link>
          </div>
        </div>
      </section>
      <FeatureBlocks
        blocks={[
          { title: "M5 Chip", sub: "The M5 chip isn't just an upgrade, it's a game changer.", body: "Delivering phenomenal performance. Prepare for liftoff. Up to 9.5x faster than MacBook Air with M1." },
          { title: "Battery Life", sub: "Up to 18 hours. Won't call it a day until you do.", body: "All-day battery life. Work, create, and play all day without reaching for the charger. Fast charging — 50% in about 30 minutes." },
          { title: "Apple Intelligence", sub: "A powerful platform for AI. Now that's smart.", body: "Apple Intelligence is built right in. On-device AI that helps you write, create, and get things done with groundbreaking privacy protections." },
          { title: "Storage and Memory", sub: "512GB of storage and 16GB of unified memory.", body: "Superfast straight out of the box. Configurable up to 4TB storage and 32GB unified memory." },
          { title: "macOS Tahoe", sub: "Fast just flows.", body: "Stunning new design with Liquid Glass, intuitive productivity tools, and a reimagined Spotlight. Live Translation across Messages and FaceTime." },
          { title: "Continuity", sub: "All your Apple devices work together seamlessly.", body: "Answer calls from your iPhone on your Mac. Copy text on one, paste on the other. iPhone Mirroring, Universal Clipboard, and Live Activities." },
        ]}
      />
      <section className="mx-auto max-w-[1024px] px-4 py-12">
        <h2 className="text-[28px] font-semibold text-center mb-4">Design</h2>
        <p className="text-center text-lg text-[#6e6e73] mb-8">Built to go places.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-lg font-semibold">Two perfectly portable sizes.</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">The 13-inch MacBook Air is the ultimate on-the-go laptop, and the 15-inch model gives you even more space onscreen for multitasking.</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-lg font-semibold">Four beautiful colors.</p>
            <div className="flex gap-2 justify-center mt-3">
              <span className="w-5 h-5 rounded-full bg-[#A8C8E8] border border-black/10" />
              <span className="w-5 h-5 rounded-full bg-[#C0C0C0] border border-black/10" />
              <span className="w-5 h-5 rounded-full bg-[#F5E6C8] border border-black/10" />
              <span className="w-5 h-5 rounded-full bg-[#2C2C2E] border border-black/10" />
            </div>
            <p className="mt-2 text-[15px] text-[#6e6e73]">Sky Blue, Silver, Starlight, and Midnight. Every MacBook Air comes with a color-matched MagSafe charging cable.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1024px] px-4 py-12">
        <h2 className="text-[28px] font-semibold text-center mb-4">Performance</h2>
        <p className="text-center text-lg text-[#6e6e73] mb-8">M5. The chip that zips.</p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl bg-[#f5f5f7] p-6">
            <p className="text-3xl font-bold">9.5x</p>
            <p className="text-[13px] text-[#6e6e73] mt-1">faster than MacBook Air with M1</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-6">
            <p className="text-3xl font-bold">4x</p>
            <p className="text-[13px] text-[#6e6e73] mt-1">faster than MacBook Air with M4</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-6">
            <p className="text-3xl font-bold">3.8x</p>
            <p className="text-[13px] text-[#6e6e73] mt-1">faster than PC laptop with Intel Core Ultra X7</p>
          </div>
        </div>
        <p className="mt-6 text-center text-[15px] text-[#6e6e73]">The M5 chip brings even more speed and fluidity to everything you do, like seamless switching between loads of apps and tabs, editing 4K video, or playing immersive games. All with a silent, fanless design.</p>
      </section>
      <section className="mx-auto max-w-[1024px] px-4 py-12">
        <h2 className="text-[28px] font-semibold text-center mb-4">AI</h2>
        <p className="text-center text-lg text-[#6e6e73] mb-8">Built for AI. From the silicon up.</p>
        <p className="mx-auto max-w-[640px] text-center text-[15px] text-[#6e6e73]">
          Run your favorite AI tools — from ChatGPT and LM Studio to Topaz Photo AI — at impressive speeds.
          Apple Intelligence is built right in, with on-device processing and Private Cloud Compute, so your data
          stays private. AI tools, apps, and features work across your Mac, iPhone, and iPad with continuity built in.
        </p>
      </section>
      <section className="mx-auto max-w-[1024px] px-4 py-12">
        <h2 className="text-[28px] font-semibold text-center mb-4">Display</h2>
        <p className="text-center text-lg text-[#6e6e73] mb-8">Love at every sight.</p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl bg-[#f5f5f7] p-6">
            <p className="text-lg font-semibold">500 nits</p>
            <p className="text-[13px] text-[#6e6e73] mt-1">of brightness for comfortable work in any lighting</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-6">
            <p className="text-lg font-semibold">P3 wide color</p>
            <p className="text-[13px] text-[#6e6e73] mt-1">vivid and accurate colors for viewing and editing</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-6">
            <p className="text-lg font-semibold">True Tone</p>
            <p className="text-[13px] text-[#6e6e73] mt-1">adjusts display warmth to match ambient light</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1024px] px-4 py-12">
        <h2 className="text-[28px] font-semibold text-center mb-4">Camera and Audio</h2>
        <p className="text-center text-lg text-[#6e6e73] mb-8">When you move, it moves.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-lg font-semibold">Center Stage</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">Stay in frame during video calls, even as you move around or when more people join your frame.</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-lg font-semibold">Desk View</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">Share a top-down view of your workspace while staying onscreen — great for tutoring or showing projects.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1024px] px-4 py-12">
        <h2 className="text-[28px] font-semibold text-center mb-4">Ports and Connectivity</h2>
        <p className="text-center text-lg text-[#6e6e73] mb-8">Well connected.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-lg font-semibold">MagSafe + Two Thunderbolt 4 ports</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">MagSafe charging cable attaches and detaches magnetically. Thunderbolt 4 ports let you connect high-speed accessories. Headphone jack supports high-impedance headphones.</p>
          </div>
          <div className="rounded-2xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-lg font-semibold">Wi-Fi 7 and Bluetooth 6</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">The Apple N1 wireless chip provides Wi-Fi 7 and Bluetooth 6, improving performance and reliability. Connect up to two external displays.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f7] text-center px-4 py-12">
        <h2 className="text-[28px] font-semibold mb-4">Which laptop is right for you?</h2>
        <div className="flex gap-5 justify-center text-[17px]">
          <Link href="/mac" className="link-blue">Compare all Mac models <span aria-hidden="true" className="chev">›</span></Link>
        </div>
      </section>
    </main>
  );
}
