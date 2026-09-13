import Link from "next/link";

export const metadata = { title: "Search" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const results = [
    { label: "iPhone 18 Pro", href: "/iphone-18-pro" },
    { label: "iPhone Duo", href: "/iphone-duo" },
    { label: "Mac", href: "/mac" },
    { label: "iPhone", href: "/iphone" },
    { label: "Watch Series 12", href: "/apple-watch-series-12" },
  ].filter((r) => !q || r.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <main className="mx-auto max-w-[800px] px-4 py-16">
      <h1 className="text-3xl font-semibold">Search {q ? `— ${q}` : ""}</h1>
      <ul className="mt-6 space-y-3">
        {results.map((r) => (
          <li key={r.label}>
            <Link href={r.href} className="link-blue text-lg">{r.label} <span aria-hidden="true" className="chev">›</span></Link>
          </li>
        ))}
        {results.length === 0 && <li>No results found.</li>}
      </ul>
    </main>
  );
}
