import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const D = "public/apple/har/iphone-18-pro-buy/media";
const P = "src/app/us/shop/goto/buy_iphone/iphone_18_pro/page.tsx";

const onDisk = new Set(readdirSync(D));
const page = readFileSync(P, "utf8");

const cited = [...page.matchAll(/src=["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);

const broken = cited
  .filter((s) => s.startsWith("/apple/har/iphone-18-pro-buy/media/"))
  .map((s) => s.replace(/^.*\/media\//, ""))
  .filter((b) => !onDisk.has(b));

const good = cited
  .filter((s) => s.startsWith("/apple/har/iphone-18-pro-buy/media/"))
  .map((s) => s.replace(/^.*\/media\//, ""))
  .filter((b) => onDisk.has(b));

console.log(JSON.stringify(
  {
    cited_total: cited.length,
    media_cited: good.length + broken.length,
    media_bound_good: good.length,
    media_broken: broken.length,
    broken_basenames: broken,
    on_disk_sorted_first: [...onDisk].sort().slice(0, 30),
  },
  null,
  1
));
