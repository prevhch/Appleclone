import { chromium } from "playwright";

const CHROME =
  "/home/codespace/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15";

const b = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});

const p = await b.newPage({ userAgent: UA, locale: "en-US" });
const css = new Set();
p.on("response", async (r) => {
  try {
    const u = r.url();
    if (!u.includes("apple.com")) return;
    const ct = (r.headers()["content-type"] || "").toLowerCase();
    if (!ct.includes("text/css")) return;
    const m = u.match(/\/([^/?#]+\.css)/);
    if (m) css.add(m[1]);
  } catch {}
});

console.log("  rendering live buy-18-pro, capturing real css …");
await p.goto("https://www.apple.com/us/shop/buy-iphone/iphone-18-pro/", {
  waitUntil: "domcontentloaded",
  timeout: 120000,
});
await p.waitForTimeout(15000);
console.log("  live_css_bytes_observed=" + css.size);
for (const c of css) console.log("    + " + c);
await b.close();
