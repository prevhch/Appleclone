import { createRequire } from "node:module";

const require = createRequire(process.cwd() + "/package.json");
const { chromium } = require("playwright");

const SELS = [
  ".rf-bfe",
  ".rf-bfe-header-wrapper",
  ".rf-bfe-header",
  ".rf-bfe-header h1",
  ".rf-bfe-header-price",
  ".rf-bfe-header-rightsection",
  ".rf-bfe-main",
  ".rf-bfe-column-left",
  ".rf-bfe-column-right",
  ".rf-bfe-gallery-content",
  ".rf-bfe-gallery-item",
  ".rf-bfe-gallery-image",
  ".rf-bfe-gallery-info-content",
  ".rc-gallery-dotnav",
  ".rc-gallery-paddlenav",
  ".rf-bfe-dimension-header",
  ".rf-bfe-dimension-title",
  ".form-selector",
  ".form-selector-label",
  ".form-selector-title",
  ".form-selector-list-header",
  ".rf-bfe-config-options-price",
  ".colornav-items",
  ".colornav-item",
  ".colornav-swatch",
  ".colornav-label",
  ".rc-decisionsection",
  ".rf-bfe-summary",
  ".rf-bfe-summary-price-title",
  ".rf-bfe-summary-price-box",
  ".rf-bfe-summary-image",
  ".rf-bfe-summary-image-headline",
  ".rf-bfe-stickybar",
  ".rf-bfe-stickybar-header",
  ".dd-compare-header",
  ".dd-compare-price",
  ".rc-accordion-button",
  ".rc-accordion-title",
  ".as-globalfooter-sosumi",
  ".rf-bfe-complimentary-title",
  ".rf-bfe-dimension-footer",
  ".as-carrierpromotion-ribboncontainer",
  ".rf-bfe-availabilitybanner",
  ".price-point",
];

const PROPS = [
  "fontSize",
  "fontWeight",
  "lineHeight",
  "color",
  "backgroundColor",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "borderRadius",
  "display",
  "textAlign",
  "maxWidth",
  "width",
  "fontFamily",
];

const browser = await chromium.launch({ headless: true });
const results = {};
for (const [name, url] of [
  ["apple", "https://www.apple.com/shop/buy-iphone/iphone-18-pro"],
  ["mine", "http://localhost:3001/us/shop/goto/buy_iphone/iphone_18_pro"],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(5000);
  results[name] = await page.evaluate(
    ({ sels, props }) => {
      const o = {};
      for (const s of sels) {
        const e = document.querySelector(s);
        if (!e) {
          o[s] = null;
          continue;
        }
        const c = getComputedStyle(e);
        const r = {};
        for (const p of props) r[p] = c[p];
        o[s] = r;
      }
      return o;
    },
    { sels: SELS, props: PROPS }
  );
  await page.close();
}

let total = 0;
for (const s of SELS) {
  const a = results.apple[s];
  const m = results.mine[s];
  if (!a || !m) {
    console.log(`### ${s}: apple=${a ? "ok" : "MISSING"} mine=${m ? "ok" : "MISSING"}`);
    continue;
  }
  const diffs = [];
  for (const p of PROPS) {
    if (a[p] !== m[p]) diffs.push(`${p}: [${a[p]}] vs [${m[p]}]`);
  }
  if (diffs.length) {
    total += diffs.length;
    console.log(`### ${s} (${diffs.length})`);
    for (const d of diffs) console.log(`  ${d}`);
  }
}
console.log("TOTAL DIFFS: " + total);
await browser.close();
