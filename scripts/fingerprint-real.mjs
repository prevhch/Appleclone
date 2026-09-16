import { readFileSync } from "node:fs";

// Fingerprint the REAL vendored Apple HTML: ordered structural skeleton
// of the main content regions (tags + significant classes only).
const h = readFileSync(
  "public/apple/har/iphone-18-pro-buy/html/index.html",
  "utf8"
);

const body = h.slice(h.indexOf("<body"), h.indexOf("</body>"));
const clean = body
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<style[\s\S]*?<\/style>/g, "");

// walk tags, keep section/div/fieldset/ul/li/h1/h2/h3/img with class + key attrs
const out = [];
const re = /<(section|div|fieldset|ul|li|h1|h2|h3|img|button|a|p|span)([^>]{0,300})>/g;
let m;
const SKIP = /globalnav|analytics|flyout|submenu|searchresults|bag-|curtain|placeholder|echo|metrics|graffiti/i;
while ((m = re.exec(clean))) {
  const [full, tag, attrs] = m;
  if (SKIP.test(full)) continue;
  const cls = (attrs.match(/class="([^"]{1,120})"/) || [])[1] || "";
  const id = (attrs.match(/id="([^"]{1,40})"/) || [])[1] || "";
  if (!cls && !id) continue;
  const short = cls
    .split(" ")
    .filter(
      (c) =>
        /^(rf-|as-|dd-|rc-|colornav|form-|t-|badge|row|column|dotnav|paddlenav|visuallyhidden|faq-|fwl|more|badge)/.test(
          c
        )
    )
    .slice(0, 4)
    .join(".");
  if (!short && !id) continue;
  out.push(`${tag}${id ? "#" + id : ""}${short ? "." + short : ""}`);
}

console.log(JSON.stringify({ total: out.length }, null, 0));
// print compact ordered skeleton, dedup consecutive repeats
const skel = [];
for (const s of out) {
  if (skel[skel.length - 1] !== s) skel.push(s);
}
console.log(skel.slice(0, 120).join("\n"));
console.log("... total unique-ordered=" + skel.length);
