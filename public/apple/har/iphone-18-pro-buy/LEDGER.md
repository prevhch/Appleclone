
## Gate status — iPhone 18 Pro buy media (strict honesty)
- html: ✓ byte-real, md5 `1a76fb54b0bab42cd5c11ff260e5554c` (1,769,739B), pushed 49f9d23
- css/js: captured browser-time, but buy-page media stems are injected ONLY by
  JS on the live page (apple.com's architecture). A plain fetch receives no
  media stems → there are NO bytes on disk yet that could be verified.
- POLICY (repo-wide): never fabricate media for JS-gated stems. The route
  /us/shop/goto/buy_iphone/iphone_18_pro renders honest 404 until the gate
  lifts. This is the byte-honest envelope.
