import { ProductSubnav, SectionBlock, ProductGrid, TileGrid, ProductHero } from "@/components/Product";

export const metadata = { title: "Mac" };

export default function MacPage() {
  return (
    <main>
      <ProductSubnav
        title="Shop Mac"
        items={[
          { label: "MacBook Neo", href: "/mac" },
          { label: "MacBook Air", href: "/macbook-air" },
          { label: "MacBook Pro", href: "/mac" },
          { label: "iMac", href: "/mac" },
          { label: "Mac mini", href: "/mac", tag: "New" },
          { label: "Mac Studio", href: "/mac", tag: "New" },
          { label: "Displays", href: "/mac" },
          { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
          { label: "Shop Mac", href: "/us/shop/goto/store" },
        ]}
      />
      <ProductHero
        title="Mac"
        sub="Explore the lineup."
        links={[{ label: "Shop Mac", href: "/us/shop/goto/store" }]}
      />
      <ProductGrid
        products={[
          {
            name: "MacBook Neo",
            sub: "The magic of Mac at a surprising price.",
            colors: ["Silver", "Blush", "Citrus", "Indigo"],
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/buy_mac/macbook_neo" },
            ],
          },
          {
            name: 'MacBook Air 13" and 15"',
            sub: "Thin. Fast. Powerful and portable.",
            colors: ["Sky Blue", "Silver", "Starlight", "Midnight"],
            price: "From $999",
            cta: [
              { label: "Learn more", href: "/macbook-air" },
              { label: "Buy", href: "/us/shop/goto/buy_mac/macbook_air" },
            ],
          },
          {
            name: 'MacBook Pro 14" and 16"',
            sub: "The most advanced Mac laptops for demanding tasks.",
            colors: ["Space Black", "Silver"],
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/buy_mac/macbook_pro" },
            ],
          },
          {
            name: "iMac",
            sub: "An all-in-one desktop for creativity and productivity.",
            colors: ["Blue", "Purple", "Pink", "Orange", "Yellow", "Green", "Silver"],
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/buy_mac/imac" },
            ],
          },
          {
            name: "Mac mini",
            tag: "New",
            sub: "The mini-est, most affordable Mac desktop.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Pre-order", href: "/us/shop/goto/buy_mac/mac_mini" },
            ],
          },
          {
            name: "Mac Studio",
            tag: "New",
            sub: "Powerful performance and connectivity for pros.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Pre-order", href: "/us/shop/goto/buy_mac/mac_studio" },
            ],
          },
          {
            name: "Studio Display",
            sub: "A 5K Retina display that's perfect for Mac.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/buy_mac/studio_display" },
            ],
          },
          {
            name: "Studio Display XDR",
            sub: "The ultimate 5K Retina XDR display for creative and pro workflows.",
            cta: [
              { label: "Learn more", href: "/mac" },
              { label: "Buy", href: "/us/shop/goto/buy_mac/studio_display_xdr" },
            ],
          },
        ]}
      />
      <SectionBlock title="Get to know Mac." />
      <TileGrid
        tiles={[
          { title: "Performance and Battery Life", sub: "Go fast. Go far.", text: "The Apple M5 family delivers phenomenal performance with all-day battery life, and ships with the most powerful battery technology in a personal computer." },
          { title: "A powerful platform for AI", sub: "Smart. Secure. On device.", text: "Apple Intelligence runs directly on your Mac — keeping your data private — with Siri AI and Personal Intelligence built in." },
          { title: "macOS and Apple Intelligence", sub: "Easy to use. Easy to love.", text: "macOS Tahoe brings a stunning Liquid Glass design, reimagined Spotlight, and on-device AI across your favorite apps." },
          { title: "Mac + iPhone", sub: "Together they work wonders.", text: "Answer calls and messages from your iPhone on your Mac. Enjoy iPhone Mirroring, Apple Continuity, and Universal Clipboard." },
          { title: "Compatibility", sub: "Mac runs your favorite apps.", text: "Microsoft 365, Adobe Creative Cloud, Zoom, and thousands of other apps run beautifully on Mac." },
          { title: "Privacy and Security", sub: "Your business is nobody else's.", text: "Built-in protections keep your data safe by design, with aggressive steps to protect it in transit and at rest." },
        ]}
      />
      <SectionBlock
        title="Think different."
        text="Why Apple is the best place to shop Mac."
        links={[{ label: "Shop Mac", href: "/us/shop/goto/store" }]}
      />
      <TileGrid
        bg="bg-[#f5f5f7]"
        tiles={[
          { title: "Education", sub: "Gift card with education savings", text: "College students and educators save on Mac through the Apple Education Store." },
          { title: "Personal Setup", sub: "One-on-one online sessions", text: "Get step-by-step help with data transfer and learning the ins and outs of your new Mac." },
          { title: "Customize Your Mac", sub: "Choose chip, memory, storage, and color", text: "Build the Mac of your dreams with Apple silicon performance options and configuration. Only at Apple." },
          { title: "Delivery & Pickup", sub: "Get your order quickly and easily.", text: "Choose two-hour delivery, free next-day delivery, or pick up available items at an Apple Store." },
          { title: "Apple Trade In", sub: "Give us the old. Save on the new.", text: "Get a credit toward your next Mac when you trade in an eligible computer. If it's not eligible, we'll recycle it for free." },
          { title: "Apple Store App", sub: "Designed around you.", text: "Explore a shopping experience designed around you, from the Apple Store app." },
        ]}
      />
    </main>
  );
}