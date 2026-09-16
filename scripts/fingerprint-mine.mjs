import { createRequire } from "node:module";

const require = createRequire(process.cwd() + "/package.json");
const { chromium } = require("playwright");

const url = process.argv[2] || "http://localhost:3001/us/shop/goto/buy_iphone/iphone_18_pro";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
await page.waitForTimeout(4000);

const skel = await page.evaluate(() => {
  const out = [];
  const SKIP = /globalnav|analytics|flyout|submenu|searchresults|bag-|curtain|placeholder|Navbar|navbar/i;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = walker.nextNode())) {
    const tag = n.tagName.toLowerCase();
    if (!/^(section|div|fieldset|ul|li|h1|h2|h3|img|button|a|p)$/.test(tag)) continue;
    const cls = (n.className.baseVal !== undefined ? "" : n.className.toString()).trim();
    const id = n.id || "";
    if (SKIP.test(tag + cls + id)) continue;
    const short = cls
      .split(/\s+/)
      .filter((c) =>
        /^(rf-|as-|dd-|rc-|colornav|form-|t-|badge|row|column|dotnav|paddlenav|visuallyhidden|faq-|fwl|more|badge|typography|price|nowrap)/.test(c)
      )
      .slice(0, 4)
      .join(".");
    if (!short && !id) continue;
    const s = `${tag}${id ? "#" + id : ""}${short ? "." + short : ""}`;
    if (out[out.length - 1] !== s) out.push(s);
  }
  return out;
});

console.log(skel.join("\n"));
console.log("---total=" + skel.length);
await browser.close();
