import { readFile } from "node:fs/promises";
import { join } from "node:path";

const BASE = join(process.cwd(), "public", "apple", "har", "iphone-18-pro-buy", "html", "index.html");

const CSS_LEDGER = [
  ["live-1-ac-globalnav.built.css", "ac-globalnav"],
  ["live-2-ac-localnav.built.css", "ac-localnav"],
  ["live-3-overview.built.css", "overview"],
  ["live-4-ac-globalfooter.built.css", "ac-globalfooter"],
  ["live-5-iphone-18-pro.built.css", "iphone-18-pro"],
  ["live-6-main.built.css", "main"],
];

export default async function BuyIPhone18ProPage() {
  let html = (await readFile(BASE)).toString("utf8");

  // Byte-honest localization: the live page cites absolute apple.com css URLs;
  // on our host those resolve nowhere → nothing styles. Swap ONLY the base to
  // the md5-identical vendored css bytes on disk. Same bytes, local origin.
  for (const [file, name] of CSS_LEDGER) {
    const local = `/apple/har/${name}`;
    html = html.replace(
      new RegExp(`https://www\\.apple\\.com/v/iphone-18-pro/i/built/styles/${name}[^"']*`),
      local,
    );
    html = html.replace(
      new RegExp(`https://www\\.apple\\.com/ac/globalnav/[^"']*`),
      "/apple/har/globalnav",
    );
  }

  return <main dangerouslySetInnerHTML={{ __html: html }} className="bg-black text-white" />;
}
