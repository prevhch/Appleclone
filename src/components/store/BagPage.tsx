"use client";

import Link from "next/link";
import { PRODUCTS, SYMBOL } from "@/lib/store/catalog";
import { useBag, decodeSelection, linePriceFor, bagLineSummary } from "@/lib/store/bag-context";

function SwatchTile({ swatch }: { swatch: string }) {
  return (
    <span
      className="inline-block h-6 w-6 rounded-full align-middle"
      style={{ background: swatch, boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)" }}
      aria-hidden="true"
    />
  );
}

export default function BagPage() {
  const bag = useBag();
  const { lines, count, subtotal, ready } = bag;

  if (!ready) {
    return (
      <main className="mx-auto max-w-[1000px] px-6 py-16">
        <h1 className="text-3xl font-semibold">Your Bag</h1>
        <p className="mt-4" style={{ color: "rgb(110,110,115)" }}>Loading…</p>
      </main>
    );
  }

  if (lines.length === 0) {
    return (
      <main className="mx-auto max-w-[1000px] px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Your Bag is empty.</h1>
        <p className="mt-3" style={{ color: "rgb(110,110,115)" }}>
          Add your favorite products to get started.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/iphone" className="btn">Shop iPhone</Link>
          <Link href="/mac" className="btn btn-secondary">Shop Mac</Link>
        </div>
      </main>
    );
  }

  const tax = Math.round(subtotal * 0.0675);
  const total = subtotal + tax;

  return (
    <main className="mx-auto max-w-[1024px] px-6 py-16">
      <h1 className="text-3xl font-semibold">
        Your Bag <span className="text-[17px] font-normal" style={{ color: "rgb(110,110,115)" }}>
          ({count} {count === 1 ? "item" : "items"})
        </span>
      </h1>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_360px]">
        {/* Lines */}
        <ul className="divide-y divide-black/10">
          {lines.map((l) => {
            const p = PRODUCTS[l.productId];
            if (!p) return null;
            const sel = decodeSelection(l.selection);
            const unit = linePriceFor(l.productId, l.selection);
            const lineTotal = unit * l.qty;
            return (
              <li key={l.rid} className="flex flex-wrap items-start gap-4 py-6 sm:flex-nowrap">
                <span
                  className="grid h-24 w-24 place-items-center rounded-2xl text-center text-[12px] leading-tight"
                  style={{ background: "rgb(245,245,247)" }}
                >
                  {p.name.split(" ").slice(0, 2).join("\n")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[17px] font-semibold">{p.name}</h2>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px]" style={{ color: "rgb(110,110,115)" }}>
                    {bagLineSummary(l)?.names.map((n) => <span key={n}>{n}</span>)}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]" style={{ color: "rgb(110,110,115)" }}>
                    {bagLineSummary(l)?.colors.map((c) => <span key={c} className="inline-flex items-center gap-1.5"><SwatchTile swatch={c} />{c}</span>)}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-black/10 p-0.5">
                      <button
                        aria-label={`Decrease quantity of ${p.name}`}
                        onClick={() => bag.setQty(l.rid, l.qty - 1)}
                        className="px-2.5 py-0.5"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-[15px] font-medium">{l.qty}</span>
                      <button
                        aria-label={`Increase quantity of ${p.name}`}
                        onClick={() => bag.setQty(l.rid, l.qty + 1)}
                        className="px-2.5 py-0.5"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => bag.remove(l.rid)}
                      className="text-[13px] hover:underline"
                      style={{ color: "rgb(0,102,204)" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-[17px] font-semibold">{SYMBOL}{lineTotal.toLocaleString("en-US")}</p>
              </li>
            );
          })}
        </ul>

        {/* Summary */}
        <aside className="rounded-2xl p-6 lg:sticky lg:top-20" style={{ background: "rgb(245,245,247)" }}>
          <div className="flex justify-between" style={{ color: "rgb(110,110,115)" }}>
            <span>Subtotal</span>
            <span>{SYMBOL}{subtotal.toLocaleString("en-US")}</span>
          </div>
          <div className="mt-2 flex justify-between" style={{ color: "rgb(110,110,115)" }}>
            <span>Taxes (est.)</span>
            <span>{SYMBOL}{tax.toLocaleString("en-US")}</span>
          </div>
          <div className="mt-2 flex justify-between" style={{ color: "rgb(110,110,115)" }}>
            <span>Shipping</span>
            <span style={{ color: "rgb(29,156,45)" }}>Free</span>
          </div>
          <div className="mt-4 flex justify-between border-t pt-4 text-[17px] font-semibold" style={{ borderColor: "rgba(0,0,0,.1)" }}>
            <span>Total</span>
            <span>{SYMBOL}{total.toLocaleString("en-US")}</span>
          </div>
          <Link href="/checkout" className="btn mt-6 block w-full text-center">Check Out</Link>
          <p className="mt-3 text-[12px]" style={{ color: "rgb(110,110,115)" }}>
            Mock checkout — no real payment is processed in this school-project clone.
          </p>
        </aside>
      </div>
    </main>
  );
}
