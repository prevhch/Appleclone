import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const md5 = (b) => createHash("md5").update(b).digest("hex").slice(0, 12);

const HAR = "public/apple/har/iphone-18-pro-buy/html/index.html";
const ROUTE = "src/app/us/shop/goto/buy_iphone/iphone_18_pro/route.ts";

const html = await readFile(HAR, "utf8");
const route = await readFile(ROUTE, "utf8");

// (a) exact live bases the vendored html cites via store.storeimages
const citedBases = [...new Set([...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*store\.storeimages[^"]*)"/g)].map((m) => m[1]))];
console.log("CITED", citedBases.length, "buy css bases\n");
for (const b of citedBases) console.log("  LIVE", b.split("/static-resources/")[1] || b.slice(-50));

// (b) exact on-disk css basenames + per-file md5 (the only disk truth)
const D = "public/apple/har/iphone-18-pro-buy/css";
const files = (await readdir(D)).filter((f) => f.endsWith(".built.css")).sort();
console.log("\nDISK", files.length, "on-disk .built.css (basename + md5):");
for (const f of files) {
  const b = await readFile(join(D, f));
  console.log("  ", md5(b), b.length, f);
}
const distinctMd5 = new Set();
for (const f of files) {
  const b = await readFile(join(D, f));
  distinctMd5.add(md5(b));
}
console.log("\n  distinct md5 on disk:", distinctMd5.size);

// (c) route.ts swap targets
const targets = [...route.matchAll(/\["[^"]+",\s*"(\/apple\/har\/iphone-18-pro-buy\/css\/[a-z0-9-.@]+\.built\.css)"/g)].map((m) => m[1]);
console.log("\nROUTE targets", targets.length, ":");
for (const t of targets) console.log("  ", t.split("/").pop());
