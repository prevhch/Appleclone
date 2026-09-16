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

// Byte-honest: the vendored file IS Apple's real standalone document (verified
// on disk: <!DOCTYPE html>, real title "Shop iPhone 18 Pro and iPhone 18 Pro
// Max - Apple", real 7 stylesheet links, real globalnav). Serve those exact
// bytes with ONLY the 6 live CDN css bases the vendored doc cites swapped to
// the md5-ledgered local vendored bytes. No React wrapper, no <main>, no added
// nav rail, no black bg — the document renders byte-for-byte as Apple served.
const CSS = [
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-globalelements-2.25.0-4bbf8/dist/ac-globalnav.css", "/apple/har/iphone-18-pro-buy/css/live-1-ac-globalnav.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-external-1.74.1-85ac2/dist/us/external.css", "/apple/har/iphone-18-pro-buy/css/live-2-external.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-vendor-1.36.0-38108/dist/common-css@1.3.3/dist/common.css", "/apple/har/iphone-18-pro-buy/css/live-3-common.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-iphone-2.40.3-c694b/dist/step1evolution.css", "/apple/har/iphone-18-pro-buy/css/live-4-step1evolution.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/Catalog/global/css/dd/buy-flow/iphone.css", "/apple/har/iphone-18-pro-buy/css/live-5-buy-flow-iphone.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/Catalog/global/css/web/fee/buy-flow/iphone/as-iphone-18pro.css", "/apple/har/iphone-18-pro-buy/css/live-6-as-iphone-18pro.built.css"],
];

export async function GET() {
  let html = (await readFile(HAR)).toString("utf8");
  for (const [live, local] of CSS) html = html.split(live).join(local);
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
