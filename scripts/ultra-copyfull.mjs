import { chromium } from "/home/orjinameh/Documents/apple/node_modules/playwright/index.mjs";
const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", headless: true, args: ["--no-sandbox", "--ignore-certificate-errors"] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("https://www.apple.com/apple-watch-ultra-4/", { waitUntil: "domcontentloaded", timeout: 60000 });
await p.waitForTimeout(2500);
const out = await p.evaluate(() => {
  const res = [];
  for (const s of document.querySelectorAll("main section")) {
    const id = s.id || s.classList[1] || "(hero)";
    const texts = [...s.querySelectorAll("h2,h3,p")].map(e => e.tagName + "|" + e.textContent.replace(/\s+/g, " ").trim()).filter(x => x.split("|")[1]);
    if (texts.length) res.push("## " + id + "\n" + texts.join("\n"));
  }
  return res.join("\n\n");
});
console.log(out);
await b.close();