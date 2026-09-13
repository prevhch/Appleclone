import Link from "next/link";

export default async function ShopCatchAll({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const path = (slug ?? []).join("/");
  return (
    <main className="mx-auto max-w-[800px] px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold">Shop — /{path || "store"}</h1>
      <p className="mt-4 text-[#6e6e73]">
        School-project stub for Apple Store checkout flow (bag, carrier deals, education
        store). Checkout APIs are not cloned.
      </p>
      <div className="mt-6 flex gap-4 justify-center text-[17px]">
        <Link href="/" className="link-blue">Home <span aria-hidden="true" className="chev">›</span></Link>
        <Link href="/us/shop/goto/bag" className="link-blue">Bag <span aria-hidden="true" className="chev">›</span></Link>
      </div>
    </main>
  );
}
