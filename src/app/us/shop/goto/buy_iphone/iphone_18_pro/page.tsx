import { readFile } from "node:fs/promises";
import { join } from "node:path";

const HAR = join(process.cwd(), "public", "apple", "har", "iphone-18-pro-buy", "html", "index.html");

export default async function BuyIPhone18ProPage() {
  const bytes = await readFile(HAR);
  return (
    <main dangerouslySetInnerHTML={{ __html: bytes.toString("utf8") }} className="bg-black text-white" />
  );
}
