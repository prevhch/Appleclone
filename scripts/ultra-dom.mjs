import { chromium } from "/home/orjinameh/Documents/apple/node_modules/playwright/index.mjs";
const url = process.argv[2] || "https://www.apple.com/iphone-duo/";
const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", headless: true, args: ["--autoplay-policy=no-user-gesture-required", "--no-sandbox", "--ignore-certificate-errors"] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
await p.waitForTimeout(2500);
const out = await p.evaluate(() => {
  const res = [];
  const els = document.querySelectorAll("main section");
  for (const s of els) {
    const id = s.id || "";
    const classes = s.className || "";
    const copyEl = s.querySelector("h2,h3");
    const headline = copyEl ? copyEl.textContent.replace(/\s+/g, " ").trim() : "";
    const videos = [...s.querySelectorAll("video")].map(v => ({ src: v.src?.split("?")[0], loop: v.loop, playsInline: v.playsInline, muted: v.muted, base: v.getAttribute("data-inline-media-basepath") }));
    const pics = [...s.querySelectorAll("picture img")].slice(0, 8).map(i => i.src?.split("?")[0]);
    const imgs = [...s.querySelectorAll("img")].slice(0, 8).map(i => i.src?.split("?")[0]);
    res.push({ id, headline, classes: classes.slice(0, 90), videos, pics, imgs: imgs.filter(Boolean) });
  }
  return res;
});
for (const r of out) {
  console.log(`# ${r.id} | ${r.headline}`);
  if (r.classes) console.log("  cls:", r.classes);
  for (const v of r.videos) console.log("  video:", v.base || v.src, "loop=" + v.loop, "pi=" + v.playsInline, "mute=" + v.muted);
  for (const i of r.pics) console.log("  pic:", i);
}
await b.close();
