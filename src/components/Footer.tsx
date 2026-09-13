import Link from "next/link";
import { FOOTNOTES } from "@/lib/footnotes";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Shop and Learn", links: [{ label: "Store", href: "/us/shop/goto/store" }, { label: "Mac", href: "/mac" }, { label: "iPad", href: "/ipad" }, { label: "iPhone", href: "/iphone" }, { label: "Watch", href: "/watch" }, { label: "Vision", href: "/apple-vision-pro" }, { label: "AirPods", href: "/airpods" }, { label: "TV & Home", href: "/tv-home" }, { label: "AirTag", href: "/us/shop/goto/buy_accessories" }, { label: "Accessories", href: "/us/shop/goto/buy_accessories" }, { label: "Gift Cards", href: "/us/shop/goto/edu_store" }] },
  { title: "Apple Wallet", links: [{ label: "Wallet", href: "/entertainment" }, { label: "Apple Card", href: "/apple-card" }, { label: "Apple Pay", href: "/entertainment" }, { label: "Apple Cash", href: "/entertainment" }] },
  { title: "Account", links: [{ label: "Manage Your Apple Account", href: "/us/shop/goto/bag" }, { label: "Apple Store Account", href: "/us/shop/goto/store" }, { label: "iCloud.com", href: "/entertainment" }] },
  { title: "Entertainment", links: [{ label: "Apple One", href: "/entertainment" }, { label: "Apple TV", href: "/tv-home" }, { label: "Apple Music", href: "/entertainment" }, { label: "Apple Arcade", href: "/entertainment" }, { label: "Apple Fitness+", href: "/entertainment" }, { label: "Apple News+", href: "/entertainment" }, { label: "Apple Podcasts", href: "/entertainment" }, { label: "Apple Books", href: "/entertainment" }, { label: "App Store", href: "/entertainment" }] },
  { title: "Apple Store", links: [{ label: "Find a Store", href: "/us/shop/goto/store" }, { label: "Genius Bar", href: "/us/shop/goto/store" }, { label: "Today at Apple", href: "/entertainment" }, { label: "Apple Store App", href: "/us/shop/goto/store" }, { label: "Apple Upgrade", href: "/us/shop/goto/apple_upgrade" }, { label: "Apple Trade In", href: "/us/shop/goto/store" }, { label: "Order Status", href: "/us/shop/goto/bag" }, { label: "Shopping Help", href: "/us/shop/goto/store" }] },
  { title: "For Business", links: [{ label: "Apple and Business", href: "/mac" }, { label: "Shop for Business", href: "/us/shop/goto/store" }] },
  { title: "For Education", links: [{ label: "Apple and Education", href: "/mac" }, { label: "Shop for K-12", href: "/us/shop/goto/edu_store" }, { label: "Shop for College", href: "/us/shop/goto/edu_store" }] },
  { title: "Apple Values", links: [{ label: "Accessibility", href: "/entertainment" }, { label: "Education", href: "/entertainment" }, { label: "Environment", href: "/entertainment" }, { label: "Privacy", href: "/entertainment" }, { label: "Supply Chain Innovation", href: "/entertainment" }] },
  { title: "About Apple", links: [{ label: "Newsroom", href: "/entertainment" }, { label: "Apple Leadership", href: "/entertainment" }, { label: "Career Opportunities", href: "/entertainment" }, { label: "Investors", href: "/entertainment" }, { label: "Events", href: "/entertainment" }, { label: "Contact Apple", href: "/us/shop/goto/store" }] },
];

function FootnoteText({ text, termsLink }: { text: string; termsLink?: boolean }) {
  if (!termsLink || !text.includes("[[terms]]")) return <>{text}</>;
  const [before, after] = text.split("[[terms]]");
  return (
    <>
      {before}
      <Link href="/us/shop/goto/edu_store" className="link-blue">
        here
      </Link>
      {after}
    </>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[12px] leading-[1.33337] text-[#6e6e73]">
      <div className="mx-auto max-w-[1024px] px-4 py-6">
        <ol className="space-y-2 border-b border-[#d2d2d7] pb-4">
          {FOOTNOTES.map((f, i) => (
            <li key={i} id={f.id}>
              <FootnoteText text={f.text} termsLink={f.termsLink} />
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-6 border-b border-[#d2d2d7]">
          {COLS.map((c) => (
            <div key={c.title}>
              <h3 className="text-[#1d1d1f] font-semibold mb-2">{c.title}</h3>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 py-4">
          <p>Copyright © 2026 AppleClone (school project). All rights reserved.</p>
          <div className="flex gap-3">
            {["Privacy Policy", "Terms of Use", "Site Map"].map((x) => (
              <span key={x} className="border-r border-[#d2d2d7] pr-3 last:border-0 hover:underline cursor-pointer">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
