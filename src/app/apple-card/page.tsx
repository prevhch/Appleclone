import { ProductSubnav, BannerBar, TileGrid } from "@/components/Product";
import Link from "next/link";

export const metadata = { title: "Apple Card" };

export default function AppleCardPage() {
  return (
    <main>
      <BannerBar
        text="Pre-order iPhone 18 Pro now and get 3% Daily Cash back when you pay with Apple Card."
      />
      <ProductSubnav
        title="Apple Card"
        items={[
          { label: "Overview", href: "/apple-card" },
          { label: "Features", href: "/apple-card" },
          { label: "Family", href: "/apple-card" },
          { label: "Monthly Installments", href: "/apple-card" },
          { label: "How-To Videos", href: "/apple-card" },
        ]}
      />
      <TileGrid
        bg="bg-white"
        heading="Apple Card"
        subheading="The simplicity of Apple. In a credit card."
        cta={{ label: "Apply now", href: "https://card.apple.com/apply/application" }}
        tiles={[
          { title: "Built for iPhone", sub: "Created by Apple. Powered by iPhone.", text: "Apple Card lives in the Wallet app. Apply in as little as a minute and use it with Apple Pay — no plastic required." },
          { title: "Unlimited Daily Cash", sub: "Real cash back. Every day.", text: "Get 3% Daily Cash back at Apple, 2% when you use Apple Card with Apple Pay, and 1% with the titanium card. No limit, and it never expires." },
          { title: "No fees", sub: "No fees. Not even hidden ones.", text: "No annual, late, over-the-limit, or international fees. Variable APRs range from 17.49% to 27.74% based on creditworthiness." },
          { title: "Titanium Card", sub: "Goodbye, plastic. Hello, titanium.", text: "A laser-etched titanium card with your name — no card number on the card at all. 1% Daily Cash with every purchase." },
          { title: "Privacy and Security", sub: "Your card. Your info. Your business.", text: "Face ID, Touch ID, unique transaction codes, and no visible card number on your devices. Apple never shares or sells your data." },
          { title: "Apple Card Family", sub: "Healthy finances. Family style.", text: "Combine your credit limits with an owner, share your card with participants, and help teens build credit with Spending Limits." },
          { title: "Apple Card Monthly Installments", sub: "Pay over time, interest-free.", text: "Pay for your new Apple products over time at 0% interest, and get 3% Daily Cash back up front on your purchase." },
          { title: "Save and Earn Interest", sub: "Grow your Daily Cash over time.", text: "Open a Savings account through Apple Card and your Daily Cash automatically earns interest, with no minimums or fees." },
          { title: "Financial Health", sub: "Tools to help you make healthy choices.", text: "Get spending totals by category, colorful weekly and monthly summaries, and help with a better understanding of your spending." },
        ]}
      />
      <section className="bg-[#f5f5f7] py-14">
        <div className="max-w-[1024px] mx-auto px-4 text-center">
          <h2 className="text-[28px] font-semibold">Get started with Apple Card.</h2>
          <p className="mt-2 text-[17px] text-[#6e6e73]">Apply in minutes to see if you&apos;re approved with no impact to your credit score.</p>
          <p className="mt-5 text-[17px]">
            <Link href="https://card.apple.com/apply/application" className="link-blue">Apply now <span aria-hidden="true" className="chev">›</span></Link>
          </p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="max-w-[1024px] mx-auto px-4 text-center">
          <h2 className="text-[28px] font-semibold mb-6">More for your finances.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Wallet", sub: "Carry one thing. Everything." },
              { name: "Apple Pay", sub: "Pay the Apple way." },
              { name: "Apple Cash", sub: "Send it. Spend it. Stash it." },
            ].map((w) => (
              <div key={w.name} className="rounded-2xl bg-[#f5f5f7] p-8">
                <h3 className="text-lg font-semibold">{w.name}</h3>
                <p className="mt-2 text-[15px] text-[#6e6e73]">{w.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}