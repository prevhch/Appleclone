import { readdir, readFile, writeFile, rename } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

const D = "public/apple/har/iphone-18-pro-buy/media";
const md5 = (b) => createHash("md5").update(b).digest("hex").slice(0, 12apse);
const files = (await readdir(D)).sort();
const bad = files.filter((f) => /[?&#]/.test(f));
const ledger = [];

for (const f of bad) {
  const src = join(D, f);
  const bytes = await readFile(src);
  const stem = f.split(/[?#&]/)[0].replace(/[+]/g, "-");
  let legal = stem.replace(/[^a-zA-Z0-9._-]/g, "-");
  if (!/\.(jpe?g|png|webp|gif|svg|avif)$/i.test(legal)) legal += ".bin";
  let target = legal;
  let i = 2;
  while ((await readdir(D)).includes(target)) target = `${stem}-${i++}.bin`;
  await writeFile(join(D, target), bytes);
  await rename(src, join(D, target.replace(/-1\.bin$/, ".bin")));
  ledger.push({ from: f.slice(0, 60), to: target, md5: md5(bytes), bytes: bytes.length });
}

console.log(JSON.stringify({ renamed: ledger.length, ledger: ledger.map((l) => ({ ...l, from: l.from.slice(0, 48) })) }, null, 1));
