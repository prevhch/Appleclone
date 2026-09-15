import { notFound } from "next/navigation";

const KNOWN = new Set([
  "bag",
  "checkout",
  "order_confirmation",
  "buy_iphone/iphone_17",
]);

export default async function ShopCatchAll({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const path = (slug ?? []).join("/");
  if (!KNOWN.has(path)) notFound();
  return <main className="min-h-[60vh]" />;
}
