"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { PRODUCTS, PRODUCT } from "./catalog";

export type BagLine = {
  rid: string;
  productId: string;
  /** encoded selections: `groupId:optionId|groupId2:optionId2` */
  selection: string;
  qty: number;
};

export type BagState = { lines: BagLine[] };

const BAG_KEY = "apple.bag.v1";

export function encodeSelection(map: Record<string, string>): string {
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([g, o]) => `${g}:${o}`)
    .join("|");
}

export function decodeSelection(encoded: string): Record<string, string> {
  const out: Record<string, string> = {};
  if (!encoded) return out;
  encoded.split("|").forEach((part) => {
    const [g, o] = part.split(":");
    if (g && o) out[g] = o;
  });
  return out;
}

export function linePriceFor(productId: string, selection: string): number {
  const p = PRODUCTS[productId];
  if (!p) return 0;
  const sel = decodeSelection(selection);
  let total = p.price;
  for (const group of p.config) {
    const pick = sel[group.label];
    if (!pick) continue;
    const opt = group.options.find((o) => o.id === pick);
    if (opt?.priceDelta) total += opt.priceDelta;
  }
  return total;
}

export function bagLineSummary(line: BagLine) {
  const p = PRODUCTS[line.productId];
  if (!p) return null;
  const sel = decodeSelection(line.selection);
  const colors: string[] = [];
  const names: string[] = [];
  for (const group of p.config) {
    const pick = sel[group.label];
    const opt = group.options.find((o) => o.id === pick);
    if (opt) (group.label.toLowerCase() === "color" ? colors : names).push(opt.label);
  }
  const unitPrice = linePriceFor(line.productId, line.selection);
  const linePrice = unitPrice * line.qty;
  return { product: p, colors, names, unitPrice, linePrice };
}

let ridCounter = 0;
export function newRid() {
  ridCounter += 1;
  return `${Date.now().toString(36)}-${ridCounter}`;
}

export type BagCtx = BagState & {
  count: number;
  subtotal: number;
  add: (productId: string, selection: Record<string, string>, qty?: number) => void;
  setQty: (rid: string, qty: number) => void;
  remove: (rid: string) => void;
  clear: () => void;
  ready: boolean;
};

const Ctx = createContext<BagCtx | null>(null);

function readStored(): BagState {
  if (typeof window === "undefined") return { lines: [] };
  try {
    const raw = window.localStorage.getItem(BAG_KEY);
    if (!raw) return { lines: [] };
    const parsed = JSON.parse(raw) as BagState;
    if (!parsed || !Array.isArray(parsed.lines)) return { lines: [] };
    const valid = parsed.lines.filter(
      (l) => l && l.productId && PRODUCTS[l.productId] && typeof l.qty === "number" && l.qty > 0
    );
    return { lines: valid };
  } catch {
    return { lines: [] };
  }
}

function BagProviderInner({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<BagLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(readStored().lines);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(BAG_KEY, JSON.stringify({ lines }));
    } catch {
      /* storage unavailable — keep in-memory */
    }
  }, [lines, ready]);

  const add = useCallback(
    (productId: string, selection: Record<string, string>, qty = 1) => {
      const encoded = encodeSelection(selection);
      setLines((prev) => {
        const existing = prev.find((l) => l.productId === productId && l.selection === encoded);
        if (existing) {
          return prev.map((l) =>
            l === existing ? { ...l, qty: l.qty + qty } : l
          );
        }
        return [...prev, { rid: newRid(), productId, selection: encoded, qty }];
      });
    },
    []
  );

  const setQty = useCallback((rid: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.rid !== rid)
        : prev.map((l) => (l.rid === rid ? { ...l, qty } : l))
    );
  }, []);

  const remove = useCallback((rid: string) => {
    setLines((prev) => prev.filter((l) => l.rid !== rid));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<BagCtx>(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + linePriceFor(l.productId, l.selection) * l.qty, 0);
    return { lines, count, subtotal, add, setQty, remove, clear, ready };
  }, [lines, add, setQty, remove, clear, ready]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function BagProvider({ children }: { children: ReactNode }) {
  return <BagProviderInner>{children}</BagProviderInner>;
}

export function useBag() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBag must be used inside <BagProvider>");
  return ctx;
}
