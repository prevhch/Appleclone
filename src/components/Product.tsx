import Link from "next/link";
import Reveal from "@/components/Reveal";

export function ProductSubnav({
  items,
  title,
  dark = false,
}: {
  title: string;
  items: { label: string; href: string; tag?: string }[];
  dark?: boolean;
}) {
  return (
    <div
      className={`sticky top-11 z-40 ${
        dark ? "bg-black/70 backdrop-blur-md border-b border-white/15" : "bg-white/80 apple-nav-light border-b border-black/10"
      }`}
    >
      <div className={`mx-auto max-w-[1024px] px-4 py-2 flex items-center justify-between ${dark ? "text-white" : ""}`}>
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

/** Thin announcement banner Apple shows at the top of marketing pages. */
export function BannerBar({ text, cta }: { text: string; cta?: { label: string; href: string } }) {
  return (
    <div className="bg-white border-b border-black/10 text-center px-4 py-3 text-[15px] md:text-[17px]">
      {text}{" "}
      {cta && (
        <Link href={cta.href} className="link-blue whitespace-nowrap">
          {cta.label} <span aria-hidden="true" className="chev">›</span>
        </Link>
      )}
    </div>
  );
}

export function ProductHero({
  eyebrow,
  title,
  sub,
  price,
  avail,
  links,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  sub: string;
  price?: string;
  avail?: string;
  links: { label: string; href: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`text-center px-4 py-16 ${dark ? "bg-black text-white" : "bg-[#f5f5f7]"}`}>
      <Reveal>
        {eyebrow && <p className="text-[#b64400] text-sm font-semibold">{eyebrow}</p>}
        <h1 className="hero-title text-4xl md:text-6xl mt-2">{title}</h1>
        <p className="mt-3 text-xl md:text-2xl px-4 text-inherit opacity-80">{sub}</p>
        {price && <p className="mt-4 text-[17px] font-medium text-inherit">{price}</p>}
        {avail && <p className="mt-1.5 text-[15px] text-[#6e6e73]">{avail}</p>}
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 justify-center text-[17px]">
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
  price?: string;
  avail?: string;
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
                <p className="mt-1.5 text-[13px] text-[#6e6e73]">{p.colors.join(" · ")}</p>
              )}
              <p className="mt-2 text-[15px] opacity-80">{p.sub}</p>
              {p.price && <p className="mt-2 text-[14px] font-medium">{p.price}</p>}
              {p.avail && <p className="mt-1 text-[13px] text-[#6e6e73]">{p.avail}</p>}
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

export function SectionTitle({ title, sub, cta }: { title: string; sub?: string; cta?: { label: string; href: string } }) {
  return (
    <div className="max-w-[1024px] mx-auto px-4 text-center">
      <h2 className="text-[28px] md:text-[32px] font-semibold">{title}</h2>
      {sub && <p className="mt-2 text-[17px] text-[#6e6e73]">{sub}</p>}
      {cta && (
        <p className="mt-4 text-[17px]">
          <Link href={cta.href} className="link-blue">
            {cta.label} <span aria-hidden="true" className="chev">›</span>
          </Link>
        </p>
      )}
    </div>
  );
}

export type Tile = { title: string; sub?: string; text?: string; link?: { label: string; href: string } };

/** Card grid used for feature sections and "shop" tiles, Apple two-column tile style. */
export function TileGrid({
  heading,
  subheading,
  cta,
  tiles,
  bg = "bg-white",
  cols = 2,
}: {
  heading?: string;
  subheading?: string;
  cta?: { label: string; href: string };
  tiles: Tile[];
  bg?: string;
  cols?: 2 | 3;
}) {
  return (
    <section className={`py-12 ${bg}`}>
      <div className="max-w-[1024px] mx-auto px-4">
        {heading && <SectionTitle title={heading} sub={subheading} cta={cta} />}
        <div className={`grid ${cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6 mt-8`}>
          {tiles.map((t) => (
            <Reveal key={t.title}>
              <div className={`rounded-2xl p-8 min-h-[180px] ${bg === "bg-white" ? "bg-[#f5f5f7]" : "bg-white"}`}>
                <h3 className="text-lg font-semibold">{t.title}</h3>
                {t.sub && <p className="mt-1 font-medium text-[15px]">{t.sub}</p>}
                {t.text && <p className="mt-2 text-[15px] text-[#6e6e73]">{t.text}</p>}
                {t.link && (
                  <p className="mt-3 text-[14px]">
                    <Link href={t.link.href} className="link-blue">
                      {t.link.label} <span aria-hidden="true" className="chev">›</span>
                    </Link>
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionBlock({
  title,
  sub,
  text,
  links,
  dark = false,
  bg = "bg-[#f5f5f7]",
}: {
  title?: string;
  sub?: string;
  text?: string;
  links?: { label: string; href: string }[];
  dark?: boolean;
  bg?: string;
}) {
  return (
    <section className={`py-16 px-4 text-center ${dark ? "bg-black text-white" : bg}`}>
      <Reveal>
        {title && <h2 className="text-[28px] md:text-[32px] font-semibold">{title}</h2>}
        {sub && <p className="mt-2 text-[17px] md:text-[19px] opacity-80">{sub}</p>}
        {text && <p className="mx-auto mt-3 max-w-[600px] text-[15px] text-[#6e6e73]">{text}</p>}
        {links && (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 justify-center text-[17px]">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className={dark ? "hero-link" : "link-blue"}>
                {l.label} <span aria-hidden="true" className="chev">›</span>
              </Link>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}