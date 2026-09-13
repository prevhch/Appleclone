import { ProductSubnav, ProductHero, TileGrid, SectionBlock } from "@/components/Product";

export const metadata = { title: "Apple Vision Pro" };

export default function VisionProPage() {
  return (
    <main>
      <ProductSubnav
        title="Vision Pro"
        items={[
          { label: "Overview", href: "/apple-vision-pro" },
          { label: "Tech Specs", href: "/apple-vision-pro" },
          { label: "visionOS", href: "/apple-vision-pro" },
          { label: "Book a demo", href: "/apple-vision-pro" },
          { label: "Buy", href: "/us/shop/goto/store" },
        ]}
      />
      <ProductHero
        title="Apple Vision Pro"
        sub="New powerful M5 chip and comfortable Dual Knit Band."
        links={[
          { label: "Book a demo", href: "/apple-vision-pro" },
          { label: "Buy", href: "/us/shop/goto/store" },
        ]}
        dark
      />
      <SectionBlock
        text="Apple Vision Pro seamlessly blends digital content with your physical space. So you can work, watch, relive memories, and connect in ways never before possible. The era of spatial computing is here."
      />
      <TileGrid
        tiles={[
          { title: "Entertainment", sub: "The ultimate theater. Wherever you are.", text: "More pixels than a 4K TV for each eye, Spatial Audio, and Immersive Video — a 180-degree, 3D, 8K experience with Spatial Audio." },
          { title: "Productivity", sub: "A workspace with infinite space.", text: "Mac Virtual Display gives you Mac screen real estate wherever you look, with 5K monitors, ultrawide, and stereoscopic views." },
          { title: "Photos and Videos", sub: "Be in the moment. All over again.", text: "Spatial photos and videos, AI search, custom memory movies, and capture with the top button and EyeSight recording indicator." },
          { title: "Connection", sub: "Share quality time. And space.", text: "Persona, life-size FaceTime tiles, SharePlay, and spatial Audio caller placement make connection feel real." },
          { title: "Apps", sub: "Do what you love. Reimagine how you do it.", text: "Familiar apps like Safari, Photos, Music, and Messages, plus the App Store for visionOS and compatible iPad and iPhone apps." },
          { title: "visionOS", sub: "An operating system designed for spatial.", text: "Built on the foundation of macOS, iOS, and iPadOS. Navigate with your eyes, hands, and voice. Environments transport you to Yosemite, Bora Bora, and beyond." },
          { title: "Technology", sub: "Innovation you can see, hear, and feel.", text: "Dual-chip design: the new M5 runs visionOS and computer vision with up to 120Hz, while R1 processes camera and sensor data in 12 milliseconds." },
          { title: "Design", sub: "Designed to make a difference.", text: "Optic ID with Secure Enclave, privacy-by-design camera and sensor processing, and 100 percent recycled aluminum in the frame and battery enclosure." },
        ]}
      />
      <SectionBlock
        title="An exciting new platform."
        sub="A world of new opportunities for developers."
        text="Xcode, SwiftUI, RealityKit, ARKit, Unity, and Reality Composer Pro for building spatial experiences."
        links={[{ label: "Learn more about developing for visionOS", href: "/apple-vision-pro" }]}
      />
    </main>
  );
}