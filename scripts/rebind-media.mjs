import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";

const HTML = "public/apple/har/iphone-18-pro-buy/html/index.html";
const MEDIA = "public/apple/har/iphone-18-pro-buy/media";

const html = execFileSync("git", ["show", "HEAD:" + HTML], { maxBuffer: 512 * 1024 * 1024 }).toString("utf8");
const onDisk = new Set(readdirSync(MEDIA));
const diskBytes = (b) => (onDisk.has(b) ? statSync(MEDIA + "/" + b).size : null);

const groups = new Map();
const re = /\/media\/([a-zA-Z0-9_.-]+?)(?:[?#]|["')\s])/g;
let m;
while ((m = re.exec(html))) {
  const base = m[1].replace(/\.[a-zA-Z0-9]{1,8}$/, "");
  const ctx = html.slice(Math.max(0, m.index - 130), m.index).replace(/\s+/g, " ").slice(-100);
  if (!groups.has(base)) groups.set(base, { bytes: diskBytes(base), ctx });
}

const rows = [...groups.entries()].sort((a, b) => (b[1].bytes ?? 0) - (a[1].bytes ?? 0));

console.log("basenames Apple html cites — hero first (largest on-disk bytes first):");
for (const [b, { bytes, ctx }] of rows.slice(0, 10)) {
  console.log(`  ${String(bytes ?? "MISSING").padStart(9)}  ${b}`);
  console.log(`     ${ctx}`);
}
console.log(`\ncited=${rows.length}  on-disk=${onDisk.size}`);
