import Link from "next/link";
import Reveal from "@/components/Reveal";

export function ProductSubnav({ items, title }: { title: string; items: { label: string; href: string; tag?: string }[] }) {
  return (
    <div className="sticky top-11 z-40 bg-white/80 apple-nav-light border-b border-black/10">
      <div className="mx-auto max-w-[1024px] px-4 py-2 flex items-center justify-between">
        <span className="font-semibold text-[17px] mr-6">{title}</span>
        <ul className="flex gap-4 overflow-x-auto no-scrollbar text-[12px]">
          {items.map((i) => (
            <li key={i.label} className="whitespace-nowrap">
              <Link href={i.href} className="hover:underline">
                {i.label} {i.tag && <span className="text-[#b64400] text-[10px]">{i.tag}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProductHero({
  eyebrow,
  title,
  sub,
  links,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  sub: string;
  links: { label: string; href: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`text-center px-4 py-16 ${dark ? "bg-black text-white" : "bg-[#f5f5f7]"}`}>
      <Reveal>
        {eyebrow && <p className="text-[#b64400] text-sm font-semibold">{eyebrow}</p>}
        <h1 className="hero-title text-4xl md:text-6xl mt-2">{title}</h1>
        <p className="mt-3 text-xl md:text-2xl text-inherit opacity-80">{sub}</p>
        <div className="mt-4 flex gap-5 justify-center text-[17px]">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={dark ? "hero-link" : "link-blue"}>{l.label} <span aria-hidden="true" className="chev">›</span></Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export type ProductCard = {
  name: string;
  tag?: string;
  sub: string;
  colors?: string[];
  cta: { label: string; href: string }[];
  dark?: boolean;
};

export function ProductGrid({ products }: { products: ProductCard[] }) {
  return (
    <section className="mx-auto max-w-[1024px] px-4 py-12">
      <Reveal>
        <h2 className="text-[28px] font-semibold text-center mb-8">Explore the lineup.</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <Reveal key={p.name}>
            <div className={`rounded-2xl p-8 text-center ${p.dark ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}>
              {p.tag && <span className="inline-block text-[#b64400] text-[12px] font-semibold mb-2">{p.tag}</span>}
              <h3 className="text-[21px] font-semibold">{p.name}</h3>
              {p.colors && (
                <div className="flex gap-1.5 justify-center mt-2">
                  {p.colors.map((c) => (
                    <span key={c} className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: c }} />
                  ))}
                </div>
              )}
              <p className="mt-2 text-[15px] opacity-80">{p.sub}</p>
              <div className="mt-4 flex gap-5 justify-center text-[14px]">
                {p.cta.map((c) => (
                  <Link key={c.label} href={c.href} className={p.dark ? "hero-link" : "link-blue"}>
                    {c.label} <span aria-hidden="true" className="chev">›</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FeatureBlocks({ blocks }: { blocks: { title: string; sub: string; body: string }[] }) {
  return (
    <section className="mx-auto max-w-[1024px] px-4 py-12 grid md:grid-cols-2 gap-8">
      {blocks.map((b) => (
        <Reveal key={b.title}>
          <div className="rounded-2xl bg-[#f5f5f7] p-8 min-h-[220px]">
            <h3 className="text-xl font-semibold">{b.title}</h3>
            <p className="mt-1 font-medium">{b.sub}</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">{b.body}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
