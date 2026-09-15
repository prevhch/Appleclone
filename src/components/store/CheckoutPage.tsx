"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PRODUCTS, SYMBOL } from "@/lib/store/catalog";
import { useBag, bagLineSummary, linePriceFor } from "@/lib/store/bag-context";

export default function CheckoutPage() {
  const bag = useBag();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [placing, setPlacing] = useState(false);

  const ready = bag.ready && bag.lines.length > 0;
  const subtotal = bag.subtotal;
  const shipping = subtotal >= 150 || subtotal <= 0 ? 0 : 5;
  const tax = Math.round(subtotal * 0.065 * 100) / 100;
  const total = subtotal + shipping + tax;

  const orderNumber =
    "W" + String(Date.now()).slice(-11) + Math.floor(Math.random() * 90 + 10);

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    if (placing || !ready) return;
    setPlacing(true);
    const summary = bag.lines.map((l) => {
      const s = bagLineSummary(l);
      return { name: s?.product.name, qty: l.qty, unit: linePriceFor(l.productId, l.selection) };
    });
    sessionStorage.setItem(
      "last_order",
      JSON.stringify({ orderNumber, email, total, summary, placedAt: new Date().toISOString() })
    );
    bag.clear();
    router.push("/us/shop/goto/order_confirmation");
  }

  if (!ready) {
    return (
      <main className="mx-auto max-w-[1000px] px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <p className="mt-4" style={{ color: "rgb(110,110,115)" }}>
          Your bag is empty — nothing to check out yet.
        </p>
        <p className="mt-8"><Link href="/us/shop/goto/bag" className="link-blue">Back to your Bag</Link></p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-16">
      <Link href="/us/shop/goto/bag" className="text-[14px]" style={{ color: "rgb(0,102,204)" }}>
        ‹ Back to your Bag
      </Link>
      <h1 className="mt-4 text-3xl font-semibold">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <form onSubmit={placeOrder} className="space-y-9">
          <section>
            <h2 className="text-lg font-semibold">1. Contact</h2>
            <label className="mt-3 block">
              <span className="text-[14px]" style={{ color: "rgb(110,110,115)" }}>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/15 px-4 py-3 text-[15px] outline-none focus:border-[#06c]"
              />
            </label>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Delivery</h2>
            <p className="mt-2 text-[13px]" style={{ color: "rgb(110,110,115)" }}>
              School-project demo — no address is collected or shipped.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Payment (demo only)</h2>
            <p className="mt-2 text-[13px]" style={{ color: "rgb(110,110,115)" }}>
              No real payment is processed. Enter nothing — just place the order.
            </p>
          </section>

          <button type="submit" disabled={placing} className="btn">
            {placing ? "Placing order…" : "Place your order"}
          </button>
          <p className="text-[12px]" style={{ color: "rgb(110,110,115)" }}>
            This is a mock checkout for a school project. No card is charged and no order is sent.
          </p>
        </form>

        <aside className="h-fit rounded-2xl p-6" style={{ background: "rgb(245,245,247)" }}>
          <h2 className="text-lg font-semibold">Order summary</h2>
          <ul className="mt-4 divide-y divide-black/10">
            {bag.lines.map((l) => {
              const s = bagLineSummary(l);
              if (!s) return null;
              return (
                <li key={l.rid} className="flex justify-between gap-4 py-3 text-[14px]">
                  <span>{s.product.name} × {l.qty}</span>
                  <span>{SYMBOL}{(s.unitPrice * l.qty).toLocaleString("en-US")}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 space-y-1 border-t border-black/10 pt-4 text-[14px]" style={{ color: "rgb(110,110,115)" }}>
            <div className="flex justify-between"><span>Subtotal</span><span>{SYMBOL}{subtotal.toLocaleString("en-US")}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping ? SYMBOL + shipping : "Free"}</span></div>
            <div className="flex justify-between"><span>Estimated tax</span><span>{SYMBOL}{tax.toLocaleString("en-US")}</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-black/10 pt-4 text-[17px] font-semibold">
            <span>Total</span><span>{SYMBOL}{total.toLocaleString("en-US")}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
