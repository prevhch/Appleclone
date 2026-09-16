import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const BASE = process.env.APPLE_URL || "https://stirring-nasturtium-f1d914.netlify.app";
const PATH = "/us/shop/goto/buy_iphone/iphone_18_pro";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const status = await page.goto(BASE + PATH, { waitUntil: "networkidle", timeout: 120000 });
const title = await page.title();
const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

const imgs = await page.evaluate(() =>
  [...document.querySelectorAll("main img")]
    .map((img) => ({
      basename: img.currentSrc.split("/media/")[1] || img.src.split("/media/")[1] || img.src.slice(-40),
      naturalWidth: img.naturalWidth,
      complete: img.complete,
    }))
    .filter((i) => i.basename)
);

const result = {
  url: BASE + PATH,
  http: status.status(),
  title,
  bodyHeight,
  imgs,
};

writeFileSync("/tmp/live-gate.json", JSON.stringify(result, null, 1));
console.log(JSON.stringify({ ...result, imgs: result.imgs.map((i) => ({ ...i, ok: i.naturalWidth > 0 })) }, null, 1));

await browser.close();
