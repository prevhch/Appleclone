"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SYMBOL } from "@/lib/store/catalog";

type LastOrder = {
  orderNumber: string;
  email: string;
  total: number;
  summary: { name: string; qty: number; unit: number }[];
  placedAt: string;
};

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<LastOrder | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      const raw = sessionStorage.getItem("last_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      setOrder(null);
    }
  }, [ready]);

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-20">
      <div className="mx-auto max-w-[560px] text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "rgb(0,102,204)", color: "#fff" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="mt-8 text-3xl font-semibold">Thanks for your order!</h1>

        {order ? (
          <div className="mt-6 text-[16px]" style={{ color: "rgb(110,110,115)" }}>
            <p>Your order is confirmed.</p>
            <p className="mt-1">
              Order number <span className="font-medium" style={{ color: "rgb(29,29,31)" }}>{order.orderNumber}</span>
            </p>
            <p className="mt-1">A mock receipt was emailed to <span className="font-medium" style={{ color: "rgb(29,29,31)" }}>{order.email || "your address"}</span></p>

            <div className="mt-8 rounded-2xl text-left" style={{ background: "rgb(245,245,247)" }}>
              {order.summary.map((it, i) => (
                <div key={i} className="flex justify-between border-b border-black/10 px-5 py-4 text-[15px]">
                  <span>{it.name} × {it.qty}</span>
                  <span>{SYMBOL}{(it.unit * it.qty).toLocaleString("en-US")}</span>
                </div>
              ))}
              <div className="flex justify-between px-5 py-4 text-[17px] font-semibold">
                <span>Total</span>
                <span>{SYMBOL}{order.total.toLocaleString("en-US")}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-6" style={{ color: "rgb(110,110,115)" }}>
            We couldn’t find a recent order in this browser session.
          </p>
        )}

        <div className="mt-10 space-x-4">
          <Link href="/" className="btn">Continue shopping</Link>
          <Link href="/us/shop/goto/bag" className="btn btn-secondary">View your Bag</Link>
        </div>
      </div>
    </main>
  );
}
