import { readdirSync, statSync, readFileSync } from "node:fs";

const MEDIA = "public/apple/har/iphone-18-pro-buy/media";

const files = readdirSync(MEDIA);

function base(name) {
  return name.replace(/\.(jpe?g|png|webp|avif|bin)$/i, "");
}

function isLegal(name) {
  return !/[?#&]/.test(name);
}

const legal = files.filter(isLegal);
const first10 = legal
  .slice(0, 200)
  .map((f) => ({ name: f, base: base(f), bytes: statSync(`${MEDIA}/${f}`).size }))
  .sort((a, b) => b.bytes - a.bytes)
  .slice(0, 10);

console.log(
  JSON.stringify(
    {
      on_disk: files.length,
      legal: legal.length,
      legal_samples: first10,
    },
    null,
    1
  )
);
