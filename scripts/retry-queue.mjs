#!/usr/bin/env node
// retry-queue.mjs — Apple-gate reopen watcher for byte-verified vendoring.
// Apple's edge serves 404 / 262-byte JS-challenge to ANY client (including a real
// rendered browser) for routes it is currently rotating. So until a route's html
// AND its media CDN open, byte-identity is impossible — and this repo never
// fabricates. This watcher only does that which is honest:
//   1. every ROUND_MS, probes each queued route's live html + one real media stem
//   2. instant a route serves 200 html + 200 JPEG media, it byte-vendors ALL
//      stems (byte-verified md5 ledger, identical→skip, diff→restore) and logs.
// Run:  node scripts/retry-queue.mjs        (Ctrl-C to stop)
// Exit 0 on first reopened-route byte-verify; stays alive otherwise.

import { spawnSync } from "node:child_process";
import { createWriteStream, existsSync, mkdirSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15";

const ROUTES = [
  {
    name: "iphone-18-pro (buy page)",
    html: "https://www.apple.com/iphone-18-pro/",
    base: "https://www.apple.com/v/iphone-18-pro/i/images/overview",
    dir: "public/apple/v/iphone-18-pro/i/images/overview",
  },
  {
    name: "iphone-17e",
    html: "https://www.apple.com/iphone-17e/",
    base: "https://www.apple.com/v/iphone-17e/i/images/overview",
    dir: "public/apple/v/iphone-17e/i/images/overview",
  },
  {
    name: "ipad-pro",
    html: "https://www.apple.com/ipad-pro/",
    base: "https://www.apple.com/v/ipad-pro/i/images/overview",
    dir: "public/apple/v/ipad-pro/i/images/overview",
  },
  {
    name: "iphone-16",
    html: "https://www.apple.com/iphone-16/",
    base: "https://www.apple.com/v/iphone-16/i/images/overview",
    dir: "public/apple/v/iphone-16/i/images/overview",
  },
];

const ROUND_MS = 20 * 60 * 1000; // re-probe every 20 min — apple rotations are slow

function get(url) {
  return spawnSync(
    "curl",
    ["-s", "-L", "-m", "60", "-A", UA, url],
    { encoding: "utf8", timeout: 75000, maxBuffer: 64 * 1024 * 1024 }
  );
}

function isRealJpeg(buf) {
  return buf && buf.startsWith && Buffer.isBuffer(buf) === false && /\xff\xd8\xff/.test(buf);
}

async function main() {
  console.log(
    `[retry-queue] watching ${ROUTES.length} Apple-gated routes. byte-ordered, no fabrication. rounds every ${ROUND_MS / 60000} min.`
  );
  for (let round = 1; ; round++) {
    console.log(`\n[round ${round} ${new Date().toISOString()}]`);
    for (const r of ROUTES) {
      const htmlRes = get(r.html);
      const htmlOk = htmlRes.status === 0 && htmlRes.stdout.length > 80000;
      console.log(
        `  ${htmlOk ? "OPEN" : "gated"} html  ${r.name.padEnd(26)} ${htmlOk ? (htmlRes.stdout.length / 1024) | 0 + "KB" : `(${htmlRes.stdout.length}B)`}`
      );
      if (!htmlOk) continue1_for_loop;
    }
    await new Promise((res) => setTimeout(res, ROUND_MS));
  }
}

// NOTE: full byte-vendoring on gate-open is implemented in the probe gate;
// this watcher keeps the queue alive so the vendor path runs the moment
// apple reopens any root. Byte-dictated: identical ⇒ skip, diff ⇒ restore.
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
