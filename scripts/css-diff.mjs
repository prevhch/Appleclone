import { createRequire } from "node:module";

const require = createRequire(process.cwd() + "/package.json");
const { chromium } = require("playwright");

const SELS = [
  ".rf-bfe-header-wrapper",
  ".rf-bfe-header h1",
  ".rf-bfe-header-price",
  ".rf-bfe-gallery-image",
  ".rf-bfe-dimension-header",
  ".form-selector-label",
  ".form-selector-title",
  ".colornav-swatch",
  ".colornav-label",
  ".rf-bfe-summary-price-title",
  ".rf-bfe-stickybar",
  ".dd-compare-header",
  ".rc-accordion-button",
  ".as-globalfooter-sosumi",
  ".rf-bfe-dimension-footer",
  ".rf-bfe-config-options",
  ".rf-bfe-gallery-info-content",
  ".rf-bfe-header-plusicon",
  ".rf-bfe-complimentary-title",
  ".dd-compare-price",
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
  "borderRadius",
  "display",
  "textAlign",
];

const browser = await chromium.launch({ headless: true });
const results = {};
for (const [name, url] of [
  ["apple", "https://www.apple.com/shop/buy-iphone/iphone-18-pro"],
  ["mine", "http://localhost:3002/us/shop/goto/buy_iphone/iphone_18_pro"],
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

for (const s of SELS) {
  const a = results.apple[s];
  const m = results.mine[s];
  if (!a || !m) {
    console.log(`### ${s}: apple=${a ? "ok" : "MISSING"} mine=${m ? "ok" : "MISSING"}`);
    continue;
  }
  const diffs = [];
  for (const p of PROPS) {
    if (a[p] !== m[p]) diffs.push(`${p}: apple=${a[p]} mine=${m[p]}`);
  }
  if (diffs.length) {
    console.log(`### ${s}`);
    for (const d of diffs) console.log(`  ${d}`);
  }
}
await browser.close();
