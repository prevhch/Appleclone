import { chromium } from "/home/orjinameh/Documents/apple/node_modules/playwright/index.mjs";
const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--autoplay-policy=no-user-gesture-required"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const failed = [];
page.on("requestfailed", (r) => failed.push(`${r.failure()?.errorText} ${r.url()}`));
page.on("response", (r) => {
  if (r.status() >= 400) failed.push(`HTTP ${r.status()} ${r.url()}`);
});

await page.goto("http://localhost:3000/apple-watch-series-12", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

const imgBroken = await page.$$eval("img", (imgs) =>
  imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute("src"))
);

const vids = await page.$$eval("video", (vs) =>
  vs.map((v) => ({
    src: v.src,
    rs: v.readyState,
    paused: !!v.paused,
    loop: v.loop,
    ended: !!v.ended,
    w: v.videoWidth,
  }))
);

console.log("FAILED REQUESTS:");
console.log([...new Set(failed)].filter((f) => !f.includes("entity-footer")).join("\n"));

console.log("\nBROKEN IMAGES:", imgBroken.length ? JSON.stringify(imgBroken, null, 1) : "none");

console.log("\nVIDEOS:");
for (const v of vids) console.log(`${v.rs === 4 ? "OK" : "RS" + v.rs}  rs4=${v.rs} loop=${v.loop} paused=${v.paused}${v.ended ? " ENDED" : ""} ${v.src.split("/anim/")[1] ?? v.src}`);

// scroll through page to trigger all cues, then re-check end states
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
});
await page.waitForTimeout(3000);
const vids2 = await page.$$eval("video", (vs) =>
  vs.map((v) => ({ rs: v.readyState, paused: !!v.paused, ended: !!v.ended, cur: v.currentTime, loop: v.loop }))
);
console.log("\nAFTER SCROLL:");
for (const v of vids2)
  console.log(`rs4=${v.rs} loop=${v.loop} paused=${v.paused}${v.ended ? " ENDED" : ""} cur=${v.cur.toFixed(1)}`);

await page.screenshot({ path: "scripts/shot_watch_top.png" });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
await page.waitForTimeout(500);
await page.screenshot({ path: "scripts/shot_watch_mid.png" });
await browser.close();