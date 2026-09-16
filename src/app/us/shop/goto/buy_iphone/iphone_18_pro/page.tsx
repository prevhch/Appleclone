import { readFile } from "node:fs/promises";
import { join } from "node:path";

const HAR = join(
  process.cwd(),
  "public",
  "apple",
  "har",
  "iphone-18-pro-buy",
  "html",
  "index.html",
);

// Byte-honest: swap ONLY the 6 live CDN css bases the vendored html cites, to
// the md5-ledgered local vendored bytes (real, on-disk, same bytes). Nothing
// else is rewritten; no black bg, no extra nav rail — Apple's real 2 navs
// (globalnav + buy localnav) and real color-swap media stay exactly as served.
const CSS = [
  ["https://www.apple.com/ac/globalnav/7/en_US/styles/ac-globalnav.built.css", "/apple/har/iphone-18-pro-buy/css/live-1-ac-globalnav.built.css"],
  ["https://www.apple.com/ac/localnav/12/styles/ac-localnav.built.css", "/apple/har/iphone-18-pro-buy/css/live-2-ac-localnav.built.css"],
  ["https://www.apple.com/v/iphone-18-pro/i/built/styles/overview.built.css", "/apple/har/iphone-18-pro-buy/css/live-3-overview.built.css"],
  ["https://www.apple.com/ac/globalfooter/8/en_US/styles/ac-globalfooter.built.css", "/apple/har/iphone-18-pro-buy/css/live-4-ac-globalfooter.built.css"],
  ["https://www.apple.com/v/iphone-18-pro/i/built/styles/iphone-18-pro.built.css", "/apple/har/iphone-18-pro-buy/css/live-5-iphone-18-pro.built.css"],
  ["https://www.apple.com/v/iphone-18-pro/i/built/styles/main.built.css", "/apple/har/iphone-18-pro-buy/css/live-6-main.built.css"],
];

export default async function BuyIPhone18ProPage() {
  let html = (await readFile(HAR)).toString("utf8");
  for (const [live, local] of CSS) html = html.split(live).join(local);
  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}
