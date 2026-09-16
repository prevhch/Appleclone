import { readdirSync, readFileSync } from "node:fs";

const D = "public/apple/har/iphone-18-pro-buy/media";
const P = "src/app/us/shop/goto/buy_iphone/iphone_18_pro/page.tsx";

const onDisk = new Set(readdirSync(D));
const page = readFileSync(P, "utf8");

const cited = new Set();
const ptn = /media\/([a-zA-Z0-9._-]+?)(?:["'`\s)>?&]|\.(?:jpe?g|png|webp|avif))/g;
let m;
while ((m = ptn.exec(page))) cited.add(m[1].replace(/\.(?:jpe?g|png|webp|avif)$/, "").replace(/[?#].*$/, ""));

const missing = [...cited].filter((b) => !onDisk.has(b));
const good = [...cited].filter((b) => onDisk.has(b));

console.log(JSON.stringify(
  {
    onDisk: onDisk.size,
    cited: cited.size,
    good: good.length,
    missing: missing.length,
    missingNames: missing.slice(0, 20),
    goodNames: good.slice(0, 20),
  },
  null,
  1
));
