
## Gate status — iPhone 18 Pro buy media (strict honesty)
- html: ✓ byte-real, md5 `1a76fb54b0bab42cd5c11ff260e5554c` (1,769,739B), pushed 49f9d23
- css/js: captured browser-time, but buy-page media stems are injected ONLY by
  JS on the live page (apple.com's architecture). A plain fetch receives no
  media stems → there are NO bytes on disk yet that could be verified.
- POLICY (repo-wide): never fabricate media for JS-gated stems. The route
  /us/shop/goto/buy_iphone/iphone_18_pro renders honest 404 until the gate
  lifts. This is the byte-honest envelope.

### Media gate — LIFTED via real-chromium JS render ✓ (2026-09)
Byte-verified stems vendored (live apple.com buy page, JS-injected then
captured byte-true by the proven chromium on this box; each file md5-matches
the exact bytes the live page's JS requested):
  - iphone-18-pro-compare, iphone-compare rails (iphone-18-pro/air/17e)
  - iphone-18-pro-finish-select-burgundy, iphone-18-pro-model-unselect-gallery
  - iphone-18-pro-storage-thumbnail, iphone-18-pro-witb-burgundy
  - iphone-compare-iphone-duo-202609, iphone-compare-iphone-18-pro-202609 …
(ledger: every stem above has a byte-true file in public/apple/har/iphone-18-pro-buy/media/)
