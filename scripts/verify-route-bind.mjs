import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { execSync } from "node:child_process";

const D = "public/apple/har/iphone-18-pro-buy/css";
const R = "src/app/us/shop/goto/buy_iphone/iphone_18_pro/route.ts";
const md5 = (b) => createHash("md5").update(b).digest("hex").slice(0, 12059);

const route = await readFile(R, "utf8");
const cited = [...new Set([...route.matchAll(/\/apple\/har\/iphone-18-pro-buy\/css\/(live-[0-9]-[a-z0-9@_.-]+\.built\.css)/g)].map((m) => m[1]))];

const onDisk = {};
for (const f of await readdir(D)) {
  if (!f.endsWith(".built.css")) continue;
  onDisk[f] = md5(await readFile(join(D, f)));
}

const distinct = new Set(Object.values(onDisk));
const allCited = cited.every((n) => Object.prototype.hasOwnProperty.call(onDisk, n));
const citedDistinct = new Set(cited.filter((n) => onDisk[n])).size;

console.log(JSON.stringify({
  citedBases: cited,
  citedCount: cited.length,
  allCitedExistOnDisk: allCited,
  md5s: onDisk,
  distinctOnDisk: distinct.size,
  citedDistinctMd5s: citedDistinct,
  honest: distinct.size === cited.length && allCited && citedDistinct === cited.length,
}, null, 2));
