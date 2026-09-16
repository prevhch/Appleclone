import { readFile } from "node:fs/promises";

const HAR = "public/apple/har/iphone-18-pro-buy/html/index.html";

const CSS: Array<[string, string]> = [
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-globalelements-2.25.0-4bbf8/dist/ac-globalnav.css", "/apple/har/iphone-18-pro-buy/css/live-1-ac-globalnav.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-external-1.74.1-85ac2/dist/us/external.css", "/apple/har/iphone-18-pro-buy/css/live-2-ac-external.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-vendor-1.36.0-38108/dist/common-css@1.3.3/dist/common.css", "/apple/har/iphone-18-pro-buy/css/live-3-common-vendor.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/static-resources/rs-iphone-2.40.3-c694b/dist/step1evolution.css", "/apple/har/iphone-18-pro-buy/css/live-4-step1evolution.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/Catalog/global/css/dd/buy-flow/iphone.css", "/apple/har/iphone-18-pro-buy/css/live-5-buy-flow-iphone.built.css"],
  ["https://store.storeimages.cdn-apple.com/4982/store.apple.com/shop/Catalog/global/css/web/fee/buy-flow/iphone/as-iphone-18pro.css", "/apple/har/iphone-18-pro-buy/css/live-6-as-iphone-18pro.built.css"],
];

export const metadata = { title: "Shop iPhone 18 Pro and iPhone 18 Pro Max - Apple" };
export const dynamic = "force-static";

export default async function BuyPage() {
  let html = (await readFile(HAR)).toString("utf8");
  for (const [live, local] of CSS) html = html.split(live).join(local);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const head = html.replace(/<head>([\s\S]*?)<\/head>/, (_m, inner: string) => {
    const meta = `<meta name="description" content="Buy iPhone 18 Pro and iPhone 18 Pro Max with trade-in. Get 3 free months of AppleCare+. Choose carrier, color, storage, and trade-in before checkout.">`;
    return `<head>${inner.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)}${meta}</head>`;
  });

  return (
    <html lang="en-US">
      <head>{head.replace(/<head>([\s\S]*?)<\/head>/, "$1")}</head>
      <body dangerouslySetInnerHTML={{ __html: head.replace(/^[\s\S]*?<body>/, "").replace(/<\/body>[\s\S]*?<\/html>/, "") }} />
    </html>
  );
}
