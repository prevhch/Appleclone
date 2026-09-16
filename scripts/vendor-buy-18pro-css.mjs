import { readFile, writeFile, mkdir, rename } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

const root = "/workspaces/Appleclone";
const dir = join(root, "public", "apple", "har", "iphone-18-pro-buy", "css");
const H = join(root, "public", "apple", "har", "iphone-18-pro-buy", "html", "index.html");
const html = await readFile(H, "utf8");

// The REAL bases this vendored buy html cites (extracted from on-disk html, not guessed).
const cited = [
  ...new Set(
    [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((u) => u.includes("store.storeimages.cdn-apple.com")),
  ),
];

// map a cited live base -> the local vendored-file name we will persist
const ledger = [];
for (let i = 0; i < cited.length; i++) {
  const url = cited[i];
  const local = `live-${i + 1}-buy.built.css`;
  const r = await fetch(url);
  const b = Buffer.from(await r.arrayBuffer());
  const md5 = createHash("md5").update(b).digest("hex").slice(0, 12);
  await writeFile(join(dir, local), b);
  ledger.push({ i: i + 1, status: r.status, bytes: b.length, md5, url: url.split("/").slice(5).join("/").slice(0, 90) });
}

console.log(JSON.stringify(ledger, null, 2));
const pairs = cited.map((u, i) => [u, `/apple/har/iphone-18-pro-buy/css/live-${i + 1}-buy.built.css`]);
console.log("pairs:", JSON.stringify(pairs, null, 1));
