import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const BASE = process.env.APPLE_URL || "https://stirring-nasturtium-f1d914.netlify.app";
const PATH = "/us/shop/goto/buy_iphone/iphone_18_pro";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const cssStatus = new Map();
page.on("response", (r) => {
  if (r.url().includes(".css")) cssStatus.set(r.url().split("/css/")[1]?.split(".")[0], r.status());
});

await page.goto(BASE + PATH, { waitUntil: "networkidle", timeout: 120000 });

const probe = await page.evaluate(() => {
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { font: cs.fontFamily.slice(0, 60), bg: cs.backgroundColor, color: cs.color, radius: cs.borderRadius };
  };
  return {
    hero: pick(".rf-hcard-hero"),
    tile: pick(".rf-aos-step2 > div > div"),
    headline: pick(".typography-headline, h1, h2"),
    h: document.querySelector("h1")?.textContent,
    cssLinks: [...document.querySelectorAll('link[rel="stylesheet"]')].map((l) => l.href.split("/css/")[1]?.split("?")[0]?.slice(0, 45)),
  };
});

console.log(JSON.stringify({ cssStatus: [...cssStatus], ...probe }, null, 1));
await browser.close();
