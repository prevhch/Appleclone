import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const BASE = "https://stirring-nasturtium-f1d914.netlify.app";
const PATH = "/us/shop/goto/buy_iphone/iphone_18_pro";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const badReq = [];
page.on("response", (r) => {
  if (r.status() >= 400) badReq.push({ status: r.status(), url: r.url().slice(-70) });
});

await page.goto(BASE + PATH, { waitUntil: "networkidle", timeout: 120000 });

const probe = await page.evaluate(() => {
  const sheets = [...document.styleSheets]
    .map((s) => {
      let rules = 0;
      try { rules = s.cssRules.length; } catch { rules = -1; }
      return { href: (s.href || "").split("/css/")[1]?.slice(0, 40) || "(inline)", rules };
    });
  const font = getComputedStyle(document.body).fontFamily.slice(0, 40);
  const rows = [...document.querySelectorAll("h1, h2, .typography-headline")]
    .slice(0, 6)
    .map((el) => ({
      cls: (el.className || "").toString().slice(0, 30),
      fontSize: getComputedStyle(el).fontSize,
      color: getComputedStyle(el).color,
    }));
  return { sheets, font, rows };
});

console.log(JSON.stringify({ badReq, probe }, null, 1));
await browser.close();
