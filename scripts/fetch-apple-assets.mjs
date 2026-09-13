/**
 * School fair-use asset fetcher.
 * Downloads the SAME images Apple.com serves (JPG/PNG posters + start/endframes)
 * plus attempts the inline-media MP4s for pic->video->pic heroes.
 *
 * Usage: npm run fetch:apple
 * Output: public/apple/... (gitignored except .gitkeep)
 * Source credit: © Apple Inc., apple.com — educational clone only, do not redistribute.
 */
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "apple");
const BASE = "https://www.apple.com";

/**
 * Image stems expanded to Apple's full picture ladders:
 * large, large_2x, largetall, largetall_2x, medium, medium_2x,
 * mediumtall, mediumtall_2x, small, small_2x (404s tolerated per file).
 */
const SIZES = ["large", "large_2x", "largetall", "largetall_2x", "medium", "medium_2x", "mediumtall", "mediumtall_2x", "small", "small_2x"];

const IMAGE_STEMS = [
  // Homepage heroes — iPhone 18 Pro (video tile)
  ["/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro_preorder_startframe__c3rgztqlhniq", "jpg"],
  ["/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro_preorder__dd68unjbzswi", "jpg"],
  // iPhone Duo (static hero tile)
  ["/v/homepage/images/iphone-duo/a/hero_iphone_duo_announce__fh4u8yzndpe2", "jpg"],
  // Apple Watch Series 12 (full-width SPLIT tile — logo headline + hero image)
  ["/v/homepage/images/apple-watch-series-12/a/hero_apple_watch_series_12_preorder__cv2wd7ow8926", "jpg"],
  ["/v/homepage/images/logos/apple-watch-series-12/a/hero_logo_apple_watch_series_12__eze8r897c5me", "png"],
  // Apple Upgrade (PROMO grid tile, LIGHT theme, logo headline + promo video)
  ["/v/homepage/images/apple-upgrade/a/promo_apple_upgrade_startframe__e9bf3nb054ae", "jpg"],
  ["/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e", "jpg"],
  ["/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem", "png"],
  // Promo tiles
  ["/v/homepage/images/carriers/a/promo_carriers__bkbchi56n5qq", "jpg"],
  ["/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4_preorder__fvnta8sy0wa6", "jpg"],
  ["/v/homepage/images/logos/apple-watch-ultra-4/a/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq", "png"],
  ["/v/homepage/images/airpods-5/a/promo_airpods_5_preorder__lydvte0llb6i", "jpg"],
  ["/v/homepage/images/macbook-air-m5/a/promo_macbook_air_m5__e5xk2yysqiie", "jpg"],
  ["/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy", "jpg"],
  ["/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia", "png"],
  // TV gallery badge
  ["/v/home/cj/images/tv-gallery/logo_hero_light__d7t8cya4x26a_small", "png"],
];

const IMAGES = [];
for (const [stem, ext] of IMAGE_STEMS) {
  if (stem.endsWith("_small")) {
    IMAGES.push(`${stem}.${ext}`, `${stem}_2x.${ext}`);
  } else {
    for (const s of SIZES) IMAGES.push(`${stem}_${s}.${ext}`);
  }
}

const VIDEO_FILES = [
  "large.mp4",
  "large_2x.mp4",
  "medium.mp4",
  "medium_2x.mp4",
  "small.mp4",
  "small_2x.mp4",
  // Tall-viewport framings (Apple HpViewport: largetall/mediumtall).
  // Hero tile serves them; promo tile 404s them (probe-verified) — misses are skipped.
  "largetall.mp4",
  "largetall_2x.mp4",
  "mediumtall.mp4",
  "mediumtall_2x.mp4",
];

// Inline-media video basepaths found by inspecting apple.com HTML:
//  - iPhone 18 Pro: full-width HERO, tall framings served (largetall/mediumtall).
//  - Apple Upgrade: PROMO grid tile, tall framings 404 (promo tiles don't serve them).
const VIDEO_BASES = [
  { base: "/105/media/us/home/2026/6f46e780-4ab4-4688-915a-7aa0694378e3/anim/hero/", files: VIDEO_FILES },
  { base: "/105/media/us/home/2026/abb2ec52-6e62-4771-84e4-d1e689324d6d/anim/promo/", files: VIDEO_FILES.filter((f) => !f.includes("tall")) },
];

async function dl(urlPath) {
  const url = urlPath.startsWith("http") ? urlPath : BASE + urlPath;
  const rel = urlPath.replace(/^https?:\/\/[^/]+/, "");
  const out = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  if (fs.existsSync(out) && fs.statSync(out).size > 1000) {
    console.log("skip", rel);
    return "skip";
  }
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Referer: "https://www.apple.com/",
      },
    });
    if (!res.ok) {
      console.log(`miss ${res.status} ${rel}`);
      return "miss";
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 300) {
      console.log(`tiny ${rel}`);
      return "miss";
    }
    fs.writeFileSync(out, buf);
    console.log(`saved ${(buf.length / 1024).toFixed(0)}kb ${rel}`);
    return "saved";
  } catch (e) {
    console.log(`err ${rel} ${e.message}`);
    return "err";
  }
}

const results = { saved: 0, miss: 0, skip: 0 };
for (const img of IMAGES) {
  const r = await dl(img);
  results[r === "saved" ? "saved" : r === "skip" ? "skip" : "miss"]++;
}
for (const { base, files } of VIDEO_BASES) {
  for (const f of files) {
    const r = await dl(base + f);
    results[r === "saved" ? "saved" : r === "skip" ? "skip" : "miss"]++;
  }
}
// .gitkeep so dir exists on fresh clone
fs.writeFileSync(path.join(OUT, ".gitkeep"), "");
console.log(results);
console.log("Done. Educational fair-use only — © Apple Inc. Do not redistribute.");
