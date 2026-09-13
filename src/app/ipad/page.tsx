import { ProductSubnav, BannerBar, SectionBlock, ProductGrid, TileGrid } from "@/components/Product";

export const metadata = { title: "iPad" };

export default function IpadPage() {
  return (
    <main>
      <BannerBar
        text="For a limited time, get a $100 gift card when you buy iPad with education savings."
        cta={{ label: "Shop iPad", href: "/us/shop/goto/store" }}
      />
      <ProductSubnav
        title="Shop iPad"
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
      <ProductGrid
        products={[
          {
            name: "iPad Pro",
            sub: "The ultimate iPad experience with the most advanced technology.",
            colors: ["Space Black", "Silver"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/buy_ipad" },
            ],
            dark: true,
          },
          {
            name: "iPad Air",
            sub: "Serious performance in a thin and light design.",
            colors: ["Space Gray", "Blue", "Purple", "Starlight"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/buy_ipad" },
            ],
          },
          {
            name: "iPad",
            sub: "The colorful, all-screen iPad for the things you do every day.",
            colors: ["Blue", "Pink", "Yellow", "Silver"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/buy_ipad" },
            ],
          },
          {
            name: "iPad mini",
            sub: "The full iPad experience in an ultraportable design.",
            colors: ["Space Gray", "Blue", "Purple", "Starlight"],
            cta: [
              { label: "Learn more", href: "/ipad" },
              { label: "Buy", href: "/us/shop/goto/buy_ipad" },
            ],
          },
        ]}
      />
      <SectionBlock title="Get to know iPad." />
      <TileGrid
        tiles={[
          { title: "iPadOS + Apps", sub: "Flexible windowing. A multitasker's delight.", text: "Split View, Slide Over, and a full file system let you work your way. iPadOS 27 brings Siri AI and Intelligent Photo Editing Tools." },
          { title: "Apple Intelligence", sub: "Effortlessly helpful every day.", text: "On-device AI that helps you write, create, and get things done — powered by Apple Intelligence with Siri AI." },
          { title: "Productivity", sub: "Your workplace can be any place.", text: "Full-size keyboard, Apple Pencil, and pro apps like Final Cut Pro make iPad a serious work machine." },
          { title: "Creativity", sub: "Take your inner artist out and about.", text: "Draw, paint, design, and edit with Apple Pencil and powerful creative apps." },
          { title: "Learning", sub: "Your classroom can be anywhere.", text: "Interactive lessons, augmented reality, and tools for every subject make learning more engaging." },
          { title: "Entertainment", sub: "Kick back. Tune in. Game on.", text: "Stunning display, immersive audio, and thousands of games and apps designed for the big canvas." },
        ]}
      />
      <SectionBlock title="iPad essentials." />
      <TileGrid
        bg="bg-[#f5f5f7]"
        tiles={[
          { title: "Apple Pencil", sub: "Dream it up. Jot it down.", text: "Pixel-perfect precision, industry-leading low latency, and tilt and pressure sensitivity." },
          { title: "Keyboards for iPad", sub: "Type it out. Take it with you.", text: "Magic Keyboard and Smart Keyboards turn iPad into a full-featured workstation." },
        ]}
      />
      <SectionBlock title="Significant others." />
      <TileGrid
        tiles={[
          { title: "iPad and iPhone", sub: "Made for each other.", text: "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas." },
          { title: "iPad and Mac", sub: "The ultimate creative setup.", text: "iPad and Mac are designed to work together — with Sidecar, Universal Clipboard, and Handoff between devices." },
          { title: "iPad and Apple Watch", sub: "Your health, together.", text: "iPad is a great way to optimize your workouts while tracking your progress on Apple Watch, with Activity rings powering your day." },
        ]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        heading="Why Apple is the best place to shop iPad."
        cta={{ label: "Shop iPad", href: "/us/shop/goto/store" }}
        tiles={[
          { title: "Apple Trade In", sub: "Save on a new iPad with a trade-in.", text: "Get credit toward your next iPad when you trade in an eligible device." },
          { title: "Education", sub: "Save on iPad with education pricing.", text: "College students and educators save on iPad through the Apple Education Store." },
          { title: "Personal Setup", sub: "Meet your new iPad with Personal Setup.", text: "Jump into online, one-on-one sessions with a Specialist to set up your iPad." },
          { title: "Delivery and Pickup", sub: "Get flexible delivery and easy pickup.", text: "Choose two-hour delivery, free next-day delivery, or pick up available items at an Apple Store." },
        ]}
      />
    </main>
  );
}