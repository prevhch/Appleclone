import { ProductSubnav, BannerBar, ProductHero, FeatureBlocks, SectionTitle, TileGrid, ProductGrid } from "@/components/Product";
import Link from "next/link";

export const metadata = { title: "iPhone" };

export default function IPhonePage() {
  return (
    <main>
      <BannerBar
        text="Pre-order iPhone 18 Pro now. Already have an iPhone saved for pre-order? Check out now."
      />
      <ProductSubnav
        title="Shop iPhone"
        items={[
          { label: "iPhone Duo", href: "/iphone-duo", tag: "New" },
          { label: "iPhone 18 Pro", href: "/iphone-18-pro", tag: "New" },
          { label: "iPhone Air", href: "/iphone" },
          { label: "iPhone 17", href: "/iphone" },
          { label: "iPhone 17e", href: "/iphone" },
          { label: "iPhone 16", href: "/iphone" },
          { label: "Compare", href: "/iphone" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
          { label: "Shop iPhone", href: "/us/shop/goto/buy_iphone" },
          { label: "iOS 27", href: "/iphone" },
        ]}
      />
      <section className="bg-[#f5f5f7] text-center px-4 py-10">
        <RevealBand name="iPhone Duo" sub="Hello, hello." />
      </section>
      <ProductHero
        eyebrow=""
        title="iPhone 18 Pro"
        sub="Pro further."
        links={[
          { label: "Learn more", href: "/iphone-18-pro" },
          { label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_18_pro" },
        ]}
        dark
      />
      <ProductGrid
        products={[
          {
            name: "iPhone Duo",
            tag: "New",
            sub: "The largest display of any iPhone. Foldable. Posable. And durable.",
            colors: ["Star White", "Night Sky"],
            cta: [
              { label: "Learn more", href: "/iphone-duo" },
              { label: "View pricing", href: "/us/shop/goto/buy_iphone/iphone_duo" },
            ],
            dark: true,
          },
          {
            name: "iPhone 18 Pro",
            tag: "New",
            sub: "The ultimate performance and camera of any iPhone, with exceptional battery life.",
            colors: ["Burgundy", "Glacier", "Silver", "Black"],
            cta: [
              { label: "Learn more", href: "/iphone-18-pro" },
              { label: "Pre-order", href: "/us/shop/goto/buy_iphone/iphone_18_pro" },
            ],
            dark: true,
          },
          {
            name: "iPhone Air",
            sub: "Incredibly light and thin with pro performance.",
            colors: ["Sky Blue", "Light Gold", "Cloud White", "Space Black"],
            cta: [
              { label: "Learn more", href: "/iphone" },
              { label: "Buy", href: "/us/shop/goto/buy_iphone/iphone_air" },
            ],
          },
          {
            name: "iPhone 17",
            sub: "Powerful, durable, and delightful.",
            colors: ["Lavender", "Sage", "Mist Blue", "White", "Black"],
            cta: [
              { label: "Learn more", href: "/iphone" },
              { label: "Buy", href: "/us/shop/goto/buy_iphone/iphone_17" },
            ],
          },
          {
            name: "iPhone 17e",
            sub: "Feature stacked. Value packed.",
            colors: ["Soft Pink", "White", "Black"],
            cta: [
              { label: "Learn more", href: "/iphone" },
              { label: "Buy", href: "/us/shop/goto/buy_iphone/iphone_17e" },
            ],
          },
          {
            name: "iPhone 16",
            sub: "Amazing performance. Durable design.",
            colors: ["Ultramarine", "Teal", "Pink", "White", "Black"],
            cta: [
              { label: "Learn more", href: "/iphone" },
              { label: "Buy", href: "/us/shop/goto/buy_iphone/iphone_16" },
            ],
          },
        ]}
      />
      <section className="py-10">
        <SectionTitle title="Switch to iPhone." />
      </section>
      <FeatureBlocks
        blocks={[
          { title: "Getting Started", sub: "Switching from Android to iPhone is simple.", body: "Transfer your data in a few easy steps with the Move to iOS app. Continue your conversations with friends with iMessage, RCS, WhatsApp, and WeChat. Everything just works, and help is just a call or chat away." },
          { title: "Designed to Last", sub: "iPhone holds its value longer than other smartphones.", body: "iPhone is protected by Ceramic Shield, tougher than any smartphone glass. Regular iOS updates keep your iPhone feeling new for years, powered by supersmart, superspeedy Apple silicon." },
          { title: "Cutting-Edge Cameras", sub: "Picture your best photos and videos.", body: "The advanced cameras in iPhone automatically capture phenomenal photos. On iPhone Duo, Smart Take uses on-device AI to detect when people are posed. iOS 27 reimagined, your most personal yet." },
          { title: "Apple Intelligence and Siri AI", sub: "Helpful in all the right places.", body: "Siri AI is your AI assistant, powered by Apple Intelligence. Start a visual search with the Shutter button, and use next-level intelligent photo editing tools like Clean Up and Extend." },
          { title: "Environment", sub: "Designed with the earth in mind.", body: "All iPhone batteries are made from 100 percent recycled cobalt. Packaging is 100 percent fiber based and easily recyclable. Trade in your current iPhone with Apple Trade In." },
          { title: "Privacy", sub: "Your data. Just where you want it.", body: "Apple Intelligence is integrated through on-device processing. iMessage uses end-to-end encryption, Safari Private Browsing blocks trackers, and Apple Pay never shares your card numbers." },
          { title: "Peace of Mind", sub: "Helpful features. On and off the grid.", body: "Messages, Emergency SOS, and Roadside Assistance via satellite work when you don't have cell service. Find My and Check In help keep your friends and family close." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Why Apple is the best place to shop iPhone."
        cta={{ label: "Shop iPhone", href: "/us/shop/goto/buy_iphone" }}
        tiles={[
          { title: "Apple Upgrade", sub: "Love it. Lease it. Upgrade it.", text: "Lease a new iPhone with low monthly payments for 12 or 24 months and upgrade at the end of your term." },
          { title: "Carrier Deals at Apple", sub: "Get up to $1200 in credit on a new iPhone after trade-in.", text: "Includes carrier credits. AT&T: up to $1200. T-Mobile: up to $1200. Verizon: up to $1020." },
          { title: "Apple Trade In", sub: "Save on a new iPhone with a trade-in.", text: "Get credit toward your next iPhone when you trade in an eligible device." },
          { title: "Ways to Buy", sub: "Pay over time, interest-free.", text: "When you choose to check out at Apple with Apple Card Monthly Installments, pay for your new iPhone over time, interest-free." },
          { title: "Personal Setup", sub: "Meet your new iPhone with Personal Setup.", text: "Jump into online, one-on-one sessions with a Specialist to set up your iPhone and discover new features." },
          { title: "Delivery and Pickup", sub: "Get flexible delivery and easy pickup.", text: "Choose two-hour delivery, free next-day delivery, or pick up available items at an Apple Store." },
          { title: "Guided Shopping", sub: "Shop live with a Specialist.", text: "Get one-on-one shopping support in a live, guided video session whenever you want it." },
        ]}
      />
      <section className="py-8 text-center text-[15px] text-[#6e6e73]">
        <p>
          <Link href="/iphone" className="link-blue">Explore the lineup. <span aria-hidden="true" className="chev">›</span></Link>
        </p>
      </section>
    </main>
  );
}

function RevealBand({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="pt-6 pb-2">
      <h2 className="text-3xl md:text-5xl font-semibold">{name}</h2>
      <p className="mt-2 text-lg md:text-xl text-[#6e6e73]">{sub}</p>
      <p className="mt-3 flex gap-5 justify-center text-[17px]">
        <Link href="/iphone-duo" className="link-blue">Learn more <span aria-hidden="true" className="chev">›</span></Link>
        <Link href="/us/shop/goto/buy_iphone/iphone_duo" className="link-blue">View pricing <span aria-hidden="true" className="chev">›</span></Link>
      </p>
    </div>
  );
}