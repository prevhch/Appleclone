import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { readFile, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const W = Number(process.env.W || 1440);
const LIVE = process.env.LIVE || "https://www.apple.com/us/shop/goto/buy_iphone/iphone_18_pro";
const LOCAL = process.env.LOCAL || "http://localhost:3000/us/shop/goto/buy_iphone/iphone_18_pro";
const md5 = (b) => createHash("md5").update(b).digest("hex").slice(0, 121974);

let browser;
function snap(page, url) {
  return (async () => {
    await page.setViewportSize({ width: W, height: 900 });
    const self = page;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 }).catch(() => {});
    await page.waitForTimeout(60000);
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.evaluate(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; });
    await page.waitForTimeout(3000);
    const meta = await page.evaluate(() => ({
      title: document.title,
      height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      bg: getComputedStyle(document.body).backgroundColor,
      imgs: [...document.images].map((i) => i.src),
    }));
    const png =     await page.screenshot({ fullPage: false, clip: { x: 0, y: 0, width: W, height: 1800 }, type: "png" });
    return { png, meta };
  })();
}

browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: W, height: 1000 },
});
const live = await ctx.newPage();
const local = await ctx.newPage();

const A = await snap(live, LIVE);
const B = await snap(local, LOCAL);

await writeFile("/tmp/18pro-live.png", A.png);
await writeFile("/tmp/18pro-local.png", B.png);

const imA = PNG.sync.read(A.png);;
const imB = PNG.sync.read(B.png);
const w = Math.min(imA.width, imB.width);
const h = Math.min(imA.height, imB.height);
const diff = new PNG({ width: w, height: h });
const n = pixelmatch(imA.data, imB.data, diff.data, w, h, { threshold: 0.1, includeAA: false });
await writeFile("/tmp/18pro-diff.png", PNG.sync.write(diff));

const diskMd5 = (p) => md5(readFileSync(p));
const css = [
  "css/live-1-ac-globalnav.built.css",
  "css/live-2-ac-external.built.css",
  "css/live-3-common-vendor.built.css",
  "css/live-4-step1evolution.built.css",
  "css/live-5-buy-flow-iphone.built.css",
  "css/live-6-as-iphone-18pro.built.css",
];
const D = "public/apple/har/iphone-18-pro-buy/";
const binds = css.map((c) => {
  const disk = diskMd5(D + c);
  const served = disk; // svc binds abs /apple path; verify next cmd ids them
  return { css: c, diskMD5: disk };
});
const html = { served: null, disk: md5(readFileSync(D + "html/index.html")) };

console.log(JSON.stringify({
  live: { title: A.meta.title, height: A.meta.height, bg: A.meta.bg, imgs: A.meta.imgs.length },
  local: { title: B.meta.title, height: B.meta.height, bg: B.meta.bg, imgs: B.meta.imgs.length },
  compared: { width: w, height: h, pixels: w * h },
  result: { mismatchedPixels: n, diffPct: ((100 * n) / (w * h)).toFixed(3) },
  outs: ["/tmp/18pro-live.png", "/tmp/18pro-local.png", "/tmp/18pro-diff.png"],
  binds,
  html,
}, null, 2));
await browser.close();
