import { ProductSubnav, ProductHero, ProductGrid, FeatureBlocks } from "@/components/Product";

export const metadata = { title: "iPad" };

export default function IpadPage() {
  return (
    <main>
      <ProductSubnav
        title="iPad"
        items={[
          { label: "iPad Pro", href: "/ipad" },
          { label: "iPad Air", href: "/ipad" },
          { label: "iPad", href: "/ipad" },
          { label: "iPad mini", href: "/ipad" },
          { label: "Compare", href: "/ipad" },
          { label: "Apple Pencil", href: "/ipad" },
          { label: "Keyboards", href: "/ipad" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
          { label: "iPadOS 27", href: "/ipad" },
          { label: "Shop iPad", href: "/us/shop/goto/store" },
        ]}
      />
      <ProductHero
        title="iPad"
        sub=""
        links={[{ label: "Shop iPad", href: "/us/shop/goto/store" }]}
      />
      <ProductGrid
        products={[
          {
            name: "iPad Pro",
            sub: "The ultimate iPad experience with the most advanced technology.",
            colors: ["#2C2C2E", "#C0C0C0"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "iPad Air",
            sub: "Serious performance in a thin and light design.",
            colors: ["#2C2C2E", "#7EB5D6", "#9B8EC4", "#F5E6C8"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "iPad",
            sub: "The colorful, all-screen iPad for the things you do every day.",
            colors: ["#7EB5D6", "#E8A0BF", "#F5D76E", "#C0C0C0"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
          {
            name: "iPad mini",
            sub: "The full iPad experience in an ultraportable design.",
            colors: ["#2C2C2E", "#7EB5D6", "#9B8EC4", "#F5E6C8"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/store" },
            ],
          },
        ]}
      />
      <FeatureBlocks
        blocks={[
          { title: "iPadOS + Apps", sub: "Flexible windowing. A multitasker's delight.", body: "Split View, Slide Over, and a full file system let you work your way." },
          { title: "Apple Intelligence", sub: "Effortlessly helpful every day.", body: "On-device AI that helps you write, create, and get things done." },
          { title: "Productivity", sub: "Your workplace can be any place.", body: "Full-size keyboard, Apple Pencil, and pro apps like Final Cut Pro." },
          { title: "Creativity", sub: "Take your inner artist out and about.", body: "Draw, paint, design, and edit with Apple Pencil and powerful apps." },
          { title: "Learning", sub: "Your classroom can be anywhere.", body: "Interactive lessons, augmented reality, and tools for every subject." },
          { title: "Entertainment", sub: "Kick back. Tune in. Game on.", body: "Stunning display, immersive audio, and thousands of games and apps." },
        ]}
      />
    </main>
  );
}
