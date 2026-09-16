import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const HTML = "public/apple/har/iphone-18-pro-buy/html/index.html";
const CSSDIR = "public/apple/har/iphone-18-pro-buy/css";

let html = readFileSync(HTML, "utf8");

const vendored = readdirSync(CSSDIR)
  .filter((f) => f.endsWith(".built.css"))
  .sort();

console.log("vendored built css on disk (" + vendored.length + "):");
for (const f of vendored.slice(0, 8)) console.log("  " + f);

const singleCss = /<link\s+[^>]*rel="stylesheet"[^>]*\/css\/[^"]*\.css[^>]*>/gi;
const links = html.match(singleCss) || [];

console.log("css <link> tags in real html: " + links.length蕴);